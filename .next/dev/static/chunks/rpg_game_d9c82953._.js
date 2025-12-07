(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/rpg_game/components/Wallet-connect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalletConnect",
    ()=>WalletConnect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rpg_game/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rpg_game/node_modules/@iota/dapp-kit/dist/esm/index.js [app-client] (ecmascript)");
"use client";
;
;
function WalletConnect() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "1rem",
            display: "flex",
            justifyContent: "flex-end"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectButton"], {}, void 0, false, {
            fileName: "[project]/rpg_game/components/Wallet-connect.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/rpg_game/components/Wallet-connect.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = WalletConnect;
var _c;
__turbopack_context__.k.register(_c, "WalletConnect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/rpg_game/hooks/useContract.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONTRACT_METHODS",
    ()=>CONTRACT_METHODS,
    "CONTRACT_MODULE",
    ()=>CONTRACT_MODULE,
    "useContract",
    ()=>useContract
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rpg_game/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rpg_game/node_modules/@iota/dapp-kit/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rpg_game/node_modules/@iota/iota-sdk/dist/esm/transactions/Transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rpg_game/lib/config.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const CONTRACT_MODULE = "hero_shop";
const CONTRACT_METHODS = {
    CREATE_HERO: "create_hero",
    FORGE_SWORD: "forge_sword",
    EQUIP_SWORD: "equip_sword"
};
const useContract = ()=>{
    _s();
    const currentAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentAccount"])();
    const packageId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNetworkVariable"])("packageId");
    const iotaClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIotaClient"])();
    const { mutate: signAndExecute, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignAndExecuteTransaction"])();
    const [heroId, setHeroId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [swordId, setSwordId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hash, setHash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const executeTransaction = (tx, onFoundId)=>{
        setIsLoading(true);
        setError(null);
        setHash(undefined);
        signAndExecute({
            transaction: tx
        }, {
            onSuccess: async ({ digest })=>{
                setHash(digest);
                try {
                    const { effects } = await iotaClient.waitForTransaction({
                        digest,
                        options: {
                            showEffects: true
                        }
                    });
                    const createdObj = effects?.created?.[0]?.reference?.objectId;
                    if (createdObj) onFoundId(createdObj);
                } catch (e) {
                    console.error(e);
                } finally{
                    setIsLoading(false);
                }
            },
            onError: (err)=>{
                setError(err instanceof Error ? err : new Error("Unknown Error"));
                setIsLoading(false);
            }
        });
    };
    const createHero = (name)=>{
        if (!packageId) return;
        const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"]();
        tx.moveCall({
            target: `${packageId}::${CONTRACT_MODULE}::${CONTRACT_METHODS.CREATE_HERO}`,
            arguments: [
                tx.pure.string(name)
            ]
        });
        executeTransaction(tx, (id)=>setHeroId(id));
    };
    // Hàm Rèn Kiếm nhận 4 tham số
    const forgeSword = (strength, agility, hp, crit)=>{
        if (!packageId) return;
        const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"]();
        tx.moveCall({
            target: `${packageId}::${CONTRACT_MODULE}::${CONTRACT_METHODS.FORGE_SWORD}`,
            arguments: [
                tx.pure.u64(strength),
                tx.pure.u64(agility),
                tx.pure.u64(hp),
                tx.pure.u64(crit)
            ]
        });
        executeTransaction(tx, (id)=>setSwordId(id));
    };
    const equipSword = ()=>{
        if (!packageId || !heroId || !swordId) return;
        const tx = new __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$iota$2f$iota$2d$sdk$2f$dist$2f$esm$2f$transactions$2f$Transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transaction"]();
        tx.moveCall({
            target: `${packageId}::${CONTRACT_MODULE}::${CONTRACT_METHODS.EQUIP_SWORD}`,
            arguments: [
                tx.object(heroId),
                tx.object(swordId)
            ]
        });
        executeTransaction(tx, ()=>setSwordId(null));
    };
    return {
        heroId,
        swordId,
        hash,
        error,
        isLoading: isLoading || isPending,
        createHero,
        forgeSword,
        equipSword
    };
};
_s(useContract, "uKo4QQoOiGxEkrcxQ7zWr6eEqrM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNetworkVariable"],
        __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIotaClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSignAndExecuteTransaction"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/rpg_game/components/sample.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rpg_game/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rpg_game/node_modules/@iota/dapp-kit/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$hooks$2f$useContract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rpg_game/hooks/useContract.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rpg_game/node_modules/@radix-ui/themes/dist/esm/components/button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rpg_game/node_modules/@radix-ui/themes/dist/esm/components/container.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$heading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rpg_game/node_modules/@radix-ui/themes/dist/esm/components/heading.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rpg_game/node_modules/@radix-ui/themes/dist/esm/components/text.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__TextField$3e$__ = __turbopack_context__.i("[project]/rpg_game/node_modules/@radix-ui/themes/dist/esm/components/text-field.js [app-client] (ecmascript) <export * as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rpg_game/node_modules/@radix-ui/themes/dist/esm/components/card.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rpg_game/node_modules/@radix-ui/themes/dist/esm/components/flex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rpg_game/node_modules/@radix-ui/themes/dist/esm/components/box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$callout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Callout$3e$__ = __turbopack_context__.i("[project]/rpg_game/node_modules/@radix-ui/themes/dist/esm/components/callout.js [app-client] (ecmascript) <export * as Callout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rpg_game/node_modules/@radix-ui/themes/dist/esm/components/code.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$separator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rpg_game/node_modules/@radix-ui/themes/dist/esm/components/separator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rpg_game/node_modules/@radix-ui/themes/dist/esm/components/grid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rpg_game/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// Radix icons should be imported from the package root so Turbopack can resolve them
var __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rpg_game/node_modules/@radix-ui/react-icons/dist/react-icons.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const SampleIntegration = ()=>{
    _s();
    const currentAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentAccount"])();
    const { createHero, forgeSword, equipSword, heroId, swordId, hash, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$hooks$2f$useContract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContract"])();
    const [heroName, setHeroName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("DragonSlayer");
    // 4 chỉ số mới
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        strength: "100",
        agility: "50",
        hp: "500",
        crit: "25"
    });
    const handleStatChange = (key, value)=>{
        setStats((prev)=>({
                ...prev,
                [key]: value
            }));
    };
    if (!currentAccount) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
            size: "1",
            mt: "6",
            p: "4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$callout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Callout$3e$__["Callout"].Root, {
                color: "amber",
                variant: "surface",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$callout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Callout$3e$__["Callout"].Icon, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InfoCircledIcon"], {}, void 0, false, {
                            fileName: "[project]/rpg_game/components/sample.tsx",
                            lineNumber: 33,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/rpg_game/components/sample.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$callout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Callout$3e$__["Callout"].Text, {
                        size: "3",
                        weight: "bold",
                        children: "Please connect your wallet to play! 💼"
                    }, void 0, false, {
                        fileName: "[project]/rpg_game/components/sample.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/rpg_game/components/sample.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/rpg_game/components/sample.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
        size: "2",
        mt: "6",
        p: "4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$heading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                size: "8",
                mb: "2",
                align: "center",
                style: {
                    background: '-webkit-linear-gradient(45deg, #3086FF, #FF3030)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                },
                children: "⚔️ RPG Dashboard"
            }, void 0, false, {
                fileName: "[project]/rpg_game/components/sample.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                align: "center",
                color: "gray",
                as: "p",
                mb: "5",
                children: "Manage your Hero and Equipment on-chain"
            }, void 0, false, {
                fileName: "[project]/rpg_game/components/sample.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$separator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                my: "4",
                size: "4"
            }, void 0, false, {
                fileName: "[project]/rpg_game/components/sample.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                direction: "column",
                gap: "5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        size: "3",
                        variant: "classic",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                            direction: "column",
                            gap: "3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$heading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                                    size: "4",
                                    color: "blue",
                                    children: "🦸 Step 1: Summon Hero"
                                }, void 0, false, {
                                    fileName: "[project]/rpg_game/components/sample.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                                    gap: "3",
                                    align: "end",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                            style: {
                                                flexGrow: 1
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                    size: "2",
                                                    weight: "bold",
                                                    mb: "1",
                                                    as: "div",
                                                    children: "Hero Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/rpg_game/components/sample.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__TextField$3e$__["TextField"].Root, {
                                                    size: "3",
                                                    value: heroName,
                                                    onChange: (e)=>setHeroName(e.target.value),
                                                    placeholder: "Enter name..."
                                                }, void 0, false, {
                                                    fileName: "[project]/rpg_game/components/sample.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/rpg_game/components/sample.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "3",
                                            onClick: ()=>createHero(heroName),
                                            disabled: isLoading || !!heroId,
                                            variant: "solid",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MagicWandIcon"], {}, void 0, false, {
                                                    fileName: "[project]/rpg_game/components/sample.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " ",
                                                heroId ? "Summoned" : "Summon"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/rpg_game/components/sample.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rpg_game/components/sample.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                heroId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$callout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Callout$3e$__["Callout"].Root, {
                                    color: "blue",
                                    size: "1",
                                    variant: "surface",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$callout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Callout$3e$__["Callout"].Icon, {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckCircledIcon"], {}, void 0, false, {
                                                fileName: "[project]/rpg_game/components/sample.tsx",
                                                lineNumber: 64,
                                                columnNumber: 92
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/rpg_game/components/sample.tsx",
                                            lineNumber: 64,
                                            columnNumber: 78
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$callout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Callout$3e$__["Callout"].Text, {
                                            children: [
                                                "ID: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Code"], {
                                                    children: [
                                                        heroId.slice(0, 10),
                                                        "..."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/rpg_game/components/sample.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 145
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/rpg_game/components/sample.tsx",
                                            lineNumber: 64,
                                            columnNumber: 127
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rpg_game/components/sample.tsx",
                                    lineNumber: 64,
                                    columnNumber: 24
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rpg_game/components/sample.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/rpg_game/components/sample.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        size: "3",
                        variant: "classic",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                            direction: "column",
                            gap: "3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$heading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                                    size: "4",
                                    color: "orange",
                                    children: "🔨 Step 2: Forge Sword"
                                }, void 0, false, {
                                    fileName: "[project]/rpg_game/components/sample.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Grid"], {
                                    columns: "2",
                                    gap: "3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                    size: "2",
                                                    weight: "bold",
                                                    children: "Strength ⚔️"
                                                }, void 0, false, {
                                                    fileName: "[project]/rpg_game/components/sample.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__TextField$3e$__["TextField"].Root, {
                                                    type: "number",
                                                    value: stats.strength,
                                                    onChange: (e)=>handleStatChange('strength', e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/rpg_game/components/sample.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/rpg_game/components/sample.tsx",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                    size: "2",
                                                    weight: "bold",
                                                    children: "Agility 👟"
                                                }, void 0, false, {
                                                    fileName: "[project]/rpg_game/components/sample.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__TextField$3e$__["TextField"].Root, {
                                                    type: "number",
                                                    value: stats.agility,
                                                    onChange: (e)=>handleStatChange('agility', e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/rpg_game/components/sample.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/rpg_game/components/sample.tsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                    size: "2",
                                                    weight: "bold",
                                                    children: "HP ❤️"
                                                }, void 0, false, {
                                                    fileName: "[project]/rpg_game/components/sample.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__TextField$3e$__["TextField"].Root, {
                                                    type: "number",
                                                    value: stats.hp,
                                                    onChange: (e)=>handleStatChange('hp', e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/rpg_game/components/sample.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/rpg_game/components/sample.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                    size: "2",
                                                    weight: "bold",
                                                    children: "Crit Rate ⚡"
                                                }, void 0, false, {
                                                    fileName: "[project]/rpg_game/components/sample.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2d$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__TextField$3e$__["TextField"].Root, {
                                                    type: "number",
                                                    value: stats.crit,
                                                    onChange: (e)=>handleStatChange('crit', e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/rpg_game/components/sample.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/rpg_game/components/sample.tsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rpg_game/components/sample.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "3",
                                    color: "orange",
                                    onClick: ()=>forgeSword(parseInt(stats.strength), parseInt(stats.agility), parseInt(stats.hp), parseInt(stats.crit)),
                                    disabled: isLoading || !!swordId,
                                    variant: "solid",
                                    style: {
                                        marginTop: '10px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LightningBoltIcon"], {}, void 0, false, {
                                            fileName: "[project]/rpg_game/components/sample.tsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        swordId ? "Forged" : "Forge Sword"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rpg_game/components/sample.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                swordId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$callout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Callout$3e$__["Callout"].Root, {
                                    color: "orange",
                                    size: "1",
                                    variant: "surface",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$callout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Callout$3e$__["Callout"].Icon, {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckCircledIcon"], {}, void 0, false, {
                                                fileName: "[project]/rpg_game/components/sample.tsx",
                                                lineNumber: 99,
                                                columnNumber: 95
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/rpg_game/components/sample.tsx",
                                            lineNumber: 99,
                                            columnNumber: 81
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$callout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Callout$3e$__["Callout"].Text, {
                                            children: [
                                                "ID: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Code"], {
                                                    children: [
                                                        swordId.slice(0, 10),
                                                        "..."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/rpg_game/components/sample.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 148
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/rpg_game/components/sample.tsx",
                                            lineNumber: 99,
                                            columnNumber: 130
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rpg_game/components/sample.tsx",
                                    lineNumber: 99,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rpg_game/components/sample.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/rpg_game/components/sample.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        size: "4",
                        style: {
                            background: 'var(--green-3)',
                            border: '2px solid var(--green-9)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$flex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                            direction: "column",
                            gap: "4",
                            align: "center",
                            py: "2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$heading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                                    size: "6",
                                    color: "green",
                                    weight: "bold",
                                    children: "⚔️ Step 3: Equip"
                                }, void 0, false, {
                                    fileName: "[project]/rpg_game/components/sample.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                    size: "3",
                                    align: "center",
                                    color: "gray",
                                    children: "Merge the Sword into the Hero"
                                }, void 0, false, {
                                    fileName: "[project]/rpg_game/components/sample.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    color: "green",
                                    size: "4",
                                    variant: "solid",
                                    onClick: equipSword,
                                    disabled: !heroId || !swordId || isLoading,
                                    style: {
                                        width: "100%",
                                        maxWidth: "400px",
                                        cursor: !heroId || !swordId ? "not-allowed" : "pointer"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link2Icon"], {}, void 0, false, {
                                            fileName: "[project]/rpg_game/components/sample.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Equip Sword ➔"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/rpg_game/components/sample.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/rpg_game/components/sample.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/rpg_game/components/sample.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/rpg_game/components/sample.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                mt: "5",
                children: [
                    isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$callout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Callout$3e$__["Callout"].Root, {
                        color: "gray",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$callout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Callout$3e$__["Callout"].Icon, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayIcon"], {}, void 0, false, {
                                    fileName: "[project]/rpg_game/components/sample.tsx",
                                    lineNumber: 117,
                                    columnNumber: 64
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/rpg_game/components/sample.tsx",
                                lineNumber: 117,
                                columnNumber: 50
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$callout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Callout$3e$__["Callout"].Text, {
                                children: "Processing..."
                            }, void 0, false, {
                                fileName: "[project]/rpg_game/components/sample.tsx",
                                lineNumber: 117,
                                columnNumber: 91
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/rpg_game/components/sample.tsx",
                        lineNumber: 117,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0)),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$callout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Callout$3e$__["Callout"].Root, {
                        color: "red",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$callout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Callout$3e$__["Callout"].Icon, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CrossCircledIcon"], {}, void 0, false, {
                                    fileName: "[project]/rpg_game/components/sample.tsx",
                                    lineNumber: 118,
                                    columnNumber: 59
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/rpg_game/components/sample.tsx",
                                lineNumber: 118,
                                columnNumber: 45
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$callout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Callout$3e$__["Callout"].Text, {
                                children: [
                                    "Error: ",
                                    error.message
                                ]
                            }, void 0, true, {
                                fileName: "[project]/rpg_game/components/sample.tsx",
                                lineNumber: 118,
                                columnNumber: 94
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/rpg_game/components/sample.tsx",
                        lineNumber: 118,
                        columnNumber: 19
                    }, ("TURBOPACK compile-time value", void 0)),
                    hash && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$callout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Callout$3e$__["Callout"].Root, {
                        color: "green",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$callout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Callout$3e$__["Callout"].Icon, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$icons$2f$dist$2f$react$2d$icons$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckCircledIcon"], {}, void 0, false, {
                                    fileName: "[project]/rpg_game/components/sample.tsx",
                                    lineNumber: 119,
                                    columnNumber: 60
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/rpg_game/components/sample.tsx",
                                lineNumber: 119,
                                columnNumber: 46
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$callout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Callout$3e$__["Callout"].Text, {
                                children: [
                                    "Success! Hash: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Code"], {
                                        children: [
                                            hash.slice(0, 10),
                                            "..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/rpg_game/components/sample.tsx",
                                        lineNumber: 119,
                                        columnNumber: 124
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/rpg_game/components/sample.tsx",
                                lineNumber: 119,
                                columnNumber: 95
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/rpg_game/components/sample.tsx",
                        lineNumber: 119,
                        columnNumber: 18
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/rpg_game/components/sample.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/rpg_game/components/sample.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SampleIntegration, "ffOdmLaTLLUgdVsKiuDLhRwJ4bA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$node_modules$2f40$iota$2f$dapp$2d$kit$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$rpg_game$2f$hooks$2f$useContract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContract"]
    ];
});
_c = SampleIntegration;
const __TURBOPACK__default__export__ = SampleIntegration;
var _c;
__turbopack_context__.k.register(_c, "SampleIntegration");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=rpg_game_d9c82953._.js.map