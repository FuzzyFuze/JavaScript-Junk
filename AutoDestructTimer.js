/*
--------------------------------------------------------------------------------
Remove these comments if the script has problems compiling in your Unity Editor!
Only works with Unity versions that support JavaScript!
Tested with Unity 2017.3.1f1 (64-bit).
--------------------------------------------------------------------------------
Must be attached to a GameObject.
Update() checks the name of the GameObject the script is attached, to see if it matches the name of the Target.
Destroys the target object after float countdown (lifeTime).
*/

#pragma strict

@script RequireComponent(GameObject)

public var lifeTime : float = 0f;
public var targetName : String;    // should be the same as the current GameObject

function Update() 
{
    if(gameObject.name == targetName) 
    {
        Destroy (gameObject, lifeTime);
    }
}