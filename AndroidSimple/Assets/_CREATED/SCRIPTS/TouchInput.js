#pragma strict

var manager  : Manager;


function Start () {
    manager = gameObject.FindWithTag("MANAGER").GetComponent(Manager);
}

function Update () {

    if(Input.touchCount > 0)
    {
        for (var i = 0; i < Input.touchCount; i++)
        {
            var hit : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.GetTouch(i).position), Vector2.zero);
            
                if(hit && Input.GetTouch(i).phase == TouchPhase.Began)
                {
                    if(hit.transform.gameObject.tag == "BALL")
                    {
                        ItemTouched();
                        Destroy(hit.transform.gameObject);
                    }
                    
                }
                var hitInfo : Collider2D = Physics2D.OverlapPoint(Input.GetTouch(i).position);
                if(hitInfo.gameObject.tag =="TESTBUTTON")
                {
                    if(Input.GetTouch(i).phase == TouchPhase.Began)
                    {
                        ItemTouched();
                    }
                }
                if(hitInfo.gameObject.tag == "QUITBUTTON")
                {
                    Application.Quit();
                }
        }
    }


}

function ItemTouched()
{
    manager.AddPoint();
}