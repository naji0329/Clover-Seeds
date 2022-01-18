import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
const Faq = () => {
  const [open, setOpen] = useState(1);
  const handleCollapse = (id) => {
    if (open === id) {
      setOpen(!id);
    } else {
      setOpen(id);
    }
  };
  return (
    <div>
      <div className="w-full bg-primary py-20">
        <div className="container-lg ">
          <div className=" px-6 py-8  md:px-12 md:py-12 bg-gray">
            <Title
              className="gradienttext"
              sx={{
                color: "#c9e5d8",
                fontSize: "36px",
                lineHeight: "44px",
                paddingBottom: "24px",
                textTransform: "none",
              }}
            >
              Frequently Asked Questions
            </Title>

            <div>
              <div>
                <div className="faq-q-wrap" onClick={() => handleCollapse(1)}>
                  <a
                    className={`${
                      open === 1 ? "question-open" : "question-close"
                    } `}
                  >
                    What Is DeFi?
                  </a>
                  <div className="faq-icons">
                    {open === 1 ? (
                      <RemoveIcon className="FAQ-ICON" />
                    ) : (
                      <AddIcon className="FAQ-ICON" />
                    )}
                  </div>
                </div>
                <div
                  className={`${
                    open === 1 ? "open" : "collapse"
                  } bg-transparent border-b border-white`}
                >
                  <p className="faq-answer">
                    <Paragraph
                      sx={{
                        color: "#b9e7d6",
                        fontSize: "18px",
                        lineHeight: "26px",

                        textTransform: "none",
                        fontWeight: "600",
                        textAlign: "left",
                      }}
                    >
                      DeFi stands for «decentralized finance». The goal is to
                      recreate traditional financial systems, such as banks and
                      exchanges, but with crypto-currencies. The difference is
                      that DeFi applications work without a central service
                      exercising control over the whole system.
                      <br />
                      <br /> For example, if we make a comparison between DeFi
                      and traditional finance: in DeFi, you hold your money and
                      you control where your money goes and how it is spent.
                      Whereas in traditional finance, your money is held by the
                      banks and you have to trust them not to mismanage your
                      money, like lending to risky borrowers.
                    </Paragraph>
                  </p>
                </div>
                <div className="faq-q-wrap" onClick={() => handleCollapse(2)}>
                  <a
                    className={`${
                      open === 2 ? "question-open" : "question-close"
                    } `}
                  >
                    What is the SEED$ token?
                  </a>
                  <div className="faq-icons">
                    {open === 2 ? (
                      <RemoveIcon className="FAQ-ICON" />
                    ) : (
                      <AddIcon className="FAQ-ICON" />
                    )}
                  </div>
                </div>
                <div
                  className={`${
                    open === 2 ? "open" : "collapse"
                  } bg-transparent border-b border-white`}
                >
                  <p className="faq-answer">
                    <Paragraph
                      sx={{
                        color: "#b9e7d6",
                        fontSize: "18px",
                        lineHeight: "26px",
                        textTransform: "none",
                        fontWeight: "600",
                        textAlign: "left",
                        paddingY: "20px",
                      }}
                    >
                      The SEED$ token is the currency of the Clover SEED$ game.
                      <br />
                      It is used to buy NFT that will allow you to grow Clovers
                      and harvest more SEED$.
                    </Paragraph>
                  </p>
                </div>
                <div className="faq-q-wrap" onClick={() => handleCollapse(3)}>
                  <a
                    className={`${
                      open === 3 ? "question-open" : "question-close"
                    } `}
                  >
                    Where can I buy SEED$ and where can I create my Clover Land?
                  </a>
                  <div className="faq-icons">
                    {open === 3 ? (
                      <RemoveIcon className="FAQ-ICON" />
                    ) : (
                      <AddIcon className="FAQ-ICON" />
                    )}
                  </div>
                </div>
                <div
                  className={`${
                    open === 3 ? "open" : "collapse"
                  } bg-transparent border-b border-white`}
                >
                  <p className="faq-answer">
                    <Paragraph
                      sx={{
                        color: "#b9e7d6",
                        fontSize: "18px",
                        lineHeight: "26px",

                        textTransform: "none",
                        fontWeight: "600",
                        textAlign: "left",
                      }}
                    >
                      DeFi stands for «decentralized finance». The goal is to
                      recreate traditional financial systems, such as banks and
                      exchanges, but with crypto-currencies. The difference is
                      that DeFi applications work without a central service
                      exercising control over the whole system.
                      <br />
                      <br /> For example, if we make a comparison between DeFi
                      and traditional finance: in DeFi, you hold your money and
                      you control where your money goes and how it is spent.
                      Whereas in traditional finance, your money is held by the
                      banks and you have to trust them not to mismanage your
                      money, like lending to risky borrowers.
                    </Paragraph>
                  </p>
                </div>
                <div className="faq-q-wrap" onClick={() => handleCollapse(4)}>
                  <a
                    className={`${
                      open === 4 ? "question-open" : "question-close"
                    } `}
                  >
                    Where can I buy SEED$ and where can I create my Clover Land?
                  </a>
                  <div className="faq-icons">
                    {open === 4 ? (
                      <RemoveIcon className="FAQ-ICON" />
                    ) : (
                      <AddIcon className="FAQ-ICON" />
                    )}
                  </div>
                </div>
                <div
                  className={`${
                    open === 4 ? "open" : "collapse"
                  } bg-transparent border-b border-white`}
                >
                  <p className="faq-answer">
                    <Paragraph
                      sx={{
                        color: "#b9e7d6",
                        fontSize: "18px",
                        lineHeight: "26px",

                        textTransform: "none",
                        fontWeight: "600",
                        textAlign: "left",
                      }}
                    >
                      1/ Buy SEED$ on{" "}
                      <span style={{ color: "#bdd10a" }}> PancakeSwap</span> or{" "}
                      <span style={{ color: "#bdd10a" }}>Poocoin.</span>
                      <br />
                      2/ Buy land with 10,000 SEED$ (for 1 CLOVER FIELD) on our{" "}
                      <span style={{ color: "#bdd10a" }}>web app.</span>
                      <br />
                      3/ Harvest rewards in SEED$ generated by your clovers in
                      your NFT Land
                      <br />
                      4/{" "}
                      <span style={{ color: "#bdd10a" }}>
                        Buy more NFT land
                      </span>{" "}
                      or swap your tokens.
                      <br />
                      You can also trade your land on{" "}
                      <span style={{ color: "#bdd10a" }}>
                        https://nftrade.com/
                      </span>
                    </Paragraph>
                  </p>
                </div>
                <div className="faq-q-wrap" onClick={() => handleCollapse(5)}>
                  <a
                    className={`${
                      open === 5 ? "question-open" : "question-close"
                    } `}
                  >
                    Does Clover have Faucet limits?
                  </a>
                  <div className="faq-icons">
                    {open === 5 ? (
                      <RemoveIcon className="FAQ-ICON" />
                    ) : (
                      <AddIcon className="FAQ-ICON" />
                    )}
                  </div>
                </div>
                <div
                  className={`${
                    open === 5 ? "open" : "collapse"
                  } bg-transparent border-b border-white`}
                >
                  <p className="faq-answer">
                    <Paragraph
                      sx={{
                        color: "#b9e7d6",
                        fontSize: "18px",
                        lineHeight: "26px",

                        textTransform: "none",
                        fontWeight: "600",
                        textAlign: "left",
                      }}
                    >
                      All Staking rewards come from the Staking wallet
                      <br />
                      «0xbED6f3b2e6557Fe370Cb7aEB0C116b695BFf1925».
                      <br />
                      This wallet starts with a sum of 1 Billion SEED$ tokens at
                      the launch of Clover.
                      <br />
                      Then :<br />
                      -it is gradually emptied when the holder who stake claims
                      the reward
                      <br />
                      -It fills up progressively when you minted NFTs (80% of
                      the mint tokens go directly into this wallet)
                      <br />
                      <br />
                      This wallet can therefore be exhausted over time. It is
                      good to know that if this wallet reaches 1 Million SEED$
                      tokens, the faucet will not be able to collect more seeds
                      on your NFT land staked. The game will be over (no more
                      watering, no more seeds rewards)
                    </Paragraph>
                  </p>
                </div>
                <div className="faq-q-wrap" onClick={() => handleCollapse(6)}>
                  <a
                    className={`${
                      open === 6 ? "question-open" : "question-close"
                    } `}
                  >
                    Do I need to keep my computer running for my Clover Lands to
                    be active?
                  </a>
                  <div className="faq-icons">
                    {open === 6 ? (
                      <RemoveIcon className="FAQ-ICON" />
                    ) : (
                      <AddIcon className="FAQ-ICON" />
                    )}
                  </div>
                </div>
                <div
                  className={`${
                    open === 6 ? "open" : "collapse"
                  } bg-transparent border-b border-white`}
                >
                  <p className="faq-answer">
                    <Paragraph
                      sx={{
                        color: "#b9e7d6",
                        fontSize: "18px",
                        lineHeight: "26px",

                        textTransform: "none",
                        fontWeight: "600",
                        textAlign: "left",
                      }}
                    >
                      No, you don’t.
                    </Paragraph>
                  </p>
                </div>
                <div className="faq-q-wrap" onClick={() => handleCollapse(7)}>
                  <a
                    className={`${
                      open === 7 ? "question-open" : "question-close"
                    } `}
                  >
                    Where can I buy land?
                  </a>
                  <div className="faq-icons">
                    {open === 7 ? (
                      <RemoveIcon className="FAQ-ICON" />
                    ) : (
                      <AddIcon className="FAQ-ICON" />
                    )}
                  </div>
                </div>
                <div
                  className={`${
                    open === 7 ? "open" : "collapse"
                  } bg-transparent border-b border-white`}
                >
                  <p className="faq-answer">
                    <Paragraph
                      sx={{
                        color: "#b9e7d6",
                        fontSize: "18px",
                        lineHeight: "26px",

                        textTransform: "none",
                        fontWeight: "600",
                        textAlign: "left",
                      }}
                    >
                      Directly on our{" "}
                      <span style={{ color: "#bdd10a" }}>app</span> or on{" "}
                      <span>
                        <a
                          href="https://nftrade.com/"
                          target={"_blank"}
                          style={{ color: "#bdd10a" }}
                        >
                          https://nftrade.com/
                        </a>
                      </span>
                    </Paragraph>
                  </p>
                </div>
                <div className="faq-q-wrap" onClick={() => handleCollapse(8)}>
                  <a
                    className={`${
                      open === 8 ? "question-open" : "question-close"
                    } `}
                  >
                    Do I get Royalties when I trade my Clover NFT?
                  </a>
                  <div className="faq-icons">
                    {open === 8 ? (
                      <RemoveIcon className="FAQ-ICON" />
                    ) : (
                      <AddIcon className="FAQ-ICON" />
                    )}
                  </div>
                </div>
                <div
                  className={`${
                    open === 8 ? "open" : "collapse"
                  } bg-transparent border-b border-white`}
                >
                  <p className="faq-answer">
                    <Paragraph
                      sx={{
                        color: "#b9e7d6",
                        fontSize: "18px",
                        lineHeight: "26px",

                        textTransform: "none",
                        fontWeight: "600",
                        textAlign: "left",
                      }}
                    >
                      Yes, the creator will earn 5% royalties when you will
                      trade NFT on Marketplace.
                    </Paragraph>
                  </p>
                </div>
                <div className="faq-q-wrap" onClick={() => handleCollapse(9)}>
                  <a
                    className={`${
                      open === 9 ? "question-open" : "question-close"
                    } `}
                  >
                    Do you have big team wallets with SEED$ tokens at launch?
                  </a>
                  <div className="faq-icons">
                    {open === 9 ? (
                      <RemoveIcon className="FAQ-ICON" />
                    ) : (
                      <AddIcon className="FAQ-ICON" />
                    )}
                  </div>
                </div>
                <div
                  className={`${
                    open === 9 ? "open" : "collapse"
                  } bg-transparent border-b border-white`}
                >
                  <p className="faq-answer">
                    <Paragraph
                      sx={{
                        color: "#b9e7d6",
                        fontSize: "18px",
                        lineHeight: "26px",

                        textTransform: "none",
                        fontWeight: "600",
                        textAlign: "left",
                      }}
                    >
                      No, the team didn’t have any SEED$ at launch.
                      <br />
                      <br />
                      The only wallets with SEED$ tokens at launch were:
                      <br />
                      -The «Rewards Wallet»
                      (0xbED6f3b2e6557Fe370Cb7aEB0C116b695BFf1925) which started
                      with 1 billion SEED$ and allows to pay the rewards of the
                      staked NFTs.
                      <br />
                      -The «Safety Wallet»
                      (0x4D19FBd6f06F2cE45A23eABa2A535c1E86eB4c16) which started
                      with 1 million SEED$ and and allows the team to fix some
                      bugs (if needed).
                    </Paragraph>
                  </p>
                </div>
                <div className="faq-q-wrap" onClick={() => handleCollapse(10)}>
                  <a
                    className={`${
                      open === 10 ? "question-open" : "question-close"
                    } `}
                  >
                    How often should I water my land?
                  </a>
                  <div className="faq-icons">
                    {open === 10 ? (
                      <RemoveIcon className="FAQ-ICON" />
                    ) : (
                      <AddIcon className="FAQ-ICON" />
                    )}
                  </div>
                </div>
                <div
                  className={`${
                    open === 10 ? "open" : "collapse"
                  } bg-transparent border-b border-white`}
                >
                  <p className="faq-answer">
                    <Paragraph
                      sx={{
                        color: "#b9e7d6",
                        fontSize: "18px",
                        lineHeight: "26px",

                        textTransform: "none",
                        fontWeight: "600",
                        textAlign: "left",
                      }}
                    >
                      Every 48h maximum, you will have to water your land.
                      <br />
                      Missing it will dry your Clover Land and stop your staked
                      NFT to earn rewards!
                      <br />
                      <br />
                      Any farmer will understand how important it is to irrigate
                      his land so that their SEED$ continue to grow. That’s why
                      it will be a mandatory to come and water your fields every
                      48 hours to keep your farms growing and see your crop
                      thrive (and to earn more SEED$).
                    </Paragraph>
                  </p>
                </div>
                <div className="faq-q-wrap" onClick={() => handleCollapse(11)}>
                  <a
                    className={`${
                      open === 11 ? "question-open" : "question-close"
                    } `}
                  >
                    Can I buy as much Land as I want?
                  </a>
                  <div className="faq-icons">
                    {open === 11 ? (
                      <RemoveIcon className="FAQ-ICON" />
                    ) : (
                      <AddIcon className="FAQ-ICON" />
                    )}
                  </div>
                </div>
                <div
                  className={`${
                    open === 11 ? "open" : "collapse"
                  } bg-transparent border-b border-white`}
                >
                  <p className="faq-answer">
                    <Paragraph
                      sx={{
                        color: "#b9e7d6",
                        fontSize: "18px",
                        lineHeight: "26px",

                        textTransform: "none",
                        fontWeight: "600",
                        textAlign: "left",
                      }}
                    >
                      Yes, but Lands will be limited.
                    </Paragraph>
                  </p>
                </div>
                <div className="faq-q-wrap" onClick={() => handleCollapse(12)}>
                  <a
                    className={`${
                      open === 12 ? "question-open" : "question-close"
                    } `}
                  >
                    What happen when I Buy or I sell SEED$?
                  </a>
                  <div className="faq-icons">
                    {open === 12 ? (
                      <RemoveIcon className="FAQ-ICON" />
                    ) : (
                      <AddIcon className="FAQ-ICON" />
                    )}
                  </div>
                </div>
                <div
                  className={`${
                    open === 12 ? "open" : "collapse"
                  } bg-transparent border-b border-white`}
                >
                  <p className="faq-answer">
                    <Paragraph
                      sx={{
                        color: "#b9e7d6",
                        fontSize: "18px",
                        lineHeight: "26px",

                        textTransform: "none",
                        fontWeight: "600",
                        textAlign: "left",
                      }}
                    >
                      3 Taxes to remember: <br />
                      <br />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>SELL TAX : 5%</div>
                        <div>BUY TAX : 3%</div>
                        <div>SELL TAX FOR NON NFT OWNERS : 50%</div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>Liquidity Pool (3%)</div>
                        <div>Liquidity Pool (1%)</div>
                        <div>Liquidity Pool (20%)</div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>Team wallet (2%)</div>
                        <div>Team wallet (2%)</div>
                        <div>
                          Marketing wallet (15%)
                          <br /> Team wallet (15%)
                        </div>
                      </div>
                    </Paragraph>
                  </p>
                </div>
                <div className="faq-q-wrap" onClick={() => handleCollapse(13)}>
                  <a
                    className={`${
                      open === 13 ? "question-open" : "question-close"
                    } `}
                  >
                    What happens when a Land is created?
                  </a>
                  <div className="faq-icons">
                    {open === 13 ? (
                      <RemoveIcon className="FAQ-ICON" />
                    ) : (
                      <AddIcon className="FAQ-ICON" />
                    )}
                  </div>
                </div>
                <div
                  className={`${
                    open === 13 ? "open" : "collapse"
                  } bg-transparent border-b border-white`}
                >
                  <p className="faq-answer">
                    <Paragraph
                      sx={{
                        color: "#b9e7d6",
                        fontSize: "18px",
                        lineHeight: "26px",

                        textTransform: "none",
                        fontWeight: "600",
                        textAlign: "left",
                      }}
                    >
                      When a Clover is created: <br />{" "}
                      <span style={{ color: "#bdd10a", }}>80%</span> SEED$ are
                      transferred to the rewards pool (in SEED$).
                      <br />- <span style={{ color: "#bdd10a" }}>15%</span>{" "}
                      SEED$ are added to the liquidity pool (50% in BNB / 50% in
                      SEED$).
                      <br />- <span style={{ color: "#bdd10a" }}>3%</span> SEEDS
                      are transferred to the marketing wallet to ensure the
                      stabilization of the whole protocol and the token growth
                      (BNB).
                      <br />- <span style={{ color: "#bdd10a" }}>2%</span> SEED$
                      are transferred to the team wallet (BNB).
                    </Paragraph>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

const Title = styled("h1")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `72px`,
  lineHeight: `80px`,
  textAlign: "center",
  textTransform: "uppercase",
  color: `#FFFFFF`,
});
const Paragraph = styled("h1")({
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `28px`,
  lineHeight: `56px`,
  textAlign: "center",
  textTransform: "uppercase",
  color: `#b9e7d6`,
});
const questions = [
  {
    id: 1,
    question: "What Is DeFi?",
    answer: `DeFi stands for «decentralized finance». The goal is to recreate traditional financial systems,
      such as banks and exchanges, but with crypto-currencies. The difference is that DeFi applications
      work without a central service exercising control over the whole system.
      For example, if we make a comparison between DeFi and traditional finance: in DeFi, you hold
        your money and you control where your money goes and how it is spent. Whereas in traditional
        finance, your money is held by the banks and you have to trust them not to mismanage your
        money, like lending to risky borrowers.`,
  },
  {
    id: 2,
    question: "What is the SEED$ token?",
    answer: `The SEED$ token is the currency of the Clover SEED$ game.
      It is used to buy NFT that will allow you to grow Clovers and harvest more SEED$.`,
  },
  {
    id: 3,
    question: "Where can I buy SEED$ and where can I create my Clover Land?",
    answer: `DeFi stands for «decentralized finance». The goal is to recreate traditional financial systems,
      such as banks and exchanges, but with crypto-currencies. The difference is that DeFi applications
      work without a central service exercising control over the whole system.
      For example, if we make a comparison between DeFi and traditional finance: in DeFi, you hold
      your money and you control where your money goes and how it is spent. Whereas in traditional
      finance, your money is held by the banks and you have to trust them not to mismanage your
      money, like lending to risky borrowers.
      `,
  },
  {
    id: 4,
    question: "Where can I buy SEED$ and where can I create my Clover Land?",
    answer: `1/ Buy SEED$ on PancakeSwap or Poocoin.
      2/ Buy land with 10,000 SEED$ (for 1 CLOVER FIELD) on our web app.
      3/ Harvest rewards in SEED$ generated by your clovers in your NFT Land
      4/ Buy more NFT land or swap your tokens.
      You can also trade your land on https://nftrade.com/
      `,
  },
  {
    id: 5,
    question: "How much does a Clover Land costs?",
    answer: `CloverField: NFT limited to 3,000 copies.
        Price: 10,000 SEED$ tokens
        Reward (depending on how luck you are) : 4% / 5% / 6% / 15% per day
        CloverYard: NFT limited to 30,000 copies.
        Price: 1,000 SEED$ tokens
        Reward : 2% / 2.5% / 3% / 6% per day
        CloverPot: NFT limited to 300,000 copies.
        Price: 100 SEED$ tokens
        Reward : 1% / 1.5% / 2% / 4% per day
        `,
  },
  {
    id: 6,
    question: "Does Clover have Faucet limits?",
    answer: `All Staking rewards come from the Staking wallet «0xbED6f3b2e6557Fe370Cb7aEB0C116b695BFf1925». This wallet starts with a sum of 1 Billion SEED$ tokens at the launch of Clover. Then : -it is gradually emptied when the holder who stake claims the reward -It fills up progressively when you minted NFTs (80% of the mint tokens go directly into this wallet). This wallet can therefore be exhausted over time. It is good to know that if this wallet reaches
        1 Million SEED$ tokens, the faucet will not be able to collect more seeds on your NFT land
        staked. The game will be over (no more watering, no more seeds rewards).`,
  },
  {
    id: 7,
    question:
      "Do I need to keep my computer running for my Clover Lands to be active?",
    answer: "No, you don’t.",
  },
  {
    id: 8,
    question: "Where can I buy land?",
    answer: "Directly on our app or on https://nftrade.com/",
  },
  {
    id: 9,
    question: "Do I get Royalties when I trade my Clover NFT?",
    answer:
      "Yes, the creator will earn 5% royalties when you will trade NFT on Marketplace.",
  },
  {
    id: 10,
    question: "Do you have big team wallets with SEED$ tokens at launch?",
    answer: `No, the team didn’t have any SEED$ at launch.The only wallets with SEED$ tokens at launch were:
      -The «Rewards Wallet» (0xbED6f3b2e6557Fe370Cb7aEB0C116b695BFf1925) which started
      with 1 billion SEED$ and allows to pay the rewards of the staked NFTs.
      -The «Safety Wallet» (0x4D19FBd6f06F2cE45A23eABa2A535c1E86eB4c16) which started with
      1 million SEED$ and and allows the team to fix some bugs (if needed)`,
  },
];
