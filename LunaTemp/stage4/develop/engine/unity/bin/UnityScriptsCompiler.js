if ( TRACE ) { TRACE( JSON.parse( '["_Game.Audio.SoundPlayer#init","_Game.Audio.SoundPlayer#Awake","_Game.Audio.SoundPlayer#OnDestroy","_Game.Audio.SoundPlayer#Initialize","_Game.Audio.SoundPlayer#PlayStackPickup","_Game.Audio.SoundPlayer#PlayStackDrop","_Game.Audio.SoundPlayer#PlayElementFlyToStack","_Game.Audio.SoundPlayer#PlayElementDisappear","_Game.Audio.SoundPlayer#PlayAllElementsDisappearComplete","_Game.Audio.SoundPlayer#OnDragStarted","_Game.Audio.SoundPlayer#Play","_Game.Audio.SoundPlayer#EnsureAudioSource","_Game.Audio.SoundPlayer#UnsubscribeFromDrag","_Game.Board.BoardController#DistanceXZ","_Game.Board.BoardController#Cells#get","_Game.Board.BoardController#IsBoardEmpty#get","_Game.Board.BoardController#init","_Game.Board.BoardController#InitializeDependencies","_Game.Board.BoardController#Initialize","_Game.Board.BoardController#BuildGrid","_Game.Board.BoardController#GetCell","_Game.Board.BoardController#GetNeighbours","_Game.Board.BoardController#IsCellEmpty","_Game.Board.BoardController#PlaceStack","_Game.Board.BoardController#PlaceStackView","_Game.Board.BoardController#ClearCell","_Game.Board.BoardController#GetCellView","_Game.Board.BoardController#GetStackView","_Game.Board.BoardController#GetCellUnderPointer","_Game.Board.BoardController#HighlightCell","_Game.Board.BoardController#ClearHighlights","_Game.Board.BoardController#CreateStackView","_Game.Board.BoardController#ClearChildren","_Game.Board.BoardController#EnsureBoardOutline","_Game.Board.BoardController#TryGetWorldPointOnBoardPlane","_Game.Board.BoardOutline#FlattenXZ","_Game.Board.BoardOutline#init","_Game.Board.BoardOutline#Rebuild","_Game.Board.BoardOutline#Clear","_Game.Board.BoardOutline#CreateMeshUnderlay","_Game.Board.BoardOutline#AddHexPrism","_Game.Board.BoardOutline#AddHexCap","_Game.Board.BoardOutline#AddQuad","_Game.Board.BoardOutline#SmoothNormalsByPosition","_Game.Board.BoardOutline#Quantize","_Game.Board.BoardOutline#FindSideIndex","_Game.Board.BoardOutline#CreateBorderSide","_Game.Board.BoardOutline#CreateLine","_Game.Board.BoardOutline#CreateLineMaterial","_Game.Board.BoardOutline#ApplyMaterialColor","_Game.Board.BoardOutline#FindLineShader","_Game.Board.BoardOutline#EnsureLineParent","_Game.Board.HexCell#IsEmpty#get","_Game.Board.HexCell#init","_Game.Board.HexCell#ctor","_Game.Board.HexCellHighlightSettings#init","_Game.Board.HexCellView#init","_Game.Board.HexCellView#init","_Game.Board.HexCellView#SetSoundPlayer","_Game.Board.HexCellView#Initialize","_Game.Board.HexCellView#ConfigureGeometry","_Game.Board.HexCellView#ConfigureHighlight","_Game.Board.HexCellView#GetCornerWorld","_Game.Board.HexCellView#SetStackView","_Game.Board.HexCellView#ClearStackView","_Game.Board.HexCellView#SetHighlight","_Game.Board.HexCellView#CacheRenderers","_Game.Board.HexCellView#ApplyMaterialTint","_Game.Board.HexCellView#RestoreMaterialColors","_Game.Board.HexCellView#EnsureHighlightOutline","_Game.Board.HexCellView#EnsureHighlightMaterial","_Game.Board.HexCellView#UpdateHighlightGeometry","_Game.Board.HexCellView#ApplyMaterialColor","_Game.Board.HexCellView#FindLineShader","_Game.Board.HexCellView#OnDestroy","_Game.Board.HexGridGenerator#GetFlatTopOffsetNeighbours","_Game.Board.HexGridGenerator#GetPointyTopOffsetNeighbours","_Game.Board.HexGridGenerator#GetAxialNeighbours","_Game.Board.HexGridGenerator#OffsetNeighbours","_Game.Board.HexGridGenerator#PositiveModulo","_Game.Board.HexGridGenerator#CompareCoordinates","_Game.Board.HexGridGenerator#Radius#get","_Game.Board.HexGridGenerator#Radius#set","_Game.Board.HexGridGenerator#CellSize#get","_Game.Board.HexGridGenerator#CellSize#set","_Game.Board.HexGridGenerator#Shape#get","_Game.Board.HexGridGenerator#Shape#set","_Game.Board.HexGridGenerator#CustomBaseShape#get","_Game.Board.HexGridGenerator#CustomBaseShape#set","_Game.Board.HexGridGenerator#Orientation#get","_Game.Board.HexGridGenerator#Orientation#set","_Game.Board.HexGridGenerator#CustomCoordinates#get","_Game.Board.HexGridGenerator#init","_Game.Board.HexGridGenerator#OnValidate","_Game.Board.HexGridGenerator#GenerateCoordinates","_Game.Board.HexGridGenerator#CoordinateToWorld","_Game.Board.HexGridGenerator#GetNeighbourCoordinates","_Game.Board.HexGridGenerator#ContainsCustomCoordinate","_Game.Board.HexGridGenerator#SetCustomCoordinates","_Game.Board.HexGridGenerator#AddCustomCoordinate","_Game.Board.HexGridGenerator#RemoveCustomCoordinate","_Game.Board.HexGridGenerator#GetLayoutShape","_Game.Board.HexGridGenerator#GenerateSquareCoordinates","_Game.Board.HexGridGenerator#GenerateHexagonCoordinates","_Game.Board.HexGridGenerator#GenerateCustomCoordinates","_Game.Board.HexGridGenerator#FlatTopOffsetToWorld","_Game.Board.HexGridGenerator#PointyTopOffsetToWorld","_Game.Board.HexGridGenerator#FlatTopAxialToWorld","_Game.Board.HexGridGenerator#PointyTopAxialToWorld","_Game.Configs.HexColorConfig#GetFallbackColor","_Game.Configs.HexColorConfig#init","_Game.Configs.HexColorConfig#GetColor","_Game.Configs.HexColorConfig#GetMaterial","_Game.Configs.HexColorConfig.Entry#init","_Game.Configs.LevelConfig#init","_Game.Configs.LevelConfig.BoardStackDefinition#init","_Game.Configs.LevelConfig.StackDefinition#init","_Game.Configs.LevelConfig.StackDefinition#CreateStack","_Game.DI.GameAssets#ctor","_Game.Drag.DragController#TryGetWorldPointOnPlane","_Game.Drag.DragController#IsDragging#get","_Game.Drag.DragController#init","_Game.Drag.DragController#Initialize","_Game.Drag.DragController#SetInputEnabled","_Game.Drag.DragController#Update","_Game.Drag.DragController#TryBeginDrag","_Game.Drag.DragController#UpdateDrag","_Game.Drag.DragController#EndDrag","_Game.Drag.DragController#TryGetPointerDown","_Game.Drag.DragController#TryGetPointerPosition","_Game.Drag.DragController#TryGetPointerUp","_Game.Flow.LevelFlowController#WasPointerPressedThisFrame","_Game.Flow.LevelFlowController#init","_Game.Flow.LevelFlowController#Initialize","_Game.Flow.LevelFlowController#StartLevelFlow","_Game.Flow.LevelFlowController#OnDestroy","_Game.Flow.LevelFlowController#StartLevel","_Game.Flow.LevelFlowController#Update","_Game.Flow.LevelFlowController#OnDragStarted","_Game.Flow.LevelFlowController#OnDragFailed","_Game.Flow.LevelFlowController#OnStackPlaced","_Game.Flow.LevelFlowController#HandleStackPlaced","_Game.Flow.LevelFlowController#SetState","_Game.Flow.LevelFlowController#UnsubscribeFromDrag","_Game.Merge.MergeAnimator#ApplyEffectColor","_Game.Merge.MergeAnimator#BaseMoveDuration#get","_Game.Merge.MergeAnimator#BaseMoveDuration#set","_Game.Merge.MergeAnimator#BaseDisappearDuration#get","_Game.Merge.MergeAnimator#BaseDisappearDuration#set","_Game.Merge.MergeAnimator#SpeedIncreasePerStep#get","_Game.Merge.MergeAnimator#SpeedIncreasePerStep#set","_Game.Merge.MergeAnimator#MaxSpeedMultiplier#get","_Game.Merge.MergeAnimator#MaxSpeedMultiplier#set","_Game.Merge.MergeAnimator#init","_Game.Merge.MergeAnimator#ResetSpeed","_Game.Merge.MergeAnimator#Initialize","_Game.Merge.MergeAnimator#AnimateMove","_Game.Merge.MergeAnimator#AnimateDisappear","_Game.Merge.MergeAnimator#AnimateDisappear$1","_Game.Merge.MergeAnimator#GetDisappearEffectPosition","_Game.Merge.MergeAnimator#SpawnDisappearEffect","_Game.Merge.MergeAnimator#PlayElementFlyToStackSound","_Game.Merge.MergeAnimator#PlayElementDisappearSound","_Game.Merge.MergeAnimator#PlayAllElementsDisappearCompleteSound","_Game.Merge.MergeAnimator#GetDuration","_Game.Merge.MergeAnimator#CurrentSpeedMultiplier","_Game.Merge.MergeAnimator#AdvanceSpeed","_Game.Merge.MergeAnimator#CreateSmartFlipTween","_Game.Merge.MergeSystem#init","_Game.Merge.MergeSystem#RemoveCell","_Game.Merge.MergeSystem#ContainsCell","_Game.Merge.MergeSystem#CompareCellsByCoordinate","_Game.Merge.MergeSystem#StackLabel","_Game.Merge.MergeSystem#ColorsMatch","_Game.Merge.MergeSystem#DirectionLabel","_Game.Merge.MergeSystem#init","_Game.Merge.MergeSystem#Initialize","_Game.Merge.MergeSystem#RunMerge","_Game.Merge.MergeSystem#ProcessMergeStep","_Game.Merge.MergeSystem#ResolveClears","_Game.Merge.MergeSystem#SelectNextMergeTarget","_Game.Merge.MergeSystem#FindAnyMergeCandidate","_Game.Merge.MergeSystem#IsMergeCandidate","_Game.Merge.MergeSystem#CanClearTop","_Game.Merge.MergeSystem#DequeueNextMergeCandidate","_Game.Merge.MergeSystem#EnqueueCellAndNeighbours","_Game.Merge.MergeSystem#EnqueueCell","_Game.Merge.MergeSystem#ClearCellAndDestroyStackView","_Game.Merge.MergeSystem#FindMatchingNeighbour","_Game.Merge.MergeSystem#GetCellsInStableOrder","_Game.Merge.MergeSystem#GetNeighboursInStableOrder","_Game.Merge.MergeSystem#GetMatchingNeighboursInStableOrder","_Game.Merge.MergeSystem#ContainsNeighbour","_Game.Merge.MergeSystem#SortNeighboursForTarget","_Game.Merge.MergeSystem#CompareNeighboursForTarget","_Game.Merge.MergeSystem#GetDirectionPriority","_Game.Merge.MergeSystem#CellLabel","_Game.Merge.MergeSystem#DumpBoardState","_Game.Merge.MergeSystem#LogMerge","_Game.Packshot.PackshotController#init","_Game.Packshot.PackshotController#Initialize","_Game.Packshot.PackshotController#Show","_Game.Packshot.PackshotController#Hide","_Game.Stacks.HexPiece#ctor","_Game.Stacks.HexPieceView#CreateRuntimeMaterial","_Game.Stacks.HexPieceView#ApplyMaterialColor","_Game.Stacks.HexPieceView#Initialize","_Game.Stacks.HexStack#Pieces#get","_Game.Stacks.HexStack#Count#get","_Game.Stacks.HexStack#IsEmpty#get","_Game.Stacks.HexStack#TopColor#get","_Game.Stacks.HexStack#init","_Game.Stacks.HexStack#ctor","_Game.Stacks.HexStack#$ctor1","_Game.Stacks.HexStack#CountTopSameColor","_Game.Stacks.HexStack#PopTop","_Game.Stacks.HexStack#Push","_Game.Stacks.HexStack#PopTopSameColor","_Game.Stacks.HexStack#RemoveTopPieces","_Game.Stacks.HexStackView#HeightOffset#get","_Game.Stacks.HexStackView#VisualCount#get","_Game.Stacks.HexStackView#init","_Game.Stacks.HexStackView#Initialize","_Game.Stacks.HexStackView#GetTopPosition","_Game.Stacks.HexStackView#AddVisualHexOnTop","_Game.Stacks.HexStackView#AttachVisualHexOnTop","_Game.Stacks.HexStackView#DetachTopVisualHex","_Game.Stacks.HexStackView#DetachTopVisualHexes","_Game.Stacks.HexStackView#RemoveTopVisualHexes","_Game.Stacks.HexStackView#Rebuild","_Game.Stacks.HexStackView#SnapVisualsToStack","_Game.Stacks.HexStackView#CreatePieceView","_Game.Stacks.StackTrayController#DistanceXZ","_Game.Stacks.StackTrayController#RemainingStacks#get","_Game.Stacks.StackTrayController#StackViews#get","_Game.Stacks.StackTrayController#init","_Game.Stacks.StackTrayController#SetBoard","_Game.Stacks.StackTrayController#Initialize","_Game.Stacks.StackTrayController#GetStackUnderPointer","_Game.Stacks.StackTrayController#GetHomePosition","_Game.Stacks.StackTrayController#RemoveStack","_Game.Stacks.StackTrayController#Clear","_Game.Stacks.StackTrayController#TryGetWorldPointOnTrayPlane","_Game.Tutorial.TutorialHandController#InactivityDelayBeforeTutorialRestart#get","_Game.Tutorial.TutorialHandController#InactivityDelayBeforeTutorialRestart#set","_Game.Tutorial.TutorialHandController#HandMoveDuration#get","_Game.Tutorial.TutorialHandController#HandMoveDuration#set","_Game.Tutorial.TutorialHandController#init","_Game.Tutorial.TutorialHandController#Initialize","_Game.Tutorial.TutorialHandController#SetTargets","_Game.Tutorial.TutorialHandController#Show","_Game.Tutorial.TutorialHandController#Hide","_Game.Tutorial.TutorialHandController#Complete","_Game.Tutorial.TutorialHandController#RestartAfterInactivity","_Game.Tutorial.TutorialHandController#Update","_Game.Tutorial.TutorialHandController#PlayLoop","_Game.Tutorial.TutorialHandController#WorldToCanvasAnchoredPosition","_Game.Tutorial.TutorialHandController#EnsureOverlayCanvas","_Game.Tutorial.TutorialHandController#EnsureHandImage","_Game.Tutorial.TutorialHandController#SetVisualVisible","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor","DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor","DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor","DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor","DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor","DG.Tweening.DOTweenModuleAudio#DOFade","DG.Tweening.DOTweenModuleAudio#DOPitch","DG.Tweening.DOTweenModuleAudio#DOSetFloat","DG.Tweening.DOTweenModuleAudio#DOComplete","DG.Tweening.DOTweenModuleAudio#DOKill","DG.Tweening.DOTweenModuleAudio#DOFlip","DG.Tweening.DOTweenModuleAudio#DOGoto","DG.Tweening.DOTweenModuleAudio#DOPause","DG.Tweening.DOTweenModuleAudio#DOPlay","DG.Tweening.DOTweenModuleAudio#DOPlayBackwards","DG.Tweening.DOTweenModuleAudio#DOPlayForward","DG.Tweening.DOTweenModuleAudio#DORestart","DG.Tweening.DOTweenModuleAudio#DORewind","DG.Tweening.DOTweenModuleAudio#DOSmoothRewind","DG.Tweening.DOTweenModuleAudio#DOTogglePause","DG.Tweening.DOTweenModulePhysics#DOMove","DG.Tweening.DOTweenModulePhysics#DOMoveX","DG.Tweening.DOTweenModulePhysics#DOMoveY","DG.Tweening.DOTweenModulePhysics#DOMoveZ","DG.Tweening.DOTweenModulePhysics#DORotate","DG.Tweening.DOTweenModulePhysics#DOLookAt","DG.Tweening.DOTweenModulePhysics#DOJump","DG.Tweening.DOTweenModulePhysics#DOPath","DG.Tweening.DOTweenModulePhysics#DOPath$1","DG.Tweening.DOTweenModulePhysics#DOLocalPath","DG.Tweening.DOTweenModulePhysics#DOLocalPath$1","DG.Tweening.DOTweenModulePhysics2D#DOMove","DG.Tweening.DOTweenModulePhysics2D#DOMoveX","DG.Tweening.DOTweenModulePhysics2D#DOMoveY","DG.Tweening.DOTweenModulePhysics2D#DORotate","DG.Tweening.DOTweenModulePhysics2D#DOJump","DG.Tweening.DOTweenModulePhysics2D#DOPath","DG.Tweening.DOTweenModulePhysics2D#DOPath$1","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1","DG.Tweening.DOTweenModuleSprite#DOColor","DG.Tweening.DOTweenModuleSprite#DOFade","DG.Tweening.DOTweenModuleSprite#DOGradientColor","DG.Tweening.DOTweenModuleSprite#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOFade","DG.Tweening.DOTweenModuleUI#DOFade$1","DG.Tweening.DOTweenModuleUI#DOFade$2","DG.Tweening.DOTweenModuleUI#DOFade$3","DG.Tweening.DOTweenModuleUI#DOFade$4","DG.Tweening.DOTweenModuleUI#DOColor","DG.Tweening.DOTweenModuleUI#DOColor$1","DG.Tweening.DOTweenModuleUI#DOColor$2","DG.Tweening.DOTweenModuleUI#DOColor$3","DG.Tweening.DOTweenModuleUI#DOFillAmount","DG.Tweening.DOTweenModuleUI#DOGradientColor","DG.Tweening.DOTweenModuleUI#DOFlexibleSize","DG.Tweening.DOTweenModuleUI#DOMinSize","DG.Tweening.DOTweenModuleUI#DOPreferredSize","DG.Tweening.DOTweenModuleUI#DOScale","DG.Tweening.DOTweenModuleUI#DOAnchorPos","DG.Tweening.DOTweenModuleUI#DOAnchorPosX","DG.Tweening.DOTweenModuleUI#DOAnchorPosY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3D","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ","DG.Tweening.DOTweenModuleUI#DOAnchorMax","DG.Tweening.DOTweenModuleUI#DOAnchorMin","DG.Tweening.DOTweenModuleUI#DOPivot","DG.Tweening.DOTweenModuleUI#DOPivotX","DG.Tweening.DOTweenModuleUI#DOPivotY","DG.Tweening.DOTweenModuleUI#DOSizeDelta","DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1","DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos","DG.Tweening.DOTweenModuleUI#DONormalizedPos","DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOValue","DG.Tweening.DOTweenModuleUI#DOCounter","DG.Tweening.DOTweenModuleUI#DOText","DG.Tweening.DOTweenModuleUI#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOBlendableColor$1","DG.Tweening.DOTweenModuleUI#DOBlendableColor$2","DG.Tweening.DOTweenModuleUI#DOShapeCircle","DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1","DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion","DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind","DG.Tweening.DOTweenModuleUnityVersion#WaitForKill","DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops","DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition","DG.Tweening.DOTweenModuleUnityVersion#WaitForStart","DG.Tweening.DOTweenModuleUnityVersion#DOOffset","DG.Tweening.DOTweenModuleUnityVersion#DOTiling","DG.Tweening.DOTweenModuleUtils#Init","DG.Tweening.DOTweenModuleUtils#Preserver","DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody","DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween","Main#init","Main#LoadTutorialHandSprite","Main#Place","Main#CreateBoardStack","Main#CreateStack","Main#init","Main#Reset","Main#Start","Main#BuildPrototypeScene","Main#SetupCamera","Main#EnsureRuntimeRoot","Main#InitializeRuntimeDependencies","Main#FindSceneComponent","Main#ResolveSceneComponent","Main#ResolveHexPiecePrefab","Main#ResolveHexCellPrefab","Main#PlaceStartingBoardStacks","Main#CreateTrayStacks","Main#EnsureDefaultLevelData","Main#EnsureLevelLists"]' ) ); }
/**
 * @version 1.0.9656.32544
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*_Game.Audio.SoundPlayer start.*/
    Bridge.define("_Game.Audio.SoundPlayer", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            stackPickupClip: null,
            stackDropClip: null,
            elementFlyToStackClip: null,
            elementDisappearClip: null,
            allElementsDisappearCompleteClip: null,
            masterVolume: 0,
            stackPickupVolume: 0,
            stackDropVolume: 0,
            elementFlyToStackVolume: 0,
            elementDisappearVolume: 0,
            allElementsDisappearCompleteVolume: 0,
            audioSource: null,
            subscribedDrag: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Game.Audio.SoundPlayer#init", this ); }

                this.masterVolume = 1.0;
                this.stackPickupVolume = 1.0;
                this.stackDropVolume = 1.0;
                this.elementFlyToStackVolume = 1.0;
                this.elementDisappearVolume = 1.0;
                this.allElementsDisappearCompleteVolume = 1.0;
            }
        },
        methods: {
            /*_Game.Audio.SoundPlayer.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "_Game.Audio.SoundPlayer#Awake", this ); }

                this.EnsureAudioSource();
            },
            /*_Game.Audio.SoundPlayer.Awake end.*/

            /*_Game.Audio.SoundPlayer.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "_Game.Audio.SoundPlayer#OnDestroy", this ); }

                this.UnsubscribeFromDrag();
            },
            /*_Game.Audio.SoundPlayer.OnDestroy end.*/

            /*_Game.Audio.SoundPlayer.Initialize start.*/
            Initialize: function (drag) {
if ( TRACE ) { TRACE( "_Game.Audio.SoundPlayer#Initialize", this ); }

                this.EnsureAudioSource();

                if (UnityEngine.MonoBehaviour.op_Equality(this.subscribedDrag, drag)) {
                    return;
                }

                this.UnsubscribeFromDrag();
                this.subscribedDrag = drag;
                if (UnityEngine.MonoBehaviour.op_Inequality(this.subscribedDrag, null)) {
                    this.subscribedDrag.addDragStarted(Bridge.fn.cacheBind(this, this.OnDragStarted));
                }
            },
            /*_Game.Audio.SoundPlayer.Initialize end.*/

            /*_Game.Audio.SoundPlayer.PlayStackPickup start.*/
            PlayStackPickup: function () {
if ( TRACE ) { TRACE( "_Game.Audio.SoundPlayer#PlayStackPickup", this ); }

                this.Play(this.stackPickupClip, this.stackPickupVolume);
            },
            /*_Game.Audio.SoundPlayer.PlayStackPickup end.*/

            /*_Game.Audio.SoundPlayer.PlayStackDrop start.*/
            PlayStackDrop: function () {
if ( TRACE ) { TRACE( "_Game.Audio.SoundPlayer#PlayStackDrop", this ); }

                this.Play(this.stackDropClip, this.stackDropVolume);
            },
            /*_Game.Audio.SoundPlayer.PlayStackDrop end.*/

            /*_Game.Audio.SoundPlayer.PlayElementFlyToStack start.*/
            PlayElementFlyToStack: function () {
if ( TRACE ) { TRACE( "_Game.Audio.SoundPlayer#PlayElementFlyToStack", this ); }

                this.Play(this.elementFlyToStackClip, this.elementFlyToStackVolume);
            },
            /*_Game.Audio.SoundPlayer.PlayElementFlyToStack end.*/

            /*_Game.Audio.SoundPlayer.PlayElementDisappear start.*/
            PlayElementDisappear: function () {
if ( TRACE ) { TRACE( "_Game.Audio.SoundPlayer#PlayElementDisappear", this ); }

                this.Play(this.elementDisappearClip, this.elementDisappearVolume);
            },
            /*_Game.Audio.SoundPlayer.PlayElementDisappear end.*/

            /*_Game.Audio.SoundPlayer.PlayAllElementsDisappearComplete start.*/
            PlayAllElementsDisappearComplete: function () {
if ( TRACE ) { TRACE( "_Game.Audio.SoundPlayer#PlayAllElementsDisappearComplete", this ); }

                this.Play(this.allElementsDisappearCompleteClip, this.allElementsDisappearCompleteVolume);
            },
            /*_Game.Audio.SoundPlayer.PlayAllElementsDisappearComplete end.*/

            /*_Game.Audio.SoundPlayer.OnDragStarted start.*/
            OnDragStarted: function (stackView) {
if ( TRACE ) { TRACE( "_Game.Audio.SoundPlayer#OnDragStarted", this ); }

                this.PlayStackPickup();
            },
            /*_Game.Audio.SoundPlayer.OnDragStarted end.*/

            /*_Game.Audio.SoundPlayer.Play start.*/
            Play: function (clip, volume) {
if ( TRACE ) { TRACE( "_Game.Audio.SoundPlayer#Play", this ); }

                if (clip == null) {
                    return;
                }

                this.EnsureAudioSource();
                if (UnityEngine.Component.op_Inequality(this.audioSource, null)) {
                    this.audioSource.PlayOneShot$1(clip, Math.max(0, Math.min(1, this.masterVolume * volume)));
                }
            },
            /*_Game.Audio.SoundPlayer.Play end.*/

            /*_Game.Audio.SoundPlayer.EnsureAudioSource start.*/
            EnsureAudioSource: function () {
if ( TRACE ) { TRACE( "_Game.Audio.SoundPlayer#EnsureAudioSource", this ); }

                if (UnityEngine.Component.op_Equality(this.audioSource, null)) {
                    this.audioSource = this.GetComponent(UnityEngine.AudioSource);
                }
                if (UnityEngine.Component.op_Equality(this.audioSource, null)) {
                    this.audioSource = this.gameObject.AddComponent(UnityEngine.AudioSource);
                }
                if (UnityEngine.Component.op_Inequality(this.audioSource, null)) {
                    this.audioSource.playOnAwake = false;
                }
            },
            /*_Game.Audio.SoundPlayer.EnsureAudioSource end.*/

            /*_Game.Audio.SoundPlayer.UnsubscribeFromDrag start.*/
            UnsubscribeFromDrag: function () {
if ( TRACE ) { TRACE( "_Game.Audio.SoundPlayer#UnsubscribeFromDrag", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.subscribedDrag, null)) {
                    this.subscribedDrag.removeDragStarted(Bridge.fn.cacheBind(this, this.OnDragStarted));
                    this.subscribedDrag = null;
                }
            },
            /*_Game.Audio.SoundPlayer.UnsubscribeFromDrag end.*/


        }
    });
    /*_Game.Audio.SoundPlayer end.*/

    /*_Game.Board.BoardController start.*/
    Bridge.define("_Game.Board.BoardController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*_Game.Board.BoardController.DistanceXZ:static start.*/
                DistanceXZ: function (a, b) {
if ( TRACE ) { TRACE( "_Game.Board.BoardController#DistanceXZ", this ); }

                    return new pc.Vec2( a.x, a.z ).sub( new pc.Vec2( b.x, b.z ) ).length();
                },
                /*_Game.Board.BoardController.DistanceXZ:static end.*/


            }
        },
        fields: {
            pointerCellRadius: 0,
            cells: null,
            views: null,
            viewsByCoordinate: null,
            gridGenerator: null,
            boardOutline: null,
            assets: null,
            inputCamera: null,
            cellHighlightSettings: null,
            soundPlayer: null
        },
        props: {
            Cells: {
                get: function () {
if ( TRACE ) { TRACE( "_Game.Board.BoardController#Cells#get", this ); }

                    return this.cells.Values;
                }
            },
            IsBoardEmpty: {
                get: function () {
if ( TRACE ) { TRACE( "_Game.Board.BoardController#IsBoardEmpty#get", this ); }

                    var $t;
                    $t = Bridge.getEnumerator(this.cells.Values);
                    try {
                        while ($t.moveNext()) {
                            var cell = $t.Current;
                            if (cell != null && !cell.IsEmpty) {
                                return false;
                            }
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }

                    return true;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Game.Board.BoardController#init", this ); }

                this.pointerCellRadius = 0.85;
                this.cells = new (System.Collections.Generic.Dictionary$2(UnityEngine.Vector2Int,_Game.Board.HexCell)).ctor();
                this.views = new (System.Collections.Generic.Dictionary$2(_Game.Board.HexCell,_Game.Board.HexCellView)).ctor();
                this.viewsByCoordinate = new (System.Collections.Generic.Dictionary$2(UnityEngine.Vector2Int,_Game.Board.HexCellView)).ctor();
            }
        },
        methods: {
            /*_Game.Board.BoardController.InitializeDependencies start.*/
            InitializeDependencies: function (assets, inputCamera, cellHighlightSettings, soundPlayer) {
if ( TRACE ) { TRACE( "_Game.Board.BoardController#InitializeDependencies", this ); }

                this.assets = assets;
                this.inputCamera = inputCamera;
                this.cellHighlightSettings = cellHighlightSettings;
                this.soundPlayer = soundPlayer;
            },
            /*_Game.Board.BoardController.InitializeDependencies end.*/

            /*_Game.Board.BoardController.Initialize start.*/
            Initialize: function (radius) {
if ( TRACE ) { TRACE( "_Game.Board.BoardController#Initialize", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.gridGenerator, null)) {
                    this.gridGenerator = this.GetComponent(_Game.Board.HexGridGenerator);
                }
                if (UnityEngine.MonoBehaviour.op_Equality(this.gridGenerator, null)) {
                    this.gridGenerator = this.gameObject.AddComponent(_Game.Board.HexGridGenerator);
                }
                this.EnsureBoardOutline();
                this.gridGenerator.Radius = radius;

                this.BuildGrid();
            },
            /*_Game.Board.BoardController.Initialize end.*/

            /*_Game.Board.BoardController.BuildGrid start.*/
            BuildGrid: function () {
if ( TRACE ) { TRACE( "_Game.Board.BoardController#BuildGrid", this ); }

                var $t;
                this.ClearChildren();
                this.cells.clear();
                this.views.clear();
                this.viewsByCoordinate.clear();
                this.EnsureBoardOutline();

                $t = Bridge.getEnumerator(this.gridGenerator.GenerateCoordinates());
                try {
                    while ($t.moveNext()) {
                        var coordinate = $t.Current.$clone();
                        var cell = new _Game.Board.HexCell(coordinate.$clone());
                        this.cells.add(coordinate.$clone(), cell);

                        var cellObject = this.assets != null && UnityEngine.GameObject.op_Inequality(this.assets.HexCellPrefab, null) ? UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.assets.HexCellPrefab) : new UnityEngine.GameObject.$ctor2("MissingCellPrefab");
                        cellObject.name = "Cell_" + coordinate.x + "_" + coordinate.y;
                        cellObject.transform.SetParent(this.transform, false);
                        cellObject.transform.localPosition = this.gridGenerator.CoordinateToWorld(coordinate);
                        var view = cellObject.GetComponent(_Game.Board.HexCellView);
                        if (UnityEngine.MonoBehaviour.op_Equality(view, null)) {
                            view = cellObject.AddComponent(_Game.Board.HexCellView);
                        }
                        view.SetSoundPlayer(this.soundPlayer);
                        view.ConfigureHighlight(this.cellHighlightSettings);
                        view.ConfigureGeometry(this.gridGenerator.CellSize, this.gridGenerator.Orientation);
                        view.Initialize(cell);
                        this.views.add(cell, view);
                        this.viewsByCoordinate.add(coordinate.$clone(), view);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                this.boardOutline.Rebuild(this.viewsByCoordinate);
            },
            /*_Game.Board.BoardController.BuildGrid end.*/

            /*_Game.Board.BoardController.GetCell start.*/
            GetCell: function (coordinate) {
if ( TRACE ) { TRACE( "_Game.Board.BoardController#GetCell", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.cells.Values);
                try {
                    while ($t.moveNext()) {
                        var cell = $t.Current;
                        if (cell != null && cell.coordinate.x === coordinate.x && cell.coordinate.y === coordinate.y) {
                            return cell;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                return null;
            },
            /*_Game.Board.BoardController.GetCell end.*/

            /*_Game.Board.BoardController.GetNeighbours start.*/
            GetNeighbours: function (cell) {
if ( TRACE ) { TRACE( "_Game.Board.BoardController#GetNeighbours", this ); }

                var $t;
                var neighbours = new (System.Collections.Generic.List$1(_Game.Board.HexCell)).ctor();
                if (cell == null) {
                    return neighbours;
                }

                $t = Bridge.getEnumerator(this.gridGenerator.GetNeighbourCoordinates(cell.coordinate));
                try {
                    while ($t.moveNext()) {
                        var coordinate = $t.Current.$clone();
                        var neighbour = this.GetCell(coordinate);
                        if (neighbour != null) {
                            neighbours.add(neighbour);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                return neighbours;
            },
            /*_Game.Board.BoardController.GetNeighbours end.*/

            /*_Game.Board.BoardController.IsCellEmpty start.*/
            IsCellEmpty: function (cell) {
if ( TRACE ) { TRACE( "_Game.Board.BoardController#IsCellEmpty", this ); }

                return cell != null && cell.IsEmpty;
            },
            /*_Game.Board.BoardController.IsCellEmpty end.*/

            /*_Game.Board.BoardController.PlaceStack start.*/
            PlaceStack: function (cell, stack) {
if ( TRACE ) { TRACE( "_Game.Board.BoardController#PlaceStack", this ); }

                if (cell == null) {
                    return;
                }

                cell.stack = stack;
            },
            /*_Game.Board.BoardController.PlaceStack end.*/

            /*_Game.Board.BoardController.PlaceStackView start.*/
            PlaceStackView: function (cell, stackView, playDropSound) {
if ( TRACE ) { TRACE( "_Game.Board.BoardController#PlaceStackView", this ); }

                if (playDropSound === void 0) { playDropSound = false; }
                var view = { };
                if (cell == null || UnityEngine.MonoBehaviour.op_Equality(stackView, null) || !this.views.tryGetValue(cell, view)) {
                    return;
                }

                view.v.SetStackView(stackView, playDropSound);
                stackView.transform.position = view.v.transform.position.$clone().add( pc.Vec3.UP.clone().clone().scale( 0.08 ) );
            },
            /*_Game.Board.BoardController.PlaceStackView end.*/

            /*_Game.Board.BoardController.ClearCell start.*/
            ClearCell: function (cell) {
if ( TRACE ) { TRACE( "_Game.Board.BoardController#ClearCell", this ); }

                if (cell == null) {
                    return;
                }

                cell.stack = null;
                var view = { };
                if (this.views.tryGetValue(cell, view)) {
                    view.v.ClearStackView();
                }
            },
            /*_Game.Board.BoardController.ClearCell end.*/

            /*_Game.Board.BoardController.GetCellView start.*/
            GetCellView: function (cell) {
if ( TRACE ) { TRACE( "_Game.Board.BoardController#GetCellView", this ); }

                if (cell == null) {
                    return null;
                }
                var view = { };

                this.views.tryGetValue(cell, view);
                return view.v;
            },
            /*_Game.Board.BoardController.GetCellView end.*/

            /*_Game.Board.BoardController.GetStackView start.*/
            GetStackView: function (cell) {
if ( TRACE ) { TRACE( "_Game.Board.BoardController#GetStackView", this ); }

                var view = this.GetCellView(cell);
                return UnityEngine.MonoBehaviour.op_Inequality(view, null) ? view.StackView : null;
            },
            /*_Game.Board.BoardController.GetStackView end.*/

            /*_Game.Board.BoardController.GetCellUnderPointer start.*/
            GetCellUnderPointer: function (screenPosition) {
if ( TRACE ) { TRACE( "_Game.Board.BoardController#GetCellUnderPointer", this ); }

                var $t;
                var cam = UnityEngine.Component.op_Inequality(this.inputCamera, null) ? this.inputCamera : UnityEngine.Camera.main;
                if (UnityEngine.Component.op_Equality(cam, null)) {
                    return null;
                }
                var world = { v : new UnityEngine.Vector3() };

                if (!this.TryGetWorldPointOnBoardPlane(cam, screenPosition, world)) {
                    return null;
                }

                var bestCell = null;
                var bestDistance = 3.40282347E+38;
                $t = Bridge.getEnumerator(this.views);
                try {
                    while ($t.moveNext()) {
                        var pair = $t.Current;
                        var distance = _Game.Board.BoardController.DistanceXZ(world.v, pair.value.transform.position);
                        if (distance < bestDistance) {
                            bestDistance = distance;
                            bestCell = pair.key;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                return bestDistance <= this.pointerCellRadius ? bestCell : null;
            },
            /*_Game.Board.BoardController.GetCellUnderPointer end.*/

            /*_Game.Board.BoardController.HighlightCell start.*/
            HighlightCell: function (cell, active, valid) {
if ( TRACE ) { TRACE( "_Game.Board.BoardController#HighlightCell", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.views.Values);
                try {
                    while ($t.moveNext()) {
                        var view = $t.Current;
                        view.SetHighlight(false, false);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                var cellView = { };

                if (cell != null && this.views.tryGetValue(cell, cellView)) {
                    cellView.v.SetHighlight(active, valid);
                }
            },
            /*_Game.Board.BoardController.HighlightCell end.*/

            /*_Game.Board.BoardController.ClearHighlights start.*/
            ClearHighlights: function () {
if ( TRACE ) { TRACE( "_Game.Board.BoardController#ClearHighlights", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.views.Values);
                try {
                    while ($t.moveNext()) {
                        var view = $t.Current;
                        view.SetHighlight(false, false);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*_Game.Board.BoardController.ClearHighlights end.*/

            /*_Game.Board.BoardController.CreateStackView start.*/
            CreateStackView: function (stack, parent, position) {
if ( TRACE ) { TRACE( "_Game.Board.BoardController#CreateStackView", this ); }

                var stackObject = new UnityEngine.GameObject.$ctor2("HexStackView");
                stackObject.transform.SetParent(parent, true);
                stackObject.transform.position = position.$clone();
                var view = stackObject.AddComponent(_Game.Stacks.HexStackView);
                view.Initialize(stack, this.assets);
                return view;
            },
            /*_Game.Board.BoardController.CreateStackView end.*/

            /*_Game.Board.BoardController.ClearChildren start.*/
            ClearChildren: function () {
if ( TRACE ) { TRACE( "_Game.Board.BoardController#ClearChildren", this ); }

                for (var i = (this.transform.childCount - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    var child = this.transform.GetChild(i).gameObject;
                    if (UnityEngine.Application.isPlaying) {
                        UnityEngine.MonoBehaviour.Destroy(child);
                    } else {
                        UnityEngine.Object.DestroyImmediate(child);
                    }
                }
            },
            /*_Game.Board.BoardController.ClearChildren end.*/

            /*_Game.Board.BoardController.EnsureBoardOutline start.*/
            EnsureBoardOutline: function () {
if ( TRACE ) { TRACE( "_Game.Board.BoardController#EnsureBoardOutline", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.boardOutline, null)) {
                    this.boardOutline = this.GetComponent(_Game.Board.BoardOutline);
                }
                if (UnityEngine.MonoBehaviour.op_Equality(this.boardOutline, null)) {
                    this.boardOutline = this.gameObject.AddComponent(_Game.Board.BoardOutline);
                }
            },
            /*_Game.Board.BoardController.EnsureBoardOutline end.*/

            /*_Game.Board.BoardController.TryGetWorldPointOnBoardPlane start.*/
            TryGetWorldPointOnBoardPlane: function (cam, screenPosition, world) {
if ( TRACE ) { TRACE( "_Game.Board.BoardController#TryGetWorldPointOnBoardPlane", this ); }

                world.v = Bridge.getDefaultValue(UnityEngine.Vector3);
                var ray = cam.ScreenPointToRay(UnityEngine.Vector3.FromVector2(screenPosition));
                var plane = new UnityEngine.Plane.$ctor2(pc.Vec3.UP.clone(), this.transform.position);
                var distance = { };
                if (!plane.Raycast(ray, distance)) {
                    return false;
                }

                world.v = ray.GetPoint(distance.v);
                return true;
            },
            /*_Game.Board.BoardController.TryGetWorldPointOnBoardPlane end.*/


        }
    });
    /*_Game.Board.BoardController end.*/

    /*_Game.Board.BoardOutline start.*/
    Bridge.define("_Game.Board.BoardOutline", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*_Game.Board.BoardOutline.FlattenXZ:static start.*/
                FlattenXZ: function (value) {
if ( TRACE ) { TRACE( "_Game.Board.BoardOutline#FlattenXZ", this ); }

                    value.y = 0.0;
                    return value.$clone();
                },
                /*_Game.Board.BoardOutline.FlattenXZ:static end.*/


            }
        },
        fields: {
            renderMode: 0,
            linePrefab: null,
            lineParent: null,
            lineWidth: 0,
            verticalOffset: 0,
            borderColor: null,
            useGlow: false,
            glowWidthMultiplier: 0,
            meshMaterial: null,
            meshScaleMultiplier: 0,
            meshVerticalOffset: 0,
            meshHeight: 0,
            meshBevelSize: 0,
            meshSmoothNormals: false,
            segments: null,
            ownedMaterials: null,
            gridGenerator: null,
            meshObject: null,
            generatedMesh: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Game.Board.BoardOutline#init", this ); }

                this.borderColor = new UnityEngine.Color();
                this.renderMode = _Game.Board.BoardOutline.OutlineRenderMode.LineRenderer;
                this.lineWidth = 0.08;
                this.verticalOffset = 0.04;
                this.borderColor = new pc.Color( 0.0, 1.0, 0.95, 1.0 );
                this.useGlow = true;
                this.glowWidthMultiplier = 3.0;
                this.meshScaleMultiplier = 1.08;
                this.meshVerticalOffset = -0.015;
                this.meshHeight = 0.12;
                this.meshBevelSize = 0.04;
                this.meshSmoothNormals = true;
                this.segments = new (System.Collections.Generic.List$1(UnityEngine.LineRenderer)).ctor();
                this.ownedMaterials = new (System.Collections.Generic.List$1(UnityEngine.Material)).ctor();
            }
        },
        methods: {
            /*_Game.Board.BoardOutline.Rebuild start.*/
            Rebuild: function (cells) {
if ( TRACE ) { TRACE( "_Game.Board.BoardOutline#Rebuild", this ); }

                var $t, $t1;
                this.Clear();

                if (cells == null || cells.Count === 0) {
                    return;
                }

                if (UnityEngine.MonoBehaviour.op_Equality(this.gridGenerator, null)) {
                    this.gridGenerator = this.GetComponent(_Game.Board.HexGridGenerator);
                }

                if (UnityEngine.MonoBehaviour.op_Equality(this.gridGenerator, null)) {
                    UnityEngine.Debug.LogWarning$1("BoardOutline requires HexGridGenerator to find outer board edges.", this);
                    return;
                }

                this.EnsureLineParent();

                if (this.renderMode === _Game.Board.BoardOutline.OutlineRenderMode.MeshUnderlay) {
                    this.CreateMeshUnderlay(cells);
                    return;
                }

                $t = Bridge.getEnumerator(cells);
                try {
                    while ($t.moveNext()) {
                        var pair = $t.Current;
                        var cellView = pair.value;
                        if (UnityEngine.MonoBehaviour.op_Equality(cellView, null)) {
                            continue;
                        }

                        $t1 = Bridge.getEnumerator(this.gridGenerator.GetNeighbourCoordinates(pair.key));
                        try {
                            while ($t1.moveNext()) {
                                var neighbourCoordinate = $t1.Current.$clone();
                                if (cells.containsKey(neighbourCoordinate.$clone())) {
                                    continue;
                                }

                                var sideIndex = this.FindSideIndex(cellView, neighbourCoordinate);
                                var start = cellView.GetCornerWorld(sideIndex).add( pc.Vec3.UP.clone().clone().scale( this.verticalOffset ) );
                                var end = cellView.GetCornerWorld(((sideIndex + 1) | 0)).add( pc.Vec3.UP.clone().clone().scale( this.verticalOffset ) );
                                this.CreateBorderSide(start, end);
                            }
                        } finally {
                            if (Bridge.is($t1, System.IDisposable)) {
                                $t1.System$IDisposable$Dispose();
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*_Game.Board.BoardOutline.Rebuild end.*/

            /*_Game.Board.BoardOutline.Clear start.*/
            Clear: function () {
if ( TRACE ) { TRACE( "_Game.Board.BoardOutline#Clear", this ); }

                for (var i = (this.segments.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    var segment = this.segments.getItem(i);
                    if (UnityEngine.Component.op_Equality(segment, null)) {
                        continue;
                    }

                    if (UnityEngine.Application.isPlaying) {
                        UnityEngine.MonoBehaviour.Destroy(segment.gameObject);
                    } else {
                        UnityEngine.Object.DestroyImmediate(segment.gameObject);
                    }
                }

                this.segments.clear();

                for (var i1 = (this.ownedMaterials.Count - 1) | 0; i1 >= 0; i1 = (i1 - 1) | 0) {
                    var material = this.ownedMaterials.getItem(i1);
                    if (material == null) {
                        continue;
                    }

                    if (UnityEngine.Application.isPlaying) {
                        UnityEngine.Object.Destroy(material);
                    } else {
                        UnityEngine.Object.DestroyImmediate(material);
                    }
                }

                this.ownedMaterials.clear();

                if (UnityEngine.GameObject.op_Inequality(this.meshObject, null)) {
                    if (UnityEngine.Application.isPlaying) {
                        UnityEngine.MonoBehaviour.Destroy(this.meshObject);
                    } else {
                        UnityEngine.Object.DestroyImmediate(this.meshObject);
                    }

                    this.meshObject = null;
                }

                if (this.generatedMesh != null) {
                    if (UnityEngine.Application.isPlaying) {
                        UnityEngine.Object.Destroy(this.generatedMesh);
                    } else {
                        UnityEngine.Object.DestroyImmediate(this.generatedMesh);
                    }

                    this.generatedMesh = null;
                }
            },
            /*_Game.Board.BoardOutline.Clear end.*/

            /*_Game.Board.BoardOutline.CreateMeshUnderlay start.*/
            CreateMeshUnderlay: function (cells) {
if ( TRACE ) { TRACE( "_Game.Board.BoardOutline#CreateMeshUnderlay", this ); }

                var $t, $t1;
                var vertices = new (System.Collections.Generic.List$1(UnityEngine.Vector3)).$ctor2(Bridge.Int.mul(cells.Count, 44));
                var triangles = new (System.Collections.Generic.List$1(System.Int32)).$ctor2(Bridge.Int.mul(cells.Count, 72));

                $t = Bridge.getEnumerator(cells);
                try {
                    while ($t.moveNext()) {
                        var pair = $t.Current;
                        var cellView = pair.value;
                        if (UnityEngine.MonoBehaviour.op_Equality(cellView, null)) {
                            continue;
                        }

                        this.AddHexPrism(pair.key, cellView, cells, vertices, triangles);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                var mesh = ($t1 = new UnityEngine.Mesh.ctor(), $t1.name = "BoardOutlineMesh", $t1);
                if (vertices.Count > 65000) {
                    mesh.indexFormat = UnityEngine.Rendering.IndexFormat.UInt32;
                }
                mesh.SetVertices(vertices);
                mesh.SetTriangles(triangles, 0);
                mesh.RecalculateNormals();
                if (this.meshSmoothNormals) {
                    this.SmoothNormalsByPosition(mesh);
                }
                mesh.RecalculateBounds();
                this.generatedMesh = mesh;

                this.meshObject = new UnityEngine.GameObject.$ctor2("BoardOutlineMesh");
                this.meshObject.transform.SetParent(this.lineParent, false);

                var meshFilter = this.meshObject.AddComponent(UnityEngine.MeshFilter);
                meshFilter.sharedMesh = mesh;

                var meshRenderer = this.meshObject.AddComponent(UnityEngine.MeshRenderer);
                meshRenderer.sharedMaterial = this.meshMaterial != null ? this.meshMaterial : this.CreateLineMaterial(this.borderColor);
                meshRenderer.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off;
                meshRenderer.receiveShadows = false;

                if (this.meshMaterial == null && meshRenderer.sharedMaterial != null) {
                    this.ownedMaterials.add(meshRenderer.sharedMaterial);
                }
            },
            /*_Game.Board.BoardOutline.CreateMeshUnderlay end.*/

            /*_Game.Board.BoardOutline.AddHexPrism start.*/
            AddHexPrism: function (coordinate, cellView, cells, vertices, triangles) {
if ( TRACE ) { TRACE( "_Game.Board.BoardOutline#AddHexPrism", this ); }

                var $t;
                var scale = UnityEngine.Mathf.Max(1.0, this.meshScaleMultiplier);
                var height = UnityEngine.Mathf.Max(0.001, this.meshHeight);
                var bevelSize = UnityEngine.Mathf.Max(0.0, this.meshBevelSize);
                var bevelDepth = UnityEngine.Mathf.Min(bevelSize, height * 0.5);
                var cellCentre = cellView.transform.position.$clone();
                var topCentre = cellCentre.$clone().add( pc.Vec3.UP.clone().clone().scale( this.meshVerticalOffset ) );
                var bottomCentre = topCentre.$clone().sub( pc.Vec3.UP.clone().clone().scale( height ) );
                var topInnerCorners = System.Array.init(6, function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);
                var sideTopCorners = System.Array.init(6, function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);
                var bottomCorners = System.Array.init(6, function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);
                var outerSides = System.Array.init(6, false, System.Boolean);

                for (var i = 0; i < 6; i = (i + 1) | 0) {
                    var horizontalOffset = cellView.GetCornerWorld(i).sub( cellCentre );
                    var outward = _Game.Board.BoardOutline.FlattenXZ(horizontalOffset.$clone()).clone().normalize().$clone();
                    var outerOffset = horizontalOffset.$clone().clone().scale( scale );
                    var bevelInset = outward.$clone().clone().scale( UnityEngine.Mathf.Min(bevelSize, outerOffset.length() * 0.25) );
                    topInnerCorners[i] = topCentre.$clone().add( outerOffset ).sub( bevelInset );
                    sideTopCorners[i] = topCentre.$clone().sub( pc.Vec3.UP.clone().clone().scale( bevelDepth ) ).add( outerOffset );
                    bottomCorners[i] = bottomCentre.$clone().add( outerOffset );
                }

                $t = Bridge.getEnumerator(this.gridGenerator.GetNeighbourCoordinates(coordinate));
                try {
                    while ($t.moveNext()) {
                        var neighbourCoordinate = $t.Current.$clone();
                        if (!cells.containsKey(neighbourCoordinate.$clone())) {
                            outerSides[this.FindSideIndex(cellView, neighbourCoordinate)] = true;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                this.AddHexCap(topCentre, topInnerCorners, true, vertices, triangles);
                this.AddHexCap(bottomCentre, bottomCorners, false, vertices, triangles);

                for (var i1 = 0; i1 < 6; i1 = (i1 + 1) | 0) {
                    if (!outerSides[i1]) {
                        continue;
                    }

                    var next = (((i1 + 1) | 0)) % 6;
                    if (bevelSize > 0.0) {
                        this.AddQuad(topInnerCorners[i1], topInnerCorners[next], sideTopCorners[next], sideTopCorners[i1], vertices, triangles);
                    }
                    this.AddQuad(sideTopCorners[i1], sideTopCorners[next], bottomCorners[next], bottomCorners[i1], vertices, triangles);
                }
            },
            /*_Game.Board.BoardOutline.AddHexPrism end.*/

            /*_Game.Board.BoardOutline.AddHexCap start.*/
            AddHexCap: function (centre, corners, topFace, vertices, triangles) {
if ( TRACE ) { TRACE( "_Game.Board.BoardOutline#AddHexCap", this ); }

                var baseIndex = vertices.Count;
                vertices.add(this.lineParent.InverseTransformPoint(centre));

                for (var i = 0; i < 6; i = (i + 1) | 0) {
                    vertices.add(this.lineParent.InverseTransformPoint(corners[i]));
                }

                for (var i1 = 0; i1 < 6; i1 = (i1 + 1) | 0) {
                    var current = (((baseIndex + 1) | 0) + i1) | 0;
                    var next = (((baseIndex + 1) | 0) + ((((i1 + 1) | 0)) % 6)) | 0;

                    triangles.add(baseIndex);
                    triangles.add(topFace ? next : current);
                    triangles.add(topFace ? current : next);
                }
            },
            /*_Game.Board.BoardOutline.AddHexCap end.*/

            /*_Game.Board.BoardOutline.AddQuad start.*/
            AddQuad: function (a, b, c, d, vertices, triangles) {
if ( TRACE ) { TRACE( "_Game.Board.BoardOutline#AddQuad", this ); }

                var baseIndex = vertices.Count;
                vertices.add(this.lineParent.InverseTransformPoint(a));
                vertices.add(this.lineParent.InverseTransformPoint(b));
                vertices.add(this.lineParent.InverseTransformPoint(c));
                vertices.add(this.lineParent.InverseTransformPoint(d));

                triangles.add(baseIndex);
                triangles.add(((baseIndex + 1) | 0));
                triangles.add(((baseIndex + 2) | 0));
                triangles.add(baseIndex);
                triangles.add(((baseIndex + 2) | 0));
                triangles.add(((baseIndex + 3) | 0));
            },
            /*_Game.Board.BoardOutline.AddQuad end.*/

            /*_Game.Board.BoardOutline.SmoothNormalsByPosition start.*/
            SmoothNormalsByPosition: function (mesh) {
if ( TRACE ) { TRACE( "_Game.Board.BoardOutline#SmoothNormalsByPosition", this ); }

                var vertices = mesh.vertices;
                var normals = mesh.normals;
                var normalSums = new (System.Collections.Generic.Dictionary$2(UnityEngine.Vector3Int,UnityEngine.Vector3)).ctor();
                var normalCounts = new (System.Collections.Generic.Dictionary$2(UnityEngine.Vector3Int,System.Int32)).ctor();

                for (var i = 0; i < vertices.length; i = (i + 1) | 0) {
                    var key = this.Quantize(vertices[i]);
                    if (normalSums.containsKey(key.$clone())) {
                        normalSums.setItem(key, normalSums.getItem(key).$clone().add( normals[i].$clone() ));
                        normalCounts.setItem(key, (normalCounts.getItem(key) + 1) | 0);
                    } else {
                        normalSums.add(key.$clone(), normals[i].$clone());
                        normalCounts.add(key.$clone(), 1);
                    }
                }

                for (var i1 = 0; i1 < vertices.length; i1 = (i1 + 1) | 0) {
                    var key1 = this.Quantize(vertices[i1]);
                    normals[i1] = (normalSums.getItem(key1).$clone().scale( 1.0 / ( normalCounts.getItem(key1) ) )).clone().normalize().$clone();
                }

                mesh.normals = normals;
            },
            /*_Game.Board.BoardOutline.SmoothNormalsByPosition end.*/

            /*_Game.Board.BoardOutline.Quantize start.*/
            Quantize: function (value) {
if ( TRACE ) { TRACE( "_Game.Board.BoardOutline#Quantize", this ); }

                var precision = 10000.0;
                return new UnityEngine.Vector3Int.$ctor1(Math.round(value.x * precision), Math.round(value.y * precision), Math.round(value.z * precision));
            },
            /*_Game.Board.BoardOutline.Quantize end.*/

            /*_Game.Board.BoardOutline.FindSideIndex start.*/
            FindSideIndex: function (cellView, neighbourCoordinate) {
if ( TRACE ) { TRACE( "_Game.Board.BoardOutline#FindSideIndex", this ); }

                var centre = cellView.transform.position.$clone();
                var neighbourWorld = this.gridGenerator.transform.TransformPoint$1(this.gridGenerator.CoordinateToWorld(neighbourCoordinate));
                var neighbourDirection = _Game.Board.BoardOutline.FlattenXZ(neighbourWorld.$clone().sub( centre )).clone().normalize().$clone();

                var bestIndex = 0;
                var bestDot = Number.NEGATIVE_INFINITY;
                for (var i = 0; i < 6; i = (i + 1) | 0) {
                    var sideMidpoint = (cellView.GetCornerWorld(i).add( cellView.GetCornerWorld(((i + 1) | 0)) )).clone().scale( 0.5 );
                    var sideDirection = _Game.Board.BoardOutline.FlattenXZ(sideMidpoint.$clone().sub( centre )).clone().normalize().$clone();
                    var dot = sideDirection.dot( neighbourDirection );
                    if (dot > bestDot) {
                        bestDot = dot;
                        bestIndex = i;
                    }
                }

                return bestIndex;
            },
            /*_Game.Board.BoardOutline.FindSideIndex end.*/

            /*_Game.Board.BoardOutline.CreateBorderSide start.*/
            CreateBorderSide: function (start, end) {
if ( TRACE ) { TRACE( "_Game.Board.BoardOutline#CreateBorderSide", this ); }

                if (this.useGlow) {
                    var glowColor = this.borderColor.$clone();
                    glowColor.a *= 0.25;
                    this.CreateLine(start, end, UnityEngine.Mathf.Max(0.001, this.lineWidth * this.glowWidthMultiplier), glowColor, "OutlineGlow");
                }

                this.CreateLine(start.$clone().add( pc.Vec3.UP.clone().clone().scale( 0.002 ) ), end.$clone().add( pc.Vec3.UP.clone().clone().scale( 0.002 ) ), UnityEngine.Mathf.Max(0.001, this.lineWidth), this.borderColor, "OutlineCore");
            },
            /*_Game.Board.BoardOutline.CreateBorderSide end.*/

            /*_Game.Board.BoardOutline.CreateLine start.*/
            CreateLine: function (start, end, width, color, objectName) {
if ( TRACE ) { TRACE( "_Game.Board.BoardOutline#CreateLine", this ); }

                var line = UnityEngine.Component.op_Inequality(this.linePrefab, null) ? UnityEngine.Object.Instantiate(UnityEngine.LineRenderer, this.linePrefab, this.lineParent) : new UnityEngine.GameObject.$ctor2(objectName).AddComponent(UnityEngine.LineRenderer);

                line.name = objectName;
                line.transform.SetParent(this.lineParent, false);
                line.useWorldSpace = true;
                line.positionCount = 2;
                line.SetPosition(0, start);
                line.SetPosition(1, end);
                line.startWidth = width;
                line.endWidth = width;
                line.startColor = color.$clone();
                line.endColor = color.$clone();
                line.numCapVertices = UnityEngine.Mathf.Max(line.numCapVertices, 6);
                line.numCornerVertices = UnityEngine.Mathf.Max(line.numCornerVertices, 2);
                line.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off;
                line.receiveShadows = false;
                var material = this.CreateLineMaterial(color);
                if (material != null) {
                    line.material = material;
                    this.ownedMaterials.add(material);
                }

                this.segments.add(line);
            },
            /*_Game.Board.BoardOutline.CreateLine end.*/

            /*_Game.Board.BoardOutline.CreateLineMaterial start.*/
            CreateLineMaterial: function (color) {
if ( TRACE ) { TRACE( "_Game.Board.BoardOutline#CreateLineMaterial", this ); }

                var shader = this.FindLineShader();
                if (shader == null && (UnityEngine.Component.op_Equality(this.linePrefab, null) || this.linePrefab.sharedMaterial == null)) {
                    return null;
                }

                var material = UnityEngine.Component.op_Inequality(this.linePrefab, null) && this.linePrefab.sharedMaterial != null ? new UnityEngine.Material.$ctor1(this.linePrefab.sharedMaterial) : new UnityEngine.Material.$ctor2(shader);

                this.ApplyMaterialColor(material, color);
                return material;
            },
            /*_Game.Board.BoardOutline.CreateLineMaterial end.*/

            /*_Game.Board.BoardOutline.ApplyMaterialColor start.*/
            ApplyMaterialColor: function (material, color) {
if ( TRACE ) { TRACE( "_Game.Board.BoardOutline#ApplyMaterialColor", this ); }

                var emissionColor = new pc.Color( color.r * 3.0, color.g * 3.0, color.b * 3.0, color.a * 3.0 );
                if (material.HasProperty$1("_BaseColor")) {
                    material.SetColor$1("_BaseColor", color);
                }
                if (material.HasProperty$1("_Color")) {
                    material.SetColor$1("_Color", color);
                }
                if (material.HasProperty$1("_EmissionColor")) {
                    material.EnableKeyword("_EMISSION");
                    material.SetColor$1("_EmissionColor", emissionColor);
                }
            },
            /*_Game.Board.BoardOutline.ApplyMaterialColor end.*/

            /*_Game.Board.BoardOutline.FindLineShader start.*/
            FindLineShader: function () {
if ( TRACE ) { TRACE( "_Game.Board.BoardOutline#FindLineShader", this ); }

                var shader = UnityEngine.Shader.Find("Universal Render Pipeline/Particles/Unlit");
                if (shader == null) {
                    shader = UnityEngine.Shader.Find("Sprites/Default");
                }
                if (shader == null) {
                    shader = UnityEngine.Shader.Find("Unlit/Color");
                }

                return shader;
            },
            /*_Game.Board.BoardOutline.FindLineShader end.*/

            /*_Game.Board.BoardOutline.EnsureLineParent start.*/
            EnsureLineParent: function () {
if ( TRACE ) { TRACE( "_Game.Board.BoardOutline#EnsureLineParent", this ); }

                if (UnityEngine.Component.op_Inequality(this.lineParent, null)) {
                    return;
                }

                var existing = this.transform.Find("BoardOutline");
                if (UnityEngine.Component.op_Inequality(existing, null)) {
                    this.lineParent = existing;
                    return;
                }

                var parentObject = new UnityEngine.GameObject.$ctor2("BoardOutline");
                parentObject.transform.SetParent(this.transform, false);
                this.lineParent = parentObject.transform;
            },
            /*_Game.Board.BoardOutline.EnsureLineParent end.*/


        }
    });
    /*_Game.Board.BoardOutline end.*/

    /*_Game.Board.BoardOutline+OutlineRenderMode start.*/
    Bridge.define("_Game.Board.BoardOutline.OutlineRenderMode", {
        $kind: 1006,
        statics: {
            fields: {
                LineRenderer: 0,
                MeshUnderlay: 1
            }
        }
    });
    /*_Game.Board.BoardOutline+OutlineRenderMode end.*/

    /*_Game.Board.HexCell start.*/
    Bridge.define("_Game.Board.HexCell", {
        fields: {
            coordinate: null,
            stack: null
        },
        props: {
            IsEmpty: {
                get: function () {
if ( TRACE ) { TRACE( "_Game.Board.HexCell#IsEmpty#get", this ); }

                    return this.stack == null || this.stack.IsEmpty;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Game.Board.HexCell#init", this ); }

                this.coordinate = new UnityEngine.Vector2Int();
            },
            ctor: function (coordinate) {
if ( TRACE ) { TRACE( "_Game.Board.HexCell#ctor", this ); }

                this.$initialize();
                this.coordinate = coordinate.$clone();
            }
        }
    });
    /*_Game.Board.HexCell end.*/

    /*_Game.Board.HexCellHighlightSettings start.*/
    Bridge.define("_Game.Board.HexCellHighlightSettings", {
        fields: {
            useMaterialTint: false,
            useOutline: false,
            validColor: null,
            outlineMaterial: null,
            outlineLineWidth: 0,
            outlineVerticalOffset: 0,
            outlineRadiusMultiplier: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Game.Board.HexCellHighlightSettings#init", this ); }

                this.validColor = new UnityEngine.Color();
                this.useMaterialTint = true;
                this.useOutline = true;
                this.validColor = new pc.Color( 0.28, 0.9, 0.48, 1.0 );
                this.outlineLineWidth = 0.08;
                this.outlineVerticalOffset = 0.06;
                this.outlineRadiusMultiplier = 1.02;
            }
        }
    });
    /*_Game.Board.HexCellHighlightSettings end.*/

    /*_Game.Board.HexCellView start.*/
    Bridge.define("_Game.Board.HexCellView", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                HighlightOutlineName: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "_Game.Board.HexCellView#init", this ); }

                    this.HighlightOutlineName = "HighlightOutline";
                }
            }
        },
        fields: {
            meshRenderers: null,
            validColor: null,
            highlightMaterial: null,
            highlightLineWidth: 0,
            highlightVerticalOffset: 0,
            highlightRadiusMultiplier: 0,
            cornerRadius: 0,
            orientation: 0,
            highlightOutline: null,
            runtimeHighlightMaterial: null,
            defaultColors: null,
            useMaterialTint: false,
            useOutline: false,
            soundPlayer: null,
            Cell: null,
            StackView: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Game.Board.HexCellView#init", this ); }

                this.validColor = new UnityEngine.Color();
                this.validColor = new pc.Color( 0.28, 0.9, 0.48, 1.0 );
                this.highlightLineWidth = 0.08;
                this.highlightVerticalOffset = 0.06;
                this.highlightRadiusMultiplier = 1.02;
                this.cornerRadius = 1.05;
                this.orientation = _Game.Board.HexGridGenerator.HexOrientation.FlatTop;
                this.useMaterialTint = true;
                this.useOutline = true;
            }
        },
        methods: {
            /*_Game.Board.HexCellView.SetSoundPlayer start.*/
            SetSoundPlayer: function (soundPlayer) {
if ( TRACE ) { TRACE( "_Game.Board.HexCellView#SetSoundPlayer", this ); }

                this.soundPlayer = soundPlayer;
            },
            /*_Game.Board.HexCellView.SetSoundPlayer end.*/

            /*_Game.Board.HexCellView.Initialize start.*/
            Initialize: function (cell) {
if ( TRACE ) { TRACE( "_Game.Board.HexCellView#Initialize", this ); }

                this.Cell = cell;
                this.CacheRenderers();
                this.SetHighlight(false, false);
            },
            /*_Game.Board.HexCellView.Initialize end.*/

            /*_Game.Board.HexCellView.ConfigureGeometry start.*/
            ConfigureGeometry: function (radius, hexOrientation) {
if ( TRACE ) { TRACE( "_Game.Board.HexCellView#ConfigureGeometry", this ); }

                this.cornerRadius = UnityEngine.Mathf.Max(0.01, radius);
                this.orientation = hexOrientation;
                if (UnityEngine.Component.op_Inequality(this.highlightOutline, null)) {
                    this.UpdateHighlightGeometry();
                }
            },
            /*_Game.Board.HexCellView.ConfigureGeometry end.*/

            /*_Game.Board.HexCellView.ConfigureHighlight start.*/
            ConfigureHighlight: function (settings) {
if ( TRACE ) { TRACE( "_Game.Board.HexCellView#ConfigureHighlight", this ); }

                if (settings == null) {
                    return;
                }

                this.useMaterialTint = settings.useMaterialTint;
                this.useOutline = settings.useOutline;
                this.validColor = settings.validColor.$clone();
                this.highlightMaterial = settings.outlineMaterial;
                this.highlightLineWidth = settings.outlineLineWidth;
                this.highlightVerticalOffset = settings.outlineVerticalOffset;
                this.highlightRadiusMultiplier = settings.outlineRadiusMultiplier;

                if (this.runtimeHighlightMaterial != null) {
                    if (UnityEngine.Application.isPlaying) {
                        UnityEngine.Object.Destroy(this.runtimeHighlightMaterial);
                    } else {
                        UnityEngine.Object.DestroyImmediate(this.runtimeHighlightMaterial);
                    }
                    this.runtimeHighlightMaterial = null;
                }

                if (UnityEngine.Component.op_Inequality(this.highlightOutline, null)) {
                    this.EnsureHighlightMaterial();
                    this.UpdateHighlightGeometry();
                }
            },
            /*_Game.Board.HexCellView.ConfigureHighlight end.*/

            /*_Game.Board.HexCellView.GetCornerWorld start.*/
            GetCornerWorld: function (index) {
if ( TRACE ) { TRACE( "_Game.Board.HexCellView#GetCornerWorld", this ); }

                var wrappedIndex = ((((index % 6) + 6) | 0)) % 6;
                var angleOffset = this.orientation === _Game.Board.HexGridGenerator.HexOrientation.FlatTop ? 0.0 : 30.0;
                var angleRad = UnityEngine.Mathf.Deg2Rad * (60.0 * wrappedIndex + angleOffset);
                var localCorner = new pc.Vec3( Math.cos(angleRad) * this.cornerRadius, 0.0, Math.sin(angleRad) * this.cornerRadius );
                return this.transform.TransformPoint$1(localCorner);
            },
            /*_Game.Board.HexCellView.GetCornerWorld end.*/

            /*_Game.Board.HexCellView.SetStackView start.*/
            SetStackView: function (stackView, playDropSound) {
if ( TRACE ) { TRACE( "_Game.Board.HexCellView#SetStackView", this ); }

                if (playDropSound === void 0) { playDropSound = false; }
                this.StackView = stackView;
                if (UnityEngine.MonoBehaviour.op_Inequality(this.StackView, null)) {
                    this.StackView.transform.SetParent(this.transform, true);
                    this.StackView.transform.position = this.transform.position.$clone().add( pc.Vec3.UP.clone().clone().scale( 0.08 ) );
                    if (playDropSound && UnityEngine.MonoBehaviour.op_Inequality(this.soundPlayer, null)) {
                        this.soundPlayer.PlayStackDrop();
                    }
                }
            },
            /*_Game.Board.HexCellView.SetStackView end.*/

            /*_Game.Board.HexCellView.ClearStackView start.*/
            ClearStackView: function () {
if ( TRACE ) { TRACE( "_Game.Board.HexCellView#ClearStackView", this ); }

                this.StackView = null;
            },
            /*_Game.Board.HexCellView.ClearStackView end.*/

            /*_Game.Board.HexCellView.SetHighlight start.*/
            SetHighlight: function (active, valid) {
if ( TRACE ) { TRACE( "_Game.Board.HexCellView#SetHighlight", this ); }

                if (!active || !valid) {
                    this.RestoreMaterialColors();
                    if (UnityEngine.Component.op_Inequality(this.highlightOutline, null)) {
                        this.highlightOutline.enabled = false;
                    }

                    return;
                }

                var color = this.validColor.$clone();
                this.ApplyMaterialTint(color);

                if (!this.useOutline) {
                    if (UnityEngine.Component.op_Inequality(this.highlightOutline, null)) {
                        this.highlightOutline.enabled = false;
                    }

                    return;
                }

                this.EnsureHighlightOutline();
                if (UnityEngine.Component.op_Equality(this.highlightOutline, null)) {
                    return;
                }
                // Luna Playworks JS bridge can throw on LineRenderer.startColor/endColor.
                // The outline material carries the visible tint, so avoid those setters.
                this.ApplyMaterialColor(this.runtimeHighlightMaterial, color);
                this.highlightOutline.enabled = true;
                this.UpdateHighlightGeometry();
            },
            /*_Game.Board.HexCellView.SetHighlight end.*/

            /*_Game.Board.HexCellView.CacheRenderers start.*/
            CacheRenderers: function () {
if ( TRACE ) { TRACE( "_Game.Board.HexCellView#CacheRenderers", this ); }

                if (this.meshRenderers == null || this.meshRenderers.length === 0) {
                    this.meshRenderers = this.GetComponentsInChildren$1(UnityEngine.MeshRenderer, true);
                }

                this.defaultColors = System.Array.init(this.meshRenderers.length, function (){
                    return new UnityEngine.Color();
                }, UnityEngine.Color);
                for (var i = 0; i < this.meshRenderers.length; i = (i + 1) | 0) {
                    var renderer = this.meshRenderers[i];
                    this.defaultColors[i] = UnityEngine.Component.op_Inequality(renderer, null) ? renderer.material.color.$clone() : new pc.Color( 1, 1, 1, 1 );
                }

                if (this.meshRenderers.length === 0) {
                    UnityEngine.Debug.LogWarning$1("HexCellView has no MeshRenderer. Assign a cell prefab with a mesh/material.", this);
                }
            },
            /*_Game.Board.HexCellView.CacheRenderers end.*/

            /*_Game.Board.HexCellView.ApplyMaterialTint start.*/
            ApplyMaterialTint: function (color) {
if ( TRACE ) { TRACE( "_Game.Board.HexCellView#ApplyMaterialTint", this ); }

                if (!this.useMaterialTint || this.meshRenderers == null) {
                    return;
                }

                for (var i = 0; i < this.meshRenderers.length; i = (i + 1) | 0) {
                    var renderer = this.meshRenderers[i];
                    if (UnityEngine.Component.op_Equality(renderer, null)) {
                        continue;
                    }

                    renderer.material.color = color.$clone();
                }
            },
            /*_Game.Board.HexCellView.ApplyMaterialTint end.*/

            /*_Game.Board.HexCellView.RestoreMaterialColors start.*/
            RestoreMaterialColors: function () {
if ( TRACE ) { TRACE( "_Game.Board.HexCellView#RestoreMaterialColors", this ); }

                if (this.meshRenderers == null || this.defaultColors == null) {
                    return;
                }

                var count = UnityEngine.Mathf.Min(this.meshRenderers.length, this.defaultColors.length);
                for (var i = 0; i < count; i = (i + 1) | 0) {
                    var renderer = this.meshRenderers[i];
                    if (UnityEngine.Component.op_Equality(renderer, null)) {
                        continue;
                    }

                    renderer.material.color = this.defaultColors[i].$clone();
                }
            },
            /*_Game.Board.HexCellView.RestoreMaterialColors end.*/

            /*_Game.Board.HexCellView.EnsureHighlightOutline start.*/
            EnsureHighlightOutline: function () {
if ( TRACE ) { TRACE( "_Game.Board.HexCellView#EnsureHighlightOutline", this ); }

                if (UnityEngine.Component.op_Inequality(this.highlightOutline, null)) {
                    return;
                }

                var existingOutline = this.transform.Find(_Game.Board.HexCellView.HighlightOutlineName);
                if (UnityEngine.Component.op_Inequality(existingOutline, null)) {
                    this.highlightOutline = existingOutline.GetComponent(UnityEngine.LineRenderer);
                }

                if (UnityEngine.Component.op_Equality(this.highlightOutline, null)) {
                    var outlineObject = UnityEngine.Component.op_Inequality(existingOutline, null) ? existingOutline.gameObject : new UnityEngine.GameObject.$ctor2(_Game.Board.HexCellView.HighlightOutlineName);
                    outlineObject.transform.SetParent(this.transform, false);
                    outlineObject.transform.localPosition = pc.Vec3.ZERO.clone();
                    outlineObject.transform.localRotation = pc.Quat.IDENTITY.clone();
                    outlineObject.transform.localScale = new pc.Vec3( 1, 1, 1 );
                    this.highlightOutline = outlineObject.AddComponent(UnityEngine.LineRenderer);
                }

                this.highlightOutline.useWorldSpace = false;
                this.highlightOutline.loop = true;
                this.highlightOutline.positionCount = 6;
                this.highlightOutline.startWidth = UnityEngine.Mathf.Max(0.001, this.highlightLineWidth);
                this.highlightOutline.endWidth = UnityEngine.Mathf.Max(0.001, this.highlightLineWidth);
                this.highlightOutline.numCapVertices = UnityEngine.Mathf.Max(this.highlightOutline.numCapVertices, 6);
                this.highlightOutline.numCornerVertices = UnityEngine.Mathf.Max(this.highlightOutline.numCornerVertices, 2);
                this.highlightOutline.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off;
                this.highlightOutline.receiveShadows = false;
                this.highlightOutline.enabled = false;

                this.EnsureHighlightMaterial();
                this.UpdateHighlightGeometry();
            },
            /*_Game.Board.HexCellView.EnsureHighlightOutline end.*/

            /*_Game.Board.HexCellView.EnsureHighlightMaterial start.*/
            EnsureHighlightMaterial: function () {
if ( TRACE ) { TRACE( "_Game.Board.HexCellView#EnsureHighlightMaterial", this ); }

                if (this.runtimeHighlightMaterial != null) {
                    this.highlightOutline.material = this.runtimeHighlightMaterial;
                    return;
                }

                if (this.highlightMaterial != null) {
                    this.runtimeHighlightMaterial = new UnityEngine.Material.$ctor1(this.highlightMaterial);
                } else {
                    var shader = this.FindLineShader();
                    if (shader == null) {
                        return;
                    }

                    this.runtimeHighlightMaterial = new UnityEngine.Material.$ctor2(shader);
                }

                this.highlightOutline.material = this.runtimeHighlightMaterial;
            },
            /*_Game.Board.HexCellView.EnsureHighlightMaterial end.*/

            /*_Game.Board.HexCellView.UpdateHighlightGeometry start.*/
            UpdateHighlightGeometry: function () {
if ( TRACE ) { TRACE( "_Game.Board.HexCellView#UpdateHighlightGeometry", this ); }

                if (UnityEngine.Component.op_Equality(this.highlightOutline, null)) {
                    return;
                }

                var radius = this.cornerRadius * UnityEngine.Mathf.Max(1.0, this.highlightRadiusMultiplier);
                var angleOffset = this.orientation === _Game.Board.HexGridGenerator.HexOrientation.FlatTop ? 0.0 : 30.0;
                var y = this.highlightVerticalOffset;

                this.highlightOutline.positionCount = 6;
                this.highlightOutline.startWidth = UnityEngine.Mathf.Max(0.001, this.highlightLineWidth);
                this.highlightOutline.endWidth = UnityEngine.Mathf.Max(0.001, this.highlightLineWidth);
                for (var i = 0; i < 6; i = (i + 1) | 0) {
                    var angleRad = UnityEngine.Mathf.Deg2Rad * (60.0 * i + angleOffset);
                    var localCorner = new pc.Vec3( Math.cos(angleRad) * radius, y, Math.sin(angleRad) * radius );
                    this.highlightOutline.SetPosition(i, localCorner);
                }
            },
            /*_Game.Board.HexCellView.UpdateHighlightGeometry end.*/

            /*_Game.Board.HexCellView.ApplyMaterialColor start.*/
            ApplyMaterialColor: function (material, color) {
if ( TRACE ) { TRACE( "_Game.Board.HexCellView#ApplyMaterialColor", this ); }

                if (material == null) {
                    return;
                }

                var emissionColor = new pc.Color( color.r * 3.0, color.g * 3.0, color.b * 3.0, color.a * 3.0 );
                if (material.HasProperty$1("_BaseColor")) {
                    material.SetColor$1("_BaseColor", color);
                }
                if (material.HasProperty$1("_Color")) {
                    material.SetColor$1("_Color", color);
                }
                if (material.HasProperty$1("_EmissionColor")) {
                    material.EnableKeyword("_EMISSION");
                    material.SetColor$1("_EmissionColor", emissionColor);
                }
            },
            /*_Game.Board.HexCellView.ApplyMaterialColor end.*/

            /*_Game.Board.HexCellView.FindLineShader start.*/
            FindLineShader: function () {
if ( TRACE ) { TRACE( "_Game.Board.HexCellView#FindLineShader", this ); }

                var shader = UnityEngine.Shader.Find("Universal Render Pipeline/Particles/Unlit");
                if (shader == null) {
                    shader = UnityEngine.Shader.Find("Sprites/Default");
                }
                if (shader == null) {
                    shader = UnityEngine.Shader.Find("Unlit/Color");
                }

                return shader;
            },
            /*_Game.Board.HexCellView.FindLineShader end.*/

            /*_Game.Board.HexCellView.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "_Game.Board.HexCellView#OnDestroy", this ); }

                if (this.runtimeHighlightMaterial == null) {
                    return;
                }

                if (UnityEngine.Application.isPlaying) {
                    UnityEngine.Object.Destroy(this.runtimeHighlightMaterial);
                } else {
                    UnityEngine.Object.DestroyImmediate(this.runtimeHighlightMaterial);
                }
            },
            /*_Game.Board.HexCellView.OnDestroy end.*/


        }
    });
    /*_Game.Board.HexCellView end.*/

    /*_Game.Board.HexGridGenerator start.*/
    Bridge.define("_Game.Board.HexGridGenerator", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*_Game.Board.HexGridGenerator.GetFlatTopOffsetNeighbours:static start.*/
                GetFlatTopOffsetNeighbours: function (coordinate) {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#GetFlatTopOffsetNeighbours", this ); }

                    var evenColumn = System.Array.init([
                        new UnityEngine.Vector2Int.$ctor1(1, 0), 
                        new UnityEngine.Vector2Int.$ctor1(1, -1), 
                        new UnityEngine.Vector2Int.$ctor1(0, -1), 
                        new UnityEngine.Vector2Int.$ctor1(-1, -1), 
                        new UnityEngine.Vector2Int.$ctor1(-1, 0), 
                        new UnityEngine.Vector2Int.$ctor1(0, 1)
                    ], UnityEngine.Vector2Int);
                    var oddColumn = System.Array.init([
                        new UnityEngine.Vector2Int.$ctor1(1, 1), 
                        new UnityEngine.Vector2Int.$ctor1(1, 0), 
                        new UnityEngine.Vector2Int.$ctor1(0, -1), 
                        new UnityEngine.Vector2Int.$ctor1(-1, 0), 
                        new UnityEngine.Vector2Int.$ctor1(-1, 1), 
                        new UnityEngine.Vector2Int.$ctor1(0, 1)
                    ], UnityEngine.Vector2Int);

                    return _Game.Board.HexGridGenerator.OffsetNeighbours(coordinate, _Game.Board.HexGridGenerator.PositiveModulo(coordinate.x, 2) === 0 ? evenColumn : oddColumn);
                },
                /*_Game.Board.HexGridGenerator.GetFlatTopOffsetNeighbours:static end.*/

                /*_Game.Board.HexGridGenerator.GetPointyTopOffsetNeighbours:static start.*/
                GetPointyTopOffsetNeighbours: function (coordinate) {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#GetPointyTopOffsetNeighbours", this ); }

                    var evenRow = System.Array.init([
                        new UnityEngine.Vector2Int.$ctor1(1, 0), 
                        new UnityEngine.Vector2Int.$ctor1(0, -1), 
                        new UnityEngine.Vector2Int.$ctor1(-1, -1), 
                        new UnityEngine.Vector2Int.$ctor1(-1, 0), 
                        new UnityEngine.Vector2Int.$ctor1(-1, 1), 
                        new UnityEngine.Vector2Int.$ctor1(0, 1)
                    ], UnityEngine.Vector2Int);
                    var oddRow = System.Array.init([
                        new UnityEngine.Vector2Int.$ctor1(1, 0), 
                        new UnityEngine.Vector2Int.$ctor1(1, -1), 
                        new UnityEngine.Vector2Int.$ctor1(0, -1), 
                        new UnityEngine.Vector2Int.$ctor1(-1, 0), 
                        new UnityEngine.Vector2Int.$ctor1(0, 1), 
                        new UnityEngine.Vector2Int.$ctor1(1, 1)
                    ], UnityEngine.Vector2Int);

                    return _Game.Board.HexGridGenerator.OffsetNeighbours(coordinate, _Game.Board.HexGridGenerator.PositiveModulo(coordinate.y, 2) === 0 ? evenRow : oddRow);
                },
                /*_Game.Board.HexGridGenerator.GetPointyTopOffsetNeighbours:static end.*/

                /*_Game.Board.HexGridGenerator.GetAxialNeighbours:static start.*/
                GetAxialNeighbours: function (coordinate) {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#GetAxialNeighbours", this ); }

                    var directions = System.Array.init([
                        new UnityEngine.Vector2Int.$ctor1(1, 0), 
                        new UnityEngine.Vector2Int.$ctor1(1, -1), 
                        new UnityEngine.Vector2Int.$ctor1(0, -1), 
                        new UnityEngine.Vector2Int.$ctor1(-1, 0), 
                        new UnityEngine.Vector2Int.$ctor1(-1, 1), 
                        new UnityEngine.Vector2Int.$ctor1(0, 1)
                    ], UnityEngine.Vector2Int);
                    return _Game.Board.HexGridGenerator.OffsetNeighbours(coordinate, directions);
                },
                /*_Game.Board.HexGridGenerator.GetAxialNeighbours:static end.*/

                /*_Game.Board.HexGridGenerator.OffsetNeighbours:static start.*/
                OffsetNeighbours: function (coordinate, offsets) {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#OffsetNeighbours", this ); }

                    var neighbours = new (System.Collections.Generic.List$1(UnityEngine.Vector2Int)).$ctor2(offsets.length);
                    for (var i = 0; i < offsets.length; i = (i + 1) | 0) {
                        var offset = offsets[i].$clone();
                        neighbours.add(new UnityEngine.Vector2Int.$ctor1(((coordinate.x + offset.x) | 0), ((coordinate.y + offset.y) | 0)));
                    }

                    return neighbours;
                },
                /*_Game.Board.HexGridGenerator.OffsetNeighbours:static end.*/

                /*_Game.Board.HexGridGenerator.PositiveModulo:static start.*/
                PositiveModulo: function (value, modulo) {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#PositiveModulo", this ); }

                    return (((value % modulo + modulo) | 0)) % modulo;
                },
                /*_Game.Board.HexGridGenerator.PositiveModulo:static end.*/

                /*_Game.Board.HexGridGenerator.CompareCoordinates:static start.*/
                CompareCoordinates: function (a, b) {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#CompareCoordinates", this ); }

                    var yCompare = Bridge.compare(b.y, a.y);
                    return yCompare !== 0 ? yCompare : Bridge.compare(a.x, b.x);
                },
                /*_Game.Board.HexGridGenerator.CompareCoordinates:static end.*/


            }
        },
        fields: {
            radius: 0,
            cellSize: 0,
            boardShape: 0,
            customBaseShape: 0,
            orientation: 0,
            customCoordinates: null
        },
        props: {
            Radius: {
                get: function () {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#Radius#get", this ); }

                    return this.radius;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#Radius#set", this ); }

                    this.radius = UnityEngine.Mathf.Max(0, value);
                }
            },
            CellSize: {
                get: function () {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#CellSize#get", this ); }

                    return this.cellSize;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#CellSize#set", this ); }

                    this.cellSize = UnityEngine.Mathf.Max(0.1, value);
                }
            },
            Shape: {
                get: function () {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#Shape#get", this ); }

                    return this.boardShape;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#Shape#set", this ); }

                    this.boardShape = value;
                }
            },
            CustomBaseShape: {
                get: function () {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#CustomBaseShape#get", this ); }

                    return this.customBaseShape;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#CustomBaseShape#set", this ); }

                    this.customBaseShape = value === _Game.Board.HexGridGenerator.BoardShape.Hexagon ? _Game.Board.HexGridGenerator.BoardShape.Hexagon : _Game.Board.HexGridGenerator.BoardShape.Square;
                }
            },
            Orientation: {
                get: function () {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#Orientation#get", this ); }

                    return this.orientation;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#Orientation#set", this ); }

                    this.orientation = value;
                }
            },
            CustomCoordinates: {
                get: function () {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#CustomCoordinates#get", this ); }

                    return this.customCoordinates;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#init", this ); }

                this.radius = 2;
                this.cellSize = 1.05;
                this.boardShape = _Game.Board.HexGridGenerator.BoardShape.Square;
                this.customBaseShape = _Game.Board.HexGridGenerator.BoardShape.Square;
                this.orientation = _Game.Board.HexGridGenerator.HexOrientation.FlatTop;
                this.customCoordinates = new (System.Collections.Generic.List$1(UnityEngine.Vector2Int)).ctor();
            }
        },
        methods: {
            /*_Game.Board.HexGridGenerator.OnValidate start.*/
            OnValidate: function () {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#OnValidate", this ); }

                this.CustomBaseShape = this.customBaseShape;
            },
            /*_Game.Board.HexGridGenerator.OnValidate end.*/

            /*_Game.Board.HexGridGenerator.GenerateCoordinates start.*/
            GenerateCoordinates: function () {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#GenerateCoordinates", this ); }

                if (this.boardShape === _Game.Board.HexGridGenerator.BoardShape.Hexagon) {
                    return this.GenerateHexagonCoordinates();
                }

                if (this.boardShape === _Game.Board.HexGridGenerator.BoardShape.Custom) {
                    return this.GenerateCustomCoordinates();
                }

                return this.GenerateSquareCoordinates();
            },
            /*_Game.Board.HexGridGenerator.GenerateCoordinates end.*/

            /*_Game.Board.HexGridGenerator.CoordinateToWorld start.*/
            CoordinateToWorld: function (coordinate) {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#CoordinateToWorld", this ); }

                var layoutShape = this.GetLayoutShape();
                if (layoutShape === _Game.Board.HexGridGenerator.BoardShape.Square) {
                    return this.orientation === _Game.Board.HexGridGenerator.HexOrientation.FlatTop ? this.FlatTopOffsetToWorld(coordinate) : this.PointyTopOffsetToWorld(coordinate);
                }

                return this.orientation === _Game.Board.HexGridGenerator.HexOrientation.FlatTop ? this.FlatTopAxialToWorld(coordinate) : this.PointyTopAxialToWorld(coordinate);
            },
            /*_Game.Board.HexGridGenerator.CoordinateToWorld end.*/

            /*_Game.Board.HexGridGenerator.GetNeighbourCoordinates start.*/
            GetNeighbourCoordinates: function (coordinate) {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#GetNeighbourCoordinates", this ); }

                var layoutShape = this.GetLayoutShape();
                if (layoutShape === _Game.Board.HexGridGenerator.BoardShape.Square) {
                    return this.orientation === _Game.Board.HexGridGenerator.HexOrientation.FlatTop ? _Game.Board.HexGridGenerator.GetFlatTopOffsetNeighbours(coordinate) : _Game.Board.HexGridGenerator.GetPointyTopOffsetNeighbours(coordinate);
                }

                return _Game.Board.HexGridGenerator.GetAxialNeighbours(coordinate);
            },
            /*_Game.Board.HexGridGenerator.GetNeighbourCoordinates end.*/

            /*_Game.Board.HexGridGenerator.ContainsCustomCoordinate start.*/
            ContainsCustomCoordinate: function (coordinate) {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#ContainsCustomCoordinate", this ); }

                return this.customCoordinates.contains(coordinate.$clone());
            },
            /*_Game.Board.HexGridGenerator.ContainsCustomCoordinate end.*/

            /*_Game.Board.HexGridGenerator.SetCustomCoordinates start.*/
            SetCustomCoordinates: function (coordinates) {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#SetCustomCoordinates", this ); }

                var $t;
                this.customCoordinates.clear();
                var unique = new (System.Collections.Generic.HashSet$1(UnityEngine.Vector2Int)).ctor();
                $t = Bridge.getEnumerator(coordinates, UnityEngine.Vector2Int);
                try {
                    while ($t.moveNext()) {
                        var coordinate = $t.Current.$clone();
                        if (unique.add(coordinate.$clone())) {
                            this.customCoordinates.add(coordinate.$clone());
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.customCoordinates.Sort$2(_Game.Board.HexGridGenerator.CompareCoordinates);
            },
            /*_Game.Board.HexGridGenerator.SetCustomCoordinates end.*/

            /*_Game.Board.HexGridGenerator.AddCustomCoordinate start.*/
            AddCustomCoordinate: function (coordinate) {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#AddCustomCoordinate", this ); }

                if (!this.customCoordinates.contains(coordinate.$clone())) {
                    this.customCoordinates.add(coordinate.$clone());
                    this.customCoordinates.Sort$2(_Game.Board.HexGridGenerator.CompareCoordinates);
                }
            },
            /*_Game.Board.HexGridGenerator.AddCustomCoordinate end.*/

            /*_Game.Board.HexGridGenerator.RemoveCustomCoordinate start.*/
            RemoveCustomCoordinate: function (coordinate) {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#RemoveCustomCoordinate", this ); }

                this.customCoordinates.remove(coordinate.$clone());
            },
            /*_Game.Board.HexGridGenerator.RemoveCustomCoordinate end.*/

            /*_Game.Board.HexGridGenerator.GetLayoutShape start.*/
            GetLayoutShape: function () {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#GetLayoutShape", this ); }

                if (this.boardShape === _Game.Board.HexGridGenerator.BoardShape.Custom) {
                    return this.customBaseShape === _Game.Board.HexGridGenerator.BoardShape.Hexagon ? _Game.Board.HexGridGenerator.BoardShape.Hexagon : _Game.Board.HexGridGenerator.BoardShape.Square;
                }

                return this.boardShape === _Game.Board.HexGridGenerator.BoardShape.Hexagon ? _Game.Board.HexGridGenerator.BoardShape.Hexagon : _Game.Board.HexGridGenerator.BoardShape.Square;
            },
            /*_Game.Board.HexGridGenerator.GetLayoutShape end.*/

            /*_Game.Board.HexGridGenerator.GenerateSquareCoordinates start.*/
            GenerateSquareCoordinates: function () {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#GenerateSquareCoordinates", this ); }

                var coordinates = new (System.Collections.Generic.List$1(UnityEngine.Vector2Int)).ctor();
                for (var x = (-this.radius) | 0; x <= this.radius; x = (x + 1) | 0) {
                    for (var y = (-this.radius) | 0; y <= this.radius; y = (y + 1) | 0) {
                        coordinates.add(new UnityEngine.Vector2Int.$ctor1(x, y));
                    }
                }
                return coordinates;
            },
            /*_Game.Board.HexGridGenerator.GenerateSquareCoordinates end.*/

            /*_Game.Board.HexGridGenerator.GenerateHexagonCoordinates start.*/
            GenerateHexagonCoordinates: function () {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#GenerateHexagonCoordinates", this ); }

                var coordinates = new (System.Collections.Generic.List$1(UnityEngine.Vector2Int)).ctor();
                for (var q = (-this.radius) | 0; q <= this.radius; q = (q + 1) | 0) {
                    var r1 = UnityEngine.Mathf.Max(((-this.radius) | 0), ((((-q) | 0) - this.radius) | 0));
                    var r2 = UnityEngine.Mathf.Min(this.radius, ((((-q) | 0) + this.radius) | 0));
                    for (var r = r1; r <= r2; r = (r + 1) | 0) {
                        coordinates.add(new UnityEngine.Vector2Int.$ctor1(q, r));
                    }
                }
                return coordinates;
            },
            /*_Game.Board.HexGridGenerator.GenerateHexagonCoordinates end.*/

            /*_Game.Board.HexGridGenerator.GenerateCustomCoordinates start.*/
            GenerateCustomCoordinates: function () {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#GenerateCustomCoordinates", this ); }

                var coordinates = new (System.Collections.Generic.List$1(UnityEngine.Vector2Int)).ctor();
                var unique = new (System.Collections.Generic.HashSet$1(UnityEngine.Vector2Int)).ctor();
                for (var i = 0; i < this.customCoordinates.Count; i = (i + 1) | 0) {
                    if (unique.add(this.customCoordinates.getItem(i).$clone())) {
                        coordinates.add(this.customCoordinates.getItem(i).$clone());
                    }
                }
                coordinates.Sort$2(_Game.Board.HexGridGenerator.CompareCoordinates);
                return coordinates;
            },
            /*_Game.Board.HexGridGenerator.GenerateCustomCoordinates end.*/

            /*_Game.Board.HexGridGenerator.FlatTopOffsetToWorld start.*/
            FlatTopOffsetToWorld: function (coordinate) {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#FlatTopOffsetToWorld", this ); }

                var parity = _Game.Board.HexGridGenerator.PositiveModulo(coordinate.x, 2);
                var x = this.cellSize * 1.5 * coordinate.x;
                var z = this.cellSize * Math.sqrt(3.0) * (coordinate.y + parity * 0.5);
                return new pc.Vec3( x, 0.0, z );
            },
            /*_Game.Board.HexGridGenerator.FlatTopOffsetToWorld end.*/

            /*_Game.Board.HexGridGenerator.PointyTopOffsetToWorld start.*/
            PointyTopOffsetToWorld: function (coordinate) {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#PointyTopOffsetToWorld", this ); }

                var parity = _Game.Board.HexGridGenerator.PositiveModulo(coordinate.y, 2);
                var x = this.cellSize * Math.sqrt(3.0) * (coordinate.x + parity * 0.5);
                var z = this.cellSize * 1.5 * coordinate.y;
                return new pc.Vec3( x, 0.0, z );
            },
            /*_Game.Board.HexGridGenerator.PointyTopOffsetToWorld end.*/

            /*_Game.Board.HexGridGenerator.FlatTopAxialToWorld start.*/
            FlatTopAxialToWorld: function (coordinate) {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#FlatTopAxialToWorld", this ); }

                var x = this.cellSize * 1.5 * coordinate.x;
                var z = this.cellSize * Math.sqrt(3.0) * (coordinate.y + coordinate.x * 0.5);
                return new pc.Vec3( x, 0.0, z );
            },
            /*_Game.Board.HexGridGenerator.FlatTopAxialToWorld end.*/

            /*_Game.Board.HexGridGenerator.PointyTopAxialToWorld start.*/
            PointyTopAxialToWorld: function (coordinate) {
if ( TRACE ) { TRACE( "_Game.Board.HexGridGenerator#PointyTopAxialToWorld", this ); }

                var x = this.cellSize * Math.sqrt(3.0) * (coordinate.x + coordinate.y * 0.5);
                var z = this.cellSize * 1.5 * coordinate.y;
                return new pc.Vec3( x, 0.0, z );
            },
            /*_Game.Board.HexGridGenerator.PointyTopAxialToWorld end.*/


        }
    });
    /*_Game.Board.HexGridGenerator end.*/

    /*_Game.Board.HexGridGenerator+BoardShape start.*/
    Bridge.define("_Game.Board.HexGridGenerator.BoardShape", {
        $kind: 1006,
        statics: {
            fields: {
                Square: 0,
                Hexagon: 1,
                Custom: 2
            }
        }
    });
    /*_Game.Board.HexGridGenerator+BoardShape end.*/

    /*_Game.Board.HexGridGenerator+HexOrientation start.*/
    Bridge.define("_Game.Board.HexGridGenerator.HexOrientation", {
        $kind: 1006,
        statics: {
            fields: {
                FlatTop: 0,
                PointyTop: 1
            }
        }
    });
    /*_Game.Board.HexGridGenerator+HexOrientation end.*/

    /*_Game.Configs.HexColorConfig start.*/
    Bridge.define("_Game.Configs.HexColorConfig", {
        inherits: [UnityEngine.ScriptableObject],
        statics: {
            methods: {
                /*_Game.Configs.HexColorConfig.GetFallbackColor:static start.*/
                GetFallbackColor: function (hexColor) {
if ( TRACE ) { TRACE( "_Game.Configs.HexColorConfig#GetFallbackColor", this ); }

                    UnityEngine.Debug.Log$1("Getting fallback color : " + (System.Enum.toString(_Game.Stacks.HexColor, hexColor) || ""));
                    switch (hexColor) {
                        case _Game.Stacks.HexColor.Red: 
                            return new pc.Color( 0.95, 0.18, 0.18, 1 );
                        case _Game.Stacks.HexColor.Blue: 
                            return new pc.Color( 0.18, 0.42, 0.95, 1 );
                        case _Game.Stacks.HexColor.Green: 
                            return new pc.Color( 0.18, 0.75, 0.32, 1 );
                        case _Game.Stacks.HexColor.Yellow: 
                            return new pc.Color( 1.0, 0.83, 0.18, 1 );
                        case _Game.Stacks.HexColor.Purple: 
                            return new pc.Color( 0.58, 0.25, 0.9, 1 );
                        case _Game.Stacks.HexColor.Orange: 
                            return new pc.Color( 1.0, 0.48, 0.12, 1 );
                        default: 
                            return new pc.Color( 1, 0, 1, 1 );
                    }
                },
                /*_Game.Configs.HexColorConfig.GetFallbackColor:static end.*/


            }
        },
        fields: {
            entries: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Game.Configs.HexColorConfig#init", this ); }

                this.entries = new (System.Collections.Generic.List$1(_Game.Configs.HexColorConfig.Entry)).ctor();
            }
        },
        methods: {
            /*_Game.Configs.HexColorConfig.GetColor start.*/
            GetColor: function (hexColor) {
if ( TRACE ) { TRACE( "_Game.Configs.HexColorConfig#GetColor", this ); }

                var entry = this.entries.Find(function (x) {
                    return x.hexColor === hexColor;
                });
                return entry != null ? entry.color.$clone() : _Game.Configs.HexColorConfig.GetFallbackColor(hexColor);
            },
            /*_Game.Configs.HexColorConfig.GetColor end.*/

            /*_Game.Configs.HexColorConfig.GetMaterial start.*/
            GetMaterial: function (hexColor) {
if ( TRACE ) { TRACE( "_Game.Configs.HexColorConfig#GetMaterial", this ); }

                var entry = this.entries.Find(function (x) {
                    return x.hexColor === hexColor;
                });
                return entry != null ? entry.material : null;
            },
            /*_Game.Configs.HexColorConfig.GetMaterial end.*/


        }
    });
    /*_Game.Configs.HexColorConfig end.*/

    /*_Game.Configs.HexColorConfig+Entry start.*/
    Bridge.define("_Game.Configs.HexColorConfig.Entry", {
        $kind: 1002,
        fields: {
            hexColor: 0,
            color: null,
            material: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Game.Configs.HexColorConfig.Entry#init", this ); }

                this.color = new UnityEngine.Color();
                this.color = new pc.Color( 1, 1, 1, 1 );
            }
        }
    });
    /*_Game.Configs.HexColorConfig+Entry end.*/

    /*_Game.Configs.LevelConfig start.*/
    Bridge.define("_Game.Configs.LevelConfig", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            boardRadius: 0,
            startingBoardStacks: null,
            trayStacks: null,
            tutorialTargetCell: null,
            completeWhenTrayEmpty: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Game.Configs.LevelConfig#init", this ); }

                this.tutorialTargetCell = new UnityEngine.Vector2Int();
                this.boardRadius = 2;
                this.startingBoardStacks = new (System.Collections.Generic.List$1(_Game.Configs.LevelConfig.BoardStackDefinition)).ctor();
                this.trayStacks = new (System.Collections.Generic.List$1(_Game.Configs.LevelConfig.StackDefinition)).ctor();
                this.tutorialTargetCell = new UnityEngine.Vector2Int.$ctor1(0, 0);
                this.completeWhenTrayEmpty = true;
            }
        }
    });
    /*_Game.Configs.LevelConfig end.*/

    /*_Game.Configs.LevelConfig+BoardStackDefinition start.*/
    Bridge.define("_Game.Configs.LevelConfig.BoardStackDefinition", {
        $kind: 1002,
        fields: {
            coordinate: null,
            stack: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Game.Configs.LevelConfig.BoardStackDefinition#init", this ); }

                this.coordinate = new UnityEngine.Vector2Int();
                this.stack = new _Game.Configs.LevelConfig.StackDefinition();
            }
        }
    });
    /*_Game.Configs.LevelConfig+BoardStackDefinition end.*/

    /*_Game.Configs.LevelConfig+StackDefinition start.*/
    Bridge.define("_Game.Configs.LevelConfig.StackDefinition", {
        $kind: 1002,
        fields: {
            colorsBottomToTop: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Game.Configs.LevelConfig.StackDefinition#init", this ); }

                this.colorsBottomToTop = new (System.Collections.Generic.List$1(_Game.Stacks.HexColor)).ctor();
            }
        },
        methods: {
            /*_Game.Configs.LevelConfig+StackDefinition.CreateStack start.*/
            CreateStack: function () {
if ( TRACE ) { TRACE( "_Game.Configs.LevelConfig.StackDefinition#CreateStack", this ); }

                return new _Game.Stacks.HexStack.$ctor1(this.colorsBottomToTop);
            },
            /*_Game.Configs.LevelConfig+StackDefinition.CreateStack end.*/


        }
    });
    /*_Game.Configs.LevelConfig+StackDefinition end.*/

    /*_Game.DI.GameAssets start.*/
    Bridge.define("_Game.DI.GameAssets", {
        fields: {
            HexCellPrefab: null,
            HexPiecePrefab: null,
            HexColorConfig: null,
            TutorialHandSprite: null
        },
        ctors: {
            ctor: function (hexCellPrefab, hexPiecePrefab, hexColorConfig, tutorialHandSprite) {
if ( TRACE ) { TRACE( "_Game.DI.GameAssets#ctor", this ); }

                this.$initialize();
                this.HexCellPrefab = hexCellPrefab;
                this.HexPiecePrefab = hexPiecePrefab;
                this.HexColorConfig = hexColorConfig;
                this.TutorialHandSprite = tutorialHandSprite;
            }
        }
    });
    /*_Game.DI.GameAssets end.*/

    /*_Game.Drag.DragController start.*/
    Bridge.define("_Game.Drag.DragController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*_Game.Drag.DragController.TryGetWorldPointOnPlane:static start.*/
                TryGetWorldPointOnPlane: function (cam, screenPosition, y, world) {
if ( TRACE ) { TRACE( "_Game.Drag.DragController#TryGetWorldPointOnPlane", this ); }

                    world.v = Bridge.getDefaultValue(UnityEngine.Vector3);
                    if (UnityEngine.Component.op_Equality(cam, null)) {
                        return false;
                    }

                    var ray = cam.ScreenPointToRay(UnityEngine.Vector3.FromVector2(screenPosition));
                    var plane = new UnityEngine.Plane.$ctor2(pc.Vec3.UP.clone(), new pc.Vec3( 0.0, y, 0.0 ));
                    var distance = { };
                    if (!plane.Raycast(ray, distance)) {
                        return false;
                    }

                    world.v = ray.GetPoint(distance.v);
                    return true;
                },
                /*_Game.Drag.DragController.TryGetWorldPointOnPlane:static end.*/


            }
        },
        fields: {
            returnDuration: 0,
            dragHeight: 0,
            inputCamera: null,
            board: null,
            tray: null,
            inputEnabled: false,
            draggedStack: null,
            draggedHome: null,
            highlightedCell: null
        },
        events: {
            DragStarted: null,
            DragFailed: null,
            StackPlaced: null
        },
        props: {
            IsDragging: {
                get: function () {
if ( TRACE ) { TRACE( "_Game.Drag.DragController#IsDragging#get", this ); }

                    return UnityEngine.MonoBehaviour.op_Inequality(this.draggedStack, null);
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Game.Drag.DragController#init", this ); }

                this.draggedHome = new UnityEngine.Vector3();
                this.returnDuration = 0.2;
                this.dragHeight = 1.15;
                this.inputEnabled = true;
            }
        },
        methods: {
            /*_Game.Drag.DragController.Initialize start.*/
            Initialize: function (inputCamera, board, tray) {
if ( TRACE ) { TRACE( "_Game.Drag.DragController#Initialize", this ); }

                this.inputCamera = inputCamera;
                this.board = board;
                this.tray = tray;
            },
            /*_Game.Drag.DragController.Initialize end.*/

            /*_Game.Drag.DragController.SetInputEnabled start.*/
            SetInputEnabled: function (enabled) {
if ( TRACE ) { TRACE( "_Game.Drag.DragController#SetInputEnabled", this ); }

                this.inputEnabled = enabled;
                if (!enabled && UnityEngine.MonoBehaviour.op_Equality(this.draggedStack, null)) {
                    this.board.ClearHighlights();
                }
            },
            /*_Game.Drag.DragController.SetInputEnabled end.*/

            /*_Game.Drag.DragController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "_Game.Drag.DragController#Update", this ); }

                if (!this.inputEnabled || UnityEngine.MonoBehaviour.op_Equality(this.board, null) || UnityEngine.MonoBehaviour.op_Equality(this.tray, null)) {
                    return;
                }
                var downPosition = { v : new UnityEngine.Vector2() };

                if (this.TryGetPointerDown(downPosition)) {
                    this.TryBeginDrag(downPosition.v);
                }

                if (UnityEngine.MonoBehaviour.op_Equality(this.draggedStack, null)) {
                    return;
                }
                var position = { v : new UnityEngine.Vector2() };

                if (this.TryGetPointerPosition(position)) {
                    this.UpdateDrag(position.v);
                }
                var upPosition = { v : new UnityEngine.Vector2() };

                if (this.TryGetPointerUp(upPosition)) {
                    this.EndDrag(upPosition.v);
                }
            },
            /*_Game.Drag.DragController.Update end.*/

            /*_Game.Drag.DragController.TryBeginDrag start.*/
            TryBeginDrag: function (screenPosition) {
if ( TRACE ) { TRACE( "_Game.Drag.DragController#TryBeginDrag", this ); }

                var stack = this.tray.GetStackUnderPointer(screenPosition, this.inputCamera);
                if (UnityEngine.MonoBehaviour.op_Equality(stack, null)) {
                    return;
                }

                this.draggedStack = stack;
                this.draggedHome = this.tray.GetHomePosition(stack);
                DG.Tweening.ShortcutExtensions.DOKill(this.draggedStack.transform);
                this.draggedStack.transform.SetParent(this.transform, true);
                !Bridge.staticEquals(this.DragStarted, null) ? this.DragStarted(stack) : null;
                this.UpdateDrag(screenPosition);
            },
            /*_Game.Drag.DragController.TryBeginDrag end.*/

            /*_Game.Drag.DragController.UpdateDrag start.*/
            UpdateDrag: function (screenPosition) {
if ( TRACE ) { TRACE( "_Game.Drag.DragController#UpdateDrag", this ); }

                var cam = UnityEngine.Component.op_Inequality(this.inputCamera, null) ? this.inputCamera : UnityEngine.Camera.main;
                var world = { v : new UnityEngine.Vector3() };
                if (_Game.Drag.DragController.TryGetWorldPointOnPlane(cam, screenPosition, this.dragHeight, world)) {
                    this.draggedStack.transform.position = world.v.$clone();
                }

                this.highlightedCell = this.board.GetCellUnderPointer(screenPosition);
                var valid = this.board.IsCellEmpty(this.highlightedCell);
                this.board.HighlightCell(this.highlightedCell, this.highlightedCell != null, valid);
            },
            /*_Game.Drag.DragController.UpdateDrag end.*/

            /*_Game.Drag.DragController.EndDrag start.*/
            EndDrag: function (screenPosition) {
if ( TRACE ) { TRACE( "_Game.Drag.DragController#EndDrag", this ); }

                var targetCell = this.board.GetCellUnderPointer(screenPosition);
                var valid = this.board.IsCellEmpty(targetCell);
                this.board.ClearHighlights();

                var stack = this.draggedStack;
                this.draggedStack = null;
                this.highlightedCell = null;

                if (valid) {
                    this.tray.RemoveStack(stack);
                    this.board.PlaceStack(targetCell, stack.Stack);
                    this.board.PlaceStackView(targetCell, stack, true);
                    !Bridge.staticEquals(this.StackPlaced, null) ? this.StackPlaced(stack, targetCell) : null;
                } else {
                    DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(stack.transform, this.draggedHome.$clone(), this.returnDuration), DG.Tweening.Ease.OutQuad), Bridge.fn.bind(this, function () {
                        if (UnityEngine.MonoBehaviour.op_Inequality(this.tray, null)) {
                            stack.transform.SetParent(this.tray.transform, true);
                        }
                    }));
                    !Bridge.staticEquals(this.DragFailed, null) ? this.DragFailed(stack) : null;
                }
            },
            /*_Game.Drag.DragController.EndDrag end.*/

            /*_Game.Drag.DragController.TryGetPointerDown start.*/
            TryGetPointerDown: function (position) {
if ( TRACE ) { TRACE( "_Game.Drag.DragController#TryGetPointerDown", this ); }

                if (UnityEngine.Input.touchCount > 0) {
                    var touch = UnityEngine.Input.GetTouch(0);
                    position.v = touch.position.$clone();
                    return touch.phase === UnityEngine.TouchPhase.Began;
                }

                position.v = UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition.$clone());
                return UnityEngine.Input.GetMouseButtonDown(0);
            },
            /*_Game.Drag.DragController.TryGetPointerDown end.*/

            /*_Game.Drag.DragController.TryGetPointerPosition start.*/
            TryGetPointerPosition: function (position) {
if ( TRACE ) { TRACE( "_Game.Drag.DragController#TryGetPointerPosition", this ); }

                if (UnityEngine.Input.touchCount > 0) {
                    var touch = UnityEngine.Input.GetTouch(0);
                    position.v = touch.position.$clone();
                    return touch.phase !== UnityEngine.TouchPhase.Ended && touch.phase !== UnityEngine.TouchPhase.Canceled;
                }

                if (UnityEngine.Input.GetMouseButton(0)) {
                    position.v = UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition.$clone());
                    return true;
                }

                position.v = Bridge.getDefaultValue(UnityEngine.Vector2);
                return false;
            },
            /*_Game.Drag.DragController.TryGetPointerPosition end.*/

            /*_Game.Drag.DragController.TryGetPointerUp start.*/
            TryGetPointerUp: function (position) {
if ( TRACE ) { TRACE( "_Game.Drag.DragController#TryGetPointerUp", this ); }

                if (UnityEngine.Input.touchCount > 0) {
                    var touch = UnityEngine.Input.GetTouch(0);
                    position.v = touch.position.$clone();
                    return touch.phase === UnityEngine.TouchPhase.Ended || touch.phase === UnityEngine.TouchPhase.Canceled;
                }

                position.v = UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition.$clone());
                return UnityEngine.Input.GetMouseButtonUp(0);
            },
            /*_Game.Drag.DragController.TryGetPointerUp end.*/


        }
    });
    /*_Game.Drag.DragController end.*/

    /*_Game.Flow.LevelFlowController start.*/
    Bridge.define("_Game.Flow.LevelFlowController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*_Game.Flow.LevelFlowController.WasPointerPressedThisFrame:static start.*/
                WasPointerPressedThisFrame: function () {
if ( TRACE ) { TRACE( "_Game.Flow.LevelFlowController#WasPointerPressedThisFrame", this ); }

                    if (UnityEngine.Input.touchCount > 0 && UnityEngine.Input.GetTouch(0).phase === UnityEngine.TouchPhase.Began) {
                        return true;
                    }

                    return UnityEngine.Input.GetMouseButtonDown(0);
                },
                /*_Game.Flow.LevelFlowController.WasPointerPressedThisFrame:static end.*/


            }
        },
        fields: {
            board: null,
            tray: null,
            drag: null,
            mergeSystem: null,
            tutorial: null,
            packshot: null,
            fullGameInstallRequested: false,
            State: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Game.Flow.LevelFlowController#init", this ); }

                this.State = _Game.Flow.LevelFlowState.Initializing;
            }
        },
        methods: {
            /*_Game.Flow.LevelFlowController.Initialize start.*/
            Initialize: function (board, tray, drag, mergeSystem, tutorial, packshot) {
if ( TRACE ) { TRACE( "_Game.Flow.LevelFlowController#Initialize", this ); }

                this.UnsubscribeFromDrag();

                this.board = board;
                this.tray = tray;
                this.drag = drag;
                this.mergeSystem = mergeSystem;
                this.tutorial = tutorial;
                this.packshot = packshot;

                if (UnityEngine.MonoBehaviour.op_Inequality(drag, null)) {
                    drag.addDragStarted(Bridge.fn.cacheBind(this, this.OnDragStarted));
                    drag.addDragFailed(Bridge.fn.cacheBind(this, this.OnDragFailed));
                    drag.addStackPlaced(Bridge.fn.cacheBind(this, this.OnStackPlaced));
                }
            },
            /*_Game.Flow.LevelFlowController.Initialize end.*/

            /*_Game.Flow.LevelFlowController.StartLevelFlow start.*/
            StartLevelFlow: function () {
if ( TRACE ) { TRACE( "_Game.Flow.LevelFlowController#StartLevelFlow", this ); }

                this.SetState(_Game.Flow.LevelFlowState.Initializing);
                this.StartLevel();
            },
            /*_Game.Flow.LevelFlowController.StartLevelFlow end.*/

            /*_Game.Flow.LevelFlowController.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "_Game.Flow.LevelFlowController#OnDestroy", this ); }

                this.UnsubscribeFromDrag();
            },
            /*_Game.Flow.LevelFlowController.OnDestroy end.*/

            /*_Game.Flow.LevelFlowController.StartLevel start.*/
            StartLevel: function () {
if ( TRACE ) { TRACE( "_Game.Flow.LevelFlowController#StartLevel", this ); }

                this.fullGameInstallRequested = false;
                this.packshot.Hide();
                this.drag.SetInputEnabled(true);
                this.SetState(_Game.Flow.LevelFlowState.Tutorial);
                this.tutorial.Show();
                this.SetState(_Game.Flow.LevelFlowState.WaitingForInput);
            },
            /*_Game.Flow.LevelFlowController.StartLevel end.*/

            /*_Game.Flow.LevelFlowController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "_Game.Flow.LevelFlowController#Update", this ); }

                if (this.State !== _Game.Flow.LevelFlowState.Packshot || this.fullGameInstallRequested || !_Game.Flow.LevelFlowController.WasPointerPressedThisFrame()) {
                    return;
                }

                this.fullGameInstallRequested = true;
                Luna.Unity.Playable.InstallFullGame();
            },
            /*_Game.Flow.LevelFlowController.Update end.*/

            /*_Game.Flow.LevelFlowController.OnDragStarted start.*/
            OnDragStarted: function (stackView) {
if ( TRACE ) { TRACE( "_Game.Flow.LevelFlowController#OnDragStarted", this ); }

                if (this.State === _Game.Flow.LevelFlowState.Merging || this.State === _Game.Flow.LevelFlowState.Packshot) {
                    return;
                }

                this.SetState(_Game.Flow.LevelFlowState.Dragging);
                this.tutorial.Hide();
            },
            /*_Game.Flow.LevelFlowController.OnDragStarted end.*/

            /*_Game.Flow.LevelFlowController.OnDragFailed start.*/
            OnDragFailed: function (stackView) {
if ( TRACE ) { TRACE( "_Game.Flow.LevelFlowController#OnDragFailed", this ); }

                if (this.State === _Game.Flow.LevelFlowState.Packshot) {
                    return;
                }

                this.SetState(_Game.Flow.LevelFlowState.WaitingForInput);
                this.tutorial.RestartAfterInactivity();
            },
            /*_Game.Flow.LevelFlowController.OnDragFailed end.*/

            /*_Game.Flow.LevelFlowController.OnStackPlaced start.*/
            OnStackPlaced: function (stackView, cell) {
if ( TRACE ) { TRACE( "_Game.Flow.LevelFlowController#OnStackPlaced", this ); }

                this.StartCoroutine$1(this.HandleStackPlaced(cell));
            },
            /*_Game.Flow.LevelFlowController.OnStackPlaced end.*/

            /*_Game.Flow.LevelFlowController.HandleStackPlaced start.*/
            HandleStackPlaced: function (cell) {
if ( TRACE ) { TRACE( "_Game.Flow.LevelFlowController#HandleStackPlaced", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.tutorial.Complete();
                                        this.drag.SetInputEnabled(false);
                                        this.SetState(_Game.Flow.LevelFlowState.Merging);

                                        if (UnityEngine.MonoBehaviour.op_Inequality(this.mergeSystem, null)) {
                                            $step = 1;
                                            continue;
                                        } else  {
                                            $step = 3;
                                            continue;
                                        }
                                }
                                case 1: {
                                    $enumerator.current = this.StartCoroutine$1(this.mergeSystem.RunMerge(cell));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    $step = 4;
                                    continue;
                                }
                                case 3: {
                                    UnityEngine.Debug.LogWarning$1("MergeSystem is missing; placed stack will not merge.");
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    if (this.board.IsBoardEmpty) {
                                            $step = 5;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 5: {
                                    Luna.Unity.LifeCycle.GameEnded();
                                        this.SetState(_Game.Flow.LevelFlowState.Packshot);
                                        this.packshot.Show();
                                        return false;
                                    $step = 6;
                                    continue;
                                }
                                case 6: {
                                    this.SetState(_Game.Flow.LevelFlowState.WaitingForInput);
                                        this.drag.SetInputEnabled(true);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*_Game.Flow.LevelFlowController.HandleStackPlaced end.*/

            /*_Game.Flow.LevelFlowController.SetState start.*/
            SetState: function (state) {
if ( TRACE ) { TRACE( "_Game.Flow.LevelFlowController#SetState", this ); }

                this.State = state;
            },
            /*_Game.Flow.LevelFlowController.SetState end.*/

            /*_Game.Flow.LevelFlowController.UnsubscribeFromDrag start.*/
            UnsubscribeFromDrag: function () {
if ( TRACE ) { TRACE( "_Game.Flow.LevelFlowController#UnsubscribeFromDrag", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.drag, null)) {
                    return;
                }

                this.drag.removeDragStarted(Bridge.fn.cacheBind(this, this.OnDragStarted));
                this.drag.removeDragFailed(Bridge.fn.cacheBind(this, this.OnDragFailed));
                this.drag.removeStackPlaced(Bridge.fn.cacheBind(this, this.OnStackPlaced));
            },
            /*_Game.Flow.LevelFlowController.UnsubscribeFromDrag end.*/


        }
    });
    /*_Game.Flow.LevelFlowController end.*/

    /*_Game.Flow.LevelFlowState start.*/
    Bridge.define("_Game.Flow.LevelFlowState", {
        $kind: 6,
        statics: {
            fields: {
                Initializing: 0,
                Tutorial: 1,
                WaitingForInput: 2,
                Dragging: 3,
                Merging: 4,
                Packshot: 5
            }
        }
    });
    /*_Game.Flow.LevelFlowState end.*/

    /*_Game.Merge.MergeAnimator start.*/
    Bridge.define("_Game.Merge.MergeAnimator", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*_Game.Merge.MergeAnimator.ApplyEffectColor:static start.*/
                ApplyEffectColor: function (effect, color) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeAnimator#ApplyEffectColor", this ); }

                    var $t, $t1;
                    var particleSystems = effect.GetComponentsInChildren(UnityEngine.ParticleSystem, true);
                    $t = Bridge.getEnumerator(particleSystems);
                    try {
                        while ($t.moveNext()) {
                            var particleSystem = $t.Current;
                            if (UnityEngine.Component.op_Equality(particleSystem, null)) {
                                continue;
                            }

                            var main = particleSystem.main;
                            main.startColor = new pc.MinMaxGradient(color.$clone());
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }

                    var renderers = effect.GetComponentsInChildren(UnityEngine.ParticleSystemRenderer, true);
                    $t1 = Bridge.getEnumerator(renderers);
                    try {
                        while ($t1.moveNext()) {
                            var renderer = $t1.Current;
                            if (UnityEngine.Component.op_Equality(renderer, null) || renderer.material == null) {
                                continue;
                            }

                            var material = renderer.material;
                            if (material.HasProperty$1("_BaseColor")) {
                                material.SetColor$1("_BaseColor", color);
                            }
                            if (material.HasProperty$1("_Color")) {
                                material.SetColor$1("_Color", color);
                            }
                            if (material.HasProperty$1("_EmissionColor")) {
                                material.SetColor$1("_EmissionColor", new pc.Color( color.r * 2.0, color.g * 2.0, color.b * 2.0, color.a * 2.0 ));
                            }
                        }
                    } finally {
                        if (Bridge.is($t1, System.IDisposable)) {
                            $t1.System$IDisposable$Dispose();
                        }
                    }
                },
                /*_Game.Merge.MergeAnimator.ApplyEffectColor:static end.*/


            }
        },
        fields: {
            baseMoveDuration: 0,
            baseDisappearDuration: 0,
            speedIncreasePerStep: 0,
            maxSpeedMultiplier: 0,
            jumpPower: 0,
            pieceStagger: 0,
            flipDegrees: 0,
            landingTiltDegrees: 0,
            disappearStepDelay: 0,
            disappearEffectPrefab: null,
            effectParent: null,
            disappearEffectLifetime: 0,
            disappearEffectSurfaceOffset: 0,
            assets: null,
            soundPlayer: null,
            animationStep: 0
        },
        props: {
            BaseMoveDuration: {
                get: function () {
if ( TRACE ) { TRACE( "_Game.Merge.MergeAnimator#BaseMoveDuration#get", this ); }

                    return this.baseMoveDuration;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeAnimator#BaseMoveDuration#set", this ); }

                    this.baseMoveDuration = UnityEngine.Mathf.Max(0.01, value);
                }
            },
            BaseDisappearDuration: {
                get: function () {
if ( TRACE ) { TRACE( "_Game.Merge.MergeAnimator#BaseDisappearDuration#get", this ); }

                    return this.baseDisappearDuration;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeAnimator#BaseDisappearDuration#set", this ); }

                    this.baseDisappearDuration = UnityEngine.Mathf.Max(0.01, value);
                }
            },
            SpeedIncreasePerStep: {
                get: function () {
if ( TRACE ) { TRACE( "_Game.Merge.MergeAnimator#SpeedIncreasePerStep#get", this ); }

                    return this.speedIncreasePerStep;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeAnimator#SpeedIncreasePerStep#set", this ); }

                    this.speedIncreasePerStep = UnityEngine.Mathf.Max(0.0, value);
                }
            },
            MaxSpeedMultiplier: {
                get: function () {
if ( TRACE ) { TRACE( "_Game.Merge.MergeAnimator#MaxSpeedMultiplier#get", this ); }

                    return this.maxSpeedMultiplier;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeAnimator#MaxSpeedMultiplier#set", this ); }

                    this.maxSpeedMultiplier = UnityEngine.Mathf.Max(1.0, value);
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Game.Merge.MergeAnimator#init", this ); }

                this.baseMoveDuration = 0.35;
                this.baseDisappearDuration = 0.28;
                this.speedIncreasePerStep = 0.3;
                this.maxSpeedMultiplier = 3.0;
                this.jumpPower = 0.8;
                this.pieceStagger = 0.035;
                this.flipDegrees = 360.0;
                this.landingTiltDegrees = 18.0;
                this.disappearStepDelay = 0.035;
                this.disappearEffectLifetime = 2.0;
                this.disappearEffectSurfaceOffset = 0.0;
            }
        },
        methods: {
            /*_Game.Merge.MergeAnimator.ResetSpeed start.*/
            ResetSpeed: function () {
if ( TRACE ) { TRACE( "_Game.Merge.MergeAnimator#ResetSpeed", this ); }

                this.animationStep = 0;
            },
            /*_Game.Merge.MergeAnimator.ResetSpeed end.*/

            /*_Game.Merge.MergeAnimator.Initialize start.*/
            Initialize: function (assets, soundPlayer) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeAnimator#Initialize", this ); }

                this.assets = assets;
                this.soundPlayer = soundPlayer;
            },
            /*_Game.Merge.MergeAnimator.Initialize end.*/

            /*_Game.Merge.MergeAnimator.AnimateMove start.*/
            AnimateMove: function (from, to, count) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeAnimator#AnimateMove", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    duration,
                    movingPieces,
                    sequence,
                    piece,
                    target,
                    startTime,
                    pieceSequence,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (UnityEngine.MonoBehaviour.op_Equality(from, null) || UnityEngine.MonoBehaviour.op_Equality(to, null) || count <= 0) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    duration = this.GetDuration(this.baseMoveDuration);
                                        movingPieces = from.DetachTopVisualHexes(count);
                                        sequence = DG.Tweening.DOTween.Sequence();

                                        for (var i = 0; i < movingPieces.Count; i = (i + 1) | 0) {
                                            piece = { v : movingPieces.getItem(i) };
                                            if (UnityEngine.MonoBehaviour.op_Equality(piece.v, null)) {
                                                continue;
                                            }

                                            target = to.transform.TransformPoint$1(new pc.Vec3( 0.0, (((to.VisualCount + i) | 0)) * to.HeightOffset, 0.0 ));
                                            startTime = i * this.pieceStagger / this.CurrentSpeedMultiplier();
                                            pieceSequence = DG.Tweening.DOTween.Sequence();
                                            DG.Tweening.TweenSettingsExtensions.Join(pieceSequence, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.ShortcutExtensions.DOJump(piece.v.transform, target.$clone(), this.jumpPower, 1, duration), DG.Tweening.Ease.InOutQuad));
                                            DG.Tweening.TweenSettingsExtensions.Join(pieceSequence, this.CreateSmartFlipTween(piece.v.transform, target.$clone(), duration));
                                            DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Sequence, pieceSequence, (function ($me, piece) {
                                                return function () {
                                                    to.AttachVisualHexOnTop(piece.v);
                                                    piece.v.transform.localRotation = pc.Quat.IDENTITY.clone();
                                                };
                                            })(this, piece));
                                            DG.Tweening.TweenSettingsExtensions.InsertCallback(sequence, startTime, Bridge.fn.cacheBind(this, this.PlayElementFlyToStackSound));
                                            DG.Tweening.TweenSettingsExtensions.Insert(sequence, startTime, pieceSequence);
                                        }

                                        from.SnapVisualsToStack();
                                        this.AdvanceSpeed();
                                        $enumerator.current = DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion(sequence, true);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*_Game.Merge.MergeAnimator.AnimateMove end.*/

            /*_Game.Merge.MergeAnimator.AnimateDisappear start.*/
            AnimateDisappear: function (stackView, count) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeAnimator#AnimateDisappear", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = this.AnimateDisappear$1(stackView, count, 0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*_Game.Merge.MergeAnimator.AnimateDisappear end.*/

            /*_Game.Merge.MergeAnimator.AnimateDisappear$1 start.*/
            AnimateDisappear$1: function (stackView, count, color) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeAnimator#AnimateDisappear$1", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    duration,
                    stepDelay,
                    pieces,
                    effectPosition,
                    sequence,
                    $t,
                    piece,
                    pieceSequence,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (UnityEngine.MonoBehaviour.op_Equality(stackView, null) || count <= 0) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    duration = this.GetDuration(this.baseDisappearDuration);
                                        stepDelay = this.disappearStepDelay / this.CurrentSpeedMultiplier();
                                        pieces = stackView.DetachTopVisualHexes(count);
                                        effectPosition = this.GetDisappearEffectPosition(stackView);
                                        sequence = DG.Tweening.DOTween.Sequence();

                                        $t = Bridge.getEnumerator(pieces);
                                        try {
                                            while ($t.moveNext()) {
                                                piece = $t.Current;
                                                if (UnityEngine.MonoBehaviour.op_Equality(piece, null)) {
                                                    continue;
                                                }

                                                pieceSequence = DG.Tweening.DOTween.Sequence();
                                                DG.Tweening.TweenSettingsExtensions.AppendCallback(pieceSequence, Bridge.fn.cacheBind(this, this.PlayElementDisappearSound));
                                                DG.Tweening.TweenSettingsExtensions.Append(pieceSequence, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(piece.transform, pc.Vec3.ZERO.clone(), duration), DG.Tweening.Ease.InQuad));
                                                DG.Tweening.TweenSettingsExtensions.Append(sequence, pieceSequence);
                                                DG.Tweening.TweenSettingsExtensions.AppendInterval(sequence, stepDelay);
                                            }
                                        } finally {
                                            if (Bridge.is($t, System.IDisposable)) {
                                                $t.System$IDisposable$Dispose();
                                            }
                                        }

                                        DG.Tweening.TweenSettingsExtensions.AppendCallback(sequence, Bridge.fn.bind(this, function () {
                                            var $t1;
                                            $t1 = Bridge.getEnumerator(pieces);
                                            try {
                                                while ($t1.moveNext()) {
                                                    var piece1 = $t1.Current;
                                                    if (UnityEngine.MonoBehaviour.op_Inequality(piece1, null)) {
                                                        UnityEngine.MonoBehaviour.Destroy(piece1.gameObject);
                                                    }
                                                }
                                            } finally {
                                                if (Bridge.is($t1, System.IDisposable)) {
                                                    $t1.System$IDisposable$Dispose();
                                                }
                                            }
                                            stackView.SnapVisualsToStack();
                                            this.SpawnDisappearEffect(effectPosition, color);
                                            this.PlayAllElementsDisappearCompleteSound();
                                        }));

                                        this.AdvanceSpeed();
                                        $enumerator.current = DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion(sequence, true);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    // Effect delay

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*_Game.Merge.MergeAnimator.AnimateDisappear$1 end.*/

            /*_Game.Merge.MergeAnimator.GetDisappearEffectPosition start.*/
            GetDisappearEffectPosition: function (stackView) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeAnimator#GetDisappearEffectPosition", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(stackView, null)) {
                    return this.transform.position.$clone();
                }

                var position = stackView.VisualCount > 0 ? stackView.GetTopPosition() : stackView.transform.position.$clone();
                return position.$clone().add( pc.Vec3.UP.clone().clone().scale( this.disappearEffectSurfaceOffset ) );
            },
            /*_Game.Merge.MergeAnimator.GetDisappearEffectPosition end.*/

            /*_Game.Merge.MergeAnimator.SpawnDisappearEffect start.*/
            SpawnDisappearEffect: function (position, color) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeAnimator#SpawnDisappearEffect", this ); }

                var $t;
                if (UnityEngine.GameObject.op_Equality(this.disappearEffectPrefab, null)) {
                    return;
                }

                var parent = UnityEngine.Component.op_Inequality(this.effectParent, null) ? this.effectParent : this.transform;
                var prefabTransform = this.disappearEffectPrefab.transform;
                var effect = UnityEngine.Object.Instantiate$3(UnityEngine.GameObject, this.disappearEffectPrefab, position.$clone().add( prefabTransform.localPosition ), prefabTransform.localRotation, parent);
                var colorConfig = this.assets != null ? this.assets.HexColorConfig : null;
                _Game.Merge.MergeAnimator.ApplyEffectColor(effect, colorConfig != null ? colorConfig.GetColor(color) : _Game.Configs.HexColorConfig.GetFallbackColor(color));
                var particleSystems = effect.GetComponentsInChildren(UnityEngine.ParticleSystem, true);
                $t = Bridge.getEnumerator(particleSystems);
                try {
                    while ($t.moveNext()) {
                        var particleSystem = $t.Current;
                        if (UnityEngine.Component.op_Inequality(particleSystem, null)) {
                            particleSystem.Play$1(true);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                this.Destroy(effect, UnityEngine.Mathf.Max(0.1, this.disappearEffectLifetime));
            },
            /*_Game.Merge.MergeAnimator.SpawnDisappearEffect end.*/

            /*_Game.Merge.MergeAnimator.PlayElementFlyToStackSound start.*/
            PlayElementFlyToStackSound: function () {
if ( TRACE ) { TRACE( "_Game.Merge.MergeAnimator#PlayElementFlyToStackSound", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.soundPlayer, null)) {
                    this.soundPlayer.PlayElementFlyToStack();
                }
            },
            /*_Game.Merge.MergeAnimator.PlayElementFlyToStackSound end.*/

            /*_Game.Merge.MergeAnimator.PlayElementDisappearSound start.*/
            PlayElementDisappearSound: function () {
if ( TRACE ) { TRACE( "_Game.Merge.MergeAnimator#PlayElementDisappearSound", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.soundPlayer, null)) {
                    this.soundPlayer.PlayElementDisappear();
                }
            },
            /*_Game.Merge.MergeAnimator.PlayElementDisappearSound end.*/

            /*_Game.Merge.MergeAnimator.PlayAllElementsDisappearCompleteSound start.*/
            PlayAllElementsDisappearCompleteSound: function () {
if ( TRACE ) { TRACE( "_Game.Merge.MergeAnimator#PlayAllElementsDisappearCompleteSound", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.soundPlayer, null)) {
                    this.soundPlayer.PlayAllElementsDisappearComplete();
                }
            },
            /*_Game.Merge.MergeAnimator.PlayAllElementsDisappearCompleteSound end.*/

            /*_Game.Merge.MergeAnimator.GetDuration start.*/
            GetDuration: function (baseDuration) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeAnimator#GetDuration", this ); }

                return baseDuration / this.CurrentSpeedMultiplier();
            },
            /*_Game.Merge.MergeAnimator.GetDuration end.*/

            /*_Game.Merge.MergeAnimator.CurrentSpeedMultiplier start.*/
            CurrentSpeedMultiplier: function () {
if ( TRACE ) { TRACE( "_Game.Merge.MergeAnimator#CurrentSpeedMultiplier", this ); }

                return UnityEngine.Mathf.Min(this.maxSpeedMultiplier, 1.0 + this.animationStep * this.speedIncreasePerStep);
            },
            /*_Game.Merge.MergeAnimator.CurrentSpeedMultiplier end.*/

            /*_Game.Merge.MergeAnimator.AdvanceSpeed start.*/
            AdvanceSpeed: function () {
if ( TRACE ) { TRACE( "_Game.Merge.MergeAnimator#AdvanceSpeed", this ); }

                this.animationStep = (this.animationStep + 1) | 0;
            },
            /*_Game.Merge.MergeAnimator.AdvanceSpeed end.*/

            /*_Game.Merge.MergeAnimator.CreateSmartFlipTween start.*/
            CreateSmartFlipTween: function (piece, target, duration) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeAnimator#CreateSmartFlipTween", this ); }

                var start = piece.position.$clone();
                var moveDirection = pc.Vec3.projectOnPlane( target.$clone().sub( start ), pc.Vec3.UP.clone() );
                if (moveDirection.lengthSq() < 0.0001) {
                    moveDirection = new pc.Vec3( 0, 0, 1 );
                }
                moveDirection.normalize();

                // Flip around the edge perpendicular to movement, so the piece rolls toward the target stack.
                var flipAxis = new pc.Vec3().cross( pc.Vec3.UP.clone(), moveDirection ).clone().normalize().$clone();
                var startRotation = piece.rotation.$clone();
                var landingTilt = new pc.Quat().setFromAxisAngle( flipAxis, this.landingTiltDegrees );

                return DG.Tweening.DOVirtual.Float(0.0, 1.0, duration, Bridge.fn.bind(this, function (t) {
                    var eased = DG.Tweening.DOVirtual.EasedValue(0.0, 1.0, t, DG.Tweening.Ease.InOutSine);
                    var tiltWeight = Math.sin(eased * UnityEngine.Mathf.PI);
                    var flip = new pc.Quat().setFromAxisAngle( flipAxis, this.flipDegrees * eased );
                    var tilt = new pc.Quat().slerpUnclamped( pc.Quat.IDENTITY.clone(), landingTilt, pc.math.clamp( tiltWeight, 0, 1 ) );
                    piece.rotation = flip.clone().mul( tilt ).clone().mul( startRotation );
                }));
            },
            /*_Game.Merge.MergeAnimator.CreateSmartFlipTween end.*/


        },
        overloads: {
            "AnimateDisappear(HexStackView, int, HexColor)": "AnimateDisappear$1"
        }
    });
    /*_Game.Merge.MergeAnimator end.*/

    /*_Game.Merge.MergeSystem start.*/
    Bridge.define("_Game.Merge.MergeSystem", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                PreferPlacedCellAsMergeTarget: false
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "_Game.Merge.MergeSystem#init", this ); }

                    this.PreferPlacedCellAsMergeTarget = true;
                }
            },
            methods: {
                /*_Game.Merge.MergeSystem.RemoveCell:static start.*/
                RemoveCell: function (cells, removedCell) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeSystem#RemoveCell", this ); }

                    for (var i = (cells.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                        if (Bridge.referenceEquals(cells.getItem(i), removedCell)) {
                            cells.removeAt(i);
                        }
                    }
                },
                /*_Game.Merge.MergeSystem.RemoveCell:static end.*/

                /*_Game.Merge.MergeSystem.ContainsCell:static start.*/
                ContainsCell: function (cells, searchedCell) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeSystem#ContainsCell", this ); }

                    for (var i = 0; i < cells.Count; i = (i + 1) | 0) {
                        if (Bridge.referenceEquals(cells.getItem(i), searchedCell)) {
                            return true;
                        }
                    }

                    return false;
                },
                /*_Game.Merge.MergeSystem.ContainsCell:static end.*/

                /*_Game.Merge.MergeSystem.CompareCellsByCoordinate:static start.*/
                CompareCellsByCoordinate: function (a, b) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeSystem#CompareCellsByCoordinate", this ); }

                    if (Bridge.referenceEquals(a, b)) {
                        return 0;
                    }
                    if (a == null) {
                        return 1;
                    }
                    if (b == null) {
                        return -1;
                    }

                    var yCompare = Bridge.compare(b.coordinate.y, a.coordinate.y);
                    return yCompare !== 0 ? yCompare : Bridge.compare(a.coordinate.x, b.coordinate.x);
                },
                /*_Game.Merge.MergeSystem.CompareCellsByCoordinate:static end.*/

                /*_Game.Merge.MergeSystem.StackLabel:static start.*/
                StackLabel: function (cell) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeSystem#StackLabel", this ); }

                    if (cell == null) {
                        return "null";
                    }
                    if (cell.IsEmpty) {
                        return "empty";
                    }

                    return "count=" + cell.stack.Count + " top=" + System.Enum.toString(_Game.Stacks.HexColor, cell.stack.TopColor) + " topCount=" + cell.stack.CountTopSameColor();
                },
                /*_Game.Merge.MergeSystem.StackLabel:static end.*/

                /*_Game.Merge.MergeSystem.ColorsMatch:static start.*/
                ColorsMatch: function (a, b) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeSystem#ColorsMatch", this ); }

                    return a === b;
                },
                /*_Game.Merge.MergeSystem.ColorsMatch:static end.*/

                /*_Game.Merge.MergeSystem.DirectionLabel:static start.*/
                DirectionLabel: function (from, to) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeSystem#DirectionLabel", this ); }

                    if (from == null || to == null) {
                        return "unknown";
                    }

                    var delta = UnityEngine.Vector2Int.op_Subtraction(to.coordinate.$clone(), from.coordinate.$clone());
                    return "(" + delta.x + "," + delta.y + ")";
                },
                /*_Game.Merge.MergeSystem.DirectionLabel:static end.*/


            }
        },
        fields: {
            clearMatchCount: 0,
            maxChainSteps: 0,
            debugMergeLogs: false,
            board: null,
            animator: null,
            activeMergeCell: null,
            lastMoveSourceCell: null,
            lastMoveTargetCell: null,
            IsRunning: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Game.Merge.MergeSystem#init", this ); }

                this.clearMatchCount = 10;
                this.maxChainSteps = 512;
                this.debugMergeLogs = true;
            }
        },
        methods: {
            /*_Game.Merge.MergeSystem.Initialize start.*/
            Initialize: function (board, animator) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeSystem#Initialize", this ); }

                this.board = board;
                this.animator = animator;
            },
            /*_Game.Merge.MergeSystem.Initialize end.*/

            /*_Game.Merge.MergeSystem.RunMerge start.*/
            RunMerge: function (activeCell) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeSystem#RunMerge", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    pendingCells,
                    queuedCells,
                    guard,
                    stoppedByGuard,
                    currentCell,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (UnityEngine.MonoBehaviour.op_Equality(this.board, null) || activeCell == null || activeCell.IsEmpty || this.IsRunning) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    this.LogMerge("Run skipped. board=" + System.Boolean.toString((UnityEngine.MonoBehaviour.op_Inequality(this.board, null))) + " active=" + (this.CellLabel(activeCell) || "") + " isRunning=" + System.Boolean.toString(this.IsRunning));
                                        return false;
                                    $step = 2;
                                    continue;
                                }
                                case 2: {
                                    this.IsRunning = true;
                                        this.activeMergeCell = activeCell;
                                        UnityEngine.MonoBehaviour.op_Inequality(this.animator, null) ? this.animator.ResetSpeed() : null;
                                        this.LogMerge("Run started. active=" + (this.CellLabel(activeCell) || "") + " stack=" + (_Game.Merge.MergeSystem.StackLabel(activeCell) || ""));

                                        pendingCells = new (System.Collections.Generic.List$1(_Game.Board.HexCell)).ctor();
                                        queuedCells = new (System.Collections.Generic.List$1(_Game.Board.HexCell)).ctor();
                                        this.EnqueueCellAndNeighbours(activeCell, pendingCells, queuedCells);

                                        guard = 0;
                                        stoppedByGuard = false;
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    if ( true ) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 4: {
                                    if (guard >= this.maxChainSteps) {
                                            stoppedByGuard = true;
                                            $step = 6;
                                            continue;
                                        }

                                        currentCell = this.SelectNextMergeTarget(activeCell, pendingCells, queuedCells);
                                        if (currentCell == null) {
                                            $step = 6;
                                            continue;
                                        }

                                        guard = (guard + 1) | 0;
                                        this.LogMerge("Step " + guard + " target=" + (this.CellLabel(currentCell) || "") + " stack=" + (_Game.Merge.MergeSystem.StackLabel(currentCell) || ""));
                                        $enumerator.current = this.StartCoroutine$1(this.ProcessMergeStep(currentCell));
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    this.EnqueueCellAndNeighbours(this.lastMoveTargetCell, pendingCells, queuedCells);
                                        this.EnqueueCellAndNeighbours(this.lastMoveSourceCell, pendingCells, queuedCells);

                                        $step = 3;
                                        continue;
                                }
                                case 6: {
                                    if (stoppedByGuard) {
                                            UnityEngine.Debug.LogWarning$1("Merge chain stopped by maxChainSteps guard.");
                                        }

                                        this.LogMerge("Run finished. active=" + (this.CellLabel(activeCell) || "") + " activeStack=" + (_Game.Merge.MergeSystem.StackLabel(activeCell) || "") + " steps=" + guard);
                                        this.activeMergeCell = null;
                                        this.IsRunning = false;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*_Game.Merge.MergeSystem.RunMerge end.*/

            /*_Game.Merge.MergeSystem.ProcessMergeStep start.*/
            ProcessMergeStep: function (targetCell) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeSystem#ProcessMergeStep", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    matchingNeighbour,
                    movedPieces,
                    $t,
                    piece,
                    fromView,
                    toView,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.lastMoveSourceCell = null;
                                        this.lastMoveTargetCell = targetCell;

                                        if (targetCell == null || targetCell.IsEmpty) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    $enumerator.current = this.StartCoroutine$1(this.ResolveClears(targetCell));
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    if (targetCell.IsEmpty) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 4: {
                                    this.LogMerge("Step stopped because target was cleared. target=" + (this.CellLabel(targetCell) || ""));
                                        return false;
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    matchingNeighbour = this.FindMatchingNeighbour(targetCell);
                                        if (matchingNeighbour == null) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 7;
                                        continue;
                                }
                                case 6: {
                                    this.LogMerge("No matching neighbour for target=" + (this.CellLabel(targetCell) || "") + " top=" + System.Enum.toString(_Game.Stacks.HexColor, targetCell.stack.TopColor));
                                        return false;
                                    $step = 7;
                                    continue;
                                }
                                case 7: {
                                    this.lastMoveSourceCell = matchingNeighbour;
                                        movedPieces = matchingNeighbour.stack.PopTopSameColor();
                                        $t = Bridge.getEnumerator(movedPieces);
                                        try {
                                            while ($t.moveNext()) {
                                                piece = $t.Current;
                                                targetCell.stack.Push(piece);
                                            }
                                        } finally {
                                            if (Bridge.is($t, System.IDisposable)) {
                                                $t.System$IDisposable$Dispose();
                                            }
                                        }

                                        fromView = this.board.GetStackView(matchingNeighbour);
                                        toView = this.board.GetStackView(targetCell);
                                        this.LogMerge("Move " + movedPieces.Count + " piece(s): from=" + (this.CellLabel(matchingNeighbour) || "") + " stack=" + (_Game.Merge.MergeSystem.StackLabel(matchingNeighbour) || "") + " to=" + (this.CellLabel(targetCell) || "") + " stack=" + (_Game.Merge.MergeSystem.StackLabel(targetCell) || "") + " direction=" + (_Game.Merge.MergeSystem.DirectionLabel(matchingNeighbour, targetCell) || "") + " fromView=" + System.Boolean.toString((UnityEngine.MonoBehaviour.op_Inequality(fromView, null))) + " toView=" + System.Boolean.toString((UnityEngine.MonoBehaviour.op_Inequality(toView, null))));
                                        if (UnityEngine.MonoBehaviour.op_Inequality(this.animator, null)) {
                                            $step = 8;
                                            continue;
                                        } else  {
                                            $step = 10;
                                            continue;
                                        }
                                }
                                case 8: {
                                    $enumerator.current = this.StartCoroutine$1(this.animator.AnimateMove(fromView, toView, movedPieces.Count));
                                        $step = 9;
                                        return true;
                                }
                                case 9: {
                                    $step = 11;
                                    continue;
                                }
                                case 10: {
                                    UnityEngine.MonoBehaviour.op_Inequality(fromView, null) ? fromView.RemoveTopVisualHexes(movedPieces.Count) : null;
                                        UnityEngine.MonoBehaviour.op_Inequality(toView, null) ? toView.Rebuild() : null;
                                    $step = 11;
                                    continue;
                                }
                                case 11: {
                                    if (matchingNeighbour.IsEmpty) {
                                            this.LogMerge("Source became empty after move. clearing=" + (this.CellLabel(matchingNeighbour) || ""));
                                            this.ClearCellAndDestroyStackView(matchingNeighbour, fromView);
                                        }

                                        $enumerator.current = this.StartCoroutine$1(this.ResolveClears(targetCell));
                                        $step = 12;
                                        return true;
                                }
                                case 12: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*_Game.Merge.MergeSystem.ProcessMergeStep end.*/

            /*_Game.Merge.MergeSystem.ResolveClears start.*/
            ResolveClears: function (cell) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeSystem#ResolveClears", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    clearedColor,
                    stackView,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( this.CanClearTop(cell) ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 8;
                                        continue;
                                }
                                case 1: {
                                    clearedColor = cell.stack.TopColor;
                                        this.LogMerge("Clear top " + this.clearMatchCount + " piece(s): cell=" + (this.CellLabel(cell) || "") + " color=" + System.Enum.toString(_Game.Stacks.HexColor, clearedColor) + " before=" + (_Game.Merge.MergeSystem.StackLabel(cell) || ""));
                                        cell.stack.RemoveTopPieces(this.clearMatchCount);
                                        stackView = { v : this.board.GetStackView(cell) };
                                        if (UnityEngine.MonoBehaviour.op_Inequality(this.animator, null)) {
                                            $step = 2;
                                            continue;
                                        } else  {
                                            $step = 4;
                                            continue;
                                        }
                                }
                                case 2: {
                                    $enumerator.current = this.StartCoroutine$1(this.animator.AnimateDisappear$1(stackView.v, this.clearMatchCount, clearedColor));
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $step = 5;
                                    continue;
                                }
                                case 4: {
                                    UnityEngine.MonoBehaviour.op_Inequality(stackView.v, null) ? stackView.v.RemoveTopVisualHexes(this.clearMatchCount) : null;
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    if (cell.IsEmpty) {
                                            $step = 6;
                                            continue;
                                        } 
                                        $step = 7;
                                        continue;
                                }
                                case 6: {
                                    this.LogMerge("Cell became empty after clear. clearing=" + (this.CellLabel(cell) || ""));
                                        this.ClearCellAndDestroyStackView(cell, stackView.v);
                                        return false;
                                    $step = 7;
                                    continue;
                                }
                                case 7: {
                                    this.LogMerge("Clear finished. cell=" + (this.CellLabel(cell) || "") + " after=" + (_Game.Merge.MergeSystem.StackLabel(cell) || ""));

                                        $step = 0;
                                        continue;
                                }
                                case 8: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*_Game.Merge.MergeSystem.ResolveClears end.*/

            /*_Game.Merge.MergeSystem.SelectNextMergeTarget start.*/
            SelectNextMergeTarget: function (activeCell, pendingCells, queuedCells) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeSystem#SelectNextMergeTarget", this ); }

                if (_Game.Merge.MergeSystem.PreferPlacedCellAsMergeTarget && this.IsMergeCandidate(activeCell)) {
                    this.LogMerge("Selected placed cell as merge target: " + (this.CellLabel(activeCell) || ""));
                    return activeCell;
                }

                if (_Game.Merge.MergeSystem.PreferPlacedCellAsMergeTarget) {
                    this.LogMerge("Placed cell is not a merge target now: " + (this.CellLabel(activeCell) || "") + " stack=" + (_Game.Merge.MergeSystem.StackLabel(activeCell) || ""));
                }

                var queuedCandidate = this.DequeueNextMergeCandidate(pendingCells, queuedCells);
                if (queuedCandidate != null) {
                    this.LogMerge("Selected queued merge target: " + (this.CellLabel(queuedCandidate) || ""));
                    return queuedCandidate;
                }

                var fallbackCandidate = this.FindAnyMergeCandidate();
                if (fallbackCandidate == null) {
                    this.LogMerge("No merge candidate found after queue/global scan.");
                    this.DumpBoardState();
                }

                return fallbackCandidate;
            },
            /*_Game.Merge.MergeSystem.SelectNextMergeTarget end.*/

            /*_Game.Merge.MergeSystem.FindAnyMergeCandidate start.*/
            FindAnyMergeCandidate: function () {
if ( TRACE ) { TRACE( "_Game.Merge.MergeSystem#FindAnyMergeCandidate", this ); }

                var $t, $t1;
                var cells = this.GetCellsInStableOrder();
                $t = Bridge.getEnumerator(cells);
                try {
                    while ($t.moveNext()) {
                        var cell = $t.Current;
                        if (this.CanClearTop(cell)) {
                            this.LogMerge("Selected stable clear candidate: " + (this.CellLabel(cell) || ""));
                            return cell;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                $t1 = Bridge.getEnumerator(cells);
                try {
                    while ($t1.moveNext()) {
                        var cell1 = $t1.Current;
                        if (this.FindMatchingNeighbour(cell1) != null) {
                            this.LogMerge("Selected stable merge candidate: " + (this.CellLabel(cell1) || ""));
                            return cell1;
                        }
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }

                return null;
            },
            /*_Game.Merge.MergeSystem.FindAnyMergeCandidate end.*/

            /*_Game.Merge.MergeSystem.IsMergeCandidate start.*/
            IsMergeCandidate: function (cell) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeSystem#IsMergeCandidate", this ); }

                return this.CanClearTop(cell) || this.FindMatchingNeighbour(cell) != null;
            },
            /*_Game.Merge.MergeSystem.IsMergeCandidate end.*/

            /*_Game.Merge.MergeSystem.CanClearTop start.*/
            CanClearTop: function (cell) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeSystem#CanClearTop", this ); }

                return cell != null && !cell.IsEmpty && cell.stack.CountTopSameColor() >= this.clearMatchCount;
            },
            /*_Game.Merge.MergeSystem.CanClearTop end.*/

            /*_Game.Merge.MergeSystem.DequeueNextMergeCandidate start.*/
            DequeueNextMergeCandidate: function (pendingCells, queuedCells) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeSystem#DequeueNextMergeCandidate", this ); }

                while (pendingCells.Count > 0) {
                    var cell = pendingCells.getItem(0);
                    pendingCells.removeAt(0);
                    _Game.Merge.MergeSystem.RemoveCell(queuedCells, cell);

                    if (this.IsMergeCandidate(cell)) {
                        return cell;
                    }

                    this.LogMerge("Queued cell is not a candidate: " + (this.CellLabel(cell) || "") + " stack=" + (_Game.Merge.MergeSystem.StackLabel(cell) || ""));
                }

                return null;
            },
            /*_Game.Merge.MergeSystem.DequeueNextMergeCandidate end.*/

            /*_Game.Merge.MergeSystem.EnqueueCellAndNeighbours start.*/
            EnqueueCellAndNeighbours: function (cell, pendingCells, queuedCells) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeSystem#EnqueueCellAndNeighbours", this ); }

                this.EnqueueCell(cell, pendingCells, queuedCells);
                if (cell == null) {
                    return;
                }

                var neighbours = this.GetMatchingNeighboursInStableOrder(cell);
                for (var i = 0; i < neighbours.Count; i = (i + 1) | 0) {
                    this.EnqueueCell(neighbours.getItem(i), pendingCells, queuedCells);
                }
            },
            /*_Game.Merge.MergeSystem.EnqueueCellAndNeighbours end.*/

            /*_Game.Merge.MergeSystem.EnqueueCell start.*/
            EnqueueCell: function (cell, pendingCells, queuedCells) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeSystem#EnqueueCell", this ); }

                if (cell == null || _Game.Merge.MergeSystem.ContainsCell(queuedCells, cell)) {
                    return;
                }

                pendingCells.add(cell);
                queuedCells.add(cell);
                this.LogMerge("Queued cell: " + (this.CellLabel(cell) || "") + " stack=" + (_Game.Merge.MergeSystem.StackLabel(cell) || ""));
            },
            /*_Game.Merge.MergeSystem.EnqueueCell end.*/

            /*_Game.Merge.MergeSystem.ClearCellAndDestroyStackView start.*/
            ClearCellAndDestroyStackView: function (cell, stackView) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeSystem#ClearCellAndDestroyStackView", this ); }

                this.board.ClearCell(cell);
                if (UnityEngine.MonoBehaviour.op_Inequality(stackView, null)) {
                    this.LogMerge("Destroy stack view: cell=" + (this.CellLabel(cell) || ""));
                    UnityEngine.MonoBehaviour.Destroy(stackView.gameObject);
                }
            },
            /*_Game.Merge.MergeSystem.ClearCellAndDestroyStackView end.*/

            /*_Game.Merge.MergeSystem.FindMatchingNeighbour start.*/
            FindMatchingNeighbour: function (activeCell) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeSystem#FindMatchingNeighbour", this ); }

                var $t;
                if (activeCell == null || activeCell.IsEmpty) {
                    return null;
                }

                var activeTop = activeCell.stack.TopColor;
                var neighbours = this.GetMatchingNeighboursInStableOrder(activeCell);
                $t = Bridge.getEnumerator(neighbours);
                try {
                    while ($t.moveNext()) {
                        var neighbour = $t.Current;
                        if (neighbour != null && !neighbour.IsEmpty && _Game.Merge.MergeSystem.ColorsMatch(neighbour.stack.TopColor, activeTop)) {
                            return neighbour;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                return null;
            },
            /*_Game.Merge.MergeSystem.FindMatchingNeighbour end.*/

            /*_Game.Merge.MergeSystem.GetCellsInStableOrder start.*/
            GetCellsInStableOrder: function () {
if ( TRACE ) { TRACE( "_Game.Merge.MergeSystem#GetCellsInStableOrder", this ); }

                var $t;
                var cells = new (System.Collections.Generic.List$1(_Game.Board.HexCell)).ctor();
                $t = Bridge.getEnumerator(this.board.Cells, _Game.Board.HexCell);
                try {
                    while ($t.moveNext()) {
                        var cell = $t.Current;
                        if (cell != null) {
                            cells.add(cell);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                cells.Sort$2(_Game.Merge.MergeSystem.CompareCellsByCoordinate);
                return cells;
            },
            /*_Game.Merge.MergeSystem.GetCellsInStableOrder end.*/

            /*_Game.Merge.MergeSystem.GetNeighboursInStableOrder start.*/
            GetNeighboursInStableOrder: function (cell) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeSystem#GetNeighboursInStableOrder", this ); }

                var neighbours = this.board.GetNeighbours(cell);
                this.SortNeighboursForTarget(cell, neighbours);
                return neighbours;
            },
            /*_Game.Merge.MergeSystem.GetNeighboursInStableOrder end.*/

            /*_Game.Merge.MergeSystem.GetMatchingNeighboursInStableOrder start.*/
            GetMatchingNeighboursInStableOrder: function (cell) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeSystem#GetMatchingNeighboursInStableOrder", this ); }

                var neighbours = this.GetNeighboursInStableOrder(cell);
                var cells = this.GetCellsInStableOrder();

                for (var i = 0; i < cells.Count; i = (i + 1) | 0) {
                    var candidate = cells.getItem(i);
                    if (candidate == null || Bridge.referenceEquals(candidate, cell) || _Game.Merge.MergeSystem.ContainsCell(neighbours, candidate)) {
                        continue;
                    }

                    if (this.ContainsNeighbour(candidate, cell)) {
                        neighbours.add(candidate);
                    }
                }

                this.SortNeighboursForTarget(cell, neighbours);
                return neighbours;
            },
            /*_Game.Merge.MergeSystem.GetMatchingNeighboursInStableOrder end.*/

            /*_Game.Merge.MergeSystem.ContainsNeighbour start.*/
            ContainsNeighbour: function (owner, searchedCell) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeSystem#ContainsNeighbour", this ); }

                var neighbours = this.board.GetNeighbours(owner);
                for (var i = 0; i < neighbours.Count; i = (i + 1) | 0) {
                    if (Bridge.referenceEquals(neighbours.getItem(i), searchedCell)) {
                        return true;
                    }
                }

                return false;
            },
            /*_Game.Merge.MergeSystem.ContainsNeighbour end.*/

            /*_Game.Merge.MergeSystem.SortNeighboursForTarget start.*/
            SortNeighboursForTarget: function (target, neighbours) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeSystem#SortNeighboursForTarget", this ); }

                for (var i = 1; i < neighbours.Count; i = (i + 1) | 0) {
                    var value = neighbours.getItem(i);
                    var j = (i - 1) | 0;
                    while (j >= 0 && this.CompareNeighboursForTarget(target, neighbours.getItem(j), value) > 0) {
                        neighbours.setItem(((j + 1) | 0), neighbours.getItem(j));
                        j = (j - 1) | 0;
                    }

                    neighbours.setItem(((j + 1) | 0), value);
                }
            },
            /*_Game.Merge.MergeSystem.SortNeighboursForTarget end.*/

            /*_Game.Merge.MergeSystem.CompareNeighboursForTarget start.*/
            CompareNeighboursForTarget: function (target, a, b) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeSystem#CompareNeighboursForTarget", this ); }

                if (Bridge.referenceEquals(a, b)) {
                    return 0;
                }
                if (a == null) {
                    return 1;
                }
                if (b == null) {
                    return -1;
                }

                var directionCompare = Bridge.compare(this.GetDirectionPriority(target, a), this.GetDirectionPriority(target, b));
                return directionCompare !== 0 ? directionCompare : _Game.Merge.MergeSystem.CompareCellsByCoordinate(a, b);
            },
            /*_Game.Merge.MergeSystem.CompareNeighboursForTarget end.*/

            /*_Game.Merge.MergeSystem.GetDirectionPriority start.*/
            GetDirectionPriority: function (target, source) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeSystem#GetDirectionPriority", this ); }

                var delta = UnityEngine.Vector2Int.op_Subtraction(source.coordinate.$clone(), target.coordinate.$clone());

                if (delta.x > 0 && delta.y === 0) {
                    return 0;
                }
                if (delta.x > 0 && delta.y < 0) {
                    return 1;
                }
                if (delta.x === 0 && delta.y < 0) {
                    return 2;
                }
                if (delta.x < 0 && delta.y === 0) {
                    return 3;
                }
                if (delta.x < 0 && delta.y > 0) {
                    return 4;
                }
                if (delta.x === 0 && delta.y > 0) {
                    return 5;
                }

                return 6;
            },
            /*_Game.Merge.MergeSystem.GetDirectionPriority end.*/

            /*_Game.Merge.MergeSystem.CellLabel start.*/
            CellLabel: function (cell) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeSystem#CellLabel", this ); }

                if (cell == null) {
                    return "null";
                }

                var activeSuffix = Bridge.referenceEquals(cell, this.activeMergeCell) ? " active" : "";
                return "(" + cell.coordinate.x + "," + cell.coordinate.y + ")" + (activeSuffix || "");
            },
            /*_Game.Merge.MergeSystem.CellLabel end.*/

            /*_Game.Merge.MergeSystem.DumpBoardState start.*/
            DumpBoardState: function () {
if ( TRACE ) { TRACE( "_Game.Merge.MergeSystem#DumpBoardState", this ); }

                var cells = this.GetCellsInStableOrder();
                for (var i = 0; i < cells.Count; i = (i + 1) | 0) {
                    var cell = cells.getItem(i);
                    if (cell == null || cell.IsEmpty) {
                        continue;
                    }

                    var matchingNeighbour = this.FindMatchingNeighbour(cell);
                    this.LogMerge("Board cell: " + (this.CellLabel(cell) || "") + " stack=" + (_Game.Merge.MergeSystem.StackLabel(cell) || "") + " matching=" + (this.CellLabel(matchingNeighbour) || ""));
                }
            },
            /*_Game.Merge.MergeSystem.DumpBoardState end.*/

            /*_Game.Merge.MergeSystem.LogMerge start.*/
            LogMerge: function (message) {
if ( TRACE ) { TRACE( "_Game.Merge.MergeSystem#LogMerge", this ); }

                if (this.debugMergeLogs) {
                    UnityEngine.Debug.Log$1("[Merge] " + (message || ""));
                }
            },
            /*_Game.Merge.MergeSystem.LogMerge end.*/


        }
    });
    /*_Game.Merge.MergeSystem end.*/

    /*_Game.Packshot.PackshotController start.*/
    Bridge.define("_Game.Packshot.PackshotController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            canvasGroup: null,
            ctaButton: null,
            fadeDuration: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Game.Packshot.PackshotController#init", this ); }

                this.fadeDuration = 0.35;
            }
        },
        methods: {
            /*_Game.Packshot.PackshotController.Initialize start.*/
            Initialize: function () {
if ( TRACE ) { TRACE( "_Game.Packshot.PackshotController#Initialize", this ); }

                this.Hide();
            },
            /*_Game.Packshot.PackshotController.Initialize end.*/

            /*_Game.Packshot.PackshotController.Show start.*/
            Show: function () {
if ( TRACE ) { TRACE( "_Game.Packshot.PackshotController#Show", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.canvasGroup, null)) {
                    UnityEngine.Debug.LogWarning$1("PackshotController requires a scene CanvasGroup reference.");
                    return;
                }

                this.gameObject.SetActive(true);

                DG.Tweening.ShortcutExtensions.DOKill(this.canvasGroup);
                this.canvasGroup.alpha = 0.0;
                this.canvasGroup.interactable = true;
                this.canvasGroup.blocksRaycasts = true;
                DG.Tweening.DOTweenModuleUI.DOFade(this.canvasGroup, 1.0, this.fadeDuration);
            },
            /*_Game.Packshot.PackshotController.Show end.*/

            /*_Game.Packshot.PackshotController.Hide start.*/
            Hide: function () {
if ( TRACE ) { TRACE( "_Game.Packshot.PackshotController#Hide", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this.canvasGroup, null)) {
                    return;
                }

                DG.Tweening.ShortcutExtensions.DOKill(this.canvasGroup);
                this.canvasGroup.alpha = 0.0;
                this.canvasGroup.interactable = false;
                this.canvasGroup.blocksRaycasts = false;
            },
            /*_Game.Packshot.PackshotController.Hide end.*/


        }
    });
    /*_Game.Packshot.PackshotController end.*/

    /*_Game.Stacks.HexColor start.*/
    Bridge.define("_Game.Stacks.HexColor", {
        $kind: 6,
        statics: {
            fields: {
                Red: 0,
                Blue: 1,
                Green: 2,
                Yellow: 3,
                Purple: 4,
                Orange: 5
            }
        }
    });
    /*_Game.Stacks.HexColor end.*/

    /*_Game.Stacks.HexPiece start.*/
    Bridge.define("_Game.Stacks.HexPiece", {
        fields: {
            color: 0
        },
        ctors: {
            ctor: function (color) {
if ( TRACE ) { TRACE( "_Game.Stacks.HexPiece#ctor", this ); }

                this.$initialize();
                this.color = color;
            }
        }
    });
    /*_Game.Stacks.HexPiece end.*/

    /*_Game.Stacks.HexPieceView start.*/
    Bridge.define("_Game.Stacks.HexPieceView", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*_Game.Stacks.HexPieceView.CreateRuntimeMaterial:static start.*/
                CreateRuntimeMaterial: function () {
if ( TRACE ) { TRACE( "_Game.Stacks.HexPieceView#CreateRuntimeMaterial", this ); }

                    var shader = UnityEngine.Shader.Find("Universal Render Pipeline/Lit");
                    if (shader == null) {
                        shader = UnityEngine.Shader.Find("Standard");
                    }

                    return shader != null ? new UnityEngine.Material.$ctor2(shader) : null;
                },
                /*_Game.Stacks.HexPieceView.CreateRuntimeMaterial:static end.*/

                /*_Game.Stacks.HexPieceView.ApplyMaterialColor:static start.*/
                ApplyMaterialColor: function (material, color) {
if ( TRACE ) { TRACE( "_Game.Stacks.HexPieceView#ApplyMaterialColor", this ); }

                    if (material == null) {
                        return;
                    }

                    material.color = color.$clone();
                    if (material.HasProperty$1("_BaseColor")) {
                        material.SetColor$1("_BaseColor", color);
                    }

                    if (material.HasProperty$1("_Color")) {
                        material.SetColor$1("_Color", color);
                    }
                },
                /*_Game.Stacks.HexPieceView.ApplyMaterialColor:static end.*/


            }
        },
        fields: {
            Color: 0
        },
        methods: {
            /*_Game.Stacks.HexPieceView.Initialize start.*/
            Initialize: function (color, colorConfig) {
if ( TRACE ) { TRACE( "_Game.Stacks.HexPieceView#Initialize", this ); }

                var $t;
                this.Color = color;
                var unityColor = colorConfig != null ? colorConfig.GetColor(color) : _Game.Configs.HexColorConfig.GetFallbackColor(color);
                var configuredMaterial = colorConfig != null ? colorConfig.GetMaterial(color) : null;

                var renderers = this.GetComponentsInChildren$1(UnityEngine.MeshRenderer, true);
                $t = Bridge.getEnumerator(renderers);
                try {
                    while ($t.moveNext()) {
                        var renderer = $t.Current;
                        if (UnityEngine.Component.op_Equality(renderer, null)) {
                            continue;
                        }

                        var material = configuredMaterial != null ? new UnityEngine.Material.$ctor1(configuredMaterial) : _Game.Stacks.HexPieceView.CreateRuntimeMaterial();
                        _Game.Stacks.HexPieceView.ApplyMaterialColor(material, unityColor);
                        if (material != null) {
                            renderer.material = material;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*_Game.Stacks.HexPieceView.Initialize end.*/


        }
    });
    /*_Game.Stacks.HexPieceView end.*/

    /*_Game.Stacks.HexStack start.*/
    Bridge.define("_Game.Stacks.HexStack", {
        fields: {
            pieces: null
        },
        props: {
            Pieces: {
                get: function () {
if ( TRACE ) { TRACE( "_Game.Stacks.HexStack#Pieces#get", this ); }

                    return this.pieces;
                }
            },
            Count: {
                get: function () {
if ( TRACE ) { TRACE( "_Game.Stacks.HexStack#Count#get", this ); }

                    return this.pieces.Count;
                }
            },
            IsEmpty: {
                get: function () {
if ( TRACE ) { TRACE( "_Game.Stacks.HexStack#IsEmpty#get", this ); }

                    return this.pieces.Count === 0;
                }
            },
            TopColor: {
                get: function () {
if ( TRACE ) { TRACE( "_Game.Stacks.HexStack#TopColor#get", this ); }

                    return this.IsEmpty ? 0 : this.pieces.getItem(((this.pieces.Count - 1) | 0)).color;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Game.Stacks.HexStack#init", this ); }

                this.pieces = new (System.Collections.Generic.List$1(_Game.Stacks.HexPiece)).ctor();
            },
            ctor: function () {
if ( TRACE ) { TRACE( "_Game.Stacks.HexStack#ctor", this ); }

                this.$initialize();
            },
            $ctor1: function (colorsBottomToTop) {
if ( TRACE ) { TRACE( "_Game.Stacks.HexStack#$ctor1", this ); }

                var $t;
                this.$initialize();
                $t = Bridge.getEnumerator(colorsBottomToTop, _Game.Stacks.HexColor);
                try {
                    while ($t.moveNext()) {
                        var color = $t.Current;
                        this.pieces.add(new _Game.Stacks.HexPiece(color));
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            }
        },
        methods: {
            /*_Game.Stacks.HexStack.CountTopSameColor start.*/
            CountTopSameColor: function () {
if ( TRACE ) { TRACE( "_Game.Stacks.HexStack#CountTopSameColor", this ); }

                if (this.IsEmpty) {
                    return 0;
                }

                var color = this.TopColor;
                var count = 0;
                for (var i = (this.pieces.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    if (this.pieces.getItem(i).color !== color) {
                        break;
                    }

                    count = (count + 1) | 0;
                }

                return count;
            },
            /*_Game.Stacks.HexStack.CountTopSameColor end.*/

            /*_Game.Stacks.HexStack.PopTop start.*/
            PopTop: function () {
if ( TRACE ) { TRACE( "_Game.Stacks.HexStack#PopTop", this ); }

                if (this.IsEmpty) {
                    return null;
                }

                var index = (this.pieces.Count - 1) | 0;
                var piece = this.pieces.getItem(index);
                this.pieces.removeAt(index);
                return piece;
            },
            /*_Game.Stacks.HexStack.PopTop end.*/

            /*_Game.Stacks.HexStack.Push start.*/
            Push: function (piece) {
if ( TRACE ) { TRACE( "_Game.Stacks.HexStack#Push", this ); }

                if (piece != null) {
                    this.pieces.add(piece);
                }
            },
            /*_Game.Stacks.HexStack.Push end.*/

            /*_Game.Stacks.HexStack.PopTopSameColor start.*/
            PopTopSameColor: function () {
if ( TRACE ) { TRACE( "_Game.Stacks.HexStack#PopTopSameColor", this ); }

                var result = new (System.Collections.Generic.List$1(_Game.Stacks.HexPiece)).ctor();
                var count = this.CountTopSameColor();
                for (var i = 0; i < count; i = (i + 1) | 0) {
                    result.add(this.PopTop());
                }

                return result;
            },
            /*_Game.Stacks.HexStack.PopTopSameColor end.*/

            /*_Game.Stacks.HexStack.RemoveTopPieces start.*/
            RemoveTopPieces: function (count) {
if ( TRACE ) { TRACE( "_Game.Stacks.HexStack#RemoveTopPieces", this ); }

                count = Math.max(0, Math.min(count, this.pieces.Count));
                this.pieces.RemoveRange(((this.pieces.Count - count) | 0), count);
            },
            /*_Game.Stacks.HexStack.RemoveTopPieces end.*/


        }
    });
    /*_Game.Stacks.HexStack end.*/

    /*_Game.Stacks.HexStackView start.*/
    Bridge.define("_Game.Stacks.HexStackView", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            heightOffset: 0,
            pieceViews: null,
            assets: null,
            Stack: null
        },
        props: {
            HeightOffset: {
                get: function () {
if ( TRACE ) { TRACE( "_Game.Stacks.HexStackView#HeightOffset#get", this ); }

                    return this.heightOffset;
                }
            },
            VisualCount: {
                get: function () {
if ( TRACE ) { TRACE( "_Game.Stacks.HexStackView#VisualCount#get", this ); }

                    return this.pieceViews.Count;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Game.Stacks.HexStackView#init", this ); }

                this.heightOffset = 0.16;
                this.pieceViews = new (System.Collections.Generic.List$1(_Game.Stacks.HexPieceView)).ctor();
            }
        },
        methods: {
            /*_Game.Stacks.HexStackView.Initialize start.*/
            Initialize: function (stack, assets) {
if ( TRACE ) { TRACE( "_Game.Stacks.HexStackView#Initialize", this ); }

                this.Stack = stack;
                this.assets = assets;
                this.Rebuild();
            },
            /*_Game.Stacks.HexStackView.Initialize end.*/

            /*_Game.Stacks.HexStackView.GetTopPosition start.*/
            GetTopPosition: function () {
if ( TRACE ) { TRACE( "_Game.Stacks.HexStackView#GetTopPosition", this ); }

                return this.transform.position.$clone().add( new pc.Vec3( 0.0, UnityEngine.Mathf.Max(0, this.pieceViews.Count) * this.heightOffset, 0.0 ) );
            },
            /*_Game.Stacks.HexStackView.GetTopPosition end.*/

            /*_Game.Stacks.HexStackView.AddVisualHexOnTop start.*/
            AddVisualHexOnTop: function (color) {
if ( TRACE ) { TRACE( "_Game.Stacks.HexStackView#AddVisualHexOnTop", this ); }

                var view = this.CreatePieceView(color);
                this.AttachVisualHexOnTop(view);
                return view;
            },
            /*_Game.Stacks.HexStackView.AddVisualHexOnTop end.*/

            /*_Game.Stacks.HexStackView.AttachVisualHexOnTop start.*/
            AttachVisualHexOnTop: function (view) {
if ( TRACE ) { TRACE( "_Game.Stacks.HexStackView#AttachVisualHexOnTop", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(view, null)) {
                    return;
                }

                view.transform.SetParent(this.transform, true);
                view.transform.localPosition = new pc.Vec3( 0.0, this.pieceViews.Count * this.heightOffset, 0.0 );
                view.transform.localScale = new pc.Vec3( 1, 1, 1 );
                this.pieceViews.add(view);
            },
            /*_Game.Stacks.HexStackView.AttachVisualHexOnTop end.*/

            /*_Game.Stacks.HexStackView.DetachTopVisualHex start.*/
            DetachTopVisualHex: function () {
if ( TRACE ) { TRACE( "_Game.Stacks.HexStackView#DetachTopVisualHex", this ); }

                if (this.pieceViews.Count === 0) {
                    return null;
                }

                var index = (this.pieceViews.Count - 1) | 0;
                var view = this.pieceViews.getItem(index);
                this.pieceViews.removeAt(index);
                view.transform.SetParent(null, true);
                return view;
            },
            /*_Game.Stacks.HexStackView.DetachTopVisualHex end.*/

            /*_Game.Stacks.HexStackView.DetachTopVisualHexes start.*/
            DetachTopVisualHexes: function (count) {
if ( TRACE ) { TRACE( "_Game.Stacks.HexStackView#DetachTopVisualHexes", this ); }

                var result = new (System.Collections.Generic.List$1(_Game.Stacks.HexPieceView)).ctor();
                for (var i = 0; i < count; i = (i + 1) | 0) {
                    var view = this.DetachTopVisualHex();
                    if (UnityEngine.MonoBehaviour.op_Equality(view, null)) {
                        break;
                    }
                    result.add(view);
                }
                return result;
            },
            /*_Game.Stacks.HexStackView.DetachTopVisualHexes end.*/

            /*_Game.Stacks.HexStackView.RemoveTopVisualHexes start.*/
            RemoveTopVisualHexes: function (count) {
if ( TRACE ) { TRACE( "_Game.Stacks.HexStackView#RemoveTopVisualHexes", this ); }

                for (var i = 0; i < count; i = (i + 1) | 0) {
                    var view = this.DetachTopVisualHex();
                    if (UnityEngine.MonoBehaviour.op_Inequality(view, null)) {
                        UnityEngine.MonoBehaviour.Destroy(view.gameObject);
                    }
                }
            },
            /*_Game.Stacks.HexStackView.RemoveTopVisualHexes end.*/

            /*_Game.Stacks.HexStackView.Rebuild start.*/
            Rebuild: function () {
if ( TRACE ) { TRACE( "_Game.Stacks.HexStackView#Rebuild", this ); }

                for (var i = (this.pieceViews.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.pieceViews.getItem(i), null)) {
                        UnityEngine.MonoBehaviour.Destroy(this.pieceViews.getItem(i).gameObject);
                    }
                }
                this.pieceViews.clear();

                if (this.Stack == null) {
                    return;
                }

                for (var i1 = 0; i1 < System.Array.getCount(this.Stack.Pieces, _Game.Stacks.HexPiece); i1 = (i1 + 1) | 0) {
                    this.AddVisualHexOnTop(System.Array.getItem(this.Stack.Pieces, i1, _Game.Stacks.HexPiece).color);
                }
            },
            /*_Game.Stacks.HexStackView.Rebuild end.*/

            /*_Game.Stacks.HexStackView.SnapVisualsToStack start.*/
            SnapVisualsToStack: function () {
if ( TRACE ) { TRACE( "_Game.Stacks.HexStackView#SnapVisualsToStack", this ); }

                for (var i = 0; i < this.pieceViews.Count; i = (i + 1) | 0) {
                    this.pieceViews.getItem(i).transform.SetParent(this.transform, false);
                    this.pieceViews.getItem(i).transform.localPosition = new pc.Vec3( 0.0, i * this.heightOffset, 0.0 );
                    this.pieceViews.getItem(i).transform.localScale = new pc.Vec3( 1, 1, 1 );
                }
            },
            /*_Game.Stacks.HexStackView.SnapVisualsToStack end.*/

            /*_Game.Stacks.HexStackView.CreatePieceView start.*/
            CreatePieceView: function (color) {
if ( TRACE ) { TRACE( "_Game.Stacks.HexStackView#CreatePieceView", this ); }

                UnityEngine.Debug.Log$1("Creating piece view " + (System.Enum.toString(_Game.Stacks.HexColor, color) || ""));
                var instance;
                if (this.assets != null && UnityEngine.GameObject.op_Inequality(this.assets.HexPiecePrefab, null)) {
                    instance = UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.assets.HexPiecePrefab);
                } else {
                    instance = new UnityEngine.GameObject.$ctor2("HexPiece_" + System.Enum.toString(_Game.Stacks.HexColor, color));
                    var mesh = UnityEngine.GameObject.CreatePrimitive(UnityEngine.PrimitiveType.Cylinder);
                    mesh.name = "RuntimeHexMesh";
                    mesh.transform.SetParent(instance.transform, false);
                    mesh.transform.localScale = new pc.Vec3( 0.55, 0.08, 0.55 );
                    UnityEngine.Object.Destroy(mesh.GetComponent(UnityEngine.Collider));
                }

                var view = instance.GetComponent(_Game.Stacks.HexPieceView);
                if (UnityEngine.MonoBehaviour.op_Equality(view, null)) {
                    view = instance.AddComponent(_Game.Stacks.HexPieceView);
                }
                view.Initialize(color, this.assets != null ? this.assets.HexColorConfig : null);
                return view;
            },
            /*_Game.Stacks.HexStackView.CreatePieceView end.*/


        }
    });
    /*_Game.Stacks.HexStackView end.*/

    /*_Game.Stacks.StackTrayController start.*/
    Bridge.define("_Game.Stacks.StackTrayController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*_Game.Stacks.StackTrayController.DistanceXZ:static start.*/
                DistanceXZ: function (a, b) {
if ( TRACE ) { TRACE( "_Game.Stacks.StackTrayController#DistanceXZ", this ); }

                    return new pc.Vec2( a.x, a.z ).sub( new pc.Vec2( b.x, b.z ) ).length();
                },
                /*_Game.Stacks.StackTrayController.DistanceXZ:static end.*/


            }
        },
        fields: {
            spacing: 0,
            hitRadius: 0,
            stackViews: null,
            homePositions: null,
            board: null
        },
        props: {
            RemainingStacks: {
                get: function () {
if ( TRACE ) { TRACE( "_Game.Stacks.StackTrayController#RemainingStacks#get", this ); }

                    return this.stackViews.Count;
                }
            },
            StackViews: {
                get: function () {
if ( TRACE ) { TRACE( "_Game.Stacks.StackTrayController#StackViews#get", this ); }

                    return this.stackViews;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Game.Stacks.StackTrayController#init", this ); }

                this.spacing = 1.75;
                this.hitRadius = 0.8;
                this.stackViews = new (System.Collections.Generic.List$1(_Game.Stacks.HexStackView)).ctor();
                this.homePositions = new (System.Collections.Generic.Dictionary$2(_Game.Stacks.HexStackView,UnityEngine.Vector3)).ctor();
            }
        },
        methods: {
            /*_Game.Stacks.StackTrayController.SetBoard start.*/
            SetBoard: function (board) {
if ( TRACE ) { TRACE( "_Game.Stacks.StackTrayController#SetBoard", this ); }

                this.board = board;
            },
            /*_Game.Stacks.StackTrayController.SetBoard end.*/

            /*_Game.Stacks.StackTrayController.Initialize start.*/
            Initialize: function (stacks) {
if ( TRACE ) { TRACE( "_Game.Stacks.StackTrayController#Initialize", this ); }

                this.Clear();
                var startX = (((stacks.Count - 1) | 0)) * this.spacing * -0.5;
                for (var i = 0; i < stacks.Count; i = (i + 1) | 0) {
                    var localPosition = new pc.Vec3( startX + i * this.spacing, 0.0, 0.0 );
                    var view = this.board.CreateStackView(stacks.getItem(i), this.transform, this.transform.TransformPoint$1(localPosition));
                    view.name = "TrayStack_" + i;
                    this.stackViews.add(view);
                    this.homePositions.setItem(view, view.transform.position.$clone());
                }
            },
            /*_Game.Stacks.StackTrayController.Initialize end.*/

            /*_Game.Stacks.StackTrayController.GetStackUnderPointer start.*/
            GetStackUnderPointer: function (screenPosition, inputCamera) {
if ( TRACE ) { TRACE( "_Game.Stacks.StackTrayController#GetStackUnderPointer", this ); }

                var cam = UnityEngine.Component.op_Inequality(inputCamera, null) ? inputCamera : UnityEngine.Camera.main;
                if (UnityEngine.Component.op_Equality(cam, null)) {
                    return null;
                }
                var world = { v : new UnityEngine.Vector3() };

                if (!this.TryGetWorldPointOnTrayPlane(cam, screenPosition, world)) {
                    return null;
                }

                for (var i = (this.stackViews.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    var view = this.stackViews.getItem(i);
                    if (UnityEngine.MonoBehaviour.op_Inequality(view, null) && _Game.Stacks.StackTrayController.DistanceXZ(world.v, view.transform.position) <= this.hitRadius) {
                        return view;
                    }
                }

                return null;
            },
            /*_Game.Stacks.StackTrayController.GetStackUnderPointer end.*/

            /*_Game.Stacks.StackTrayController.GetHomePosition start.*/
            GetHomePosition: function (view) {
if ( TRACE ) { TRACE( "_Game.Stacks.StackTrayController#GetHomePosition", this ); }

                var position = { v : new UnityEngine.Vector3() };
                return this.homePositions.tryGetValue(view, position) ? position.v.$clone() : view.transform.position.$clone();
            },
            /*_Game.Stacks.StackTrayController.GetHomePosition end.*/

            /*_Game.Stacks.StackTrayController.RemoveStack start.*/
            RemoveStack: function (view) {
if ( TRACE ) { TRACE( "_Game.Stacks.StackTrayController#RemoveStack", this ); }

                this.stackViews.remove(view);
                this.homePositions.remove(view);
            },
            /*_Game.Stacks.StackTrayController.RemoveStack end.*/

            /*_Game.Stacks.StackTrayController.Clear start.*/
            Clear: function () {
if ( TRACE ) { TRACE( "_Game.Stacks.StackTrayController#Clear", this ); }

                for (var i = (this.stackViews.Count - 1) | 0; i >= 0; i = (i - 1) | 0) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(this.stackViews.getItem(i), null)) {
                        UnityEngine.MonoBehaviour.Destroy(this.stackViews.getItem(i).gameObject);
                    }
                }
                this.stackViews.clear();
                this.homePositions.clear();
            },
            /*_Game.Stacks.StackTrayController.Clear end.*/

            /*_Game.Stacks.StackTrayController.TryGetWorldPointOnTrayPlane start.*/
            TryGetWorldPointOnTrayPlane: function (cam, screenPosition, world) {
if ( TRACE ) { TRACE( "_Game.Stacks.StackTrayController#TryGetWorldPointOnTrayPlane", this ); }

                world.v = Bridge.getDefaultValue(UnityEngine.Vector3);
                var ray = cam.ScreenPointToRay(UnityEngine.Vector3.FromVector2(screenPosition));
                var plane = new UnityEngine.Plane.$ctor2(pc.Vec3.UP.clone(), this.transform.position);
                var distance = { };
                if (!plane.Raycast(ray, distance)) {
                    return false;
                }

                world.v = ray.GetPoint(distance.v);
                return true;
            },
            /*_Game.Stacks.StackTrayController.TryGetWorldPointOnTrayPlane end.*/


        }
    });
    /*_Game.Stacks.StackTrayController end.*/

    /*_Game.Tutorial.TutorialHandController start.*/
    Bridge.define("_Game.Tutorial.TutorialHandController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            inactivityDelayBeforeTutorialRestart: 0,
            handMoveDuration: 0,
            handSize: null,
            screenOffset: null,
            canvas: null,
            handImage: null,
            tutorialTargetStack: null,
            tutorialTargetCell: null,
            worldCamera: null,
            handRect: null,
            sequence: null,
            completed: false,
            waitingForRestart: false,
            restartAt: 0
        },
        props: {
            InactivityDelayBeforeTutorialRestart: {
                get: function () {
if ( TRACE ) { TRACE( "_Game.Tutorial.TutorialHandController#InactivityDelayBeforeTutorialRestart#get", this ); }

                    return this.inactivityDelayBeforeTutorialRestart;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "_Game.Tutorial.TutorialHandController#InactivityDelayBeforeTutorialRestart#set", this ); }

                    this.inactivityDelayBeforeTutorialRestart = UnityEngine.Mathf.Max(0.0, value);
                }
            },
            HandMoveDuration: {
                get: function () {
if ( TRACE ) { TRACE( "_Game.Tutorial.TutorialHandController#HandMoveDuration#get", this ); }

                    return this.handMoveDuration;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "_Game.Tutorial.TutorialHandController#HandMoveDuration#set", this ); }

                    this.handMoveDuration = UnityEngine.Mathf.Max(0.05, value);
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Game.Tutorial.TutorialHandController#init", this ); }

                this.handSize = new UnityEngine.Vector2();
                this.screenOffset = new UnityEngine.Vector2();
                this.inactivityDelayBeforeTutorialRestart = 2.5;
                this.handMoveDuration = 1.1;
                this.handSize = new pc.Vec2( 95.0, 112.0 );
                this.screenOffset = new pc.Vec2( 36.0, -34.0 );
            }
        },
        methods: {
            /*_Game.Tutorial.TutorialHandController.Initialize start.*/
            Initialize: function (assets, camera) {
if ( TRACE ) { TRACE( "_Game.Tutorial.TutorialHandController#Initialize", this ); }

                this.worldCamera = UnityEngine.Component.op_Inequality(camera, null) ? camera : UnityEngine.Camera.main;
                this.EnsureOverlayCanvas();
                this.EnsureHandImage(assets != null ? assets.TutorialHandSprite : null);
                this.Hide();
            },
            /*_Game.Tutorial.TutorialHandController.Initialize end.*/

            /*_Game.Tutorial.TutorialHandController.SetTargets start.*/
            SetTargets: function (stack, cell) {
if ( TRACE ) { TRACE( "_Game.Tutorial.TutorialHandController#SetTargets", this ); }

                this.tutorialTargetStack = stack;
                this.tutorialTargetCell = cell;
            },
            /*_Game.Tutorial.TutorialHandController.SetTargets end.*/

            /*_Game.Tutorial.TutorialHandController.Show start.*/
            Show: function () {
if ( TRACE ) { TRACE( "_Game.Tutorial.TutorialHandController#Show", this ); }

                if (this.completed || UnityEngine.MonoBehaviour.op_Equality(this.tutorialTargetStack, null) || UnityEngine.MonoBehaviour.op_Equality(this.tutorialTargetCell, null) || UnityEngine.Component.op_Equality(this.handRect, null)) {
                    return;
                }

                this.waitingForRestart = false;
                this.SetVisualVisible(true);
                this.PlayLoop();
            },
            /*_Game.Tutorial.TutorialHandController.Show end.*/

            /*_Game.Tutorial.TutorialHandController.Hide start.*/
            Hide: function () {
if ( TRACE ) { TRACE( "_Game.Tutorial.TutorialHandController#Hide", this ); }

                this.waitingForRestart = false;
                this.sequence != null ? DG.Tweening.TweenExtensions.Kill(this.sequence) : null;
                this.sequence = null;
                this.SetVisualVisible(false);
            },
            /*_Game.Tutorial.TutorialHandController.Hide end.*/

            /*_Game.Tutorial.TutorialHandController.Complete start.*/
            Complete: function () {
if ( TRACE ) { TRACE( "_Game.Tutorial.TutorialHandController#Complete", this ); }

                this.completed = true;
                this.Hide();
            },
            /*_Game.Tutorial.TutorialHandController.Complete end.*/

            /*_Game.Tutorial.TutorialHandController.RestartAfterInactivity start.*/
            RestartAfterInactivity: function () {
if ( TRACE ) { TRACE( "_Game.Tutorial.TutorialHandController#RestartAfterInactivity", this ); }

                if (this.completed) {
                    return;
                }

                this.Hide();
                this.waitingForRestart = true;
                this.restartAt = UnityEngine.Time.unscaledTime + this.inactivityDelayBeforeTutorialRestart;
            },
            /*_Game.Tutorial.TutorialHandController.RestartAfterInactivity end.*/

            /*_Game.Tutorial.TutorialHandController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "_Game.Tutorial.TutorialHandController#Update", this ); }

                if (!this.waitingForRestart || this.completed) {
                    return;
                }

                if (UnityEngine.Time.unscaledTime >= this.restartAt) {
                    this.Show();
                }
            },
            /*_Game.Tutorial.TutorialHandController.Update end.*/

            /*_Game.Tutorial.TutorialHandController.PlayLoop start.*/
            PlayLoop: function () {
if ( TRACE ) { TRACE( "_Game.Tutorial.TutorialHandController#PlayLoop", this ); }

                this.sequence != null ? DG.Tweening.TweenExtensions.Kill(this.sequence) : null;
                var from = this.WorldToCanvasAnchoredPosition(this.tutorialTargetStack.transform.position).add( this.screenOffset );
                var to = this.WorldToCanvasAnchoredPosition(this.tutorialTargetCell.transform.position).add( this.screenOffset );
                this.handRect.anchoredPosition = from.$clone();

                this.sequence = DG.Tweening.DOTween.Sequence();
                DG.Tweening.TweenSettingsExtensions.Append(this.sequence, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.DOTweenModuleUI.DOAnchorPos(this.handRect, to.$clone(), this.handMoveDuration), DG.Tweening.Ease.InOutSine));
                DG.Tweening.TweenSettingsExtensions.AppendInterval(this.sequence, 0.35);
                DG.Tweening.TweenSettingsExtensions.Append(this.sequence, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.DOTweenModuleUI.DOAnchorPos(this.handRect, from.$clone(), 0.25), DG.Tweening.Ease.OutSine));
                DG.Tweening.TweenSettingsExtensions.AppendInterval(this.sequence, 0.25);
                DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Sequence, this.sequence, -1, DG.Tweening.LoopType.Restart);
            },
            /*_Game.Tutorial.TutorialHandController.PlayLoop end.*/

            /*_Game.Tutorial.TutorialHandController.WorldToCanvasAnchoredPosition start.*/
            WorldToCanvasAnchoredPosition: function (worldPosition) {
if ( TRACE ) { TRACE( "_Game.Tutorial.TutorialHandController#WorldToCanvasAnchoredPosition", this ); }

                var camera = UnityEngine.Component.op_Inequality(this.worldCamera, null) ? this.worldCamera : UnityEngine.Camera.main;
                if (UnityEngine.Component.op_Equality(camera, null)) {
                    return pc.Vec2.ZERO.clone();
                }

                var screenPosition = camera.WorldToScreenPoint(worldPosition);
                var scaleFactor = UnityEngine.Component.op_Inequality(this.canvas, null) ? this.canvas.scaleFactor : 1.0;
                if (scaleFactor <= 0.0) {
                    scaleFactor = 1.0;
                }

                return new pc.Vec2( screenPosition.x / scaleFactor, screenPosition.y / scaleFactor );
            },
            /*_Game.Tutorial.TutorialHandController.WorldToCanvasAnchoredPosition end.*/

            /*_Game.Tutorial.TutorialHandController.EnsureOverlayCanvas start.*/
            EnsureOverlayCanvas: function () {
if ( TRACE ) { TRACE( "_Game.Tutorial.TutorialHandController#EnsureOverlayCanvas", this ); }


                if (UnityEngine.Component.op_Equality(this.canvas, null)) {
                    var canvasObject = UnityEngine.GameObject.Find("PackshotCanvas");
                    if (UnityEngine.GameObject.op_Inequality(canvasObject, null)) {
                        this.canvas = canvasObject.GetComponent(UnityEngine.Canvas);
                    }
                }

                if (UnityEngine.Component.op_Equality(this.canvas, null)) {
                    UnityEngine.Debug.LogWarning$1("Tutorial hand requires a scene Canvas reference.");
                    return;
                }

                if (UnityEngine.Component.op_Equality(this.canvas.GetComponent(UnityEngine.RectTransform), null)) {
                    UnityEngine.Debug.LogWarning$1("Tutorial hand canvas requires a RectTransform.");
                }
            },
            /*_Game.Tutorial.TutorialHandController.EnsureOverlayCanvas end.*/

            /*_Game.Tutorial.TutorialHandController.EnsureHandImage start.*/
            EnsureHandImage: function (handSprite) {
if ( TRACE ) { TRACE( "_Game.Tutorial.TutorialHandController#EnsureHandImage", this ); }

                var $t;
                if (UnityEngine.MonoBehaviour.op_Equality(this.handImage, null)) {
                    var handTransform = UnityEngine.Component.op_Inequality(this.canvas, null) ? this.canvas.transform.Find("TutorialHandImage") : null;
                    if (UnityEngine.Component.op_Inequality(handTransform, null)) {
                        this.handImage = handTransform.GetComponent(UnityEngine.UI.Image);
                    }
                }

                if (UnityEngine.MonoBehaviour.op_Equality(this.handImage, null)) {
                    UnityEngine.Debug.LogWarning$1("Tutorial hand requires a scene Image reference.");
                    return;
                }

                if (handSprite != null) {
                    this.handImage.sprite = handSprite;
                }
                this.handImage.raycastTarget = false;
                this.handImage.preserveAspect = true;
                this.handRect = this.handImage.GetComponent(UnityEngine.RectTransform);
                this.handRect.sizeDelta = this.handSize.$clone();
                this.handRect.anchorMin = ($t = pc.Vec2.ZERO.clone(), this.handRect.anchorMax = $t.$clone(), $t);
                this.handRect.pivot = new pc.Vec2( 0.5, 0.08 );
            },
            /*_Game.Tutorial.TutorialHandController.EnsureHandImage end.*/

            /*_Game.Tutorial.TutorialHandController.SetVisualVisible start.*/
            SetVisualVisible: function (visible) {
if ( TRACE ) { TRACE( "_Game.Tutorial.TutorialHandController#SetVisualVisible", this ); }

                if (UnityEngine.MonoBehaviour.op_Inequality(this.handImage, null)) {
                    this.handImage.enabled = visible;
                }
            },
            /*_Game.Tutorial.TutorialHandController.SetVisualVisible end.*/


        }
    });
    /*_Game.Tutorial.TutorialHandController end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction");
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get", this ); }

                    return this.t.active && !DG.Tweening.TweenExtensions.IsComplete(this.t);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            elapsedLoops: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get", this ); }

                    return this.t.active && DG.Tweening.TweenExtensions.CompletedLoops(this.t) < this.elapsedLoops;
                }
            }
        },
        ctors: {
            ctor: function (tween, elapsedLoops) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.elapsedLoops = elapsedLoops;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForKill", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get", this ); }

                    return this.t.active;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForPosition", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            position: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get", this ); }

                    return this.t.active && this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) < this.position;
                }
            }
        },
        ctors: {
            ctor: function (tween, position) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.position = position;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForRewind", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get", this ); }

                    return this.t.active && (!this.t.playedOnce || this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) > 0);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForStart", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get", this ); }

                    return this.t.active && !this.t.playedOnce;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    Bridge.define("DG.Tweening.DOTweenModuleAudio", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static start.*/
                /**
                 * Tweens an AudioSource's volume to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFade", this ); }

                    if (endValue < 0) {
                        endValue = 0;
                    } else {
                        if (endValue > 1) {
                            endValue = 1;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.volume;
                    }, function (x) {
                        target.volume = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static start.*/
                /**
                 * Tweens an AudioSource's pitch to the given value.
                 Also stores the AudioSource as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.AudioSource}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPitch: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPitch", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.pitch;
                    }, function (x) {
                        target.pitch = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static start.*/
                /**
                 * Tweens an AudioMixer's exposed float to the given value.
                 Also stores the AudioMixer as the tween's target so it can be used for filtered operations.
                 Note that you need to manually expose a float in an AudioMixerGroup in order to be able to tween it from an AudioMixer.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}      target       
                 * @param   {string}                            floatName    Name given to the exposed float to set
                 * @param   {number}                            endValue     The end value to reach
                 * @param   {number}                            duration     The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSetFloat: function (target, floatName, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSetFloat", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        var currVal = { };
                        target.GetFloat(floatName, currVal);
                        return currVal.v;
                    }, function (x) {
                        target.SetFloat(floatName, x);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static start.*/
                /**
                 * Completes all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens completed
                 (meaning the tweens that don't have infinite loops and were not already complete)
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target           
                 * @param   {boolean}                         withCallbacks    For Sequences only: if TRUE also internal Sequence callbacks will be fired,
                 otherwise they will be ignored
                 * @return  {number}
                 */
                DOComplete: function (target, withCallbacks) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOComplete", this ); }

                    if (withCallbacks === void 0) { withCallbacks = false; }
                    return DG.Tweening.DOTween.Complete(target, withCallbacks);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOKill:static start.*/
                /**
                 * Kills all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens killed.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target      
                 * @param   {boolean}                         complete    If TRUE completes the tween before killing it
                 * @return  {number}
                 */
                DOKill: function (target, complete) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOKill", this ); }

                    if (complete === void 0) { complete = false; }
                    return DG.Tweening.DOTween.Kill(target, complete);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOKill:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static start.*/
                /**
                 * Flips the direction (backwards if it was going forward or viceversa) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens flipped.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOFlip: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFlip", this ); }

                    return DG.Tweening.DOTween.Flip(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static start.*/
                /**
                 * Sends to the given position all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target     
                 * @param   {number}                          to         Time position to reach
                 (if higher than the whole tween duration the tween will simply reach its end)
                 * @param   {boolean}                         andPlay    If TRUE will play the tween after reaching the given position, otherwise it will pause it
                 * @return  {number}
                 */
                DOGoto: function (target, to, andPlay) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOGoto", this ); }

                    if (andPlay === void 0) { andPlay = false; }
                    return DG.Tweening.DOTween.Goto(target, to, andPlay);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPause:static start.*/
                /**
                 * Pauses all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens paused.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPause", this ); }

                    return DG.Tweening.DOTween.Pause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPause:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static start.*/
                /**
                 * Plays all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlay: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlay", this ); }

                    return DG.Tweening.DOTween.Play(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static start.*/
                /**
                 * Plays backwards all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayBackwards: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayBackwards", this ); }

                    return DG.Tweening.DOTween.PlayBackwards(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static start.*/
                /**
                 * Plays forward all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens played.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOPlayForward: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayForward", this ); }

                    return DG.Tweening.DOTween.PlayForward(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORestart:static start.*/
                /**
                 * Restarts all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens restarted.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORestart: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORestart", this ); }

                    return DG.Tweening.DOTween.Restart(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORestart:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORewind:static start.*/
                /**
                 * Rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DORewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORewind", this ); }

                    return DG.Tweening.DOTween.Rewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static start.*/
                /**
                 * Smoothly rewinds all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens rewinded.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOSmoothRewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSmoothRewind", this ); }

                    return DG.Tweening.DOTween.SmoothRewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static start.*/
                /**
                 * Toggles the paused state (plays if it was paused, pauses if it was playing) of all tweens that have this target as a reference
                 (meaning tweens that were started from this target, or that had this target added as an Id)
                 and returns the total number of tweens involved.
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleAudio
                 * @memberof DG.Tweening.DOTweenModuleAudio
                 * @param   {UnityEngine.Audio.AudioMixer}    target
                 * @return  {number}
                 */
                DOTogglePause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOTogglePause", this ); }

                    return DG.Tweening.DOTween.TogglePause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody's X position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody's Y position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static start.*/
                /**
                 * Tweens a Rigidbody's Z position to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody's rotation to the given value.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {DG.Tweening.RotateMode}            mode        Rotation mode
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration, mode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DORotate", this ); }

                    if (mode === void 0) { mode = 0; }
                    var t = DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), t, target);
                    t.plugOptions.rotateMode = mode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static start.*/
                /**
                 * Tweens a Rigidbody's rotation so that it will look towards the given position.
                 Also stores the rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target            
                 * @param   {UnityEngine.Vector3}               towards           The position to look at
                 * @param   {number}                            duration          The duration of the tween
                 * @param   {DG.Tweening.AxisConstraint}        axisConstraint    Eventual axis constraint for the rotation
                 * @param   {?UnityEngine.Vector3}              up                The vector that defines in which direction up is (default: Vector3.up)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLookAt: function (target, towards, duration, axisConstraint, up) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLookAt", this ); }

                    if (axisConstraint === void 0) { axisConstraint = 0; }
                    if (up === void 0) { up = null; }
                    var t = DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), towards.$clone(), duration), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetLookAt);
                    t.plugOptions.axisConstraint = axisConstraint;
                    t.plugOptions.up = (pc.Vec3.equals( up, null )) ? pc.Vec3.UP.clone() : System.Nullable.getValue(up);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}    target       
                 * @param   {UnityEngine.Vector3}      endValue     The end value to reach
                 * @param   {number}                   jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                   numJumps     Total number of jumps
                 * @param   {number}                   duration     The duration of the tween
                 * @param   {boolean}                  snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, jumpPower, 0 ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue.x, 0, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0, 0, endValue.z ), duration), DG.Tweening.AxisConstraint.Z, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.position.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a rigidbody correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics
                 * @memberof DG.Tweening.DOTweenModulePhysics
                 * @param   {UnityEngine.Rigidbody}             target        
                 * @param   {Array.<UnityEngine.Vector3>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics2D", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static start.*/
                /**
                 * Tweens a Rigidbody2D's X position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static start.*/
                /**
                 * Tweens a Rigidbody2D's Y position to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static start.*/
                /**
                 * Tweens a Rigidbody2D's rotation to the given value.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DORotate: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DORotate", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static start.*/
                /**
                 * Tweens a Rigidbody2D's position to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>IMPORTANT: a rigidbody2D can't be animated in a jump arc using MovePosition, so the tween will directly set the position</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}    target       
                 * @param   {UnityEngine.Vector2}        endValue     The end value to reach
                 * @param   {number}                     jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                     numJumps     Total number of jumps
                 * @param   {number}                     duration     The duration of the tween
                 * @param   {boolean}                    snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = UnityEngine.Vector3.FromVector2(target.position.$clone());
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition$1(pos);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's position through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations.
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoints to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path (useless in case of Linear paths): higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static start.*/
                /**
                 * Tweens a Rigidbody2D's localPosition through the given path waypoints, using the chosen path algorithm.
                 Also stores the Rigidbody2D as the tween's target so it can be used for filtered operations
                 <p>NOTE: to tween a Rigidbody2D correctly it should be set to kinematic at least while being tweened.</p><p>BEWARE: doesn't work on Windows Phone store (waiting for Unity to fix their own bug).
                 If you plan to publish there you should use a regular transform.DOLocalPath.</p>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModulePhysics2D
                 * @memberof DG.Tweening.DOTweenModulePhysics2D
                 * @param   {UnityEngine.Rigidbody2D}           target        
                 * @param   {Array.<UnityEngine.Vector2>}       path          The waypoint to go through
                 * @param   {number}                            duration      The duration of the tween
                 * @param   {DG.Tweening.PathType}              pathType      The type of path: Linear (straight path), CatmullRom (curved CatmullRom path) or CubicBezier (curved with control points)
                 * @param   {DG.Tweening.PathMode}              pathMode      The path mode: 3D, side-scroller 2D, top-down 2D
                 * @param   {number}                            resolution    The resolution of the path: higher resolutions make for more detailed curved paths but are more expensive.
                 Defaults to 10, but a value of 5 is usually enough if you don't have dramatic long curves between waypoints
                 * @param   {?UnityEngine.Color}                gizmoColor    The color of the path (shown when gizmos are active in the Play panel and the tween is running)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1(UnityEngine.Component.op_Equality(trans.parent, null) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);

                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    Bridge.define("DG.Tweening.DOTweenModuleSprite", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOFade:static start.*/
                /**
                 * Tweens a Material's alpha color to the given value.
                 Also stores the spriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}        target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOFade", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {pc.ColorGradient}              gradient    The gradient to use
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleSprite.DOColor(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static start.*/
                /**
                 * Tweens a SpriteRenderer's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the SpriteRenderer as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleSprite
                 * @memberof DG.Tweening.DOTweenModuleSprite
                 * @param   {UnityEngine.SpriteRenderer}    target      
                 * @param   {UnityEngine.Color}             endValue    The value to tween to
                 * @param   {number}                        duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI.DOFade:static start.*/
                /**
                 * Tweens a CanvasGroup's alpha color to the given value.
                 Also stores the canvasGroup as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.CanvasGroup}           target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.alpha;
                    }, function (x) {
                        target.alpha = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static start.*/
                /**
                 * Tweens an Graphic's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$1", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static start.*/
                /**
                 * Tweens an Image's alpha color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$2", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static start.*/
                /**
                 * Tweens a Outline's effectColor alpha to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$3", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static start.*/
                /**
                 * Tweens a Text's alpha color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFade$4: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$4", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor:static start.*/
                /**
                 * Tweens an Graphic's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static start.*/
                /**
                 * Tweens an Image's color to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$1", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static start.*/
                /**
                 * Tweens a Outline's effectColor to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$2", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static start.*/
                /**
                 * Tweens a Text's color to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target      
                 * @param   {UnityEngine.Color}                 endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOColor$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$3", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static start.*/
                /**
                 * Tweens an Image's fillAmount to the given value.
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}              target      
                 * @param   {number}                            endValue    The end value to reach (0 to 1)
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFillAmount: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFillAmount", this ); }

                    if (endValue > 1) {
                        endValue = 1;
                    } else {
                        if (endValue < 0) {
                            endValue = 0;
                        }
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.fillAmount;
                    }, function (x) {
                        target.fillAmount = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static start.*/
                /**
                 * Tweens an Image's colors using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$1(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static start.*/
                /**
                 * Tweens an LayoutElement's flexibleWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOFlexibleSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFlexibleSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.flexibleWidth, target.flexibleHeight );
                    }, function (x) {
                        target.flexibleWidth = x.x;
                        target.flexibleHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static start.*/
                /**
                 * Tweens an LayoutElement's minWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOMinSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOMinSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.minWidth, target.minHeight );
                    }, function (x) {
                        target.minWidth = x.x;
                        target.minHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static start.*/
                /**
                 * Tweens an LayoutElement's preferredWidth/Height to the given value.
                 Also stores the LayoutElement as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.LayoutElement}      target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPreferredSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPreferredSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.preferredWidth, target.preferredHeight );
                    }, function (x) {
                        target.preferredWidth = x.x;
                        target.preferredHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOScale:static start.*/
                /**
                 * Tweens a Outline's effectDistance to the given value.
                 Also stores the Outline as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Outline}            target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOScale: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOScale", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.effectDistance;
                    }, function (x) {
                        target.effectDistance = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOScale:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPosY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector3}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3D: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3D", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( endValue, 0, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition3D Z to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorPos3DZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0, 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static start.*/
                /**
                 * Tweens a RectTransform's anchorMax to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMax: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMax", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMax;
                    }, function (x) {
                        target.anchorMax = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static start.*/
                /**
                 * Tweens a RectTransform's anchorMin to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOAnchorMin: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMin", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMin;
                    }, function (x) {
                        target.anchorMin = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivot:static start.*/
                /**
                 * Tweens a RectTransform's pivot to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivot: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivot", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivot:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static start.*/
                /**
                 * Tweens a RectTransform's pivot X to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotX: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotX", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( endValue, 0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static start.*/
                /**
                 * Tweens a RectTransform's pivot Y to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOPivotY: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotY", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( 0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static start.*/
                /**
                 * Tweens a RectTransform's sizeDelta to the given value.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target      
                 * @param   {UnityEngine.Vector2}               endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOSizeDelta: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOSizeDelta", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.sizeDelta;
                    }, function (x) {
                        target.sizeDelta = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static start.*/
                /**
                 * Punches a RectTransform's anchoredPosition towards the given direction and then back to the starting one
                 as if it was connected to the starting position via an elastic.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target        
                 * @param   {UnityEngine.Vector2}          punch         The direction and strength of the punch (added to the RectTransform's current position)
                 * @param   {number}                       duration      The duration of the tween
                 * @param   {number}                       vibrato       Indicates how much will the punch vibrate
                 * @param   {number}                       elasticity    Represents how much (0 to 1) the vector will go beyond the starting position when bouncing backwards.
                 1 creates a full oscillation between the punch direction and the opposite direction,
                 while 0 oscillates only between the punch and the start position
                 * @param   {boolean}                      snapping      If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOPunchAnchorPos: function (target, punch, duration, vibrato, elasticity, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (elasticity === void 0) { elasticity = 1.0; }
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Punch(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, UnityEngine.Vector3.FromVector2(punch.$clone()), duration, vibrato, elasticity), target), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}          target            
                 * @param   {number}                             duration          The duration of the tween
                 * @param   {number}                             strength          The shake strength
                 * @param   {number}                             vibrato           Indicates how much will the shake vibrate
                 * @param   {number}                             randomness        Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                            snapping          If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                            fadeOut           If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @param   {DG.Tweening.ShakeRandomnessMode}    randomnessMode    Randomness mode
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos", this ); }

                    if (strength === void 0) { strength = 100.0; }
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, strength, vibrato, randomness, true, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static start.*/
                /**
                 * Shakes a RectTransform's anchoredPosition with the given values.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}          target            
                 * @param   {number}                             duration          The duration of the tween
                 * @param   {UnityEngine.Vector2}                strength          The shake strength on each axis
                 * @param   {number}                             vibrato           Indicates how much will the shake vibrate
                 * @param   {number}                             randomness        Indicates how much the shake will be random (0 to 180 - values higher than 90 kind of suck, so beware). 
                 Setting it to 0 will shake along a single direction.
                 * @param   {boolean}                            snapping          If TRUE the tween will smoothly snap all values to integers
                 * @param   {boolean}                            fadeOut           If TRUE the shake will automatically fadeOut smoothly within the tween's duration, otherwise it will not
                 * @param   {DG.Tweening.ShakeRandomnessMode}    randomnessMode    Randomness mode
                 * @return  {DG.Tweening.Tweener}
                 */
                DOShakeAnchorPos$1: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake$1(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, UnityEngine.Vector3.FromVector2(strength.$clone()), vibrato, randomness, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition to the given value, while also applying a jump effect along the Y axis.
                 Returns a Sequence instead of a Tweener.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}    target       
                 * @param   {UnityEngine.Vector2}          endValue     The end value to reach
                 * @param   {number}                       jumpPower    Power of the jump (the max height of the jump is represented by this plus the final Y offset)
                 * @param   {number}                       numJumps     Total number of jumps
                 * @param   {number}                       duration     The duration of the tween
                 * @param   {boolean}                      snapping     If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Sequence}
                 */
                DOJumpAnchorPos: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0;
                    var offsetY = -1;
                    var offsetYSet = false;

                    // Separate Y Tween so we can elaborate elapsedPercentage on that insted of on the Sequence
                    // (in case users add a delay or other elements to the Sequence)
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.anchoredPosition.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue.x, 0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Sequence, s, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = s.isRelative ? endValue.y : endValue.y - startPosY;
                        }
                        var pos = target.anchoredPosition.$clone();
                        pos.y += DG.Tweening.DOVirtual.EasedValue(0, offsetY, DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage(s), DG.Tweening.Ease.OutQuad);
                        target.anchoredPosition = pos.$clone();
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontal/verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {UnityEngine.Vector2}          endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DONormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DONormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.horizontalNormalizedPosition, target.verticalNormalizedPosition );
                    }, function (x) {
                        target.horizontalNormalizedPosition = x.x;
                        target.verticalNormalizedPosition = x.y;
                    }, endValue.$clone(), duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's horizontalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOHorizontalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.horizontalNormalizedPosition;
                    }, function (x) {
                        target.horizontalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static start.*/
                /**
                 * Tweens a ScrollRect's verticalNormalizedPosition to the given value.
                 Also stores the ScrollRect as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.ScrollRect}    target      
                 * @param   {number}                       endValue    The end value to reach
                 * @param   {number}                       duration    The duration of the tween
                 * @param   {boolean}                      snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Tweener}
                 */
                DOVerticalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.verticalNormalizedPosition;
                    }, function (x) {
                        target.verticalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOValue:static start.*/
                /**
                 * Tweens a Slider's value to the given value.
                 Also stores the Slider as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Slider}             target      
                 * @param   {number}                            endValue    The end value to reach
                 * @param   {number}                            duration    The duration of the tween
                 * @param   {boolean}                           snapping    If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOValue: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOValue", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.value;
                    }, function (x) {
                        target.value = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOValue:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOCounter:static start.*/
                /**
                 * Tweens a Text's text from one integer to another, with options for thousands separators
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}                 target                   
                 * @param   {number}                              fromValue                The value to start from
                 * @param   {number}                              endValue                 The end value to reach
                 * @param   {number}                              duration                 The duration of the tween
                 * @param   {boolean}                             addThousandsSeparator    If TRUE (default) also adds thousands separators
                 * @param   {System.Globalization.CultureInfo}    culture                  The {@link } to use (InvariantCulture if NULL)
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOCounter: function (target, fromValue, endValue, duration, addThousandsSeparator, culture) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOCounter", this ); }

                    if (addThousandsSeparator === void 0) { addThousandsSeparator = true; }
                    if (culture === void 0) { culture = null; }
                    var v = fromValue;
                    var cInfo = !addThousandsSeparator ? null : culture || System.Globalization.CultureInfo.invariantCulture;
                    var t = DG.Tweening.DOTween.To$2(function () {
                        return v;
                    }, function (x) {
                        v = x;
                        target.text = addThousandsSeparator ? System.Int32.format(v, "N0", cInfo) : Bridge.toString(v);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOCounter:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOText:static start.*/
                /**
                 * Tweens a Text's text to the given value.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}               target             
                 * @param   {string}                            endValue           The end string to tween to
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           richTextEnabled    If TRUE (default), rich text will be interpreted correctly while animated,
                 otherwise all tags will be considered as normal text
                 * @param   {DG.Tweening.ScrambleMode}          scrambleMode       The type of scramble mode to use, if any
                 * @param   {string}                            scrambleChars      A string containing the characters to use for scrambling.
                 Use as many characters as possible (minimum 10) because DOTween uses a fast scramble mode which gives better results with more characters.
                 Leave it to NULL (default) to use default ones
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOText: function (target, endValue, duration, richTextEnabled, scrambleMode, scrambleChars) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOText", this ); }

                    if (richTextEnabled === void 0) { richTextEnabled = true; }
                    if (scrambleMode === void 0) { scrambleMode = 0; }
                    if (scrambleChars === void 0) { scrambleChars = null; }
                    if (endValue == null) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogWarning("You can't pass a NULL string to DOText: an empty string will be used instead to avoid errors");
                        }
                        endValue = "";
                    }
                    var t = DG.Tweening.DOTween.To$5(function () {
                        return target.text;
                    }, function (x) {
                        target.text = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$3(t, richTextEnabled, scrambleMode, scrambleChars), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOText:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static start.*/
                /**
                 * Tweens a Graphic's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Graphic as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Graphic}    target      
                 * @param   {UnityEngine.Color}         endValue    The value to tween to
                 * @param   {number}                    duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static start.*/
                /**
                 * Tweens a Image's color to the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Image}    target      
                 * @param   {UnityEngine.Color}       endValue    The value to tween to
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$1", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static start.*/
                /**
                 * Tweens a Text's color BY the given value,
                 in a way that allows other DOBlendableColor tweens to work together on the same target,
                 instead than fight each other as multiple DOColor would do.
                 Also stores the Text as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.UI.Text}    target      
                 * @param   {UnityEngine.Color}      endValue    The value to tween to
                 * @param   {number}                 duration    The duration of the tween
                 * @return  {DG.Tweening.Tweener}
                 */
                DOBlendableColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$2", this ); }

                    var $t;
                    endValue = ($t = target.color, new pc.Color( endValue.r - $t.r, endValue.g - $t.g, endValue.b - $t.b, endValue.a - $t.a ));
                    var to = new pc.Color( 0, 0, 0, 0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var diff = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + diff.$clone().r, $t1.g + diff.$clone().g, $t1.b + diff.$clone().b, $t1.a + diff.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static start.*/
                /**
                 * Tweens a RectTransform's anchoredPosition so that it draws a circle around the given center.
                 Also stores the RectTransform as the tween's target so it can be used for filtered operations.<p />
                 IMPORTANT: SetFrom(value) requires a {@link } instead of a float, where the X property represents the "from degrees value"
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI
                 * @memberof DG.Tweening.DOTweenModuleUI
                 * @param   {UnityEngine.RectTransform}         target             
                 * @param   {UnityEngine.Vector2}               center             Circle-center/pivot around which to rotate (in UI anchoredPosition coordinates)
                 * @param   {number}                            endValueDegrees    The end value degrees to reach (to rotate counter-clockwise pass a negative value)
                 * @param   {number}                            duration           The duration of the tween
                 * @param   {boolean}                           relativeCenter     If TRUE the {@link } coordinates will be considered as relative to the target's current anchoredPosition
                 * @param   {boolean}                           snapping           If TRUE the tween will smoothly snap all values to integers
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOShapeCircle: function (target, center, endValueDegrees, duration, relativeCenter, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShapeCircle", this ); }

                    if (relativeCenter === void 0) { relativeCenter = false; }
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To(UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.CircleOptions, DG.Tweening.Plugins.CirclePlugin.Get(), function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, center.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$7(t, endValueDegrees, relativeCenter, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI.Utils", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static start.*/
                /**
                 * Converts the anchoredPosition of the first RectTransform to the second RectTransform,
                 taking into consideration offset, anchors and pivot, and returns the new anchoredPosition
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUI.Utils
                 * @memberof DG.Tweening.DOTweenModuleUI.Utils
                 * @param   {UnityEngine.RectTransform}    from    
                 * @param   {UnityEngine.RectTransform}    to
                 * @return  {UnityEngine.Vector2}
                 */
                SwitchToRectTransform: function (from, to) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform", this ); }

                    var localPoint = { v : new UnityEngine.Vector2() };
                    var fromPivotDerivedOffset = new pc.Vec2( from.rect.width * 0.5 + from.rect.xMin, from.rect.height * 0.5 + from.rect.yMin );
                    var screenP = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, from.position);
                    screenP = screenP.$clone().add( fromPivotDerivedOffset.$clone() );
                    UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(to, screenP, null, localPoint);
                    var pivotDerivedOffset = new pc.Vec2( to.rect.width * 0.5 + to.rect.xMin, to.rect.height * 0.5 + to.rect.yMin );
                    return to.anchoredPosition.$clone().add( localPoint.v ).sub( pivotDerivedOffset );
                },
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    /** @namespace DG.Tweening */

    /**
     * Shortcuts/functions that are not strictly related to specific Modules
     but are available only on some Unity versions
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUnityVersion
     */
    Bridge.define("DG.Tweening.DOTweenModuleUnityVersion", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static start.*/
                /**
                 * Tweens a Material's color using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$3(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static start.*/
                /**
                 * Tweens a Material's named color property using the given gradient
                 (NOTE 1: only uses the colors of the gradient, not the alphas - NOTE 2: creates a Sequence, not a Tweener).
                 Also stores the image as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}    target      
                 * @param   {pc.ColorGradient}        gradient    The gradient to use
                 * @param   {string}                  property    The name of the material property to tween (like _Tint or _SpecColor)
                 * @param   {number}                  duration    The duration of the tween
                 * @return  {DG.Tweening.Sequence}
                 */
                DOGradientColor$1: function (target, gradient, property, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0) {
                            target.SetColor$1(property, c.color);
                            continue;
                        }
                        var colorDuration = i === ((len - 1) | 0) ? duration - DG.Tweening.TweenExtensions.Duration(s, false) : duration * (i === 0 ? c.time : c.time - colors[((i - 1) | 0)].time);
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$4(target, c.color.$clone(), property, colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or complete.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForCompletion(true);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForCompletion: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForCompletion(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or rewinded.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForRewind();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForRewind: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForRewind(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForKill();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForKill: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForKill", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForKill(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or has gone through the given amount of loops.
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForElapsedLoops(2);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                elapsedLoops                    Elapsed loops to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForElapsedLoops: function (t, elapsedLoops, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops(t, elapsedLoops);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed
                 or has reached the given time position (loops included, delays excluded).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForPosition(2.5f);</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {number}                                position                        Position (loops included, delays excluded) to wait for
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForPosition: function (t, position, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForPosition(t, position);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static start.*/
                /**
                 * Returns a {@link } that waits until the tween is killed or started
                 (meaning when the tween is set in a playing state the first time, after any eventual delay).
                 It can be used inside a coroutine as a yield.
                 <p>Example usage:</p><pre><code>yield return myTween.WaitForStart();</code></pre>
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {DG.Tweening.Tween}                     t                               
                 * @param   {boolean}                               returnCustomYieldInstruction
                 * @return  {UnityEngine.CustomYieldInstruction}
                 */
                WaitForStart: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForStart", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForStart(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static start.*/
                /**
                 * Tweens a Material's named texture offset property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOOffset: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOOffset", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureOffset(propertyID);
                    }, function (x) {
                        target.SetTextureOffset(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static start.*/
                /**
                 * Tweens a Material's named texture scale property with the given ID to the given value.
                 Also stores the material as the tween's target so it can be used for filtered operations
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUnityVersion
                 * @memberof DG.Tweening.DOTweenModuleUnityVersion
                 * @param   {UnityEngine.Material}              target        
                 * @param   {UnityEngine.Vector2}               endValue      The end value to reach
                 * @param   {number}                            propertyID    The ID of the material property to tween (also called nameID in Unity's manual)
                 * @param   {number}                            duration      The duration of the tween
                 * @return  {DG.Tweening.Core.TweenerCore$3}
                 */
                DOTiling: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOTiling", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureScale(propertyID);
                    }, function (x) {
                        target.SetTextureScale(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    /**
     * Utility functions that deal with available Modules.
     Modules defines:
     - DOTAUDIO
     - DOTPHYSICS
     - DOTPHYSICS2D
     - DOTSPRITE
     - DOTUI
     Extra defines set and used for implementation of external assets:
     - DOTWEEN_TMP ► TextMesh Pro
     - DOTWEEN_TK2D ► 2D Toolkit
     *
     * @static
     * @abstract
     * @public
     * @class DG.Tweening.DOTweenModuleUtils
     */
    Bridge.define("DG.Tweening.DOTweenModuleUtils", {
        statics: {
            fields: {
                _initialized: false
            },
            methods: {
                /*DG.Tweening.DOTweenModuleUtils.Init:static start.*/
                /**
                 * Called via Reflection by DOTweenComponent on Awake
                 *
                 * @static
                 * @public
                 * @this DG.Tweening.DOTweenModuleUtils
                 * @memberof DG.Tweening.DOTweenModuleUtils
                 * @return  {void}
                 */
                Init: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Init", this ); }

                    if (DG.Tweening.DOTweenModuleUtils._initialized) {
                        return;
                    }

                    DG.Tweening.DOTweenModuleUtils._initialized = true;
                    DG.Tweening.Core.DOTweenExternalCommand.addSetOrientationOnPath(DG.Tweening.DOTweenModuleUtils.Physics.SetOrientationOnPath);

                },
                /*DG.Tweening.DOTweenModuleUtils.Init:static end.*/

                /*DG.Tweening.DOTweenModuleUtils.Preserver:static start.*/
                Preserver: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Preserver", this ); }

                    var loadedAssemblies = System.AppDomain.getAssemblies();
                    var mi = Bridge.Reflection.getMembers(UnityEngine.MonoBehaviour, 8, 284, "Stub");
                },
                /*DG.Tweening.DOTweenModuleUtils.Preserver:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils.Physics", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static start.*/
                SetOrientationOnPath: function (options, t, newRot, trans) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath", this ); }

                    if (options.isRigidbody) {
                        Bridge.cast(t.target, UnityEngine.Rigidbody).rotation = newRot.$clone();
                    } else {
                        trans.rotation = newRot.$clone();
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static start.*/
                HasRigidbody2D: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody2D), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static start.*/
                HasRigidbody: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static start.*/
                CreateDOTweenPathTween: function (target, tweenRigidbody, isLocal, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween", this ); }

                    var t = null;
                    var rBodyFoundAndTweened = false;
                    if (tweenRigidbody) {
                        var rBody = target.GetComponent(UnityEngine.Rigidbody);
                        if (UnityEngine.Component.op_Inequality(rBody, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics.DOLocalPath$1(rBody, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics.DOPath$1(rBody, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened && tweenRigidbody) {
                        var rBody2D = target.GetComponent(UnityEngine.Rigidbody2D);
                        if (UnityEngine.Component.op_Inequality(rBody2D, null)) {
                            rBodyFoundAndTweened = true;
                            t = isLocal ? DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1(rBody2D, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics2D.DOPath$1(rBody2D, path, duration, pathMode);
                        }
                    }
                    if (!rBodyFoundAndTweened) {
                        t = isLocal ? DG.Tweening.ShortcutExtensions.DOLocalPath(target.transform, path, duration, pathMode) : DG.Tweening.ShortcutExtensions.DOPath(target.transform, path, duration, pathMode);
                    }
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*Main start.*/
    Bridge.define("Main", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                TutorialHandResource: null
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "Main#init", this ); }

                    this.TutorialHandResource = "TutorialHand";
                }
            },
            methods: {
                /*Main.LoadTutorialHandSprite:static start.*/
                LoadTutorialHandSprite: function () {
if ( TRACE ) { TRACE( "Main#LoadTutorialHandSprite", this ); }

                    var sprite = UnityEngine.Resources.Load(UnityEngine.Sprite, Main.TutorialHandResource);
                    if (sprite == null) {
                        UnityEngine.Debug.LogWarning$1("Tutorial hand sprite was not found in Resources: TutorialHand");
                    }

                    return sprite;
                },
                /*Main.LoadTutorialHandSprite:static end.*/

                /*Main.Place:static start.*/
                Place: function (board, coordinate, stack) {
if ( TRACE ) { TRACE( "Main#Place", this ); }

                    var cell = board.GetCell(coordinate);
                    if (cell == null || stack == null) {
                        return;
                    }

                    board.PlaceStack(cell, stack);
                    var cellView = board.GetCellView(cell);
                    var stackView = board.CreateStackView(stack, cellView.transform, cellView.transform.position);
                    stackView.name = "BoardStack_" + coordinate.x + "_" + coordinate.y;
                    board.PlaceStackView(cell, stackView);
                },
                /*Main.Place:static end.*/

                /*Main.CreateBoardStack:static start.*/
                CreateBoardStack: function (coordinate, colors) {
if ( TRACE ) { TRACE( "Main#CreateBoardStack", this ); }

                    var $t;
                    if (colors === void 0) { colors = []; }
                    return ($t = new _Game.Configs.LevelConfig.BoardStackDefinition(), $t.coordinate = coordinate.$clone(), $t.stack = Main.CreateStack(colors), $t);
                },
                /*Main.CreateBoardStack:static end.*/

                /*Main.CreateStack:static start.*/
                CreateStack: function (colors) {
if ( TRACE ) { TRACE( "Main#CreateStack", this ); }

                    if (colors === void 0) { colors = []; }
                    var definition = new _Game.Configs.LevelConfig.StackDefinition();
                    definition.colorsBottomToTop.AddRange(colors);
                    return definition;
                },
                /*Main.CreateStack:static end.*/


            }
        },
        fields: {
            hexCellPrefab: null,
            hexPiecePrefab: null,
            hexColorConfig: null,
            gameCamera: null,
            boardRadius: 0,
            boardPosition: null,
            trayPosition: null,
            tutorialTargetCell: null,
            startingBoardStacks: null,
            trayStacks: null,
            configureCameraOnStart: false,
            cameraPosition: null,
            cameraEulerAngles: null,
            orthographicSize: 0,
            cellHighlight: null,
            sceneBuilt: false,
            runtimeRoot: null,
            boardController: null,
            stackTrayController: null,
            dragController: null,
            mergeAnimator: null,
            mergeSystem: null,
            soundPlayer: null,
            tutorialHandController: null,
            packshotController: null,
            levelFlowController: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Main#init", this ); }

                this.boardPosition = new UnityEngine.Vector3();
                this.trayPosition = new UnityEngine.Vector3();
                this.tutorialTargetCell = new UnityEngine.Vector2Int();
                this.cameraPosition = new UnityEngine.Vector3();
                this.cameraEulerAngles = new UnityEngine.Vector3();
                this.boardRadius = 2;
                this.boardPosition = pc.Vec3.ZERO.clone();
                this.trayPosition = new pc.Vec3( 0.0, 0.0, -5.25 );
                this.tutorialTargetCell = new UnityEngine.Vector2Int.$ctor1(0, 1);
                this.startingBoardStacks = new (System.Collections.Generic.List$1(_Game.Configs.LevelConfig.BoardStackDefinition)).ctor();
                this.trayStacks = new (System.Collections.Generic.List$1(_Game.Configs.LevelConfig.StackDefinition)).ctor();
                this.configureCameraOnStart = true;
                this.cameraPosition = new pc.Vec3( 0.0, 8.5, -8.5 );
                this.cameraEulerAngles = new pc.Vec3( 55.0, 0.0, 0.0 );
                this.orthographicSize = 6.2;
                this.cellHighlight = new _Game.Board.HexCellHighlightSettings();
            }
        },
        methods: {
            /*Main.Reset start.*/
            Reset: function () {
if ( TRACE ) { TRACE( "Main#Reset", this ); }

                this.EnsureDefaultLevelData();
            },
            /*Main.Reset end.*/

            /*Main.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Main#Start", this ); }

                if (this.sceneBuilt) {
                    return;
                }

                this.sceneBuilt = true;
                this.BuildPrototypeScene();
            },
            /*Main.Start end.*/

            /*Main.BuildPrototypeScene start.*/
            BuildPrototypeScene: function () {
if ( TRACE ) { TRACE( "Main#BuildPrototypeScene", this ); }

                this.EnsureLevelLists();
                var camera = this.SetupCamera();
                var assets = new _Game.DI.GameAssets(this.ResolveHexCellPrefab(), this.ResolveHexPiecePrefab(), this.hexColorConfig, Main.LoadTutorialHandSprite());
                var root = this.EnsureRuntimeRoot();

                var board = this.ResolveSceneComponent(_Game.Board.BoardController, "BoardController");
                board.transform.SetParent(root, false);
                board.transform.position = this.boardPosition.$clone();
                this.boardController = board;

                var tray = this.ResolveSceneComponent(_Game.Stacks.StackTrayController, "StackTrayController");
                tray.transform.SetParent(root, false);
                tray.transform.position = this.trayPosition.$clone();
                this.stackTrayController = tray;

                var drag = this.ResolveSceneComponent(_Game.Drag.DragController, "DragController");
                drag.transform.SetParent(root, false);
                this.dragController = drag;

                var sounds = this.ResolveSceneComponent(_Game.Audio.SoundPlayer, "SoundPlayer");
                sounds.transform.SetParent(root, false);
                this.soundPlayer = sounds;

                var animator = this.ResolveSceneComponent(_Game.Merge.MergeAnimator, "MergeAnimator");
                animator.transform.SetParent(root, false);
                this.mergeAnimator = animator;

                var merger = this.ResolveSceneComponent(_Game.Merge.MergeSystem, "MergeSystem");
                merger.transform.SetParent(root, false);
                this.mergeSystem = merger;

                var tutorial = this.ResolveSceneComponent(_Game.Tutorial.TutorialHandController, "TutorialHandController");
                tutorial.transform.SetParent(root, false);
                this.tutorialHandController = tutorial;

                var packshot = this.ResolveSceneComponent(_Game.Packshot.PackshotController, "PackshotController");
                packshot.transform.SetParent(root, false);
                this.packshotController = packshot;

                var flow = this.ResolveSceneComponent(_Game.Flow.LevelFlowController, "LevelFlowController");
                flow.transform.SetParent(root, false);
                this.levelFlowController = flow;

                this.InitializeRuntimeDependencies(camera, assets);

                board.Initialize(this.boardRadius);
                this.PlaceStartingBoardStacks(board);

                tray.Initialize(this.CreateTrayStacks());

                var firstTrayStack = System.Array.getCount(tray.StackViews, _Game.Stacks.HexStackView) > 0 ? System.Array.getItem(tray.StackViews, 0, _Game.Stacks.HexStackView) : null;
                var targetHexCell = board.GetCell(this.tutorialTargetCell);
                if (targetHexCell == null) {
                    UnityEngine.Debug.LogWarning$1("Tutorial target cell " + this.tutorialTargetCell + " is outside the generated board for radius " + this.boardRadius + ".");
                }
                var targetCell = board.GetCellView(targetHexCell);
                tutorial.SetTargets(firstTrayStack, targetCell);

                packshot.Initialize();

                flow.StartLevelFlow();
            },
            /*Main.BuildPrototypeScene end.*/

            /*Main.SetupCamera start.*/
            SetupCamera: function () {
if ( TRACE ) { TRACE( "Main#SetupCamera", this ); }

                var camera = UnityEngine.Component.op_Inequality(this.gameCamera, null) ? this.gameCamera : UnityEngine.Camera.main;
                if (UnityEngine.Component.op_Equality(camera, null)) {
                    var cameraObject = new UnityEngine.GameObject.$ctor2("Main Camera");
                    cameraObject.tag = "MainCamera";
                    camera = cameraObject.AddComponent(UnityEngine.Camera);
                    this.gameCamera = camera;
                }

                if (this.configureCameraOnStart) {
                    camera.transform.position = this.cameraPosition.$clone();
                    camera.transform.rotation = new pc.Quat().setFromEulerAngles_Unity( this.cameraEulerAngles.x, this.cameraEulerAngles.y, this.cameraEulerAngles.z );
                    camera.orthographic = true;
                    camera.orthographicSize = this.orthographicSize;
                }

                return camera;
            },
            /*Main.SetupCamera end.*/

            /*Main.EnsureRuntimeRoot start.*/
            EnsureRuntimeRoot: function () {
if ( TRACE ) { TRACE( "Main#EnsureRuntimeRoot", this ); }

                if (UnityEngine.Component.op_Inequality(this.runtimeRoot, null)) {
                    return this.runtimeRoot;
                }

                var existing = UnityEngine.GameObject.Find("_Game_Runtime");
                if (UnityEngine.GameObject.op_Inequality(existing, null)) {
                    this.runtimeRoot = existing.transform;
                    return this.runtimeRoot;
                }

                var rootObject = new UnityEngine.GameObject.$ctor2("_Game_Runtime");
                this.runtimeRoot = rootObject.transform;
                return this.runtimeRoot;
            },
            /*Main.EnsureRuntimeRoot end.*/

            /*Main.InitializeRuntimeDependencies start.*/
            InitializeRuntimeDependencies: function (camera, assets) {
if ( TRACE ) { TRACE( "Main#InitializeRuntimeDependencies", this ); }

                if (this.cellHighlight == null) {
                    this.cellHighlight = new _Game.Board.HexCellHighlightSettings();
                }

                this.boardController.InitializeDependencies(assets, camera, this.cellHighlight, this.soundPlayer);
                this.stackTrayController.SetBoard(this.boardController);
                this.dragController.Initialize(camera, this.boardController, this.stackTrayController);
                this.soundPlayer.Initialize(this.dragController);
                this.mergeAnimator.Initialize(assets, this.soundPlayer);
                this.mergeSystem.Initialize(this.boardController, this.mergeAnimator);
                this.tutorialHandController.Initialize(assets, camera);
                this.levelFlowController.Initialize(this.boardController, this.stackTrayController, this.dragController, this.mergeSystem, this.tutorialHandController, this.packshotController);
            },
            /*Main.InitializeRuntimeDependencies end.*/

            /*Main.FindSceneComponent start.*/
            FindSceneComponent: function (T) {
if ( TRACE ) { TRACE( "Main#FindSceneComponent", this ); }

                if (UnityEngine.Component.op_Equality(this.runtimeRoot, null)) {
                    var existingRoot = UnityEngine.GameObject.Find("_Game_Runtime");
                    if (UnityEngine.GameObject.op_Inequality(existingRoot, null)) {
                        this.runtimeRoot = existingRoot.transform;
                    }
                }

                var existing = UnityEngine.Component.op_Inequality(this.runtimeRoot, null) ? this.runtimeRoot.GetComponentInChildren(T, true) : null;
                return Bridge.rValue(existing) != null ? Bridge.rValue(existing) : UnityEngine.Object.FindObjectOfType(T);
            },
            /*Main.FindSceneComponent end.*/

            /*Main.ResolveSceneComponent start.*/
            ResolveSceneComponent: function (T, objectName) {
if ( TRACE ) { TRACE( "Main#ResolveSceneComponent", this ); }

                var existing = Bridge.rValue(this.FindSceneComponent(T));
                if (Bridge.rValue(existing) != null) {
                    return Bridge.rValue(existing);
                }

                var objectInstance = new UnityEngine.GameObject.$ctor2(objectName);
                return objectInstance.AddComponent(T);
            },
            /*Main.ResolveSceneComponent end.*/

            /*Main.ResolveHexPiecePrefab start.*/
            ResolveHexPiecePrefab: function () {
if ( TRACE ) { TRACE( "Main#ResolveHexPiecePrefab", this ); }

                if (UnityEngine.GameObject.op_Inequality(this.hexPiecePrefab, null)) {
                    return this.hexPiecePrefab;
                }

                return null;
            },
            /*Main.ResolveHexPiecePrefab end.*/

            /*Main.ResolveHexCellPrefab start.*/
            ResolveHexCellPrefab: function () {
if ( TRACE ) { TRACE( "Main#ResolveHexCellPrefab", this ); }

                if (UnityEngine.GameObject.op_Inequality(this.hexCellPrefab, null)) {
                    return this.hexCellPrefab;
                }

                return null;
            },
            /*Main.ResolveHexCellPrefab end.*/

            /*Main.PlaceStartingBoardStacks start.*/
            PlaceStartingBoardStacks: function (board) {
if ( TRACE ) { TRACE( "Main#PlaceStartingBoardStacks", this ); }

                var $t;
                $t = Bridge.getEnumerator(this.startingBoardStacks);
                try {
                    while ($t.moveNext()) {
                        var definition = $t.Current;
                        if (definition == null || definition.stack == null) {
                            continue;
                        }

                        Main.Place(board, definition.coordinate, definition.stack.CreateStack());
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*Main.PlaceStartingBoardStacks end.*/

            /*Main.CreateTrayStacks start.*/
            CreateTrayStacks: function () {
if ( TRACE ) { TRACE( "Main#CreateTrayStacks", this ); }

                var $t;
                var stacks = new (System.Collections.Generic.List$1(_Game.Stacks.HexStack)).ctor();
                $t = Bridge.getEnumerator(this.trayStacks);
                try {
                    while ($t.moveNext()) {
                        var definition = $t.Current;
                        if (definition != null) {
                            stacks.add(definition.CreateStack());
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return stacks;
            },
            /*Main.CreateTrayStacks end.*/

            /*Main.EnsureDefaultLevelData start.*/
            EnsureDefaultLevelData: function () {
if ( TRACE ) { TRACE( "Main#EnsureDefaultLevelData", this ); }

                this.EnsureLevelLists();

                if (this.startingBoardStacks.Count === 0) {
                    this.startingBoardStacks.add(Main.CreateBoardStack(new UnityEngine.Vector2Int.$ctor1(0, 0), [_Game.Stacks.HexColor.Red, _Game.Stacks.HexColor.Red, _Game.Stacks.HexColor.Red, _Game.Stacks.HexColor.Red, _Game.Stacks.HexColor.Red, _Game.Stacks.HexColor.Red, _Game.Stacks.HexColor.Red]));
                    this.startingBoardStacks.add(Main.CreateBoardStack(new UnityEngine.Vector2Int.$ctor1(1, 0), [_Game.Stacks.HexColor.Red, _Game.Stacks.HexColor.Red, _Game.Stacks.HexColor.Red]));
                    this.startingBoardStacks.add(Main.CreateBoardStack(new UnityEngine.Vector2Int.$ctor1(-1, 1), [_Game.Stacks.HexColor.Blue, _Game.Stacks.HexColor.Blue, _Game.Stacks.HexColor.Blue, _Game.Stacks.HexColor.Blue]));
                    this.startingBoardStacks.add(Main.CreateBoardStack(new UnityEngine.Vector2Int.$ctor1(-1, 0), [_Game.Stacks.HexColor.Green, _Game.Stacks.HexColor.Green, _Game.Stacks.HexColor.Green]));
                    this.startingBoardStacks.add(Main.CreateBoardStack(new UnityEngine.Vector2Int.$ctor1(1, -1), [_Game.Stacks.HexColor.Yellow, _Game.Stacks.HexColor.Orange, _Game.Stacks.HexColor.Orange]));
                }

                if (this.trayStacks.Count === 0) {
                    this.trayStacks.add(Main.CreateStack([_Game.Stacks.HexColor.Blue, _Game.Stacks.HexColor.Red]));
                    this.trayStacks.add(Main.CreateStack([_Game.Stacks.HexColor.Yellow, _Game.Stacks.HexColor.Blue]));
                    this.trayStacks.add(Main.CreateStack([_Game.Stacks.HexColor.Purple, _Game.Stacks.HexColor.Green]));
                }
            },
            /*Main.EnsureDefaultLevelData end.*/

            /*Main.EnsureLevelLists start.*/
            EnsureLevelLists: function () {
if ( TRACE ) { TRACE( "Main#EnsureLevelLists", this ); }

                if (this.startingBoardStacks == null) {
                    this.startingBoardStacks = new (System.Collections.Generic.List$1(_Game.Configs.LevelConfig.BoardStackDefinition)).ctor();
                }

                if (this.trayStacks == null) {
                    this.trayStacks = new (System.Collections.Generic.List$1(_Game.Configs.LevelConfig.StackDefinition)).ctor();
                }
            },
            /*Main.EnsureLevelLists end.*/


        }
    });
    /*Main end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","_Game.Configs","System.Collections.Generic","_Game.DI","_Game.Board","_Game.Stacks","_Game.Drag","_Game.Flow","_Game.Merge","_Game.Packshot","_Game.Audio","_Game.Tutorial","UnityEngine.Audio","DG.Tweening.Core","DG.Tweening","DG.Tweening.Plugins.Core.PathCore","UnityEngine.UI","System.Globalization","DG.Tweening.Plugins.Options","System.Collections"];

    /*Main start.*/
    $m("Main", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"BuildPrototypeScene","t":8,"sn":"BuildPrototypeScene","rt":$n[0].Void},{"a":1,"n":"CreateBoardStack","is":true,"t":8,"pi":[{"n":"coordinate","pt":$n[1].Vector2Int,"ps":0},{"n":"colors","ip":true,"pt":System.Array.type(_Game.Stacks.HexColor),"ps":1}],"sn":"CreateBoardStack","rt":$n[2].LevelConfig.BoardStackDefinition,"p":[$n[1].Vector2Int,System.Array.type(_Game.Stacks.HexColor)]},{"a":1,"n":"CreateStack","is":true,"t":8,"pi":[{"n":"colors","ip":true,"pt":System.Array.type(_Game.Stacks.HexColor),"ps":0}],"sn":"CreateStack","rt":$n[2].LevelConfig.StackDefinition,"p":[System.Array.type(_Game.Stacks.HexColor)]},{"a":1,"n":"CreateTrayStacks","t":8,"sn":"CreateTrayStacks","rt":$n[3].List$1(_Game.Stacks.HexStack)},{"a":1,"n":"EnsureDefaultLevelData","t":8,"sn":"EnsureDefaultLevelData","rt":$n[0].Void},{"a":1,"n":"EnsureLevelLists","t":8,"sn":"EnsureLevelLists","rt":$n[0].Void},{"a":1,"n":"EnsureRuntimeRoot","t":8,"sn":"EnsureRuntimeRoot","rt":$n[1].Transform},{"a":2,"n":"FindSceneComponent","t":8,"tpc":1,"tprm":["T"],"sn":"FindSceneComponent","rt":System.Object},{"a":1,"n":"InitializeRuntimeDependencies","t":8,"pi":[{"n":"camera","pt":$n[1].Camera,"ps":0},{"n":"assets","pt":$n[4].GameAssets,"ps":1}],"sn":"InitializeRuntimeDependencies","rt":$n[0].Void,"p":[$n[1].Camera,$n[4].GameAssets]},{"a":1,"n":"LoadTutorialHandSprite","is":true,"t":8,"sn":"LoadTutorialHandSprite","rt":$n[1].Sprite},{"a":1,"n":"Place","is":true,"t":8,"pi":[{"n":"board","pt":$n[5].BoardController,"ps":0},{"n":"coordinate","pt":$n[1].Vector2Int,"ps":1},{"n":"stack","pt":$n[6].HexStack,"ps":2}],"sn":"Place","rt":$n[0].Void,"p":[$n[5].BoardController,$n[1].Vector2Int,$n[6].HexStack]},{"a":1,"n":"PlaceStartingBoardStacks","t":8,"pi":[{"n":"board","pt":$n[5].BoardController,"ps":0}],"sn":"PlaceStartingBoardStacks","rt":$n[0].Void,"p":[$n[5].BoardController]},{"a":1,"n":"Reset","t":8,"sn":"Reset","rt":$n[0].Void},{"a":1,"n":"ResolveHexCellPrefab","t":8,"sn":"ResolveHexCellPrefab","rt":$n[1].GameObject},{"a":1,"n":"ResolveHexPiecePrefab","t":8,"sn":"ResolveHexPiecePrefab","rt":$n[1].GameObject},{"a":1,"n":"ResolveSceneComponent","t":8,"pi":[{"n":"objectName","pt":$n[0].String,"ps":0}],"tpc":1,"tprm":["T"],"sn":"ResolveSceneComponent","rt":System.Object,"p":[$n[0].String]},{"a":1,"n":"SetupCamera","t":8,"sn":"SetupCamera","rt":$n[1].Camera},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"TutorialHandResource","is":true,"t":4,"rt":$n[0].String,"sn":"TutorialHandResource"},{"a":1,"n":"boardController","t":4,"rt":$n[5].BoardController,"sn":"boardController"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"boardPosition","t":4,"rt":$n[1].Vector3,"sn":"boardPosition"},{"at":[new UnityEngine.HeaderAttribute("Level"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"boardRadius","t":4,"rt":$n[0].Int32,"sn":"boardRadius","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cameraEulerAngles","t":4,"rt":$n[1].Vector3,"sn":"cameraEulerAngles"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cameraPosition","t":4,"rt":$n[1].Vector3,"sn":"cameraPosition"},{"at":[new UnityEngine.HeaderAttribute("Valid Cell Highlight"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cellHighlight","t":4,"rt":$n[5].HexCellHighlightSettings,"sn":"cellHighlight"},{"at":[new UnityEngine.HeaderAttribute("Camera Defaults"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"configureCameraOnStart","t":4,"rt":$n[0].Boolean,"sn":"configureCameraOnStart","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"dragController","t":4,"rt":$n[7].DragController,"sn":"dragController"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"gameCamera","t":4,"rt":$n[1].Camera,"sn":"gameCamera"},{"at":[new UnityEngine.HeaderAttribute("Assets"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hexCellPrefab","t":4,"rt":$n[1].GameObject,"sn":"hexCellPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hexColorConfig","t":4,"rt":$n[2].HexColorConfig,"sn":"hexColorConfig"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hexPiecePrefab","t":4,"rt":$n[1].GameObject,"sn":"hexPiecePrefab"},{"a":1,"n":"levelFlowController","t":4,"rt":$n[8].LevelFlowController,"sn":"levelFlowController"},{"a":1,"n":"mergeAnimator","t":4,"rt":$n[9].MergeAnimator,"sn":"mergeAnimator"},{"a":1,"n":"mergeSystem","t":4,"rt":$n[9].MergeSystem,"sn":"mergeSystem"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"orthographicSize","t":4,"rt":$n[0].Single,"sn":"orthographicSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"packshotController","t":4,"rt":$n[10].PackshotController,"sn":"packshotController"},{"a":1,"n":"runtimeRoot","t":4,"rt":$n[1].Transform,"sn":"runtimeRoot"},{"a":1,"n":"sceneBuilt","t":4,"rt":$n[0].Boolean,"sn":"sceneBuilt","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"soundPlayer","t":4,"rt":$n[11].SoundPlayer,"sn":"soundPlayer"},{"a":1,"n":"stackTrayController","t":4,"rt":$n[6].StackTrayController,"sn":"stackTrayController"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startingBoardStacks","t":4,"rt":$n[3].List$1(_Game.Configs.LevelConfig.BoardStackDefinition),"sn":"startingBoardStacks"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"trayPosition","t":4,"rt":$n[1].Vector3,"sn":"trayPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"trayStacks","t":4,"rt":$n[3].List$1(_Game.Configs.LevelConfig.StackDefinition),"sn":"trayStacks"},{"a":1,"n":"tutorialHandController","t":4,"rt":$n[12].TutorialHandController,"sn":"tutorialHandController"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tutorialTargetCell","t":4,"rt":$n[1].Vector2Int,"sn":"tutorialTargetCell"}]}; }, $n);
    /*Main end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    $m("DG.Tweening.DOTweenModuleAudio", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOComplete","is":true,"t":8,"pi":[{"n":"target","pt":$n[13].AudioMixer,"ps":0},{"n":"withCallbacks","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOComplete","rt":$n[0].Int32,"p":[$n[13].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[14].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlip","is":true,"t":8,"pi":[{"n":"target","pt":$n[13].AudioMixer,"ps":0}],"sn":"DOFlip","rt":$n[0].Int32,"p":[$n[13].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOGoto","is":true,"t":8,"pi":[{"n":"target","pt":$n[13].AudioMixer,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"andPlay","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"DOGoto","rt":$n[0].Int32,"p":[$n[13].AudioMixer,$n[0].Single,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOKill","is":true,"t":8,"pi":[{"n":"target","pt":$n[13].AudioMixer,"ps":0},{"n":"complete","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOKill","rt":$n[0].Int32,"p":[$n[13].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPause","is":true,"t":8,"pi":[{"n":"target","pt":$n[13].AudioMixer,"ps":0}],"sn":"DOPause","rt":$n[0].Int32,"p":[$n[13].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPitch","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPitch","rt":$n[14].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPlay","is":true,"t":8,"pi":[{"n":"target","pt":$n[13].AudioMixer,"ps":0}],"sn":"DOPlay","rt":$n[0].Int32,"p":[$n[13].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayBackwards","is":true,"t":8,"pi":[{"n":"target","pt":$n[13].AudioMixer,"ps":0}],"sn":"DOPlayBackwards","rt":$n[0].Int32,"p":[$n[13].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayForward","is":true,"t":8,"pi":[{"n":"target","pt":$n[13].AudioMixer,"ps":0}],"sn":"DOPlayForward","rt":$n[0].Int32,"p":[$n[13].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORestart","is":true,"t":8,"pi":[{"n":"target","pt":$n[13].AudioMixer,"ps":0}],"sn":"DORestart","rt":$n[0].Int32,"p":[$n[13].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[13].AudioMixer,"ps":0}],"sn":"DORewind","rt":$n[0].Int32,"p":[$n[13].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOSetFloat","is":true,"t":8,"pi":[{"n":"target","pt":$n[13].AudioMixer,"ps":0},{"n":"floatName","pt":$n[0].String,"ps":1},{"n":"endValue","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOSetFloat","rt":$n[14].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[13].AudioMixer,$n[0].String,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOSmoothRewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[13].AudioMixer,"ps":0}],"sn":"DOSmoothRewind","rt":$n[0].Int32,"p":[$n[13].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOTogglePause","is":true,"t":8,"pi":[{"n":"target","pt":$n[13].AudioMixer,"ps":0}],"sn":"DOTogglePause","rt":$n[0].Int32,"p":[$n[13].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    $m("DG.Tweening.DOTweenModulePhysics", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[15].Sequence,"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":$n[16].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[15].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[14].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,$n[16].Path,$n[0].Single,$n[15].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[15].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[15].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[14].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[15].PathType,$n[15].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOLookAt","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"towards","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"axisConstraint","dv":0,"o":true,"pt":$n[15].AxisConstraint,"ps":3},{"n":"up","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":4}],"sn":"DOLookAt","rt":$n[14].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[15].AxisConstraint,$n[0].Nullable$1(UnityEngine.Vector3)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[14].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[14].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[14].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveZ","rt":$n[14].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":$n[16].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[15].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[14].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,$n[16].Path,$n[0].Single,$n[15].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[15].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[15].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[14].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[15].PathType,$n[15].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[15].RotateMode,"ps":3}],"sn":"DORotate","rt":$n[14].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[15].RotateMode]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    $m("DG.Tweening.DOTweenModulePhysics2D", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[15].Sequence,"p":[$n[1].Rigidbody2D,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":$n[16].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[15].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[14].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,$n[16].Path,$n[0].Single,$n[15].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[15].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[15].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[14].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[15].PathType,$n[15].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[14].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[14].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[14].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":$n[16].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[15].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[14].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,$n[16].Path,$n[0].Single,$n[15].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[15].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[15].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[14].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[15].PathType,$n[15].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DORotate","rt":$n[14].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    $m("DG.Tweening.DOTweenModuleSprite", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[15].Tweener,"p":[$n[1].SpriteRenderer,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[14].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].SpriteRenderer,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[14].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].SpriteRenderer,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[15].Sequence,"p":[$n[1].SpriteRenderer,pc.ColorGradient,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    $m("DG.Tweening.DOTweenModuleUI", function () { return {"nested":[$n[15].DOTweenModuleUI.Utils],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOAnchorMax","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMax","rt":$n[14].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorMin","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMin","rt":$n[14].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos","rt":$n[14].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3D","rt":$n[14].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DX","rt":$n[14].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DY","rt":$n[14].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DZ","rt":$n[14].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosX","rt":$n[14].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosY","rt":$n[14].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[17].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[15].Tweener,"p":[$n[17].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[17].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$1","rt":$n[15].Tweener,"p":[$n[17].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[17].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$2","rt":$n[15].Tweener,"p":[$n[17].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[17].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[14].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[17].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[17].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$1","rt":$n[14].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[17].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[17].Outline,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$2","rt":$n[14].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[17].Outline,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[17].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$3","rt":$n[14].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[17].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOCounter","is":true,"t":8,"pi":[{"n":"target","pt":$n[17].Text,"ps":0},{"n":"fromValue","pt":$n[0].Int32,"ps":1},{"n":"endValue","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"addThousandsSeparator","dv":true,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"culture","dv":null,"o":true,"pt":$n[18].CultureInfo,"ps":5}],"sn":"DOCounter","rt":$n[14].TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions),"p":[$n[17].Text,$n[0].Int32,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[18].CultureInfo]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].CanvasGroup,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[14].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].CanvasGroup,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[17].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$1","rt":$n[14].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[17].Graphic,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[17].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$2","rt":$n[14].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[17].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[17].Outline,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$3","rt":$n[14].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[17].Outline,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[17].Text,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$4","rt":$n[14].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[17].Text,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFillAmount","is":true,"t":8,"pi":[{"n":"target","pt":$n[17].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFillAmount","rt":$n[14].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[17].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlexibleSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[17].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOFlexibleSize","rt":$n[14].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[17].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[17].Image,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[15].Sequence,"p":[$n[17].Image,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOHorizontalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[17].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOHorizontalNormalizedPos","rt":$n[15].Tweener,"p":[$n[17].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOJumpAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJumpAnchorPos","rt":$n[15].Sequence,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMinSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[17].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMinSize","rt":$n[14].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[17].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DONormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[17].ScrollRect,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DONormalizedPos","rt":$n[15].Tweener,"p":[$n[17].ScrollRect,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPivot","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivot","rt":$n[14].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOPivotX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotX","rt":$n[14].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPivotY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotY","rt":$n[14].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPreferredSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[17].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOPreferredSize","rt":$n[14].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[17].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPunchAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"punch","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"elasticity","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOPunchAnchorPos","rt":$n[15].Tweener,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOScale","is":true,"t":8,"pi":[{"n":"target","pt":$n[17].Outline,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOScale","rt":$n[14].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[17].Outline,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","dv":100.0,"o":true,"pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[15].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos","rt":$n[15].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[15].ShakeRandomnessMode]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","pt":$n[1].Vector2,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[15].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos$1","rt":$n[15].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[1].Vector2,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[15].ShakeRandomnessMode]},{"a":2,"n":"DOShapeCircle","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"center","pt":$n[1].Vector2,"ps":1},{"n":"endValueDegrees","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"relativeCenter","dv":false,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOShapeCircle","rt":$n[14].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.CircleOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOSizeDelta","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOSizeDelta","rt":$n[14].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOText","is":true,"t":8,"pi":[{"n":"target","pt":$n[17].Text,"ps":0},{"n":"endValue","pt":$n[0].String,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"richTextEnabled","dv":true,"o":true,"pt":$n[0].Boolean,"ps":3},{"n":"scrambleMode","dv":0,"o":true,"pt":$n[15].ScrambleMode,"ps":4},{"n":"scrambleChars","dv":null,"o":true,"pt":$n[0].String,"ps":5}],"sn":"DOText","rt":$n[14].TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions),"p":[$n[17].Text,$n[0].String,$n[0].Single,$n[0].Boolean,$n[15].ScrambleMode,$n[0].String]},{"a":2,"n":"DOValue","is":true,"t":8,"pi":[{"n":"target","pt":$n[17].Slider,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOValue","rt":$n[14].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[17].Slider,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOVerticalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[17].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOVerticalNormalizedPos","rt":$n[15].Tweener,"p":[$n[17].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    $m("DG.Tweening.DOTweenModuleUI.Utils", function () { return {"td":$n[15].DOTweenModuleUI,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"SwitchToRectTransform","is":true,"t":8,"pi":[{"n":"from","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[1].RectTransform,"ps":1}],"sn":"SwitchToRectTransform","rt":$n[1].Vector2,"p":[$n[1].RectTransform,$n[1].RectTransform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    $m("DG.Tweening.DOTweenModuleUnityVersion", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[15].Sequence,"p":[$n[1].Material,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"property","pt":$n[0].String,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOGradientColor$1","rt":$n[15].Sequence,"p":[$n[1].Material,pc.ColorGradient,$n[0].String,$n[0].Single]},{"a":2,"n":"DOOffset","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOOffset","rt":$n[14].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"DOTiling","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOTiling","rt":$n[14].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"WaitForCompletion","is":true,"t":8,"pi":[{"n":"t","pt":$n[15].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForCompletion","rt":$n[1].CustomYieldInstruction,"p":[$n[15].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForElapsedLoops","is":true,"t":8,"pi":[{"n":"t","pt":$n[15].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForElapsedLoops","rt":$n[1].CustomYieldInstruction,"p":[$n[15].Tween,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"WaitForKill","is":true,"t":8,"pi":[{"n":"t","pt":$n[15].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForKill","rt":$n[1].CustomYieldInstruction,"p":[$n[15].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForPosition","is":true,"t":8,"pi":[{"n":"t","pt":$n[15].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForPosition","rt":$n[1].CustomYieldInstruction,"p":[$n[15].Tween,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"WaitForRewind","is":true,"t":8,"pi":[{"n":"t","pt":$n[15].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForRewind","rt":$n[1].CustomYieldInstruction,"p":[$n[15].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForStart","is":true,"t":8,"pi":[{"n":"t","pt":$n[15].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForStart","rt":$n[1].CustomYieldInstruction,"p":[$n[15].Tween,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    $m("DG.Tweening.DOTweenCYInstruction", function () { return {"nested":[$n[15].DOTweenCYInstruction.WaitForCompletion,$n[15].DOTweenCYInstruction.WaitForRewind,$n[15].DOTweenCYInstruction.WaitForKill,$n[15].DOTweenCYInstruction.WaitForElapsedLoops,$n[15].DOTweenCYInstruction.WaitForPosition,$n[15].DOTweenCYInstruction.WaitForStart],"att":1048961,"a":2,"s":true}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", function () { return {"td":$n[15].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[15].Tween],"pi":[{"n":"tween","pt":$n[15].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[15].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForRewind", function () { return {"td":$n[15].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[15].Tween],"pi":[{"n":"tween","pt":$n[15].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[15].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForKill", function () { return {"td":$n[15].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[15].Tween],"pi":[{"n":"tween","pt":$n[15].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[15].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", function () { return {"td":$n[15].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[15].Tween,$n[0].Int32],"pi":[{"n":"tween","pt":$n[15].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"elapsedLoops","t":4,"rt":$n[0].Int32,"sn":"elapsedLoops","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"t","t":4,"rt":$n[15].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForPosition", function () { return {"td":$n[15].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[15].Tween,$n[0].Single],"pi":[{"n":"tween","pt":$n[15].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"position","t":4,"rt":$n[0].Single,"sn":"position","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[15].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForStart", function () { return {"td":$n[15].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[15].Tween],"pi":[{"n":"tween","pt":$n[15].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[15].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    $m("DG.Tweening.DOTweenModuleUtils", function () { return {"nested":[$n[15].DOTweenModuleUtils.Physics],"att":1048961,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"Init","is":true,"t":8,"sn":"Init","rt":$n[0].Void},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":1,"n":"Preserver","is":true,"t":8,"sn":"Preserver","rt":$n[0].Void},{"a":1,"n":"_initialized","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    $m("DG.Tweening.DOTweenModuleUtils.Physics", function () { return {"td":$n[15].DOTweenModuleUtils,"att":1048962,"a":2,"s":true,"m":[{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"CreateDOTweenPathTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].MonoBehaviour,"ps":0},{"n":"tweenRigidbody","pt":$n[0].Boolean,"ps":1},{"n":"isLocal","pt":$n[0].Boolean,"ps":2},{"n":"path","pt":$n[16].Path,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"pathMode","pt":$n[15].PathMode,"ps":5}],"sn":"CreateDOTweenPathTween","rt":$n[14].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].MonoBehaviour,$n[0].Boolean,$n[0].Boolean,$n[16].Path,$n[0].Single,$n[15].PathMode]},{"at":[new UnityEngine.Scripting.PreserveAttribute()],"a":2,"n":"HasRigidbody","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasRigidbody2D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody2D","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetOrientationOnPath","is":true,"t":8,"pi":[{"n":"options","pt":$n[19].PathOptions,"ps":0},{"n":"t","pt":$n[15].Tween,"ps":1},{"n":"newRot","pt":$n[1].Quaternion,"ps":2},{"n":"trans","pt":$n[1].Transform,"ps":3}],"sn":"SetOrientationOnPath","rt":$n[0].Void,"p":[$n[19].PathOptions,$n[15].Tween,$n[1].Quaternion,$n[1].Transform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*_Game.Tutorial.TutorialHandController start.*/
    $m("_Game.Tutorial.TutorialHandController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Complete","t":8,"sn":"Complete","rt":$n[0].Void},{"a":1,"n":"EnsureHandImage","t":8,"pi":[{"n":"handSprite","pt":$n[1].Sprite,"ps":0}],"sn":"EnsureHandImage","rt":$n[0].Void,"p":[$n[1].Sprite]},{"a":1,"n":"EnsureOverlayCanvas","t":8,"sn":"EnsureOverlayCanvas","rt":$n[0].Void},{"a":2,"n":"Hide","t":8,"sn":"Hide","rt":$n[0].Void},{"a":2,"n":"Initialize","t":8,"pi":[{"n":"assets","pt":$n[4].GameAssets,"ps":0},{"n":"camera","pt":$n[1].Camera,"ps":1}],"sn":"Initialize","rt":$n[0].Void,"p":[$n[4].GameAssets,$n[1].Camera]},{"a":1,"n":"PlayLoop","t":8,"sn":"PlayLoop","rt":$n[0].Void},{"a":2,"n":"RestartAfterInactivity","t":8,"sn":"RestartAfterInactivity","rt":$n[0].Void},{"a":2,"n":"SetTargets","t":8,"pi":[{"n":"stack","pt":$n[6].HexStackView,"ps":0},{"n":"cell","pt":$n[5].HexCellView,"ps":1}],"sn":"SetTargets","rt":$n[0].Void,"p":[$n[6].HexStackView,$n[5].HexCellView]},{"a":1,"n":"SetVisualVisible","t":8,"pi":[{"n":"visible","pt":$n[0].Boolean,"ps":0}],"sn":"SetVisualVisible","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"Show","t":8,"sn":"Show","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"WorldToCanvasAnchoredPosition","t":8,"pi":[{"n":"worldPosition","pt":$n[1].Vector3,"ps":0}],"sn":"WorldToCanvasAnchoredPosition","rt":$n[1].Vector2,"p":[$n[1].Vector3]},{"a":2,"n":"HandMoveDuration","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_HandMoveDuration","t":8,"rt":$n[0].Single,"fg":"HandMoveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_HandMoveDuration","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"HandMoveDuration"},"fn":"HandMoveDuration"},{"a":2,"n":"InactivityDelayBeforeTutorialRestart","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_InactivityDelayBeforeTutorialRestart","t":8,"rt":$n[0].Single,"fg":"InactivityDelayBeforeTutorialRestart","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_InactivityDelayBeforeTutorialRestart","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"InactivityDelayBeforeTutorialRestart"},"fn":"InactivityDelayBeforeTutorialRestart"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"canvas","t":4,"rt":$n[1].Canvas,"sn":"canvas"},{"a":1,"n":"completed","t":4,"rt":$n[0].Boolean,"sn":"completed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handImage","t":4,"rt":$n[17].Image,"sn":"handImage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handMoveDuration","t":4,"rt":$n[0].Single,"sn":"handMoveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"handRect","t":4,"rt":$n[1].RectTransform,"sn":"handRect"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handSize","t":4,"rt":$n[1].Vector2,"sn":"handSize"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"inactivityDelayBeforeTutorialRestart","t":4,"rt":$n[0].Single,"sn":"inactivityDelayBeforeTutorialRestart","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"restartAt","t":4,"rt":$n[0].Single,"sn":"restartAt","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"screenOffset","t":4,"rt":$n[1].Vector2,"sn":"screenOffset"},{"a":1,"n":"sequence","t":4,"rt":$n[15].Sequence,"sn":"sequence"},{"a":1,"n":"tutorialTargetCell","t":4,"rt":$n[5].HexCellView,"sn":"tutorialTargetCell"},{"a":1,"n":"tutorialTargetStack","t":4,"rt":$n[6].HexStackView,"sn":"tutorialTargetStack"},{"a":1,"n":"waitingForRestart","t":4,"rt":$n[0].Boolean,"sn":"waitingForRestart","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"worldCamera","t":4,"rt":$n[1].Camera,"sn":"worldCamera"}]}; }, $n);
    /*_Game.Tutorial.TutorialHandController end.*/

    /*_Game.Stacks.HexColor start.*/
    $m("_Game.Stacks.HexColor", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Blue","is":true,"t":4,"rt":$n[6].HexColor,"sn":"Blue","box":function ($v) { return Bridge.box($v, _Game.Stacks.HexColor, System.Enum.toStringFn(_Game.Stacks.HexColor));}},{"a":2,"n":"Green","is":true,"t":4,"rt":$n[6].HexColor,"sn":"Green","box":function ($v) { return Bridge.box($v, _Game.Stacks.HexColor, System.Enum.toStringFn(_Game.Stacks.HexColor));}},{"a":2,"n":"Orange","is":true,"t":4,"rt":$n[6].HexColor,"sn":"Orange","box":function ($v) { return Bridge.box($v, _Game.Stacks.HexColor, System.Enum.toStringFn(_Game.Stacks.HexColor));}},{"a":2,"n":"Purple","is":true,"t":4,"rt":$n[6].HexColor,"sn":"Purple","box":function ($v) { return Bridge.box($v, _Game.Stacks.HexColor, System.Enum.toStringFn(_Game.Stacks.HexColor));}},{"a":2,"n":"Red","is":true,"t":4,"rt":$n[6].HexColor,"sn":"Red","box":function ($v) { return Bridge.box($v, _Game.Stacks.HexColor, System.Enum.toStringFn(_Game.Stacks.HexColor));}},{"a":2,"n":"Yellow","is":true,"t":4,"rt":$n[6].HexColor,"sn":"Yellow","box":function ($v) { return Bridge.box($v, _Game.Stacks.HexColor, System.Enum.toStringFn(_Game.Stacks.HexColor));}}]}; }, $n);
    /*_Game.Stacks.HexColor end.*/

    /*_Game.Stacks.HexPiece start.*/
    $m("_Game.Stacks.HexPiece", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].HexColor],"pi":[{"n":"color","pt":$n[6].HexColor,"ps":0}],"sn":"ctor"},{"a":2,"n":"color","t":4,"rt":$n[6].HexColor,"sn":"color","box":function ($v) { return Bridge.box($v, _Game.Stacks.HexColor, System.Enum.toStringFn(_Game.Stacks.HexColor));}}]}; }, $n);
    /*_Game.Stacks.HexPiece end.*/

    /*_Game.Stacks.HexPieceView start.*/
    $m("_Game.Stacks.HexPieceView", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ApplyMaterialColor","is":true,"t":8,"pi":[{"n":"material","pt":$n[1].Material,"ps":0},{"n":"color","pt":$n[1].Color,"ps":1}],"sn":"ApplyMaterialColor","rt":$n[0].Void,"p":[$n[1].Material,$n[1].Color]},{"a":1,"n":"CreateRuntimeMaterial","is":true,"t":8,"sn":"CreateRuntimeMaterial","rt":$n[1].Material},{"a":2,"n":"Initialize","t":8,"pi":[{"n":"color","pt":$n[6].HexColor,"ps":0},{"n":"colorConfig","pt":$n[2].HexColorConfig,"ps":1}],"sn":"Initialize","rt":$n[0].Void,"p":[$n[6].HexColor,$n[2].HexColorConfig]},{"a":2,"n":"Color","t":16,"rt":$n[6].HexColor,"g":{"a":2,"n":"get_Color","t":8,"rt":$n[6].HexColor,"fg":"Color","box":function ($v) { return Bridge.box($v, _Game.Stacks.HexColor, System.Enum.toStringFn(_Game.Stacks.HexColor));}},"s":{"a":1,"n":"set_Color","t":8,"p":[$n[6].HexColor],"rt":$n[0].Void,"fs":"Color"},"fn":"Color"},{"a":1,"backing":true,"n":"<Color>k__BackingField","t":4,"rt":$n[6].HexColor,"sn":"Color","box":function ($v) { return Bridge.box($v, _Game.Stacks.HexColor, System.Enum.toStringFn(_Game.Stacks.HexColor));}}]}; }, $n);
    /*_Game.Stacks.HexPieceView end.*/

    /*_Game.Stacks.HexStack start.*/
    $m("_Game.Stacks.HexStack", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[3].IEnumerable$1(_Game.Stacks.HexColor)],"pi":[{"n":"colorsBottomToTop","pt":$n[3].IEnumerable$1(_Game.Stacks.HexColor),"ps":0}],"sn":"$ctor1"},{"a":2,"n":"CountTopSameColor","t":8,"sn":"CountTopSameColor","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"PopTop","t":8,"sn":"PopTop","rt":$n[6].HexPiece},{"a":2,"n":"PopTopSameColor","t":8,"sn":"PopTopSameColor","rt":$n[3].List$1(_Game.Stacks.HexPiece)},{"a":2,"n":"Push","t":8,"pi":[{"n":"piece","pt":$n[6].HexPiece,"ps":0}],"sn":"Push","rt":$n[0].Void,"p":[$n[6].HexPiece]},{"a":2,"n":"RemoveTopPieces","t":8,"pi":[{"n":"count","pt":$n[0].Int32,"ps":0}],"sn":"RemoveTopPieces","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"Count","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Count","t":8,"rt":$n[0].Int32,"fg":"Count","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Count"},{"a":2,"n":"IsEmpty","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsEmpty","t":8,"rt":$n[0].Boolean,"fg":"IsEmpty","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsEmpty"},{"a":2,"n":"Pieces","t":16,"rt":$n[3].IReadOnlyList$1(_Game.Stacks.HexPiece),"g":{"a":2,"n":"get_Pieces","t":8,"rt":$n[3].IReadOnlyList$1(_Game.Stacks.HexPiece),"fg":"Pieces"},"fn":"Pieces"},{"a":2,"n":"TopColor","t":16,"rt":$n[6].HexColor,"g":{"a":2,"n":"get_TopColor","t":8,"rt":$n[6].HexColor,"fg":"TopColor","box":function ($v) { return Bridge.box($v, _Game.Stacks.HexColor, System.Enum.toStringFn(_Game.Stacks.HexColor));}},"fn":"TopColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pieces","t":4,"rt":$n[3].List$1(_Game.Stacks.HexPiece),"sn":"pieces"}]}; }, $n);
    /*_Game.Stacks.HexStack end.*/

    /*_Game.Stacks.HexStackView start.*/
    $m("_Game.Stacks.HexStackView", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddVisualHexOnTop","t":8,"pi":[{"n":"color","pt":$n[6].HexColor,"ps":0}],"sn":"AddVisualHexOnTop","rt":$n[6].HexPieceView,"p":[$n[6].HexColor]},{"a":2,"n":"AttachVisualHexOnTop","t":8,"pi":[{"n":"view","pt":$n[6].HexPieceView,"ps":0}],"sn":"AttachVisualHexOnTop","rt":$n[0].Void,"p":[$n[6].HexPieceView]},{"a":1,"n":"CreatePieceView","t":8,"pi":[{"n":"color","pt":$n[6].HexColor,"ps":0}],"sn":"CreatePieceView","rt":$n[6].HexPieceView,"p":[$n[6].HexColor]},{"a":2,"n":"DetachTopVisualHex","t":8,"sn":"DetachTopVisualHex","rt":$n[6].HexPieceView},{"a":2,"n":"DetachTopVisualHexes","t":8,"pi":[{"n":"count","pt":$n[0].Int32,"ps":0}],"sn":"DetachTopVisualHexes","rt":$n[3].List$1(_Game.Stacks.HexPieceView),"p":[$n[0].Int32]},{"a":2,"n":"GetTopPosition","t":8,"sn":"GetTopPosition","rt":$n[1].Vector3},{"a":2,"n":"Initialize","t":8,"pi":[{"n":"stack","pt":$n[6].HexStack,"ps":0},{"n":"assets","pt":$n[4].GameAssets,"ps":1}],"sn":"Initialize","rt":$n[0].Void,"p":[$n[6].HexStack,$n[4].GameAssets]},{"a":2,"n":"Rebuild","t":8,"sn":"Rebuild","rt":$n[0].Void},{"a":2,"n":"RemoveTopVisualHexes","t":8,"pi":[{"n":"count","pt":$n[0].Int32,"ps":0}],"sn":"RemoveTopVisualHexes","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"SnapVisualsToStack","t":8,"sn":"SnapVisualsToStack","rt":$n[0].Void},{"a":2,"n":"HeightOffset","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_HeightOffset","t":8,"rt":$n[0].Single,"fg":"HeightOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"HeightOffset"},{"a":2,"n":"Stack","t":16,"rt":$n[6].HexStack,"g":{"a":2,"n":"get_Stack","t":8,"rt":$n[6].HexStack,"fg":"Stack"},"s":{"a":1,"n":"set_Stack","t":8,"p":[$n[6].HexStack],"rt":$n[0].Void,"fs":"Stack"},"fn":"Stack"},{"a":2,"n":"VisualCount","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_VisualCount","t":8,"rt":$n[0].Int32,"fg":"VisualCount","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"VisualCount"},{"a":1,"n":"assets","t":4,"rt":$n[4].GameAssets,"sn":"assets"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"heightOffset","t":4,"rt":$n[0].Single,"sn":"heightOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"pieceViews","t":4,"rt":$n[3].List$1(_Game.Stacks.HexPieceView),"sn":"pieceViews","ro":true},{"a":1,"backing":true,"n":"<Stack>k__BackingField","t":4,"rt":$n[6].HexStack,"sn":"Stack"}]}; }, $n);
    /*_Game.Stacks.HexStackView end.*/

    /*_Game.Stacks.StackTrayController start.*/
    $m("_Game.Stacks.StackTrayController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Clear","t":8,"sn":"Clear","rt":$n[0].Void},{"a":1,"n":"DistanceXZ","is":true,"t":8,"pi":[{"n":"a","pt":$n[1].Vector3,"ps":0},{"n":"b","pt":$n[1].Vector3,"ps":1}],"sn":"DistanceXZ","rt":$n[0].Single,"p":[$n[1].Vector3,$n[1].Vector3],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetHomePosition","t":8,"pi":[{"n":"view","pt":$n[6].HexStackView,"ps":0}],"sn":"GetHomePosition","rt":$n[1].Vector3,"p":[$n[6].HexStackView]},{"a":2,"n":"GetStackUnderPointer","t":8,"pi":[{"n":"screenPosition","pt":$n[1].Vector2,"ps":0},{"n":"inputCamera","pt":$n[1].Camera,"ps":1}],"sn":"GetStackUnderPointer","rt":$n[6].HexStackView,"p":[$n[1].Vector2,$n[1].Camera]},{"a":2,"n":"Initialize","t":8,"pi":[{"n":"stacks","pt":$n[3].List$1(_Game.Stacks.HexStack),"ps":0}],"sn":"Initialize","rt":$n[0].Void,"p":[$n[3].List$1(_Game.Stacks.HexStack)]},{"a":2,"n":"RemoveStack","t":8,"pi":[{"n":"view","pt":$n[6].HexStackView,"ps":0}],"sn":"RemoveStack","rt":$n[0].Void,"p":[$n[6].HexStackView]},{"a":2,"n":"SetBoard","t":8,"pi":[{"n":"board","pt":$n[5].BoardController,"ps":0}],"sn":"SetBoard","rt":$n[0].Void,"p":[$n[5].BoardController]},{"a":1,"n":"TryGetWorldPointOnTrayPlane","t":8,"pi":[{"n":"cam","pt":$n[1].Camera,"ps":0},{"n":"screenPosition","pt":$n[1].Vector2,"ps":1},{"n":"world","out":true,"pt":$n[1].Vector3,"ps":2}],"sn":"TryGetWorldPointOnTrayPlane","rt":$n[0].Boolean,"p":[$n[1].Camera,$n[1].Vector2,$n[1].Vector3],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"RemainingStacks","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_RemainingStacks","t":8,"rt":$n[0].Int32,"fg":"RemainingStacks","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"RemainingStacks"},{"a":2,"n":"StackViews","t":16,"rt":$n[3].IReadOnlyList$1(_Game.Stacks.HexStackView),"g":{"a":2,"n":"get_StackViews","t":8,"rt":$n[3].IReadOnlyList$1(_Game.Stacks.HexStackView),"fg":"StackViews"},"fn":"StackViews"},{"a":1,"n":"board","t":4,"rt":$n[5].BoardController,"sn":"board"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"hitRadius","t":4,"rt":$n[0].Single,"sn":"hitRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"homePositions","t":4,"rt":$n[3].Dictionary$2(_Game.Stacks.HexStackView,UnityEngine.Vector3),"sn":"homePositions","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spacing","t":4,"rt":$n[0].Single,"sn":"spacing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"stackViews","t":4,"rt":$n[3].List$1(_Game.Stacks.HexStackView),"sn":"stackViews","ro":true}]}; }, $n);
    /*_Game.Stacks.StackTrayController end.*/

    /*_Game.Packshot.PackshotController start.*/
    $m("_Game.Packshot.PackshotController", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.CanvasGroup)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Hide","t":8,"sn":"Hide","rt":$n[0].Void},{"a":2,"n":"Initialize","t":8,"sn":"Initialize","rt":$n[0].Void},{"a":2,"n":"Show","t":8,"sn":"Show","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"canvasGroup","t":4,"rt":$n[1].CanvasGroup,"sn":"canvasGroup"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ctaButton","t":4,"rt":$n[17].Button,"sn":"ctaButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fadeDuration","t":4,"rt":$n[0].Single,"sn":"fadeDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*_Game.Packshot.PackshotController end.*/

    /*_Game.Merge.MergeAnimator start.*/
    $m("_Game.Merge.MergeAnimator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AdvanceSpeed","t":8,"sn":"AdvanceSpeed","rt":$n[0].Void},{"a":2,"n":"AnimateDisappear","t":8,"pi":[{"n":"stackView","pt":$n[6].HexStackView,"ps":0},{"n":"count","pt":$n[0].Int32,"ps":1}],"sn":"AnimateDisappear","rt":$n[20].IEnumerator,"p":[$n[6].HexStackView,$n[0].Int32]},{"a":2,"n":"AnimateDisappear","t":8,"pi":[{"n":"stackView","pt":$n[6].HexStackView,"ps":0},{"n":"count","pt":$n[0].Int32,"ps":1},{"n":"color","pt":$n[6].HexColor,"ps":2}],"sn":"AnimateDisappear$1","rt":$n[20].IEnumerator,"p":[$n[6].HexStackView,$n[0].Int32,$n[6].HexColor]},{"a":2,"n":"AnimateMove","t":8,"pi":[{"n":"from","pt":$n[6].HexStackView,"ps":0},{"n":"to","pt":$n[6].HexStackView,"ps":1},{"n":"count","pt":$n[0].Int32,"ps":2}],"sn":"AnimateMove","rt":$n[20].IEnumerator,"p":[$n[6].HexStackView,$n[6].HexStackView,$n[0].Int32]},{"a":1,"n":"ApplyEffectColor","is":true,"t":8,"pi":[{"n":"effect","pt":$n[1].GameObject,"ps":0},{"n":"color","pt":$n[1].Color,"ps":1}],"sn":"ApplyEffectColor","rt":$n[0].Void,"p":[$n[1].GameObject,$n[1].Color]},{"a":1,"n":"CreateSmartFlipTween","t":8,"pi":[{"n":"piece","pt":$n[1].Transform,"ps":0},{"n":"target","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"CreateSmartFlipTween","rt":$n[15].Tween,"p":[$n[1].Transform,$n[1].Vector3,$n[0].Single]},{"a":1,"n":"CurrentSpeedMultiplier","t":8,"sn":"CurrentSpeedMultiplier","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"GetDisappearEffectPosition","t":8,"pi":[{"n":"stackView","pt":$n[6].HexStackView,"ps":0}],"sn":"GetDisappearEffectPosition","rt":$n[1].Vector3,"p":[$n[6].HexStackView]},{"a":1,"n":"GetDuration","t":8,"pi":[{"n":"baseDuration","pt":$n[0].Single,"ps":0}],"sn":"GetDuration","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"Initialize","t":8,"pi":[{"n":"assets","pt":$n[4].GameAssets,"ps":0},{"n":"soundPlayer","pt":$n[11].SoundPlayer,"ps":1}],"sn":"Initialize","rt":$n[0].Void,"p":[$n[4].GameAssets,$n[11].SoundPlayer]},{"a":1,"n":"PlayAllElementsDisappearCompleteSound","t":8,"sn":"PlayAllElementsDisappearCompleteSound","rt":$n[0].Void},{"a":1,"n":"PlayElementDisappearSound","t":8,"sn":"PlayElementDisappearSound","rt":$n[0].Void},{"a":1,"n":"PlayElementFlyToStackSound","t":8,"sn":"PlayElementFlyToStackSound","rt":$n[0].Void},{"a":2,"n":"ResetSpeed","t":8,"sn":"ResetSpeed","rt":$n[0].Void},{"a":1,"n":"SpawnDisappearEffect","t":8,"pi":[{"n":"position","pt":$n[1].Vector3,"ps":0},{"n":"color","pt":$n[6].HexColor,"ps":1}],"sn":"SpawnDisappearEffect","rt":$n[0].Void,"p":[$n[1].Vector3,$n[6].HexColor]},{"a":2,"n":"BaseDisappearDuration","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_BaseDisappearDuration","t":8,"rt":$n[0].Single,"fg":"BaseDisappearDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_BaseDisappearDuration","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"BaseDisappearDuration"},"fn":"BaseDisappearDuration"},{"a":2,"n":"BaseMoveDuration","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_BaseMoveDuration","t":8,"rt":$n[0].Single,"fg":"BaseMoveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_BaseMoveDuration","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"BaseMoveDuration"},"fn":"BaseMoveDuration"},{"a":2,"n":"MaxSpeedMultiplier","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_MaxSpeedMultiplier","t":8,"rt":$n[0].Single,"fg":"MaxSpeedMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_MaxSpeedMultiplier","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"MaxSpeedMultiplier"},"fn":"MaxSpeedMultiplier"},{"a":2,"n":"SpeedIncreasePerStep","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_SpeedIncreasePerStep","t":8,"rt":$n[0].Single,"fg":"SpeedIncreasePerStep","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_SpeedIncreasePerStep","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"SpeedIncreasePerStep"},"fn":"SpeedIncreasePerStep"},{"a":1,"n":"animationStep","t":4,"rt":$n[0].Int32,"sn":"animationStep","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"assets","t":4,"rt":$n[4].GameAssets,"sn":"assets"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"baseDisappearDuration","t":4,"rt":$n[0].Single,"sn":"baseDisappearDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"baseMoveDuration","t":4,"rt":$n[0].Single,"sn":"baseMoveDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"disappearEffectLifetime","t":4,"rt":$n[0].Single,"sn":"disappearEffectLifetime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"disappearEffectPrefab","t":4,"rt":$n[1].GameObject,"sn":"disappearEffectPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"disappearEffectSurfaceOffset","t":4,"rt":$n[0].Single,"sn":"disappearEffectSurfaceOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"disappearStepDelay","t":4,"rt":$n[0].Single,"sn":"disappearStepDelay","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"effectParent","t":4,"rt":$n[1].Transform,"sn":"effectParent"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"flipDegrees","t":4,"rt":$n[0].Single,"sn":"flipDegrees","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"jumpPower","t":4,"rt":$n[0].Single,"sn":"jumpPower","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"landingTiltDegrees","t":4,"rt":$n[0].Single,"sn":"landingTiltDegrees","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxSpeedMultiplier","t":4,"rt":$n[0].Single,"sn":"maxSpeedMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pieceStagger","t":4,"rt":$n[0].Single,"sn":"pieceStagger","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"soundPlayer","t":4,"rt":$n[11].SoundPlayer,"sn":"soundPlayer"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"speedIncreasePerStep","t":4,"rt":$n[0].Single,"sn":"speedIncreasePerStep","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*_Game.Merge.MergeAnimator end.*/

    /*_Game.Merge.MergeSystem start.*/
    $m("_Game.Merge.MergeSystem", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CanClearTop","t":8,"pi":[{"n":"cell","pt":$n[5].HexCell,"ps":0}],"sn":"CanClearTop","rt":$n[0].Boolean,"p":[$n[5].HexCell],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"CellLabel","t":8,"pi":[{"n":"cell","pt":$n[5].HexCell,"ps":0}],"sn":"CellLabel","rt":$n[0].String,"p":[$n[5].HexCell]},{"a":1,"n":"ClearCellAndDestroyStackView","t":8,"pi":[{"n":"cell","pt":$n[5].HexCell,"ps":0},{"n":"stackView","pt":$n[6].HexStackView,"ps":1}],"sn":"ClearCellAndDestroyStackView","rt":$n[0].Void,"p":[$n[5].HexCell,$n[6].HexStackView]},{"a":1,"n":"ColorsMatch","is":true,"t":8,"pi":[{"n":"a","pt":$n[6].HexColor,"ps":0},{"n":"b","pt":$n[6].HexColor,"ps":1}],"sn":"ColorsMatch","rt":$n[0].Boolean,"p":[$n[6].HexColor,$n[6].HexColor],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"CompareCellsByCoordinate","is":true,"t":8,"pi":[{"n":"a","pt":$n[5].HexCell,"ps":0},{"n":"b","pt":$n[5].HexCell,"ps":1}],"sn":"CompareCellsByCoordinate","rt":$n[0].Int32,"p":[$n[5].HexCell,$n[5].HexCell],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"CompareNeighboursForTarget","t":8,"pi":[{"n":"target","pt":$n[5].HexCell,"ps":0},{"n":"a","pt":$n[5].HexCell,"ps":1},{"n":"b","pt":$n[5].HexCell,"ps":2}],"sn":"CompareNeighboursForTarget","rt":$n[0].Int32,"p":[$n[5].HexCell,$n[5].HexCell,$n[5].HexCell],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"ContainsCell","is":true,"t":8,"pi":[{"n":"cells","pt":$n[3].List$1(_Game.Board.HexCell),"ps":0},{"n":"searchedCell","pt":$n[5].HexCell,"ps":1}],"sn":"ContainsCell","rt":$n[0].Boolean,"p":[$n[3].List$1(_Game.Board.HexCell),$n[5].HexCell],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"ContainsNeighbour","t":8,"pi":[{"n":"owner","pt":$n[5].HexCell,"ps":0},{"n":"searchedCell","pt":$n[5].HexCell,"ps":1}],"sn":"ContainsNeighbour","rt":$n[0].Boolean,"p":[$n[5].HexCell,$n[5].HexCell],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"DequeueNextMergeCandidate","t":8,"pi":[{"n":"pendingCells","pt":$n[3].List$1(_Game.Board.HexCell),"ps":0},{"n":"queuedCells","pt":$n[3].List$1(_Game.Board.HexCell),"ps":1}],"sn":"DequeueNextMergeCandidate","rt":$n[5].HexCell,"p":[$n[3].List$1(_Game.Board.HexCell),$n[3].List$1(_Game.Board.HexCell)]},{"a":1,"n":"DirectionLabel","is":true,"t":8,"pi":[{"n":"from","pt":$n[5].HexCell,"ps":0},{"n":"to","pt":$n[5].HexCell,"ps":1}],"sn":"DirectionLabel","rt":$n[0].String,"p":[$n[5].HexCell,$n[5].HexCell]},{"a":1,"n":"DumpBoardState","t":8,"sn":"DumpBoardState","rt":$n[0].Void},{"a":1,"n":"EnqueueCell","t":8,"pi":[{"n":"cell","pt":$n[5].HexCell,"ps":0},{"n":"pendingCells","pt":$n[3].List$1(_Game.Board.HexCell),"ps":1},{"n":"queuedCells","pt":$n[3].List$1(_Game.Board.HexCell),"ps":2}],"sn":"EnqueueCell","rt":$n[0].Void,"p":[$n[5].HexCell,$n[3].List$1(_Game.Board.HexCell),$n[3].List$1(_Game.Board.HexCell)]},{"a":1,"n":"EnqueueCellAndNeighbours","t":8,"pi":[{"n":"cell","pt":$n[5].HexCell,"ps":0},{"n":"pendingCells","pt":$n[3].List$1(_Game.Board.HexCell),"ps":1},{"n":"queuedCells","pt":$n[3].List$1(_Game.Board.HexCell),"ps":2}],"sn":"EnqueueCellAndNeighbours","rt":$n[0].Void,"p":[$n[5].HexCell,$n[3].List$1(_Game.Board.HexCell),$n[3].List$1(_Game.Board.HexCell)]},{"a":1,"n":"FindAnyMergeCandidate","t":8,"sn":"FindAnyMergeCandidate","rt":$n[5].HexCell},{"a":1,"n":"FindMatchingNeighbour","t":8,"pi":[{"n":"activeCell","pt":$n[5].HexCell,"ps":0}],"sn":"FindMatchingNeighbour","rt":$n[5].HexCell,"p":[$n[5].HexCell]},{"a":1,"n":"GetCellsInStableOrder","t":8,"sn":"GetCellsInStableOrder","rt":$n[3].List$1(_Game.Board.HexCell)},{"a":1,"n":"GetDirectionPriority","t":8,"pi":[{"n":"target","pt":$n[5].HexCell,"ps":0},{"n":"source","pt":$n[5].HexCell,"ps":1}],"sn":"GetDirectionPriority","rt":$n[0].Int32,"p":[$n[5].HexCell,$n[5].HexCell],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"GetMatchingNeighboursInStableOrder","t":8,"pi":[{"n":"cell","pt":$n[5].HexCell,"ps":0}],"sn":"GetMatchingNeighboursInStableOrder","rt":$n[3].List$1(_Game.Board.HexCell),"p":[$n[5].HexCell]},{"a":1,"n":"GetNeighboursInStableOrder","t":8,"pi":[{"n":"cell","pt":$n[5].HexCell,"ps":0}],"sn":"GetNeighboursInStableOrder","rt":$n[3].List$1(_Game.Board.HexCell),"p":[$n[5].HexCell]},{"a":2,"n":"Initialize","t":8,"pi":[{"n":"board","pt":$n[5].BoardController,"ps":0},{"n":"animator","pt":$n[9].MergeAnimator,"ps":1}],"sn":"Initialize","rt":$n[0].Void,"p":[$n[5].BoardController,$n[9].MergeAnimator]},{"a":1,"n":"IsMergeCandidate","t":8,"pi":[{"n":"cell","pt":$n[5].HexCell,"ps":0}],"sn":"IsMergeCandidate","rt":$n[0].Boolean,"p":[$n[5].HexCell],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"LogMerge","t":8,"pi":[{"n":"message","pt":$n[0].String,"ps":0}],"sn":"LogMerge","rt":$n[0].Void,"p":[$n[0].String]},{"a":1,"n":"ProcessMergeStep","t":8,"pi":[{"n":"targetCell","pt":$n[5].HexCell,"ps":0}],"sn":"ProcessMergeStep","rt":$n[20].IEnumerator,"p":[$n[5].HexCell]},{"a":1,"n":"RemoveCell","is":true,"t":8,"pi":[{"n":"cells","pt":$n[3].List$1(_Game.Board.HexCell),"ps":0},{"n":"removedCell","pt":$n[5].HexCell,"ps":1}],"sn":"RemoveCell","rt":$n[0].Void,"p":[$n[3].List$1(_Game.Board.HexCell),$n[5].HexCell]},{"a":1,"n":"ResolveClears","t":8,"pi":[{"n":"cell","pt":$n[5].HexCell,"ps":0}],"sn":"ResolveClears","rt":$n[20].IEnumerator,"p":[$n[5].HexCell]},{"a":2,"n":"RunMerge","t":8,"pi":[{"n":"activeCell","pt":$n[5].HexCell,"ps":0}],"sn":"RunMerge","rt":$n[20].IEnumerator,"p":[$n[5].HexCell]},{"a":1,"n":"SelectNextMergeTarget","t":8,"pi":[{"n":"activeCell","pt":$n[5].HexCell,"ps":0},{"n":"pendingCells","pt":$n[3].List$1(_Game.Board.HexCell),"ps":1},{"n":"queuedCells","pt":$n[3].List$1(_Game.Board.HexCell),"ps":2}],"sn":"SelectNextMergeTarget","rt":$n[5].HexCell,"p":[$n[5].HexCell,$n[3].List$1(_Game.Board.HexCell),$n[3].List$1(_Game.Board.HexCell)]},{"a":1,"n":"SortNeighboursForTarget","t":8,"pi":[{"n":"target","pt":$n[5].HexCell,"ps":0},{"n":"neighbours","pt":$n[3].List$1(_Game.Board.HexCell),"ps":1}],"sn":"SortNeighboursForTarget","rt":$n[0].Void,"p":[$n[5].HexCell,$n[3].List$1(_Game.Board.HexCell)]},{"a":1,"n":"StackLabel","is":true,"t":8,"pi":[{"n":"cell","pt":$n[5].HexCell,"ps":0}],"sn":"StackLabel","rt":$n[0].String,"p":[$n[5].HexCell]},{"a":2,"n":"IsRunning","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsRunning","t":8,"rt":$n[0].Boolean,"fg":"IsRunning","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_IsRunning","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"IsRunning"},"fn":"IsRunning"},{"a":1,"n":"PreferPlacedCellAsMergeTarget","is":true,"t":4,"rt":$n[0].Boolean,"sn":"PreferPlacedCellAsMergeTarget","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"activeMergeCell","t":4,"rt":$n[5].HexCell,"sn":"activeMergeCell"},{"a":1,"n":"animator","t":4,"rt":$n[9].MergeAnimator,"sn":"animator"},{"a":1,"n":"board","t":4,"rt":$n[5].BoardController,"sn":"board"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clearMatchCount","t":4,"rt":$n[0].Int32,"sn":"clearMatchCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"debugMergeLogs","t":4,"rt":$n[0].Boolean,"sn":"debugMergeLogs","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"lastMoveSourceCell","t":4,"rt":$n[5].HexCell,"sn":"lastMoveSourceCell"},{"a":1,"n":"lastMoveTargetCell","t":4,"rt":$n[5].HexCell,"sn":"lastMoveTargetCell"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxChainSteps","t":4,"rt":$n[0].Int32,"sn":"maxChainSteps","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<IsRunning>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"IsRunning","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*_Game.Merge.MergeSystem end.*/

    /*_Game.Flow.LevelFlowController start.*/
    $m("_Game.Flow.LevelFlowController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"HandleStackPlaced","t":8,"pi":[{"n":"cell","pt":$n[5].HexCell,"ps":0}],"sn":"HandleStackPlaced","rt":$n[20].IEnumerator,"p":[$n[5].HexCell]},{"a":2,"n":"Initialize","t":8,"pi":[{"n":"board","pt":$n[5].BoardController,"ps":0},{"n":"tray","pt":$n[6].StackTrayController,"ps":1},{"n":"drag","pt":$n[7].DragController,"ps":2},{"n":"mergeSystem","pt":$n[9].MergeSystem,"ps":3},{"n":"tutorial","pt":$n[12].TutorialHandController,"ps":4},{"n":"packshot","pt":$n[10].PackshotController,"ps":5}],"sn":"Initialize","rt":$n[0].Void,"p":[$n[5].BoardController,$n[6].StackTrayController,$n[7].DragController,$n[9].MergeSystem,$n[12].TutorialHandController,$n[10].PackshotController]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnDragFailed","t":8,"pi":[{"n":"stackView","pt":$n[6].HexStackView,"ps":0}],"sn":"OnDragFailed","rt":$n[0].Void,"p":[$n[6].HexStackView]},{"a":1,"n":"OnDragStarted","t":8,"pi":[{"n":"stackView","pt":$n[6].HexStackView,"ps":0}],"sn":"OnDragStarted","rt":$n[0].Void,"p":[$n[6].HexStackView]},{"a":1,"n":"OnStackPlaced","t":8,"pi":[{"n":"stackView","pt":$n[6].HexStackView,"ps":0},{"n":"cell","pt":$n[5].HexCell,"ps":1}],"sn":"OnStackPlaced","rt":$n[0].Void,"p":[$n[6].HexStackView,$n[5].HexCell]},{"a":1,"n":"SetState","t":8,"pi":[{"n":"state","pt":$n[8].LevelFlowState,"ps":0}],"sn":"SetState","rt":$n[0].Void,"p":[$n[8].LevelFlowState]},{"a":1,"n":"StartLevel","t":8,"sn":"StartLevel","rt":$n[0].Void},{"a":2,"n":"StartLevelFlow","t":8,"sn":"StartLevelFlow","rt":$n[0].Void},{"a":1,"n":"UnsubscribeFromDrag","t":8,"sn":"UnsubscribeFromDrag","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"WasPointerPressedThisFrame","is":true,"t":8,"sn":"WasPointerPressedThisFrame","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"State","t":16,"rt":$n[8].LevelFlowState,"g":{"a":2,"n":"get_State","t":8,"rt":$n[8].LevelFlowState,"fg":"State","box":function ($v) { return Bridge.box($v, _Game.Flow.LevelFlowState, System.Enum.toStringFn(_Game.Flow.LevelFlowState));}},"s":{"a":1,"n":"set_State","t":8,"p":[$n[8].LevelFlowState],"rt":$n[0].Void,"fs":"State"},"fn":"State"},{"a":1,"n":"__Property__Initializer__State","t":4,"rt":$n[8].LevelFlowState,"sn":"__Property__Initializer__State","box":function ($v) { return Bridge.box($v, _Game.Flow.LevelFlowState, System.Enum.toStringFn(_Game.Flow.LevelFlowState));}},{"a":1,"n":"board","t":4,"rt":$n[5].BoardController,"sn":"board"},{"a":1,"n":"drag","t":4,"rt":$n[7].DragController,"sn":"drag"},{"a":1,"n":"fullGameInstallRequested","t":4,"rt":$n[0].Boolean,"sn":"fullGameInstallRequested","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"mergeSystem","t":4,"rt":$n[9].MergeSystem,"sn":"mergeSystem"},{"a":1,"n":"packshot","t":4,"rt":$n[10].PackshotController,"sn":"packshot"},{"a":1,"n":"tray","t":4,"rt":$n[6].StackTrayController,"sn":"tray"},{"a":1,"n":"tutorial","t":4,"rt":$n[12].TutorialHandController,"sn":"tutorial"},{"a":1,"backing":true,"n":"<State>k__BackingField","t":4,"rt":$n[8].LevelFlowState,"sn":"State","box":function ($v) { return Bridge.box($v, _Game.Flow.LevelFlowState, System.Enum.toStringFn(_Game.Flow.LevelFlowState));}}]}; }, $n);
    /*_Game.Flow.LevelFlowController end.*/

    /*_Game.Flow.LevelFlowState start.*/
    $m("_Game.Flow.LevelFlowState", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Dragging","is":true,"t":4,"rt":$n[8].LevelFlowState,"sn":"Dragging","box":function ($v) { return Bridge.box($v, _Game.Flow.LevelFlowState, System.Enum.toStringFn(_Game.Flow.LevelFlowState));}},{"a":2,"n":"Initializing","is":true,"t":4,"rt":$n[8].LevelFlowState,"sn":"Initializing","box":function ($v) { return Bridge.box($v, _Game.Flow.LevelFlowState, System.Enum.toStringFn(_Game.Flow.LevelFlowState));}},{"a":2,"n":"Merging","is":true,"t":4,"rt":$n[8].LevelFlowState,"sn":"Merging","box":function ($v) { return Bridge.box($v, _Game.Flow.LevelFlowState, System.Enum.toStringFn(_Game.Flow.LevelFlowState));}},{"a":2,"n":"Packshot","is":true,"t":4,"rt":$n[8].LevelFlowState,"sn":"Packshot","box":function ($v) { return Bridge.box($v, _Game.Flow.LevelFlowState, System.Enum.toStringFn(_Game.Flow.LevelFlowState));}},{"a":2,"n":"Tutorial","is":true,"t":4,"rt":$n[8].LevelFlowState,"sn":"Tutorial","box":function ($v) { return Bridge.box($v, _Game.Flow.LevelFlowState, System.Enum.toStringFn(_Game.Flow.LevelFlowState));}},{"a":2,"n":"WaitingForInput","is":true,"t":4,"rt":$n[8].LevelFlowState,"sn":"WaitingForInput","box":function ($v) { return Bridge.box($v, _Game.Flow.LevelFlowState, System.Enum.toStringFn(_Game.Flow.LevelFlowState));}}]}; }, $n);
    /*_Game.Flow.LevelFlowState end.*/

    /*_Game.Drag.DragController start.*/
    $m("_Game.Drag.DragController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"EndDrag","t":8,"pi":[{"n":"screenPosition","pt":$n[1].Vector2,"ps":0}],"sn":"EndDrag","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":2,"n":"Initialize","t":8,"pi":[{"n":"inputCamera","pt":$n[1].Camera,"ps":0},{"n":"board","pt":$n[5].BoardController,"ps":1},{"n":"tray","pt":$n[6].StackTrayController,"ps":2}],"sn":"Initialize","rt":$n[0].Void,"p":[$n[1].Camera,$n[5].BoardController,$n[6].StackTrayController]},{"a":2,"n":"SetInputEnabled","t":8,"pi":[{"n":"enabled","pt":$n[0].Boolean,"ps":0}],"sn":"SetInputEnabled","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":1,"n":"TryBeginDrag","t":8,"pi":[{"n":"screenPosition","pt":$n[1].Vector2,"ps":0}],"sn":"TryBeginDrag","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":1,"n":"TryGetPointerDown","t":8,"pi":[{"n":"position","out":true,"pt":$n[1].Vector2,"ps":0}],"sn":"TryGetPointerDown","rt":$n[0].Boolean,"p":[$n[1].Vector2],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"TryGetPointerPosition","t":8,"pi":[{"n":"position","out":true,"pt":$n[1].Vector2,"ps":0}],"sn":"TryGetPointerPosition","rt":$n[0].Boolean,"p":[$n[1].Vector2],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"TryGetPointerUp","t":8,"pi":[{"n":"position","out":true,"pt":$n[1].Vector2,"ps":0}],"sn":"TryGetPointerUp","rt":$n[0].Boolean,"p":[$n[1].Vector2],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"TryGetWorldPointOnPlane","is":true,"t":8,"pi":[{"n":"cam","pt":$n[1].Camera,"ps":0},{"n":"screenPosition","pt":$n[1].Vector2,"ps":1},{"n":"y","pt":$n[0].Single,"ps":2},{"n":"world","out":true,"pt":$n[1].Vector3,"ps":3}],"sn":"TryGetWorldPointOnPlane","rt":$n[0].Boolean,"p":[$n[1].Camera,$n[1].Vector2,$n[0].Single,$n[1].Vector3],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateDrag","t":8,"pi":[{"n":"screenPosition","pt":$n[1].Vector2,"ps":0}],"sn":"UpdateDrag","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":2,"n":"IsDragging","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsDragging","t":8,"rt":$n[0].Boolean,"fg":"IsDragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsDragging"},{"a":1,"n":"board","t":4,"rt":$n[5].BoardController,"sn":"board"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"dragHeight","t":4,"rt":$n[0].Single,"sn":"dragHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"draggedHome","t":4,"rt":$n[1].Vector3,"sn":"draggedHome"},{"a":1,"n":"draggedStack","t":4,"rt":$n[6].HexStackView,"sn":"draggedStack"},{"a":1,"n":"highlightedCell","t":4,"rt":$n[5].HexCell,"sn":"highlightedCell"},{"a":1,"n":"inputCamera","t":4,"rt":$n[1].Camera,"sn":"inputCamera"},{"a":1,"n":"inputEnabled","t":4,"rt":$n[0].Boolean,"sn":"inputEnabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"returnDuration","t":4,"rt":$n[0].Single,"sn":"returnDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"tray","t":4,"rt":$n[6].StackTrayController,"sn":"tray"},{"a":2,"n":"DragFailed","t":2,"ad":{"a":2,"n":"add_DragFailed","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addDragFailed","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_DragFailed","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeDragFailed","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"DragStarted","t":2,"ad":{"a":2,"n":"add_DragStarted","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addDragStarted","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_DragStarted","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeDragStarted","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"StackPlaced","t":2,"ad":{"a":2,"n":"add_StackPlaced","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addStackPlaced","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_StackPlaced","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeStackPlaced","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*_Game.Drag.DragController end.*/

    /*_Game.DI.GameAssets start.*/
    $m("_Game.DI.GameAssets", function () { return {"att":1048833,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[1].GameObject,$n[1].GameObject,$n[2].HexColorConfig,$n[1].Sprite],"pi":[{"n":"hexCellPrefab","pt":$n[1].GameObject,"ps":0},{"n":"hexPiecePrefab","pt":$n[1].GameObject,"ps":1},{"n":"hexColorConfig","pt":$n[2].HexColorConfig,"ps":2},{"n":"tutorialHandSprite","pt":$n[1].Sprite,"ps":3}],"sn":"ctor"},{"a":2,"n":"HexCellPrefab","t":16,"rt":$n[1].GameObject,"g":{"a":2,"n":"get_HexCellPrefab","t":8,"rt":$n[1].GameObject,"fg":"HexCellPrefab"},"fn":"HexCellPrefab"},{"a":2,"n":"HexColorConfig","t":16,"rt":$n[2].HexColorConfig,"g":{"a":2,"n":"get_HexColorConfig","t":8,"rt":$n[2].HexColorConfig,"fg":"HexColorConfig"},"fn":"HexColorConfig"},{"a":2,"n":"HexPiecePrefab","t":16,"rt":$n[1].GameObject,"g":{"a":2,"n":"get_HexPiecePrefab","t":8,"rt":$n[1].GameObject,"fg":"HexPiecePrefab"},"fn":"HexPiecePrefab"},{"a":2,"n":"TutorialHandSprite","t":16,"rt":$n[1].Sprite,"g":{"a":2,"n":"get_TutorialHandSprite","t":8,"rt":$n[1].Sprite,"fg":"TutorialHandSprite"},"fn":"TutorialHandSprite"},{"a":1,"backing":true,"n":"<HexCellPrefab>k__BackingField","t":4,"rt":$n[1].GameObject,"sn":"HexCellPrefab"},{"a":1,"backing":true,"n":"<HexColorConfig>k__BackingField","t":4,"rt":$n[2].HexColorConfig,"sn":"HexColorConfig"},{"a":1,"backing":true,"n":"<HexPiecePrefab>k__BackingField","t":4,"rt":$n[1].GameObject,"sn":"HexPiecePrefab"},{"a":1,"backing":true,"n":"<TutorialHandSprite>k__BackingField","t":4,"rt":$n[1].Sprite,"sn":"TutorialHandSprite"}]}; }, $n);
    /*_Game.DI.GameAssets end.*/

    /*_Game.Configs.HexColorConfig start.*/
    $m("_Game.Configs.HexColorConfig", function () { return {"nested":[$n[2].HexColorConfig.Entry],"att":1048577,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        menuName: "Hex Merge/Hex Color Config"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetColor","t":8,"pi":[{"n":"hexColor","pt":$n[6].HexColor,"ps":0}],"sn":"GetColor","rt":$n[1].Color,"p":[$n[6].HexColor]},{"a":2,"n":"GetFallbackColor","is":true,"t":8,"pi":[{"n":"hexColor","pt":$n[6].HexColor,"ps":0}],"sn":"GetFallbackColor","rt":$n[1].Color,"p":[$n[6].HexColor]},{"a":2,"n":"GetMaterial","t":8,"pi":[{"n":"hexColor","pt":$n[6].HexColor,"ps":0}],"sn":"GetMaterial","rt":$n[1].Material,"p":[$n[6].HexColor]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"entries","t":4,"rt":$n[3].List$1(_Game.Configs.HexColorConfig.Entry),"sn":"entries"}]}; }, $n);
    /*_Game.Configs.HexColorConfig end.*/

    /*_Game.Configs.HexColorConfig+Entry start.*/
    $m("_Game.Configs.HexColorConfig.Entry", function () { return {"td":$n[2].HexColorConfig,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"color","t":4,"rt":$n[1].Color,"sn":"color"},{"a":2,"n":"hexColor","t":4,"rt":$n[6].HexColor,"sn":"hexColor","box":function ($v) { return Bridge.box($v, _Game.Stacks.HexColor, System.Enum.toStringFn(_Game.Stacks.HexColor));}},{"a":2,"n":"material","t":4,"rt":$n[1].Material,"sn":"material"}]}; }, $n);
    /*_Game.Configs.HexColorConfig+Entry end.*/

    /*_Game.Configs.LevelConfig start.*/
    $m("_Game.Configs.LevelConfig", function () { return {"nested":[$n[2].LevelConfig.StackDefinition,$n[2].LevelConfig.BoardStackDefinition],"att":1048577,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        menuName: "Hex Merge/Level Config"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"boardRadius","t":4,"rt":$n[0].Int32,"sn":"boardRadius","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"completeWhenTrayEmpty","t":4,"rt":$n[0].Boolean,"sn":"completeWhenTrayEmpty","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"startingBoardStacks","t":4,"rt":$n[3].List$1(_Game.Configs.LevelConfig.BoardStackDefinition),"sn":"startingBoardStacks"},{"a":2,"n":"trayStacks","t":4,"rt":$n[3].List$1(_Game.Configs.LevelConfig.StackDefinition),"sn":"trayStacks"},{"a":2,"n":"tutorialTargetCell","t":4,"rt":$n[1].Vector2Int,"sn":"tutorialTargetCell"}]}; }, $n);
    /*_Game.Configs.LevelConfig end.*/

    /*_Game.Configs.LevelConfig+StackDefinition start.*/
    $m("_Game.Configs.LevelConfig.StackDefinition", function () { return {"td":$n[2].LevelConfig,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CreateStack","t":8,"sn":"CreateStack","rt":$n[6].HexStack},{"a":2,"n":"colorsBottomToTop","t":4,"rt":$n[3].List$1(_Game.Stacks.HexColor),"sn":"colorsBottomToTop"}]}; }, $n);
    /*_Game.Configs.LevelConfig+StackDefinition end.*/

    /*_Game.Configs.LevelConfig+BoardStackDefinition start.*/
    $m("_Game.Configs.LevelConfig.BoardStackDefinition", function () { return {"td":$n[2].LevelConfig,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"coordinate","t":4,"rt":$n[1].Vector2Int,"sn":"coordinate"},{"a":2,"n":"stack","t":4,"rt":$n[2].LevelConfig.StackDefinition,"sn":"stack"}]}; }, $n);
    /*_Game.Configs.LevelConfig+BoardStackDefinition end.*/

    /*_Game.Board.BoardController start.*/
    $m("_Game.Board.BoardController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"BuildGrid","t":8,"sn":"BuildGrid","rt":$n[0].Void},{"a":2,"n":"ClearCell","t":8,"pi":[{"n":"cell","pt":$n[5].HexCell,"ps":0}],"sn":"ClearCell","rt":$n[0].Void,"p":[$n[5].HexCell]},{"a":1,"n":"ClearChildren","t":8,"sn":"ClearChildren","rt":$n[0].Void},{"a":2,"n":"ClearHighlights","t":8,"sn":"ClearHighlights","rt":$n[0].Void},{"a":2,"n":"CreateStackView","t":8,"pi":[{"n":"stack","pt":$n[6].HexStack,"ps":0},{"n":"parent","pt":$n[1].Transform,"ps":1},{"n":"position","pt":$n[1].Vector3,"ps":2}],"sn":"CreateStackView","rt":$n[6].HexStackView,"p":[$n[6].HexStack,$n[1].Transform,$n[1].Vector3]},{"a":1,"n":"DistanceXZ","is":true,"t":8,"pi":[{"n":"a","pt":$n[1].Vector3,"ps":0},{"n":"b","pt":$n[1].Vector3,"ps":1}],"sn":"DistanceXZ","rt":$n[0].Single,"p":[$n[1].Vector3,$n[1].Vector3],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"EnsureBoardOutline","t":8,"sn":"EnsureBoardOutline","rt":$n[0].Void},{"a":2,"n":"GetCell","t":8,"pi":[{"n":"coordinate","pt":$n[1].Vector2Int,"ps":0}],"sn":"GetCell","rt":$n[5].HexCell,"p":[$n[1].Vector2Int]},{"a":2,"n":"GetCellUnderPointer","t":8,"pi":[{"n":"screenPosition","pt":$n[1].Vector2,"ps":0}],"sn":"GetCellUnderPointer","rt":$n[5].HexCell,"p":[$n[1].Vector2]},{"a":2,"n":"GetCellView","t":8,"pi":[{"n":"cell","pt":$n[5].HexCell,"ps":0}],"sn":"GetCellView","rt":$n[5].HexCellView,"p":[$n[5].HexCell]},{"a":2,"n":"GetNeighbours","t":8,"pi":[{"n":"cell","pt":$n[5].HexCell,"ps":0}],"sn":"GetNeighbours","rt":$n[3].List$1(_Game.Board.HexCell),"p":[$n[5].HexCell]},{"a":2,"n":"GetStackView","t":8,"pi":[{"n":"cell","pt":$n[5].HexCell,"ps":0}],"sn":"GetStackView","rt":$n[6].HexStackView,"p":[$n[5].HexCell]},{"a":2,"n":"HighlightCell","t":8,"pi":[{"n":"cell","pt":$n[5].HexCell,"ps":0},{"n":"active","pt":$n[0].Boolean,"ps":1},{"n":"valid","pt":$n[0].Boolean,"ps":2}],"sn":"HighlightCell","rt":$n[0].Void,"p":[$n[5].HexCell,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"Initialize","t":8,"pi":[{"n":"radius","pt":$n[0].Int32,"ps":0}],"sn":"Initialize","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"InitializeDependencies","t":8,"pi":[{"n":"assets","pt":$n[4].GameAssets,"ps":0},{"n":"inputCamera","pt":$n[1].Camera,"ps":1},{"n":"cellHighlightSettings","pt":$n[5].HexCellHighlightSettings,"ps":2},{"n":"soundPlayer","pt":$n[11].SoundPlayer,"ps":3}],"sn":"InitializeDependencies","rt":$n[0].Void,"p":[$n[4].GameAssets,$n[1].Camera,$n[5].HexCellHighlightSettings,$n[11].SoundPlayer]},{"a":2,"n":"IsCellEmpty","t":8,"pi":[{"n":"cell","pt":$n[5].HexCell,"ps":0}],"sn":"IsCellEmpty","rt":$n[0].Boolean,"p":[$n[5].HexCell],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"PlaceStack","t":8,"pi":[{"n":"cell","pt":$n[5].HexCell,"ps":0},{"n":"stack","pt":$n[6].HexStack,"ps":1}],"sn":"PlaceStack","rt":$n[0].Void,"p":[$n[5].HexCell,$n[6].HexStack]},{"a":2,"n":"PlaceStackView","t":8,"pi":[{"n":"cell","pt":$n[5].HexCell,"ps":0},{"n":"stackView","pt":$n[6].HexStackView,"ps":1},{"n":"playDropSound","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"PlaceStackView","rt":$n[0].Void,"p":[$n[5].HexCell,$n[6].HexStackView,$n[0].Boolean]},{"a":1,"n":"TryGetWorldPointOnBoardPlane","t":8,"pi":[{"n":"cam","pt":$n[1].Camera,"ps":0},{"n":"screenPosition","pt":$n[1].Vector2,"ps":1},{"n":"world","out":true,"pt":$n[1].Vector3,"ps":2}],"sn":"TryGetWorldPointOnBoardPlane","rt":$n[0].Boolean,"p":[$n[1].Camera,$n[1].Vector2,$n[1].Vector3],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Cells","t":16,"rt":$n[3].IEnumerable$1(_Game.Board.HexCell),"g":{"a":2,"n":"get_Cells","t":8,"rt":$n[3].IEnumerable$1(_Game.Board.HexCell),"fg":"Cells"},"fn":"Cells"},{"a":2,"n":"IsBoardEmpty","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsBoardEmpty","t":8,"rt":$n[0].Boolean,"fg":"IsBoardEmpty","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsBoardEmpty"},{"a":1,"n":"assets","t":4,"rt":$n[4].GameAssets,"sn":"assets"},{"a":1,"n":"boardOutline","t":4,"rt":$n[5].BoardOutline,"sn":"boardOutline"},{"a":1,"n":"cellHighlightSettings","t":4,"rt":$n[5].HexCellHighlightSettings,"sn":"cellHighlightSettings"},{"a":1,"n":"cells","t":4,"rt":$n[3].Dictionary$2(UnityEngine.Vector2Int,_Game.Board.HexCell),"sn":"cells","ro":true},{"a":1,"n":"gridGenerator","t":4,"rt":$n[5].HexGridGenerator,"sn":"gridGenerator"},{"a":1,"n":"inputCamera","t":4,"rt":$n[1].Camera,"sn":"inputCamera"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"pointerCellRadius","t":4,"rt":$n[0].Single,"sn":"pointerCellRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"soundPlayer","t":4,"rt":$n[11].SoundPlayer,"sn":"soundPlayer"},{"a":1,"n":"views","t":4,"rt":$n[3].Dictionary$2(_Game.Board.HexCell,_Game.Board.HexCellView),"sn":"views","ro":true},{"a":1,"n":"viewsByCoordinate","t":4,"rt":$n[3].Dictionary$2(UnityEngine.Vector2Int,_Game.Board.HexCellView),"sn":"viewsByCoordinate","ro":true}]}; }, $n);
    /*_Game.Board.BoardController end.*/

    /*_Game.Board.BoardOutline start.*/
    $m("_Game.Board.BoardOutline", function () { return {"nested":[$n[5].BoardOutline.OutlineRenderMode],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AddHexCap","t":8,"pi":[{"n":"centre","pt":$n[1].Vector3,"ps":0},{"n":"corners","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"topFace","pt":$n[0].Boolean,"ps":2},{"n":"vertices","pt":$n[3].List$1(UnityEngine.Vector3),"ps":3},{"n":"triangles","pt":$n[3].List$1(System.Int32),"ps":4}],"sn":"AddHexCap","rt":$n[0].Void,"p":[$n[1].Vector3,System.Array.type(UnityEngine.Vector3),$n[0].Boolean,$n[3].List$1(UnityEngine.Vector3),$n[3].List$1(System.Int32)]},{"a":1,"n":"AddHexPrism","t":8,"pi":[{"n":"coordinate","pt":$n[1].Vector2Int,"ps":0},{"n":"cellView","pt":$n[5].HexCellView,"ps":1},{"n":"cells","pt":$n[3].Dictionary$2(UnityEngine.Vector2Int,_Game.Board.HexCellView),"ps":2},{"n":"vertices","pt":$n[3].List$1(UnityEngine.Vector3),"ps":3},{"n":"triangles","pt":$n[3].List$1(System.Int32),"ps":4}],"sn":"AddHexPrism","rt":$n[0].Void,"p":[$n[1].Vector2Int,$n[5].HexCellView,$n[3].Dictionary$2(UnityEngine.Vector2Int,_Game.Board.HexCellView),$n[3].List$1(UnityEngine.Vector3),$n[3].List$1(System.Int32)]},{"a":1,"n":"AddQuad","t":8,"pi":[{"n":"a","pt":$n[1].Vector3,"ps":0},{"n":"b","pt":$n[1].Vector3,"ps":1},{"n":"c","pt":$n[1].Vector3,"ps":2},{"n":"d","pt":$n[1].Vector3,"ps":3},{"n":"vertices","pt":$n[3].List$1(UnityEngine.Vector3),"ps":4},{"n":"triangles","pt":$n[3].List$1(System.Int32),"ps":5}],"sn":"AddQuad","rt":$n[0].Void,"p":[$n[1].Vector3,$n[1].Vector3,$n[1].Vector3,$n[1].Vector3,$n[3].List$1(UnityEngine.Vector3),$n[3].List$1(System.Int32)]},{"a":1,"n":"ApplyMaterialColor","t":8,"pi":[{"n":"material","pt":$n[1].Material,"ps":0},{"n":"color","pt":$n[1].Color,"ps":1}],"sn":"ApplyMaterialColor","rt":$n[0].Void,"p":[$n[1].Material,$n[1].Color]},{"a":2,"n":"Clear","t":8,"sn":"Clear","rt":$n[0].Void},{"a":1,"n":"CreateBorderSide","t":8,"pi":[{"n":"start","pt":$n[1].Vector3,"ps":0},{"n":"end","pt":$n[1].Vector3,"ps":1}],"sn":"CreateBorderSide","rt":$n[0].Void,"p":[$n[1].Vector3,$n[1].Vector3]},{"a":1,"n":"CreateLine","t":8,"pi":[{"n":"start","pt":$n[1].Vector3,"ps":0},{"n":"end","pt":$n[1].Vector3,"ps":1},{"n":"width","pt":$n[0].Single,"ps":2},{"n":"color","pt":$n[1].Color,"ps":3},{"n":"objectName","pt":$n[0].String,"ps":4}],"sn":"CreateLine","rt":$n[0].Void,"p":[$n[1].Vector3,$n[1].Vector3,$n[0].Single,$n[1].Color,$n[0].String]},{"a":1,"n":"CreateLineMaterial","t":8,"pi":[{"n":"color","pt":$n[1].Color,"ps":0}],"sn":"CreateLineMaterial","rt":$n[1].Material,"p":[$n[1].Color]},{"a":1,"n":"CreateMeshUnderlay","t":8,"pi":[{"n":"cells","pt":$n[3].Dictionary$2(UnityEngine.Vector2Int,_Game.Board.HexCellView),"ps":0}],"sn":"CreateMeshUnderlay","rt":$n[0].Void,"p":[$n[3].Dictionary$2(UnityEngine.Vector2Int,_Game.Board.HexCellView)]},{"a":1,"n":"EnsureLineParent","t":8,"sn":"EnsureLineParent","rt":$n[0].Void},{"a":1,"n":"FindLineShader","t":8,"sn":"FindLineShader","rt":$n[1].Shader},{"a":1,"n":"FindSideIndex","t":8,"pi":[{"n":"cellView","pt":$n[5].HexCellView,"ps":0},{"n":"neighbourCoordinate","pt":$n[1].Vector2Int,"ps":1}],"sn":"FindSideIndex","rt":$n[0].Int32,"p":[$n[5].HexCellView,$n[1].Vector2Int],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"FlattenXZ","is":true,"t":8,"pi":[{"n":"value","pt":$n[1].Vector3,"ps":0}],"sn":"FlattenXZ","rt":$n[1].Vector3,"p":[$n[1].Vector3]},{"a":1,"n":"Quantize","t":8,"pi":[{"n":"value","pt":$n[1].Vector3,"ps":0}],"sn":"Quantize","rt":$n[1].Vector3Int,"p":[$n[1].Vector3]},{"a":2,"n":"Rebuild","t":8,"pi":[{"n":"cells","pt":$n[3].Dictionary$2(UnityEngine.Vector2Int,_Game.Board.HexCellView),"ps":0}],"sn":"Rebuild","rt":$n[0].Void,"p":[$n[3].Dictionary$2(UnityEngine.Vector2Int,_Game.Board.HexCellView)]},{"a":1,"n":"SmoothNormalsByPosition","t":8,"pi":[{"n":"mesh","pt":$n[1].Mesh,"ps":0}],"sn":"SmoothNormalsByPosition","rt":$n[0].Void,"p":[$n[1].Mesh]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"borderColor","t":4,"rt":$n[1].Color,"sn":"borderColor"},{"a":1,"n":"generatedMesh","t":4,"rt":$n[1].Mesh,"sn":"generatedMesh"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"glowWidthMultiplier","t":4,"rt":$n[0].Single,"sn":"glowWidthMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"gridGenerator","t":4,"rt":$n[5].HexGridGenerator,"sn":"gridGenerator"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"lineParent","t":4,"rt":$n[1].Transform,"sn":"lineParent"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"linePrefab","t":4,"rt":$n[1].LineRenderer,"sn":"linePrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"lineWidth","t":4,"rt":$n[0].Single,"sn":"lineWidth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"meshBevelSize","t":4,"rt":$n[0].Single,"sn":"meshBevelSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"meshHeight","t":4,"rt":$n[0].Single,"sn":"meshHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"meshMaterial","t":4,"rt":$n[1].Material,"sn":"meshMaterial"},{"a":1,"n":"meshObject","t":4,"rt":$n[1].GameObject,"sn":"meshObject"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"meshScaleMultiplier","t":4,"rt":$n[0].Single,"sn":"meshScaleMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"meshSmoothNormals","t":4,"rt":$n[0].Boolean,"sn":"meshSmoothNormals","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"meshVerticalOffset","t":4,"rt":$n[0].Single,"sn":"meshVerticalOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"ownedMaterials","t":4,"rt":$n[3].List$1(UnityEngine.Material),"sn":"ownedMaterials","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"renderMode","t":4,"rt":$n[5].BoardOutline.OutlineRenderMode,"sn":"renderMode","box":function ($v) { return Bridge.box($v, _Game.Board.BoardOutline.OutlineRenderMode, System.Enum.toStringFn(_Game.Board.BoardOutline.OutlineRenderMode));}},{"a":1,"n":"segments","t":4,"rt":$n[3].List$1(UnityEngine.LineRenderer),"sn":"segments","ro":true},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"useGlow","t":4,"rt":$n[0].Boolean,"sn":"useGlow","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"verticalOffset","t":4,"rt":$n[0].Single,"sn":"verticalOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*_Game.Board.BoardOutline end.*/

    /*_Game.Board.BoardOutline+OutlineRenderMode start.*/
    $m("_Game.Board.BoardOutline.OutlineRenderMode", function () { return {"td":$n[5].BoardOutline,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"LineRenderer","is":true,"t":4,"rt":$n[5].BoardOutline.OutlineRenderMode,"sn":"LineRenderer","box":function ($v) { return Bridge.box($v, _Game.Board.BoardOutline.OutlineRenderMode, System.Enum.toStringFn(_Game.Board.BoardOutline.OutlineRenderMode));}},{"a":2,"n":"MeshUnderlay","is":true,"t":4,"rt":$n[5].BoardOutline.OutlineRenderMode,"sn":"MeshUnderlay","box":function ($v) { return Bridge.box($v, _Game.Board.BoardOutline.OutlineRenderMode, System.Enum.toStringFn(_Game.Board.BoardOutline.OutlineRenderMode));}}]}; }, $n);
    /*_Game.Board.BoardOutline+OutlineRenderMode end.*/

    /*_Game.Board.HexCell start.*/
    $m("_Game.Board.HexCell", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"n":".ctor","t":1,"p":[$n[1].Vector2Int],"pi":[{"n":"coordinate","pt":$n[1].Vector2Int,"ps":0}],"sn":"ctor"},{"a":2,"n":"IsEmpty","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsEmpty","t":8,"rt":$n[0].Boolean,"fg":"IsEmpty","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsEmpty"},{"a":2,"n":"coordinate","t":4,"rt":$n[1].Vector2Int,"sn":"coordinate"},{"a":2,"n":"stack","t":4,"rt":$n[6].HexStack,"sn":"stack"}]}; }, $n);
    /*_Game.Board.HexCell end.*/

    /*_Game.Board.HexCellHighlightSettings start.*/
    $m("_Game.Board.HexCellHighlightSettings", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"outlineLineWidth","t":4,"rt":$n[0].Single,"sn":"outlineLineWidth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"outlineMaterial","t":4,"rt":$n[1].Material,"sn":"outlineMaterial"},{"a":2,"n":"outlineRadiusMultiplier","t":4,"rt":$n[0].Single,"sn":"outlineRadiusMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"outlineVerticalOffset","t":4,"rt":$n[0].Single,"sn":"outlineVerticalOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"useMaterialTint","t":4,"rt":$n[0].Boolean,"sn":"useMaterialTint","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"useOutline","t":4,"rt":$n[0].Boolean,"sn":"useOutline","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"validColor","t":4,"rt":$n[1].Color,"sn":"validColor"}]}; }, $n);
    /*_Game.Board.HexCellHighlightSettings end.*/

    /*_Game.Board.HexCellView start.*/
    $m("_Game.Board.HexCellView", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ApplyMaterialColor","t":8,"pi":[{"n":"material","pt":$n[1].Material,"ps":0},{"n":"color","pt":$n[1].Color,"ps":1}],"sn":"ApplyMaterialColor","rt":$n[0].Void,"p":[$n[1].Material,$n[1].Color]},{"a":1,"n":"ApplyMaterialTint","t":8,"pi":[{"n":"color","pt":$n[1].Color,"ps":0}],"sn":"ApplyMaterialTint","rt":$n[0].Void,"p":[$n[1].Color]},{"a":1,"n":"CacheRenderers","t":8,"sn":"CacheRenderers","rt":$n[0].Void},{"a":2,"n":"ClearStackView","t":8,"sn":"ClearStackView","rt":$n[0].Void},{"a":2,"n":"ConfigureGeometry","t":8,"pi":[{"n":"radius","pt":$n[0].Single,"ps":0},{"n":"hexOrientation","pt":$n[5].HexGridGenerator.HexOrientation,"ps":1}],"sn":"ConfigureGeometry","rt":$n[0].Void,"p":[$n[0].Single,$n[5].HexGridGenerator.HexOrientation]},{"a":2,"n":"ConfigureHighlight","t":8,"pi":[{"n":"settings","pt":$n[5].HexCellHighlightSettings,"ps":0}],"sn":"ConfigureHighlight","rt":$n[0].Void,"p":[$n[5].HexCellHighlightSettings]},{"a":1,"n":"EnsureHighlightMaterial","t":8,"sn":"EnsureHighlightMaterial","rt":$n[0].Void},{"a":1,"n":"EnsureHighlightOutline","t":8,"sn":"EnsureHighlightOutline","rt":$n[0].Void},{"a":1,"n":"FindLineShader","t":8,"sn":"FindLineShader","rt":$n[1].Shader},{"a":2,"n":"GetCornerWorld","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"GetCornerWorld","rt":$n[1].Vector3,"p":[$n[0].Int32]},{"a":2,"n":"Initialize","t":8,"pi":[{"n":"cell","pt":$n[5].HexCell,"ps":0}],"sn":"Initialize","rt":$n[0].Void,"p":[$n[5].HexCell]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"RestoreMaterialColors","t":8,"sn":"RestoreMaterialColors","rt":$n[0].Void},{"a":2,"n":"SetHighlight","t":8,"pi":[{"n":"active","pt":$n[0].Boolean,"ps":0},{"n":"valid","pt":$n[0].Boolean,"ps":1}],"sn":"SetHighlight","rt":$n[0].Void,"p":[$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"SetSoundPlayer","t":8,"pi":[{"n":"soundPlayer","pt":$n[11].SoundPlayer,"ps":0}],"sn":"SetSoundPlayer","rt":$n[0].Void,"p":[$n[11].SoundPlayer]},{"a":2,"n":"SetStackView","t":8,"pi":[{"n":"stackView","pt":$n[6].HexStackView,"ps":0},{"n":"playDropSound","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"SetStackView","rt":$n[0].Void,"p":[$n[6].HexStackView,$n[0].Boolean]},{"a":1,"n":"UpdateHighlightGeometry","t":8,"sn":"UpdateHighlightGeometry","rt":$n[0].Void},{"a":2,"n":"Cell","t":16,"rt":$n[5].HexCell,"g":{"a":2,"n":"get_Cell","t":8,"rt":$n[5].HexCell,"fg":"Cell"},"s":{"a":1,"n":"set_Cell","t":8,"p":[$n[5].HexCell],"rt":$n[0].Void,"fs":"Cell"},"fn":"Cell"},{"a":2,"n":"StackView","t":16,"rt":$n[6].HexStackView,"g":{"a":2,"n":"get_StackView","t":8,"rt":$n[6].HexStackView,"fg":"StackView"},"s":{"a":1,"n":"set_StackView","t":8,"p":[$n[6].HexStackView],"rt":$n[0].Void,"fs":"StackView"},"fn":"StackView"},{"a":1,"n":"HighlightOutlineName","is":true,"t":4,"rt":$n[0].String,"sn":"HighlightOutlineName"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cornerRadius","t":4,"rt":$n[0].Single,"sn":"cornerRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"defaultColors","t":4,"rt":System.Array.type(UnityEngine.Color),"sn":"defaultColors"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"highlightLineWidth","t":4,"rt":$n[0].Single,"sn":"highlightLineWidth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"highlightMaterial","t":4,"rt":$n[1].Material,"sn":"highlightMaterial"},{"a":1,"n":"highlightOutline","t":4,"rt":$n[1].LineRenderer,"sn":"highlightOutline"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"highlightRadiusMultiplier","t":4,"rt":$n[0].Single,"sn":"highlightRadiusMultiplier","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"highlightVerticalOffset","t":4,"rt":$n[0].Single,"sn":"highlightVerticalOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"meshRenderers","t":4,"rt":System.Array.type(UnityEngine.MeshRenderer),"sn":"meshRenderers"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"orientation","t":4,"rt":$n[5].HexGridGenerator.HexOrientation,"sn":"orientation","box":function ($v) { return Bridge.box($v, _Game.Board.HexGridGenerator.HexOrientation, System.Enum.toStringFn(_Game.Board.HexGridGenerator.HexOrientation));}},{"a":1,"n":"runtimeHighlightMaterial","t":4,"rt":$n[1].Material,"sn":"runtimeHighlightMaterial"},{"a":1,"n":"soundPlayer","t":4,"rt":$n[11].SoundPlayer,"sn":"soundPlayer"},{"a":1,"n":"useMaterialTint","t":4,"rt":$n[0].Boolean,"sn":"useMaterialTint","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"useOutline","t":4,"rt":$n[0].Boolean,"sn":"useOutline","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"validColor","t":4,"rt":$n[1].Color,"sn":"validColor"},{"a":1,"backing":true,"n":"<Cell>k__BackingField","t":4,"rt":$n[5].HexCell,"sn":"Cell"},{"a":1,"backing":true,"n":"<StackView>k__BackingField","t":4,"rt":$n[6].HexStackView,"sn":"StackView"}]}; }, $n);
    /*_Game.Board.HexCellView end.*/

    /*_Game.Board.HexGridGenerator start.*/
    $m("_Game.Board.HexGridGenerator", function () { return {"nested":[$n[5].HexGridGenerator.BoardShape,$n[5].HexGridGenerator.HexOrientation],"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddCustomCoordinate","t":8,"pi":[{"n":"coordinate","pt":$n[1].Vector2Int,"ps":0}],"sn":"AddCustomCoordinate","rt":$n[0].Void,"p":[$n[1].Vector2Int]},{"a":1,"n":"CompareCoordinates","is":true,"t":8,"pi":[{"n":"a","pt":$n[1].Vector2Int,"ps":0},{"n":"b","pt":$n[1].Vector2Int,"ps":1}],"sn":"CompareCoordinates","rt":$n[0].Int32,"p":[$n[1].Vector2Int,$n[1].Vector2Int],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"ContainsCustomCoordinate","t":8,"pi":[{"n":"coordinate","pt":$n[1].Vector2Int,"ps":0}],"sn":"ContainsCustomCoordinate","rt":$n[0].Boolean,"p":[$n[1].Vector2Int],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"CoordinateToWorld","t":8,"pi":[{"n":"coordinate","pt":$n[1].Vector2Int,"ps":0}],"sn":"CoordinateToWorld","rt":$n[1].Vector3,"p":[$n[1].Vector2Int]},{"a":1,"n":"FlatTopAxialToWorld","t":8,"pi":[{"n":"coordinate","pt":$n[1].Vector2Int,"ps":0}],"sn":"FlatTopAxialToWorld","rt":$n[1].Vector3,"p":[$n[1].Vector2Int]},{"a":1,"n":"FlatTopOffsetToWorld","t":8,"pi":[{"n":"coordinate","pt":$n[1].Vector2Int,"ps":0}],"sn":"FlatTopOffsetToWorld","rt":$n[1].Vector3,"p":[$n[1].Vector2Int]},{"a":2,"n":"GenerateCoordinates","t":8,"sn":"GenerateCoordinates","rt":$n[3].List$1(UnityEngine.Vector2Int)},{"a":1,"n":"GenerateCustomCoordinates","t":8,"sn":"GenerateCustomCoordinates","rt":$n[3].List$1(UnityEngine.Vector2Int)},{"a":1,"n":"GenerateHexagonCoordinates","t":8,"sn":"GenerateHexagonCoordinates","rt":$n[3].List$1(UnityEngine.Vector2Int)},{"a":1,"n":"GenerateSquareCoordinates","t":8,"sn":"GenerateSquareCoordinates","rt":$n[3].List$1(UnityEngine.Vector2Int)},{"a":1,"n":"GetAxialNeighbours","is":true,"t":8,"pi":[{"n":"coordinate","pt":$n[1].Vector2Int,"ps":0}],"sn":"GetAxialNeighbours","rt":$n[3].List$1(UnityEngine.Vector2Int),"p":[$n[1].Vector2Int]},{"a":1,"n":"GetFlatTopOffsetNeighbours","is":true,"t":8,"pi":[{"n":"coordinate","pt":$n[1].Vector2Int,"ps":0}],"sn":"GetFlatTopOffsetNeighbours","rt":$n[3].List$1(UnityEngine.Vector2Int),"p":[$n[1].Vector2Int]},{"a":1,"n":"GetLayoutShape","t":8,"sn":"GetLayoutShape","rt":$n[5].HexGridGenerator.BoardShape,"box":function ($v) { return Bridge.box($v, _Game.Board.HexGridGenerator.BoardShape, System.Enum.toStringFn(_Game.Board.HexGridGenerator.BoardShape));}},{"a":2,"n":"GetNeighbourCoordinates","t":8,"pi":[{"n":"coordinate","pt":$n[1].Vector2Int,"ps":0}],"sn":"GetNeighbourCoordinates","rt":$n[3].List$1(UnityEngine.Vector2Int),"p":[$n[1].Vector2Int]},{"a":1,"n":"GetPointyTopOffsetNeighbours","is":true,"t":8,"pi":[{"n":"coordinate","pt":$n[1].Vector2Int,"ps":0}],"sn":"GetPointyTopOffsetNeighbours","rt":$n[3].List$1(UnityEngine.Vector2Int),"p":[$n[1].Vector2Int]},{"a":1,"n":"OffsetNeighbours","is":true,"t":8,"pi":[{"n":"coordinate","pt":$n[1].Vector2Int,"ps":0},{"n":"offsets","pt":System.Array.type(UnityEngine.Vector2Int),"ps":1}],"sn":"OffsetNeighbours","rt":$n[3].List$1(UnityEngine.Vector2Int),"p":[$n[1].Vector2Int,System.Array.type(UnityEngine.Vector2Int)]},{"a":1,"n":"OnValidate","t":8,"sn":"OnValidate","rt":$n[0].Void},{"a":1,"n":"PointyTopAxialToWorld","t":8,"pi":[{"n":"coordinate","pt":$n[1].Vector2Int,"ps":0}],"sn":"PointyTopAxialToWorld","rt":$n[1].Vector3,"p":[$n[1].Vector2Int]},{"a":1,"n":"PointyTopOffsetToWorld","t":8,"pi":[{"n":"coordinate","pt":$n[1].Vector2Int,"ps":0}],"sn":"PointyTopOffsetToWorld","rt":$n[1].Vector3,"p":[$n[1].Vector2Int]},{"a":1,"n":"PositiveModulo","is":true,"t":8,"pi":[{"n":"value","pt":$n[0].Int32,"ps":0},{"n":"modulo","pt":$n[0].Int32,"ps":1}],"sn":"PositiveModulo","rt":$n[0].Int32,"p":[$n[0].Int32,$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"RemoveCustomCoordinate","t":8,"pi":[{"n":"coordinate","pt":$n[1].Vector2Int,"ps":0}],"sn":"RemoveCustomCoordinate","rt":$n[0].Void,"p":[$n[1].Vector2Int]},{"a":2,"n":"SetCustomCoordinates","t":8,"pi":[{"n":"coordinates","pt":$n[3].IEnumerable$1(UnityEngine.Vector2Int),"ps":0}],"sn":"SetCustomCoordinates","rt":$n[0].Void,"p":[$n[3].IEnumerable$1(UnityEngine.Vector2Int)]},{"a":2,"n":"CellSize","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_CellSize","t":8,"rt":$n[0].Single,"fg":"CellSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_CellSize","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"CellSize"},"fn":"CellSize"},{"a":2,"n":"CustomBaseShape","t":16,"rt":$n[5].HexGridGenerator.BoardShape,"g":{"a":2,"n":"get_CustomBaseShape","t":8,"rt":$n[5].HexGridGenerator.BoardShape,"fg":"CustomBaseShape","box":function ($v) { return Bridge.box($v, _Game.Board.HexGridGenerator.BoardShape, System.Enum.toStringFn(_Game.Board.HexGridGenerator.BoardShape));}},"s":{"a":2,"n":"set_CustomBaseShape","t":8,"p":[$n[5].HexGridGenerator.BoardShape],"rt":$n[0].Void,"fs":"CustomBaseShape"},"fn":"CustomBaseShape"},{"a":2,"n":"CustomCoordinates","t":16,"rt":$n[3].IReadOnlyList$1(UnityEngine.Vector2Int),"g":{"a":2,"n":"get_CustomCoordinates","t":8,"rt":$n[3].IReadOnlyList$1(UnityEngine.Vector2Int),"fg":"CustomCoordinates"},"fn":"CustomCoordinates"},{"a":2,"n":"Orientation","t":16,"rt":$n[5].HexGridGenerator.HexOrientation,"g":{"a":2,"n":"get_Orientation","t":8,"rt":$n[5].HexGridGenerator.HexOrientation,"fg":"Orientation","box":function ($v) { return Bridge.box($v, _Game.Board.HexGridGenerator.HexOrientation, System.Enum.toStringFn(_Game.Board.HexGridGenerator.HexOrientation));}},"s":{"a":2,"n":"set_Orientation","t":8,"p":[$n[5].HexGridGenerator.HexOrientation],"rt":$n[0].Void,"fs":"Orientation"},"fn":"Orientation"},{"a":2,"n":"Radius","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Radius","t":8,"rt":$n[0].Int32,"fg":"Radius","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_Radius","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"Radius"},"fn":"Radius"},{"a":2,"n":"Shape","t":16,"rt":$n[5].HexGridGenerator.BoardShape,"g":{"a":2,"n":"get_Shape","t":8,"rt":$n[5].HexGridGenerator.BoardShape,"fg":"Shape","box":function ($v) { return Bridge.box($v, _Game.Board.HexGridGenerator.BoardShape, System.Enum.toStringFn(_Game.Board.HexGridGenerator.BoardShape));}},"s":{"a":2,"n":"set_Shape","t":8,"p":[$n[5].HexGridGenerator.BoardShape],"rt":$n[0].Void,"fs":"Shape"},"fn":"Shape"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"boardShape","t":4,"rt":$n[5].HexGridGenerator.BoardShape,"sn":"boardShape","box":function ($v) { return Bridge.box($v, _Game.Board.HexGridGenerator.BoardShape, System.Enum.toStringFn(_Game.Board.HexGridGenerator.BoardShape));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cellSize","t":4,"rt":$n[0].Single,"sn":"cellSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"customBaseShape","t":4,"rt":$n[5].HexGridGenerator.BoardShape,"sn":"customBaseShape","box":function ($v) { return Bridge.box($v, _Game.Board.HexGridGenerator.BoardShape, System.Enum.toStringFn(_Game.Board.HexGridGenerator.BoardShape));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"customCoordinates","t":4,"rt":$n[3].List$1(UnityEngine.Vector2Int),"sn":"customCoordinates"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"orientation","t":4,"rt":$n[5].HexGridGenerator.HexOrientation,"sn":"orientation","box":function ($v) { return Bridge.box($v, _Game.Board.HexGridGenerator.HexOrientation, System.Enum.toStringFn(_Game.Board.HexGridGenerator.HexOrientation));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"radius","t":4,"rt":$n[0].Int32,"sn":"radius","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*_Game.Board.HexGridGenerator end.*/

    /*_Game.Board.HexGridGenerator+BoardShape start.*/
    $m("_Game.Board.HexGridGenerator.BoardShape", function () { return {"td":$n[5].HexGridGenerator,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Custom","is":true,"t":4,"rt":$n[5].HexGridGenerator.BoardShape,"sn":"Custom","box":function ($v) { return Bridge.box($v, _Game.Board.HexGridGenerator.BoardShape, System.Enum.toStringFn(_Game.Board.HexGridGenerator.BoardShape));}},{"a":2,"n":"Hexagon","is":true,"t":4,"rt":$n[5].HexGridGenerator.BoardShape,"sn":"Hexagon","box":function ($v) { return Bridge.box($v, _Game.Board.HexGridGenerator.BoardShape, System.Enum.toStringFn(_Game.Board.HexGridGenerator.BoardShape));}},{"a":2,"n":"Square","is":true,"t":4,"rt":$n[5].HexGridGenerator.BoardShape,"sn":"Square","box":function ($v) { return Bridge.box($v, _Game.Board.HexGridGenerator.BoardShape, System.Enum.toStringFn(_Game.Board.HexGridGenerator.BoardShape));}}]}; }, $n);
    /*_Game.Board.HexGridGenerator+BoardShape end.*/

    /*_Game.Board.HexGridGenerator+HexOrientation start.*/
    $m("_Game.Board.HexGridGenerator.HexOrientation", function () { return {"td":$n[5].HexGridGenerator,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"FlatTop","is":true,"t":4,"rt":$n[5].HexGridGenerator.HexOrientation,"sn":"FlatTop","box":function ($v) { return Bridge.box($v, _Game.Board.HexGridGenerator.HexOrientation, System.Enum.toStringFn(_Game.Board.HexGridGenerator.HexOrientation));}},{"a":2,"n":"PointyTop","is":true,"t":4,"rt":$n[5].HexGridGenerator.HexOrientation,"sn":"PointyTop","box":function ($v) { return Bridge.box($v, _Game.Board.HexGridGenerator.HexOrientation, System.Enum.toStringFn(_Game.Board.HexGridGenerator.HexOrientation));}}]}; }, $n);
    /*_Game.Board.HexGridGenerator+HexOrientation end.*/

    /*_Game.Audio.SoundPlayer start.*/
    $m("_Game.Audio.SoundPlayer", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.AudioSource)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"EnsureAudioSource","t":8,"sn":"EnsureAudioSource","rt":$n[0].Void},{"a":2,"n":"Initialize","t":8,"pi":[{"n":"drag","pt":$n[7].DragController,"ps":0}],"sn":"Initialize","rt":$n[0].Void,"p":[$n[7].DragController]},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"OnDragStarted","t":8,"pi":[{"n":"stackView","pt":$n[6].HexStackView,"ps":0}],"sn":"OnDragStarted","rt":$n[0].Void,"p":[$n[6].HexStackView]},{"a":1,"n":"Play","t":8,"pi":[{"n":"clip","pt":$n[1].AudioClip,"ps":0},{"n":"volume","pt":$n[0].Single,"ps":1}],"sn":"Play","rt":$n[0].Void,"p":[$n[1].AudioClip,$n[0].Single]},{"a":2,"n":"PlayAllElementsDisappearComplete","t":8,"sn":"PlayAllElementsDisappearComplete","rt":$n[0].Void},{"a":2,"n":"PlayElementDisappear","t":8,"sn":"PlayElementDisappear","rt":$n[0].Void},{"a":2,"n":"PlayElementFlyToStack","t":8,"sn":"PlayElementFlyToStack","rt":$n[0].Void},{"a":2,"n":"PlayStackDrop","t":8,"sn":"PlayStackDrop","rt":$n[0].Void},{"a":2,"n":"PlayStackPickup","t":8,"sn":"PlayStackPickup","rt":$n[0].Void},{"a":1,"n":"UnsubscribeFromDrag","t":8,"sn":"UnsubscribeFromDrag","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"allElementsDisappearCompleteClip","t":4,"rt":$n[1].AudioClip,"sn":"allElementsDisappearCompleteClip"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.RangeAttribute(0.0, 1.0)],"a":1,"n":"allElementsDisappearCompleteVolume","t":4,"rt":$n[0].Single,"sn":"allElementsDisappearCompleteVolume","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"audioSource","t":4,"rt":$n[1].AudioSource,"sn":"audioSource"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"elementDisappearClip","t":4,"rt":$n[1].AudioClip,"sn":"elementDisappearClip"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.RangeAttribute(0.0, 1.0)],"a":1,"n":"elementDisappearVolume","t":4,"rt":$n[0].Single,"sn":"elementDisappearVolume","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"elementFlyToStackClip","t":4,"rt":$n[1].AudioClip,"sn":"elementFlyToStackClip"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.RangeAttribute(0.0, 1.0)],"a":1,"n":"elementFlyToStackVolume","t":4,"rt":$n[0].Single,"sn":"elementFlyToStackVolume","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Volume"),new UnityEngine.SerializeFieldAttribute(),new UnityEngine.RangeAttribute(0.0, 1.0)],"a":1,"n":"masterVolume","t":4,"rt":$n[0].Single,"sn":"masterVolume","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"stackDropClip","t":4,"rt":$n[1].AudioClip,"sn":"stackDropClip"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.RangeAttribute(0.0, 1.0)],"a":1,"n":"stackDropVolume","t":4,"rt":$n[0].Single,"sn":"stackDropVolume","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HeaderAttribute("Clips"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"stackPickupClip","t":4,"rt":$n[1].AudioClip,"sn":"stackPickupClip"},{"at":[new UnityEngine.SerializeFieldAttribute(),new UnityEngine.RangeAttribute(0.0, 1.0)],"a":1,"n":"stackPickupVolume","t":4,"rt":$n[0].Single,"sn":"stackPickupVolume","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"subscribedDrag","t":4,"rt":$n[7].DragController,"sn":"subscribedDrag"}]}; }, $n);
    /*_Game.Audio.SoundPlayer end.*/

    }});
