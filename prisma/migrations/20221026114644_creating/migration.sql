-- CreateTable
CREATE TABLE `advertisingList` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `subscription` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `advertisingList_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
