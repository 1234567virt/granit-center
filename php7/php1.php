<?php
class Pet{
    public $name;
    public $type="unknow";
    function say($word){
        echo $this->name . "said $word\n";
    }
}
    $cat=new Pet();
    $dog=new Pet();
    $cat->type="cat";
    $cat->name="Murzik";
    $cat->say('mya');
    $dog->type="dog";
    $dog->name="Tuzik";
    $dog->say('gav');
echo $cat->name;