<?php  
require 'modules/projects.php';
require 'modules/database.php';

session_start();
define('DS', DIRECTORY_SEPARATOR);
define('ROOT', dirname(__FILE__));
$url = isset($_SERVER['PATH_INFO']) ?  explode('/', ltrim($_SERVER['PATH_INFO'], '/')) : [];


switch ($_SERVER['PATH_INFO']){
    case '/contact':
        require_once(ROOT . DS . 'templates' . DS .'contact.php');
        break;
        case '/game':
        require_once(ROOT . DS . 'templates' . DS .'game.php');
        break;
        case '/info':
        require_once(ROOT . DS . 'templates' . DS .'info.php');
        break;
        case '/calculator':
        require_once(ROOT . DS . 'templates' . DS .'secret.php');
        break;
        case '/skills':
        require_once(ROOT . DS . 'templates' . DS .'skills.php');
        break;
        default:
        require_once(ROOT . DS . 'templates' . DS .'home.php');

}








?>