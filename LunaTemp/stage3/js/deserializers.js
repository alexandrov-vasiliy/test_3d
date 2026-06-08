var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.JointSpring' )
  var i729 = data
  i728.spring = i729[0]
  i728.damper = i729[1]
  i728.targetPosition = i729[2]
  return i728
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.JointMotor' )
  var i731 = data
  i730.m_TargetVelocity = i731[0]
  i730.m_Force = i731[1]
  i730.m_FreeSpin = i731[2]
  return i730
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.JointLimits' )
  var i733 = data
  i732.m_Min = i733[0]
  i732.m_Max = i733[1]
  i732.m_Bounciness = i733[2]
  i732.m_BounceMinVelocity = i733[3]
  i732.m_ContactDistance = i733[4]
  i732.minBounce = i733[5]
  i732.maxBounce = i733[6]
  return i732
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.JointDrive' )
  var i735 = data
  i734.m_PositionSpring = i735[0]
  i734.m_PositionDamper = i735[1]
  i734.m_MaximumForce = i735[2]
  i734.m_UseAcceleration = i735[3]
  return i734
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i737 = data
  i736.m_Spring = i737[0]
  i736.m_Damper = i737[1]
  return i736
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i739 = data
  i738.m_Limit = i739[0]
  i738.m_Bounciness = i739[1]
  i738.m_ContactDistance = i739[2]
  return i738
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i741 = data
  i740.m_ExtremumSlip = i741[0]
  i740.m_ExtremumValue = i741[1]
  i740.m_AsymptoteSlip = i741[2]
  i740.m_AsymptoteValue = i741[3]
  i740.m_Stiffness = i741[4]
  return i740
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i743 = data
  i742.m_LowerAngle = i743[0]
  i742.m_UpperAngle = i743[1]
  return i742
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i745 = data
  i744.m_MotorSpeed = i745[0]
  i744.m_MaximumMotorTorque = i745[1]
  return i744
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i747 = data
  i746.m_DampingRatio = i747[0]
  i746.m_Frequency = i747[1]
  i746.m_Angle = i747[2]
  return i746
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i749 = data
  i748.m_LowerTranslation = i749[0]
  i748.m_UpperTranslation = i749[1]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i751 = data
  i750.position = new pc.Vec3( i751[0], i751[1], i751[2] )
  i750.scale = new pc.Vec3( i751[3], i751[4], i751[5] )
  i750.rotation = new pc.Quat(i751[6], i751[7], i751[8], i751[9])
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'sharedMesh')
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'additionalVertexStreams')
  i754.enabled = !!i755[2]
  request.r(i755[3], i755[4], 0, i754, 'sharedMaterial')
  var i757 = i755[5]
  var i756 = []
  for(var i = 0; i < i757.length; i += 2) {
  request.r(i757[i + 0], i757[i + 1], 2, i756, '')
  }
  i754.sharedMaterials = i756
  i754.receiveShadows = !!i755[6]
  i754.shadowCastingMode = i755[7]
  i754.sortingLayerID = i755[8]
  i754.sortingOrder = i755[9]
  i754.lightmapIndex = i755[10]
  i754.lightmapSceneIndex = i755[11]
  i754.lightmapScaleOffset = new pc.Vec4( i755[12], i755[13], i755[14], i755[15] )
  i754.lightProbeUsage = i755[16]
  i754.reflectionProbeUsage = i755[17]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i761 = data
  i760.name = i761[0]
  i760.tagId = i761[1]
  i760.enabled = !!i761[2]
  i760.isStatic = !!i761[3]
  i760.layer = i761[4]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i763 = data
  i762.name = i763[0]
  i762.halfPrecision = !!i763[1]
  i762.useSimplification = !!i763[2]
  i762.useUInt32IndexFormat = !!i763[3]
  i762.vertexCount = i763[4]
  i762.aabb = i763[5]
  var i765 = i763[6]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( !!i765[i + 0] );
  }
  i762.streams = i764
  i762.vertices = i763[7]
  var i767 = i763[8]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i767[i + 0]) );
  }
  i762.subMeshes = i766
  var i769 = i763[9]
  var i768 = []
  for(var i = 0; i < i769.length; i += 16) {
    i768.push( new pc.Mat4().setData(i769[i + 0], i769[i + 1], i769[i + 2], i769[i + 3],  i769[i + 4], i769[i + 5], i769[i + 6], i769[i + 7],  i769[i + 8], i769[i + 9], i769[i + 10], i769[i + 11],  i769[i + 12], i769[i + 13], i769[i + 14], i769[i + 15]) );
  }
  i762.bindposes = i768
  var i771 = i763[10]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i771[i + 0]) );
  }
  i762.blendShapes = i770
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i777 = data
  i776.triangles = i777[0]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i783 = data
  i782.name = i783[0]
  var i785 = i783[1]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i785[i + 0]) );
  }
  i782.frames = i784
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i786 = root || new pc.UnityMaterial()
  var i787 = data
  i786.name = i787[0]
  request.r(i787[1], i787[2], 0, i786, 'shader')
  i786.renderQueue = i787[3]
  i786.enableInstancing = !!i787[4]
  var i789 = i787[5]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i789[i + 0]) );
  }
  i786.floatParameters = i788
  var i791 = i787[6]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i791[i + 0]) );
  }
  i786.colorParameters = i790
  var i793 = i787[7]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i793[i + 0]) );
  }
  i786.vectorParameters = i792
  var i795 = i787[8]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i795[i + 0]) );
  }
  i786.textureParameters = i794
  var i797 = i787[9]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i797[i + 0]) );
  }
  i786.materialFlags = i796
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i801 = data
  i800.name = i801[0]
  i800.value = i801[1]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i805 = data
  i804.name = i805[0]
  i804.value = new pc.Color(i805[1], i805[2], i805[3], i805[4])
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i809 = data
  i808.name = i809[0]
  i808.value = new pc.Vec4( i809[1], i809[2], i809[3], i809[4] )
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i813 = data
  i812.name = i813[0]
  request.r(i813[1], i813[2], 0, i812, 'value')
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i817 = data
  i816.name = i817[0]
  i816.enabled = !!i817[1]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i819 = data
  i818.pivot = new pc.Vec2( i819[0], i819[1] )
  i818.anchorMin = new pc.Vec2( i819[2], i819[3] )
  i818.anchorMax = new pc.Vec2( i819[4], i819[5] )
  i818.sizeDelta = new pc.Vec2( i819[6], i819[7] )
  i818.anchoredPosition3D = new pc.Vec3( i819[8], i819[9], i819[10] )
  i818.rotation = new pc.Quat(i819[11], i819[12], i819[13], i819[14])
  i818.scale = new pc.Vec3( i819[15], i819[16], i819[17] )
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i821 = data
  i820.planeDistance = i821[0]
  i820.referencePixelsPerUnit = i821[1]
  i820.isFallbackOverlay = !!i821[2]
  i820.renderMode = i821[3]
  i820.renderOrder = i821[4]
  i820.sortingLayerName = i821[5]
  i820.sortingOrder = i821[6]
  i820.scaleFactor = i821[7]
  request.r(i821[8], i821[9], 0, i820, 'worldCamera')
  i820.overrideSorting = !!i821[10]
  i820.pixelPerfect = !!i821[11]
  i820.targetDisplay = i821[12]
  i820.overridePixelPerfect = !!i821[13]
  i820.enabled = !!i821[14]
  return i820
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i823 = data
  i822.m_UiScaleMode = i823[0]
  i822.m_ReferencePixelsPerUnit = i823[1]
  i822.m_ScaleFactor = i823[2]
  i822.m_ReferenceResolution = new pc.Vec2( i823[3], i823[4] )
  i822.m_ScreenMatchMode = i823[5]
  i822.m_MatchWidthOrHeight = i823[6]
  i822.m_PhysicalUnit = i823[7]
  i822.m_FallbackScreenDPI = i823[8]
  i822.m_DefaultSpriteDPI = i823[9]
  i822.m_DynamicPixelsPerUnit = i823[10]
  i822.m_PresetInfoIsWorld = !!i823[11]
  return i822
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i824 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i825 = data
  i824.m_IgnoreReversedGraphics = !!i825[0]
  i824.m_BlockingObjects = i825[1]
  i824.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i825[2] )
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i827 = data
  i826.m_Alpha = i827[0]
  i826.m_Interactable = !!i827[1]
  i826.m_BlocksRaycasts = !!i827[2]
  i826.m_IgnoreParentGroups = !!i827[3]
  i826.enabled = !!i827[4]
  return i826
}

Deserializers["_Game.Packshot.PackshotController"] = function (request, data, root) {
  var i828 = root || request.c( '_Game.Packshot.PackshotController' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'canvasGroup')
  request.r(i829[2], i829[3], 0, i828, 'ctaButton')
  i828.fadeDuration = i829[4]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i831 = data
  i830.cullTransparentMesh = !!i831[0]
  return i830
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.UI.Image' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'm_Sprite')
  i832.m_Type = i833[2]
  i832.m_PreserveAspect = !!i833[3]
  i832.m_FillCenter = !!i833[4]
  i832.m_FillMethod = i833[5]
  i832.m_FillAmount = i833[6]
  i832.m_FillClockwise = !!i833[7]
  i832.m_FillOrigin = i833[8]
  i832.m_UseSpriteMesh = !!i833[9]
  i832.m_PixelsPerUnitMultiplier = i833[10]
  request.r(i833[11], i833[12], 0, i832, 'm_Material')
  i832.m_Maskable = !!i833[13]
  i832.m_Color = new pc.Color(i833[14], i833[15], i833[16], i833[17])
  i832.m_RaycastTarget = !!i833[18]
  i832.m_RaycastPadding = new pc.Vec4( i833[19], i833[20], i833[21], i833[22] )
  return i832
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i834 = root || request.c( 'UnityEngine.UI.Button' )
  var i835 = data
  i834.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i835[0], i834.m_OnClick)
  i834.m_Navigation = request.d('UnityEngine.UI.Navigation', i835[1], i834.m_Navigation)
  i834.m_Transition = i835[2]
  i834.m_Colors = request.d('UnityEngine.UI.ColorBlock', i835[3], i834.m_Colors)
  i834.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i835[4], i834.m_SpriteState)
  i834.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i835[5], i834.m_AnimationTriggers)
  i834.m_Interactable = !!i835[6]
  request.r(i835[7], i835[8], 0, i834, 'm_TargetGraphic')
  return i834
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i837 = data
  i836.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i837[0], i836.m_PersistentCalls)
  return i836
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i839 = data
  var i841 = i839[0]
  var i840 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i841.length; i += 1) {
    i840.add(request.d('UnityEngine.Events.PersistentCall', i841[i + 0]));
  }
  i838.m_Calls = i840
  return i838
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'm_Target')
  i844.m_TargetAssemblyTypeName = i845[2]
  i844.m_MethodName = i845[3]
  i844.m_Mode = i845[4]
  i844.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i845[5], i844.m_Arguments)
  i844.m_CallState = i845[6]
  return i844
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i847 = data
  i846.m_Mode = i847[0]
  i846.m_WrapAround = !!i847[1]
  request.r(i847[2], i847[3], 0, i846, 'm_SelectOnUp')
  request.r(i847[4], i847[5], 0, i846, 'm_SelectOnDown')
  request.r(i847[6], i847[7], 0, i846, 'm_SelectOnLeft')
  request.r(i847[8], i847[9], 0, i846, 'm_SelectOnRight')
  return i846
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i848 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i849 = data
  i848.m_NormalColor = new pc.Color(i849[0], i849[1], i849[2], i849[3])
  i848.m_HighlightedColor = new pc.Color(i849[4], i849[5], i849[6], i849[7])
  i848.m_PressedColor = new pc.Color(i849[8], i849[9], i849[10], i849[11])
  i848.m_SelectedColor = new pc.Color(i849[12], i849[13], i849[14], i849[15])
  i848.m_DisabledColor = new pc.Color(i849[16], i849[17], i849[18], i849[19])
  i848.m_ColorMultiplier = i849[20]
  i848.m_FadeDuration = i849[21]
  return i848
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i850 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'm_HighlightedSprite')
  request.r(i851[2], i851[3], 0, i850, 'm_PressedSprite')
  request.r(i851[4], i851[5], 0, i850, 'm_SelectedSprite')
  request.r(i851[6], i851[7], 0, i850, 'm_DisabledSprite')
  return i850
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i853 = data
  i852.m_NormalTrigger = i853[0]
  i852.m_HighlightedTrigger = i853[1]
  i852.m_PressedTrigger = i853[2]
  i852.m_SelectedTrigger = i853[3]
  i852.m_DisabledTrigger = i853[4]
  return i852
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.UI.Outline' )
  var i855 = data
  i854.m_EffectColor = new pc.Color(i855[0], i855[1], i855[2], i855[3])
  i854.m_EffectDistance = new pc.Vec2( i855[4], i855[5] )
  i854.m_UseGraphicAlpha = !!i855[6]
  return i854
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i856 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i857 = data
  i856.m_hasFontAssetChanged = !!i857[0]
  request.r(i857[1], i857[2], 0, i856, 'm_baseMaterial')
  i856.m_maskOffset = new pc.Vec4( i857[3], i857[4], i857[5], i857[6] )
  i856.m_text = i857[7]
  i856.m_isRightToLeft = !!i857[8]
  request.r(i857[9], i857[10], 0, i856, 'm_fontAsset')
  request.r(i857[11], i857[12], 0, i856, 'm_sharedMaterial')
  var i859 = i857[13]
  var i858 = []
  for(var i = 0; i < i859.length; i += 2) {
  request.r(i859[i + 0], i859[i + 1], 2, i858, '')
  }
  i856.m_fontSharedMaterials = i858
  request.r(i857[14], i857[15], 0, i856, 'm_fontMaterial')
  var i861 = i857[16]
  var i860 = []
  for(var i = 0; i < i861.length; i += 2) {
  request.r(i861[i + 0], i861[i + 1], 2, i860, '')
  }
  i856.m_fontMaterials = i860
  i856.m_fontColor32 = UnityEngine.Color32.ConstructColor(i857[17], i857[18], i857[19], i857[20])
  i856.m_fontColor = new pc.Color(i857[21], i857[22], i857[23], i857[24])
  i856.m_enableVertexGradient = !!i857[25]
  i856.m_colorMode = i857[26]
  i856.m_fontColorGradient = request.d('TMPro.VertexGradient', i857[27], i856.m_fontColorGradient)
  request.r(i857[28], i857[29], 0, i856, 'm_fontColorGradientPreset')
  request.r(i857[30], i857[31], 0, i856, 'm_spriteAsset')
  i856.m_tintAllSprites = !!i857[32]
  request.r(i857[33], i857[34], 0, i856, 'm_StyleSheet')
  i856.m_TextStyleHashCode = i857[35]
  i856.m_overrideHtmlColors = !!i857[36]
  i856.m_faceColor = UnityEngine.Color32.ConstructColor(i857[37], i857[38], i857[39], i857[40])
  i856.m_fontSize = i857[41]
  i856.m_fontSizeBase = i857[42]
  i856.m_fontWeight = i857[43]
  i856.m_enableAutoSizing = !!i857[44]
  i856.m_fontSizeMin = i857[45]
  i856.m_fontSizeMax = i857[46]
  i856.m_fontStyle = i857[47]
  i856.m_HorizontalAlignment = i857[48]
  i856.m_VerticalAlignment = i857[49]
  i856.m_textAlignment = i857[50]
  i856.m_characterSpacing = i857[51]
  i856.m_wordSpacing = i857[52]
  i856.m_lineSpacing = i857[53]
  i856.m_lineSpacingMax = i857[54]
  i856.m_paragraphSpacing = i857[55]
  i856.m_charWidthMaxAdj = i857[56]
  i856.m_enableWordWrapping = !!i857[57]
  i856.m_wordWrappingRatios = i857[58]
  i856.m_overflowMode = i857[59]
  request.r(i857[60], i857[61], 0, i856, 'm_linkedTextComponent')
  request.r(i857[62], i857[63], 0, i856, 'parentLinkedComponent')
  i856.m_enableKerning = !!i857[64]
  i856.m_enableExtraPadding = !!i857[65]
  i856.checkPaddingRequired = !!i857[66]
  i856.m_isRichText = !!i857[67]
  i856.m_parseCtrlCharacters = !!i857[68]
  i856.m_isOrthographic = !!i857[69]
  i856.m_isCullingEnabled = !!i857[70]
  i856.m_horizontalMapping = i857[71]
  i856.m_verticalMapping = i857[72]
  i856.m_uvLineOffset = i857[73]
  i856.m_geometrySortingOrder = i857[74]
  i856.m_IsTextObjectScaleStatic = !!i857[75]
  i856.m_VertexBufferAutoSizeReduction = !!i857[76]
  i856.m_useMaxVisibleDescender = !!i857[77]
  i856.m_pageToDisplay = i857[78]
  i856.m_margin = new pc.Vec4( i857[79], i857[80], i857[81], i857[82] )
  i856.m_isUsingLegacyAnimationComponent = !!i857[83]
  i856.m_isVolumetricText = !!i857[84]
  request.r(i857[85], i857[86], 0, i856, 'm_Material')
  i856.m_Maskable = !!i857[87]
  i856.m_Color = new pc.Color(i857[88], i857[89], i857[90], i857[91])
  i856.m_RaycastTarget = !!i857[92]
  i856.m_RaycastPadding = new pc.Vec4( i857[93], i857[94], i857[95], i857[96] )
  return i856
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i862 = root || request.c( 'TMPro.VertexGradient' )
  var i863 = data
  i862.topLeft = new pc.Color(i863[0], i863[1], i863[2], i863[3])
  i862.topRight = new pc.Color(i863[4], i863[5], i863[6], i863[7])
  i862.bottomLeft = new pc.Color(i863[8], i863[9], i863[10], i863[11])
  i862.bottomRight = new pc.Color(i863[12], i863[13], i863[14], i863[15])
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i865 = data
  i864.name = i865[0]
  i864.width = i865[1]
  i864.height = i865[2]
  i864.mipmapCount = i865[3]
  i864.anisoLevel = i865[4]
  i864.filterMode = i865[5]
  i864.hdr = !!i865[6]
  i864.format = i865[7]
  i864.wrapMode = i865[8]
  i864.alphaIsTransparency = !!i865[9]
  i864.alphaSource = i865[10]
  i864.graphicsFormat = i865[11]
  i864.sRGBTexture = !!i865[12]
  i864.desiredColorSpace = i865[13]
  i864.wrapU = i865[14]
  i864.wrapV = i865[15]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i867 = data
  i866.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i867[0], i866.main)
  i866.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i867[1], i866.colorBySpeed)
  i866.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i867[2], i866.colorOverLifetime)
  i866.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i867[3], i866.emission)
  i866.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i867[4], i866.rotationBySpeed)
  i866.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i867[5], i866.rotationOverLifetime)
  i866.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i867[6], i866.shape)
  i866.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i867[7], i866.sizeBySpeed)
  i866.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i867[8], i866.sizeOverLifetime)
  i866.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i867[9], i866.textureSheetAnimation)
  i866.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i867[10], i866.velocityOverLifetime)
  i866.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i867[11], i866.noise)
  i866.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i867[12], i866.inheritVelocity)
  i866.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i867[13], i866.forceOverLifetime)
  i866.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i867[14], i866.limitVelocityOverLifetime)
  i866.useAutoRandomSeed = !!i867[15]
  i866.randomSeed = i867[16]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i868 = root || new pc.ParticleSystemMain()
  var i869 = data
  i868.duration = i869[0]
  i868.loop = !!i869[1]
  i868.prewarm = !!i869[2]
  i868.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[3], i868.startDelay)
  i868.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[4], i868.startLifetime)
  i868.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[5], i868.startSpeed)
  i868.startSize3D = !!i869[6]
  i868.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[7], i868.startSizeX)
  i868.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[8], i868.startSizeY)
  i868.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[9], i868.startSizeZ)
  i868.startRotation3D = !!i869[10]
  i868.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[11], i868.startRotationX)
  i868.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[12], i868.startRotationY)
  i868.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[13], i868.startRotationZ)
  i868.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i869[14], i868.startColor)
  i868.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[15], i868.gravityModifier)
  i868.simulationSpace = i869[16]
  request.r(i869[17], i869[18], 0, i868, 'customSimulationSpace')
  i868.simulationSpeed = i869[19]
  i868.useUnscaledTime = !!i869[20]
  i868.scalingMode = i869[21]
  i868.playOnAwake = !!i869[22]
  i868.maxParticles = i869[23]
  i868.emitterVelocityMode = i869[24]
  i868.stopAction = i869[25]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i870 = root || new pc.MinMaxCurve()
  var i871 = data
  i870.mode = i871[0]
  i870.curveMin = new pc.AnimationCurve( { keys_flow: i871[1] } )
  i870.curveMax = new pc.AnimationCurve( { keys_flow: i871[2] } )
  i870.curveMultiplier = i871[3]
  i870.constantMin = i871[4]
  i870.constantMax = i871[5]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i872 = root || new pc.MinMaxGradient()
  var i873 = data
  i872.mode = i873[0]
  i872.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i873[1], i872.gradientMin)
  i872.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i873[2], i872.gradientMax)
  i872.colorMin = new pc.Color(i873[3], i873[4], i873[5], i873[6])
  i872.colorMax = new pc.Color(i873[7], i873[8], i873[9], i873[10])
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i875 = data
  i874.mode = i875[0]
  var i877 = i875[1]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i877[i + 0]) );
  }
  i874.colorKeys = i876
  var i879 = i875[2]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i879[i + 0]) );
  }
  i874.alphaKeys = i878
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i880 = root || new pc.ParticleSystemColorBySpeed()
  var i881 = data
  i880.enabled = !!i881[0]
  i880.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i881[1], i880.color)
  i880.range = new pc.Vec2( i881[2], i881[3] )
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i885 = data
  i884.color = new pc.Color(i885[0], i885[1], i885[2], i885[3])
  i884.time = i885[4]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i889 = data
  i888.alpha = i889[0]
  i888.time = i889[1]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i890 = root || new pc.ParticleSystemColorOverLifetime()
  var i891 = data
  i890.enabled = !!i891[0]
  i890.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i891[1], i890.color)
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i892 = root || new pc.ParticleSystemEmitter()
  var i893 = data
  i892.enabled = !!i893[0]
  i892.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[1], i892.rateOverTime)
  i892.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[2], i892.rateOverDistance)
  var i895 = i893[3]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i895[i + 0]) );
  }
  i892.bursts = i894
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i898 = root || new pc.ParticleSystemBurst()
  var i899 = data
  i898.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[0], i898.count)
  i898.cycleCount = i899[1]
  i898.minCount = i899[2]
  i898.maxCount = i899[3]
  i898.repeatInterval = i899[4]
  i898.time = i899[5]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i900 = root || new pc.ParticleSystemRotationBySpeed()
  var i901 = data
  i900.enabled = !!i901[0]
  i900.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[1], i900.x)
  i900.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[2], i900.y)
  i900.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[3], i900.z)
  i900.separateAxes = !!i901[4]
  i900.range = new pc.Vec2( i901[5], i901[6] )
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i902 = root || new pc.ParticleSystemRotationOverLifetime()
  var i903 = data
  i902.enabled = !!i903[0]
  i902.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[1], i902.x)
  i902.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[2], i902.y)
  i902.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[3], i902.z)
  i902.separateAxes = !!i903[4]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i904 = root || new pc.ParticleSystemShape()
  var i905 = data
  i904.enabled = !!i905[0]
  i904.shapeType = i905[1]
  i904.randomDirectionAmount = i905[2]
  i904.sphericalDirectionAmount = i905[3]
  i904.randomPositionAmount = i905[4]
  i904.alignToDirection = !!i905[5]
  i904.radius = i905[6]
  i904.radiusMode = i905[7]
  i904.radiusSpread = i905[8]
  i904.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[9], i904.radiusSpeed)
  i904.radiusThickness = i905[10]
  i904.angle = i905[11]
  i904.length = i905[12]
  i904.boxThickness = new pc.Vec3( i905[13], i905[14], i905[15] )
  i904.meshShapeType = i905[16]
  request.r(i905[17], i905[18], 0, i904, 'mesh')
  request.r(i905[19], i905[20], 0, i904, 'meshRenderer')
  request.r(i905[21], i905[22], 0, i904, 'skinnedMeshRenderer')
  i904.useMeshMaterialIndex = !!i905[23]
  i904.meshMaterialIndex = i905[24]
  i904.useMeshColors = !!i905[25]
  i904.normalOffset = i905[26]
  i904.arc = i905[27]
  i904.arcMode = i905[28]
  i904.arcSpread = i905[29]
  i904.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[30], i904.arcSpeed)
  i904.donutRadius = i905[31]
  i904.position = new pc.Vec3( i905[32], i905[33], i905[34] )
  i904.rotation = new pc.Vec3( i905[35], i905[36], i905[37] )
  i904.scale = new pc.Vec3( i905[38], i905[39], i905[40] )
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i906 = root || new pc.ParticleSystemSizeBySpeed()
  var i907 = data
  i906.enabled = !!i907[0]
  i906.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[1], i906.x)
  i906.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[2], i906.y)
  i906.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[3], i906.z)
  i906.separateAxes = !!i907[4]
  i906.range = new pc.Vec2( i907[5], i907[6] )
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i908 = root || new pc.ParticleSystemSizeOverLifetime()
  var i909 = data
  i908.enabled = !!i909[0]
  i908.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[1], i908.x)
  i908.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[2], i908.y)
  i908.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i909[3], i908.z)
  i908.separateAxes = !!i909[4]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i910 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i911 = data
  i910.enabled = !!i911[0]
  i910.mode = i911[1]
  i910.animation = i911[2]
  i910.numTilesX = i911[3]
  i910.numTilesY = i911[4]
  i910.useRandomRow = !!i911[5]
  i910.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[6], i910.frameOverTime)
  i910.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i911[7], i910.startFrame)
  i910.cycleCount = i911[8]
  i910.rowIndex = i911[9]
  i910.flipU = i911[10]
  i910.flipV = i911[11]
  i910.spriteCount = i911[12]
  var i913 = i911[13]
  var i912 = []
  for(var i = 0; i < i913.length; i += 2) {
  request.r(i913[i + 0], i913[i + 1], 2, i912, '')
  }
  i910.sprites = i912
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i916 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i917 = data
  i916.enabled = !!i917[0]
  i916.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[1], i916.x)
  i916.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[2], i916.y)
  i916.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[3], i916.z)
  i916.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[4], i916.radial)
  i916.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[5], i916.speedModifier)
  i916.space = i917[6]
  i916.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[7], i916.orbitalX)
  i916.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[8], i916.orbitalY)
  i916.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[9], i916.orbitalZ)
  i916.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[10], i916.orbitalOffsetX)
  i916.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[11], i916.orbitalOffsetY)
  i916.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i917[12], i916.orbitalOffsetZ)
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i918 = root || new pc.ParticleSystemNoise()
  var i919 = data
  i918.enabled = !!i919[0]
  i918.separateAxes = !!i919[1]
  i918.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[2], i918.strengthX)
  i918.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[3], i918.strengthY)
  i918.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[4], i918.strengthZ)
  i918.frequency = i919[5]
  i918.damping = !!i919[6]
  i918.octaveCount = i919[7]
  i918.octaveMultiplier = i919[8]
  i918.octaveScale = i919[9]
  i918.quality = i919[10]
  i918.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[11], i918.scrollSpeed)
  i918.scrollSpeedMultiplier = i919[12]
  i918.remapEnabled = !!i919[13]
  i918.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[14], i918.remapX)
  i918.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[15], i918.remapY)
  i918.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[16], i918.remapZ)
  i918.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[17], i918.positionAmount)
  i918.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[18], i918.rotationAmount)
  i918.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[19], i918.sizeAmount)
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i920 = root || new pc.ParticleSystemInheritVelocity()
  var i921 = data
  i920.enabled = !!i921[0]
  i920.mode = i921[1]
  i920.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i921[2], i920.curve)
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i922 = root || new pc.ParticleSystemForceOverLifetime()
  var i923 = data
  i922.enabled = !!i923[0]
  i922.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[1], i922.x)
  i922.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[2], i922.y)
  i922.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[3], i922.z)
  i922.space = i923[4]
  i922.randomized = !!i923[5]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i924 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i925 = data
  i924.enabled = !!i925[0]
  i924.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[1], i924.limit)
  i924.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[2], i924.limitX)
  i924.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[3], i924.limitY)
  i924.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[4], i924.limitZ)
  i924.dampen = i925[5]
  i924.separateAxes = !!i925[6]
  i924.space = i925[7]
  i924.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[8], i924.drag)
  i924.multiplyDragByParticleSize = !!i925[9]
  i924.multiplyDragByParticleVelocity = !!i925[10]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'mesh')
  i926.meshCount = i927[2]
  i926.activeVertexStreamsCount = i927[3]
  i926.alignment = i927[4]
  i926.renderMode = i927[5]
  i926.sortMode = i927[6]
  i926.lengthScale = i927[7]
  i926.velocityScale = i927[8]
  i926.cameraVelocityScale = i927[9]
  i926.normalDirection = i927[10]
  i926.sortingFudge = i927[11]
  i926.minParticleSize = i927[12]
  i926.maxParticleSize = i927[13]
  i926.pivot = new pc.Vec3( i927[14], i927[15], i927[16] )
  request.r(i927[17], i927[18], 0, i926, 'trailMaterial')
  i926.applyActiveColorSpace = !!i927[19]
  i926.enabled = !!i927[20]
  request.r(i927[21], i927[22], 0, i926, 'sharedMaterial')
  var i929 = i927[23]
  var i928 = []
  for(var i = 0; i < i929.length; i += 2) {
  request.r(i929[i + 0], i929[i + 1], 2, i928, '')
  }
  i926.sharedMaterials = i928
  i926.receiveShadows = !!i927[24]
  i926.shadowCastingMode = i927[25]
  i926.sortingLayerID = i927[26]
  i926.sortingOrder = i927[27]
  i926.lightmapIndex = i927[28]
  i926.lightmapSceneIndex = i927[29]
  i926.lightmapScaleOffset = new pc.Vec4( i927[30], i927[31], i927[32], i927[33] )
  i926.lightProbeUsage = i927[34]
  i926.reflectionProbeUsage = i927[35]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i931 = data
  i930.name = i931[0]
  i930.atlasId = i931[1]
  i930.mipmapCount = i931[2]
  i930.hdr = !!i931[3]
  i930.size = i931[4]
  i930.anisoLevel = i931[5]
  i930.filterMode = i931[6]
  var i933 = i931[7]
  var i932 = []
  for(var i = 0; i < i933.length; i += 4) {
    i932.push( UnityEngine.Rect.MinMaxRect(i933[i + 0], i933[i + 1], i933[i + 2], i933[i + 3]) );
  }
  i930.rects = i932
  i930.wrapU = i931[8]
  i930.wrapV = i931[9]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i937 = data
  i936.name = i937[0]
  i936.index = i937[1]
  i936.startup = !!i937[2]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i939 = data
  i938.aspect = i939[0]
  i938.orthographic = !!i939[1]
  i938.orthographicSize = i939[2]
  i938.backgroundColor = new pc.Color(i939[3], i939[4], i939[5], i939[6])
  i938.nearClipPlane = i939[7]
  i938.farClipPlane = i939[8]
  i938.fieldOfView = i939[9]
  i938.depth = i939[10]
  i938.clearFlags = i939[11]
  i938.cullingMask = i939[12]
  i938.rect = i939[13]
  request.r(i939[14], i939[15], 0, i938, 'targetTexture')
  i938.usePhysicalProperties = !!i939[16]
  i938.focalLength = i939[17]
  i938.sensorSize = new pc.Vec2( i939[18], i939[19] )
  i938.lensShift = new pc.Vec2( i939[20], i939[21] )
  i938.gateFit = i939[22]
  i938.commandBufferCount = i939[23]
  i938.cameraType = i939[24]
  i938.enabled = !!i939[25]
  return i938
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i941 = data
  i940.m_RenderShadows = !!i941[0]
  i940.m_RequiresDepthTextureOption = i941[1]
  i940.m_RequiresOpaqueTextureOption = i941[2]
  i940.m_CameraType = i941[3]
  var i943 = i941[4]
  var i942 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i943.length; i += 2) {
  request.r(i943[i + 0], i943[i + 1], 1, i942, '')
  }
  i940.m_Cameras = i942
  i940.m_RendererIndex = i941[5]
  i940.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i941[6] )
  request.r(i941[7], i941[8], 0, i940, 'm_VolumeTrigger')
  i940.m_VolumeFrameworkUpdateModeOption = i941[9]
  i940.m_RenderPostProcessing = !!i941[10]
  i940.m_Antialiasing = i941[11]
  i940.m_AntialiasingQuality = i941[12]
  i940.m_StopNaN = !!i941[13]
  i940.m_Dithering = !!i941[14]
  i940.m_ClearDepth = !!i941[15]
  i940.m_AllowXRRendering = !!i941[16]
  i940.m_AllowHDROutput = !!i941[17]
  i940.m_UseScreenCoordOverride = !!i941[18]
  i940.m_ScreenSizeOverride = new pc.Vec4( i941[19], i941[20], i941[21], i941[22] )
  i940.m_ScreenCoordScaleBias = new pc.Vec4( i941[23], i941[24], i941[25], i941[26] )
  i940.m_RequiresDepthTexture = !!i941[27]
  i940.m_RequiresColorTexture = !!i941[28]
  i940.m_Version = i941[29]
  i940.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i941[30], i940.m_TaaSettings)
  return i940
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i947 = data
  i946.m_Quality = i947[0]
  i946.m_FrameInfluence = i947[1]
  i946.m_JitterScale = i947[2]
  i946.m_MipBias = i947[3]
  i946.m_VarianceClampScale = i947[4]
  i946.m_ContrastAdaptiveSharpening = i947[5]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i949 = data
  i948.type = i949[0]
  i948.color = new pc.Color(i949[1], i949[2], i949[3], i949[4])
  i948.cullingMask = i949[5]
  i948.intensity = i949[6]
  i948.range = i949[7]
  i948.spotAngle = i949[8]
  i948.shadows = i949[9]
  i948.shadowNormalBias = i949[10]
  i948.shadowBias = i949[11]
  i948.shadowStrength = i949[12]
  i948.shadowResolution = i949[13]
  i948.lightmapBakeType = i949[14]
  i948.renderMode = i949[15]
  request.r(i949[16], i949[17], 0, i948, 'cookie')
  i948.cookieSize = i949[18]
  i948.shadowNearPlane = i949[19]
  i948.occlusionMaskChannel = i949[20]
  i948.isBaked = !!i949[21]
  i948.mixedLightingMode = i949[22]
  i948.enabled = !!i949[23]
  return i948
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i951 = data
  i950.m_Version = i951[0]
  i950.m_UsePipelineSettings = !!i951[1]
  i950.m_AdditionalLightsShadowResolutionTier = i951[2]
  i950.m_LightLayerMask = i951[3]
  i950.m_RenderingLayers = i951[4]
  i950.m_CustomShadowLayers = !!i951[5]
  i950.m_ShadowLayerMask = i951[6]
  i950.m_ShadowRenderingLayers = i951[7]
  i950.m_LightCookieSize = new pc.Vec2( i951[8], i951[9] )
  i950.m_LightCookieOffset = new pc.Vec2( i951[10], i951[11] )
  i950.m_SoftShadowQuality = i951[12]
  return i950
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i952 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i953 = data
  i952.priority = i953[0]
  i952.blendDistance = i953[1]
  i952.weight = i953[2]
  request.r(i953[3], i953[4], 0, i952, 'sharedProfile')
  i952.m_IsGlobal = !!i953[5]
  return i952
}

Deserializers["Main"] = function (request, data, root) {
  var i954 = root || request.c( 'Main' )
  var i955 = data
  request.r(i955[0], i955[1], 0, i954, 'hexCellPrefab')
  request.r(i955[2], i955[3], 0, i954, 'hexPiecePrefab')
  request.r(i955[4], i955[5], 0, i954, 'hexColorConfig')
  request.r(i955[6], i955[7], 0, i954, 'gameCamera')
  i954.boardRadius = i955[8]
  i954.boardPosition = new pc.Vec3( i955[9], i955[10], i955[11] )
  i954.trayPosition = new pc.Vec3( i955[12], i955[13], i955[14] )
  i954.tutorialTargetCell = new pc.Vec2( i955[15], i955[16] )
  var i957 = i955[17]
  var i956 = new (System.Collections.Generic.List$1(Bridge.ns('_Game.Configs.LevelConfig+BoardStackDefinition')))
  for(var i = 0; i < i957.length; i += 1) {
    i956.add(request.d('_Game.Configs.LevelConfig+BoardStackDefinition', i957[i + 0]));
  }
  i954.startingBoardStacks = i956
  var i959 = i955[18]
  var i958 = new (System.Collections.Generic.List$1(Bridge.ns('_Game.Configs.LevelConfig+StackDefinition')))
  for(var i = 0; i < i959.length; i += 1) {
    i958.add(request.d('_Game.Configs.LevelConfig+StackDefinition', i959[i + 0]));
  }
  i954.trayStacks = i958
  i954.configureCameraOnStart = !!i955[19]
  i954.cameraPosition = new pc.Vec3( i955[20], i955[21], i955[22] )
  i954.cameraEulerAngles = new pc.Vec3( i955[23], i955[24], i955[25] )
  i954.orthographicSize = i955[26]
  i954.cellHighlight = request.d('_Game.Board.HexCellHighlightSettings', i955[27], i954.cellHighlight)
  return i954
}

Deserializers["_Game.Configs.LevelConfig+BoardStackDefinition"] = function (request, data, root) {
  var i962 = root || request.c( '_Game.Configs.LevelConfig+BoardStackDefinition' )
  var i963 = data
  i962.coordinate = new pc.Vec2( i963[0], i963[1] )
  i962.stack = request.d('_Game.Configs.LevelConfig+StackDefinition', i963[2], i962.stack)
  return i962
}

Deserializers["_Game.Configs.LevelConfig+StackDefinition"] = function (request, data, root) {
  var i964 = root || request.c( '_Game.Configs.LevelConfig+StackDefinition' )
  var i965 = data
  var i967 = i965[0]
  var i966 = new (System.Collections.Generic.List$1(Bridge.ns('_Game.Stacks.HexColor')))
  for(var i = 0; i < i967.length; i += 1) {
    i966.add(i967[i + 0]);
  }
  i964.colorsBottomToTop = i966
  return i964
}

Deserializers["_Game.Board.HexCellHighlightSettings"] = function (request, data, root) {
  var i972 = root || request.c( '_Game.Board.HexCellHighlightSettings' )
  var i973 = data
  i972.useMaterialTint = !!i973[0]
  i972.useOutline = !!i973[1]
  i972.validColor = new pc.Color(i973[2], i973[3], i973[4], i973[5])
  request.r(i973[6], i973[7], 0, i972, 'outlineMaterial')
  i972.outlineLineWidth = i973[8]
  i972.outlineVerticalOffset = i973[9]
  i972.outlineRadiusMultiplier = i973[10]
  return i972
}

Deserializers["_Game.Audio.SoundPlayer"] = function (request, data, root) {
  var i974 = root || request.c( '_Game.Audio.SoundPlayer' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'stackPickupClip')
  request.r(i975[2], i975[3], 0, i974, 'stackDropClip')
  request.r(i975[4], i975[5], 0, i974, 'elementFlyToStackClip')
  request.r(i975[6], i975[7], 0, i974, 'elementDisappearClip')
  request.r(i975[8], i975[9], 0, i974, 'allElementsDisappearCompleteClip')
  i974.masterVolume = i975[10]
  i974.stackPickupVolume = i975[11]
  i974.stackDropVolume = i975[12]
  i974.elementFlyToStackVolume = i975[13]
  i974.elementDisappearVolume = i975[14]
  i974.allElementsDisappearCompleteVolume = i975[15]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'clip')
  request.r(i977[2], i977[3], 0, i976, 'outputAudioMixerGroup')
  i976.playOnAwake = !!i977[4]
  i976.loop = !!i977[5]
  i976.time = i977[6]
  i976.volume = i977[7]
  i976.pitch = i977[8]
  i976.enabled = !!i977[9]
  return i976
}

Deserializers["_Game.Board.BoardController"] = function (request, data, root) {
  var i978 = root || request.c( '_Game.Board.BoardController' )
  var i979 = data
  i978.pointerCellRadius = i979[0]
  return i978
}

Deserializers["_Game.Board.HexGridGenerator"] = function (request, data, root) {
  var i980 = root || request.c( '_Game.Board.HexGridGenerator' )
  var i981 = data
  i980.radius = i981[0]
  i980.cellSize = i981[1]
  i980.boardShape = i981[2]
  i980.customBaseShape = i981[3]
  i980.orientation = i981[4]
  var i983 = i981[5]
  var i982 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2Int')))
  for(var i = 0; i < i983.length; i += 2) {
    i982.add(new pc.Vec2( i983[i + 0], i983[i + 1] ));
  }
  i980.customCoordinates = i982
  return i980
}

Deserializers["_Game.Board.BoardOutline"] = function (request, data, root) {
  var i986 = root || request.c( '_Game.Board.BoardOutline' )
  var i987 = data
  i986.renderMode = i987[0]
  request.r(i987[1], i987[2], 0, i986, 'linePrefab')
  request.r(i987[3], i987[4], 0, i986, 'lineParent')
  i986.lineWidth = i987[5]
  i986.verticalOffset = i987[6]
  i986.borderColor = new pc.Color(i987[7], i987[8], i987[9], i987[10])
  i986.useGlow = !!i987[11]
  i986.glowWidthMultiplier = i987[12]
  request.r(i987[13], i987[14], 0, i986, 'meshMaterial')
  i986.meshScaleMultiplier = i987[15]
  i986.meshVerticalOffset = i987[16]
  i986.meshHeight = i987[17]
  i986.meshBevelSize = i987[18]
  i986.meshSmoothNormals = !!i987[19]
  return i986
}

Deserializers["_Game.Stacks.StackTrayController"] = function (request, data, root) {
  var i988 = root || request.c( '_Game.Stacks.StackTrayController' )
  var i989 = data
  i988.spacing = i989[0]
  i988.hitRadius = i989[1]
  return i988
}

Deserializers["_Game.Drag.DragController"] = function (request, data, root) {
  var i990 = root || request.c( '_Game.Drag.DragController' )
  var i991 = data
  i990.returnDuration = i991[0]
  i990.dragHeight = i991[1]
  return i990
}

Deserializers["_Game.Merge.MergeAnimator"] = function (request, data, root) {
  var i992 = root || request.c( '_Game.Merge.MergeAnimator' )
  var i993 = data
  i992.baseMoveDuration = i993[0]
  i992.baseDisappearDuration = i993[1]
  i992.speedIncreasePerStep = i993[2]
  i992.maxSpeedMultiplier = i993[3]
  i992.jumpPower = i993[4]
  i992.pieceStagger = i993[5]
  i992.flipDegrees = i993[6]
  i992.landingTiltDegrees = i993[7]
  i992.disappearStepDelay = i993[8]
  request.r(i993[9], i993[10], 0, i992, 'disappearEffectPrefab')
  request.r(i993[11], i993[12], 0, i992, 'effectParent')
  i992.disappearEffectLifetime = i993[13]
  return i992
}

Deserializers["_Game.Merge.MergeSystem"] = function (request, data, root) {
  var i994 = root || request.c( '_Game.Merge.MergeSystem' )
  var i995 = data
  i994.clearMatchCount = i995[0]
  i994.maxChainSteps = i995[1]
  i994.debugMergeLogs = !!i995[2]
  return i994
}

Deserializers["_Game.Tutorial.TutorialHandController"] = function (request, data, root) {
  var i996 = root || request.c( '_Game.Tutorial.TutorialHandController' )
  var i997 = data
  i996.inactivityDelayBeforeTutorialRestart = i997[0]
  i996.handMoveDuration = i997[1]
  i996.handSize = new pc.Vec2( i997[2], i997[3] )
  i996.screenOffset = new pc.Vec2( i997[4], i997[5] )
  request.r(i997[6], i997[7], 0, i996, 'canvas')
  request.r(i997[8], i997[9], 0, i996, 'handImage')
  return i996
}

Deserializers["_Game.Flow.LevelFlowController"] = function (request, data, root) {
  var i998 = root || request.c( '_Game.Flow.LevelFlowController' )
  var i999 = data
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1001 = data
  i1000.ambientIntensity = i1001[0]
  i1000.reflectionIntensity = i1001[1]
  i1000.ambientMode = i1001[2]
  i1000.ambientLight = new pc.Color(i1001[3], i1001[4], i1001[5], i1001[6])
  i1000.ambientSkyColor = new pc.Color(i1001[7], i1001[8], i1001[9], i1001[10])
  i1000.ambientGroundColor = new pc.Color(i1001[11], i1001[12], i1001[13], i1001[14])
  i1000.ambientEquatorColor = new pc.Color(i1001[15], i1001[16], i1001[17], i1001[18])
  i1000.fogColor = new pc.Color(i1001[19], i1001[20], i1001[21], i1001[22])
  i1000.fogEndDistance = i1001[23]
  i1000.fogStartDistance = i1001[24]
  i1000.fogDensity = i1001[25]
  i1000.fog = !!i1001[26]
  request.r(i1001[27], i1001[28], 0, i1000, 'skybox')
  i1000.fogMode = i1001[29]
  var i1003 = i1001[30]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1003[i + 0]) );
  }
  i1000.lightmaps = i1002
  i1000.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1001[31], i1000.lightProbes)
  i1000.lightmapsMode = i1001[32]
  i1000.mixedBakeMode = i1001[33]
  i1000.environmentLightingMode = i1001[34]
  i1000.ambientProbe = new pc.SphericalHarmonicsL2(i1001[35])
  request.r(i1001[36], i1001[37], 0, i1000, 'customReflection')
  request.r(i1001[38], i1001[39], 0, i1000, 'defaultReflection')
  i1000.defaultReflectionMode = i1001[40]
  i1000.defaultReflectionResolution = i1001[41]
  i1000.sunLightObjectId = i1001[42]
  i1000.pixelLightCount = i1001[43]
  i1000.defaultReflectionHDR = !!i1001[44]
  i1000.hasLightDataAsset = !!i1001[45]
  i1000.hasManualGenerate = !!i1001[46]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'lightmapColor')
  request.r(i1007[2], i1007[3], 0, i1006, 'lightmapDirection')
  request.r(i1007[4], i1007[5], 0, i1006, 'shadowMask')
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1008 = root || new UnityEngine.LightProbes()
  var i1009 = data
  return i1008
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i1016 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'panelPrefab')
  var i1019 = i1017[2]
  var i1018 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i1019[i + 0]));
  }
  i1016.prefabs = i1018
  return i1016
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i1022 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i1023 = data
  i1022.type = i1023[0]
  request.r(i1023[1], i1023[2], 0, i1022, 'prefab')
  return i1022
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i1024 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i1025 = data
  i1024.m_Spacing = i1025[0]
  i1024.m_ChildForceExpandWidth = !!i1025[1]
  i1024.m_ChildForceExpandHeight = !!i1025[2]
  i1024.m_ChildControlWidth = !!i1025[3]
  i1024.m_ChildControlHeight = !!i1025[4]
  i1024.m_ChildScaleWidth = !!i1025[5]
  i1024.m_ChildScaleHeight = !!i1025[6]
  i1024.m_ReverseArrangement = !!i1025[7]
  i1024.m_Padding = UnityEngine.RectOffset.FromPaddings(i1025[8], i1025[9], i1025[10], i1025[11])
  i1024.m_ChildAlignment = i1025[12]
  return i1024
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i1026 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i1027 = data
  i1026.m_HorizontalFit = i1027[0]
  i1026.m_VerticalFit = i1027[1]
  return i1026
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i1028 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'contentHolder')
  return i1028
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i1030 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i1031 = data
  request.r(i1031[0], i1031[1], 0, i1030, 'nameLabel')
  request.r(i1031[2], i1031[3], 0, i1030, 'scrollRect')
  request.r(i1031[4], i1031[5], 0, i1030, 'viewport')
  request.r(i1031[6], i1031[7], 0, i1030, 'Canvas')
  return i1030
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i1032 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i1033 = data
  i1032.m_IgnoreLayout = !!i1033[0]
  i1032.m_MinWidth = i1033[1]
  i1032.m_MinHeight = i1033[2]
  i1032.m_PreferredWidth = i1033[3]
  i1032.m_PreferredHeight = i1033[4]
  i1032.m_FlexibleWidth = i1033[5]
  i1032.m_FlexibleHeight = i1033[6]
  i1032.m_LayoutPriority = i1033[7]
  return i1032
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1034 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1035 = data
  request.r(i1035[0], i1035[1], 0, i1034, 'm_ObjectArgument')
  i1034.m_ObjectArgumentAssemblyTypeName = i1035[2]
  i1034.m_IntArgument = i1035[3]
  i1034.m_FloatArgument = i1035[4]
  i1034.m_StringArgument = i1035[5]
  i1034.m_BoolArgument = !!i1035[6]
  return i1034
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1036 = root || request.c( 'UnityEngine.UI.Text' )
  var i1037 = data
  i1036.m_FontData = request.d('UnityEngine.UI.FontData', i1037[0], i1036.m_FontData)
  i1036.m_Text = i1037[1]
  request.r(i1037[2], i1037[3], 0, i1036, 'm_Material')
  i1036.m_Maskable = !!i1037[4]
  i1036.m_Color = new pc.Color(i1037[5], i1037[6], i1037[7], i1037[8])
  i1036.m_RaycastTarget = !!i1037[9]
  i1036.m_RaycastPadding = new pc.Vec4( i1037[10], i1037[11], i1037[12], i1037[13] )
  return i1036
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1038 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1039 = data
  request.r(i1039[0], i1039[1], 0, i1038, 'm_Font')
  i1038.m_FontSize = i1039[2]
  i1038.m_FontStyle = i1039[3]
  i1038.m_BestFit = !!i1039[4]
  i1038.m_MinSize = i1039[5]
  i1038.m_MaxSize = i1039[6]
  i1038.m_Alignment = i1039[7]
  i1038.m_AlignByGeometry = !!i1039[8]
  i1038.m_RichText = !!i1039[9]
  i1038.m_HorizontalOverflow = i1039[10]
  i1038.m_VerticalOverflow = i1039[11]
  i1038.m_LineSpacing = i1039[12]
  return i1038
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i1040 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i1041 = data
  request.r(i1041[0], i1041[1], 0, i1040, 'm_Content')
  i1040.m_Horizontal = !!i1041[2]
  i1040.m_Vertical = !!i1041[3]
  i1040.m_MovementType = i1041[4]
  i1040.m_Elasticity = i1041[5]
  i1040.m_Inertia = !!i1041[6]
  i1040.m_DecelerationRate = i1041[7]
  i1040.m_ScrollSensitivity = i1041[8]
  request.r(i1041[9], i1041[10], 0, i1040, 'm_Viewport')
  request.r(i1041[11], i1041[12], 0, i1040, 'm_HorizontalScrollbar')
  request.r(i1041[13], i1041[14], 0, i1040, 'm_VerticalScrollbar')
  i1040.m_HorizontalScrollbarVisibility = i1041[15]
  i1040.m_VerticalScrollbarVisibility = i1041[16]
  i1040.m_HorizontalScrollbarSpacing = i1041[17]
  i1040.m_VerticalScrollbarSpacing = i1041[18]
  i1040.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i1041[19], i1040.m_OnValueChanged)
  return i1040
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i1042 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i1043 = data
  i1042.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1043[0], i1042.m_PersistentCalls)
  return i1042
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1044 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1045 = data
  i1044.m_ShowMaskGraphic = !!i1045[0]
  return i1044
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i1046 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'm_HandleRect')
  i1046.m_Direction = i1047[2]
  i1046.m_Value = i1047[3]
  i1046.m_Size = i1047[4]
  i1046.m_NumberOfSteps = i1047[5]
  i1046.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i1047[6], i1046.m_OnValueChanged)
  i1046.m_Navigation = request.d('UnityEngine.UI.Navigation', i1047[7], i1046.m_Navigation)
  i1046.m_Transition = i1047[8]
  i1046.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1047[9], i1046.m_Colors)
  i1046.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1047[10], i1046.m_SpriteState)
  i1046.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1047[11], i1046.m_AnimationTriggers)
  i1046.m_Interactable = !!i1047[12]
  request.r(i1047[13], i1047[14], 0, i1046, 'm_TargetGraphic')
  return i1046
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i1048 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i1049 = data
  i1048.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1049[0], i1048.m_PersistentCalls)
  return i1048
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i1050 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i1051 = data
  var i1053 = i1051[0]
  var i1052 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i1053[i + 0]));
  }
  i1050.m_Delegates = i1052
  return i1050
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i1056 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i1057 = data
  i1056.eventID = i1057[0]
  i1056.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i1057[1], i1056.callback)
  return i1056
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i1058 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i1059 = data
  i1058.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1059[0], i1058.m_PersistentCalls)
  return i1058
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i1060 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i1061 = data
  request.r(i1061[0], i1061[1], 0, i1060, 'nameLabel')
  request.r(i1061[2], i1061[3], 0, i1060, 'valueLabel')
  i1060.colorDefault = new pc.Color(i1061[4], i1061[5], i1061[6], i1061[7])
  i1060.colorSelected = new pc.Color(i1061[8], i1061[9], i1061[10], i1061[11])
  return i1060
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i1062 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i1063 = data
  request.r(i1063[0], i1063[1], 0, i1062, 'nameLabel')
  request.r(i1063[2], i1063[3], 0, i1062, 'valueToggle')
  request.r(i1063[4], i1063[5], 0, i1062, 'checkmarkImage')
  i1062.colorDefault = new pc.Color(i1063[6], i1063[7], i1063[8], i1063[9])
  i1062.colorSelected = new pc.Color(i1063[10], i1063[11], i1063[12], i1063[13])
  return i1062
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i1064 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i1065 = data
  i1064.toggleTransition = i1065[0]
  request.r(i1065[1], i1065[2], 0, i1064, 'graphic')
  i1064.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i1065[3], i1064.onValueChanged)
  request.r(i1065[4], i1065[5], 0, i1064, 'm_Group')
  i1064.m_IsOn = !!i1065[6]
  i1064.m_Navigation = request.d('UnityEngine.UI.Navigation', i1065[7], i1064.m_Navigation)
  i1064.m_Transition = i1065[8]
  i1064.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1065[9], i1064.m_Colors)
  i1064.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1065[10], i1064.m_SpriteState)
  i1064.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1065[11], i1064.m_AnimationTriggers)
  i1064.m_Interactable = !!i1065[12]
  request.r(i1065[13], i1065[14], 0, i1064, 'm_TargetGraphic')
  return i1064
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i1066 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i1067 = data
  i1066.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1067[0], i1066.m_PersistentCalls)
  return i1066
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i1068 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i1069 = data
  request.r(i1069[0], i1069[1], 0, i1068, 'nameLabel')
  request.r(i1069[2], i1069[3], 0, i1068, 'valueLabel')
  i1068.colorDefault = new pc.Color(i1069[4], i1069[5], i1069[6], i1069[7])
  i1068.colorSelected = new pc.Color(i1069[8], i1069[9], i1069[10], i1069[11])
  return i1068
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i1070 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i1071 = data
  request.r(i1071[0], i1071[1], 0, i1070, 'nameLabel')
  request.r(i1071[2], i1071[3], 0, i1070, 'valueLabel')
  i1070.colorDefault = new pc.Color(i1071[4], i1071[5], i1071[6], i1071[7])
  i1070.colorSelected = new pc.Color(i1071[8], i1071[9], i1071[10], i1071[11])
  return i1070
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i1072 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i1073 = data
  request.r(i1073[0], i1073[1], 0, i1072, 'nameLabel')
  request.r(i1073[2], i1073[3], 0, i1072, 'valueLabel')
  i1072.colorDefault = new pc.Color(i1073[4], i1073[5], i1073[6], i1073[7])
  i1072.colorSelected = new pc.Color(i1073[8], i1073[9], i1073[10], i1073[11])
  return i1072
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i1074 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i1075 = data
  request.r(i1075[0], i1075[1], 0, i1074, 'nextButtonText')
  request.r(i1075[2], i1075[3], 0, i1074, 'previousButtonText')
  request.r(i1075[4], i1075[5], 0, i1074, 'nameLabel')
  request.r(i1075[6], i1075[7], 0, i1074, 'valueLabel')
  i1074.colorDefault = new pc.Color(i1075[8], i1075[9], i1075[10], i1075[11])
  i1074.colorSelected = new pc.Color(i1075[12], i1075[13], i1075[14], i1075[15])
  return i1074
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i1076 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i1077 = data
  request.r(i1077[0], i1077[1], 0, i1076, 'nameLabel')
  i1076.colorDefault = new pc.Color(i1077[2], i1077[3], i1077[4], i1077[5])
  i1076.colorSelected = new pc.Color(i1077[6], i1077[7], i1077[8], i1077[9])
  return i1076
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i1078 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i1079 = data
  request.r(i1079[0], i1079[1], 0, i1078, 'nameLabel')
  request.r(i1079[2], i1079[3], 0, i1078, 'valueToggle')
  i1078.colorDefault = new pc.Color(i1079[4], i1079[5], i1079[6], i1079[7])
  i1078.colorSelected = new pc.Color(i1079[8], i1079[9], i1079[10], i1079[11])
  return i1078
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i1080 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i1081 = data
  request.r(i1081[0], i1081[1], 0, i1080, 'content')
  request.r(i1081[2], i1081[3], 0, i1080, 'arrowOpened')
  request.r(i1081[4], i1081[5], 0, i1080, 'arrowClosed')
  i1080.toggleTransition = i1081[6]
  request.r(i1081[7], i1081[8], 0, i1080, 'graphic')
  i1080.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i1081[9], i1080.onValueChanged)
  request.r(i1081[10], i1081[11], 0, i1080, 'm_Group')
  i1080.m_IsOn = !!i1081[12]
  i1080.m_Navigation = request.d('UnityEngine.UI.Navigation', i1081[13], i1080.m_Navigation)
  i1080.m_Transition = i1081[14]
  i1080.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1081[15], i1080.m_Colors)
  i1080.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1081[16], i1080.m_SpriteState)
  i1080.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1081[17], i1080.m_AnimationTriggers)
  i1080.m_Interactable = !!i1081[18]
  request.r(i1081[19], i1081[20], 0, i1080, 'm_TargetGraphic')
  return i1080
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i1082 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i1083 = data
  request.r(i1083[0], i1083[1], 0, i1082, 'nameLabel')
  request.r(i1083[2], i1083[3], 0, i1082, 'valueToggle')
  request.r(i1083[4], i1083[5], 0, i1082, 'colorImage')
  request.r(i1083[6], i1083[7], 0, i1082, 'fieldR')
  request.r(i1083[8], i1083[9], 0, i1082, 'fieldG')
  request.r(i1083[10], i1083[11], 0, i1082, 'fieldB')
  request.r(i1083[12], i1083[13], 0, i1082, 'fieldA')
  i1082.colorDefault = new pc.Color(i1083[14], i1083[15], i1083[16], i1083[17])
  i1082.colorSelected = new pc.Color(i1083[18], i1083[19], i1083[20], i1083[21])
  return i1082
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i1084 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i1085 = data
  request.r(i1085[0], i1085[1], 0, i1084, 'nameLabel')
  request.r(i1085[2], i1085[3], 0, i1084, 'valueLabel')
  i1084.colorDefault = new pc.Color(i1085[4], i1085[5], i1085[6], i1085[7])
  i1084.colorSelected = new pc.Color(i1085[8], i1085[9], i1085[10], i1085[11])
  return i1084
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i1086 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i1087 = data
  request.r(i1087[0], i1087[1], 0, i1086, 'nameLabel')
  request.r(i1087[2], i1087[3], 0, i1086, 'valueToggle')
  request.r(i1087[4], i1087[5], 0, i1086, 'fieldX')
  request.r(i1087[6], i1087[7], 0, i1086, 'fieldY')
  i1086.colorDefault = new pc.Color(i1087[8], i1087[9], i1087[10], i1087[11])
  i1086.colorSelected = new pc.Color(i1087[12], i1087[13], i1087[14], i1087[15])
  return i1086
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i1088 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i1089 = data
  request.r(i1089[0], i1089[1], 0, i1088, 'nameLabel')
  request.r(i1089[2], i1089[3], 0, i1088, 'valueToggle')
  request.r(i1089[4], i1089[5], 0, i1088, 'fieldX')
  request.r(i1089[6], i1089[7], 0, i1088, 'fieldY')
  request.r(i1089[8], i1089[9], 0, i1088, 'fieldZ')
  i1088.colorDefault = new pc.Color(i1089[10], i1089[11], i1089[12], i1089[13])
  i1088.colorSelected = new pc.Color(i1089[14], i1089[15], i1089[16], i1089[17])
  return i1088
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i1090 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i1091 = data
  request.r(i1091[0], i1091[1], 0, i1090, 'nameLabel')
  request.r(i1091[2], i1091[3], 0, i1090, 'valueToggle')
  request.r(i1091[4], i1091[5], 0, i1090, 'fieldX')
  request.r(i1091[6], i1091[7], 0, i1090, 'fieldY')
  request.r(i1091[8], i1091[9], 0, i1090, 'fieldZ')
  request.r(i1091[10], i1091[11], 0, i1090, 'fieldW')
  i1090.colorDefault = new pc.Color(i1091[12], i1091[13], i1091[14], i1091[15])
  i1090.colorSelected = new pc.Color(i1091[16], i1091[17], i1091[18], i1091[19])
  return i1090
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i1092 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i1093 = data
  i1092.colorDefault = new pc.Color(i1093[0], i1093[1], i1093[2], i1093[3])
  i1092.colorSelected = new pc.Color(i1093[4], i1093[5], i1093[6], i1093[7])
  return i1092
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1094 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1095 = data
  i1094.m_Spacing = i1095[0]
  i1094.m_ChildForceExpandWidth = !!i1095[1]
  i1094.m_ChildForceExpandHeight = !!i1095[2]
  i1094.m_ChildControlWidth = !!i1095[3]
  i1094.m_ChildControlHeight = !!i1095[4]
  i1094.m_ChildScaleWidth = !!i1095[5]
  i1094.m_ChildScaleHeight = !!i1095[6]
  i1094.m_ReverseArrangement = !!i1095[7]
  i1094.m_Padding = UnityEngine.RectOffset.FromPaddings(i1095[8], i1095[9], i1095[10], i1095[11])
  i1094.m_ChildAlignment = i1095[12]
  return i1094
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i1096 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i1097 = data
  i1096.colorDefault = new pc.Color(i1097[0], i1097[1], i1097[2], i1097[3])
  i1096.colorSelected = new pc.Color(i1097[4], i1097[5], i1097[6], i1097[7])
  return i1096
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i1098 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i1099 = data
  request.r(i1099[0], i1099[1], 0, i1098, 'nameLabel')
  request.r(i1099[2], i1099[3], 0, i1098, 'header')
  i1098.colorDefault = new pc.Color(i1099[4], i1099[5], i1099[6], i1099[7])
  i1098.colorSelected = new pc.Color(i1099[8], i1099[9], i1099[10], i1099[11])
  return i1098
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i1100 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i1101 = data
  request.r(i1101[0], i1101[1], 0, i1100, 'nameLabel')
  request.r(i1101[2], i1101[3], 0, i1100, 'valueToggle')
  var i1103 = i1101[4]
  var i1102 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i1103.length; i += 2) {
  request.r(i1103[i + 0], i1103[i + 1], 1, i1102, '')
  }
  i1100.toggles = i1102
  i1100.colorDefault = new pc.Color(i1101[5], i1101[6], i1101[7], i1101[8])
  i1100.colorSelected = new pc.Color(i1101[9], i1101[10], i1101[11], i1101[12])
  return i1100
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i1106 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i1107 = data
  request.r(i1107[0], i1107[1], 0, i1106, 'nameLabel')
  request.r(i1107[2], i1107[3], 0, i1106, 'valueToggle')
  request.r(i1107[4], i1107[5], 0, i1106, 'checkmarkImage')
  i1106.colorDefault = new pc.Color(i1107[6], i1107[7], i1107[8], i1107[9])
  i1106.colorSelected = new pc.Color(i1107[10], i1107[11], i1107[12], i1107[13])
  return i1106
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i1108 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i1109 = data
  request.r(i1109[0], i1109[1], 0, i1108, 'nameLabel')
  request.r(i1109[2], i1109[3], 0, i1108, 'valueToggle')
  request.r(i1109[4], i1109[5], 0, i1108, 'checkmarkImage')
  i1108.colorDefault = new pc.Color(i1109[6], i1109[7], i1109[8], i1109[9])
  i1108.colorSelected = new pc.Color(i1109[10], i1109[11], i1109[12], i1109[13])
  return i1108
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i1110 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i1111 = data
  request.r(i1111[0], i1111[1], 0, i1110, 'nextButtonText')
  request.r(i1111[2], i1111[3], 0, i1110, 'previousButtonText')
  request.r(i1111[4], i1111[5], 0, i1110, 'nameLabel')
  request.r(i1111[6], i1111[7], 0, i1110, 'valueLabel')
  i1110.colorDefault = new pc.Color(i1111[8], i1111[9], i1111[10], i1111[11])
  i1110.colorSelected = new pc.Color(i1111[12], i1111[13], i1111[14], i1111[15])
  return i1110
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i1112 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i1113 = data
  request.r(i1113[0], i1113[1], 0, i1112, 'nameLabel')
  request.r(i1113[2], i1113[3], 0, i1112, 'valueToggle')
  i1112.colorDefault = new pc.Color(i1113[4], i1113[5], i1113[6], i1113[7])
  i1112.colorSelected = new pc.Color(i1113[8], i1113[9], i1113[10], i1113[11])
  return i1112
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i1114 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i1115 = data
  request.r(i1115[0], i1115[1], 0, i1114, 'nameLabel')
  i1114.colorDefault = new pc.Color(i1115[2], i1115[3], i1115[4], i1115[5])
  i1114.colorSelected = new pc.Color(i1115[6], i1115[7], i1115[8], i1115[9])
  return i1114
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i1116 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i1117 = data
  request.r(i1117[0], i1117[1], 0, i1116, 'nameLabel')
  request.r(i1117[2], i1117[3], 0, i1116, 'valueLabel')
  request.r(i1117[4], i1117[5], 0, i1116, 'progressBarRect')
  i1116.colorDefault = new pc.Color(i1117[6], i1117[7], i1117[8], i1117[9])
  i1116.colorSelected = new pc.Color(i1117[10], i1117[11], i1117[12], i1117[13])
  return i1116
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i1118 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i1119 = data
  request.r(i1119[0], i1119[1], 0, i1118, 'nameLabel')
  request.r(i1119[2], i1119[3], 0, i1118, 'valueLabel')
  i1118.colorDefault = new pc.Color(i1119[4], i1119[5], i1119[6], i1119[7])
  i1118.colorSelected = new pc.Color(i1119[8], i1119[9], i1119[10], i1119[11])
  return i1118
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i1120 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i1121 = data
  request.r(i1121[0], i1121[1], 0, i1120, 'nameLabel')
  request.r(i1121[2], i1121[3], 0, i1120, 'valueLabel')
  i1120.colorDefault = new pc.Color(i1121[4], i1121[5], i1121[6], i1121[7])
  i1120.colorSelected = new pc.Color(i1121[8], i1121[9], i1121[10], i1121[11])
  return i1120
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i1122 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i1123 = data
  request.r(i1123[0], i1123[1], 0, i1122, 'nextButtonText')
  request.r(i1123[2], i1123[3], 0, i1122, 'previousButtonText')
  request.r(i1123[4], i1123[5], 0, i1122, 'nameLabel')
  request.r(i1123[6], i1123[7], 0, i1122, 'valueLabel')
  i1122.colorDefault = new pc.Color(i1123[8], i1123[9], i1123[10], i1123[11])
  i1122.colorSelected = new pc.Color(i1123[12], i1123[13], i1123[14], i1123[15])
  return i1122
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i1124 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i1125 = data
  request.r(i1125[0], i1125[1], 0, i1124, 'nextButtonText')
  request.r(i1125[2], i1125[3], 0, i1124, 'previousButtonText')
  request.r(i1125[4], i1125[5], 0, i1124, 'nameLabel')
  request.r(i1125[6], i1125[7], 0, i1124, 'valueLabel')
  i1124.colorDefault = new pc.Color(i1125[8], i1125[9], i1125[10], i1125[11])
  i1124.colorSelected = new pc.Color(i1125[12], i1125[13], i1125[14], i1125[15])
  return i1124
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i1126 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i1127 = data
  request.r(i1127[0], i1127[1], 0, i1126, 'panel')
  request.r(i1127[2], i1127[3], 0, i1126, 'valuePrefab')
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i1129 = data
  i1128.AdditionalLightsRenderingMode = i1129[0]
  i1128.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1129[1], i1128.LightRenderingMode)
  i1128.MainLightRenderingModeValue = i1129[2]
  i1128.SupportsMainLightShadows = !!i1129[3]
  i1128.MixedLightingSupported = !!i1129[4]
  i1128.MainLightShadowmapResolutionValue = i1129[5]
  i1128.SupportsSoftShadows = !!i1129[6]
  i1128.SoftShadowQualityValue = i1129[7]
  i1128.ShadowDistance = i1129[8]
  i1128.ShadowCascadeCount = i1129[9]
  i1128.Cascade2Split = i1129[10]
  i1128.Cascade3Split = new pc.Vec2( i1129[11], i1129[12] )
  i1128.Cascade4Split = new pc.Vec3( i1129[13], i1129[14], i1129[15] )
  i1128.CascadeBorder = i1129[16]
  i1128.ShadowDepthBias = i1129[17]
  i1128.ShadowNormalBias = i1129[18]
  i1128.RequireDepthTexture = !!i1129[19]
  i1128.RequireOpaqueTexture = !!i1129[20]
  i1128.scriptableRendererData = request.d('Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData', i1129[21], i1128.scriptableRendererData)
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i1131 = data
  i1130.Disabled = i1131[0]
  i1130.PerVertex = i1131[1]
  i1130.PerPixel = i1131[2]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData' )
  var i1133 = data
  i1132.opaqueLayerMask = i1133[0]
  i1132.transparentLayerMask = i1133[1]
  var i1135 = i1133[2]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects', i1135[i + 0]) );
  }
  i1132.RenderObjectsFeatures = i1134
  i1132.name = i1133[3]
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects' )
  var i1139 = data
  i1138.settings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings', i1139[0], i1138.settings)
  i1138.name = i1139[1]
  i1138.typeName = i1139[2]
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1141 = data
  var i1143 = i1141[0]
  var i1142 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1143[i + 0]));
  }
  i1140.ShaderCompilationErrors = i1142
  i1140.name = i1141[1]
  i1140.guid = i1141[2]
  var i1145 = i1141[3]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( i1145[i + 0] );
  }
  i1140.shaderDefinedKeywords = i1144
  var i1147 = i1141[4]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1147[i + 0]) );
  }
  i1140.passes = i1146
  var i1149 = i1141[5]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1149[i + 0]) );
  }
  i1140.usePasses = i1148
  var i1151 = i1141[6]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1151[i + 0]) );
  }
  i1140.defaultParameterValues = i1150
  request.r(i1141[7], i1141[8], 0, i1140, 'unityFallbackShader')
  i1140.readDepth = !!i1141[9]
  i1140.hasDepthOnlyPass = !!i1141[10]
  i1140.isCreatedByShaderGraph = !!i1141[11]
  i1140.disableBatching = !!i1141[12]
  i1140.compiled = !!i1141[13]
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1155 = data
  i1154.shaderName = i1155[0]
  i1154.errorMessage = i1155[1]
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1160 = root || new pc.UnityShaderPass()
  var i1161 = data
  i1160.id = i1161[0]
  i1160.subShaderIndex = i1161[1]
  i1160.name = i1161[2]
  i1160.passType = i1161[3]
  i1160.grabPassTextureName = i1161[4]
  i1160.usePass = !!i1161[5]
  i1160.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1161[6], i1160.zTest)
  i1160.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1161[7], i1160.zWrite)
  i1160.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1161[8], i1160.culling)
  i1160.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1161[9], i1160.blending)
  i1160.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1161[10], i1160.alphaBlending)
  i1160.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1161[11], i1160.colorWriteMask)
  i1160.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1161[12], i1160.offsetUnits)
  i1160.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1161[13], i1160.offsetFactor)
  i1160.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1161[14], i1160.stencilRef)
  i1160.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1161[15], i1160.stencilReadMask)
  i1160.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1161[16], i1160.stencilWriteMask)
  i1160.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1161[17], i1160.stencilOp)
  i1160.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1161[18], i1160.stencilOpFront)
  i1160.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1161[19], i1160.stencilOpBack)
  var i1163 = i1161[20]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1163[i + 0]) );
  }
  i1160.tags = i1162
  var i1165 = i1161[21]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( i1165[i + 0] );
  }
  i1160.passDefinedKeywords = i1164
  var i1167 = i1161[22]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1167[i + 0]) );
  }
  i1160.passDefinedKeywordGroups = i1166
  var i1169 = i1161[23]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1169[i + 0]) );
  }
  i1160.variants = i1168
  var i1171 = i1161[24]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1171[i + 0]) );
  }
  i1160.excludedVariants = i1170
  i1160.hasDepthReader = !!i1161[25]
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1173 = data
  i1172.val = i1173[0]
  i1172.name = i1173[1]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1175 = data
  i1174.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1175[0], i1174.src)
  i1174.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1175[1], i1174.dst)
  i1174.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1175[2], i1174.op)
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1177 = data
  i1176.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1177[0], i1176.pass)
  i1176.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1177[1], i1176.fail)
  i1176.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1177[2], i1176.zFail)
  i1176.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1177[3], i1176.comp)
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1181 = data
  i1180.name = i1181[0]
  i1180.value = i1181[1]
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1185 = data
  var i1187 = i1185[0]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( i1187[i + 0] );
  }
  i1184.keywords = i1186
  i1184.hasDiscard = !!i1185[1]
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1191 = data
  i1190.passId = i1191[0]
  i1190.subShaderIndex = i1191[1]
  var i1193 = i1191[2]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( i1193[i + 0] );
  }
  i1190.keywords = i1192
  i1190.vertexProgram = i1191[3]
  i1190.fragmentProgram = i1191[4]
  i1190.exportedForWebGl2 = !!i1191[5]
  i1190.readDepth = !!i1191[6]
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1197 = data
  request.r(i1197[0], i1197[1], 0, i1196, 'shader')
  i1196.pass = i1197[2]
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1201 = data
  i1200.name = i1201[0]
  i1200.type = i1201[1]
  i1200.value = new pc.Vec4( i1201[2], i1201[3], i1201[4], i1201[5] )
  i1200.textureValue = i1201[6]
  i1200.shaderPropertyFlag = i1201[7]
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1203 = data
  i1202.name = i1203[0]
  request.r(i1203[1], i1203[2], 0, i1202, 'texture')
  i1202.aabb = i1203[3]
  i1202.vertices = i1203[4]
  i1202.triangles = i1203[5]
  i1202.textureRect = UnityEngine.Rect.MinMaxRect(i1203[6], i1203[7], i1203[8], i1203[9])
  i1202.packedRect = UnityEngine.Rect.MinMaxRect(i1203[10], i1203[11], i1203[12], i1203[13])
  i1202.border = new pc.Vec4( i1203[14], i1203[15], i1203[16], i1203[17] )
  i1202.transparency = i1203[18]
  i1202.bounds = i1203[19]
  i1202.pixelsPerUnit = i1203[20]
  i1202.textureWidth = i1203[21]
  i1202.textureHeight = i1203[22]
  i1202.nativeSize = new pc.Vec2( i1203[23], i1203[24] )
  i1202.pivot = new pc.Vec2( i1203[25], i1203[26] )
  i1202.textureRectOffset = new pc.Vec2( i1203[27], i1203[28] )
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1205 = data
  i1204.name = i1205[0]
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1207 = data
  i1206.name = i1207[0]
  i1206.ascent = i1207[1]
  i1206.originalLineHeight = i1207[2]
  i1206.fontSize = i1207[3]
  var i1209 = i1207[4]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1209[i + 0]) );
  }
  i1206.characterInfo = i1208
  request.r(i1207[5], i1207[6], 0, i1206, 'texture')
  i1206.originalFontSize = i1207[7]
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1213 = data
  i1212.index = i1213[0]
  i1212.advance = i1213[1]
  i1212.bearing = i1213[2]
  i1212.glyphWidth = i1213[3]
  i1212.glyphHeight = i1213[4]
  i1212.minX = i1213[5]
  i1212.maxX = i1213[6]
  i1212.minY = i1213[7]
  i1212.maxY = i1213[8]
  i1212.uvBottomLeftX = i1213[9]
  i1212.uvBottomLeftY = i1213[10]
  i1212.uvBottomRightX = i1213[11]
  i1212.uvBottomRightY = i1213[12]
  i1212.uvTopLeftX = i1213[13]
  i1212.uvTopLeftY = i1213[14]
  i1212.uvTopRightX = i1213[15]
  i1212.uvTopRightY = i1213[16]
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1215 = data
  i1214.name = i1215[0]
  i1214.bytes64 = i1215[1]
  i1214.data = i1215[2]
  return i1214
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i1216 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i1217 = data
  var i1219 = i1217[0]
  var i1218 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i1219.length; i += 2) {
  request.r(i1219[i + 0], i1219[i + 1], 1, i1218, '')
  }
  i1216.components = i1218
  return i1216
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i1222 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i1223 = data
  i1222.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i1223[0], i1222.mode)
  i1222.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i1223[1], i1222.neutralHDRRangeReductionMode)
  i1222.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i1223[2], i1222.acesPreset)
  i1222.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1223[3], i1222.hueShiftAmount)
  i1222.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i1223[4], i1222.detectPaperWhite)
  i1222.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1223[5], i1222.paperWhite)
  i1222.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i1223[6], i1222.detectBrightnessLimits)
  i1222.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1223[7], i1222.minNits)
  i1222.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1223[8], i1222.maxNits)
  i1222.active = !!i1223[9]
  return i1222
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i1224 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i1225 = data
  i1224.m_Value = i1225[0]
  i1224.m_OverrideState = !!i1225[1]
  return i1224
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i1226 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i1227 = data
  i1226.m_Value = i1227[0]
  i1226.m_OverrideState = !!i1227[1]
  return i1226
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i1228 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i1229 = data
  i1228.m_Value = i1229[0]
  i1228.m_OverrideState = !!i1229[1]
  return i1228
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i1230 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i1231 = data
  i1230.m_Value = i1231[0]
  i1230.m_OverrideState = !!i1231[1]
  return i1230
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i1232 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i1233 = data
  i1232.m_Value = !!i1233[0]
  i1232.m_OverrideState = !!i1233[1]
  return i1232
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i1234 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i1235 = data
  i1234.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1235[0], i1234.skipIterations)
  i1234.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i1235[1], i1234.threshold)
  i1234.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1235[2], i1234.intensity)
  i1234.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1235[3], i1234.scatter)
  i1234.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i1235[4], i1234.clamp)
  i1234.tint = request.d('UnityEngine.Rendering.ColorParameter', i1235[5], i1234.tint)
  i1234.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i1235[6], i1234.highQualityFiltering)
  i1234.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i1235[7], i1234.downscale)
  i1234.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1235[8], i1234.maxIterations)
  i1234.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i1235[9], i1234.dirtTexture)
  i1234.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1235[10], i1234.dirtIntensity)
  i1234.active = !!i1235[11]
  return i1234
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i1236 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i1237 = data
  i1236.m_Value = i1237[0]
  i1236.m_OverrideState = !!i1237[1]
  return i1236
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i1238 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i1239 = data
  i1238.m_Value = i1239[0]
  i1238.m_OverrideState = !!i1239[1]
  return i1238
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i1240 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i1241 = data
  i1240.m_Value = new pc.Color(i1241[0], i1241[1], i1241[2], i1241[3])
  i1240.m_OverrideState = !!i1241[4]
  return i1240
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i1242 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i1243 = data
  i1242.m_Value = i1243[0]
  i1242.m_OverrideState = !!i1243[1]
  return i1242
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i1244 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i1245 = data
  i1244.dimension = i1245[0]
  request.r(i1245[1], i1245[2], 0, i1244, 'm_Value')
  i1244.m_OverrideState = !!i1245[3]
  return i1244
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlur"] = function (request, data, root) {
  var i1246 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlur' )
  var i1247 = data
  i1246.mode = request.d('UnityEngine.Rendering.Universal.MotionBlurModeParameter', i1247[0], i1246.mode)
  i1246.quality = request.d('UnityEngine.Rendering.Universal.MotionBlurQualityParameter', i1247[1], i1246.quality)
  i1246.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1247[2], i1246.intensity)
  i1246.clamp = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1247[3], i1246.clamp)
  i1246.active = !!i1247[4]
  return i1246
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurModeParameter"] = function (request, data, root) {
  var i1248 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurModeParameter' )
  var i1249 = data
  i1248.m_Value = i1249[0]
  i1248.m_OverrideState = !!i1249[1]
  return i1248
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurQualityParameter"] = function (request, data, root) {
  var i1250 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurQualityParameter' )
  var i1251 = data
  i1250.m_Value = i1251[0]
  i1250.m_OverrideState = !!i1251[1]
  return i1250
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i1252 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i1253 = data
  i1252.color = request.d('UnityEngine.Rendering.ColorParameter', i1253[0], i1252.color)
  i1252.center = request.d('UnityEngine.Rendering.Vector2Parameter', i1253[1], i1252.center)
  i1252.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1253[2], i1252.intensity)
  i1252.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1253[3], i1252.smoothness)
  i1252.rounded = request.d('UnityEngine.Rendering.BoolParameter', i1253[4], i1252.rounded)
  i1252.active = !!i1253[5]
  return i1252
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i1254 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i1255 = data
  i1254.m_Value = new pc.Vec2( i1255[0], i1255[1] )
  i1254.m_OverrideState = !!i1255[2]
  return i1254
}

Deserializers["_Game.Configs.HexColorConfig"] = function (request, data, root) {
  var i1256 = root || request.c( '_Game.Configs.HexColorConfig' )
  var i1257 = data
  var i1259 = i1257[0]
  var i1258 = new (System.Collections.Generic.List$1(Bridge.ns('_Game.Configs.HexColorConfig+Entry')))
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.add(request.d('_Game.Configs.HexColorConfig+Entry', i1259[i + 0]));
  }
  i1256.entries = i1258
  return i1256
}

Deserializers["_Game.Configs.HexColorConfig+Entry"] = function (request, data, root) {
  var i1262 = root || request.c( '_Game.Configs.HexColorConfig+Entry' )
  var i1263 = data
  i1262.hexColor = i1263[0]
  i1262.color = new pc.Color(i1263[1], i1263[2], i1263[3], i1263[4])
  request.r(i1263[5], i1263[6], 0, i1262, 'material')
  return i1262
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1264 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1265 = data
  request.r(i1265[0], i1265[1], 0, i1264, 'atlas')
  i1264.normalStyle = i1265[2]
  i1264.normalSpacingOffset = i1265[3]
  i1264.boldStyle = i1265[4]
  i1264.boldSpacing = i1265[5]
  i1264.italicStyle = i1265[6]
  i1264.tabSize = i1265[7]
  i1264.hashCode = i1265[8]
  request.r(i1265[9], i1265[10], 0, i1264, 'material')
  i1264.materialHashCode = i1265[11]
  i1264.m_Version = i1265[12]
  i1264.m_SourceFontFileGUID = i1265[13]
  request.r(i1265[14], i1265[15], 0, i1264, 'm_SourceFontFile_EditorRef')
  request.r(i1265[16], i1265[17], 0, i1264, 'm_SourceFontFile')
  i1264.m_AtlasPopulationMode = i1265[18]
  i1264.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1265[19], i1264.m_FaceInfo)
  var i1267 = i1265[20]
  var i1266 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.add(request.d('UnityEngine.TextCore.Glyph', i1267[i + 0]));
  }
  i1264.m_GlyphTable = i1266
  var i1269 = i1265[21]
  var i1268 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.add(request.d('TMPro.TMP_Character', i1269[i + 0]));
  }
  i1264.m_CharacterTable = i1268
  var i1271 = i1265[22]
  var i1270 = []
  for(var i = 0; i < i1271.length; i += 2) {
  request.r(i1271[i + 0], i1271[i + 1], 2, i1270, '')
  }
  i1264.m_AtlasTextures = i1270
  i1264.m_AtlasTextureIndex = i1265[23]
  i1264.m_IsMultiAtlasTexturesEnabled = !!i1265[24]
  i1264.m_ClearDynamicDataOnBuild = !!i1265[25]
  var i1273 = i1265[26]
  var i1272 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.add(request.d('UnityEngine.TextCore.GlyphRect', i1273[i + 0]));
  }
  i1264.m_UsedGlyphRects = i1272
  var i1275 = i1265[27]
  var i1274 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.add(request.d('UnityEngine.TextCore.GlyphRect', i1275[i + 0]));
  }
  i1264.m_FreeGlyphRects = i1274
  i1264.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1265[28], i1264.m_fontInfo)
  i1264.m_AtlasWidth = i1265[29]
  i1264.m_AtlasHeight = i1265[30]
  i1264.m_AtlasPadding = i1265[31]
  i1264.m_AtlasRenderMode = i1265[32]
  var i1277 = i1265[33]
  var i1276 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.add(request.d('TMPro.TMP_Glyph', i1277[i + 0]));
  }
  i1264.m_glyphInfoList = i1276
  i1264.m_KerningTable = request.d('TMPro.KerningTable', i1265[34], i1264.m_KerningTable)
  i1264.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1265[35], i1264.m_FontFeatureTable)
  var i1279 = i1265[36]
  var i1278 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1279.length; i += 2) {
  request.r(i1279[i + 0], i1279[i + 1], 1, i1278, '')
  }
  i1264.fallbackFontAssets = i1278
  var i1281 = i1265[37]
  var i1280 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1281.length; i += 2) {
  request.r(i1281[i + 0], i1281[i + 1], 1, i1280, '')
  }
  i1264.m_FallbackFontAssetTable = i1280
  i1264.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1265[38], i1264.m_CreationSettings)
  var i1283 = i1265[39]
  var i1282 = []
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.push( request.d('TMPro.TMP_FontWeightPair', i1283[i + 0]) );
  }
  i1264.m_FontWeightTable = i1282
  var i1285 = i1265[40]
  var i1284 = []
  for(var i = 0; i < i1285.length; i += 1) {
    i1284.push( request.d('TMPro.TMP_FontWeightPair', i1285[i + 0]) );
  }
  i1264.fontWeights = i1284
  return i1264
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1286 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1287 = data
  i1286.m_FaceIndex = i1287[0]
  i1286.m_FamilyName = i1287[1]
  i1286.m_StyleName = i1287[2]
  i1286.m_PointSize = i1287[3]
  i1286.m_Scale = i1287[4]
  i1286.m_UnitsPerEM = i1287[5]
  i1286.m_LineHeight = i1287[6]
  i1286.m_AscentLine = i1287[7]
  i1286.m_CapLine = i1287[8]
  i1286.m_MeanLine = i1287[9]
  i1286.m_Baseline = i1287[10]
  i1286.m_DescentLine = i1287[11]
  i1286.m_SuperscriptOffset = i1287[12]
  i1286.m_SuperscriptSize = i1287[13]
  i1286.m_SubscriptOffset = i1287[14]
  i1286.m_SubscriptSize = i1287[15]
  i1286.m_UnderlineOffset = i1287[16]
  i1286.m_UnderlineThickness = i1287[17]
  i1286.m_StrikethroughOffset = i1287[18]
  i1286.m_StrikethroughThickness = i1287[19]
  i1286.m_TabWidth = i1287[20]
  return i1286
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1290 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1291 = data
  i1290.m_Index = i1291[0]
  i1290.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1291[1], i1290.m_Metrics)
  i1290.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1291[2], i1290.m_GlyphRect)
  i1290.m_Scale = i1291[3]
  i1290.m_AtlasIndex = i1291[4]
  i1290.m_ClassDefinitionType = i1291[5]
  return i1290
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1292 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1293 = data
  i1292.m_Width = i1293[0]
  i1292.m_Height = i1293[1]
  i1292.m_HorizontalBearingX = i1293[2]
  i1292.m_HorizontalBearingY = i1293[3]
  i1292.m_HorizontalAdvance = i1293[4]
  return i1292
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1294 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1295 = data
  i1294.m_X = i1295[0]
  i1294.m_Y = i1295[1]
  i1294.m_Width = i1295[2]
  i1294.m_Height = i1295[3]
  return i1294
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1298 = root || request.c( 'TMPro.TMP_Character' )
  var i1299 = data
  i1298.m_ElementType = i1299[0]
  i1298.m_Unicode = i1299[1]
  i1298.m_GlyphIndex = i1299[2]
  i1298.m_Scale = i1299[3]
  return i1298
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1304 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1305 = data
  i1304.Name = i1305[0]
  i1304.PointSize = i1305[1]
  i1304.Scale = i1305[2]
  i1304.CharacterCount = i1305[3]
  i1304.LineHeight = i1305[4]
  i1304.Baseline = i1305[5]
  i1304.Ascender = i1305[6]
  i1304.CapHeight = i1305[7]
  i1304.Descender = i1305[8]
  i1304.CenterLine = i1305[9]
  i1304.SuperscriptOffset = i1305[10]
  i1304.SubscriptOffset = i1305[11]
  i1304.SubSize = i1305[12]
  i1304.Underline = i1305[13]
  i1304.UnderlineThickness = i1305[14]
  i1304.strikethrough = i1305[15]
  i1304.strikethroughThickness = i1305[16]
  i1304.TabWidth = i1305[17]
  i1304.Padding = i1305[18]
  i1304.AtlasWidth = i1305[19]
  i1304.AtlasHeight = i1305[20]
  return i1304
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1308 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1309 = data
  i1308.id = i1309[0]
  i1308.x = i1309[1]
  i1308.y = i1309[2]
  i1308.width = i1309[3]
  i1308.height = i1309[4]
  i1308.xOffset = i1309[5]
  i1308.yOffset = i1309[6]
  i1308.xAdvance = i1309[7]
  i1308.scale = i1309[8]
  return i1308
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1310 = root || request.c( 'TMPro.KerningTable' )
  var i1311 = data
  var i1313 = i1311[0]
  var i1312 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.add(request.d('TMPro.KerningPair', i1313[i + 0]));
  }
  i1310.kerningPairs = i1312
  return i1310
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1316 = root || request.c( 'TMPro.KerningPair' )
  var i1317 = data
  i1316.xOffset = i1317[0]
  i1316.m_FirstGlyph = i1317[1]
  i1316.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1317[2], i1316.m_FirstGlyphAdjustments)
  i1316.m_SecondGlyph = i1317[3]
  i1316.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1317[4], i1316.m_SecondGlyphAdjustments)
  i1316.m_IgnoreSpacingAdjustments = !!i1317[5]
  return i1316
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1318 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1319 = data
  var i1321 = i1319[0]
  var i1320 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1321[i + 0]));
  }
  i1318.m_GlyphPairAdjustmentRecords = i1320
  return i1318
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1324 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1325 = data
  i1324.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1325[0], i1324.m_FirstAdjustmentRecord)
  i1324.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1325[1], i1324.m_SecondAdjustmentRecord)
  i1324.m_FeatureLookupFlags = i1325[2]
  return i1324
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1326 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1327 = data
  i1326.m_GlyphIndex = i1327[0]
  i1326.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1327[1], i1326.m_GlyphValueRecord)
  return i1326
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1328 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1329 = data
  i1328.m_XPlacement = i1329[0]
  i1328.m_YPlacement = i1329[1]
  i1328.m_XAdvance = i1329[2]
  i1328.m_YAdvance = i1329[3]
  return i1328
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1332 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1333 = data
  i1332.sourceFontFileName = i1333[0]
  i1332.sourceFontFileGUID = i1333[1]
  i1332.pointSizeSamplingMode = i1333[2]
  i1332.pointSize = i1333[3]
  i1332.padding = i1333[4]
  i1332.packingMode = i1333[5]
  i1332.atlasWidth = i1333[6]
  i1332.atlasHeight = i1333[7]
  i1332.characterSetSelectionMode = i1333[8]
  i1332.characterSequence = i1333[9]
  i1332.referencedFontAssetGUID = i1333[10]
  i1332.referencedTextAssetGUID = i1333[11]
  i1332.fontStyle = i1333[12]
  i1332.fontStyleModifier = i1333[13]
  i1332.renderMode = i1333[14]
  i1332.includeFontFeatures = !!i1333[15]
  return i1332
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1336 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1337 = data
  request.r(i1337[0], i1337[1], 0, i1336, 'regularTypeface')
  request.r(i1337[2], i1337[3], 0, i1336, 'italicTypeface')
  return i1336
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1338 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1339 = data
  i1338.useSafeMode = !!i1339[0]
  i1338.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1339[1], i1338.safeModeOptions)
  i1338.timeScale = i1339[2]
  i1338.unscaledTimeScale = i1339[3]
  i1338.useSmoothDeltaTime = !!i1339[4]
  i1338.maxSmoothUnscaledTime = i1339[5]
  i1338.rewindCallbackMode = i1339[6]
  i1338.showUnityEditorReport = !!i1339[7]
  i1338.logBehaviour = i1339[8]
  i1338.drawGizmos = !!i1339[9]
  i1338.defaultRecyclable = !!i1339[10]
  i1338.defaultAutoPlay = i1339[11]
  i1338.defaultUpdateType = i1339[12]
  i1338.defaultTimeScaleIndependent = !!i1339[13]
  i1338.defaultEaseType = i1339[14]
  i1338.defaultEaseOvershootOrAmplitude = i1339[15]
  i1338.defaultEasePeriod = i1339[16]
  i1338.defaultAutoKill = !!i1339[17]
  i1338.defaultLoopType = i1339[18]
  i1338.debugMode = !!i1339[19]
  i1338.debugStoreTargetId = !!i1339[20]
  i1338.showPreviewPanel = !!i1339[21]
  i1338.storeSettingsLocation = i1339[22]
  i1338.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1339[23], i1338.modules)
  i1338.createASMDEF = !!i1339[24]
  i1338.showPlayingTweens = !!i1339[25]
  i1338.showPausedTweens = !!i1339[26]
  return i1338
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1340 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1341 = data
  i1340.logBehaviour = i1341[0]
  i1340.nestedTweenFailureBehaviour = i1341[1]
  return i1340
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1342 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1343 = data
  i1342.showPanel = !!i1343[0]
  i1342.audioEnabled = !!i1343[1]
  i1342.physicsEnabled = !!i1343[2]
  i1342.physics2DEnabled = !!i1343[3]
  i1342.spriteEnabled = !!i1343[4]
  i1342.uiEnabled = !!i1343[5]
  i1342.textMeshProEnabled = !!i1343[6]
  i1342.tk2DEnabled = !!i1343[7]
  i1342.deAudioEnabled = !!i1343[8]
  i1342.deUnityExtendedEnabled = !!i1343[9]
  i1342.epoOutlineEnabled = !!i1343[10]
  return i1342
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1344 = root || request.c( 'TMPro.TMP_Settings' )
  var i1345 = data
  i1344.m_enableWordWrapping = !!i1345[0]
  i1344.m_enableKerning = !!i1345[1]
  i1344.m_enableExtraPadding = !!i1345[2]
  i1344.m_enableTintAllSprites = !!i1345[3]
  i1344.m_enableParseEscapeCharacters = !!i1345[4]
  i1344.m_EnableRaycastTarget = !!i1345[5]
  i1344.m_GetFontFeaturesAtRuntime = !!i1345[6]
  i1344.m_missingGlyphCharacter = i1345[7]
  i1344.m_warningsDisabled = !!i1345[8]
  request.r(i1345[9], i1345[10], 0, i1344, 'm_defaultFontAsset')
  i1344.m_defaultFontAssetPath = i1345[11]
  i1344.m_defaultFontSize = i1345[12]
  i1344.m_defaultAutoSizeMinRatio = i1345[13]
  i1344.m_defaultAutoSizeMaxRatio = i1345[14]
  i1344.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1345[15], i1345[16] )
  i1344.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1345[17], i1345[18] )
  i1344.m_autoSizeTextContainer = !!i1345[19]
  i1344.m_IsTextObjectScaleStatic = !!i1345[20]
  var i1347 = i1345[21]
  var i1346 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1347.length; i += 2) {
  request.r(i1347[i + 0], i1347[i + 1], 1, i1346, '')
  }
  i1344.m_fallbackFontAssets = i1346
  i1344.m_matchMaterialPreset = !!i1345[22]
  request.r(i1345[23], i1345[24], 0, i1344, 'm_defaultSpriteAsset')
  i1344.m_defaultSpriteAssetPath = i1345[25]
  i1344.m_enableEmojiSupport = !!i1345[26]
  i1344.m_MissingCharacterSpriteUnicode = i1345[27]
  i1344.m_defaultColorGradientPresetsPath = i1345[28]
  request.r(i1345[29], i1345[30], 0, i1344, 'm_defaultStyleSheet')
  i1344.m_StyleSheetsResourcePath = i1345[31]
  request.r(i1345[32], i1345[33], 0, i1344, 'm_leadingCharacters')
  request.r(i1345[34], i1345[35], 0, i1344, 'm_followingCharacters')
  i1344.m_UseModernHangulLineBreakingRules = !!i1345[36]
  return i1344
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1348 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1349 = data
  request.r(i1349[0], i1349[1], 0, i1348, 'spriteSheet')
  var i1351 = i1349[2]
  var i1350 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.add(request.d('TMPro.TMP_Sprite', i1351[i + 0]));
  }
  i1348.spriteInfoList = i1350
  var i1353 = i1349[3]
  var i1352 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1353.length; i += 2) {
  request.r(i1353[i + 0], i1353[i + 1], 1, i1352, '')
  }
  i1348.fallbackSpriteAssets = i1352
  i1348.hashCode = i1349[4]
  request.r(i1349[5], i1349[6], 0, i1348, 'material')
  i1348.materialHashCode = i1349[7]
  i1348.m_Version = i1349[8]
  i1348.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1349[9], i1348.m_FaceInfo)
  var i1355 = i1349[10]
  var i1354 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1355.length; i += 1) {
    i1354.add(request.d('TMPro.TMP_SpriteCharacter', i1355[i + 0]));
  }
  i1348.m_SpriteCharacterTable = i1354
  var i1357 = i1349[11]
  var i1356 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.add(request.d('TMPro.TMP_SpriteGlyph', i1357[i + 0]));
  }
  i1348.m_SpriteGlyphTable = i1356
  return i1348
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1360 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1361 = data
  i1360.name = i1361[0]
  i1360.hashCode = i1361[1]
  i1360.unicode = i1361[2]
  i1360.pivot = new pc.Vec2( i1361[3], i1361[4] )
  request.r(i1361[5], i1361[6], 0, i1360, 'sprite')
  i1360.id = i1361[7]
  i1360.x = i1361[8]
  i1360.y = i1361[9]
  i1360.width = i1361[10]
  i1360.height = i1361[11]
  i1360.xOffset = i1361[12]
  i1360.yOffset = i1361[13]
  i1360.xAdvance = i1361[14]
  i1360.scale = i1361[15]
  return i1360
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1366 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1367 = data
  i1366.m_Name = i1367[0]
  i1366.m_HashCode = i1367[1]
  i1366.m_ElementType = i1367[2]
  i1366.m_Unicode = i1367[3]
  i1366.m_GlyphIndex = i1367[4]
  i1366.m_Scale = i1367[5]
  return i1366
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1370 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1371 = data
  request.r(i1371[0], i1371[1], 0, i1370, 'sprite')
  i1370.m_Index = i1371[2]
  i1370.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1371[3], i1370.m_Metrics)
  i1370.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1371[4], i1370.m_GlyphRect)
  i1370.m_Scale = i1371[5]
  i1370.m_AtlasIndex = i1371[6]
  i1370.m_ClassDefinitionType = i1371[7]
  return i1370
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1372 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1373 = data
  var i1375 = i1373[0]
  var i1374 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1375.length; i += 1) {
    i1374.add(request.d('TMPro.TMP_Style', i1375[i + 0]));
  }
  i1372.m_StyleList = i1374
  return i1372
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1378 = root || request.c( 'TMPro.TMP_Style' )
  var i1379 = data
  i1378.m_Name = i1379[0]
  i1378.m_HashCode = i1379[1]
  i1378.m_OpeningDefinition = i1379[2]
  i1378.m_ClosingDefinition = i1379[3]
  i1378.m_OpeningTagArray = i1379[4]
  i1378.m_ClosingTagArray = i1379[5]
  i1378.m_OpeningTagUnicodeArray = i1379[6]
  i1378.m_ClosingTagUnicodeArray = i1379[7]
  return i1378
}

Deserializers["UnityEditor.Rendering.Universal.AssetVersion"] = function (request, data, root) {
  var i1380 = root || request.c( 'UnityEditor.Rendering.Universal.AssetVersion' )
  var i1381 = data
  i1380.version = i1381[0]
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1383 = data
  var i1385 = i1383[0]
  var i1384 = []
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1385[i + 0]) );
  }
  i1382.files = i1384
  i1382.componentToPrefabIds = i1383[1]
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1389 = data
  i1388.path = i1389[0]
  request.r(i1389[1], i1389[2], 0, i1388, 'unityObject')
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1391 = data
  var i1393 = i1391[0]
  var i1392 = []
  for(var i = 0; i < i1393.length; i += 1) {
    i1392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1393[i + 0]) );
  }
  i1390.scriptsExecutionOrder = i1392
  var i1395 = i1391[1]
  var i1394 = []
  for(var i = 0; i < i1395.length; i += 1) {
    i1394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1395[i + 0]) );
  }
  i1390.sortingLayers = i1394
  var i1397 = i1391[2]
  var i1396 = []
  for(var i = 0; i < i1397.length; i += 1) {
    i1396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1397[i + 0]) );
  }
  i1390.cullingLayers = i1396
  i1390.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1391[3], i1390.timeSettings)
  i1390.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1391[4], i1390.physicsSettings)
  i1390.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1391[5], i1390.physics2DSettings)
  i1390.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1391[6], i1390.qualitySettings)
  i1390.enableRealtimeShadows = !!i1391[7]
  i1390.enableAutoInstancing = !!i1391[8]
  i1390.enableStaticBatching = !!i1391[9]
  i1390.enableDynamicBatching = !!i1391[10]
  i1390.usePreservativeDynamicBatching = !!i1391[11]
  i1390.lightmapEncodingQuality = i1391[12]
  i1390.desiredColorSpace = i1391[13]
  var i1399 = i1391[14]
  var i1398 = []
  for(var i = 0; i < i1399.length; i += 1) {
    i1398.push( i1399[i + 0] );
  }
  i1390.allTags = i1398
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1403 = data
  i1402.name = i1403[0]
  i1402.value = i1403[1]
  return i1402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1407 = data
  i1406.id = i1407[0]
  i1406.name = i1407[1]
  i1406.value = i1407[2]
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1411 = data
  i1410.id = i1411[0]
  i1410.name = i1411[1]
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1413 = data
  i1412.fixedDeltaTime = i1413[0]
  i1412.maximumDeltaTime = i1413[1]
  i1412.timeScale = i1413[2]
  i1412.maximumParticleTimestep = i1413[3]
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1415 = data
  i1414.gravity = new pc.Vec3( i1415[0], i1415[1], i1415[2] )
  i1414.defaultSolverIterations = i1415[3]
  i1414.bounceThreshold = i1415[4]
  i1414.autoSyncTransforms = !!i1415[5]
  i1414.autoSimulation = !!i1415[6]
  var i1417 = i1415[7]
  var i1416 = []
  for(var i = 0; i < i1417.length; i += 1) {
    i1416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1417[i + 0]) );
  }
  i1414.collisionMatrix = i1416
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1421 = data
  i1420.enabled = !!i1421[0]
  i1420.layerId = i1421[1]
  i1420.otherLayerId = i1421[2]
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1423 = data
  request.r(i1423[0], i1423[1], 0, i1422, 'material')
  i1422.gravity = new pc.Vec2( i1423[2], i1423[3] )
  i1422.positionIterations = i1423[4]
  i1422.velocityIterations = i1423[5]
  i1422.velocityThreshold = i1423[6]
  i1422.maxLinearCorrection = i1423[7]
  i1422.maxAngularCorrection = i1423[8]
  i1422.maxTranslationSpeed = i1423[9]
  i1422.maxRotationSpeed = i1423[10]
  i1422.baumgarteScale = i1423[11]
  i1422.baumgarteTOIScale = i1423[12]
  i1422.timeToSleep = i1423[13]
  i1422.linearSleepTolerance = i1423[14]
  i1422.angularSleepTolerance = i1423[15]
  i1422.defaultContactOffset = i1423[16]
  i1422.autoSimulation = !!i1423[17]
  i1422.queriesHitTriggers = !!i1423[18]
  i1422.queriesStartInColliders = !!i1423[19]
  i1422.callbacksOnDisable = !!i1423[20]
  i1422.reuseCollisionCallbacks = !!i1423[21]
  i1422.autoSyncTransforms = !!i1423[22]
  var i1425 = i1423[23]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1425[i + 0]) );
  }
  i1422.collisionMatrix = i1424
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1429 = data
  i1428.enabled = !!i1429[0]
  i1428.layerId = i1429[1]
  i1428.otherLayerId = i1429[2]
  return i1428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1431 = data
  var i1433 = i1431[0]
  var i1432 = []
  for(var i = 0; i < i1433.length; i += 1) {
    i1432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1433[i + 0]) );
  }
  i1430.qualityLevels = i1432
  var i1435 = i1431[1]
  var i1434 = []
  for(var i = 0; i < i1435.length; i += 1) {
    i1434.push( i1435[i + 0] );
  }
  i1430.names = i1434
  i1430.shadows = i1431[2]
  i1430.anisotropicFiltering = i1431[3]
  i1430.antiAliasing = i1431[4]
  i1430.lodBias = i1431[5]
  i1430.shadowCascades = i1431[6]
  i1430.shadowDistance = i1431[7]
  i1430.shadowmaskMode = i1431[8]
  i1430.shadowProjection = i1431[9]
  i1430.shadowResolution = i1431[10]
  i1430.softParticles = !!i1431[11]
  i1430.softVegetation = !!i1431[12]
  i1430.activeColorSpace = i1431[13]
  i1430.desiredColorSpace = i1431[14]
  i1430.masterTextureLimit = i1431[15]
  i1430.maxQueuedFrames = i1431[16]
  i1430.particleRaycastBudget = i1431[17]
  i1430.pixelLightCount = i1431[18]
  i1430.realtimeReflectionProbes = !!i1431[19]
  i1430.shadowCascade2Split = i1431[20]
  i1430.shadowCascade4Split = new pc.Vec3( i1431[21], i1431[22], i1431[23] )
  i1430.streamingMipmapsActive = !!i1431[24]
  i1430.vSyncCount = i1431[25]
  i1430.asyncUploadBufferSize = i1431[26]
  i1430.asyncUploadTimeSlice = i1431[27]
  i1430.billboardsFaceCameraPosition = !!i1431[28]
  i1430.shadowNearPlaneOffset = i1431[29]
  i1430.streamingMipmapsMemoryBudget = i1431[30]
  i1430.maximumLODLevel = i1431[31]
  i1430.streamingMipmapsAddAllCameras = !!i1431[32]
  i1430.streamingMipmapsMaxLevelReduction = i1431[33]
  i1430.streamingMipmapsRenderersPerFrame = i1431[34]
  i1430.resolutionScalingFixedDPIFactor = i1431[35]
  i1430.streamingMipmapsMaxFileIORequests = i1431[36]
  i1430.currentQualityLevel = i1431[37]
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1441 = data
  i1440.weight = i1441[0]
  i1440.vertices = i1441[1]
  i1440.normals = i1441[2]
  i1440.tangents = i1441[3]
  return i1440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings"] = function (request, data, root) {
  var i1442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings' )
  var i1443 = data
  i1442.Event = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1443[0], i1442.Event)
  i1442.filterSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings', i1443[1], i1442.filterSettings)
  i1442.overrideMaterialId = i1443[2]
  i1442.overrideMaterialPassIndex = i1443[3]
  i1442.overrideShaderId = i1443[4]
  i1442.overrideShaderPassIndex = i1443[5]
  i1442.overrideMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1443[6], i1442.overrideMode)
  i1442.overrideDepthState = !!i1443[7]
  i1442.depthCompareFunction = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1443[8], i1442.depthCompareFunction)
  i1442.enableWrite = !!i1443[9]
  i1442.stencilSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.StencilStateData', i1443[10], i1442.stencilSettings)
  i1442.cameraSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings', i1443[11], i1442.cameraSettings)
  return i1442
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1444 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1445 = data
  i1444.xPlacement = i1445[0]
  i1444.yPlacement = i1445[1]
  i1444.xAdvance = i1445[2]
  i1444.yAdvance = i1445[3]
  return i1444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.EnumDescription"] = function (request, data, root) {
  var i1446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.EnumDescription' )
  var i1447 = data
  i1446.Value = i1447[0]
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings' )
  var i1449 = data
  i1448.RenderQueueType = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1449[0], i1448.RenderQueueType)
  i1448.LayerMask = i1449[1]
  var i1451 = i1449[2]
  var i1450 = []
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.push( i1451[i + 0] );
  }
  i1448.PassNames = i1450
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.StencilStateData"] = function (request, data, root) {
  var i1452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.StencilStateData' )
  var i1453 = data
  i1452.overrideStencilState = !!i1453[0]
  i1452.stencilReference = i1453[1]
  i1452.stencilCompareFunctionValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1453[2], i1452.stencilCompareFunctionValue)
  i1452.passOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1453[3], i1452.passOperationValue)
  i1452.failOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1453[4], i1452.failOperationValue)
  i1452.zFailOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i1453[5], i1452.zFailOperationValue)
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings"] = function (request, data, root) {
  var i1454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings' )
  var i1455 = data
  i1454.overrideCamera = !!i1455[0]
  i1454.restoreCamera = !!i1455[1]
  i1454.offset = new pc.Vec4( i1455[2], i1455[3], i1455[4], i1455[5] )
  i1454.cameraFieldOfView = i1455[6]
  return i1454
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsRenderingMode":0,"LightRenderingMode":1,"MainLightRenderingModeValue":2,"SupportsMainLightShadows":3,"MixedLightingSupported":4,"MainLightShadowmapResolutionValue":5,"SupportsSoftShadows":6,"SoftShadowQualityValue":7,"ShadowDistance":8,"ShadowCascadeCount":9,"Cascade2Split":10,"Cascade3Split":11,"Cascade4Split":13,"CascadeBorder":16,"ShadowDepthBias":17,"ShadowNormalBias":18,"RequireDepthTexture":19,"RequireOpaqueTexture":20,"scriptableRendererData":21},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData":{"opaqueLayerMask":0,"transparentLayerMask":1,"RenderObjectsFeatures":2,"name":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects":{"settings":0,"name":1,"typeName":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings":{"Event":0,"filterSettings":1,"overrideMaterialId":2,"overrideMaterialPassIndex":3,"overrideShaderId":4,"overrideShaderPassIndex":5,"overrideMode":6,"overrideDepthState":7,"depthCompareFunction":8,"enableWrite":9,"stencilSettings":10,"cameraSettings":11},"Luna.Unity.DTO.UnityEngine.Assets.EnumDescription":{"Value":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings":{"RenderQueueType":0,"LayerMask":1,"PassNames":2},"Luna.Unity.DTO.UnityEngine.Assets.StencilStateData":{"overrideStencilState":0,"stencilReference":1,"stencilCompareFunctionValue":2,"passOperationValue":3,"failOperationValue":4,"zFailOperationValue":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings":{"overrideCamera":0,"restoreCamera":1,"offset":2,"cameraFieldOfView":6}}

Deserializers.requiredComponents = {"100":[101],"102":[101],"103":[101],"104":[101],"105":[101],"106":[101],"107":[108],"109":[23],"110":[111],"112":[111],"113":[111],"114":[111],"115":[111],"116":[111],"117":[111],"118":[119],"120":[119],"121":[119],"122":[119],"123":[119],"124":[119],"125":[119],"126":[119],"127":[119],"128":[119],"129":[119],"130":[119],"131":[119],"132":[23],"133":[3],"134":[135],"136":[135],"7":[6],"13":[11],"33":[35],"68":[6],"137":[23],"25":[23],"27":[26],"138":[139],"140":[6],"141":[6],"10":[7],"16":[15,6],"142":[6],"9":[7],"49":[6],"143":[6],"75":[6],"144":[6],"54":[6],"145":[6],"48":[6],"57":[6],"146":[6],"147":[15,6],"148":[6],"56":[6],"53":[6],"149":[6],"52":[15,6],"61":[6],"150":[151],"152":[151],"153":[151],"154":[151],"155":[23],"156":[23],"157":[139],"158":[151],"159":[7],"160":[6],"161":[3,6],"18":[6,15],"162":[6],"163":[15,6],"164":[3],"165":[15,6],"166":[6],"167":[139]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasGroup","UnityEngine.MonoBehaviour","_Game.Packshot.PackshotController","UnityEngine.UI.Button","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Outline","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Texture2D","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","Main","UnityEngine.GameObject","_Game.Configs.HexColorConfig","_Game.Audio.SoundPlayer","UnityEngine.AudioClip","UnityEngine.AudioSource","_Game.Board.BoardController","_Game.Board.HexGridGenerator","_Game.Board.BoardOutline","_Game.Stacks.StackTrayController","_Game.Drag.DragController","_Game.Merge.MergeAnimator","_Game.Merge.MergeSystem","_Game.Tutorial.TutorialHandController","_Game.Flow.LevelFlowController","UnityEngine.Cubemap","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.Sprite","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.Text","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.Font","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.MotionBlur","UnityEngine.Rendering.Universal.Vignette","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEditor.Rendering.Universal.AssetVersion","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "test_3d";

Deserializers.lunaInitializationTime = "06/08/2026 18:53:06";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "40351";

Deserializers.projectId = "b5a0e32a9617746cc981009d48f1e861";

Deserializers.packagesInfo = "com.unity.inputsystem: 1.19.0\ncom.unity.render-pipelines.universal: 14.0.12\ncom.unity.textmeshpro: 3.0.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1630";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4866";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "True";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneOSX";

Deserializers.applicationIdentifier = "com.Unity-Technologies.com.unity.template.urp-blank";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "729f6617-e590-4797-90c6-63a592ae9e10";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

