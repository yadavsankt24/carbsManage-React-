import React from "react";
import {
  Image,
  Heading,
  Text,
  Input,
  Stack,
  AspectRatio,
  ListItem,
  List,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./MiddleSection.css";
import { Box } from "@chakra-ui/react";

export const MiddleSection = () => {
  const ImageList = [
    {
      url: "https://images.prismic.io/cm-website/85c79988-767d-486a-82ca-9e9482b92455_company-1%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max",
      width: "90px",
      height: "50px",
    },
    {
      url: "https://images.prismic.io/cm-website/6bd07041-3f55-485d-89c1-5229f6555f10_company-2%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max",
      width: "90px",
      height: "50px",
    },
    {
      url: "https://images.prismic.io/cm-website/a0b2f5b5-ccfe-4a2f-917e-d42744ff546c_company-3%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max",
      width: "90px",
      height: "50px",
    },
    {
      url: "https://images.prismic.io/cm-website/9606bffa-ce4e-4669-931f-bd24ffacf062_company-4%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max",
      width: "90px",
      height: "50px",
    },
    {
      url: "https://images.prismic.io/cm-website/9cb7402b-b14f-45e7-9b92-9eeddfb5973f_company-5%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max",
      width: "90px",
      height: "50px",
    },
    {
      url: "https://images.prismic.io/cm-website/7edf097e-db2c-4f7b-9384-3017911f6fc0_company-6%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max",
      width: "90px",
      height: "50px",
    },
  ];

  const ketoYou = [
    {
      url: "https://images.prismic.io/cm-website/030dabe6-7bc1-4df7-953f-4ddf8c3f7a97_article-1%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max",

      h2: "Keto for you .",

      text: "Personalize your low-carb journey and meet all your important health goals. We’re more than just a Keto calorie counter. Carb Manager integrates seamlessly with FitBit, Garmin, and hundreds of other apps and devices via Apple Health and Google Fit, helping you to:",
      table: {
          as: "MdCheckCircle",
          class: "fa-solid fa-circle-check",
          text: "Lose weight quickly",
          lineHeight: "40px",
        },
        
    },
    {
        url: "https://images.prismic.io/cm-website/1b4d20a7-fd3b-42a0-ba35-cae306374b4a_article_2%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max",
  
        h2: "Keto for you .",
  
        text: "Personalize your low-carb journey and meet all your important health goals. We’re more than just a Keto calorie counter. Carb Manager integrates seamlessly with FitBit, Garmin, and hundreds of other apps and devices via Apple Health and Google Fit, helping you to:",
        "table": {
            as: "MdCheckCircle",
            class: "fa-solid fa-circle-check",
            text: "Lose weight quickly",
            lineHeight: "40px",
          },
          
      },
      {
        url: "https://images.prismic.io/cm-website/26adf515-88d3-46ff-b5c4-f73eb3c6c78f_article_3%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max",
  
        h2: "Keto for you .",
  
        text: "Personalize your low-carb journey and meet all your important health goals. We’re more than just a Keto calorie counter. Carb Manager integrates seamlessly with FitBit, Garmin, and hundreds of other apps and devices via Apple Health and Google Fit, helping you to:",
        "table": {
            as: "MdCheckCircle",
            class: "fa-solid fa-circle-check",
            text: "Lose weight quickly",
            lineHeight: "40px",
          },
          
      },
      {
        url: "https://images.prismic.io/cm-website/21877cf5-6425-41cf-b50d-41a16715d23b_article-4%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max",
  
        h2: "Keto for you .",
  
        text: "Personalize your low-carb journey and meet all your important health goals. We’re more than just a Keto calorie counter. Carb Manager integrates seamlessly with FitBit, Garmin, and hundreds of other apps and devices via Apple Health and Google Fit, helping you to:",
        "table": {
            as: "MdCheckCircle",
            class: "fa-solid fa-circle-check",
            text: "Lose weight quickly",
            lineHeight: "40px",
          },
          
      }
  ]
  
  return (
    <div>
      <Box className="images_flex">
        {ImageList.map(({ url, width, height }) => (
          <Image src={url} width={width} height={height} />
        ))}
      </Box>
      <Box className="keto">
        <Box>
          <Heading fontSize="40px" size="xxl">
            Get to Know Keto & Low-Carb
          </Heading>
          <Text as="h3" size="md">
            And get results in as little as <span>3 weeks.</span>
          </Text>
        </Box>
        <Box>
          <Image
            src="https://images.prismic.io/cm-website/030dabe6-7bc1-4df7-953f-4ddf8c3f7a97_article-1%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
            alt=""
          />
        </Box>
      </Box>

      {ketoYou.map((item) => (
        <Box
          className="keto_you"
          display="flex"
          justifyContent="space-around"
          padding="80px"
          position="relative"
        >
          <Box width="90%" className="position">
            <Image borderRadius="120px 10px 10px 10px" src={item.url} />
          </Box>
          <Box width="70%">
            <Heading fontSize="50px" fontWeight="900">
              {item.h2}
            </Heading>
            <Text fontSize="20px">{item.text}</Text>
          <Box className="ulflex" display="flex" >
            <List margin="20px 20px" lineHeight={item.table.lineHeight}>
                <li>
                    <i style={{color:"black",fontSize:"15px"}} className={item.table.class}>{item.table.text}</i>
                </li>
                <li  >
                    <i style={{color:"black",fontSize:"15px"}} className={item.table.class}>{item.table.text}</i>

                </li>
                <li as={item.table.as} >
                    <i style={{color:"black",fontSize:"15px"}} className={item.table.class}>{item.table.text}</i>

                </li>
                
            </List>
            <List margin="20px 20px" lineHeight={item.table.lineHeight}>
                <li as={item.table.as}>
                    <i style={{color:"black",fontSize:"15px"}} className={item.table.class}>{item.table.text}</i>
                </li>
                <li as={item.table.as} >
                    <i style={{color:"black",fontSize:"15px"}} className={item.table.class}>{item.table.text}</i>

                </li><li as={item.table.as}>
                    <i style={{color:"black",fontSize:"15px"}} className={item.table.class}>{item.table.text}</i>
                </li>
            </List>
          </Box>
          </Box>
        </Box>
      ))}

      {/* ================================================ */}
      <Box class="easy" textAlign="center">
        <Heading size="xl">Get to Know Carb Manager</Heading>
        <Text fontSize="30px" marginTop="10px">
          The all-in-one Keto app. And your new <span>best friend.</span>
        </Text>
      </Box>

      <Box className="middle">
        <Box>
          <i class="fa-solid fa-clipboard-check"></i>
          <h4>Track Every Bite</h4>
          <p>
            Log food and meals in seconds with the industry’s most advanced food
            logger, featuring new carb counts, micros, and macronutrients. Our
            Premium version lets you log food by just snapping a picture!
            <span>#LikeMagic</span>
          </p>

          <i class="fa-solid fa-chart-column"></i>
          <h4>Cook “Yum-Worthy” Keto Meals</h4>
          <p>
            Who said low-carb was boring? Satisfy even the pickiest eaters in
            your family with our exclusive, premium database of delicious Keto
            recipes.
          </p>
        </Box>
        <Box>
          <img src="https://www.carbmanager.com/_nuxt/img/dd32400.png" alt="" />
        </Box>
        <Box>
          <i class="fa-solid fa-chart-column"></i>
          <h4>Simplify Grocery Runs</h4>
          <p>
            Save time at the grocery store! Generate personalized meal plans and
            shopping lists based on your preferences and macros, or choose from
            one of our many curated meal plans for all diet types.
          </p>

          <i class="fa-solid fa-chart-column"></i>
          <h4>Analyze Advanced Health Metrics</h4>
          <p>
            Go way beyond the typical calorie counter. Track ketones, blood
            glucose, insulin, diabetes carbs, intermittent fasting, glycemic
            load, GKI, and much much more.
          </p>
        </Box>
      </Box>

      <Box class="Box">
        <Box class="flex">
          <figure>
            <img
              src="https://images.prismic.io/cm-website/c681d51a-dc35-4f7d-aa85-0706abd8fb65_fitbit-ico%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
              alt="photo"
            />
          </figure>
          <figure>
            <img
              src="https://images.prismic.io/cm-website/a43a6403-365f-4c92-83cd-7c261e2d2764_google-health-ico%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
              alt="photo"
            />
          </figure>
        </Box>
        <Box class="Connect">
          <h2>Connect Apps & Devices</h2>
          <p class="Connect-Apps">
            We integrate with Fitbit, Garmin and hundreds of other apps and
            devices via Apple Health and Google Fit. Connect your device and
            sync activity “automagically”.
          </p>
        </Box>
        <Box class="flex">
          <figure>
            <img
              src="https://images.prismic.io/cm-website/2b4ca79f-cd99-4a5e-94ca-dd658fd60dd6_healthkit-ios-ico%402x.png?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
              alt=""
            />
          </figure>
          <figure class="figure">
            <img
              src="https://prismic-io.s3.amazonaws.com/cm-website/1b5a91f8-0249-467b-b255-98c41cb9c1e1_garmin-ico.svg"
              alt=""
            />
          </figure>
        </Box>
      </Box>
      <Box class="easy1">
        <h1>Carb Manager by the Numbers</h1>
        <p>
          Join the millions who’ve discovered how easy it is to plan, track, and
          manage a low-carb Keto diet with Carb Manager.
        </p>
      </Box>

      <Box id="father">
        <Box>
          <i class="fa-solid fa-drumstick-bite"></i>
          <h1>3000+</h1>
          <p>
            <span>Exclusive Keto recipes</span>
            in our database. You’ll always have an answer when your family asks
            “Whats for dinner?”
          </p>
        </Box>
        <Box>
          <i class="fa-solid fa-face-smile"></i>
          <h1>8M</h1>
          <p>
            <span>Happy customers</span>
            living a healthy, vibrant, low-carb lifestyle with the help of Carb
            Manager.
          </p>
        </Box>
        <Box>
          <i class="fa-solid fa-star-half-stroke"></i>
          <h1>4.8</h1>
          <p>
            <span>Average app store rating.</span>
            People love us! Carb Manager is one of the highest rated health &
            fitness apps in both the iOS store and Google Play.
          </p>
        </Box>
        <Box>
          <i class="fa-solid fa-weight-scale"></i>
          <h1>84M</h1>
          <p>
            <span>Avocados eaten</span>
            by hungry Carb Manager users on low-carb health and wellness
            journeys.
          </p>
        </Box>
      </Box>

      <Box id="web">
        <Box>
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.wombatapps.carbmanager&hl=en"
          >
            <img
              src="https://www.carbmanager.com/_nuxt/img/cd5b00b.png"
              alt=""
            />
          </a>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
          <span>(89k+)</span>
        </Box>
        <Box>
          <a href="https://apps.apple.com/us/app/carb-manager-keto-diet-app/id410089731">
            <img
              src="https://www.carbmanager.com/_nuxt/img/189f2dc.png"
              alt=""
            />
          </a>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
          <span>(565k+)</span>
        </Box>
        <Box>
          <a href="https://my.carbmanager.com/">
            <img
              src="https://www.carbmanager.com/_nuxt/img/5665828.png"
              alt=""
            />
          </a>
        </Box>
      </Box>
      <Box id="crauser_img">
        <h1>Love. Life. Keto.</h1>
        <p>Join our active community and start living your best life.</p>
        <img
          id="crauser"
          src="https://t4.ftcdn.net/jpg/01/97/99/09/360_F_197990963_sjL87u6EAOYC5mSml9XpDP1R6C7ztiJc.jpg"
          alt=""
        />
        <button id="left_btn"></button>
        <button id="right_btn"> </button>
        <p>
          All stories and testimonials are provided by real Carb Manager users,
          who have each received a gift card in compensation for sharing their
          experience. Their results are extraordinary and not typical. Carb
          Manager does not guarantee any specific health or medical outcomes for
          those using our product.
        </p>
        <Box>
          <a target="_blank" href="https://www.facebook.com/carbmanager">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a target="_blank" href="https://www.instagram.com/carbmanagerapp/">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a target="_blank" href="https://www.pinterest.com/carbmanagerapp/">
            <i class="fa-brands fa-pinterest"></i>
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCmVTbl7NTm_Cd4rA8XJWUVw?sub_confirmation=1"
          >
            <i class="fa-brands fa-youtube"></i>
          </a>
        </Box>
      </Box>

      <Box class="easy3">
        <h1>Trending Keto and Low-Carb Recipes</h1>
        <p>Tasty low-carb Keto recipes the whole family will love.</p>
      </Box>

      <Box id="Trending_Recipes">
        <Box>
          <img
            src="https://images.carbmanager.com/VV9-Xe4G90o5nQf6auwxs-sECO0nwOKXwzW28wEBwOQ/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmY0NzA2NjYyLWQ2ZGMtNDczYS1hNjBmLTA2YzcxMjdlYmI0My5qcGc_YWx0PW1lZGlh"
            alt="image"
          />
          <h3>Low Carb Shakshuka with Goat Cheese</h3>
          <Box class="icon">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            <span>33 ratings</span>
          </Box>
          <Box class="flex1">
            <Box>
              <i class="fa-solid fa-clock"></i>
              <span>35min</span>
              <i class="fa-solid fa-fire"></i>
              <span>313 Calories</span>
            </Box>
            <ul class="flex1 list">
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>6g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>17g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>24g</span>
              </li>
            </ul>
          </Box>
        </Box>
        <Box>
          <img
            src="https://images.carbmanager.com/8oiCwZH2RvYuD7CrV3ZDV7VGra7KJQc8dbHB5vrSX6A/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjc0ZDQ1YTc0LTQzODEtNGI1OC1hZGVkLTk2ZTI4NTcwNDk0Zi5qcGc_YWx0PW1lZGlh"
            alt="image"
          />
          <h3>Low Carb Thi Chicken Curry with Coconut Cauliflower Rice</h3>
          <Box class="icon">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            <span>91 ratings</span>
          </Box>
          <Box class="flex1">
            <Box>
              <i class="fa-solid fa-clock"></i>
              <span>45min</span>
              <i class="fa-solid fa-fire"></i>
              <span>361 Calories</span>
            </Box>
            <ul class="flex1 list">
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>8g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>20g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>26g</span>
              </li>
            </ul>
          </Box>
        </Box>
        <Box>
          <img
            src="https://images.carbmanager.com/QB1BNe9PoMCwZmOtFwK1Rgo47HQaCLyi4Rd8Rqsk8eM/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2EzMWNiZGMyLTg5YTYtMzZhYi05YjM1LWJjY2UzNGFjMmQwOC5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1mN2VhMDVmMi0xN2MxLTQxYTktYTI3Zi1lYWNhODg4Mzk4MDg"
            alt="image"
          />
          <h3>Low Carb Shakshuka with Goat Coffee</h3>
          <Box class="icon">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            <span>48 ratings</span>
          </Box>
          <Box class="flex1">
            <Box>
              <i class="fa-solid fa-clock"></i>
              <span>5min</span>
              <i class="fa-solid fa-fire"></i>
              <span>176 Calories</span>
            </Box>
            <ul class="flex1 list">
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>1g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>2g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>19g</span>
              </li>
            </ul>
          </Box>
        </Box>
        <Box>
          <img
            src="https://images.carbmanager.com/mq4uk7CRUXyRQLm1DqNGYKFubDhcSqp9bhiQCShIrs0/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjk3MTk2MjZkLTUyYzAtNGVlZC1iOTAyLTVkYjUyZTJiNmE3Yi5qcGc_YWx0PW1lZGlh"
            alt="image"
          />
          <h3>Low Carb Shakshuka with Goat Cheese</h3>
          <Box class="icon">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            <span>15 ratings</span>
          </Box>
          <Box class="flex1">
            <Box>
              <i class="fa-solid fa-clock"></i>
              <span>14min</span>
              <i class="fa-solid fa-fire"></i>
              <span>333 Calories</span>
            </Box>
            <ul class="flex1 list">
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>4g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>10g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>31g</span>
              </li>
            </ul>
          </Box>
        </Box>
        <Box>
          <img
            src="https://images.carbmanager.com/B01kG2JPCGTrc--kLar808Sq1Citqw38Ve-OxNenmHs/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRjRiOWNiMmI1LTBhNGMtNDFiZi05NWM1LTQ2ZWYxM2Y5MTIyOS5qcGc_YWx0PW1lZGlh"
            alt="image"
          />
          <h3>Low Carb Shakshuka with Goat Cheese</h3>
          <Box class="icon">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            <span>33 ratings</span>
          </Box>
          <Box class="flex1">
            <Box>
              <i class="fa-solid fa-clock"></i>
              <span>2h 15min</span>
              <i class="fa-solid fa-fire"></i>
              <span>450 Calories</span>
            </Box>
            <ul class="flex1 list">
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>6g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>27g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>34g</span>
              </li>
            </ul>
          </Box>
        </Box>
        <Box>
          <img
            src="https://images.carbmanager.com/dMbKZMxn33TAaQd8psp69aQYbw1giipnuqs4vVEgQGY/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2NjMGVlZmI3LWFjZDMtOTE5My1hMDUxLWVhMjc0OTdmYjBhNy5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1jZDYzZTE2MS02MWQ5LTRmNjgtYjhiZC01MGVhYzZlMmI1YTg"
            alt="image"
          />
          <h3>Low Carb Shakshuka with Goat Cheese</h3>
          <Box class="icon">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            <span>33 ratings</span>
          </Box>
          <Box class="flex1">
            <Box>
              <i class="fa-solid fa-clock"></i>
              <span>12min</span>
              <i class="fa-solid fa-fire"></i>
              <span>80 Calories</span>
            </Box>
            <ul class="flex1 list">
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>1g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>2g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>7g</span>
              </li>
            </ul>
          </Box>
        </Box>
        <Box>
          <img
            src="https://images.carbmanager.com/_hg7Efm75VWnGvV1m3E7dWIiU4JgivRNyEcJeNT8s1I/resize:fit:700/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmJlMTFmNWEzLWNlNDUtNGIxNC1iOGMxLTA2MmY2MmI0NjI5Mi5qcGc_YWx0PW1lZGlh"
            alt="image"
          />
          <h3>Low Carb Shakshuka with Goat Cheese</h3>
          <Box class="icon">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            <span>5 ratings</span>
          </Box>
          <Box class="flex1">
            <Box>
              <i class="fa-solid fa-clock"></i>
              <span>15min</span>
              <i class="fa-solid fa-fire"></i>
              <span>435 Calories</span>
            </Box>
            <ul class="flex1 list">
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>3g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>8g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>42g</span>
              </li>
            </ul>
          </Box>
        </Box>
        <Box>
          <img
            src="https://images.carbmanager.com/nUDYQNKsoZhZaIQwLyHT0QNskywfImZT4IYSnGOt07I/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzg3MjY1NjE4LTIyY2UtYjU0NS1lMTVhLWFhZTFlN2Q0NTQxNS5qcGVnP2FsdD1tZWRpYSZ0b2tlbj02YjkxODVlYy1iNDI2LTQyZmUtYjdhYi0xZGJkNzY0MDU4NmU"
            alt="image"
          />
          <h3>Low Carb Shakshuka with Goat Cheese</h3>
          <Box class="icon">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            <span>7 ratings</span>
          </Box>
          <Box class="flex1">
            <Box>
              <i class="fa-solid fa-clock"></i>
              <span>32min</span>
              <i class="fa-solid fa-fire"></i>
              <span>300 Calories</span>
            </Box>
            <ul class="flex1 list">
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>3g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>5g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>27g</span>
              </li>
            </ul>
          </Box>
        </Box>
        <Box>
          <img
            src="https://images.carbmanager.com/xdZRmxLfPuYlFwNunT6_ynILgOI9ZzHlguyxCHvHVj8/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2JhNzFkZTZkLWU0Y2UtNGE5OS00MmI3LWFmNmUxMjQ5N2UyOS5qcGVnP2FsdD1tZWRpYSZ0b2tlbj02YTNjMDk0NC04NGIzLTRjMDItYWNiMC1lYzFhZTBmYTE1NWY"
            alt="image"
          />
          <h3>Low Carb Shakshuka with Goat Cheese</h3>
          <Box class="icon">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            <span>13 ratings</span>
          </Box>
          <Box class="flex1">
            <Box>
              <i class="fa-solid fa-clock"></i>
              <span>21min</span>
              <i class="fa-solid fa-fire"></i>
              <span>265 Calories</span>
            </Box>
            <ul class="flex1 list">
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>4g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>17g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>18g</span>
              </li>
            </ul>
          </Box>
        </Box>
        <Box>
          <img
            src="https://images.carbmanager.com/vwaXiF29F7_gPus53Bszagdr2LINRoPiDaoGPFB2E0E/resize:fit:700/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2VkN2QwMjMyLTgxYWQtZDI5MC02MWMyLWI0MzgwNjg4ZTEyNC5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1kM2JiZjAwZS05ZmYyLTRmOTYtOTBkNS1iZDRjYjdhNTc3NWU"
            alt="image"
          />
          <h3>Low Carb Shakshuka with Goat Cheese</h3>
          <Box class="icon">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            <span>73 ratings</span>
          </Box>
          <Box class="flex1">
            <Box>
              <i class="fa-solid fa-clock"></i>
              <span>40min</span>
              <i class="fa-solid fa-fire"></i>
              <span>203 Calories</span>
            </Box>
            <ul class="flex1 list">
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>2g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>10g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>18g</span>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>

      <Box class="easy4">
        <h1>Explore Low-Carb Foods</h1>
        <p>View in-depth nutrition info on millions of foods</p>
      </Box>
      <Box id="Explore_Foods">
        <Box>
          <img
            src="https://images.carbmanager.com/4emTIsQ3yHuDgu42JCit9juddkva8TJJK72YjVPX8S4/resize:fit:80/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby9zdGF0aWMlMkZmb29kSWNvbnMlMkZpNjAzLnBuZz9hbHQ9bWVkaWE"
            alt=""
          />
          <h3>Carbs in Eggs, Cooked</h3>
          <Box class="flex1">
            <Box>
              <i class="fa-solid fa-fire"></i>
              <span>227 Calories</span>
            </Box>
            <ul class="flex1 list">
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>2g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>3g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>21g</span>
              </li>
            </ul>
          </Box>
        </Box>
        <Box>
          <img
            src="https://images.carbmanager.com/1XXL6cZNXXw7o-uXrh7hBbFIOuOL-r6SNImlOhzoGs0/resize:fit:80/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby9zdGF0aWMlMkZmb29kSWNvbnMlMkZpMzAyLnBuZz9hbHQ9bWVkaWE"
            alt=""
          />
          <h3>Carbs in Eggs, Cooked</h3>
          <Box class="flex1">
            <Box>
              <i class="fa-solid fa-fire"></i>
              <span>78 Calories</span>
            </Box>
            <ul class="flex1 list">
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>1g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>6g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>5g</span>
              </li>
            </ul>
          </Box>
        </Box>
        <Box>
          <img
            src="https://images.carbmanager.com/RfHhvxH0QQbKk1V_vDYrlDCom1AgQqLL_dBdHZtxqkk/resize:fit:80/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby9zdGF0aWMlMkZmb29kSWNvbnMlMkZpNzAyLnBuZz9hbHQ9bWVkaWE"
            alt=""
          />
          <h3>Carbs in Eggs, Cooked</h3>
          <Box class="flex1">
            <Box>
              <i class="fa-solid fa-fire"></i>
              <span>55 Calories</span>
            </Box>
            <ul class="flex1 list">
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>6g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>4g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>1g</span>
              </li>
            </ul>
          </Box>
        </Box>
        <Box>
          <img
            src="https://images.carbmanager.com/d4h5C-dFN5OZb_z4P9HAIG3KSpwBX8IlnF7MKZeCODs/resize:fit:80/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby9zdGF0aWMlMkZmb29kSWNvbnMlMkZpNzM3LnBuZz9hbHQ9bWVkaWE"
            alt=""
          />
          <h3>Carbs in Eggs, Cooked</h3>
          <Box class="flex1">
            <Box>
              <i class="fa-solid fa-fire"></i>
              <span>32 Calories</span>
            </Box>
            <ul class="flex1 list">
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>5g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>2g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>0g</span>
              </li>
            </ul>
          </Box>
        </Box>
        <Box>
          <img
            src="https://images.carbmanager.com/GX6cvr96VRFUMSEYKvTcj3fvJrqbTaeBFpAeI8HVDSc/resize:fit:80/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby9zdGF0aWMlMkZmb29kSWNvbnMlMkZpNDA1LnBuZz9hbHQ9bWVkaWE"
            alt=""
          />
          <h3>Carbs in Eggs, Cooked</h3>
          <Box class="flex1">
            <Box>
              <i class="fa-solid fa-fire"></i>
              <span>825 Calories</span>
            </Box>
            <ul class="flex1 list">
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>14g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>29g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>73g</span>
              </li>
            </ul>
          </Box>
        </Box>
        <Box>
          <img
            src="https://images.carbmanager.com/M2s9gY7IufLqLlRzkU6YP8T7FItKIHe9-g-Gq0CcHHw/resize:fit:80/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby9zdGF0aWMlMkZmb29kSWNvbnMlMkZpNzAzLnBuZz9hbHQ9bWVkaWE"
            alt=""
          />
          <h3>Carbs in Eggs, Cooked</h3>
          <Box class="flex1">
            <Box>
              <i class="fa-solid fa-fire"></i>
              <span>45 Calories</span>
            </Box>
            <ul class="flex1 list">
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>7g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>1g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>0g</span>
              </li>
            </ul>
          </Box>
        </Box>
        <Box>
          <img
            src="https://images.carbmanager.com/4emTIsQ3yHuDgu42JCit9juddkva8TJJK72YjVPX8S4/resize:fit:80/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby9zdGF0aWMlMkZmb29kSWNvbnMlMkZpNjAzLnBuZz9hbHQ9bWVkaWE"
            alt=""
          />
          <h3>Carbs in Eggs, Cooked</h3>
          <Box class="flex1">
            <Box>
              <i class="fa-solid fa-fire"></i>
              <span>227 Calories</span>
            </Box>
            <ul class="flex1 list">
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>2g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>3g</span>
              </li>
              <li>
                <i class="fa-solid fa-circle"></i>
                <span>21g</span>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
      <button id="viewAll">View All</button>

      <Box id="low_carb">
        <img
          src="https://thumbs.dreamstime.com/b/health-food-high-fiber-content-concept-diet-fruit-vegetables-cereals-whole-wheat-pasta-grains-legumes-herbs-foods-102328760.jpg"
          alt=""
        />
        <Box>
          <h1>Keep up With Keto & Low-Carb</h1>
          <p>
            Easily Start and Maintain a Healthy Keto lifestyle, with everything
            You need to know at your fingertipes.
          </p>
          <button id="signup1">Get Started</button>
        </Box>
      </Box>

      <Box class="easy5">
        <h1>Explore More Recipes</h1>
      </Box>
      <Box id="Explore_More_Recipes">
        <Box>
          <img
            src="https://images.prismic.io/cm-website/151794ae-12c4-4742-9075-9111c0f224b7_recipes-cat-3%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
            alt=""
          />
          <h3>
            Keto <span>Easy</span> Recipes
          </h3>
        </Box>
        <Box>
          <img
            src="https://images.prismic.io/cm-website/4490a550-b77d-4765-ac5f-cc40e7d4a15b_recipes-cat-1%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
            alt=""
          />
          <h3>
            Keto <span>Snack</span> Recipes
          </h3>
        </Box>
        <Box>
          <img
            src="https://images.prismic.io/cm-website/1626a4db-0c28-4f98-9253-de628c33ecce_recipes-cat-2%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
            alt=""
          />
          <h3>
            Keto <span>Breakefast</span> Recipes
          </h3>
        </Box>
        <Box>
          <img
            src="https://images.prismic.io/cm-website/7f814fd7-94d1-424e-a8ba-1f3fab810c95_recipes-cat-4%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
            alt=""
          />
          <h3>
            Keto <span>Smoothie</span> Recipes
          </h3>
        </Box>
      </Box>
      <button id="view">View All Recipes</button>

      <Box id="premium">
        <Box>
          <h1>Looking for Premium?</h1>
          <p>
            Unlock all of Carb Manager's cutting-edge features with a Premium
            Membership.
          </p>
          <button id="premium">
            <i class="fas fa-trophy"></i>
            <span>Get Premium</span>
          </button>
        </Box>
        <Box></Box>
      </Box>

      <Box class="easy6">
        <img
          src="https://play-lh.googleusercontent.com/LI_Y6I6uMS_DrhO7tHDTH-_YaYLJLM3rS9yReRuGzbk8VfoZvkOlZh7zZfCCOakJGDs"
          alt="logo"
        />
        <p>
          Carb Manager <sup>&reg;</sup>
        </p>
      </Box>

      <Box id="footer_final">
        <Box id="footer">
          <Box>
            <a href="features.html">Features</a>
          </Box>
          <Box>
            <a href="premium1.html">Premium</a>
          </Box>
          <Box>
            <a href="recipe.js">Keto Recipes</a>
          </Box>
          <Box>
            <a href="https://www.carbmanager.com/cookbook">Keto Cookbook</a>
          </Box>
          <Box>
            <a href="https://www.carbmanager.com/articles">Articles</a>
          </Box>
          <Box>
            <a href="custum.html">About Us</a>
          </Box>
          <Box>
            <a href="view.html">Foods</a>
          </Box>
          <Box>
            <a href="support.html">Supports</a>
          </Box>
          <Box>
            <a href="login.html">Log In</a>
          </Box>
          <Box>
            <a href="signup.html">Join for Free</a>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
