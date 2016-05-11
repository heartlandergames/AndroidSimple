#pragma strict
import UnityEngine.UI;


var points : int;

var text : Text;

var spawn : GameObject;

var item : GameObject;

var spawnRate : float;

var currentCount : float;

function Start () {

}

function Update () {
    ShowPoints();
    SpawnItem();
}

function AddPoint ()
{
    points += 1;
    return;
}

function ShowPoints()
{
    text.text = "POINTS : " + points;
}

function SpawnItem()
{
    currentCount += Time.deltaTime;
    if(currentCount >= spawnRate)
    {
        var newItem : GameObject = Instantiate(item, spawn.transform.position, spawn.transform.rotation);
     
       newItem.GetComponent(Rigidbody2D).AddForce(Vector2(Random.Range(-3,3),0), ForceMode2D.Impulse);
        currentCount = 0;
        spawnRate -= .001;
    }
}