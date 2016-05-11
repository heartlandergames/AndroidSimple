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
    points++;
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
        newItem.AddComponent(Rigidbody);
        newItem.GetComponent(Rigidbody).useGravity= true;
        newItem.GetComponent(Rigidbody).AddForce(Vector3(Random.Range(-5,5), 0,0), ForceMode.Impulse);
        currentCount = 0;
        spawnRate -= .001;
    }
}