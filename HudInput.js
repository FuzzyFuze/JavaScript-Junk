/*
--------------------------------------------------------------------------------
Remove these comments if the script has problems compiling in your Unity Editor!
Only works with Unity versions that support JavaScript!
Tested with Unity 2017.3.1f1 (64-bit).
--------------------------------------------------------------------------------
Four configurable keybinds to control the SetActive state of four GameObjects.
Intended use for User Heads Up Display (HUD) but could be used for just about anything.
Can be attached to any GameObject but makes most sense to attach it to the player seeing as it is just keybinds.
An array could be used to hold the GameObjects and probably should be if the number of elements were to grow excessively.
Start() clears the SetActive and Boolean states of all elements except for the one labelled CrossHair.
Update() checks if any keybinds are pressed and responds in one of two ways:
Either 1) When the user releases the key after pressing, the element deactivates again - hudElement0 is set this way.
Or 2) The key must be pressed again to deactivate the element (sticky) - the other 3 elements are set this way.
*/

#pragma strict

// Hud Elements
public var hudElem0 : GameObject;
public var hudElem1 : GameObject;
public var hudElem2 : GameObject;
public var CrossHair : GameObject;

// Keybinds
public var ToggleElem0 = KeyCode.Tab;
public var ToggleElem1 = KeyCode.H;
public var ToggleElem2 = KeyCode.J;
public var ToggleCrossHair = KeyCode.K;

// Bools
private var CrossHairOn : boolean;
private var elem1IsOn : boolean;
private var elem2IsOn : boolean;

function Start()
{
    hudElem0.SetActive(false);
    hudElem1.SetActive(false);
    hudElem2.SetActive(false);
    elem1IsOn = false;
    elem2IsOn = false;
    CrossHairOn = true;
}
function Update()
{
    if(Input.GetKeyDown(ToggleElem0))
    {
        hudElem0.SetActive(true);
    }
    if(Input.GetKeyUp(ToggleElem0))
    {
        hudElem0.SetActive(false);
    }
    if(Input.GetKeyDown(ToggleElem1)) 
    {
        elem1IsOn = !elem1IsOn;
        if(elem1IsOn)
        {
            hudElem1.SetActive(true);
        } else if(!elem1IsOn) {
            hudElem1.SetActive(false);
        }
    }
    if(Input.GetKeyDown(ToggleElem2))
    {
        elem2IsOn = !elem2IsOn;
        if(elem2IsOn)
        {
            hudElem2.SetActive(true);
        } else if(!elem2IsOn) {
            hudElem2.SetActive(false);
        }
    }
    if(Input.GetKeyDown(ToggleCrossHair))
    {
        CrossHairOn = !CrossHairOn;
        if(CrossHairOn)
        {
            CrossHair.SetActive(false);
        } else if(!CrossHairOn) {
            CrossHair.SetActive(true);
        }
    }
}
