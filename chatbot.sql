-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: chatbot
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `answer`
--

DROP TABLE IF EXISTS `answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `answer` (
  `q_id` int NOT NULL,
  `answer` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`q_id`),
  CONSTRAINT `answer_ibfk_1` FOREIGN KEY (`q_id`) REFERENCES `questions` (`q_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answer`
--

LOCK TABLES `answer` WRITE;
/*!40000 ALTER TABLE `answer` DISABLE KEYS */;
/*!40000 ALTER TABLE `answer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `keywords`
--

DROP TABLE IF EXISTS `keywords`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `keywords` (
  `key_id` int NOT NULL AUTO_INCREMENT,
  `keyword` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`key_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `keywords`
--

LOCK TABLES `keywords` WRITE;
/*!40000 ALTER TABLE `keywords` DISABLE KEYS */;
INSERT INTO `keywords` VALUES (1,'hello'),(2,'okay'),(3,'ma'),(4,'how'),(5,'really'),(6,'nahhh'),(7,'do'),(8,'you'),(9,'grow'),(10,'when'),(11,'potato'),(12,'tomato'),(13,'cauliflower'),(14,'onion'),(15,'which'),(16,'where'),(17,'ladiesfinger'),(18,'soil');
/*!40000 ALTER TABLE `keywords` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questions` (
  `q_id` int NOT NULL AUTO_INCREMENT,
  `key_id` int DEFAULT NULL,
  `question` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`q_id`),
  KEY `key_id` (`key_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (5,1078911,'When growing potato plants (Solanum tuberosum), it is important to keep in mind that potatoes are cool weather vegetables. The best time when to plant potatoes is in early spring. Planting potatoes two to three weeks before your last frost date will produce the most satisfactory results.During March and April is the best time to grow potato.'),(6,478912,'Sow your tomato seeds in March or April, approximately 6-8 weeks before the final frost of the winter, or earlier if you are growing your tomatoes in a greenhouse. Sprinkle the seed thinly onto good quality seed compost. Cover with 1.5mm of compost and water lightly with a fine-rose watering can.If you are only growing a few plants, sow two seeds into a 7.5cm  pot. Keep the compost moist, but be careful not to over-water as wet conditions can encourage damping-off disease, and other mould problems. At a temperature of 21 degrees celsius, tomato seeds usually germinate in 7 to 14 days. After germination remove the smaller plant.Pot on the tomato seedlings as soon as they are big enough to handle. Hold the plants by the leaves, taking care not to touch the stems, and transplant them into 7.5cm (3 inches) pots. Protect the plants from frost, cold winds, and draughts which might kill them.'),(7,1518914,'Onions will grow in almost any soil from sandy loams to heavy clay. The soil should be firm. If your soil is heavy then you can introduce some organic compost or manure into the soil to help its moisture retaining properties. Onions prefer a slightly acidic soil - PH 5.5-6.5 is a good PH for growing onions.'),(8,1,'Hello'),(9,1518917,'Ladies Finger or Bhendi can be grown well in all kinds of soil. .But sandy loam and clay-loam soils are best for its cultivation. The optimum pH range is between 6 and 6.8. Soils with high organic matter are preferred so that cartloads of FYM (Farmyard Manure) or compost should be incorporated during land preparation.'),(10,1078913,'The best time to plant most varieties of cauliflower is in the spring so they grow and produce their flower heads before summers hot temperatures ramp up. Other varieties are suited for mid-summer planting for a fall harvest.Between Mach and April, is the best time to grow Cauliflower.');
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-15  3:33:26
