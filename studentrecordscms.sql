-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 11, 2023 at 07:28 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `studentrecordscms`
--

-- --------------------------------------------------------

--
-- Table structure for table `students_details`
--

CREATE TABLE `students_details` (
  `id` int(11) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `grade` varchar(255) NOT NULL,
  `rollno` varchar(255) NOT NULL,
  `age` varchar(255) NOT NULL,
  `contactno` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students_details`
--

INSERT INTO `students_details` (`id`, `fullname`, `address`, `grade`, `rollno`, `age`, `contactno`, `createdAt`, `updatedAt`) VALUES
(1, 'Macaulay Carson', 'dad', '1', '664', '12', '+977 9758236524', '2023-09-10 03:14:17', '2023-09-10 15:08:48'),
(2, 'Odette Bird', 'Consequatur corrupt', '4', '457', '14', '+977 9856236521', '2023-09-10 03:21:02', '2023-09-10 03:21:02'),
(3, 'Ashely Rich', 'Et esse magni archi', '12', '982', '20', '+977 9856236252', '2023-09-10 14:45:32', '2023-09-10 14:45:32');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'anup', 'anup@123', '$2a$10$aXJGtEAM2o3Al/JS2loIWerc/sgneLlQOSTkB3C0FGbir1e3dlHj6', '2023-09-10 03:19:30', '2023-09-10 03:19:30'),
(2, 'anup', 'qwer@gmail.com', '$2a$10$CKFnUp9Jy4vNoKy25/c7/.PZhoB4PfefwC1ZcUL1v.F1EXXzHUIli', '2023-09-10 03:20:10', '2023-09-10 03:20:10'),
(3, 'abc', 'ab@gmail.com', '$2a$10$rvP3WA8maQNq49wEtRJGieGMDZSb1itSIl1kuXXFhb/wqqZ.4TMfe', '2023-09-10 14:43:30', '2023-09-10 14:43:30');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `students_details`
--
ALTER TABLE `students_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `students_details`
--
ALTER TABLE `students_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
