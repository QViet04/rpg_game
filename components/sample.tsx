"use client";

import { useCurrentAccount } from "@iota/dapp-kit";
import { useContract } from "@/hooks/useContract";
import { Button, Container, Heading, Text, TextField, Card, Flex, Box, Callout, Code, Separator, Grid } from "@radix-ui/themes";
import { useState } from "react";

// Radix icons should be imported from the package root so Turbopack can resolve them
import { MagicWandIcon, LightningBoltIcon, Link2Icon, CheckCircledIcon, CrossCircledIcon, InfoCircledIcon, PlayIcon } from "@radix-ui/react-icons";

const SampleIntegration = () => {
  const currentAccount = useCurrentAccount();
  const { createHero, forgeSword, equipSword, heroId, swordId, hash, isLoading, error } = useContract();

  const [heroName, setHeroName] = useState("DragonSlayer");
  
  // 4 chỉ số mới
  const [stats, setStats] = useState({
    strength: "100",
    agility: "50",
    hp: "500",
    crit: "25"
  });

  const handleStatChange = (key: string, value: string) => {
    setStats(prev => ({ ...prev, [key]: value }));
  };

  if (!currentAccount) {
    return (
      <Container size="1" mt="6" p="4">
        <Callout.Root color="amber" variant="surface">
          <Callout.Icon><InfoCircledIcon /></Callout.Icon>
          <Callout.Text size="3" weight="bold">Please connect your wallet to play! 💼</Callout.Text>
        </Callout.Root>
      </Container>
    );
  }

  return (
    <Container size="2" mt="6" p="4">
      <Heading size="8" mb="2" align="center" style={{background: '-webkit-linear-gradient(45deg, #3086FF, #FF3030)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
        ⚔️ RPG Dashboard
      </Heading>
      <Text align="center" color="gray" as="p" mb="5">Manage your Hero and Equipment on-chain</Text>
      
      <Separator my="4" size="4" />

      <Flex direction="column" gap="5">
        
        {/* --- 1. SUMMON HERO --- */}
        <Card size="3" variant="classic">
          <Flex direction="column" gap="3">
            <Heading size="4" color="blue">🦸 Step 1: Summon Hero</Heading>
            <Flex gap="3" align="end">
              <Box style={{ flexGrow: 1 }}>
                <Text size="2" weight="bold" mb="1" as="div">Hero Name</Text>
                <TextField.Root size="3" value={heroName} onChange={(e) => setHeroName(e.target.value)} placeholder="Enter name..." />
              </Box>
              <Button size="3" onClick={() => createHero(heroName)} disabled={isLoading || !!heroId} variant="solid">
                <MagicWandIcon /> {heroId ? "Summoned" : "Summon"}
              </Button>
            </Flex>
            {heroId && <Callout.Root color="blue" size="1" variant="surface"><Callout.Icon><CheckCircledIcon /></Callout.Icon><Callout.Text>ID: <Code>{heroId.slice(0, 10)}...</Code></Callout.Text></Callout.Root>}
          </Flex>
        </Card>

        {/* --- 2. FORGE SWORD (4 Stats) --- */}
        <Card size="3" variant="classic">
          <Flex direction="column" gap="3">
            <Heading size="4" color="orange">🔨 Step 2: Forge Sword</Heading>
            
            {/* Lưới nhập liệu 4 ô */}
            <Grid columns="2" gap="3">
                <Box>
                    <Text size="2" weight="bold">Strength ⚔️</Text>
                    <TextField.Root type="number" value={stats.strength} onChange={(e) => handleStatChange('strength', e.target.value)} />
                </Box>
                <Box>
                    <Text size="2" weight="bold">Agility 👟</Text>
                    <TextField.Root type="number" value={stats.agility} onChange={(e) => handleStatChange('agility', e.target.value)} />
                </Box>
                <Box>
                    <Text size="2" weight="bold">HP ❤️</Text>
                    <TextField.Root type="number" value={stats.hp} onChange={(e) => handleStatChange('hp', e.target.value)} />
                </Box>
                <Box>
                    <Text size="2" weight="bold">Crit Rate ⚡</Text>
                    <TextField.Root type="number" value={stats.crit} onChange={(e) => handleStatChange('crit', e.target.value)} />
                </Box>
            </Grid>

            <Button size="3" color="orange" 
                onClick={() => forgeSword(parseInt(stats.strength), parseInt(stats.agility), parseInt(stats.hp), parseInt(stats.crit))} 
                disabled={isLoading || !!swordId} variant="solid" style={{marginTop: '10px'}}>
                <LightningBoltIcon /> {swordId ? "Forged" : "Forge Sword"}
            </Button>
            
            {swordId && <Callout.Root color="orange" size="1" variant="surface"><Callout.Icon><CheckCircledIcon /></Callout.Icon><Callout.Text>ID: <Code>{swordId.slice(0, 10)}...</Code></Callout.Text></Callout.Root>}
          </Flex>
        </Card>

        {/* --- 3. EQUIP --- */}
        <Card size="4" style={{ background: 'var(--green-3)', border: '2px solid var(--green-9)' }}>
          <Flex direction="column" gap="4" align="center" py="2">
            <Heading size="6" color="green" weight="bold">⚔️ Step 3: Equip</Heading>
            <Text size="3" align="center" color="gray">Merge the Sword into the Hero</Text>
            <Button color="green" size="4" variant="solid" onClick={equipSword} disabled={!heroId || !swordId || isLoading} style={{ width: "100%", maxWidth: "400px", cursor: (!heroId || !swordId) ? "not-allowed" : "pointer" }}>
              <Link2Icon /> Equip Sword ➔
            </Button>
          </Flex>
        </Card>
      </Flex>

      {/* --- STATUS --- */}
      <Box mt="5">
        {isLoading && <Callout.Root color="gray"><Callout.Icon><PlayIcon /></Callout.Icon><Callout.Text>Processing...</Callout.Text></Callout.Root>}
        {error && <Callout.Root color="red"><Callout.Icon><CrossCircledIcon /></Callout.Icon><Callout.Text>Error: {error.message}</Callout.Text></Callout.Root>}
        {hash && <Callout.Root color="green"><Callout.Icon><CheckCircledIcon /></Callout.Icon><Callout.Text>Success! Hash: <Code>{hash.slice(0, 10)}...</Code></Callout.Text></Callout.Root>}
      </Box>
    </Container>
  );
};

export default SampleIntegration;