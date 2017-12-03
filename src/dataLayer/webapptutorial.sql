-- MySQL dump 10.13  Distrib 5.7.20, for Linux (x86_64)
--
-- Host: localhost    Database: webapptutorial
-- ------------------------------------------------------
-- Server version	5.7.20-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `has`
--

DROP TABLE IF EXISTS `has`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `has` (
  `id_orders` int(11) NOT NULL AUTO_INCREMENT,
  `id_users` int(11) NOT NULL,
  `month` varchar(45) DEFAULT NULL,
  `year` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_orders`,`id_users`),
  KEY `id_users_idx` (`id_users`),
  CONSTRAINT `id_orders` FOREIGN KEY (`id_orders`) REFERENCES `orders` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_users` FOREIGN KEY (`id_users`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `has`
--

LOCK TABLES `has` WRITE;
/*!40000 ALTER TABLE `has` DISABLE KEYS */;
INSERT INTO `has` VALUES (1,1,'12','2014'),(2,1,'2','2015'),(54,1,'4','2015'),(55,1,'12','2015'),(56,1,'4','2016'),(57,1,'12','2016'),(58,1,'4','2017'),(59,1,'11','2017');
/*!40000 ALTER TABLE `has` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `proig_litra` varchar(45) DEFAULT NULL,
  `proig_tlitrou` varchar(45) DEFAULT NULL,
  `proig_euro` varchar(45) DEFAULT NULL,
  `parag_litra` varchar(45) DEFAULT NULL,
  `parag_tlitrou` varchar(45) DEFAULT NULL,
  `parag_euro` varchar(45) DEFAULT NULL,
  `neo_litra` varchar(45) DEFAULT NULL,
  `neo_tlitrou` varchar(45) DEFAULT NULL,
  `neo_euro` varchar(45) DEFAULT NULL,
  `katan_litra` varchar(45) DEFAULT NULL,
  `katan_tlitrou` varchar(45) DEFAULT NULL,
  `katan_euro` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'600','0.75','450','500','0.60','300','770','0.6525974025974026','502.5','330','0.75','247.5'),(2,'770','0.65','502.5','','','','290','0.65','188.5','480','0.66','314'),(54,'290','0.65','188.5','','','','130','0.65','84.5','160','0.65','104'),(55,'130','0.65','84.5','800','0.70','560','680','0.7','475.99999999999994','250','0.6740000000000003','168.50000000000006'),(56,'680','0.7','475.99999999999994','500','0.80','400','650','0.7769230769230769','505','530','0.7','371'),(57,'650','0.7769230769230769','505','500','0.85','425','850','0.8199095022624434','696.9230769230769','300','0.7769230769230769','233.0769230769231'),(58,'850','0.8199095022624434','696.9230769230769','500','0.78','390','450','0.78','351','900','0.8176923076923077','735.9230769230769'),(59,'450','0.78','351','','','','185','0.78','156','250','0.78','195');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `mail` varchar(45) DEFAULT NULL,
  `user_name` varchar(45) NOT NULL,
  `user_password` varchar(20) NOT NULL,
  `confirm` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'vaggelis','nimakos@hotmail.com','nimakos','123','123'),(2,'test','test@test.com','test','test','test'),(5,'nikos plakias','nikos@hot.gr','nick','123','123');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-12-03 14:37:27
