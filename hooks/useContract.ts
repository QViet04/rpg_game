"use client";

import { useState } from "react";
import {
  useCurrentAccount,
  useIotaClient,
  useSignAndExecuteTransaction,
} from "@iota/dapp-kit";
import { Transaction } from "@iota/iota-sdk/transactions";
import { useNetworkVariable } from "@/lib/config";

// Cập nhật tên module và hàm sang Tiếng Anh
export const CONTRACT_MODULE = "hero_shop";
export const CONTRACT_METHODS = {
  CREATE_HERO: "create_hero", 
  FORGE_SWORD: "forge_sword", 
  EQUIP_SWORD: "equip_sword", 
} as const;

export const useContract = () => {
  const currentAccount = useCurrentAccount();
  const packageId = useNetworkVariable("packageId");
  const iotaClient = useIotaClient();
  const { mutate: signAndExecute, isPending } = useSignAndExecuteTransaction();

  const [heroId, setHeroId] = useState<string | null>(null);
  const [swordId, setSwordId] = useState<string | null>(null);
  const [hash, setHash] = useState<string | undefined>();
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const executeTransaction = (tx: Transaction, onFoundId: (id: string) => void) => {
      setIsLoading(true);
      setError(null);
      setHash(undefined);
      signAndExecute(
        { transaction: tx as never },
        {
          onSuccess: async ({ digest }) => {
            setHash(digest);
            try {
              const { effects } = await iotaClient.waitForTransaction({
                digest, options: { showEffects: true },
              });
              const createdObj = effects?.created?.[0]?.reference?.objectId;
              if (createdObj) onFoundId(createdObj);
            } catch (e) { console.error(e); } 
            finally { setIsLoading(false); }
          },
          onError: (err) => {
            setError(err instanceof Error ? err : new Error("Unknown Error"));
            setIsLoading(false);
          },
        }
      );
  };

  const createHero = (name: string) => {
    if (!packageId) return;
    const tx = new Transaction();
    tx.moveCall({
      target: `${packageId}::${CONTRACT_MODULE}::${CONTRACT_METHODS.CREATE_HERO}`,
      arguments: [tx.pure.string(name)],
    });
    executeTransaction(tx, (id) => setHeroId(id));
  };

  // Hàm Rèn Kiếm nhận 4 tham số
  const forgeSword = (strength: number, agility: number, hp: number, crit: number) => {
    if (!packageId) return;
    const tx = new Transaction();
    tx.moveCall({
      target: `${packageId}::${CONTRACT_MODULE}::${CONTRACT_METHODS.FORGE_SWORD}`,
      arguments: [
          tx.pure.u64(strength),
          tx.pure.u64(agility),
          tx.pure.u64(hp),
          tx.pure.u64(crit)
      ],
    });
    executeTransaction(tx, (id) => setSwordId(id));
  };

  const equipSword = () => {
    if (!packageId || !heroId || !swordId) return;
    const tx = new Transaction();
    tx.moveCall({
      target: `${packageId}::${CONTRACT_MODULE}::${CONTRACT_METHODS.EQUIP_SWORD}`,
      arguments: [tx.object(heroId), tx.object(swordId)],
    });
    executeTransaction(tx, () => setSwordId(null)); 
  };

  return { heroId, swordId, hash, error, isLoading: isLoading || isPending, createHero, forgeSword, equipSword };
};