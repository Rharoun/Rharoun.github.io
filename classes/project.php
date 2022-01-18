<?php


class project
{
    public $id;
    public $name;
    public $project;
    public $picture;

    public function __construct()
    {
        settype($this->id, 'integer');
    }
}