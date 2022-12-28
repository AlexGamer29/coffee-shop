CREATE TABLE `Products` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `categoryId` int,
  `subCategoryId` int,
  `name` varchar(255),
  `price` int
);

CREATE TABLE `Category` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255)
);

CREATE TABLE `SubCategory` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `categoryId` int
);

ALTER TABLE `Products` ADD FOREIGN KEY (`categoryId`) REFERENCES `Category` (`id`);

ALTER TABLE `SubCategory` ADD FOREIGN KEY (`categoryId`) REFERENCES `Category` (`id`);

ALTER TABLE `Products` ADD FOREIGN KEY (`subCategoryId`) REFERENCES `SubCategory` (`id`);
