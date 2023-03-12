// import {Yanvar} from "yanvar.js";

var timeElement = document.getElementById('currtime');
var dateElement = document.getElementById('currdate');

function updateDatetime() {
  var now = moment();
  
  var formattedTime = now.format('HH:mm:ss');
  var formattedDate = now.format('DD.MM.YYYY');
  //now.format('LTS');
  timeElement.innerHTML = formattedTime;
  dateElement.innerHTML = formattedDate;
}

// Обновляем время каждую секунду
setInterval(updateDatetime, 1000);

// var f = Yanvar();


var February = '';

var month = moment().format("MMM");

var datas;

switch (month) {
  case "Jan":
    datas = '{"01.01":["08:12","09:42","13:30","15:21","17:01","18:31"],"02.01":["08:12","09:42","13:30","15:21","17:02","18:32"],"03.01":["08:12","09:42","13:30","15:21","17:03","18:33"],"04.01":["08:11","09:41","13:30","15:22","17:05","18:35"],"05.01":["08:11","09:41","13:30","15:22","17:07","18:37"],"06.01":["08:10","09:40","13:30","15:23","17:09","18:39"],"07.01":["08:10","09:40","13:30","15:23","17:10","18:40"],"08.01":["08:10","09:40","13:30","15:24","17:12","18:42"],"09.01":["08:09","09:39","13:30","15:25","17:14","18:44"],"10.01":["08:08","09:38","13:30","15:27","17:16","18:46"],"11.01":["08:07","09:37","13:30","15:30","17:18","18:48"],"12.01":["08:06","09:33","13:30","15:32","17:20","18:50"],"13.01":["08:05","09:33","13:30","15:34","17:22","18:52"],"14.01":["08:04","09:34","13:30","15:36","17:24","18:54"],"15.01":["08:03","09:33","13:30","15:38","17:26","18:56"],"16.01":["08:03","09:32","13:30","15:40","17:28","18:58"],"17.01":["08:01","09:31","13:30","15:42","17:30","19:00"],"18.01":["08:00","09:30","13:30","15:44","17:32","19:02"],"19.01":["07:59","09:29","13:30","15:46","17:34","19:04"],"20.01":["07:58","09:28","13:30","15:48","17:36","19:06"],"21.01":["07:56","09:26","13:30","15:50","17:38","19:08"],"22.01":["07:55","09:25","13:30","15:52","17:40","19:10"],"23.01":["07:54","09:24","13:30","15:53","17:42","19:12"],"24.01":["07:53","09:23","13:30","15:55","17:44","19:14"],"25.01":["07:51","09:21","13:30","15:57","17:46","19:16"],"26.01":["07:49","09:19","13:30","15:59","17:48","19:18"],"27.01":["07:48","09:18","13:30","16:01","17:50","19:20"],"28.01":["07:46","09:16","13:30","16:03","17:52","19:22"],"29.01":["07:44","09:14","13:30","16:05","17:54","19:24"],"30.01":["07:42","09:12","13:30","16:07","17:56","19:26"],"31.01":["07:40","09:10","13:30","16:09","17:58","19:28"]}';
    break;

  case "Feb":
    datas = '{"01.02":["07:39","09:09","13:30","16:09","17:58","19:28"],"02.02":["07:37","09:07","13:30","16:11","17:58","19:28"],"03.02":["07:35","09:05","13:30","16:13","18:00","19:30"],"04.02":["07:33","09:03","13:30","16:15","18:02","19:32"],"05.02":["07:31","09:01","13:30","16:18","18:05","19:35"],"06.02":["07:29","08:59","13:30","16:20","18:07","19:37"],"07.02":["07:27","08:57","13:30","16:22","18:09","19:39"],"08.02":["07:25","08:55","13:30","16:24","18:11","19:41"],"09.02":["07:23","08:53","13:30","16:26","18:13","19:43"],"10.02":["07:21","08:51","13:30","16:29","18:16","19:46"],"11.02":["07:19","08:49","13:30","16:31","18:18","19:48"],"12.02":["07:17","08:47","13:30","16:33","18:20","19:50"],"13.02":["07:15","08:45","13:30","16:35","18:22","19:52"],"14.02":["07:13","08:43","13:30","16:37","18:24","19:54"],"15.02":["07:10","08:40","13:30","16:40","18:27","19:57"],"16.02":["07:08","08:38","13:30","16:42","18:29","19:59"],"17.02":["07:06","08:36","13:30","16:44","18:31","20:01"],"18.02":["07:04","08:34","13:30","16:46","18:33","20:03"],"19.02":["07:02","08:32","13:30","16:46","18:35","20:05"],"20.02":["06:59","08:29","13:30","16:51","18:38","20:08"],"21.02":["06:57","08:27","13:30","16:53","18:40","20:10"],"22.02":["06:55","08:25","13:30","16:55","18:42","20:12"],"23.02":["06:53","08:23","13:30","16:57","18:44","20:14"],"24.02":["06:50","08:20","13:30","16:59","18:46","20:16"],"25.02":["06:47","08:17","13:30","17:01","18:48","20:18"],"26.02":["06:45","08:15","13:30","17:03","18:50","20:20"],"27.02":["06:43","08:13","13:30","17:05","18:52","20:22"],"28.02":["06:41","08:11","13:30","17:07","18:54","20:24"],"29.02":["06:41","08:11","13:30","17:07","18:54","20:24"]}';
    break;

  case "Mar":
    datas = '{"01.03":["06:39","08:09","13:30","17:09","18:58","20:26"],"02.03":["06:37","08:07","13:30","17:09","18:58","20:28"],"03.03":["06:35","08:05","13:30","17:09","19:00","20:30"],"04.03":["06:33","08:03","13:30","17:10","19:02","20:32"],"05.03":["06:30","08:00","13:30","17:10","19:05","20:35"],"06.03":["06:27","07:57","13:30","17:11","19:08","20:38"],"07.03":["06:24","07:54","13:30","17:11","19:10","20:40"],"08.03":["06:21","07:51","13:30","17:12","19:12","20:42"],"09.03":["06:19","07:49","13:30","17:12","19:14","20:44"],"10.03":["06:16","07:46","13:30","17:13","19:16","20:46"],"11.03":["06:13","07:43","13:30","17:14","19:18","20:48"],"12.03":["06:10","07:40","13:30","17:15","19:20","20:50"],"13.03":["06:08","07:38","13:30","17:16","19:22","20:52"],"14.03":["06:06","07:36","13:30","17:17","19:24","20:54"],"15.03":["06:03","07:33","13:30","17:19","19:26","20:56"],"16.03":["06:00","07:30","13:30","17:20","19:28","20:58"],"17.03":["05:57","07:27","13:30","17:22","19:30","21:00"],"18.03":["05:55","07:25","13:30","17:23","19:32","21:02"],"19.03":["05:53","07:23","13:30","17:25","19:34","21:04"],"20.03":["05:50","07:20","13:30","17:27","19:36","21:06"],"21.03":["05:47","07:17","13:30","17:30","19:38","21:08"],"22.03":["05:44","07:14","13:30","17:32","19:40","21:10"],"23.03":["05:42","07:12","13:30","17:34","19:42","21:12"],"24.03":["05:40","07:10","13:30","17:36","19:44","21:14"],"25.03":["05:38","07:08","13:30","17:38","19:46","21:16"],"26.03":["05:35","07:05","13:30","17:40","19:48","21:18"],"27.03":["05:32","07:02","13:30","17:42","19:50","21:20"],"28.03":["05:30","07:00","13:30","17:44","19:52","21:22"],"29.03":["05:28","06:58","13:30","17:46","19:54","21:24"],"30.03":["05:25","06:55","13:30","17:48","19:56","21:26"],"31.03":["05:22","06:52","13:30","17:50","19:58","21:28"]}';
    break;

  case "Apr":
    datas = '{"01.04":["05:19","06:49","13:30","17:52","20:00","21:30"],"02.04":["05:17","06:47","13:30","17:53","20:02","21:32"],"03.04":["05:15","06:45","13:30","17:54","20:04","21:34"],"04.04":["05:12","06:42","13:30","17:55","20:06","21:36"],"05.04":["05:09","06:39","13:30","17:56","20:08","21:38"],"06.04":["05:06","06:36","13:30","17:57","20:10","21:40"],"07.04":["05:04","06:34","13:30","17:58","20:11","21:41"],"08.04":["05:02","06:32","13:30","17:59","20:13","21:43"],"09.04":["04:59","06:29","13:30","18:00","20:15","21:45"],"10.04":["04:56","06:26","13:30","18:01","20:17","21:47"],"11.04":["04:53","06:23","13:30","18:02","20:19","21:49"],"12.04":["04:51","06:21","13:30","18:03","20:21","21:51"],"13.04":["04:49","06:19","13:30","18:05","20:23","21:53"],"14.04":["04:47","06:17","13:30","18:07","20:25","21:55"],"15.04":["04:44","06:14","13:30","18:09","20:27","21:57"],"16.04":["04:41","06:11","13:30","18:11","20:29","21:59"],"17.04":["04:39","06:09","13:30","18:13","20:31","22:01"],"18.04":["04:37","06:07","13:30","18:15","20:33","22:03"],"19.04":["04:34","06:04","13:30","18:17","20:35","22:05"],"20.04":["04:31","06:01","13:30","18:19","20:37","22:07"],"21.04":["04:28","05:58","13:30","18:21","20:39","22:09"],"22.04":["04:26","05:56","13:30","18:23","20:41","22:11"],"23.04":["04:24","05:54","13:30","18:25","20:43","22:13"],"24.04":["04:22","05:52","13:30","18:27","20:45","22:15"],"25.04":["04:20","05:50","13:30","18:29","20:47","22:17"],"26.04":["04:17","05:47","13:30","18:31","20:49","22:19"],"27.04":["04:15","05:45","13:30","18:33","20:51","22:21"],"28.04":["04:13","05:43","13:30","18:35","20:53","22:23"],"29.04":["04:11","05:41","13:30","18:37","20:55","22:25"],"30.04":["04:08","05:38","13:30","18:39","20:57","22:27"]}';
    break;
  case "May":
    datas = '{"01.05":["04:05","05:35","13:30","18:41","20:59","22:29"],"02.05":["04:03","05:33","13:30","18:42","21:01","22:31"],"03.05":["04:01","05:31","13:30","18:43","21:03","22:33"],"04.05":["03:59","05:29","13:30","18:44","21:05","22:35"],"05.05":["03:57","05:27","13:30","18:46","21:07","22:37"],"06.05":["03:55","05:25","13:30","18:48","21:09","22:39"],"07.05":["03:53","05:23","13:30","18:50","21:11","22:41"],"08.05":["03:51","05:21","13:30","18:51","21:13","22:43"],"09.05":["03:49","05:19","13:30","18:52","21:15","22:45"],"10.05":["03:47","05:17","13:30","18:53","21:17","22:47"],"11.05":["03:44","05:14","13:30","18:54","21:19","22:49"],"12.05":["03:42","05:12","13:30","18:55","21:21","22:51"],"13.05":["03:40","05:10","13:30","18:56","21:23","22:53"],"14.05":["03:38","05:08","13:30","18:57","21:25","22:55"],"15.05":["03:36","05:06","13:30","18:58","21:27","22:57"],"16.05":["03:35","05:05","13:30","18:59","21:29","22:59"],"17.05":["03:34","05:04","13:30","19:00","21:31","23:01"],"18.05":["03:32","05:02","13:30","19:02","21:33","23:03"],"19.05":["03:31","05:01","13:30","19:04","21:35","23:05"],"20.05":["03:29","04:59","13:30","19:06","21:37","23:07"],"21.05":["03:27","04:57","13:30","19:08","21:39","23:09"],"22.05":["03:26","04:56","13:30","19:09","21:41","23:11"],"23.05":["03:24","04:54","13:30","19:11","21:43","23:13"],"24.05":["03:23","04:53","13:30","19:12","21:45","23:15"],"25.05":["03:21","04:51","13:30","19:14","21:47","23:17"],"26.05":["03:19","04:49","13:30","19:16","21:49","23:19"],"27.05":["03:18","04:48","13:30","19:17","21:51","23:21"],"28.05":["03:17","04:47","13:30","19:18","21:53","23:23"],"29.05":["03:16","04:46","13:30","19:20","21:55","23:25"],"30.05":["03:15","04:45","13:30","19:21","21:57","23:27"],"31.05":["03:13","04:43","13:30","19:23","21:59","23:29"]}';
    break;
  case Jun:
    datas = '{"01.06":["03:12","04:42","13:30","19:23","22:02","23:32"],"02.06":["03:11","04:41","13:30","19:23","22:05","23:35"],"03.06":["03:10","04:40","13:30","19:24","22:06","23:36"],"04.06":["03:09","04:39","13:30","19:24","22:08","23:38"],"05.06":["03:08","04:38","13:30","19:24","22:10","23:40"],"06.06":["03:08","04:38","13:30","19:25","22:11","23:41"],"07.06":["03:07","04:37","13:30","19:25","22:12","23:42"],"08.06":["03:07","04:37","13:30","19:25","22:13","23:43"],"09.06":["03:06","04:36","13:30","19:26","22:14","23:44"],"10.06":["03:05","04:35","13:30","19:26","22:15","23:45"],"11.06":["03:05","04:35","13:30","19:27","22:16","23:46"],"12.06":["03:04","04:34","13:30","19:27","22:16","23:46"],"13.06":["03:04","04:34","13:30","19:28","22:17","23:47"],"14.06":["03:03","04:33","13:30","19:28","22:18","23:48"],"15.06":["03:03","04:33","13:30","19:29","22:19","23:49"],"16.06":["03:03","04:33","13:30","19:29","22:19","23:49"],"17.06":["03:03","04:33","13:30","19:29","22:19","23:49"],"18.06":["03:03","04:33","13:30","19:30","22:20","23:50"],"19.06":["03:03","04:33","13:30","19:30","22:20","23:50"],"20.06":["03:03","04:33","13:30","19:31","22:21","23:51"],"21.06":["03:03","04:33","13:30","19:31","22:21","23:51"],"22.06":["03:03","04:33","13:30","19:31","22:21","23:51"],"23.06":["03:04","04:34","13:30","19:32","22:22","23:52"],"24.06":["03:04","04:34","13:30","19:32","22:22","23:52"],"25.06":["03:04","04:34","13:30","19:32","22:22","23:52"],"26.06":["03:04","04:34","13:30","19:32","22:22","23:52"],"27.06":["03:05","04:35","13:30","19:32","22:22","23:52"],"28.06":["03:06","04:36","13:30","19:31","22:21","23:51"],"29.06":["03:07","04:37","13:30","19:31","22:21","23:51"],"30.06":["03:07","04:37","13:30","19:31","22:21","23:51"]}';
    break;
  case "Jul":
    datas = '{"01.07":["03:07","04:37","13:30","19:31","22:20","23:50"],"02.07":["03:08","04:38","13:30","19:30","22:18","23:48"],"03.07":["03:09","04:39","13:30","19:29","22:18","23:48"],"04.07":["03:10","04:40","13:30","19:28","22:17","23:47"],"05.07":["03:11","04:41","13:30","19:28","22:16","23:46"],"06.07":["03:12","04:42","13:30","19:27","22:15","23:45"],"07.07":["03:13","04:43","13:30","19:26","22:14","23:44"],"08.07":["03:14","04:44","13:30","19:25","22:13","23:43"],"09.07":["03:15","04:45","13:30","19:24","22:12","23:42"],"10.07":["03:16","04:46","13:30","19:23","22:11","23:41"],"11.07":["03:17","04:47","13:30","19:22","22:09","23:39"],"12.07":["03:18","04:48","13:30","19:21","22:08","23:38"],"13.07":["03:19","04:49","13:30","19:20","22:07","23:37"],"14.07":["03:20","04:50","13:30","19:19","22:06","23:36"],"15.07":["03:23","04:53","13:30","19:18","22:05","23:35"],"16.07":["03:24","04:54","13:30","19:18","22:04","23:34"],"17.07":["03:25","04:55","13:30","19:17","22:03","23:33"],"18.07":["03:27","04:57","13:30","19:16","22:02","23:32"],"19.07":["03:29","04:59","13:30","19:15","22:00","23:30"],"20.07":["03:31","05:01","13:30","19:14","21:58","23:28"],"21.07":["03:32","05:02","13:30","19:13","21:55","23:25"],"22.07":["03:34","05:04","13:30","19:13","21:52","23:22"],"23.07":["03:35","05:05","13:30","19:12","21:49","23:19"],"24.07":["03:37","05:07","13:30","19:11","21:47","23:17"],"25.07":["03:39","05:09","13:30","19:10","21:45","23:15"],"26.07":["03:40","05:10","13:30","19:09","21:44","23:14"],"27.07":["03:42","05:12","13:30","19:08","21:42","23:12"],"28.07":["03:43","05:13","13:30","19:07","21:41","23:11"],"29.07":["03:45","05:15","13:30","19:06","21:39","23:09"],"30.07":["03:47","05:17","13:30","19:05","21:37","23:07"],"31.07":["03:48","05:18","13:30","19:05","21:35","23:05"]}';
    break;
  case "Aug":
    datas = '{"01.08":["03:50","05:20","13:30","19:05","21:32","23:02"],"02.08":["03:52","05:22","13:30","19:04","21:30","23:00"],"03.08":["03:54","05:24","13:30","19:03","21:29","22:59"],"04.08":["03:56","05:26","13:30","19:02","21:26","22:56"],"05.08":["03:58","05:28","13:30","19:01","21:23","22:53"],"06.08":["04:00","05:30","13:30","19:00","21:20","22:50"],"07.08":["04:02","05:32","13:30","18:59","21:18","22:48"],"08.08":["04:04","05:34","13:30","18:57","21:16","22:46"],"09.08":["04:06","05:36","13:30","18:56","21:13","22:43"],"10.08":["04:08","05:38","13:30","18:55","21:11","22:41"],"11.08":["04:10","05:40","13:30","18:53","21:08","22:38"],"12.08":["04:12","05:42","13:30","18:51","21:06","22:36"],"13.08":["04:14","05:44","13:30","18:49","21:04","22:34"],"14.08":["04:15","05:45","13:30","18:46","21:02","22:32"],"15.08":["04:17","05:47","13:30","18:44","21:00","22:30"],"16.08":["04:19","05:49","13:30","18:42","20:58","22:28"],"17.08":["04:21","05:51","13:30","18:40","20:55","22:25"],"18.08":["04:23","05:53","13:30","18:37","20:52","22:22"],"19.08":["04:25","05:55","13:30","18:34","20:50","22:20"],"20.08":["04:27","05:57","13:30","18:32","20:48","22:18"],"21.08":["04:29","05:59","13:30","18:30","20:45","22:15"],"22.08":["04:31","06:01","13:30","18:28","20:42","22:12"],"23.08":["04:33","06:03","13:30","18:25","20:40","22:10"],"24.08":["04:34","06:04","13:30","18:22","20:38","22:08"],"25.08":["04:36","06:06","13:30","18:20","20:36","22:06"],"26.08":["04:38","06:08","13:30","18:18","20:33","22:03"],"27.08":["04:40","06:10","13:30","18:16","20:30","22:00"],"28.08":["04:42","06:12","13:30","18:13","20:28","21:58"],"29.08":["04:43","06:13","13:30","18:10","20:26","21:56"],"30.08":["04:45","06:15","13:30","18:08","20:24","21:54"],"31.08":["04:47","06:17","13:30","18:06","21:262","21:52"]}';
    break;
  case "Sep":
    datas = '{"01.09":["04:49","06:19","13:30","18:03","20:20","21:50"],"02.09":["04:51","06:21","13:30","18:00","20:18","21:48"],"03.09":["04:53","06:23","13:30","17:57","20:17","21:47"],"04.09":["04:54","06:24","13:30","17:55","20:15","21:45"],"05.09":["04:55","06:25","13:30","17:53","20:13","21:43"],"06.09":["04:57","06:27","13:30","17:50","20:10","21:40"],"07.09":["04:59","06:29","13:30","17:48","20:07","21:37"],"08.09":["05:02","06:32","13:30","17:46","20:04","21:34"],"09.09":["05:03","06:33","13:30","17:44","20:02","21:32"],"10.09":["05:05","06:35","13:30","17:42","20:00","21:30"],"11.09":["05:07","06:37","13:30","17:39","19:57","21:27"],"12.09":["05:09","06:39","13:30","17:37","19:54","21:24"],"13.09":["05:11","06:41","13:30","17:35","19:51","21:21"],"14.09":["05:13","06:43","13:30","17:32","19:49","21:19"],"15.09":["05:15","06:45","13:30","17:29","19:47","21:17"],"16.09":["05:17","06:47","13:30","17:27","19:44","21:14"],"17.09":["05:19","06:49","13:30","17:24","19:41","21:11"],"18.09":["05:21","06:51","13:30","17:22","19:38","21:08"],"19.09":["05:22","06:52","13:30","17:20","19:36","21:06"],"20.09":["05:24","06:54","13:30","17:18","19:34","21:04"],"21.09":["05:26","06:56","13:30","17:16","19:31","21:01"],"22.09":["05:28","06:58","13:30","17:14","19:28","20:58"],"23.09":["05:30","07:00","13:30","17:12","19:25","20:55"],"24.09":["05:31","07:01","13:30","17:10","19:23","20:53"],"25.09":["05:33","07:03","13:30","17:08","19:21","20:51"],"26.09":["05:35","07:05","13:30","17:06","19:18","20:48"],"27.09":["05:37","07:07","13:30","17:04","19:15","20:45"],"28.09":["05:39","07:09","13:30","17:02","19:12","20:42"],"29.09":["05:41","07:11","13:30","17:00","19:10","20:40"],"30.09":["05:43","07:13","13:30","16:58","19:08","20:38"]}';
    break;
  case "Oct":
    datas = '{"01.10":["05:45","07:15","13:30","16:57","19:05","20:35"],"02.10":["05:47","07:17","13:30","16:56","19:02","20:32"],"03.10":["05:49","07:19","13:30","16:54","18:59","20:29"],"04.10":["05:51","07:21","13:30","16:51","18:56","20:26"],"05.10":["05:53","07:23","13:30","16:48","18:53","20:23"],"06.10":["05:54","07:24","13:30","16:46","18:50","20:20"],"07.10":["05:56","07:26","13:30","16:45","18:47","20:17"],"08.10":["05:58","07:28","13:30","16:43","18:44","20:14"],"09.10":["06:00","07:30","13:30","16:40","18:41","20:11"],"10.10":["06:02","07:32","13:30","16:38","18:38","20:08"],"11.10":["06:04","07:34","13:30","16:36","18:35","20:05"],"12.10":["06:06","07:36","13:30","16:33","18:33","20:03"],"13.10":["06:08","07:38","13:30","16:31","18:30","20:00"],"14.10":["06:10","07:40","13:30","16:28","18:27","19:57"],"15.10":["06:13","07:43","13:30","16:26","18:25","19:55"],"16.10":["06:14","07:44","13:30","16:23","18:23","19:53"],"17.10":["06:16","07:46","13:30","16:21","18:20","19:50"],"18.10":["06:18","07:48","13:30","16:19","18:18","19:48"],"19.10":["06:20","07:50","13:30","16:16","18:16","19:46"],"20.10":["06:22","07:52","13:30","16:14","18:13","19:43"],"21.10":["06:24","07:54","13:30","16:11","18:11","19:41"],"22.10":["06:26","07:56","13:30","16:09","18:09","19:39"],"23.10":["06:28","07:58","13:30","16:07","18:06","19:36"],"24.10":["06:30","08:00","13:30","16:05","18:04","19:34"],"25.10":["06:33","08:03","13:30","16:03","18:02","19:32"],"26.10":["06:35","08:05","13:30","16:00","18:00","19:30"],"27.10":["06:37","08:07","13:30","15:58","17:57","19:27"],"28.10":["06:39","08:09","13:30","15:56","17:55","19:25"],"29.10":["06:41","08:11","13:30","15:53","17:53","19:23"],"30.10":["06:43","08:13","13:30","15:51","17:51","19:21"],"31.10":["06:45","08:15","13:30","15:49","17:49","19:19"]}';
    break;
  case "Nov":
    datas = '{"01.11":["06:48","08:18","13:30","15:47","17:47","19:17"],"02.11":["06:50","08:20","13:30","15:46","17:45","19:15"],"03.11":["06:52","08:22","13:30","15:44","17:42","19:12"],"04.11":["06:54","08:24","13:30","15:43","17:40","19:10"],"05.11":["06:56","08:26","13:30","15:42","17:38","19:08"],"06.11":["06:58","08:28","13:30","15:41","17:37","19:07"],"07.11":["07:01","08:31","13:30","15:40","17:35","19:05"],"08.11":["07:03","08:33","13:30","15:39","17:33","19:03"],"09.11":["07:05","08:35","13:30","15:38","17:31","19:01"],"10.11":["07:07","08:37","13:30","15:37","17:29","18:59"],"11.11":["07:09","07:39","13:30","15:36","17:27","18:57"],"12.11":["07:11","08:41","13:30","15:35","17:25","18:55"],"13.11":["07:13","08:43","13:30","15:34","17:24","18:54"],"14.11":["07:15","08:45","13:30","15:33","17:22","18:52"],"15.11":["07:17","08:47","13:30","15:32","17:20","18:50"],"16.11":["07:19","08:49","13:30","15:31","17:19","18:53"],"17.11":["07:22","08:52","13:30","15:30","17:17","18:50"],"18.11":["07:23","08:53","13:30","15:29","17:16","18:48"],"19.11":["07:25","08:55","13:30","15:28","17:14","18:46"],"20.11":["07:27","08:57","13:30","15:27","17:13","18:43"],"21.11":["07:29","08:59","13:30","15:26","17:11","18:41"],"22.11":["07:31","09:01","13:30","15:26","17:10","18:40"],"23.11":["07:33","09:03","13:30","15:25","17:09","18:39"],"24.11":["07:35","09:05","13:30","15:24","17:08","18:38"],"25.11":["07:37","09:07","13:30","15:23","17:06","18:36"],"26.11":["07:39","09:09","13:30","15:22","17:05","18:35"],"27.11":["07:41","09:11","13:30","15:22","17:04","18:34"],"28.11":["07:42","09:12","13:30","15:21","17:03","18:33"],"29.11":["07:43","09:13","13:30","15:20","17:02","18:32"],"30.11":["07:45","09:15","13:30","15:19","17:01","18:31"]}';
    break;
  case "Dec":
    datas = '{"01.12":["07:47","09:17","13:30","15:18","17:00","18:30"],"02.12":["07:49","09:19","13:30","15:17","16:59","18:29"],"03.12":["07:50","09:20","13:30","15:17","16:59","18:29"],"04.12":["07:51","09:21","13:30","15:16","16:58","18:28"],"05.12":["07:52","09:22","13:30","15:15","16:57","18:27"],"06.12":["07:54","09:24","13:30","15:14","16:56","18:26"],"07.12":["07:56","09:26","13:30","15:13","16:55","18:25"],"08.12":["07:57","09:27","13:30","15:13","16:55","18:25"],"09.12":["07:58","09:28","13:30","15:13","16:55","18:25"],"10.12":["07:59","08:29","13:30","15:12","16:55","18:25"],"11.12":["08:01","09:31","13:30","15:12","16:54","18:24"],"12.12":["08:03","09:33","13:30","15:11","16:53","18:23"],"13.12":["08:03","09:33","13:30","15:11","16:53","18:23"],"14.12":["08:04","09:34","13:30","15:11","16:53","18:23"],"15.12":["08:05","09:35","13:30","15:11","16:53","18:23"],"16.12":["08:06","09:36","13:30","15:11","16:53","18:23"],"17.12":["08:07","09:37","13:30","15:11","16:53","18:23"],"18.12":["08:07","09:37","13:30","15:11","16:53","18:23"],"19.12":["08:08","09:38","13:30","15:11","16:53","18:23"],"20.12":["08:09","09:39","13:30","15:11","16:53","18:23"],"21.12":["08:10","09:40","13:30","15:12","16:54","18:24"],"22.12":["08:11","09:41","13:30","15:12","16:54","18:24"],"23.12":["08:11","09:41","13:30","15:12","16:54","18:24"],"24.12":["08:11","09:41","13:30","15:12","16:55","18:25"],"25.12":["08:12","09:42","13:30","15:13","16:56","18:26"],"26.12":["08:12","09:42","13:30","15:14","16:57","18:27"],"27.12":["08:12","09:42","13:30","15:15","16:58","18:28"],"28.12":["08:12","09:42","13:30","15:16","16:58","18:28"],"29.12":["08:12","09:42","13:30","15:16","16:59","18:29"],"30.12":["08:12","09:42","13:30","15:17","17:00","18:30"],"31.12":["08:12","09:42","13:30","15:18","17:01","18:31"]}';
    break;

}

console.log(month); // March
var stimes = JSON.parse(datas);


// var firstDate = Object.keys(stimes)[0];
// var firstTimes = stimes[firstDate];
//console.log(firstDate); 


var DayinMonth = moment().format('L'); 
// var dateStr = '03/05/2023';

var dateParts = DayinMonth.split('/'); // разделяем дату на части по разделителю '/'
var formattedDate = dateParts[1] + '.' + dateParts[0]; // форматируем дату в нужный формат
console.log(formattedDate); // Curr Day: 10.03


var time2 = moment().format('HH:mm'); 
console.log(time2); // Curr Time 22:00


var TimeSalat = stimes[formattedDate];
var currTime = Object.keys(TimeSalat)[0];


console.log(TimeSalat)
// console.log(currTime);
console.log(fajr);


var salatFajr = document.getElementById('fajr');
var fajr = TimeSalat[currTime];
salatFajr.innerHTML = fajr;

var Vosxod = document.getElementById('vosxod');
var vosxodTime = TimeSalat[1];
Vosxod.innerHTML = vosxodTime;


var salatZuhr = document.getElementById('zuhr');
var zuhr = TimeSalat[2];
salatZuhr.innerHTML = zuhr;

var salatAsr = document.getElementById('asr');
var asr = TimeSalat[3];
salatAsr.innerHTML = asr;

var salatMagrib = document.getElementById('magrib');
var magrib = TimeSalat[4];
salatMagrib.innerHTML = magrib;

var salatIsha = document.getElementById('isha');
var isha = TimeSalat[5];
salatIsha.innerHTML = isha;


// stimes.forEach(element => {
//   console.log(element);
// });