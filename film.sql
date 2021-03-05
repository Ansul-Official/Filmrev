-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 05, 2021 at 05:06 PM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `filmrev`
--

-- --------------------------------------------------------

--
-- Table structure for table `film`
--

CREATE TABLE `film` (
  `id` int(11) NOT NULL,
  `judul` varchar(300) NOT NULL,
  `tahun` varchar(4) NOT NULL,
  `rilis` text NOT NULL,
  `sutradara` text NOT NULL,
  `bahasa` varchar(30) NOT NULL,
  `gambar` text NOT NULL,
  `deskripsi` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `film`
--

INSERT INTO `film` (`id`, `judul`, `tahun`, `rilis`, `sutradara`, `bahasa`, `gambar`, `deskripsi`) VALUES
(1, 'Mak Frozen', '2020', '2013-11-28', 'Chris Buck, Jennifer Lee', 'Isyarat', 'https://upload.wikimedia.org/wikipedia/id/thumb/0/05/Frozen_%282013_film%29_poster.jpg/220px-Frozen_%282013_film%29_poster.jpg', 'film fantasi musikal animasi komputer 3D Amerika 2013 yang diproduksi oleh Walt Disney Animation Studios dan dirilis oleh Walt Disney Pictures. Film fitur animasi Disney ke-53, terinspirasi oleh dongeng Hans Christian Andersen \\\"The Snow Queen\\\". Ini bercerita tentang seorang putri yang tak kenal takut yang melakukan perjalanan bersama tukang es yang kasar, rusa yang setia, dan manusia salju yang naif untuk menemukan saudara perempuannya yang terasing, yang kekuatan esnya secara tidak sengaja telah menjebak kerajaan mereka di musim dingin yang abadi.\\nFrozen menjalani beberapa perawatan cerita sebelum ditugaskan pada tahun 2011, dengan skenario yang ditulis oleh Jennifer Lee, yang juga disutradarai bersama dengan Chris Buck. Film ini menampilkan suara-suara Kristen Bell, Idina Menzel, Jonathan Groff, Josh Gad, dan Santino Fontana. Christophe Beck dipekerjakan untuk menyusun skor orkestra film, sementara Robert Lopez dan Kristen Anderson-Lopez menulis lagu-lagunya.  \\nFrozen perdana di Teater El Capitan di Hollywood, California, pada 19 November 2013, memiliki perilisan terbatas pada 22 November dan masuk ke perilisan teater umum pada 27 November. Ini disambut dengan pujian untuk visual, skenario, tema , musik, dan akting suara; beberapa kritikus film menganggap Frozen sebagai film fitur animasi Disney terbaik sejak era kebangkitan studio.\\nFrozen memenangkan dua Academy Awards untuk Best Animated Feature dan Best Original Song (\\\"Let It Go\\\"), Penghargaan Golden Globe Award for Best Animated Feature Film, Penghargaan BAFTA Award for Best Animated Film, lima Annie Awards (termasuk Best Animated Feature), dua Grammy Awards untuk Best Compilation Soundtrack for Visual Media dan Best Song Written for Visual Media (\\\"Let It Go\\\"), dan dua Penghargaan Film dua Critics\' Choice Movie Awards dan Best Original Song (\\\"Let It Go\\\"). Sekuel pendek beranimasi, Frozen Fever, tayang perdana pada 13 Maret 2015. sebuah fitur animasi berjudul Olaf\'s Frozen Adventure, tayang perdana pada 22 November 2017, dan sekuel panjang fitur, Frozen 2, dirilis pada 22 November 2019.'),
(2, 'Doraemon', '2017', '2021-03-24', 'wewe', 'Bahasa Inggris', 'https://images-na.ssl-images-amazon.com/images/I/61Q4I4fyVWL._AC_SY679_.jpg', 'wwwww');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `film`
--
ALTER TABLE `film`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `film`
--
ALTER TABLE `film`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
