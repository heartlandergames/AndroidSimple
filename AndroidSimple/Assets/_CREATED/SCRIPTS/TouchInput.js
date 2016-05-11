#pragma strict

var manager  : Manager;


function Start () {
    manager = gameObject.FindWithTag("MANAGER").GetComponent(Manager);
}

function Update () {

    if(Input.touchCount > 0)
    {
         var hit : Collider2D;
       for (var i = 0; i <= Input.touchCount; i++)
       {
           if(Input.GetTouch(i).phase == TouchPhase.Began)
           {
               hit = Physics2D.OverlapPoint(Input.GetTouch(i).position);
            
               if(hit.gameObject.tag == "ITEM")
               {
                   Destroy(hit.gameObject);
                   ItemTouched();
               }
               if(hit.gameObject.tag=="QUITBUTTON")
               {
                   Application.Quit();
               }
           }
        }
    }


}

function ItemTouched()
{
    manager.AddPoint();
}