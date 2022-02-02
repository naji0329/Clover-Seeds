import React from "react";
import Menu from "../Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import AnimLogo from "../../static/images/Anim.-Logo-Solo-Main-Image-Site-CS.gif";
import Percent from "../../static/images/Clover Site Roadmap.svg";
import DIAMOND from "../../static/images/dimond.svg";
import PEARL from "../../static/images/Clover PEARL.svg";
import RUBY from "../../static/images/Clover RUBY.svg";
import DIAMONDb from "../../static/images/CLOVER DIAMOND.svg";
import Desert from "../../static/images/Picto logo Dessert Finance.svg";
import Check from "../../static/images/Picto validé Site CS.svg";
import Roadmap from "./Roadmap";
import Faq from "./FAQ";
import Footer from "../Footer";
const WhitePaper = () => {
  return (
    <div>
      <Menu title="Home" />
      <Container maxWidth="md">
        <Box
          sx={{
            paddingY: "60px",
          }}
        >
          <Title className="gradienttext">Blockchain FARMERS</Title>
          <Subtitle>
            <span style={{ color: "#b9e7d6" }}>Welcome to</span> clover seed$!
          </Subtitle>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <AnimLogoImage src={AnimLogo} alt="" />
          </Box>
          <Paragraph
            sx={{
              paddingTop: "30px",
              color: "#c9e5d8",
              fontSize: "24px",
              lineHeight: "32px",
              paddingBottom: "15px",
              textTransform: "none",
            }}
          >
            Water & harvest clovers to get rewards!
          </Paragraph>
          <Paragraph
            sx={{
              color: "#bfd10a",
              fontSize: "28px",
              lineHeight: "36px",
              paddingBottom: "15px",
              textTransform: "none",
            }}
          >
            Clover SEED$ is a new and unique NFT game.
          </Paragraph>
          <Paragraph
            sx={{
              color: "#c9e5d8",
              fontSize: "28px",
              lineHeight: "36px",
              paddingBottom: "65px",
              textTransform: "none",
            }}
          >
            Buy Clover SEED$ and plant them into your NFT land.
          </Paragraph>
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
            Once upon a time...
          </Title>
          <Paragraph
            sx={{
              color: "#b9e7d6",
              fontSize: "17px",
              lineHeight: "26px",
              paddingBottom: "40px",
              textTransform: "none",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            A farmer called Connr discovered that planting clover seeds in the
            Luckyland would guarantee to harvest{" "}
            <span style={{ color: "#bfd10a" }}>4 leaf clovers</span>! His lucky
            clovers grew so big that he could get{" "}
            <span style={{ color: "#bfd10a" }}>15% of SEED$ every day</span>;
            SEED$ that he could regrow and could make him. <br />
            <br />
            It didn't take long before other farmers rushed into this one a
            lifetime opportunity, and tap inti this new found Eldorado. They
            quickly swapped their BNB to SEED$ to acquire Land and start growing
            clovers.
          </Paragraph>

          <Title
            className="gradienttext"
            sx={{
              color: "#c9e5d8",
              fontSize: "36px",
              lineHeight: "44px",
              paddingBottom: "20px",
              textTransform: "none",
            }}
          >
            Luck runs out...
          </Title>
          <Paragraph
            sx={{
              color: "#b9e7d6",
              fontSize: "17px",
              lineHeight: "26px",
              paddingBottom: "45px",
              textTransform: "none",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            However, some of these farmers were more lucky than others... While
            some, like Connor, produced up to{" "}
            <span style={{ color: "#bfd10a" }}>15% of SEED$</span> on their
            lands per day, others earned 4, 5, or 6%. <br />
            <br />
            Soon after, farmers learned a trick, they saw that if they had
            larger lands, they could earn more rewards. These unlucky farmers,
            wanting to use this trick to be rewarded too fast, had to give up
            their land to the luckiest ones.{" "}
          </Paragraph>
          <Title
            className="gradienttext"
            sx={{
              color: "#c9e5d8",
              fontSize: "36px",
              lineHeight: "44px",
              paddingBottom: "20px",
              textTransform: "none",
            }}
          >
            The blueprints to growing luck
          </Title>
          <Paragraph
            sx={{
              color: "#b9e7d6",
              fontSize: "17px",
              lineHeight: "26px",
              paddingBottom: "55px",
              textTransform: "none",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            Connor is a very generous person. During his years as a farmer, he
            has followed the seasons and described the best way to water clover
            fields in his journal. He has shared this journal with us so you can
            follow his instructions and try to be as lucky as he is!
          </Paragraph>
          <Title
            className="gradienttext"
            sx={{
              color: "#c9e5d8",
              fontSize: "36px",
              lineHeight: "44px",
              paddingBottom: "25px",
              textTransform: "none",
            }}
          >
            Beware!
          </Title>
          <Paragraph
            sx={{
              color: "#b9e7d6",
              fontSize: "17px",
              lineHeight: "26px",
              paddingBottom: "55px",
              textTransform: "none",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            <span style={{ color: "#bfd10a" }}>
              {" "}
              {"<<"} Water is the soul of the earth {">>"}
            </span>
            <br />
            Any farmer will understand how important it is to irrigate their
            land so that their SEED$ countinue to grow. That's why it will be
            mandatory to come and water your fields every 48 hours to keep your
            farms growing and see your crop thrive.
            <br />
            <br />
            <span style={{ color: "#bfd10a" }}>
              {" "}
              Respect the Binance Luckyland laws.
            </span>{" "}
            There are very high taxes for people selling SEED$ without owning
            land...
          </Paragraph>
          <Title
            className="gradienttext"
            sx={{
              color: "#c9e5d8",
              fontSize: "36px",
              lineHeight: "44px",
              paddingBottom: "20px",
              textTransform: "none",
            }}
          >
            How lucky are you?
          </Title>
          <Paragraph
            sx={{
              color: "#b9e7d6",
              fontSize: "17px",
              lineHeight: "26px",
              paddingBottom: "55px",
              textTransform: "none",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            Just like a lucky CLOVER has 4 Leaves and is very rare, during the
            minting of your land, you will randomly receive an NFT Land
            generating up to 4, 5, 6, or 15% reward* per day during staking:
            <Grid
              container
              rowSpacing={4}
              columnSpacing={{ xs: 1, sm: 2, md: 10 }}
            >
              <Grid item xs={12} sm={6} md={4}>
                <img src={Percent} alt="" />
              </Grid>
              <Grid item xs={12} sm={6} md={8}>
                <div style={{ display: "flex", marginTop: "40px" }}>
                  <div style={{ display: "flex", alignSelf: "center" }}>
                    <img src={DIAMOND} alt="" width={35} height={35} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignSelf: "center",
                      paddingLeft: "15px",
                    }}
                  >
                    33% chances to mint a 4% reward (with the{" "}
                    <span
                      style={{
                        color: "#5c6869",
                        padding: "0px 5px",
                        fontWeight: "700",
                      }}
                    >
                      {" "}
                      CARBON{" "}
                    </span>{" "}
                    LEAF)
                  </div>
                </div>
                <div style={{ display: "flex", marginTop: "10px" }}>
                  <div style={{ display: "flex", alignSelf: "center" }}>
                    <img src={PEARL} alt="" width={35} height={35} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignSelf: "center",
                      paddingLeft: "15px",
                    }}
                  >
                    33% chances to mint a 5% reward (with the{" "}
                    <span
                      style={{
                        color: "#88ca71",
                        padding: "0px 5px",
                        fontWeight: "700",
                      }}
                    >
                      {" "}
                      PEARL{" "}
                    </span>{" "}
                    LEAF)
                  </div>
                </div>
                <div style={{ display: "flex", marginTop: "10px" }}>
                  <div style={{ display: "flex", alignSelf: "center" }}>
                    <img src={RUBY} alt="" width={35} height={35} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignSelf: "center",
                      paddingLeft: "15px",
                    }}
                  >
                    33% chances to mint a 6% reward (with the{" "}
                    <span
                      style={{
                        color: "#f33c23",
                        padding: "0px 5px",
                        fontWeight: "700",
                      }}
                    >
                      {" "}
                      RUBY{" "}
                    </span>{" "}
                    LEAF)
                  </div>
                </div>
                <div style={{ display: "flex", marginTop: "10px" }}>
                  <div style={{ display: "flex", alignSelf: "center" }}>
                    <img src={DIAMONDb} alt="" width={35} height={35} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignSelf: "center",
                      paddingLeft: "15px",
                    }}
                  >
                    1% chances to mint a 15% reward (with the{" "}
                    <span
                      style={{
                        color: "#fd9a6d",
                        padding: "0px 5px",
                        fontWeight: "700",
                      }}
                    >
                      {" "}
                      DIAMOND{" "}
                    </span>{" "}
                    LEAF)
                  </div>
                </div>
              </Grid>
            </Grid>
            *These % rewards are valid for the CLOVERFIELD NFT.
            <br />
            They are different for the CLOVERFIELD and the CLOVERPOT.
            <br />
          </Paragraph>
          <Title
            className="gradienttext"
            sx={{
              color: "#c9e5d8",
              fontSize: "36px",
              lineHeight: "44px",
              paddingBottom: "35px",
              textTransform: "none",
            }}
          >
            Good luck and bad luck
          </Title>
          <Paragraph
            sx={{
              color: "#b9e7d6",
              fontSize: "17px",
              lineHeight: "26px",
              paddingBottom: "65px",
              textTransform: "none",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            Hurry and get a 15% reward field!
            <br />
            Because there is a 5% chance that the minted a NFT goes directly
            into the wallet of a holder holding a NFT of 15%.
          </Paragraph>
          <Title
            className="gradienttext"
            sx={{
              color: "#c9e5d8",
              fontSize: "36px",
              lineHeight: "44px",
              paddingBottom: "35px",
              textTransform: "none",
            }}
          >
            How does it work?
          </Title>
          <Paragraph
            sx={{
              color: "#b9e7d6",
              fontSize: "17px",
              lineHeight: "26px",
              paddingBottom: "55px",
              textTransform: "none",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            <span className="roadmap-title">1- Get SEED$ Token</span>
            <br />
            SEED$ Token Contact:
            <br />
            NFT Contact:
            <br />
            Staking Contract
            <br />
            Supply: <span style={{ color: "#bfd10a" }}>100B</span>
            <br />
            Price at launch:{" "}
            <span style={{ color: "#bfd10a" }}>$0.05/SEED$</span>
            <br />
            Market Cap at launch:{" "}
            <span style={{ color: "#bfd10a" }}>105 BNB</span>
            <br />
            Liquidity Pool at launch:{" "}
            <span style={{ color: "#bfd10a" }}>$50,000</span>
            <br />
            <br />
            Blockchain: SEED$ is{" "}
            <span style={{ color: "#bfd10a" }}>pegged</span> to the Binance
            SmartChain. This allows some minimal gas fees during the token swap.
            It will also allow the smart contract to send the SEED$ rewards more
            often.
            <br />
            <br />
            Also, the Binance SmartChain is the most accessible to everyone.
            Unlike the Ethereum network where high gas fees make it impossible
            for most people to access.
            <br />
            This SmartChain is widely recognized and has a positive reputation.
            <br />
            <br />
            <br />
            <br />
            <span className="roadmap-title">2- Buy & Stake your land</span>
            <br />
            Beware, land is rare and limited
            <br />
            There are 3 sizes of land:
            <br />
            <br />
            CloverField: NFT limited to 3,000 copies
            <br />
            Price: <span style={{ color: "#bfd10a" }}>10,000 SEED$ tokens</span>
            <br />
            Rewards:{" "}
            <span style={{ color: "#bfd10a" }}>
              4 / 5 / 6 or 15% reward per day
            </span>{" "}
            (33% / 33% / 33% / 1%)
            <br />
            <br />
            CloverYard: NFT limited to 30,000 copies.
            <br />
            Price: <span style={{ color: "#bfd10a" }}>1,000 SEED$ tokens</span>
            <br />
            Rewards:{" "}
            <span style={{ color: "#bfd10a" }}>
              2 / 2.5 / 3 or 6% reward per day{" "}
            </span>
            (33% / 33% / 33% / 1%)
            <br />
            <br />
            <br />
            And more surprises to come...
            <br />
            <br />
            <br />
            <br />
            <span className="roadmap-title">
              3- Water your land, care for your fields
            </span>
            <br />
            Like on any farm, wetering is important. Every 48h, you will have to
            water your land.
            <br />
            Missing it will dry your Clover Land and therefore stop your SEED$
            rewards growing.
            <br />
            <br />
            <br />
            <br />
            <span className="roadmap-title">4- HARVEST AND FLES </span>
            <br />
            EAT, SLEEP, WIN... AND REPEAT.
            <br />
            Harvest your earnings whenever you need ca$h... Or buy new lands!
            <br /> <br />
            Have fun good luck!
          </Paragraph>
          <Title
            className="gradienttext"
            sx={{
              color: "#c9e5d8",
              fontSize: "36px",
              lineHeight: "44px",
              paddingBottom: "25px",
              textTransform: "none",
            }}
          >
            Security is Everything
          </Title>
          <Paragraph
            sx={{
              color: "#b9e7d6",
              fontSize: "17px",
              lineHeight: "26px",
              paddingBottom: "25px",
              textTransform: "none",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            The contract has been audited by
          </Paragraph>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "95px",
            }}
          >
            <img src={Desert} alt="" width={150} />
          </div>

          <Title
            className="gradienttext"
            sx={{
              color: "#c9e5d8",
              fontSize: "36px",
              lineHeight: "44px",
              paddingBottom: "20px",
              textTransform: "none",
            }}
          >
            The entire power of farming is leveraged
          </Title>
          <Paragraph
            sx={{
              color: "#b9e7d6",
              fontSize: "16px",
              lineHeight: "26px",
              paddingY: "6px",
              paddingX: "14px",
              textTransform: "none",
              fontWeight: "500",
              textAlign: "center",
              backgroundColor: "#10241b",
              border: "1px solid #bfd10a",
              borderRadius: "8px",
              marginBottom: "40px",
            }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ display: "flex", alignSelf: "center" }}>
                <img src={Check} alt="" width={20} height={20} />
              </div>
              <div className="check-content">
                NFT, STACKING, FARMING, LUCKY, BLOCKCHAIN, CLOVER, BINANCE
              </div>
            </div>
          </Paragraph>
          <Title
            className="gradienttext"
            sx={{
              color: "#c9e5d8",
              fontSize: "36px",
              lineHeight: "44px",
              paddingBottom: "20px",
              textTransform: "none",
            }}
          >
            Get the best of your land
          </Title>
          <Paragraph
            sx={{
              color: "#b9e7d6",
              fontSize: "17px",
              lineHeight: "26px",
              paddingBottom: "55px",
              textTransform: "none",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            <span style={{ color: "#00a65c" }}>#1 COMPOUND INTERESTS</span>
            <br />
            As you get rewarded, you can grow more CLOVERS and harvest more
            SEED$.
            <br />
            Bringing APY to a staggering 3,800%.
            <br />
            <br />
            <br />
            <span style={{ color: "#00a65c" }}>#2 GROWING VALUE</span>
            <br />
            As you create more CLOVERS the value of SEED$ increases.
            <br />
            So you can generate an ever growing wealth.
          </Paragraph>
          <div>
            <Roadmap />
          </div>
          <Title
            className="gradienttext"
            sx={{
              color: "#c9e5d8",
              fontSize: "36px",
              lineHeight: "44px",
              paddingBottom: "20px",
              textTransform: "none",
            }}
          >
            Contribute and give feedback
          </Title>
          <Paragraph
            sx={{
              color: "#b9e7d6",
              fontSize: "17px",
              lineHeight: "26px",
              paddingBottom: "55px",
              textTransform: "none",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            Clover SEED$ is constantly looking for feedback to improve our
            concept and user experience. Users who would like to contribute are
            welcome to contact us on support@clover-seeds.financial.
          </Paragraph>
          <div>
            <Faq />
          </div>
          <div>
            <Title
              className="gradienttext"
              sx={{
                color: "#c9e5d8",
                fontSize: "36px",
                lineHeight: "44px",
                paddingBottom: "40px",
                textTransform: "none",
              }}
            >
              DISCLAIMER
            </Title>
            <Paragraph
              sx={{
                color: "#b9e7d6",
                fontSize: "17px",
                lineHeight: "26px",
                paddingBottom: "45px",
                textTransform: "none",
                fontWeight: "500",
                textAlign: "left",
              }}
            >
              You are solely responsible for your own actions and decisions, and
              the evaluation and use of our products and services must be based
              on your due diligence.
              <br />
              <br />
              The purchase of SEED$ tokens constitutes an investment, so it is
              inherently risky.
              <br />
              <br />
              This Whitepaper and our website described in our present plans
              could be modified, depending on many factors outside of Clover
              SEED$ control.
              <br />
              <br />
              This document does not provide financial investment
              recommendations or any advice. The Clover SEED$ team advice you to
              consult a financial advisor before investing in the project.
              <br />
              <br />
              The token SEED$ may be volatile. When nuying Clover SEED$, you are
              accepting that you are not buying security or investment. By this
              means, you agree that the Clover SEED$ team is not laible for any
              losses or taxes you may incur. You agree there is no guarantee
              about the duration of the project, which could be stopped by
              different external factors.
              <br />
              <br />
              As such, there is no guarantee that the price of a SEED$ token
              will not fall, nor can it be guaranteed that the protocol money
              will be spent to keep the price of the SEED$ token at a minimum.
              <br />
              <br />
              You should be aware that the current Clover SEED$ parameters may
              vary and are estimated; the reward rate per day is an estimate and
              may change, and the frequency of reward payments is estimate and
              may be delayed. The APY that the protocol can bring you is an
              estimate and not a guarantee.
              <br />
              <br />
              Please note that the following factors can hinder the development
              of Clover SEED$: the development of the crypto market and the
              beginning of the long term bear market, the instability of the
              Blockchain, the possibility of congestion, the possibility of
              error and hack, legal obstacles, and regulatory changes that
              prevent the Clover SEED$ team from completing the project, and
              ultimately the technical nature of the DeFi revenue log.
              <br />
              <br />
              Coordinating with Clover SEED$, which means that it is intended to
              start, despite human or financial error. These situations are
              beyond the control of Clover SEED$ nd there is no guarantee that
              they will not accur in the future.
            </Paragraph>
          </div>
        </Box>
      </Container>
      <Box
        sx={{
          paddingY: "40px",
        }}
      >
        <Footer />
      </Box>
    </div>
  );
};

export default WhitePaper;

const Title = styled("h1")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `72px`,
  lineHeight: `80px`,
  textAlign: "center",
  textTransform: "uppercase",
  color: `#FFFFFF`,
  "@media (max-width: 768px)": {
    fontSize: `42px`,
    lineHeight: `50px`,
  },
});
const Subtitle = styled("h1")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `48px`,
  lineHeight: `56px`,
  textAlign: "center",
  textTransform: "uppercase",
  color: `#b2d349`,
  marginBottom: "20px",
  "@media (max-width: 768px)": {
    fontSize: `30px`,
    lineHeight: `38px`,
  },
});
const AnimLogoImage = styled("img")({
  maxWidth: "200px",
  margin: "auto",
});
const Paragraph = styled("h1")({
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `28px`,
  lineHeight: `56px`,
  textAlign: "center",
  textTransform: "uppercase",
  color: `#b9e7d6`,
  "@media (max-width: 768px)": {
    fontSize: `22px`,
    lineHeight: `30px`,
  },
});
