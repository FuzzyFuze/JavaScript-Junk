/* 
--------------------------------------------------------------------------------
Remove these comments if the script has problems compiling in your Unity Editor!
Only works with Unity versions that support JavaScript!
Tested with Unity 2017.3.1f1 (64-bit).
--------------------------------------------------------------------------------
Must be attached to an AudioSource.
A very basic gun shot script which plays an audio clip and toggles the SetActive state of two GameObjects.
Intended for a single-shot weapon which fires once when the key bind is pressed and doesn't fire unless the key bind 
was released between firing.
I suggest attaching the desired AudioSource and this script to the actual weapon itself, making sure you set the key bind 
to the same KeyCode designation as is found in the script which is handling the rest of your weapon shooting logic.
The two GameObjects should be your muzzle flash animation/sprite and muzzle flash glow light, attached to the barrel of the weapon.
The Start() function ensures the audio clip does not loop and clears the SetActive state of the GameObjects.
Update() checks if the key bind was pressed and acts accordingly, if the key is in any state except for being pressed, during any 
given frame, then the muzzle flash components are hidden.
This module could easily be expanded to handle the logic for spawning a bullet or shell casing animation when a weapon is fired.
*/

#pragma strict

@script RequireComponent(AudioSource) 

public var soundSource : AudioSource;

public var muzzleFlash : GameObject;
public var muzzleGlow : GameObject;

private var keyBind = KeyCode.Mouse0;

function HideMuzzleFlash()
{
    muzzleGlow.SetActive(false);
    muzzleFlash.SetActive(false);
}
function PlaySound() 
{
    soundSource.Play(); 
}
function ShowMuzzleFlash()
{
    muzzleGlow.SetActive(true);
    muzzleFlash.SetActive(true);
}
function Start()
{
    soundSource.loop = false;
    HideMuzzleFlash();
}
function Update() 
{
    if(Input.GetKeyDown(keyBind))
    {
        PlaySound();
        ShowMuzzleFlash();
    }
    else {
        HideMuzzleFlash();
    }
}
