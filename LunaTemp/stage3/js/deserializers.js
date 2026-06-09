var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2184 = root || request.c( 'UnityEngine.JointSpring' )
  var i2185 = data
  i2184.spring = i2185[0]
  i2184.damper = i2185[1]
  i2184.targetPosition = i2185[2]
  return i2184
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2186 = root || request.c( 'UnityEngine.JointMotor' )
  var i2187 = data
  i2186.m_TargetVelocity = i2187[0]
  i2186.m_Force = i2187[1]
  i2186.m_FreeSpin = i2187[2]
  return i2186
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2188 = root || request.c( 'UnityEngine.JointLimits' )
  var i2189 = data
  i2188.m_Min = i2189[0]
  i2188.m_Max = i2189[1]
  i2188.m_Bounciness = i2189[2]
  i2188.m_BounceMinVelocity = i2189[3]
  i2188.m_ContactDistance = i2189[4]
  i2188.minBounce = i2189[5]
  i2188.maxBounce = i2189[6]
  return i2188
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2190 = root || request.c( 'UnityEngine.JointDrive' )
  var i2191 = data
  i2190.m_PositionSpring = i2191[0]
  i2190.m_PositionDamper = i2191[1]
  i2190.m_MaximumForce = i2191[2]
  i2190.m_UseAcceleration = i2191[3]
  return i2190
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2192 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2193 = data
  i2192.m_Spring = i2193[0]
  i2192.m_Damper = i2193[1]
  return i2192
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2194 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2195 = data
  i2194.m_Limit = i2195[0]
  i2194.m_Bounciness = i2195[1]
  i2194.m_ContactDistance = i2195[2]
  return i2194
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2196 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2197 = data
  i2196.m_ExtremumSlip = i2197[0]
  i2196.m_ExtremumValue = i2197[1]
  i2196.m_AsymptoteSlip = i2197[2]
  i2196.m_AsymptoteValue = i2197[3]
  i2196.m_Stiffness = i2197[4]
  return i2196
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2198 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2199 = data
  i2198.m_LowerAngle = i2199[0]
  i2198.m_UpperAngle = i2199[1]
  return i2198
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2200 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2201 = data
  i2200.m_MotorSpeed = i2201[0]
  i2200.m_MaximumMotorTorque = i2201[1]
  return i2200
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2202 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2203 = data
  i2202.m_DampingRatio = i2203[0]
  i2202.m_Frequency = i2203[1]
  i2202.m_Angle = i2203[2]
  return i2202
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2204 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2205 = data
  i2204.m_LowerTranslation = i2205[0]
  i2204.m_UpperTranslation = i2205[1]
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2207 = data
  i2206.position = new pc.Vec3( i2207[0], i2207[1], i2207[2] )
  i2206.scale = new pc.Vec3( i2207[3], i2207[4], i2207[5] )
  i2206.rotation = new pc.Quat(i2207[6], i2207[7], i2207[8], i2207[9])
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2209 = data
  request.r(i2209[0], i2209[1], 0, i2208, 'sharedMesh')
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2211 = data
  request.r(i2211[0], i2211[1], 0, i2210, 'additionalVertexStreams')
  i2210.enabled = !!i2211[2]
  request.r(i2211[3], i2211[4], 0, i2210, 'sharedMaterial')
  var i2213 = i2211[5]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 2) {
  request.r(i2213[i + 0], i2213[i + 1], 2, i2212, '')
  }
  i2210.sharedMaterials = i2212
  i2210.receiveShadows = !!i2211[6]
  i2210.shadowCastingMode = i2211[7]
  i2210.sortingLayerID = i2211[8]
  i2210.sortingOrder = i2211[9]
  i2210.lightmapIndex = i2211[10]
  i2210.lightmapSceneIndex = i2211[11]
  i2210.lightmapScaleOffset = new pc.Vec4( i2211[12], i2211[13], i2211[14], i2211[15] )
  i2210.lightProbeUsage = i2211[16]
  i2210.reflectionProbeUsage = i2211[17]
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2217 = data
  i2216.name = i2217[0]
  i2216.tagId = i2217[1]
  i2216.enabled = !!i2217[2]
  i2216.isStatic = !!i2217[3]
  i2216.layer = i2217[4]
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2219 = data
  i2218.name = i2219[0]
  i2218.halfPrecision = !!i2219[1]
  i2218.useSimplification = !!i2219[2]
  i2218.useUInt32IndexFormat = !!i2219[3]
  i2218.vertexCount = i2219[4]
  i2218.aabb = i2219[5]
  var i2221 = i2219[6]
  var i2220 = []
  for(var i = 0; i < i2221.length; i += 1) {
    i2220.push( !!i2221[i + 0] );
  }
  i2218.streams = i2220
  i2218.vertices = i2219[7]
  var i2223 = i2219[8]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2223[i + 0]) );
  }
  i2218.subMeshes = i2222
  var i2225 = i2219[9]
  var i2224 = []
  for(var i = 0; i < i2225.length; i += 16) {
    i2224.push( new pc.Mat4().setData(i2225[i + 0], i2225[i + 1], i2225[i + 2], i2225[i + 3],  i2225[i + 4], i2225[i + 5], i2225[i + 6], i2225[i + 7],  i2225[i + 8], i2225[i + 9], i2225[i + 10], i2225[i + 11],  i2225[i + 12], i2225[i + 13], i2225[i + 14], i2225[i + 15]) );
  }
  i2218.bindposes = i2224
  var i2227 = i2219[10]
  var i2226 = []
  for(var i = 0; i < i2227.length; i += 1) {
    i2226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2227[i + 0]) );
  }
  i2218.blendShapes = i2226
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2233 = data
  i2232.triangles = i2233[0]
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2239 = data
  i2238.name = i2239[0]
  var i2241 = i2239[1]
  var i2240 = []
  for(var i = 0; i < i2241.length; i += 1) {
    i2240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2241[i + 0]) );
  }
  i2238.frames = i2240
  return i2238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2242 = root || new pc.UnityMaterial()
  var i2243 = data
  i2242.name = i2243[0]
  request.r(i2243[1], i2243[2], 0, i2242, 'shader')
  i2242.renderQueue = i2243[3]
  i2242.enableInstancing = !!i2243[4]
  var i2245 = i2243[5]
  var i2244 = []
  for(var i = 0; i < i2245.length; i += 1) {
    i2244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2245[i + 0]) );
  }
  i2242.floatParameters = i2244
  var i2247 = i2243[6]
  var i2246 = []
  for(var i = 0; i < i2247.length; i += 1) {
    i2246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2247[i + 0]) );
  }
  i2242.colorParameters = i2246
  var i2249 = i2243[7]
  var i2248 = []
  for(var i = 0; i < i2249.length; i += 1) {
    i2248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2249[i + 0]) );
  }
  i2242.vectorParameters = i2248
  var i2251 = i2243[8]
  var i2250 = []
  for(var i = 0; i < i2251.length; i += 1) {
    i2250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2251[i + 0]) );
  }
  i2242.textureParameters = i2250
  var i2253 = i2243[9]
  var i2252 = []
  for(var i = 0; i < i2253.length; i += 1) {
    i2252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2253[i + 0]) );
  }
  i2242.materialFlags = i2252
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2257 = data
  i2256.name = i2257[0]
  i2256.value = i2257[1]
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2261 = data
  i2260.name = i2261[0]
  i2260.value = new pc.Color(i2261[1], i2261[2], i2261[3], i2261[4])
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2265 = data
  i2264.name = i2265[0]
  i2264.value = new pc.Vec4( i2265[1], i2265[2], i2265[3], i2265[4] )
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2269 = data
  i2268.name = i2269[0]
  request.r(i2269[1], i2269[2], 0, i2268, 'value')
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2273 = data
  i2272.name = i2273[0]
  i2272.enabled = !!i2273[1]
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2275 = data
  i2274.name = i2275[0]
  i2274.width = i2275[1]
  i2274.height = i2275[2]
  i2274.mipmapCount = i2275[3]
  i2274.anisoLevel = i2275[4]
  i2274.filterMode = i2275[5]
  i2274.hdr = !!i2275[6]
  i2274.format = i2275[7]
  i2274.wrapMode = i2275[8]
  i2274.alphaIsTransparency = !!i2275[9]
  i2274.alphaSource = i2275[10]
  i2274.graphicsFormat = i2275[11]
  i2274.sRGBTexture = !!i2275[12]
  i2274.desiredColorSpace = i2275[13]
  i2274.wrapU = i2275[14]
  i2274.wrapV = i2275[15]
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2277 = data
  i2276.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2277[0], i2276.main)
  i2276.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2277[1], i2276.colorBySpeed)
  i2276.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2277[2], i2276.colorOverLifetime)
  i2276.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2277[3], i2276.emission)
  i2276.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2277[4], i2276.rotationBySpeed)
  i2276.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2277[5], i2276.rotationOverLifetime)
  i2276.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2277[6], i2276.shape)
  i2276.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2277[7], i2276.sizeBySpeed)
  i2276.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2277[8], i2276.sizeOverLifetime)
  i2276.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2277[9], i2276.textureSheetAnimation)
  i2276.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2277[10], i2276.velocityOverLifetime)
  i2276.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2277[11], i2276.noise)
  i2276.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2277[12], i2276.inheritVelocity)
  i2276.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2277[13], i2276.forceOverLifetime)
  i2276.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2277[14], i2276.limitVelocityOverLifetime)
  i2276.useAutoRandomSeed = !!i2277[15]
  i2276.randomSeed = i2277[16]
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2278 = root || new pc.ParticleSystemMain()
  var i2279 = data
  i2278.duration = i2279[0]
  i2278.loop = !!i2279[1]
  i2278.prewarm = !!i2279[2]
  i2278.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2279[3], i2278.startDelay)
  i2278.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2279[4], i2278.startLifetime)
  i2278.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2279[5], i2278.startSpeed)
  i2278.startSize3D = !!i2279[6]
  i2278.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2279[7], i2278.startSizeX)
  i2278.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2279[8], i2278.startSizeY)
  i2278.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2279[9], i2278.startSizeZ)
  i2278.startRotation3D = !!i2279[10]
  i2278.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2279[11], i2278.startRotationX)
  i2278.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2279[12], i2278.startRotationY)
  i2278.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2279[13], i2278.startRotationZ)
  i2278.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2279[14], i2278.startColor)
  i2278.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2279[15], i2278.gravityModifier)
  i2278.simulationSpace = i2279[16]
  request.r(i2279[17], i2279[18], 0, i2278, 'customSimulationSpace')
  i2278.simulationSpeed = i2279[19]
  i2278.useUnscaledTime = !!i2279[20]
  i2278.scalingMode = i2279[21]
  i2278.playOnAwake = !!i2279[22]
  i2278.maxParticles = i2279[23]
  i2278.emitterVelocityMode = i2279[24]
  i2278.stopAction = i2279[25]
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2280 = root || new pc.MinMaxCurve()
  var i2281 = data
  i2280.mode = i2281[0]
  i2280.curveMin = new pc.AnimationCurve( { keys_flow: i2281[1] } )
  i2280.curveMax = new pc.AnimationCurve( { keys_flow: i2281[2] } )
  i2280.curveMultiplier = i2281[3]
  i2280.constantMin = i2281[4]
  i2280.constantMax = i2281[5]
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2282 = root || new pc.MinMaxGradient()
  var i2283 = data
  i2282.mode = i2283[0]
  i2282.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2283[1], i2282.gradientMin)
  i2282.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2283[2], i2282.gradientMax)
  i2282.colorMin = new pc.Color(i2283[3], i2283[4], i2283[5], i2283[6])
  i2282.colorMax = new pc.Color(i2283[7], i2283[8], i2283[9], i2283[10])
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2285 = data
  i2284.mode = i2285[0]
  var i2287 = i2285[1]
  var i2286 = []
  for(var i = 0; i < i2287.length; i += 1) {
    i2286.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2287[i + 0]) );
  }
  i2284.colorKeys = i2286
  var i2289 = i2285[2]
  var i2288 = []
  for(var i = 0; i < i2289.length; i += 1) {
    i2288.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2289[i + 0]) );
  }
  i2284.alphaKeys = i2288
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2290 = root || new pc.ParticleSystemColorBySpeed()
  var i2291 = data
  i2290.enabled = !!i2291[0]
  i2290.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2291[1], i2290.color)
  i2290.range = new pc.Vec2( i2291[2], i2291[3] )
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2295 = data
  i2294.color = new pc.Color(i2295[0], i2295[1], i2295[2], i2295[3])
  i2294.time = i2295[4]
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2299 = data
  i2298.alpha = i2299[0]
  i2298.time = i2299[1]
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2300 = root || new pc.ParticleSystemColorOverLifetime()
  var i2301 = data
  i2300.enabled = !!i2301[0]
  i2300.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2301[1], i2300.color)
  return i2300
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2302 = root || new pc.ParticleSystemEmitter()
  var i2303 = data
  i2302.enabled = !!i2303[0]
  i2302.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2303[1], i2302.rateOverTime)
  i2302.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2303[2], i2302.rateOverDistance)
  var i2305 = i2303[3]
  var i2304 = []
  for(var i = 0; i < i2305.length; i += 1) {
    i2304.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2305[i + 0]) );
  }
  i2302.bursts = i2304
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2308 = root || new pc.ParticleSystemBurst()
  var i2309 = data
  i2308.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2309[0], i2308.count)
  i2308.cycleCount = i2309[1]
  i2308.minCount = i2309[2]
  i2308.maxCount = i2309[3]
  i2308.repeatInterval = i2309[4]
  i2308.time = i2309[5]
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2310 = root || new pc.ParticleSystemRotationBySpeed()
  var i2311 = data
  i2310.enabled = !!i2311[0]
  i2310.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2311[1], i2310.x)
  i2310.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2311[2], i2310.y)
  i2310.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2311[3], i2310.z)
  i2310.separateAxes = !!i2311[4]
  i2310.range = new pc.Vec2( i2311[5], i2311[6] )
  return i2310
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2312 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2313 = data
  i2312.enabled = !!i2313[0]
  i2312.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2313[1], i2312.x)
  i2312.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2313[2], i2312.y)
  i2312.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2313[3], i2312.z)
  i2312.separateAxes = !!i2313[4]
  return i2312
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2314 = root || new pc.ParticleSystemShape()
  var i2315 = data
  i2314.enabled = !!i2315[0]
  i2314.shapeType = i2315[1]
  i2314.randomDirectionAmount = i2315[2]
  i2314.sphericalDirectionAmount = i2315[3]
  i2314.randomPositionAmount = i2315[4]
  i2314.alignToDirection = !!i2315[5]
  i2314.radius = i2315[6]
  i2314.radiusMode = i2315[7]
  i2314.radiusSpread = i2315[8]
  i2314.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2315[9], i2314.radiusSpeed)
  i2314.radiusThickness = i2315[10]
  i2314.angle = i2315[11]
  i2314.length = i2315[12]
  i2314.boxThickness = new pc.Vec3( i2315[13], i2315[14], i2315[15] )
  i2314.meshShapeType = i2315[16]
  request.r(i2315[17], i2315[18], 0, i2314, 'mesh')
  request.r(i2315[19], i2315[20], 0, i2314, 'meshRenderer')
  request.r(i2315[21], i2315[22], 0, i2314, 'skinnedMeshRenderer')
  i2314.useMeshMaterialIndex = !!i2315[23]
  i2314.meshMaterialIndex = i2315[24]
  i2314.useMeshColors = !!i2315[25]
  i2314.normalOffset = i2315[26]
  i2314.arc = i2315[27]
  i2314.arcMode = i2315[28]
  i2314.arcSpread = i2315[29]
  i2314.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2315[30], i2314.arcSpeed)
  i2314.donutRadius = i2315[31]
  i2314.position = new pc.Vec3( i2315[32], i2315[33], i2315[34] )
  i2314.rotation = new pc.Vec3( i2315[35], i2315[36], i2315[37] )
  i2314.scale = new pc.Vec3( i2315[38], i2315[39], i2315[40] )
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2316 = root || new pc.ParticleSystemSizeBySpeed()
  var i2317 = data
  i2316.enabled = !!i2317[0]
  i2316.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2317[1], i2316.x)
  i2316.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2317[2], i2316.y)
  i2316.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2317[3], i2316.z)
  i2316.separateAxes = !!i2317[4]
  i2316.range = new pc.Vec2( i2317[5], i2317[6] )
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2318 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2319 = data
  i2318.enabled = !!i2319[0]
  i2318.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2319[1], i2318.x)
  i2318.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2319[2], i2318.y)
  i2318.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2319[3], i2318.z)
  i2318.separateAxes = !!i2319[4]
  return i2318
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2320 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2321 = data
  i2320.enabled = !!i2321[0]
  i2320.mode = i2321[1]
  i2320.animation = i2321[2]
  i2320.numTilesX = i2321[3]
  i2320.numTilesY = i2321[4]
  i2320.useRandomRow = !!i2321[5]
  i2320.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2321[6], i2320.frameOverTime)
  i2320.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2321[7], i2320.startFrame)
  i2320.cycleCount = i2321[8]
  i2320.rowIndex = i2321[9]
  i2320.flipU = i2321[10]
  i2320.flipV = i2321[11]
  i2320.spriteCount = i2321[12]
  var i2323 = i2321[13]
  var i2322 = []
  for(var i = 0; i < i2323.length; i += 2) {
  request.r(i2323[i + 0], i2323[i + 1], 2, i2322, '')
  }
  i2320.sprites = i2322
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2326 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2327 = data
  i2326.enabled = !!i2327[0]
  i2326.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2327[1], i2326.x)
  i2326.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2327[2], i2326.y)
  i2326.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2327[3], i2326.z)
  i2326.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2327[4], i2326.radial)
  i2326.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2327[5], i2326.speedModifier)
  i2326.space = i2327[6]
  i2326.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2327[7], i2326.orbitalX)
  i2326.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2327[8], i2326.orbitalY)
  i2326.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2327[9], i2326.orbitalZ)
  i2326.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2327[10], i2326.orbitalOffsetX)
  i2326.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2327[11], i2326.orbitalOffsetY)
  i2326.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2327[12], i2326.orbitalOffsetZ)
  return i2326
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2328 = root || new pc.ParticleSystemNoise()
  var i2329 = data
  i2328.enabled = !!i2329[0]
  i2328.separateAxes = !!i2329[1]
  i2328.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2329[2], i2328.strengthX)
  i2328.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2329[3], i2328.strengthY)
  i2328.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2329[4], i2328.strengthZ)
  i2328.frequency = i2329[5]
  i2328.damping = !!i2329[6]
  i2328.octaveCount = i2329[7]
  i2328.octaveMultiplier = i2329[8]
  i2328.octaveScale = i2329[9]
  i2328.quality = i2329[10]
  i2328.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2329[11], i2328.scrollSpeed)
  i2328.scrollSpeedMultiplier = i2329[12]
  i2328.remapEnabled = !!i2329[13]
  i2328.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2329[14], i2328.remapX)
  i2328.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2329[15], i2328.remapY)
  i2328.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2329[16], i2328.remapZ)
  i2328.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2329[17], i2328.positionAmount)
  i2328.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2329[18], i2328.rotationAmount)
  i2328.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2329[19], i2328.sizeAmount)
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2330 = root || new pc.ParticleSystemInheritVelocity()
  var i2331 = data
  i2330.enabled = !!i2331[0]
  i2330.mode = i2331[1]
  i2330.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2331[2], i2330.curve)
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2332 = root || new pc.ParticleSystemForceOverLifetime()
  var i2333 = data
  i2332.enabled = !!i2333[0]
  i2332.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2333[1], i2332.x)
  i2332.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2333[2], i2332.y)
  i2332.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2333[3], i2332.z)
  i2332.space = i2333[4]
  i2332.randomized = !!i2333[5]
  return i2332
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2334 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2335 = data
  i2334.enabled = !!i2335[0]
  i2334.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2335[1], i2334.limit)
  i2334.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2335[2], i2334.limitX)
  i2334.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2335[3], i2334.limitY)
  i2334.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2335[4], i2334.limitZ)
  i2334.dampen = i2335[5]
  i2334.separateAxes = !!i2335[6]
  i2334.space = i2335[7]
  i2334.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2335[8], i2334.drag)
  i2334.multiplyDragByParticleSize = !!i2335[9]
  i2334.multiplyDragByParticleVelocity = !!i2335[10]
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2337 = data
  request.r(i2337[0], i2337[1], 0, i2336, 'mesh')
  i2336.meshCount = i2337[2]
  i2336.activeVertexStreamsCount = i2337[3]
  i2336.alignment = i2337[4]
  i2336.renderMode = i2337[5]
  i2336.sortMode = i2337[6]
  i2336.lengthScale = i2337[7]
  i2336.velocityScale = i2337[8]
  i2336.cameraVelocityScale = i2337[9]
  i2336.normalDirection = i2337[10]
  i2336.sortingFudge = i2337[11]
  i2336.minParticleSize = i2337[12]
  i2336.maxParticleSize = i2337[13]
  i2336.pivot = new pc.Vec3( i2337[14], i2337[15], i2337[16] )
  request.r(i2337[17], i2337[18], 0, i2336, 'trailMaterial')
  i2336.applyActiveColorSpace = !!i2337[19]
  i2336.enabled = !!i2337[20]
  request.r(i2337[21], i2337[22], 0, i2336, 'sharedMaterial')
  var i2339 = i2337[23]
  var i2338 = []
  for(var i = 0; i < i2339.length; i += 2) {
  request.r(i2339[i + 0], i2339[i + 1], 2, i2338, '')
  }
  i2336.sharedMaterials = i2338
  i2336.receiveShadows = !!i2337[24]
  i2336.shadowCastingMode = i2337[25]
  i2336.sortingLayerID = i2337[26]
  i2336.sortingOrder = i2337[27]
  i2336.lightmapIndex = i2337[28]
  i2336.lightmapSceneIndex = i2337[29]
  i2336.lightmapScaleOffset = new pc.Vec4( i2337[30], i2337[31], i2337[32], i2337[33] )
  i2336.lightProbeUsage = i2337[34]
  i2336.reflectionProbeUsage = i2337[35]
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2341 = data
  i2340.name = i2341[0]
  i2340.atlasId = i2341[1]
  i2340.mipmapCount = i2341[2]
  i2340.hdr = !!i2341[3]
  i2340.size = i2341[4]
  i2340.anisoLevel = i2341[5]
  i2340.filterMode = i2341[6]
  var i2343 = i2341[7]
  var i2342 = []
  for(var i = 0; i < i2343.length; i += 4) {
    i2342.push( UnityEngine.Rect.MinMaxRect(i2343[i + 0], i2343[i + 1], i2343[i + 2], i2343[i + 3]) );
  }
  i2340.rects = i2342
  i2340.wrapU = i2341[8]
  i2340.wrapV = i2341[9]
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2347 = data
  i2346.name = i2347[0]
  i2346.index = i2347[1]
  i2346.startup = !!i2347[2]
  return i2346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2349 = data
  i2348.aspect = i2349[0]
  i2348.orthographic = !!i2349[1]
  i2348.orthographicSize = i2349[2]
  i2348.backgroundColor = new pc.Color(i2349[3], i2349[4], i2349[5], i2349[6])
  i2348.nearClipPlane = i2349[7]
  i2348.farClipPlane = i2349[8]
  i2348.fieldOfView = i2349[9]
  i2348.depth = i2349[10]
  i2348.clearFlags = i2349[11]
  i2348.cullingMask = i2349[12]
  i2348.rect = i2349[13]
  request.r(i2349[14], i2349[15], 0, i2348, 'targetTexture')
  i2348.usePhysicalProperties = !!i2349[16]
  i2348.focalLength = i2349[17]
  i2348.sensorSize = new pc.Vec2( i2349[18], i2349[19] )
  i2348.lensShift = new pc.Vec2( i2349[20], i2349[21] )
  i2348.gateFit = i2349[22]
  i2348.commandBufferCount = i2349[23]
  i2348.cameraType = i2349[24]
  i2348.enabled = !!i2349[25]
  return i2348
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i2350 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i2351 = data
  i2350.m_RenderShadows = !!i2351[0]
  i2350.m_RequiresDepthTextureOption = i2351[1]
  i2350.m_RequiresOpaqueTextureOption = i2351[2]
  i2350.m_CameraType = i2351[3]
  var i2353 = i2351[4]
  var i2352 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i2353.length; i += 2) {
  request.r(i2353[i + 0], i2353[i + 1], 1, i2352, '')
  }
  i2350.m_Cameras = i2352
  i2350.m_RendererIndex = i2351[5]
  i2350.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2351[6] )
  request.r(i2351[7], i2351[8], 0, i2350, 'm_VolumeTrigger')
  i2350.m_VolumeFrameworkUpdateModeOption = i2351[9]
  i2350.m_RenderPostProcessing = !!i2351[10]
  i2350.m_Antialiasing = i2351[11]
  i2350.m_AntialiasingQuality = i2351[12]
  i2350.m_StopNaN = !!i2351[13]
  i2350.m_Dithering = !!i2351[14]
  i2350.m_ClearDepth = !!i2351[15]
  i2350.m_AllowXRRendering = !!i2351[16]
  i2350.m_AllowHDROutput = !!i2351[17]
  i2350.m_UseScreenCoordOverride = !!i2351[18]
  i2350.m_ScreenSizeOverride = new pc.Vec4( i2351[19], i2351[20], i2351[21], i2351[22] )
  i2350.m_ScreenCoordScaleBias = new pc.Vec4( i2351[23], i2351[24], i2351[25], i2351[26] )
  i2350.m_RequiresDepthTexture = !!i2351[27]
  i2350.m_RequiresColorTexture = !!i2351[28]
  i2350.m_Version = i2351[29]
  i2350.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i2351[30], i2350.m_TaaSettings)
  return i2350
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i2356 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i2357 = data
  i2356.m_Quality = i2357[0]
  i2356.m_FrameInfluence = i2357[1]
  i2356.m_JitterScale = i2357[2]
  i2356.m_MipBias = i2357[3]
  i2356.m_VarianceClampScale = i2357[4]
  i2356.m_ContrastAdaptiveSharpening = i2357[5]
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2359 = data
  i2358.type = i2359[0]
  i2358.color = new pc.Color(i2359[1], i2359[2], i2359[3], i2359[4])
  i2358.cullingMask = i2359[5]
  i2358.intensity = i2359[6]
  i2358.range = i2359[7]
  i2358.spotAngle = i2359[8]
  i2358.shadows = i2359[9]
  i2358.shadowNormalBias = i2359[10]
  i2358.shadowBias = i2359[11]
  i2358.shadowStrength = i2359[12]
  i2358.shadowResolution = i2359[13]
  i2358.lightmapBakeType = i2359[14]
  i2358.renderMode = i2359[15]
  request.r(i2359[16], i2359[17], 0, i2358, 'cookie')
  i2358.cookieSize = i2359[18]
  i2358.shadowNearPlane = i2359[19]
  i2358.occlusionMaskChannel = i2359[20]
  i2358.isBaked = !!i2359[21]
  i2358.mixedLightingMode = i2359[22]
  i2358.enabled = !!i2359[23]
  return i2358
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i2360 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i2361 = data
  i2360.m_Version = i2361[0]
  i2360.m_UsePipelineSettings = !!i2361[1]
  i2360.m_AdditionalLightsShadowResolutionTier = i2361[2]
  i2360.m_LightLayerMask = i2361[3]
  i2360.m_RenderingLayers = i2361[4]
  i2360.m_CustomShadowLayers = !!i2361[5]
  i2360.m_ShadowLayerMask = i2361[6]
  i2360.m_ShadowRenderingLayers = i2361[7]
  i2360.m_LightCookieSize = new pc.Vec2( i2361[8], i2361[9] )
  i2360.m_LightCookieOffset = new pc.Vec2( i2361[10], i2361[11] )
  i2360.m_SoftShadowQuality = i2361[12]
  return i2360
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i2362 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i2363 = data
  i2362.priority = i2363[0]
  i2362.blendDistance = i2363[1]
  i2362.weight = i2363[2]
  request.r(i2363[3], i2363[4], 0, i2362, 'sharedProfile')
  i2362.m_IsGlobal = !!i2363[5]
  return i2362
}

Deserializers["Main"] = function (request, data, root) {
  var i2364 = root || request.c( 'Main' )
  var i2365 = data
  request.r(i2365[0], i2365[1], 0, i2364, 'hexCellPrefab')
  request.r(i2365[2], i2365[3], 0, i2364, 'hexPiecePrefab')
  request.r(i2365[4], i2365[5], 0, i2364, 'hexColorConfig')
  request.r(i2365[6], i2365[7], 0, i2364, 'gameCamera')
  i2364.boardRadius = i2365[8]
  i2364.boardPosition = new pc.Vec3( i2365[9], i2365[10], i2365[11] )
  i2364.trayPosition = new pc.Vec3( i2365[12], i2365[13], i2365[14] )
  i2364.tutorialTargetCell = new pc.Vec2( i2365[15], i2365[16] )
  var i2367 = i2365[17]
  var i2366 = new (System.Collections.Generic.List$1(Bridge.ns('_Game.Configs.LevelConfig+BoardStackDefinition')))
  for(var i = 0; i < i2367.length; i += 1) {
    i2366.add(request.d('_Game.Configs.LevelConfig+BoardStackDefinition', i2367[i + 0]));
  }
  i2364.startingBoardStacks = i2366
  var i2369 = i2365[18]
  var i2368 = new (System.Collections.Generic.List$1(Bridge.ns('_Game.Configs.LevelConfig+StackDefinition')))
  for(var i = 0; i < i2369.length; i += 1) {
    i2368.add(request.d('_Game.Configs.LevelConfig+StackDefinition', i2369[i + 0]));
  }
  i2364.trayStacks = i2368
  i2364.configureCameraOnStart = !!i2365[19]
  i2364.cameraPosition = new pc.Vec3( i2365[20], i2365[21], i2365[22] )
  i2364.cameraEulerAngles = new pc.Vec3( i2365[23], i2365[24], i2365[25] )
  i2364.orthographicSize = i2365[26]
  i2364.cellHighlight = request.d('_Game.Board.HexCellHighlightSettings', i2365[27], i2364.cellHighlight)
  return i2364
}

Deserializers["_Game.Configs.LevelConfig+BoardStackDefinition"] = function (request, data, root) {
  var i2372 = root || request.c( '_Game.Configs.LevelConfig+BoardStackDefinition' )
  var i2373 = data
  i2372.coordinate = new pc.Vec2( i2373[0], i2373[1] )
  i2372.stack = request.d('_Game.Configs.LevelConfig+StackDefinition', i2373[2], i2372.stack)
  return i2372
}

Deserializers["_Game.Configs.LevelConfig+StackDefinition"] = function (request, data, root) {
  var i2374 = root || request.c( '_Game.Configs.LevelConfig+StackDefinition' )
  var i2375 = data
  var i2377 = i2375[0]
  var i2376 = new (System.Collections.Generic.List$1(Bridge.ns('_Game.Stacks.HexColor')))
  for(var i = 0; i < i2377.length; i += 1) {
    i2376.add(i2377[i + 0]);
  }
  i2374.colorsBottomToTop = i2376
  return i2374
}

Deserializers["_Game.Board.HexCellHighlightSettings"] = function (request, data, root) {
  var i2382 = root || request.c( '_Game.Board.HexCellHighlightSettings' )
  var i2383 = data
  i2382.useMaterialTint = !!i2383[0]
  i2382.useOutline = !!i2383[1]
  i2382.validColor = new pc.Color(i2383[2], i2383[3], i2383[4], i2383[5])
  request.r(i2383[6], i2383[7], 0, i2382, 'outlineMaterial')
  i2382.outlineLineWidth = i2383[8]
  i2382.outlineVerticalOffset = i2383[9]
  i2382.outlineRadiusMultiplier = i2383[10]
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2385 = data
  i2384.pivot = new pc.Vec2( i2385[0], i2385[1] )
  i2384.anchorMin = new pc.Vec2( i2385[2], i2385[3] )
  i2384.anchorMax = new pc.Vec2( i2385[4], i2385[5] )
  i2384.sizeDelta = new pc.Vec2( i2385[6], i2385[7] )
  i2384.anchoredPosition3D = new pc.Vec3( i2385[8], i2385[9], i2385[10] )
  i2384.rotation = new pc.Quat(i2385[11], i2385[12], i2385[13], i2385[14])
  i2384.scale = new pc.Vec3( i2385[15], i2385[16], i2385[17] )
  return i2384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2387 = data
  i2386.planeDistance = i2387[0]
  i2386.referencePixelsPerUnit = i2387[1]
  i2386.isFallbackOverlay = !!i2387[2]
  i2386.renderMode = i2387[3]
  i2386.renderOrder = i2387[4]
  i2386.sortingLayerName = i2387[5]
  i2386.sortingOrder = i2387[6]
  i2386.scaleFactor = i2387[7]
  request.r(i2387[8], i2387[9], 0, i2386, 'worldCamera')
  i2386.overrideSorting = !!i2387[10]
  i2386.pixelPerfect = !!i2387[11]
  i2386.targetDisplay = i2387[12]
  i2386.overridePixelPerfect = !!i2387[13]
  i2386.enabled = !!i2387[14]
  return i2386
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2388 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2389 = data
  i2388.m_UiScaleMode = i2389[0]
  i2388.m_ReferencePixelsPerUnit = i2389[1]
  i2388.m_ScaleFactor = i2389[2]
  i2388.m_ReferenceResolution = new pc.Vec2( i2389[3], i2389[4] )
  i2388.m_ScreenMatchMode = i2389[5]
  i2388.m_MatchWidthOrHeight = i2389[6]
  i2388.m_PhysicalUnit = i2389[7]
  i2388.m_FallbackScreenDPI = i2389[8]
  i2388.m_DefaultSpriteDPI = i2389[9]
  i2388.m_DynamicPixelsPerUnit = i2389[10]
  i2388.m_PresetInfoIsWorld = !!i2389[11]
  return i2388
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2390 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2391 = data
  i2390.m_IgnoreReversedGraphics = !!i2391[0]
  i2390.m_BlockingObjects = i2391[1]
  i2390.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2391[2] )
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2393 = data
  i2392.m_Alpha = i2393[0]
  i2392.m_Interactable = !!i2393[1]
  i2392.m_BlocksRaycasts = !!i2393[2]
  i2392.m_IgnoreParentGroups = !!i2393[3]
  i2392.enabled = !!i2393[4]
  return i2392
}

Deserializers["_Game.Packshot.PackshotController"] = function (request, data, root) {
  var i2394 = root || request.c( '_Game.Packshot.PackshotController' )
  var i2395 = data
  request.r(i2395[0], i2395[1], 0, i2394, 'canvasGroup')
  request.r(i2395[2], i2395[3], 0, i2394, 'ctaButton')
  i2394.fadeDuration = i2395[4]
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2397 = data
  i2396.cullTransparentMesh = !!i2397[0]
  return i2396
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2398 = root || request.c( 'UnityEngine.UI.Image' )
  var i2399 = data
  request.r(i2399[0], i2399[1], 0, i2398, 'm_Sprite')
  i2398.m_Type = i2399[2]
  i2398.m_PreserveAspect = !!i2399[3]
  i2398.m_FillCenter = !!i2399[4]
  i2398.m_FillMethod = i2399[5]
  i2398.m_FillAmount = i2399[6]
  i2398.m_FillClockwise = !!i2399[7]
  i2398.m_FillOrigin = i2399[8]
  i2398.m_UseSpriteMesh = !!i2399[9]
  i2398.m_PixelsPerUnitMultiplier = i2399[10]
  request.r(i2399[11], i2399[12], 0, i2398, 'm_Material')
  i2398.m_Maskable = !!i2399[13]
  i2398.m_Color = new pc.Color(i2399[14], i2399[15], i2399[16], i2399[17])
  i2398.m_RaycastTarget = !!i2399[18]
  i2398.m_RaycastPadding = new pc.Vec4( i2399[19], i2399[20], i2399[21], i2399[22] )
  return i2398
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2400 = root || request.c( 'UnityEngine.UI.Button' )
  var i2401 = data
  i2400.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2401[0], i2400.m_OnClick)
  i2400.m_Navigation = request.d('UnityEngine.UI.Navigation', i2401[1], i2400.m_Navigation)
  i2400.m_Transition = i2401[2]
  i2400.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2401[3], i2400.m_Colors)
  i2400.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2401[4], i2400.m_SpriteState)
  i2400.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2401[5], i2400.m_AnimationTriggers)
  i2400.m_Interactable = !!i2401[6]
  request.r(i2401[7], i2401[8], 0, i2400, 'm_TargetGraphic')
  return i2400
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2402 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2403 = data
  i2402.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2403[0], i2402.m_PersistentCalls)
  return i2402
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2404 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2405 = data
  var i2407 = i2405[0]
  var i2406 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2407.length; i += 1) {
    i2406.add(request.d('UnityEngine.Events.PersistentCall', i2407[i + 0]));
  }
  i2404.m_Calls = i2406
  return i2404
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2410 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2411 = data
  request.r(i2411[0], i2411[1], 0, i2410, 'm_Target')
  i2410.m_TargetAssemblyTypeName = i2411[2]
  i2410.m_MethodName = i2411[3]
  i2410.m_Mode = i2411[4]
  i2410.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2411[5], i2410.m_Arguments)
  i2410.m_CallState = i2411[6]
  return i2410
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2412 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2413 = data
  i2412.m_Mode = i2413[0]
  i2412.m_WrapAround = !!i2413[1]
  request.r(i2413[2], i2413[3], 0, i2412, 'm_SelectOnUp')
  request.r(i2413[4], i2413[5], 0, i2412, 'm_SelectOnDown')
  request.r(i2413[6], i2413[7], 0, i2412, 'm_SelectOnLeft')
  request.r(i2413[8], i2413[9], 0, i2412, 'm_SelectOnRight')
  return i2412
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2414 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2415 = data
  i2414.m_NormalColor = new pc.Color(i2415[0], i2415[1], i2415[2], i2415[3])
  i2414.m_HighlightedColor = new pc.Color(i2415[4], i2415[5], i2415[6], i2415[7])
  i2414.m_PressedColor = new pc.Color(i2415[8], i2415[9], i2415[10], i2415[11])
  i2414.m_SelectedColor = new pc.Color(i2415[12], i2415[13], i2415[14], i2415[15])
  i2414.m_DisabledColor = new pc.Color(i2415[16], i2415[17], i2415[18], i2415[19])
  i2414.m_ColorMultiplier = i2415[20]
  i2414.m_FadeDuration = i2415[21]
  return i2414
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2416 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2417 = data
  request.r(i2417[0], i2417[1], 0, i2416, 'm_HighlightedSprite')
  request.r(i2417[2], i2417[3], 0, i2416, 'm_PressedSprite')
  request.r(i2417[4], i2417[5], 0, i2416, 'm_SelectedSprite')
  request.r(i2417[6], i2417[7], 0, i2416, 'm_DisabledSprite')
  return i2416
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2418 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2419 = data
  i2418.m_NormalTrigger = i2419[0]
  i2418.m_HighlightedTrigger = i2419[1]
  i2418.m_PressedTrigger = i2419[2]
  i2418.m_SelectedTrigger = i2419[3]
  i2418.m_DisabledTrigger = i2419[4]
  return i2418
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i2420 = root || request.c( 'UnityEngine.UI.Outline' )
  var i2421 = data
  i2420.m_EffectColor = new pc.Color(i2421[0], i2421[1], i2421[2], i2421[3])
  i2420.m_EffectDistance = new pc.Vec2( i2421[4], i2421[5] )
  i2420.m_UseGraphicAlpha = !!i2421[6]
  return i2420
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2422 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2423 = data
  i2422.m_hasFontAssetChanged = !!i2423[0]
  request.r(i2423[1], i2423[2], 0, i2422, 'm_baseMaterial')
  i2422.m_maskOffset = new pc.Vec4( i2423[3], i2423[4], i2423[5], i2423[6] )
  i2422.m_text = i2423[7]
  i2422.m_isRightToLeft = !!i2423[8]
  request.r(i2423[9], i2423[10], 0, i2422, 'm_fontAsset')
  request.r(i2423[11], i2423[12], 0, i2422, 'm_sharedMaterial')
  var i2425 = i2423[13]
  var i2424 = []
  for(var i = 0; i < i2425.length; i += 2) {
  request.r(i2425[i + 0], i2425[i + 1], 2, i2424, '')
  }
  i2422.m_fontSharedMaterials = i2424
  request.r(i2423[14], i2423[15], 0, i2422, 'm_fontMaterial')
  var i2427 = i2423[16]
  var i2426 = []
  for(var i = 0; i < i2427.length; i += 2) {
  request.r(i2427[i + 0], i2427[i + 1], 2, i2426, '')
  }
  i2422.m_fontMaterials = i2426
  i2422.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2423[17], i2423[18], i2423[19], i2423[20])
  i2422.m_fontColor = new pc.Color(i2423[21], i2423[22], i2423[23], i2423[24])
  i2422.m_enableVertexGradient = !!i2423[25]
  i2422.m_colorMode = i2423[26]
  i2422.m_fontColorGradient = request.d('TMPro.VertexGradient', i2423[27], i2422.m_fontColorGradient)
  request.r(i2423[28], i2423[29], 0, i2422, 'm_fontColorGradientPreset')
  request.r(i2423[30], i2423[31], 0, i2422, 'm_spriteAsset')
  i2422.m_tintAllSprites = !!i2423[32]
  request.r(i2423[33], i2423[34], 0, i2422, 'm_StyleSheet')
  i2422.m_TextStyleHashCode = i2423[35]
  i2422.m_overrideHtmlColors = !!i2423[36]
  i2422.m_faceColor = UnityEngine.Color32.ConstructColor(i2423[37], i2423[38], i2423[39], i2423[40])
  i2422.m_fontSize = i2423[41]
  i2422.m_fontSizeBase = i2423[42]
  i2422.m_fontWeight = i2423[43]
  i2422.m_enableAutoSizing = !!i2423[44]
  i2422.m_fontSizeMin = i2423[45]
  i2422.m_fontSizeMax = i2423[46]
  i2422.m_fontStyle = i2423[47]
  i2422.m_HorizontalAlignment = i2423[48]
  i2422.m_VerticalAlignment = i2423[49]
  i2422.m_textAlignment = i2423[50]
  i2422.m_characterSpacing = i2423[51]
  i2422.m_wordSpacing = i2423[52]
  i2422.m_lineSpacing = i2423[53]
  i2422.m_lineSpacingMax = i2423[54]
  i2422.m_paragraphSpacing = i2423[55]
  i2422.m_charWidthMaxAdj = i2423[56]
  i2422.m_enableWordWrapping = !!i2423[57]
  i2422.m_wordWrappingRatios = i2423[58]
  i2422.m_overflowMode = i2423[59]
  request.r(i2423[60], i2423[61], 0, i2422, 'm_linkedTextComponent')
  request.r(i2423[62], i2423[63], 0, i2422, 'parentLinkedComponent')
  i2422.m_enableKerning = !!i2423[64]
  i2422.m_enableExtraPadding = !!i2423[65]
  i2422.checkPaddingRequired = !!i2423[66]
  i2422.m_isRichText = !!i2423[67]
  i2422.m_parseCtrlCharacters = !!i2423[68]
  i2422.m_isOrthographic = !!i2423[69]
  i2422.m_isCullingEnabled = !!i2423[70]
  i2422.m_horizontalMapping = i2423[71]
  i2422.m_verticalMapping = i2423[72]
  i2422.m_uvLineOffset = i2423[73]
  i2422.m_geometrySortingOrder = i2423[74]
  i2422.m_IsTextObjectScaleStatic = !!i2423[75]
  i2422.m_VertexBufferAutoSizeReduction = !!i2423[76]
  i2422.m_useMaxVisibleDescender = !!i2423[77]
  i2422.m_pageToDisplay = i2423[78]
  i2422.m_margin = new pc.Vec4( i2423[79], i2423[80], i2423[81], i2423[82] )
  i2422.m_isUsingLegacyAnimationComponent = !!i2423[83]
  i2422.m_isVolumetricText = !!i2423[84]
  request.r(i2423[85], i2423[86], 0, i2422, 'm_Material')
  i2422.m_Maskable = !!i2423[87]
  i2422.m_Color = new pc.Color(i2423[88], i2423[89], i2423[90], i2423[91])
  i2422.m_RaycastTarget = !!i2423[92]
  i2422.m_RaycastPadding = new pc.Vec4( i2423[93], i2423[94], i2423[95], i2423[96] )
  return i2422
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2428 = root || request.c( 'TMPro.VertexGradient' )
  var i2429 = data
  i2428.topLeft = new pc.Color(i2429[0], i2429[1], i2429[2], i2429[3])
  i2428.topRight = new pc.Color(i2429[4], i2429[5], i2429[6], i2429[7])
  i2428.bottomLeft = new pc.Color(i2429[8], i2429[9], i2429[10], i2429[11])
  i2428.bottomRight = new pc.Color(i2429[12], i2429[13], i2429[14], i2429[15])
  return i2428
}

Deserializers["_Game.Audio.SoundPlayer"] = function (request, data, root) {
  var i2430 = root || request.c( '_Game.Audio.SoundPlayer' )
  var i2431 = data
  request.r(i2431[0], i2431[1], 0, i2430, 'stackPickupClip')
  request.r(i2431[2], i2431[3], 0, i2430, 'stackDropClip')
  request.r(i2431[4], i2431[5], 0, i2430, 'elementFlyToStackClip')
  request.r(i2431[6], i2431[7], 0, i2430, 'elementDisappearClip')
  request.r(i2431[8], i2431[9], 0, i2430, 'allElementsDisappearCompleteClip')
  i2430.masterVolume = i2431[10]
  i2430.stackPickupVolume = i2431[11]
  i2430.stackDropVolume = i2431[12]
  i2430.elementFlyToStackVolume = i2431[13]
  i2430.elementDisappearVolume = i2431[14]
  i2430.allElementsDisappearCompleteVolume = i2431[15]
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2433 = data
  request.r(i2433[0], i2433[1], 0, i2432, 'clip')
  request.r(i2433[2], i2433[3], 0, i2432, 'outputAudioMixerGroup')
  i2432.playOnAwake = !!i2433[4]
  i2432.loop = !!i2433[5]
  i2432.time = i2433[6]
  i2432.volume = i2433[7]
  i2432.pitch = i2433[8]
  i2432.enabled = !!i2433[9]
  return i2432
}

Deserializers["_Game.Board.BoardController"] = function (request, data, root) {
  var i2434 = root || request.c( '_Game.Board.BoardController' )
  var i2435 = data
  i2434.pointerCellRadius = i2435[0]
  return i2434
}

Deserializers["_Game.Board.HexGridGenerator"] = function (request, data, root) {
  var i2436 = root || request.c( '_Game.Board.HexGridGenerator' )
  var i2437 = data
  i2436.radius = i2437[0]
  i2436.cellSize = i2437[1]
  i2436.boardShape = i2437[2]
  i2436.customBaseShape = i2437[3]
  i2436.orientation = i2437[4]
  var i2439 = i2437[5]
  var i2438 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2Int')))
  for(var i = 0; i < i2439.length; i += 2) {
    i2438.add(new pc.Vec2( i2439[i + 0], i2439[i + 1] ));
  }
  i2436.customCoordinates = i2438
  return i2436
}

Deserializers["_Game.Board.BoardOutline"] = function (request, data, root) {
  var i2442 = root || request.c( '_Game.Board.BoardOutline' )
  var i2443 = data
  i2442.renderMode = i2443[0]
  request.r(i2443[1], i2443[2], 0, i2442, 'linePrefab')
  request.r(i2443[3], i2443[4], 0, i2442, 'lineParent')
  i2442.lineWidth = i2443[5]
  i2442.verticalOffset = i2443[6]
  i2442.borderColor = new pc.Color(i2443[7], i2443[8], i2443[9], i2443[10])
  i2442.useGlow = !!i2443[11]
  i2442.glowWidthMultiplier = i2443[12]
  request.r(i2443[13], i2443[14], 0, i2442, 'meshMaterial')
  i2442.meshScaleMultiplier = i2443[15]
  i2442.meshVerticalOffset = i2443[16]
  i2442.meshHeight = i2443[17]
  i2442.meshBevelSize = i2443[18]
  i2442.meshSmoothNormals = !!i2443[19]
  return i2442
}

Deserializers["_Game.Stacks.StackTrayController"] = function (request, data, root) {
  var i2444 = root || request.c( '_Game.Stacks.StackTrayController' )
  var i2445 = data
  i2444.spacing = i2445[0]
  i2444.hitRadius = i2445[1]
  return i2444
}

Deserializers["_Game.Drag.DragController"] = function (request, data, root) {
  var i2446 = root || request.c( '_Game.Drag.DragController' )
  var i2447 = data
  i2446.returnDuration = i2447[0]
  i2446.dragHeight = i2447[1]
  return i2446
}

Deserializers["_Game.Merge.MergeAnimator"] = function (request, data, root) {
  var i2448 = root || request.c( '_Game.Merge.MergeAnimator' )
  var i2449 = data
  i2448.baseMoveDuration = i2449[0]
  i2448.baseDisappearDuration = i2449[1]
  i2448.speedIncreasePerStep = i2449[2]
  i2448.maxSpeedMultiplier = i2449[3]
  i2448.jumpPower = i2449[4]
  i2448.pieceStagger = i2449[5]
  i2448.flipDegrees = i2449[6]
  i2448.landingTiltDegrees = i2449[7]
  i2448.disappearStepDelay = i2449[8]
  request.r(i2449[9], i2449[10], 0, i2448, 'disappearEffectPrefab')
  request.r(i2449[11], i2449[12], 0, i2448, 'effectParent')
  i2448.disappearEffectLifetime = i2449[13]
  return i2448
}

Deserializers["_Game.Merge.MergeSystem"] = function (request, data, root) {
  var i2450 = root || request.c( '_Game.Merge.MergeSystem' )
  var i2451 = data
  i2450.clearMatchCount = i2451[0]
  i2450.maxChainSteps = i2451[1]
  i2450.debugMergeLogs = !!i2451[2]
  return i2450
}

Deserializers["_Game.Tutorial.TutorialHandController"] = function (request, data, root) {
  var i2452 = root || request.c( '_Game.Tutorial.TutorialHandController' )
  var i2453 = data
  i2452.inactivityDelayBeforeTutorialRestart = i2453[0]
  i2452.handMoveDuration = i2453[1]
  i2452.handSize = new pc.Vec2( i2453[2], i2453[3] )
  i2452.screenOffset = new pc.Vec2( i2453[4], i2453[5] )
  request.r(i2453[6], i2453[7], 0, i2452, 'canvas')
  request.r(i2453[8], i2453[9], 0, i2452, 'handImage')
  return i2452
}

Deserializers["_Game.Flow.LevelFlowController"] = function (request, data, root) {
  var i2454 = root || request.c( '_Game.Flow.LevelFlowController' )
  var i2455 = data
  return i2454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2457 = data
  i2456.ambientIntensity = i2457[0]
  i2456.reflectionIntensity = i2457[1]
  i2456.ambientMode = i2457[2]
  i2456.ambientLight = new pc.Color(i2457[3], i2457[4], i2457[5], i2457[6])
  i2456.ambientSkyColor = new pc.Color(i2457[7], i2457[8], i2457[9], i2457[10])
  i2456.ambientGroundColor = new pc.Color(i2457[11], i2457[12], i2457[13], i2457[14])
  i2456.ambientEquatorColor = new pc.Color(i2457[15], i2457[16], i2457[17], i2457[18])
  i2456.fogColor = new pc.Color(i2457[19], i2457[20], i2457[21], i2457[22])
  i2456.fogEndDistance = i2457[23]
  i2456.fogStartDistance = i2457[24]
  i2456.fogDensity = i2457[25]
  i2456.fog = !!i2457[26]
  request.r(i2457[27], i2457[28], 0, i2456, 'skybox')
  i2456.fogMode = i2457[29]
  var i2459 = i2457[30]
  var i2458 = []
  for(var i = 0; i < i2459.length; i += 1) {
    i2458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2459[i + 0]) );
  }
  i2456.lightmaps = i2458
  i2456.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2457[31], i2456.lightProbes)
  i2456.lightmapsMode = i2457[32]
  i2456.mixedBakeMode = i2457[33]
  i2456.environmentLightingMode = i2457[34]
  i2456.ambientProbe = new pc.SphericalHarmonicsL2(i2457[35])
  request.r(i2457[36], i2457[37], 0, i2456, 'customReflection')
  request.r(i2457[38], i2457[39], 0, i2456, 'defaultReflection')
  i2456.defaultReflectionMode = i2457[40]
  i2456.defaultReflectionResolution = i2457[41]
  i2456.sunLightObjectId = i2457[42]
  i2456.pixelLightCount = i2457[43]
  i2456.defaultReflectionHDR = !!i2457[44]
  i2456.hasLightDataAsset = !!i2457[45]
  i2456.hasManualGenerate = !!i2457[46]
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2463 = data
  request.r(i2463[0], i2463[1], 0, i2462, 'lightmapColor')
  request.r(i2463[2], i2463[3], 0, i2462, 'lightmapDirection')
  request.r(i2463[4], i2463[5], 0, i2462, 'shadowMask')
  return i2462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2464 = root || new UnityEngine.LightProbes()
  var i2465 = data
  return i2464
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i2472 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i2473 = data
  request.r(i2473[0], i2473[1], 0, i2472, 'panelPrefab')
  var i2475 = i2473[2]
  var i2474 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i2475.length; i += 1) {
    i2474.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i2475[i + 0]));
  }
  i2472.prefabs = i2474
  return i2472
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i2478 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i2479 = data
  i2478.type = i2479[0]
  request.r(i2479[1], i2479[2], 0, i2478, 'prefab')
  return i2478
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i2480 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i2481 = data
  i2480.m_Spacing = i2481[0]
  i2480.m_ChildForceExpandWidth = !!i2481[1]
  i2480.m_ChildForceExpandHeight = !!i2481[2]
  i2480.m_ChildControlWidth = !!i2481[3]
  i2480.m_ChildControlHeight = !!i2481[4]
  i2480.m_ChildScaleWidth = !!i2481[5]
  i2480.m_ChildScaleHeight = !!i2481[6]
  i2480.m_ReverseArrangement = !!i2481[7]
  i2480.m_Padding = UnityEngine.RectOffset.FromPaddings(i2481[8], i2481[9], i2481[10], i2481[11])
  i2480.m_ChildAlignment = i2481[12]
  return i2480
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i2482 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i2483 = data
  i2482.m_HorizontalFit = i2483[0]
  i2482.m_VerticalFit = i2483[1]
  return i2482
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i2484 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i2485 = data
  request.r(i2485[0], i2485[1], 0, i2484, 'contentHolder')
  return i2484
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i2486 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i2487 = data
  request.r(i2487[0], i2487[1], 0, i2486, 'nameLabel')
  request.r(i2487[2], i2487[3], 0, i2486, 'scrollRect')
  request.r(i2487[4], i2487[5], 0, i2486, 'viewport')
  request.r(i2487[6], i2487[7], 0, i2486, 'Canvas')
  return i2486
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i2488 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i2489 = data
  i2488.m_IgnoreLayout = !!i2489[0]
  i2488.m_MinWidth = i2489[1]
  i2488.m_MinHeight = i2489[2]
  i2488.m_PreferredWidth = i2489[3]
  i2488.m_PreferredHeight = i2489[4]
  i2488.m_FlexibleWidth = i2489[5]
  i2488.m_FlexibleHeight = i2489[6]
  i2488.m_LayoutPriority = i2489[7]
  return i2488
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2490 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2491 = data
  request.r(i2491[0], i2491[1], 0, i2490, 'm_ObjectArgument')
  i2490.m_ObjectArgumentAssemblyTypeName = i2491[2]
  i2490.m_IntArgument = i2491[3]
  i2490.m_FloatArgument = i2491[4]
  i2490.m_StringArgument = i2491[5]
  i2490.m_BoolArgument = !!i2491[6]
  return i2490
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2492 = root || request.c( 'UnityEngine.UI.Text' )
  var i2493 = data
  i2492.m_FontData = request.d('UnityEngine.UI.FontData', i2493[0], i2492.m_FontData)
  i2492.m_Text = i2493[1]
  request.r(i2493[2], i2493[3], 0, i2492, 'm_Material')
  i2492.m_Maskable = !!i2493[4]
  i2492.m_Color = new pc.Color(i2493[5], i2493[6], i2493[7], i2493[8])
  i2492.m_RaycastTarget = !!i2493[9]
  i2492.m_RaycastPadding = new pc.Vec4( i2493[10], i2493[11], i2493[12], i2493[13] )
  return i2492
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2494 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2495 = data
  request.r(i2495[0], i2495[1], 0, i2494, 'm_Font')
  i2494.m_FontSize = i2495[2]
  i2494.m_FontStyle = i2495[3]
  i2494.m_BestFit = !!i2495[4]
  i2494.m_MinSize = i2495[5]
  i2494.m_MaxSize = i2495[6]
  i2494.m_Alignment = i2495[7]
  i2494.m_AlignByGeometry = !!i2495[8]
  i2494.m_RichText = !!i2495[9]
  i2494.m_HorizontalOverflow = i2495[10]
  i2494.m_VerticalOverflow = i2495[11]
  i2494.m_LineSpacing = i2495[12]
  return i2494
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i2496 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i2497 = data
  request.r(i2497[0], i2497[1], 0, i2496, 'm_Content')
  i2496.m_Horizontal = !!i2497[2]
  i2496.m_Vertical = !!i2497[3]
  i2496.m_MovementType = i2497[4]
  i2496.m_Elasticity = i2497[5]
  i2496.m_Inertia = !!i2497[6]
  i2496.m_DecelerationRate = i2497[7]
  i2496.m_ScrollSensitivity = i2497[8]
  request.r(i2497[9], i2497[10], 0, i2496, 'm_Viewport')
  request.r(i2497[11], i2497[12], 0, i2496, 'm_HorizontalScrollbar')
  request.r(i2497[13], i2497[14], 0, i2496, 'm_VerticalScrollbar')
  i2496.m_HorizontalScrollbarVisibility = i2497[15]
  i2496.m_VerticalScrollbarVisibility = i2497[16]
  i2496.m_HorizontalScrollbarSpacing = i2497[17]
  i2496.m_VerticalScrollbarSpacing = i2497[18]
  i2496.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i2497[19], i2496.m_OnValueChanged)
  return i2496
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i2498 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i2499 = data
  i2498.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2499[0], i2498.m_PersistentCalls)
  return i2498
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2500 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2501 = data
  i2500.m_ShowMaskGraphic = !!i2501[0]
  return i2500
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i2502 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i2503 = data
  request.r(i2503[0], i2503[1], 0, i2502, 'm_HandleRect')
  i2502.m_Direction = i2503[2]
  i2502.m_Value = i2503[3]
  i2502.m_Size = i2503[4]
  i2502.m_NumberOfSteps = i2503[5]
  i2502.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i2503[6], i2502.m_OnValueChanged)
  i2502.m_Navigation = request.d('UnityEngine.UI.Navigation', i2503[7], i2502.m_Navigation)
  i2502.m_Transition = i2503[8]
  i2502.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2503[9], i2502.m_Colors)
  i2502.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2503[10], i2502.m_SpriteState)
  i2502.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2503[11], i2502.m_AnimationTriggers)
  i2502.m_Interactable = !!i2503[12]
  request.r(i2503[13], i2503[14], 0, i2502, 'm_TargetGraphic')
  return i2502
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i2504 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i2505 = data
  i2504.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2505[0], i2504.m_PersistentCalls)
  return i2504
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i2506 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i2507 = data
  var i2509 = i2507[0]
  var i2508 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i2509[i + 0]));
  }
  i2506.m_Delegates = i2508
  return i2506
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i2512 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i2513 = data
  i2512.eventID = i2513[0]
  i2512.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i2513[1], i2512.callback)
  return i2512
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i2514 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i2515 = data
  i2514.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2515[0], i2514.m_PersistentCalls)
  return i2514
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i2516 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i2517 = data
  request.r(i2517[0], i2517[1], 0, i2516, 'nameLabel')
  request.r(i2517[2], i2517[3], 0, i2516, 'valueLabel')
  i2516.colorDefault = new pc.Color(i2517[4], i2517[5], i2517[6], i2517[7])
  i2516.colorSelected = new pc.Color(i2517[8], i2517[9], i2517[10], i2517[11])
  return i2516
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i2518 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i2519 = data
  request.r(i2519[0], i2519[1], 0, i2518, 'nameLabel')
  request.r(i2519[2], i2519[3], 0, i2518, 'valueToggle')
  request.r(i2519[4], i2519[5], 0, i2518, 'checkmarkImage')
  i2518.colorDefault = new pc.Color(i2519[6], i2519[7], i2519[8], i2519[9])
  i2518.colorSelected = new pc.Color(i2519[10], i2519[11], i2519[12], i2519[13])
  return i2518
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i2520 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i2521 = data
  i2520.toggleTransition = i2521[0]
  request.r(i2521[1], i2521[2], 0, i2520, 'graphic')
  i2520.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i2521[3], i2520.onValueChanged)
  request.r(i2521[4], i2521[5], 0, i2520, 'm_Group')
  i2520.m_IsOn = !!i2521[6]
  i2520.m_Navigation = request.d('UnityEngine.UI.Navigation', i2521[7], i2520.m_Navigation)
  i2520.m_Transition = i2521[8]
  i2520.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2521[9], i2520.m_Colors)
  i2520.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2521[10], i2520.m_SpriteState)
  i2520.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2521[11], i2520.m_AnimationTriggers)
  i2520.m_Interactable = !!i2521[12]
  request.r(i2521[13], i2521[14], 0, i2520, 'm_TargetGraphic')
  return i2520
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i2522 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i2523 = data
  i2522.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2523[0], i2522.m_PersistentCalls)
  return i2522
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i2524 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i2525 = data
  request.r(i2525[0], i2525[1], 0, i2524, 'nameLabel')
  request.r(i2525[2], i2525[3], 0, i2524, 'valueLabel')
  i2524.colorDefault = new pc.Color(i2525[4], i2525[5], i2525[6], i2525[7])
  i2524.colorSelected = new pc.Color(i2525[8], i2525[9], i2525[10], i2525[11])
  return i2524
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i2526 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i2527 = data
  request.r(i2527[0], i2527[1], 0, i2526, 'nameLabel')
  request.r(i2527[2], i2527[3], 0, i2526, 'valueLabel')
  i2526.colorDefault = new pc.Color(i2527[4], i2527[5], i2527[6], i2527[7])
  i2526.colorSelected = new pc.Color(i2527[8], i2527[9], i2527[10], i2527[11])
  return i2526
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i2528 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i2529 = data
  request.r(i2529[0], i2529[1], 0, i2528, 'nameLabel')
  request.r(i2529[2], i2529[3], 0, i2528, 'valueLabel')
  i2528.colorDefault = new pc.Color(i2529[4], i2529[5], i2529[6], i2529[7])
  i2528.colorSelected = new pc.Color(i2529[8], i2529[9], i2529[10], i2529[11])
  return i2528
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i2530 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i2531 = data
  request.r(i2531[0], i2531[1], 0, i2530, 'nextButtonText')
  request.r(i2531[2], i2531[3], 0, i2530, 'previousButtonText')
  request.r(i2531[4], i2531[5], 0, i2530, 'nameLabel')
  request.r(i2531[6], i2531[7], 0, i2530, 'valueLabel')
  i2530.colorDefault = new pc.Color(i2531[8], i2531[9], i2531[10], i2531[11])
  i2530.colorSelected = new pc.Color(i2531[12], i2531[13], i2531[14], i2531[15])
  return i2530
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i2532 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i2533 = data
  request.r(i2533[0], i2533[1], 0, i2532, 'nameLabel')
  i2532.colorDefault = new pc.Color(i2533[2], i2533[3], i2533[4], i2533[5])
  i2532.colorSelected = new pc.Color(i2533[6], i2533[7], i2533[8], i2533[9])
  return i2532
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i2534 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i2535 = data
  request.r(i2535[0], i2535[1], 0, i2534, 'nameLabel')
  request.r(i2535[2], i2535[3], 0, i2534, 'valueToggle')
  i2534.colorDefault = new pc.Color(i2535[4], i2535[5], i2535[6], i2535[7])
  i2534.colorSelected = new pc.Color(i2535[8], i2535[9], i2535[10], i2535[11])
  return i2534
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i2536 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i2537 = data
  request.r(i2537[0], i2537[1], 0, i2536, 'content')
  request.r(i2537[2], i2537[3], 0, i2536, 'arrowOpened')
  request.r(i2537[4], i2537[5], 0, i2536, 'arrowClosed')
  i2536.toggleTransition = i2537[6]
  request.r(i2537[7], i2537[8], 0, i2536, 'graphic')
  i2536.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i2537[9], i2536.onValueChanged)
  request.r(i2537[10], i2537[11], 0, i2536, 'm_Group')
  i2536.m_IsOn = !!i2537[12]
  i2536.m_Navigation = request.d('UnityEngine.UI.Navigation', i2537[13], i2536.m_Navigation)
  i2536.m_Transition = i2537[14]
  i2536.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2537[15], i2536.m_Colors)
  i2536.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2537[16], i2536.m_SpriteState)
  i2536.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2537[17], i2536.m_AnimationTriggers)
  i2536.m_Interactable = !!i2537[18]
  request.r(i2537[19], i2537[20], 0, i2536, 'm_TargetGraphic')
  return i2536
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i2538 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i2539 = data
  request.r(i2539[0], i2539[1], 0, i2538, 'nameLabel')
  request.r(i2539[2], i2539[3], 0, i2538, 'valueToggle')
  request.r(i2539[4], i2539[5], 0, i2538, 'colorImage')
  request.r(i2539[6], i2539[7], 0, i2538, 'fieldR')
  request.r(i2539[8], i2539[9], 0, i2538, 'fieldG')
  request.r(i2539[10], i2539[11], 0, i2538, 'fieldB')
  request.r(i2539[12], i2539[13], 0, i2538, 'fieldA')
  i2538.colorDefault = new pc.Color(i2539[14], i2539[15], i2539[16], i2539[17])
  i2538.colorSelected = new pc.Color(i2539[18], i2539[19], i2539[20], i2539[21])
  return i2538
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i2540 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i2541 = data
  request.r(i2541[0], i2541[1], 0, i2540, 'nameLabel')
  request.r(i2541[2], i2541[3], 0, i2540, 'valueLabel')
  i2540.colorDefault = new pc.Color(i2541[4], i2541[5], i2541[6], i2541[7])
  i2540.colorSelected = new pc.Color(i2541[8], i2541[9], i2541[10], i2541[11])
  return i2540
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i2542 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i2543 = data
  request.r(i2543[0], i2543[1], 0, i2542, 'nameLabel')
  request.r(i2543[2], i2543[3], 0, i2542, 'valueToggle')
  request.r(i2543[4], i2543[5], 0, i2542, 'fieldX')
  request.r(i2543[6], i2543[7], 0, i2542, 'fieldY')
  i2542.colorDefault = new pc.Color(i2543[8], i2543[9], i2543[10], i2543[11])
  i2542.colorSelected = new pc.Color(i2543[12], i2543[13], i2543[14], i2543[15])
  return i2542
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i2544 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i2545 = data
  request.r(i2545[0], i2545[1], 0, i2544, 'nameLabel')
  request.r(i2545[2], i2545[3], 0, i2544, 'valueToggle')
  request.r(i2545[4], i2545[5], 0, i2544, 'fieldX')
  request.r(i2545[6], i2545[7], 0, i2544, 'fieldY')
  request.r(i2545[8], i2545[9], 0, i2544, 'fieldZ')
  i2544.colorDefault = new pc.Color(i2545[10], i2545[11], i2545[12], i2545[13])
  i2544.colorSelected = new pc.Color(i2545[14], i2545[15], i2545[16], i2545[17])
  return i2544
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i2546 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i2547 = data
  request.r(i2547[0], i2547[1], 0, i2546, 'nameLabel')
  request.r(i2547[2], i2547[3], 0, i2546, 'valueToggle')
  request.r(i2547[4], i2547[5], 0, i2546, 'fieldX')
  request.r(i2547[6], i2547[7], 0, i2546, 'fieldY')
  request.r(i2547[8], i2547[9], 0, i2546, 'fieldZ')
  request.r(i2547[10], i2547[11], 0, i2546, 'fieldW')
  i2546.colorDefault = new pc.Color(i2547[12], i2547[13], i2547[14], i2547[15])
  i2546.colorSelected = new pc.Color(i2547[16], i2547[17], i2547[18], i2547[19])
  return i2546
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i2548 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i2549 = data
  i2548.colorDefault = new pc.Color(i2549[0], i2549[1], i2549[2], i2549[3])
  i2548.colorSelected = new pc.Color(i2549[4], i2549[5], i2549[6], i2549[7])
  return i2548
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2550 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2551 = data
  i2550.m_Spacing = i2551[0]
  i2550.m_ChildForceExpandWidth = !!i2551[1]
  i2550.m_ChildForceExpandHeight = !!i2551[2]
  i2550.m_ChildControlWidth = !!i2551[3]
  i2550.m_ChildControlHeight = !!i2551[4]
  i2550.m_ChildScaleWidth = !!i2551[5]
  i2550.m_ChildScaleHeight = !!i2551[6]
  i2550.m_ReverseArrangement = !!i2551[7]
  i2550.m_Padding = UnityEngine.RectOffset.FromPaddings(i2551[8], i2551[9], i2551[10], i2551[11])
  i2550.m_ChildAlignment = i2551[12]
  return i2550
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i2552 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i2553 = data
  i2552.colorDefault = new pc.Color(i2553[0], i2553[1], i2553[2], i2553[3])
  i2552.colorSelected = new pc.Color(i2553[4], i2553[5], i2553[6], i2553[7])
  return i2552
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i2554 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i2555 = data
  request.r(i2555[0], i2555[1], 0, i2554, 'nameLabel')
  request.r(i2555[2], i2555[3], 0, i2554, 'header')
  i2554.colorDefault = new pc.Color(i2555[4], i2555[5], i2555[6], i2555[7])
  i2554.colorSelected = new pc.Color(i2555[8], i2555[9], i2555[10], i2555[11])
  return i2554
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i2556 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i2557 = data
  request.r(i2557[0], i2557[1], 0, i2556, 'nameLabel')
  request.r(i2557[2], i2557[3], 0, i2556, 'valueToggle')
  var i2559 = i2557[4]
  var i2558 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i2559.length; i += 2) {
  request.r(i2559[i + 0], i2559[i + 1], 1, i2558, '')
  }
  i2556.toggles = i2558
  i2556.colorDefault = new pc.Color(i2557[5], i2557[6], i2557[7], i2557[8])
  i2556.colorSelected = new pc.Color(i2557[9], i2557[10], i2557[11], i2557[12])
  return i2556
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i2562 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i2563 = data
  request.r(i2563[0], i2563[1], 0, i2562, 'nameLabel')
  request.r(i2563[2], i2563[3], 0, i2562, 'valueToggle')
  request.r(i2563[4], i2563[5], 0, i2562, 'checkmarkImage')
  i2562.colorDefault = new pc.Color(i2563[6], i2563[7], i2563[8], i2563[9])
  i2562.colorSelected = new pc.Color(i2563[10], i2563[11], i2563[12], i2563[13])
  return i2562
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i2564 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i2565 = data
  request.r(i2565[0], i2565[1], 0, i2564, 'nameLabel')
  request.r(i2565[2], i2565[3], 0, i2564, 'valueToggle')
  request.r(i2565[4], i2565[5], 0, i2564, 'checkmarkImage')
  i2564.colorDefault = new pc.Color(i2565[6], i2565[7], i2565[8], i2565[9])
  i2564.colorSelected = new pc.Color(i2565[10], i2565[11], i2565[12], i2565[13])
  return i2564
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i2566 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i2567 = data
  request.r(i2567[0], i2567[1], 0, i2566, 'nextButtonText')
  request.r(i2567[2], i2567[3], 0, i2566, 'previousButtonText')
  request.r(i2567[4], i2567[5], 0, i2566, 'nameLabel')
  request.r(i2567[6], i2567[7], 0, i2566, 'valueLabel')
  i2566.colorDefault = new pc.Color(i2567[8], i2567[9], i2567[10], i2567[11])
  i2566.colorSelected = new pc.Color(i2567[12], i2567[13], i2567[14], i2567[15])
  return i2566
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i2568 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i2569 = data
  request.r(i2569[0], i2569[1], 0, i2568, 'nameLabel')
  request.r(i2569[2], i2569[3], 0, i2568, 'valueToggle')
  i2568.colorDefault = new pc.Color(i2569[4], i2569[5], i2569[6], i2569[7])
  i2568.colorSelected = new pc.Color(i2569[8], i2569[9], i2569[10], i2569[11])
  return i2568
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i2570 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i2571 = data
  request.r(i2571[0], i2571[1], 0, i2570, 'nameLabel')
  i2570.colorDefault = new pc.Color(i2571[2], i2571[3], i2571[4], i2571[5])
  i2570.colorSelected = new pc.Color(i2571[6], i2571[7], i2571[8], i2571[9])
  return i2570
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i2572 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i2573 = data
  request.r(i2573[0], i2573[1], 0, i2572, 'nameLabel')
  request.r(i2573[2], i2573[3], 0, i2572, 'valueLabel')
  request.r(i2573[4], i2573[5], 0, i2572, 'progressBarRect')
  i2572.colorDefault = new pc.Color(i2573[6], i2573[7], i2573[8], i2573[9])
  i2572.colorSelected = new pc.Color(i2573[10], i2573[11], i2573[12], i2573[13])
  return i2572
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i2574 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i2575 = data
  request.r(i2575[0], i2575[1], 0, i2574, 'nameLabel')
  request.r(i2575[2], i2575[3], 0, i2574, 'valueLabel')
  i2574.colorDefault = new pc.Color(i2575[4], i2575[5], i2575[6], i2575[7])
  i2574.colorSelected = new pc.Color(i2575[8], i2575[9], i2575[10], i2575[11])
  return i2574
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i2576 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i2577 = data
  request.r(i2577[0], i2577[1], 0, i2576, 'nameLabel')
  request.r(i2577[2], i2577[3], 0, i2576, 'valueLabel')
  i2576.colorDefault = new pc.Color(i2577[4], i2577[5], i2577[6], i2577[7])
  i2576.colorSelected = new pc.Color(i2577[8], i2577[9], i2577[10], i2577[11])
  return i2576
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i2578 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i2579 = data
  request.r(i2579[0], i2579[1], 0, i2578, 'nextButtonText')
  request.r(i2579[2], i2579[3], 0, i2578, 'previousButtonText')
  request.r(i2579[4], i2579[5], 0, i2578, 'nameLabel')
  request.r(i2579[6], i2579[7], 0, i2578, 'valueLabel')
  i2578.colorDefault = new pc.Color(i2579[8], i2579[9], i2579[10], i2579[11])
  i2578.colorSelected = new pc.Color(i2579[12], i2579[13], i2579[14], i2579[15])
  return i2578
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i2580 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i2581 = data
  request.r(i2581[0], i2581[1], 0, i2580, 'nextButtonText')
  request.r(i2581[2], i2581[3], 0, i2580, 'previousButtonText')
  request.r(i2581[4], i2581[5], 0, i2580, 'nameLabel')
  request.r(i2581[6], i2581[7], 0, i2580, 'valueLabel')
  i2580.colorDefault = new pc.Color(i2581[8], i2581[9], i2581[10], i2581[11])
  i2580.colorSelected = new pc.Color(i2581[12], i2581[13], i2581[14], i2581[15])
  return i2580
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i2582 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i2583 = data
  request.r(i2583[0], i2583[1], 0, i2582, 'panel')
  request.r(i2583[2], i2583[3], 0, i2582, 'valuePrefab')
  return i2582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i2584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i2585 = data
  i2584.AdditionalLightsRenderingMode = i2585[0]
  i2584.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i2585[1], i2584.LightRenderingMode)
  i2584.MainLightRenderingModeValue = i2585[2]
  i2584.SupportsMainLightShadows = !!i2585[3]
  i2584.MixedLightingSupported = !!i2585[4]
  i2584.MainLightShadowmapResolutionValue = i2585[5]
  i2584.SupportsSoftShadows = !!i2585[6]
  i2584.SoftShadowQualityValue = i2585[7]
  i2584.ShadowDistance = i2585[8]
  i2584.ShadowCascadeCount = i2585[9]
  i2584.Cascade2Split = i2585[10]
  i2584.Cascade3Split = new pc.Vec2( i2585[11], i2585[12] )
  i2584.Cascade4Split = new pc.Vec3( i2585[13], i2585[14], i2585[15] )
  i2584.CascadeBorder = i2585[16]
  i2584.ShadowDepthBias = i2585[17]
  i2584.ShadowNormalBias = i2585[18]
  i2584.RequireDepthTexture = !!i2585[19]
  i2584.RequireOpaqueTexture = !!i2585[20]
  i2584.scriptableRendererData = request.d('Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData', i2585[21], i2584.scriptableRendererData)
  return i2584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i2586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i2587 = data
  i2586.Disabled = i2587[0]
  i2586.PerVertex = i2587[1]
  i2586.PerPixel = i2587[2]
  return i2586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData"] = function (request, data, root) {
  var i2588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData' )
  var i2589 = data
  i2588.opaqueLayerMask = i2589[0]
  i2588.transparentLayerMask = i2589[1]
  var i2591 = i2589[2]
  var i2590 = []
  for(var i = 0; i < i2591.length; i += 1) {
    i2590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects', i2591[i + 0]) );
  }
  i2588.RenderObjectsFeatures = i2590
  i2588.name = i2589[3]
  return i2588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects"] = function (request, data, root) {
  var i2594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects' )
  var i2595 = data
  i2594.settings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings', i2595[0], i2594.settings)
  i2594.name = i2595[1]
  i2594.typeName = i2595[2]
  return i2594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2597 = data
  var i2599 = i2597[0]
  var i2598 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2599.length; i += 1) {
    i2598.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2599[i + 0]));
  }
  i2596.ShaderCompilationErrors = i2598
  i2596.name = i2597[1]
  i2596.guid = i2597[2]
  var i2601 = i2597[3]
  var i2600 = []
  for(var i = 0; i < i2601.length; i += 1) {
    i2600.push( i2601[i + 0] );
  }
  i2596.shaderDefinedKeywords = i2600
  var i2603 = i2597[4]
  var i2602 = []
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2603[i + 0]) );
  }
  i2596.passes = i2602
  var i2605 = i2597[5]
  var i2604 = []
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2605[i + 0]) );
  }
  i2596.usePasses = i2604
  var i2607 = i2597[6]
  var i2606 = []
  for(var i = 0; i < i2607.length; i += 1) {
    i2606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2607[i + 0]) );
  }
  i2596.defaultParameterValues = i2606
  request.r(i2597[7], i2597[8], 0, i2596, 'unityFallbackShader')
  i2596.readDepth = !!i2597[9]
  i2596.hasDepthOnlyPass = !!i2597[10]
  i2596.isCreatedByShaderGraph = !!i2597[11]
  i2596.disableBatching = !!i2597[12]
  i2596.compiled = !!i2597[13]
  return i2596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2611 = data
  i2610.shaderName = i2611[0]
  i2610.errorMessage = i2611[1]
  return i2610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2616 = root || new pc.UnityShaderPass()
  var i2617 = data
  i2616.id = i2617[0]
  i2616.subShaderIndex = i2617[1]
  i2616.name = i2617[2]
  i2616.passType = i2617[3]
  i2616.grabPassTextureName = i2617[4]
  i2616.usePass = !!i2617[5]
  i2616.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2617[6], i2616.zTest)
  i2616.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2617[7], i2616.zWrite)
  i2616.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2617[8], i2616.culling)
  i2616.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2617[9], i2616.blending)
  i2616.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2617[10], i2616.alphaBlending)
  i2616.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2617[11], i2616.colorWriteMask)
  i2616.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2617[12], i2616.offsetUnits)
  i2616.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2617[13], i2616.offsetFactor)
  i2616.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2617[14], i2616.stencilRef)
  i2616.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2617[15], i2616.stencilReadMask)
  i2616.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2617[16], i2616.stencilWriteMask)
  i2616.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2617[17], i2616.stencilOp)
  i2616.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2617[18], i2616.stencilOpFront)
  i2616.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2617[19], i2616.stencilOpBack)
  var i2619 = i2617[20]
  var i2618 = []
  for(var i = 0; i < i2619.length; i += 1) {
    i2618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2619[i + 0]) );
  }
  i2616.tags = i2618
  var i2621 = i2617[21]
  var i2620 = []
  for(var i = 0; i < i2621.length; i += 1) {
    i2620.push( i2621[i + 0] );
  }
  i2616.passDefinedKeywords = i2620
  var i2623 = i2617[22]
  var i2622 = []
  for(var i = 0; i < i2623.length; i += 1) {
    i2622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2623[i + 0]) );
  }
  i2616.passDefinedKeywordGroups = i2622
  var i2625 = i2617[23]
  var i2624 = []
  for(var i = 0; i < i2625.length; i += 1) {
    i2624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2625[i + 0]) );
  }
  i2616.variants = i2624
  var i2627 = i2617[24]
  var i2626 = []
  for(var i = 0; i < i2627.length; i += 1) {
    i2626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2627[i + 0]) );
  }
  i2616.excludedVariants = i2626
  i2616.hasDepthReader = !!i2617[25]
  return i2616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2629 = data
  i2628.val = i2629[0]
  i2628.name = i2629[1]
  return i2628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2631 = data
  i2630.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2631[0], i2630.src)
  i2630.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2631[1], i2630.dst)
  i2630.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2631[2], i2630.op)
  return i2630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2633 = data
  i2632.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2633[0], i2632.pass)
  i2632.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2633[1], i2632.fail)
  i2632.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2633[2], i2632.zFail)
  i2632.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2633[3], i2632.comp)
  return i2632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2637 = data
  i2636.name = i2637[0]
  i2636.value = i2637[1]
  return i2636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2641 = data
  var i2643 = i2641[0]
  var i2642 = []
  for(var i = 0; i < i2643.length; i += 1) {
    i2642.push( i2643[i + 0] );
  }
  i2640.keywords = i2642
  i2640.hasDiscard = !!i2641[1]
  return i2640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2647 = data
  i2646.passId = i2647[0]
  i2646.subShaderIndex = i2647[1]
  var i2649 = i2647[2]
  var i2648 = []
  for(var i = 0; i < i2649.length; i += 1) {
    i2648.push( i2649[i + 0] );
  }
  i2646.keywords = i2648
  i2646.vertexProgram = i2647[3]
  i2646.fragmentProgram = i2647[4]
  i2646.exportedForWebGl2 = !!i2647[5]
  i2646.readDepth = !!i2647[6]
  return i2646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2653 = data
  request.r(i2653[0], i2653[1], 0, i2652, 'shader')
  i2652.pass = i2653[2]
  return i2652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2657 = data
  i2656.name = i2657[0]
  i2656.type = i2657[1]
  i2656.value = new pc.Vec4( i2657[2], i2657[3], i2657[4], i2657[5] )
  i2656.textureValue = i2657[6]
  i2656.shaderPropertyFlag = i2657[7]
  return i2656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2659 = data
  i2658.name = i2659[0]
  request.r(i2659[1], i2659[2], 0, i2658, 'texture')
  i2658.aabb = i2659[3]
  i2658.vertices = i2659[4]
  i2658.triangles = i2659[5]
  i2658.textureRect = UnityEngine.Rect.MinMaxRect(i2659[6], i2659[7], i2659[8], i2659[9])
  i2658.packedRect = UnityEngine.Rect.MinMaxRect(i2659[10], i2659[11], i2659[12], i2659[13])
  i2658.border = new pc.Vec4( i2659[14], i2659[15], i2659[16], i2659[17] )
  i2658.transparency = i2659[18]
  i2658.bounds = i2659[19]
  i2658.pixelsPerUnit = i2659[20]
  i2658.textureWidth = i2659[21]
  i2658.textureHeight = i2659[22]
  i2658.nativeSize = new pc.Vec2( i2659[23], i2659[24] )
  i2658.pivot = new pc.Vec2( i2659[25], i2659[26] )
  i2658.textureRectOffset = new pc.Vec2( i2659[27], i2659[28] )
  return i2658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2661 = data
  i2660.name = i2661[0]
  return i2660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2663 = data
  i2662.name = i2663[0]
  i2662.ascent = i2663[1]
  i2662.originalLineHeight = i2663[2]
  i2662.fontSize = i2663[3]
  var i2665 = i2663[4]
  var i2664 = []
  for(var i = 0; i < i2665.length; i += 1) {
    i2664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2665[i + 0]) );
  }
  i2662.characterInfo = i2664
  request.r(i2663[5], i2663[6], 0, i2662, 'texture')
  i2662.originalFontSize = i2663[7]
  return i2662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2669 = data
  i2668.index = i2669[0]
  i2668.advance = i2669[1]
  i2668.bearing = i2669[2]
  i2668.glyphWidth = i2669[3]
  i2668.glyphHeight = i2669[4]
  i2668.minX = i2669[5]
  i2668.maxX = i2669[6]
  i2668.minY = i2669[7]
  i2668.maxY = i2669[8]
  i2668.uvBottomLeftX = i2669[9]
  i2668.uvBottomLeftY = i2669[10]
  i2668.uvBottomRightX = i2669[11]
  i2668.uvBottomRightY = i2669[12]
  i2668.uvTopLeftX = i2669[13]
  i2668.uvTopLeftY = i2669[14]
  i2668.uvTopRightX = i2669[15]
  i2668.uvTopRightY = i2669[16]
  return i2668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2671 = data
  i2670.name = i2671[0]
  i2670.bytes64 = i2671[1]
  i2670.data = i2671[2]
  return i2670
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i2672 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i2673 = data
  var i2675 = i2673[0]
  var i2674 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i2675.length; i += 2) {
  request.r(i2675[i + 0], i2675[i + 1], 1, i2674, '')
  }
  i2672.components = i2674
  return i2672
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i2678 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i2679 = data
  i2678.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i2679[0], i2678.mode)
  i2678.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i2679[1], i2678.neutralHDRRangeReductionMode)
  i2678.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i2679[2], i2678.acesPreset)
  i2678.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2679[3], i2678.hueShiftAmount)
  i2678.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i2679[4], i2678.detectPaperWhite)
  i2678.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2679[5], i2678.paperWhite)
  i2678.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i2679[6], i2678.detectBrightnessLimits)
  i2678.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2679[7], i2678.minNits)
  i2678.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2679[8], i2678.maxNits)
  i2678.active = !!i2679[9]
  return i2678
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i2680 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i2681 = data
  i2680.m_Value = i2681[0]
  i2680.m_OverrideState = !!i2681[1]
  return i2680
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i2682 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i2683 = data
  i2682.m_Value = i2683[0]
  i2682.m_OverrideState = !!i2683[1]
  return i2682
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i2684 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i2685 = data
  i2684.m_Value = i2685[0]
  i2684.m_OverrideState = !!i2685[1]
  return i2684
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i2686 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i2687 = data
  i2686.m_Value = i2687[0]
  i2686.m_OverrideState = !!i2687[1]
  return i2686
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i2688 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i2689 = data
  i2688.m_Value = !!i2689[0]
  i2688.m_OverrideState = !!i2689[1]
  return i2688
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i2690 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i2691 = data
  i2690.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i2691[0], i2690.skipIterations)
  i2690.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i2691[1], i2690.threshold)
  i2690.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i2691[2], i2690.intensity)
  i2690.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2691[3], i2690.scatter)
  i2690.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i2691[4], i2690.clamp)
  i2690.tint = request.d('UnityEngine.Rendering.ColorParameter', i2691[5], i2690.tint)
  i2690.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i2691[6], i2690.highQualityFiltering)
  i2690.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i2691[7], i2690.downscale)
  i2690.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i2691[8], i2690.maxIterations)
  i2690.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i2691[9], i2690.dirtTexture)
  i2690.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i2691[10], i2690.dirtIntensity)
  i2690.active = !!i2691[11]
  return i2690
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i2692 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i2693 = data
  i2692.m_Value = i2693[0]
  i2692.m_OverrideState = !!i2693[1]
  return i2692
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i2694 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i2695 = data
  i2694.m_Value = i2695[0]
  i2694.m_OverrideState = !!i2695[1]
  return i2694
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i2696 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i2697 = data
  i2696.m_Value = new pc.Color(i2697[0], i2697[1], i2697[2], i2697[3])
  i2696.m_OverrideState = !!i2697[4]
  return i2696
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i2698 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i2699 = data
  i2698.m_Value = i2699[0]
  i2698.m_OverrideState = !!i2699[1]
  return i2698
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i2700 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i2701 = data
  i2700.dimension = i2701[0]
  request.r(i2701[1], i2701[2], 0, i2700, 'm_Value')
  i2700.m_OverrideState = !!i2701[3]
  return i2700
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlur"] = function (request, data, root) {
  var i2702 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlur' )
  var i2703 = data
  i2702.mode = request.d('UnityEngine.Rendering.Universal.MotionBlurModeParameter', i2703[0], i2702.mode)
  i2702.quality = request.d('UnityEngine.Rendering.Universal.MotionBlurQualityParameter', i2703[1], i2702.quality)
  i2702.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2703[2], i2702.intensity)
  i2702.clamp = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2703[3], i2702.clamp)
  i2702.active = !!i2703[4]
  return i2702
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurModeParameter"] = function (request, data, root) {
  var i2704 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurModeParameter' )
  var i2705 = data
  i2704.m_Value = i2705[0]
  i2704.m_OverrideState = !!i2705[1]
  return i2704
}

Deserializers["UnityEngine.Rendering.Universal.MotionBlurQualityParameter"] = function (request, data, root) {
  var i2706 = root || request.c( 'UnityEngine.Rendering.Universal.MotionBlurQualityParameter' )
  var i2707 = data
  i2706.m_Value = i2707[0]
  i2706.m_OverrideState = !!i2707[1]
  return i2706
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i2708 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i2709 = data
  i2708.color = request.d('UnityEngine.Rendering.ColorParameter', i2709[0], i2708.color)
  i2708.center = request.d('UnityEngine.Rendering.Vector2Parameter', i2709[1], i2708.center)
  i2708.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2709[2], i2708.intensity)
  i2708.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i2709[3], i2708.smoothness)
  i2708.rounded = request.d('UnityEngine.Rendering.BoolParameter', i2709[4], i2708.rounded)
  i2708.active = !!i2709[5]
  return i2708
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i2710 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i2711 = data
  i2710.m_Value = new pc.Vec2( i2711[0], i2711[1] )
  i2710.m_OverrideState = !!i2711[2]
  return i2710
}

Deserializers["_Game.Configs.HexColorConfig"] = function (request, data, root) {
  var i2712 = root || request.c( '_Game.Configs.HexColorConfig' )
  var i2713 = data
  var i2715 = i2713[0]
  var i2714 = new (System.Collections.Generic.List$1(Bridge.ns('_Game.Configs.HexColorConfig+Entry')))
  for(var i = 0; i < i2715.length; i += 1) {
    i2714.add(request.d('_Game.Configs.HexColorConfig+Entry', i2715[i + 0]));
  }
  i2712.entries = i2714
  return i2712
}

Deserializers["_Game.Configs.HexColorConfig+Entry"] = function (request, data, root) {
  var i2718 = root || request.c( '_Game.Configs.HexColorConfig+Entry' )
  var i2719 = data
  i2718.hexColor = i2719[0]
  i2718.color = new pc.Color(i2719[1], i2719[2], i2719[3], i2719[4])
  request.r(i2719[5], i2719[6], 0, i2718, 'material')
  return i2718
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2720 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2721 = data
  request.r(i2721[0], i2721[1], 0, i2720, 'atlas')
  i2720.normalStyle = i2721[2]
  i2720.normalSpacingOffset = i2721[3]
  i2720.boldStyle = i2721[4]
  i2720.boldSpacing = i2721[5]
  i2720.italicStyle = i2721[6]
  i2720.tabSize = i2721[7]
  i2720.hashCode = i2721[8]
  request.r(i2721[9], i2721[10], 0, i2720, 'material')
  i2720.materialHashCode = i2721[11]
  i2720.m_Version = i2721[12]
  i2720.m_SourceFontFileGUID = i2721[13]
  request.r(i2721[14], i2721[15], 0, i2720, 'm_SourceFontFile_EditorRef')
  request.r(i2721[16], i2721[17], 0, i2720, 'm_SourceFontFile')
  i2720.m_AtlasPopulationMode = i2721[18]
  i2720.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2721[19], i2720.m_FaceInfo)
  var i2723 = i2721[20]
  var i2722 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2723.length; i += 1) {
    i2722.add(request.d('UnityEngine.TextCore.Glyph', i2723[i + 0]));
  }
  i2720.m_GlyphTable = i2722
  var i2725 = i2721[21]
  var i2724 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2725.length; i += 1) {
    i2724.add(request.d('TMPro.TMP_Character', i2725[i + 0]));
  }
  i2720.m_CharacterTable = i2724
  var i2727 = i2721[22]
  var i2726 = []
  for(var i = 0; i < i2727.length; i += 2) {
  request.r(i2727[i + 0], i2727[i + 1], 2, i2726, '')
  }
  i2720.m_AtlasTextures = i2726
  i2720.m_AtlasTextureIndex = i2721[23]
  i2720.m_IsMultiAtlasTexturesEnabled = !!i2721[24]
  i2720.m_ClearDynamicDataOnBuild = !!i2721[25]
  var i2729 = i2721[26]
  var i2728 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2729.length; i += 1) {
    i2728.add(request.d('UnityEngine.TextCore.GlyphRect', i2729[i + 0]));
  }
  i2720.m_UsedGlyphRects = i2728
  var i2731 = i2721[27]
  var i2730 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2731.length; i += 1) {
    i2730.add(request.d('UnityEngine.TextCore.GlyphRect', i2731[i + 0]));
  }
  i2720.m_FreeGlyphRects = i2730
  i2720.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2721[28], i2720.m_fontInfo)
  i2720.m_AtlasWidth = i2721[29]
  i2720.m_AtlasHeight = i2721[30]
  i2720.m_AtlasPadding = i2721[31]
  i2720.m_AtlasRenderMode = i2721[32]
  var i2733 = i2721[33]
  var i2732 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2733.length; i += 1) {
    i2732.add(request.d('TMPro.TMP_Glyph', i2733[i + 0]));
  }
  i2720.m_glyphInfoList = i2732
  i2720.m_KerningTable = request.d('TMPro.KerningTable', i2721[34], i2720.m_KerningTable)
  i2720.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2721[35], i2720.m_FontFeatureTable)
  var i2735 = i2721[36]
  var i2734 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2735.length; i += 2) {
  request.r(i2735[i + 0], i2735[i + 1], 1, i2734, '')
  }
  i2720.fallbackFontAssets = i2734
  var i2737 = i2721[37]
  var i2736 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2737.length; i += 2) {
  request.r(i2737[i + 0], i2737[i + 1], 1, i2736, '')
  }
  i2720.m_FallbackFontAssetTable = i2736
  i2720.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2721[38], i2720.m_CreationSettings)
  var i2739 = i2721[39]
  var i2738 = []
  for(var i = 0; i < i2739.length; i += 1) {
    i2738.push( request.d('TMPro.TMP_FontWeightPair', i2739[i + 0]) );
  }
  i2720.m_FontWeightTable = i2738
  var i2741 = i2721[40]
  var i2740 = []
  for(var i = 0; i < i2741.length; i += 1) {
    i2740.push( request.d('TMPro.TMP_FontWeightPair', i2741[i + 0]) );
  }
  i2720.fontWeights = i2740
  return i2720
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2742 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2743 = data
  i2742.m_FaceIndex = i2743[0]
  i2742.m_FamilyName = i2743[1]
  i2742.m_StyleName = i2743[2]
  i2742.m_PointSize = i2743[3]
  i2742.m_Scale = i2743[4]
  i2742.m_UnitsPerEM = i2743[5]
  i2742.m_LineHeight = i2743[6]
  i2742.m_AscentLine = i2743[7]
  i2742.m_CapLine = i2743[8]
  i2742.m_MeanLine = i2743[9]
  i2742.m_Baseline = i2743[10]
  i2742.m_DescentLine = i2743[11]
  i2742.m_SuperscriptOffset = i2743[12]
  i2742.m_SuperscriptSize = i2743[13]
  i2742.m_SubscriptOffset = i2743[14]
  i2742.m_SubscriptSize = i2743[15]
  i2742.m_UnderlineOffset = i2743[16]
  i2742.m_UnderlineThickness = i2743[17]
  i2742.m_StrikethroughOffset = i2743[18]
  i2742.m_StrikethroughThickness = i2743[19]
  i2742.m_TabWidth = i2743[20]
  return i2742
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2746 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2747 = data
  i2746.m_Index = i2747[0]
  i2746.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2747[1], i2746.m_Metrics)
  i2746.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2747[2], i2746.m_GlyphRect)
  i2746.m_Scale = i2747[3]
  i2746.m_AtlasIndex = i2747[4]
  i2746.m_ClassDefinitionType = i2747[5]
  return i2746
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2748 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2749 = data
  i2748.m_Width = i2749[0]
  i2748.m_Height = i2749[1]
  i2748.m_HorizontalBearingX = i2749[2]
  i2748.m_HorizontalBearingY = i2749[3]
  i2748.m_HorizontalAdvance = i2749[4]
  return i2748
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2750 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2751 = data
  i2750.m_X = i2751[0]
  i2750.m_Y = i2751[1]
  i2750.m_Width = i2751[2]
  i2750.m_Height = i2751[3]
  return i2750
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2754 = root || request.c( 'TMPro.TMP_Character' )
  var i2755 = data
  i2754.m_ElementType = i2755[0]
  i2754.m_Unicode = i2755[1]
  i2754.m_GlyphIndex = i2755[2]
  i2754.m_Scale = i2755[3]
  return i2754
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2760 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2761 = data
  i2760.Name = i2761[0]
  i2760.PointSize = i2761[1]
  i2760.Scale = i2761[2]
  i2760.CharacterCount = i2761[3]
  i2760.LineHeight = i2761[4]
  i2760.Baseline = i2761[5]
  i2760.Ascender = i2761[6]
  i2760.CapHeight = i2761[7]
  i2760.Descender = i2761[8]
  i2760.CenterLine = i2761[9]
  i2760.SuperscriptOffset = i2761[10]
  i2760.SubscriptOffset = i2761[11]
  i2760.SubSize = i2761[12]
  i2760.Underline = i2761[13]
  i2760.UnderlineThickness = i2761[14]
  i2760.strikethrough = i2761[15]
  i2760.strikethroughThickness = i2761[16]
  i2760.TabWidth = i2761[17]
  i2760.Padding = i2761[18]
  i2760.AtlasWidth = i2761[19]
  i2760.AtlasHeight = i2761[20]
  return i2760
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2764 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2765 = data
  i2764.id = i2765[0]
  i2764.x = i2765[1]
  i2764.y = i2765[2]
  i2764.width = i2765[3]
  i2764.height = i2765[4]
  i2764.xOffset = i2765[5]
  i2764.yOffset = i2765[6]
  i2764.xAdvance = i2765[7]
  i2764.scale = i2765[8]
  return i2764
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2766 = root || request.c( 'TMPro.KerningTable' )
  var i2767 = data
  var i2769 = i2767[0]
  var i2768 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2769.length; i += 1) {
    i2768.add(request.d('TMPro.KerningPair', i2769[i + 0]));
  }
  i2766.kerningPairs = i2768
  return i2766
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2772 = root || request.c( 'TMPro.KerningPair' )
  var i2773 = data
  i2772.xOffset = i2773[0]
  i2772.m_FirstGlyph = i2773[1]
  i2772.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2773[2], i2772.m_FirstGlyphAdjustments)
  i2772.m_SecondGlyph = i2773[3]
  i2772.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2773[4], i2772.m_SecondGlyphAdjustments)
  i2772.m_IgnoreSpacingAdjustments = !!i2773[5]
  return i2772
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2774 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2775 = data
  var i2777 = i2775[0]
  var i2776 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2777.length; i += 1) {
    i2776.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2777[i + 0]));
  }
  i2774.m_GlyphPairAdjustmentRecords = i2776
  return i2774
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2780 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2781 = data
  i2780.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2781[0], i2780.m_FirstAdjustmentRecord)
  i2780.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2781[1], i2780.m_SecondAdjustmentRecord)
  i2780.m_FeatureLookupFlags = i2781[2]
  return i2780
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2782 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2783 = data
  i2782.m_GlyphIndex = i2783[0]
  i2782.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2783[1], i2782.m_GlyphValueRecord)
  return i2782
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2784 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2785 = data
  i2784.m_XPlacement = i2785[0]
  i2784.m_YPlacement = i2785[1]
  i2784.m_XAdvance = i2785[2]
  i2784.m_YAdvance = i2785[3]
  return i2784
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2788 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2789 = data
  i2788.sourceFontFileName = i2789[0]
  i2788.sourceFontFileGUID = i2789[1]
  i2788.pointSizeSamplingMode = i2789[2]
  i2788.pointSize = i2789[3]
  i2788.padding = i2789[4]
  i2788.packingMode = i2789[5]
  i2788.atlasWidth = i2789[6]
  i2788.atlasHeight = i2789[7]
  i2788.characterSetSelectionMode = i2789[8]
  i2788.characterSequence = i2789[9]
  i2788.referencedFontAssetGUID = i2789[10]
  i2788.referencedTextAssetGUID = i2789[11]
  i2788.fontStyle = i2789[12]
  i2788.fontStyleModifier = i2789[13]
  i2788.renderMode = i2789[14]
  i2788.includeFontFeatures = !!i2789[15]
  return i2788
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2792 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2793 = data
  request.r(i2793[0], i2793[1], 0, i2792, 'regularTypeface')
  request.r(i2793[2], i2793[3], 0, i2792, 'italicTypeface')
  return i2792
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2794 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2795 = data
  i2794.useSafeMode = !!i2795[0]
  i2794.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2795[1], i2794.safeModeOptions)
  i2794.timeScale = i2795[2]
  i2794.unscaledTimeScale = i2795[3]
  i2794.useSmoothDeltaTime = !!i2795[4]
  i2794.maxSmoothUnscaledTime = i2795[5]
  i2794.rewindCallbackMode = i2795[6]
  i2794.showUnityEditorReport = !!i2795[7]
  i2794.logBehaviour = i2795[8]
  i2794.drawGizmos = !!i2795[9]
  i2794.defaultRecyclable = !!i2795[10]
  i2794.defaultAutoPlay = i2795[11]
  i2794.defaultUpdateType = i2795[12]
  i2794.defaultTimeScaleIndependent = !!i2795[13]
  i2794.defaultEaseType = i2795[14]
  i2794.defaultEaseOvershootOrAmplitude = i2795[15]
  i2794.defaultEasePeriod = i2795[16]
  i2794.defaultAutoKill = !!i2795[17]
  i2794.defaultLoopType = i2795[18]
  i2794.debugMode = !!i2795[19]
  i2794.debugStoreTargetId = !!i2795[20]
  i2794.showPreviewPanel = !!i2795[21]
  i2794.storeSettingsLocation = i2795[22]
  i2794.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2795[23], i2794.modules)
  i2794.createASMDEF = !!i2795[24]
  i2794.showPlayingTweens = !!i2795[25]
  i2794.showPausedTweens = !!i2795[26]
  return i2794
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2796 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2797 = data
  i2796.logBehaviour = i2797[0]
  i2796.nestedTweenFailureBehaviour = i2797[1]
  return i2796
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2798 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2799 = data
  i2798.showPanel = !!i2799[0]
  i2798.audioEnabled = !!i2799[1]
  i2798.physicsEnabled = !!i2799[2]
  i2798.physics2DEnabled = !!i2799[3]
  i2798.spriteEnabled = !!i2799[4]
  i2798.uiEnabled = !!i2799[5]
  i2798.textMeshProEnabled = !!i2799[6]
  i2798.tk2DEnabled = !!i2799[7]
  i2798.deAudioEnabled = !!i2799[8]
  i2798.deUnityExtendedEnabled = !!i2799[9]
  i2798.epoOutlineEnabled = !!i2799[10]
  return i2798
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2800 = root || request.c( 'TMPro.TMP_Settings' )
  var i2801 = data
  i2800.m_enableWordWrapping = !!i2801[0]
  i2800.m_enableKerning = !!i2801[1]
  i2800.m_enableExtraPadding = !!i2801[2]
  i2800.m_enableTintAllSprites = !!i2801[3]
  i2800.m_enableParseEscapeCharacters = !!i2801[4]
  i2800.m_EnableRaycastTarget = !!i2801[5]
  i2800.m_GetFontFeaturesAtRuntime = !!i2801[6]
  i2800.m_missingGlyphCharacter = i2801[7]
  i2800.m_warningsDisabled = !!i2801[8]
  request.r(i2801[9], i2801[10], 0, i2800, 'm_defaultFontAsset')
  i2800.m_defaultFontAssetPath = i2801[11]
  i2800.m_defaultFontSize = i2801[12]
  i2800.m_defaultAutoSizeMinRatio = i2801[13]
  i2800.m_defaultAutoSizeMaxRatio = i2801[14]
  i2800.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2801[15], i2801[16] )
  i2800.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2801[17], i2801[18] )
  i2800.m_autoSizeTextContainer = !!i2801[19]
  i2800.m_IsTextObjectScaleStatic = !!i2801[20]
  var i2803 = i2801[21]
  var i2802 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2803.length; i += 2) {
  request.r(i2803[i + 0], i2803[i + 1], 1, i2802, '')
  }
  i2800.m_fallbackFontAssets = i2802
  i2800.m_matchMaterialPreset = !!i2801[22]
  request.r(i2801[23], i2801[24], 0, i2800, 'm_defaultSpriteAsset')
  i2800.m_defaultSpriteAssetPath = i2801[25]
  i2800.m_enableEmojiSupport = !!i2801[26]
  i2800.m_MissingCharacterSpriteUnicode = i2801[27]
  i2800.m_defaultColorGradientPresetsPath = i2801[28]
  request.r(i2801[29], i2801[30], 0, i2800, 'm_defaultStyleSheet')
  i2800.m_StyleSheetsResourcePath = i2801[31]
  request.r(i2801[32], i2801[33], 0, i2800, 'm_leadingCharacters')
  request.r(i2801[34], i2801[35], 0, i2800, 'm_followingCharacters')
  i2800.m_UseModernHangulLineBreakingRules = !!i2801[36]
  return i2800
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2804 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2805 = data
  request.r(i2805[0], i2805[1], 0, i2804, 'spriteSheet')
  var i2807 = i2805[2]
  var i2806 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2807.length; i += 1) {
    i2806.add(request.d('TMPro.TMP_Sprite', i2807[i + 0]));
  }
  i2804.spriteInfoList = i2806
  var i2809 = i2805[3]
  var i2808 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2809.length; i += 2) {
  request.r(i2809[i + 0], i2809[i + 1], 1, i2808, '')
  }
  i2804.fallbackSpriteAssets = i2808
  i2804.hashCode = i2805[4]
  request.r(i2805[5], i2805[6], 0, i2804, 'material')
  i2804.materialHashCode = i2805[7]
  i2804.m_Version = i2805[8]
  i2804.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2805[9], i2804.m_FaceInfo)
  var i2811 = i2805[10]
  var i2810 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2811.length; i += 1) {
    i2810.add(request.d('TMPro.TMP_SpriteCharacter', i2811[i + 0]));
  }
  i2804.m_SpriteCharacterTable = i2810
  var i2813 = i2805[11]
  var i2812 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2813.length; i += 1) {
    i2812.add(request.d('TMPro.TMP_SpriteGlyph', i2813[i + 0]));
  }
  i2804.m_SpriteGlyphTable = i2812
  return i2804
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2816 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2817 = data
  i2816.name = i2817[0]
  i2816.hashCode = i2817[1]
  i2816.unicode = i2817[2]
  i2816.pivot = new pc.Vec2( i2817[3], i2817[4] )
  request.r(i2817[5], i2817[6], 0, i2816, 'sprite')
  i2816.id = i2817[7]
  i2816.x = i2817[8]
  i2816.y = i2817[9]
  i2816.width = i2817[10]
  i2816.height = i2817[11]
  i2816.xOffset = i2817[12]
  i2816.yOffset = i2817[13]
  i2816.xAdvance = i2817[14]
  i2816.scale = i2817[15]
  return i2816
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2822 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2823 = data
  i2822.m_Name = i2823[0]
  i2822.m_HashCode = i2823[1]
  i2822.m_ElementType = i2823[2]
  i2822.m_Unicode = i2823[3]
  i2822.m_GlyphIndex = i2823[4]
  i2822.m_Scale = i2823[5]
  return i2822
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2826 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2827 = data
  request.r(i2827[0], i2827[1], 0, i2826, 'sprite')
  i2826.m_Index = i2827[2]
  i2826.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2827[3], i2826.m_Metrics)
  i2826.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2827[4], i2826.m_GlyphRect)
  i2826.m_Scale = i2827[5]
  i2826.m_AtlasIndex = i2827[6]
  i2826.m_ClassDefinitionType = i2827[7]
  return i2826
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2828 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2829 = data
  var i2831 = i2829[0]
  var i2830 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2831.length; i += 1) {
    i2830.add(request.d('TMPro.TMP_Style', i2831[i + 0]));
  }
  i2828.m_StyleList = i2830
  return i2828
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2834 = root || request.c( 'TMPro.TMP_Style' )
  var i2835 = data
  i2834.m_Name = i2835[0]
  i2834.m_HashCode = i2835[1]
  i2834.m_OpeningDefinition = i2835[2]
  i2834.m_ClosingDefinition = i2835[3]
  i2834.m_OpeningTagArray = i2835[4]
  i2834.m_ClosingTagArray = i2835[5]
  i2834.m_OpeningTagUnicodeArray = i2835[6]
  i2834.m_ClosingTagUnicodeArray = i2835[7]
  return i2834
}

Deserializers["UnityEditor.Rendering.Universal.AssetVersion"] = function (request, data, root) {
  var i2836 = root || request.c( 'UnityEditor.Rendering.Universal.AssetVersion' )
  var i2837 = data
  i2836.version = i2837[0]
  return i2836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2839 = data
  var i2841 = i2839[0]
  var i2840 = []
  for(var i = 0; i < i2841.length; i += 1) {
    i2840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2841[i + 0]) );
  }
  i2838.files = i2840
  i2838.componentToPrefabIds = i2839[1]
  return i2838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2845 = data
  i2844.path = i2845[0]
  request.r(i2845[1], i2845[2], 0, i2844, 'unityObject')
  return i2844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2847 = data
  var i2849 = i2847[0]
  var i2848 = []
  for(var i = 0; i < i2849.length; i += 1) {
    i2848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2849[i + 0]) );
  }
  i2846.scriptsExecutionOrder = i2848
  var i2851 = i2847[1]
  var i2850 = []
  for(var i = 0; i < i2851.length; i += 1) {
    i2850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2851[i + 0]) );
  }
  i2846.sortingLayers = i2850
  var i2853 = i2847[2]
  var i2852 = []
  for(var i = 0; i < i2853.length; i += 1) {
    i2852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2853[i + 0]) );
  }
  i2846.cullingLayers = i2852
  i2846.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2847[3], i2846.timeSettings)
  i2846.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2847[4], i2846.physicsSettings)
  i2846.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2847[5], i2846.physics2DSettings)
  i2846.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2847[6], i2846.qualitySettings)
  i2846.enableRealtimeShadows = !!i2847[7]
  i2846.enableAutoInstancing = !!i2847[8]
  i2846.enableStaticBatching = !!i2847[9]
  i2846.enableDynamicBatching = !!i2847[10]
  i2846.usePreservativeDynamicBatching = !!i2847[11]
  i2846.lightmapEncodingQuality = i2847[12]
  i2846.desiredColorSpace = i2847[13]
  var i2855 = i2847[14]
  var i2854 = []
  for(var i = 0; i < i2855.length; i += 1) {
    i2854.push( i2855[i + 0] );
  }
  i2846.allTags = i2854
  return i2846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2859 = data
  i2858.name = i2859[0]
  i2858.value = i2859[1]
  return i2858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2863 = data
  i2862.id = i2863[0]
  i2862.name = i2863[1]
  i2862.value = i2863[2]
  return i2862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2867 = data
  i2866.id = i2867[0]
  i2866.name = i2867[1]
  return i2866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2869 = data
  i2868.fixedDeltaTime = i2869[0]
  i2868.maximumDeltaTime = i2869[1]
  i2868.timeScale = i2869[2]
  i2868.maximumParticleTimestep = i2869[3]
  return i2868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2871 = data
  i2870.gravity = new pc.Vec3( i2871[0], i2871[1], i2871[2] )
  i2870.defaultSolverIterations = i2871[3]
  i2870.bounceThreshold = i2871[4]
  i2870.autoSyncTransforms = !!i2871[5]
  i2870.autoSimulation = !!i2871[6]
  var i2873 = i2871[7]
  var i2872 = []
  for(var i = 0; i < i2873.length; i += 1) {
    i2872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2873[i + 0]) );
  }
  i2870.collisionMatrix = i2872
  return i2870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2877 = data
  i2876.enabled = !!i2877[0]
  i2876.layerId = i2877[1]
  i2876.otherLayerId = i2877[2]
  return i2876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2879 = data
  request.r(i2879[0], i2879[1], 0, i2878, 'material')
  i2878.gravity = new pc.Vec2( i2879[2], i2879[3] )
  i2878.positionIterations = i2879[4]
  i2878.velocityIterations = i2879[5]
  i2878.velocityThreshold = i2879[6]
  i2878.maxLinearCorrection = i2879[7]
  i2878.maxAngularCorrection = i2879[8]
  i2878.maxTranslationSpeed = i2879[9]
  i2878.maxRotationSpeed = i2879[10]
  i2878.baumgarteScale = i2879[11]
  i2878.baumgarteTOIScale = i2879[12]
  i2878.timeToSleep = i2879[13]
  i2878.linearSleepTolerance = i2879[14]
  i2878.angularSleepTolerance = i2879[15]
  i2878.defaultContactOffset = i2879[16]
  i2878.autoSimulation = !!i2879[17]
  i2878.queriesHitTriggers = !!i2879[18]
  i2878.queriesStartInColliders = !!i2879[19]
  i2878.callbacksOnDisable = !!i2879[20]
  i2878.reuseCollisionCallbacks = !!i2879[21]
  i2878.autoSyncTransforms = !!i2879[22]
  var i2881 = i2879[23]
  var i2880 = []
  for(var i = 0; i < i2881.length; i += 1) {
    i2880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2881[i + 0]) );
  }
  i2878.collisionMatrix = i2880
  return i2878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2885 = data
  i2884.enabled = !!i2885[0]
  i2884.layerId = i2885[1]
  i2884.otherLayerId = i2885[2]
  return i2884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2887 = data
  var i2889 = i2887[0]
  var i2888 = []
  for(var i = 0; i < i2889.length; i += 1) {
    i2888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2889[i + 0]) );
  }
  i2886.qualityLevels = i2888
  var i2891 = i2887[1]
  var i2890 = []
  for(var i = 0; i < i2891.length; i += 1) {
    i2890.push( i2891[i + 0] );
  }
  i2886.names = i2890
  i2886.shadows = i2887[2]
  i2886.anisotropicFiltering = i2887[3]
  i2886.antiAliasing = i2887[4]
  i2886.lodBias = i2887[5]
  i2886.shadowCascades = i2887[6]
  i2886.shadowDistance = i2887[7]
  i2886.shadowmaskMode = i2887[8]
  i2886.shadowProjection = i2887[9]
  i2886.shadowResolution = i2887[10]
  i2886.softParticles = !!i2887[11]
  i2886.softVegetation = !!i2887[12]
  i2886.activeColorSpace = i2887[13]
  i2886.desiredColorSpace = i2887[14]
  i2886.masterTextureLimit = i2887[15]
  i2886.maxQueuedFrames = i2887[16]
  i2886.particleRaycastBudget = i2887[17]
  i2886.pixelLightCount = i2887[18]
  i2886.realtimeReflectionProbes = !!i2887[19]
  i2886.shadowCascade2Split = i2887[20]
  i2886.shadowCascade4Split = new pc.Vec3( i2887[21], i2887[22], i2887[23] )
  i2886.streamingMipmapsActive = !!i2887[24]
  i2886.vSyncCount = i2887[25]
  i2886.asyncUploadBufferSize = i2887[26]
  i2886.asyncUploadTimeSlice = i2887[27]
  i2886.billboardsFaceCameraPosition = !!i2887[28]
  i2886.shadowNearPlaneOffset = i2887[29]
  i2886.streamingMipmapsMemoryBudget = i2887[30]
  i2886.maximumLODLevel = i2887[31]
  i2886.streamingMipmapsAddAllCameras = !!i2887[32]
  i2886.streamingMipmapsMaxLevelReduction = i2887[33]
  i2886.streamingMipmapsRenderersPerFrame = i2887[34]
  i2886.resolutionScalingFixedDPIFactor = i2887[35]
  i2886.streamingMipmapsMaxFileIORequests = i2887[36]
  i2886.currentQualityLevel = i2887[37]
  return i2886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2897 = data
  i2896.weight = i2897[0]
  i2896.vertices = i2897[1]
  i2896.normals = i2897[2]
  i2896.tangents = i2897[3]
  return i2896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings"] = function (request, data, root) {
  var i2898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings' )
  var i2899 = data
  i2898.Event = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i2899[0], i2898.Event)
  i2898.filterSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings', i2899[1], i2898.filterSettings)
  i2898.overrideMaterialId = i2899[2]
  i2898.overrideMaterialPassIndex = i2899[3]
  i2898.overrideShaderId = i2899[4]
  i2898.overrideShaderPassIndex = i2899[5]
  i2898.overrideMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i2899[6], i2898.overrideMode)
  i2898.overrideDepthState = !!i2899[7]
  i2898.depthCompareFunction = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i2899[8], i2898.depthCompareFunction)
  i2898.enableWrite = !!i2899[9]
  i2898.stencilSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.StencilStateData', i2899[10], i2898.stencilSettings)
  i2898.cameraSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings', i2899[11], i2898.cameraSettings)
  return i2898
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2900 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2901 = data
  i2900.xPlacement = i2901[0]
  i2900.yPlacement = i2901[1]
  i2900.xAdvance = i2901[2]
  i2900.yAdvance = i2901[3]
  return i2900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.EnumDescription"] = function (request, data, root) {
  var i2902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.EnumDescription' )
  var i2903 = data
  i2902.Value = i2903[0]
  return i2902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings"] = function (request, data, root) {
  var i2904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings' )
  var i2905 = data
  i2904.RenderQueueType = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i2905[0], i2904.RenderQueueType)
  i2904.LayerMask = i2905[1]
  var i2907 = i2905[2]
  var i2906 = []
  for(var i = 0; i < i2907.length; i += 1) {
    i2906.push( i2907[i + 0] );
  }
  i2904.PassNames = i2906
  return i2904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.StencilStateData"] = function (request, data, root) {
  var i2908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.StencilStateData' )
  var i2909 = data
  i2908.overrideStencilState = !!i2909[0]
  i2908.stencilReference = i2909[1]
  i2908.stencilCompareFunctionValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i2909[2], i2908.stencilCompareFunctionValue)
  i2908.passOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i2909[3], i2908.passOperationValue)
  i2908.failOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i2909[4], i2908.failOperationValue)
  i2908.zFailOperationValue = request.d('Luna.Unity.DTO.UnityEngine.Assets.EnumDescription', i2909[5], i2908.zFailOperationValue)
  return i2908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings"] = function (request, data, root) {
  var i2910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings' )
  var i2911 = data
  i2910.overrideCamera = !!i2911[0]
  i2910.restoreCamera = !!i2911[1]
  i2910.offset = new pc.Vec4( i2911[2], i2911[3], i2911[4], i2911[5] )
  i2910.cameraFieldOfView = i2911[6]
  return i2910
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsRenderingMode":0,"LightRenderingMode":1,"MainLightRenderingModeValue":2,"SupportsMainLightShadows":3,"MixedLightingSupported":4,"MainLightShadowmapResolutionValue":5,"SupportsSoftShadows":6,"SoftShadowQualityValue":7,"ShadowDistance":8,"ShadowCascadeCount":9,"Cascade2Split":10,"Cascade3Split":11,"Cascade4Split":13,"CascadeBorder":16,"ShadowDepthBias":17,"ShadowNormalBias":18,"RequireDepthTexture":19,"RequireOpaqueTexture":20,"scriptableRendererData":21},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ScriptableRendererData":{"opaqueLayerMask":0,"transparentLayerMask":1,"RenderObjectsFeatures":2,"name":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects":{"settings":0,"name":1,"typeName":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+RenderObjectsSettings":{"Event":0,"filterSettings":1,"overrideMaterialId":2,"overrideMaterialPassIndex":3,"overrideShaderId":4,"overrideShaderPassIndex":5,"overrideMode":6,"overrideDepthState":7,"depthCompareFunction":8,"enableWrite":9,"stencilSettings":10,"cameraSettings":11},"Luna.Unity.DTO.UnityEngine.Assets.EnumDescription":{"Value":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+FilterSettings":{"RenderQueueType":0,"LayerMask":1,"PassNames":2},"Luna.Unity.DTO.UnityEngine.Assets.StencilStateData":{"overrideStencilState":0,"stencilReference":1,"stencilCompareFunctionValue":2,"passOperationValue":3,"failOperationValue":4,"zFailOperationValue":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderObjects+CustomCameraSettings":{"overrideCamera":0,"restoreCamera":1,"offset":2,"cameraFieldOfView":6}}

Deserializers.requiredComponents = {"100":[101],"102":[101],"103":[101],"104":[101],"105":[101],"106":[101],"107":[108],"109":[9],"110":[111],"112":[111],"113":[111],"114":[111],"115":[111],"116":[111],"117":[111],"118":[119],"120":[119],"121":[119],"122":[119],"123":[119],"124":[119],"125":[119],"126":[119],"127":[119],"128":[119],"129":[119],"130":[119],"131":[119],"132":[9],"133":[3],"134":[135],"136":[135],"21":[20],"26":[25],"34":[36],"68":[20],"137":[9],"12":[9],"14":[13],"138":[139],"140":[20],"141":[20],"24":[21],"29":[28,20],"142":[20],"23":[21],"49":[20],"143":[20],"75":[20],"144":[20],"54":[20],"145":[20],"48":[20],"57":[20],"146":[20],"147":[28,20],"148":[20],"56":[20],"53":[20],"149":[20],"52":[28,20],"61":[20],"150":[151],"152":[151],"153":[151],"154":[151],"155":[9],"156":[9],"157":[139],"158":[151],"159":[21],"160":[20],"161":[3,20],"31":[20,28],"162":[20],"163":[28,20],"164":[3],"165":[28,20],"166":[20],"167":[139]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","Main","UnityEngine.GameObject","_Game.Configs.HexColorConfig","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasGroup","_Game.Packshot.PackshotController","UnityEngine.UI.Button","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Outline","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Sprite","_Game.Audio.SoundPlayer","UnityEngine.AudioClip","UnityEngine.AudioSource","_Game.Board.BoardController","_Game.Board.HexGridGenerator","_Game.Board.BoardOutline","_Game.Stacks.StackTrayController","_Game.Drag.DragController","_Game.Merge.MergeAnimator","_Game.Merge.MergeSystem","_Game.Tutorial.TutorialHandController","_Game.Flow.LevelFlowController","UnityEngine.Cubemap","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.Text","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.Font","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.MotionBlur","UnityEngine.Rendering.Universal.Vignette","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEditor.Rendering.Universal.AssetVersion","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","UnityEngine.InputSystem.UI.InputSystemUIInputModule","UnityEngine.InputSystem.UI.TrackedDeviceRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "test_3d";

Deserializers.lunaInitializationTime = "06/08/2026 18:53:06";

Deserializers.lunaDaysRunning = "0.8";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1629";

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

Deserializers.buildID = "baae3eb5-f89d-44b4-a5a8-d9e7f05bdcb4";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["UnityEngine","InputSystem","InputSystem","RunInitialUpdate"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[["UnityEngine","InputSystem","UI","InputSystemUIInputModule","ResetDefaultActions"],["UnityEngine","InputSystem","InputSystem","RunInitializeInPlayer"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

