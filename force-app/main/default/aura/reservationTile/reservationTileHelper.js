({
    sendObjectEvent : function(component, reservation) 
    {
        var selectEvt = $A.get("e.c:selectObjectEvent"); 
        
        selectEvt.setParams({
            "object": reservation, 
            "channel": "spaceDesigner" 
        }); 
        
        selectEvt.fire(); 
    },
    
    sendMuteEvent : function(component, recId)
    {
        var isMuted = component.get("v.muted");
        
        if(isMuted)
        {
            var tile = component.find("tile");
            $A.util.removeClass(tile, "mute");
            component.set("v.muted", !isMuted);
        }
        
        var mutes = new Set();
        mutes.add(recId);
        var action = $A.get("e.c:muteTilesEvent");
        
        action.setParams({
            "muteArray" : mutes,
            "channel": "spacesDesigner"
        });
        
        action.fire(); 
    }
})