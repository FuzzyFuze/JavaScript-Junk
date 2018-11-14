/* 
--------------------------------------------------------------------------------
Remove these comments if the script has problems compiling in your Unity Editor!
Only works with Unity versions that support JavaScript!
Tested with Unity 2017.3.1f1 (64-bit).
--------------------------------------------------------------------------------
Must be attached to a Light Component.
Start() assigns the Light Component to the current instance the script is attached to.
On Update(), if a random value less than the float amount is generated:
When the light is on, it will turn off, else it will remain on.
*/

#pragma strict

@script RequireComponent(Light)

public var valueLimiter : float = 0.9f;
public var lightSource : Light;

function Start()
{
	lightSource = GetComponent.<Light>();
}

function Update() 
{
    if (Random.value > valueLimiter)
    {
        if(lightSource.enabled == true)
        {
            lightSource.enabled = false;
        } else {
            lightSource.enabled = true;
        }
    }
}