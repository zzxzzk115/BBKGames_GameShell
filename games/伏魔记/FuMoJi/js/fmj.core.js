if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'fmj.core'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'fmj.core'.");
}
this['fmj.core'] = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var L40 = Kotlin.Long.fromInt(40);
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var ensureNotNull = Kotlin.ensureNotNull;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var toIntArray = Kotlin.kotlin.collections.toIntArray_fx3nzu$;
  var zip = Kotlin.kotlin.collections.zip_mgkctd$;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var first = Kotlin.kotlin.sequences.first_veqyi0$;
  var zip_0 = Kotlin.kotlin.collections.zip_r9t3v7$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var numberToInt = Kotlin.numberToInt;
  var CoroutineImpl = Kotlin.kotlin.coroutines.experimental.CoroutineImpl;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.experimental.intrinsics.COROUTINE_SUSPENDED;
  var buildSequence = Kotlin.kotlin.coroutines.experimental.buildSequence_of7nec$;
  var throwCCE = Kotlin.throwCCE;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var L0 = Kotlin.Long.ZERO;
  var throwUPAE = Kotlin.throwUPAE;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var downTo = Kotlin.kotlin.ranges.downTo_dqglrj$;
  var get_indices = Kotlin.kotlin.collections.get_indices_gzk92b$;
  var reversed = Kotlin.kotlin.ranges.reversed_zf1xzc$;
  var get_indices_0 = Kotlin.kotlin.collections.get_indices_tmsbgo$;
  var arrayListOf = Kotlin.kotlin.collections.arrayListOf_i5x0yv$;
  var removeAll = Kotlin.kotlin.collections.removeAll_qafx1e$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var first_0 = Kotlin.kotlin.collections.first_2p1efm$;
  var sliceArray = Kotlin.kotlin.collections.sliceArray_8r7b3e$;
  var filterNotNull = Kotlin.kotlin.collections.filterNotNull_emfgvx$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_us0mfu$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var Error_0 = Kotlin.kotlin.Error;
  var equals = Kotlin.equals;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var L1000 = Kotlin.Long.fromInt(1000);
  var toByte = Kotlin.toByte;
  var max = Kotlin.kotlin.collections.max_exjks8$;
  var toMutableList_0 = Kotlin.kotlin.collections.toMutableList_964n91$;
  var toByteArray = Kotlin.kotlin.collections.toByteArray_kdx1v$;
  var toString = Kotlin.toString;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var get_indices_1 = Kotlin.kotlin.text.get_indices_gw00vp$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_bwtc7$;
  var toShort = Kotlin.toShort;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var slice = Kotlin.kotlin.collections.slice_6bjbi1$;
  var round = Kotlin.kotlin.math.round_14dthe$;
  var filterNotNull_0 = Kotlin.kotlin.sequences.filterNotNull_q2m9h7$;
  var toMutableList_1 = Kotlin.kotlin.sequences.toMutableList_veqyi0$;
  var toList = Kotlin.kotlin.sequences.toList_veqyi0$;
  var filterNotNull_1 = Kotlin.kotlin.collections.filterNotNull_m3lr2h$;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var get_indices_2 = Kotlin.kotlin.collections.get_indices_m7z4lg$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var L400 = Kotlin.Long.fromInt(400);
  var L300 = Kotlin.Long.fromInt(300);
  var NotImplementedError = Kotlin.kotlin.NotImplementedError;
  var L50 = Kotlin.Long.fromInt(50);
  var L20 = Kotlin.Long.fromInt(20);
  var split = Kotlin.kotlin.text.split_o64adg$;
  var getCallableRef = Kotlin.getCallableRef;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var sliceArray_0 = Kotlin.kotlin.collections.sliceArray_dww5cs$;
  var toTypedArray = Kotlin.kotlin.collections.toTypedArray_964n91$;
  var indexOf = Kotlin.kotlin.collections.indexOf_jlnu8a$;
  var slice_0 = Kotlin.kotlin.collections.slice_dww5cs$;
  var toByteArray_0 = Kotlin.kotlin.collections.toByteArray_vn5r1x$;
  var MutableList = Kotlin.kotlin.collections.MutableList;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var joinToString = Kotlin.kotlin.collections.joinToString_s78119$;
  var toList_0 = Kotlin.kotlin.collections.toList_964n91$;
  ScreenViewType.prototype = Object.create(Enum.prototype);
  ScreenViewType.prototype.constructor = ScreenViewType;
  Character$State.prototype = Object.create(Enum.prototype);
  Character$State.prototype.constructor = Character$State;
  Character.prototype = Object.create(ResBase.prototype);
  Character.prototype.constructor = Character;
  Direction.prototype = Object.create(Enum.prototype);
  Direction.prototype.constructor = Direction;
  FightingCharacter.prototype = Object.create(Character.prototype);
  FightingCharacter.prototype.constructor = FightingCharacter;
  Monster.prototype = Object.create(FightingCharacter.prototype);
  Monster.prototype.constructor = Monster;
  NPC.prototype = Object.create(Character.prototype);
  NPC.prototype.constructor = NPC;
  Player.prototype = Object.create(FightingCharacter.prototype);
  Player.prototype.constructor = Player;
  ResLevelupChain.prototype = Object.create(ResBase.prototype);
  ResLevelupChain.prototype.constructor = ResLevelupChain;
  SceneObj.prototype = Object.create(NPC.prototype);
  SceneObj.prototype.constructor = SceneObj;
  Combat$CombatState.prototype = Object.create(Enum.prototype);
  Combat$CombatState.prototype.constructor = Combat$CombatState;
  ActionCoopMagic.prototype = Object.create(Action.prototype);
  ActionCoopMagic.prototype.constructor = ActionCoopMagic;
  ActionSingleTarget.prototype = Object.create(Action.prototype);
  ActionSingleTarget.prototype.constructor = ActionSingleTarget;
  ActionDefend.prototype = Object.create(ActionSingleTarget.prototype);
  ActionDefend.prototype.constructor = ActionDefend;
  ActionFlee.prototype = Object.create(Action.prototype);
  ActionFlee.prototype.constructor = ActionFlee;
  ActionMultiTarget.prototype = Object.create(Action.prototype);
  ActionMultiTarget.prototype.constructor = ActionMultiTarget;
  ActionMagicAttackAll.prototype = Object.create(ActionMultiTarget.prototype);
  ActionMagicAttackAll.prototype.constructor = ActionMagicAttackAll;
  ActionMagicAttackOne.prototype = Object.create(ActionSingleTarget.prototype);
  ActionMagicAttackOne.prototype.constructor = ActionMagicAttackOne;
  ActionMagicHelpAll.prototype = Object.create(ActionMultiTarget.prototype);
  ActionMagicHelpAll.prototype.constructor = ActionMagicHelpAll;
  ActionMagicHelpOne.prototype = Object.create(ActionSingleTarget.prototype);
  ActionMagicHelpOne.prototype.constructor = ActionMagicHelpOne;
  ActionPhysicalAttackAll.prototype = Object.create(ActionMultiTarget.prototype);
  ActionPhysicalAttackAll.prototype.constructor = ActionPhysicalAttackAll;
  ActionPhysicalAttackOne.prototype = Object.create(ActionSingleTarget.prototype);
  ActionPhysicalAttackOne.prototype.constructor = ActionPhysicalAttackOne;
  ActionSelfHurt$State.prototype = Object.create(Enum.prototype);
  ActionSelfHurt$State.prototype.constructor = ActionSelfHurt$State;
  ActionSelfHurt.prototype = Object.create(ActionSingleTarget.prototype);
  ActionSelfHurt.prototype.constructor = ActionSelfHurt;
  ActionNop.prototype = Object.create(ActionSingleTarget.prototype);
  ActionNop.prototype.constructor = ActionNop;
  ActionThrowItemAll.prototype = Object.create(ActionMultiTarget.prototype);
  ActionThrowItemAll.prototype.constructor = ActionThrowItemAll;
  ActionThrowItemOne.prototype = Object.create(ActionSingleTarget.prototype);
  ActionThrowItemOne.prototype.constructor = ActionThrowItemOne;
  ActionUseItemAll.prototype = Object.create(ActionMultiTarget.prototype);
  ActionUseItemAll.prototype.constructor = ActionUseItemAll;
  ActionUseItemOne.prototype = Object.create(ActionSingleTarget.prototype);
  ActionUseItemOne.prototype.constructor = ActionUseItemOne;
  AwardAndPunishPostAction.prototype = Object.create(PostAction.prototype);
  AwardAndPunishPostAction.prototype.constructor = AwardAndPunishPostAction;
  ScreenGoodsList$Mode.prototype = Object.create(Enum.prototype);
  ScreenGoodsList$Mode.prototype.constructor = ScreenGoodsList$Mode;
  BaseGoods.prototype = Object.create(ResBase.prototype);
  BaseGoods.prototype.constructor = BaseGoods;
  GoodsEquipment.prototype = Object.create(BaseGoods.prototype);
  GoodsEquipment.prototype.constructor = GoodsEquipment;
  GoodsDecorations.prototype = Object.create(GoodsEquipment.prototype);
  GoodsDecorations.prototype.constructor = GoodsDecorations;
  GoodsDrama.prototype = Object.create(BaseGoods.prototype);
  GoodsDrama.prototype.constructor = GoodsDrama;
  GoodsHiddenWeapon.prototype = Object.create(BaseGoods.prototype);
  GoodsHiddenWeapon.prototype.constructor = GoodsHiddenWeapon;
  GoodsMedicine.prototype = Object.create(BaseGoods.prototype);
  GoodsMedicine.prototype.constructor = GoodsMedicine;
  GoodsMedicineChg4Ever.prototype = Object.create(BaseGoods.prototype);
  GoodsMedicineChg4Ever.prototype.constructor = GoodsMedicineChg4Ever;
  GoodsMedicineLife.prototype = Object.create(BaseGoods.prototype);
  GoodsMedicineLife.prototype.constructor = GoodsMedicineLife;
  GoodsStimulant.prototype = Object.create(BaseGoods.prototype);
  GoodsStimulant.prototype.constructor = GoodsStimulant;
  GoodsTudun.prototype = Object.create(BaseGoods.prototype);
  GoodsTudun.prototype.constructor = GoodsTudun;
  GoodsWeapon.prototype = Object.create(GoodsEquipment.prototype);
  GoodsWeapon.prototype.constructor = GoodsWeapon;
  DatLib$ResType.prototype = Object.create(Enum.prototype);
  DatLib$ResType.prototype.constructor = DatLib$ResType;
  ResGut.prototype = Object.create(ResBase.prototype);
  ResGut.prototype.constructor = ResGut;
  ResImage.prototype = Object.create(ResBase.prototype);
  ResImage.prototype.constructor = ResImage;
  ResMap.prototype = Object.create(ResBase.prototype);
  ResMap.prototype.constructor = ResMap;
  ResSrs.prototype = Object.create(ResBase.prototype);
  ResSrs.prototype.constructor = ResSrs;
  BaseMagic.prototype = Object.create(ResBase.prototype);
  BaseMagic.prototype.constructor = BaseMagic;
  MagicAttack.prototype = Object.create(BaseMagic.prototype);
  MagicAttack.prototype.constructor = MagicAttack;
  MagicAuxiliary.prototype = Object.create(BaseMagic.prototype);
  MagicAuxiliary.prototype.constructor = MagicAuxiliary;
  MagicEnhance.prototype = Object.create(BaseMagic.prototype);
  MagicEnhance.prototype.constructor = MagicEnhance;
  MagicRestore.prototype = Object.create(BaseMagic.prototype);
  MagicRestore.prototype.constructor = MagicRestore;
  MagicSpecial.prototype = Object.create(BaseMagic.prototype);
  MagicSpecial.prototype.constructor = MagicSpecial;
  ResMagicChain.prototype = Object.create(ResBase.prototype);
  ResMagicChain.prototype.constructor = ResMagicChain;
  ScriptVM_init$cmd_loadmap$lambda$ObjectLiteral.prototype = Object.create(OperateDrawOnce.prototype);
  ScriptVM_init$cmd_loadmap$lambda$ObjectLiteral.prototype.constructor = ScriptVM_init$cmd_loadmap$lambda$ObjectLiteral;
  ScriptVM_init$cmd_createactor$lambda$ObjectLiteral.prototype = Object.create(OperateDrawOnce.prototype);
  ScriptVM_init$cmd_createactor$lambda$ObjectLiteral.prototype.constructor = ScriptVM_init$cmd_createactor$lambda$ObjectLiteral;
  ScriptVM_init$cmd_facetoface$lambda$ObjectLiteral.prototype = Object.create(OperateDrawOnce.prototype);
  ScriptVM_init$cmd_facetoface$lambda$ObjectLiteral.prototype.constructor = ScriptVM_init$cmd_facetoface$lambda$ObjectLiteral;
  ScriptVM_init$cmd_showscreen$lambda$ObjectLiteral.prototype = Object.create(OperateDrawOnce.prototype);
  ScriptVM_init$cmd_showscreen$lambda$ObjectLiteral.prototype.constructor = ScriptVM_init$cmd_showscreen$lambda$ObjectLiteral;
  ScriptVM_init$cmd_menu$lambda$ObjectLiteral.prototype = Object.create(OperateAdapter.prototype);
  ScriptVM_init$cmd_menu$lambda$ObjectLiteral.prototype.constructor = ScriptVM_init$cmd_menu$lambda$ObjectLiteral;
  ScriptVM_init$cmd_gamesave$lambda$ObjectLiteral.prototype = Object.create(OperateAdapter.prototype);
  ScriptVM_init$cmd_gamesave$lambda$ObjectLiteral.prototype.constructor = ScriptVM_init$cmd_gamesave$lambda$ObjectLiteral;
  ScreenSaveLoadGame$Operate.prototype = Object.create(Enum.prototype);
  ScreenSaveLoadGame$Operate.prototype.constructor = ScreenSaveLoadGame$Operate;
  Paint$Style.prototype = Object.create(Enum.prototype);
  Paint$Style.prototype.constructor = Paint$Style;
  function MainGame() {
    this.version = '006';
    this.canvas_0 = new Canvas(Bitmap_init(Global_getInstance().SCREEN_WIDTH, Global_getInstance().SCREEN_HEIGHT));
    this.screenStack_0 = new ScreenStack(this);
    this.vm_hiku1h$_0 = new ScriptVM(this);
    this.game_153mds$_0 = this;
    this.mainScene_1hx16p$_0 = null;
    this.playerList_ghq937$_0 = ArrayList_init();
  }
  Object.defineProperty(MainGame.prototype, 'vm', {
    get: function () {
      return this.vm_hiku1h$_0;
    }
  });
  Object.defineProperty(MainGame.prototype, 'parent', {
    get: function () {
      return this.screenStack_0;
    }
  });
  Object.defineProperty(MainGame.prototype, 'game', {
    get: function () {
      return this.game_153mds$_0;
    }
  });
  Object.defineProperty(MainGame.prototype, 'mainScene', {
    get: function () {
      return this.mainScene_1hx16p$_0;
    },
    set: function (mainScene) {
      this.mainScene_1hx16p$_0 = mainScene;
    }
  });
  Object.defineProperty(MainGame.prototype, 'playerList', {
    get: function () {
      return this.playerList_ghq937$_0;
    }
  });
  Object.defineProperty(MainGame.prototype, 'bag', {
    get: function () {
      return Player$Companion_getInstance().sGoodsList;
    }
  });
  Object.defineProperty(MainGame.prototype, 'combat', {
    get: function () {
      return Combat$Companion_getInstance();
    }
  });
  MainGame.prototype.start = function () {
    this.listenUIEvents_0();
    var scr = new ScreenAnimation(this, 247);
    this.screenStack_0.pushScreen_2o7n0o$(scr);
  };
  MainGame.prototype.draw = function () {
    this.screenStack_0.draw_9in0vv$(this.canvas_0);
  };
  MainGame.prototype.update_s8cxhz$ = function (delta) {
    this.screenStack_0.update_s8cxhz$(delta);
  };
  MainGame.prototype.keyDown_0 = function (key) {
    this.screenStack_0.keyDown_za3lpa$(key);
  };
  MainGame.prototype.keyUp_0 = function (key) {
    this.screenStack_0.keyUp_za3lpa$(key);
  };
  MainGame.prototype.changeScreen_gacx6e$ = function (screenType) {
    var tmp$;
    switch (screenType.name) {
      case 'SCREEN_DEV_LOGO':
        tmp$ = new ScreenAnimation(this, 247);
        break;
      case 'SCREEN_GAME_LOGO':
        tmp$ = new ScreenAnimation(this, 248);
        break;
      case 'SCREEN_MENU':
        tmp$ = new ScreenMenu(this);
        break;
      case 'SCREEN_MAIN_GAME':
        this.mainScene = new ScreenMainGame(this, this.vm);
        tmp$ = this.mainScene;
        break;
      case 'SCREEN_GAME_FAIL':
        tmp$ = new ScreenAnimation(this, 249);
        break;
      case 'SCREEN_SAVE_GAME':
        tmp$ = new ScreenSaveLoadGame(this, ScreenSaveLoadGame$Operate$SAVE_getInstance());
        break;
      case 'SCREEN_LOAD_GAME':
        tmp$ = new ScreenSaveLoadGame(this, ScreenSaveLoadGame$Operate$LOAD_getInstance());
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    var scr = tmp$;
    this.screenStack_0.changeScreen_2o7n0o$(scr);
  };
  function MainGame$listenUIEvents$lambda(this$MainGame) {
    return function (it) {
      this$MainGame.keyDown_0(it);
      return Unit;
    };
  }
  function MainGame$listenUIEvents$lambda_0(this$MainGame) {
    return function (it) {
      this$MainGame.keyUp_0(it);
      return Unit;
    };
  }
  function MainGame$listenUIEvents$lambda_1(closure$delta, this$MainGame) {
    return function () {
      this$MainGame.update_s8cxhz$(closure$delta);
      this$MainGame.draw();
      sysDrawScreen(this$MainGame.canvas_0.buffer, this$MainGame.canvas_0.width, this$MainGame.canvas_0.height);
      return Unit;
    };
  }
  MainGame.prototype.listenUIEvents_0 = function () {
    var delta = L40;
    sysAddKeyDownListener(MainGame$listenUIEvents$lambda(this));
    sysAddKeyUpListener(MainGame$listenUIEvents$lambda_0(this));
    sysSetInterval(40, MainGame$listenUIEvents$lambda_1(delta, this));
  };
  MainGame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MainGame',
    interfaces: [Game]
  };
  function MainGame_init($this) {
    $this = $this || Object.create(MainGame.prototype);
    MainGame.call($this);
    $this.mainScene = new ScreenMainGame($this, $this.vm);
    return $this;
  }
  var game;
  function main(args) {
    game.start();
  }
  function Global() {
    Global_instance = this;
    this.COLOR_WHITE = Color$Companion_getInstance().WHITE;
    this.COLOR_BLACK = Color$Companion_getInstance().BLACK;
    this.COLOR_TRANSP = Color$Companion_getInstance().TRANSP;
    this.fgColor = Color$Companion_getInstance().BLACK;
    this.bgColor = Color$Companion_getInstance().WHITE;
    this.SCREEN_WIDTH = 160;
    this.SCREEN_HEIGHT = 96;
    this.MAP_LEFT_OFFSET = 8;
    this.KEY_UP = 1;
    this.KEY_DOWN = 2;
    this.KEY_LEFT = 3;
    this.KEY_RIGHT = 4;
    this.KEY_PAGEUP = 5;
    this.KEY_PAGEDOWN = 6;
    this.KEY_ENTER = 7;
    this.KEY_CANCEL = 8;
    this.disableSave = false;
    this.delta = 40;
  }
  Global.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Global',
    interfaces: []
  };
  var Global_instance = null;
  function Global_getInstance() {
    if (Global_instance === null) {
      new Global();
    }
    return Global_instance;
  }
  function ScreenViewType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ScreenViewType_initFields() {
    ScreenViewType_initFields = function () {
    };
    ScreenViewType$SCREEN_DEV_LOGO_instance = new ScreenViewType('SCREEN_DEV_LOGO', 0);
    ScreenViewType$SCREEN_GAME_LOGO_instance = new ScreenViewType('SCREEN_GAME_LOGO', 1);
    ScreenViewType$SCREEN_MENU_instance = new ScreenViewType('SCREEN_MENU', 2);
    ScreenViewType$SCREEN_MAIN_GAME_instance = new ScreenViewType('SCREEN_MAIN_GAME', 3);
    ScreenViewType$SCREEN_GAME_FAIL_instance = new ScreenViewType('SCREEN_GAME_FAIL', 4);
    ScreenViewType$SCREEN_SAVE_GAME_instance = new ScreenViewType('SCREEN_SAVE_GAME', 5);
    ScreenViewType$SCREEN_LOAD_GAME_instance = new ScreenViewType('SCREEN_LOAD_GAME', 6);
  }
  var ScreenViewType$SCREEN_DEV_LOGO_instance;
  function ScreenViewType$SCREEN_DEV_LOGO_getInstance() {
    ScreenViewType_initFields();
    return ScreenViewType$SCREEN_DEV_LOGO_instance;
  }
  var ScreenViewType$SCREEN_GAME_LOGO_instance;
  function ScreenViewType$SCREEN_GAME_LOGO_getInstance() {
    ScreenViewType_initFields();
    return ScreenViewType$SCREEN_GAME_LOGO_instance;
  }
  var ScreenViewType$SCREEN_MENU_instance;
  function ScreenViewType$SCREEN_MENU_getInstance() {
    ScreenViewType_initFields();
    return ScreenViewType$SCREEN_MENU_instance;
  }
  var ScreenViewType$SCREEN_MAIN_GAME_instance;
  function ScreenViewType$SCREEN_MAIN_GAME_getInstance() {
    ScreenViewType_initFields();
    return ScreenViewType$SCREEN_MAIN_GAME_instance;
  }
  var ScreenViewType$SCREEN_GAME_FAIL_instance;
  function ScreenViewType$SCREEN_GAME_FAIL_getInstance() {
    ScreenViewType_initFields();
    return ScreenViewType$SCREEN_GAME_FAIL_instance;
  }
  var ScreenViewType$SCREEN_SAVE_GAME_instance;
  function ScreenViewType$SCREEN_SAVE_GAME_getInstance() {
    ScreenViewType_initFields();
    return ScreenViewType$SCREEN_SAVE_GAME_instance;
  }
  var ScreenViewType$SCREEN_LOAD_GAME_instance;
  function ScreenViewType$SCREEN_LOAD_GAME_getInstance() {
    ScreenViewType_initFields();
    return ScreenViewType$SCREEN_LOAD_GAME_instance;
  }
  ScreenViewType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScreenViewType',
    interfaces: [Enum]
  };
  function ScreenViewType$values() {
    return [ScreenViewType$SCREEN_DEV_LOGO_getInstance(), ScreenViewType$SCREEN_GAME_LOGO_getInstance(), ScreenViewType$SCREEN_MENU_getInstance(), ScreenViewType$SCREEN_MAIN_GAME_getInstance(), ScreenViewType$SCREEN_GAME_FAIL_getInstance(), ScreenViewType$SCREEN_SAVE_GAME_getInstance(), ScreenViewType$SCREEN_LOAD_GAME_getInstance()];
  }
  ScreenViewType.values = ScreenViewType$values;
  function ScreenViewType$valueOf(name) {
    switch (name) {
      case 'SCREEN_DEV_LOGO':
        return ScreenViewType$SCREEN_DEV_LOGO_getInstance();
      case 'SCREEN_GAME_LOGO':
        return ScreenViewType$SCREEN_GAME_LOGO_getInstance();
      case 'SCREEN_MENU':
        return ScreenViewType$SCREEN_MENU_getInstance();
      case 'SCREEN_MAIN_GAME':
        return ScreenViewType$SCREEN_MAIN_GAME_getInstance();
      case 'SCREEN_GAME_FAIL':
        return ScreenViewType$SCREEN_GAME_FAIL_getInstance();
      case 'SCREEN_SAVE_GAME':
        return ScreenViewType$SCREEN_SAVE_GAME_getInstance();
      case 'SCREEN_LOAD_GAME':
        return ScreenViewType$SCREEN_LOAD_GAME_getInstance();
      default:throwISE('No enum constant fmj.ScreenViewType.' + name);
    }
  }
  ScreenViewType.valueOf_61zpoe$ = ScreenViewType$valueOf;
  function Character() {
    ResBase.call(this);
    this.name = '';
    this.state = Character$State$STOP_getInstance();
    this.posInMap = new Point();
    this.direction_eiels7$_0 = Direction$South_getInstance();
    this.mWalkingSprite_l2rv79$_0 = null;
  }
  Object.defineProperty(Character.prototype, 'direction', {
    get: function () {
      return this.direction_eiels7$_0;
    },
    set: function (d) {
      this.direction_eiels7$_0 = d;
      ensureNotNull(this.mWalkingSprite_l2rv79$_0).setDirection_rtfsey$(d);
    }
  });
  Object.defineProperty(Character.prototype, 'walkingSpriteId', {
    get: function () {
      return ensureNotNull(this.mWalkingSprite_l2rv79$_0).id;
    }
  });
  Object.defineProperty(Character.prototype, 'step', {
    get: function () {
      return ensureNotNull(this.mWalkingSprite_l2rv79$_0).step;
    },
    set: function (step) {
      ensureNotNull(this.mWalkingSprite_l2rv79$_0).step = step;
    }
  });
  Character.prototype.setPosInMap_vux9f0$ = function (x, y) {
    this.posInMap.set_vux9f0$(x, y);
  };
  Character.prototype.getPosOnScreen_wl9rgt$ = function (posMapScreen) {
    return new Point(this.posInMap.x - posMapScreen.x | 0, this.posInMap.y - posMapScreen.y | 0);
  };
  Character.prototype.setPosOnScreen_av5i43$ = function (x, y, posMapScreen) {
    this.posInMap.set_vux9f0$(x + posMapScreen.x | 0, y + posMapScreen.y | 0);
  };
  Character.prototype.setWalkingSprite_arnj7f$ = function (sprite) {
    this.mWalkingSprite_l2rv79$_0 = sprite;
    ensureNotNull(this.mWalkingSprite_l2rv79$_0).setDirection_rtfsey$(this.direction);
  };
  Character.prototype.walk = function () {
    ensureNotNull(this.mWalkingSprite_l2rv79$_0).walk();
    this.updatePosInMap_11qlre$_0(this.direction);
  };
  Character.prototype.walk_rtfsey$ = function (d) {
    if (d === this.direction) {
      ensureNotNull(this.mWalkingSprite_l2rv79$_0).walk();
    }
     else {
      ensureNotNull(this.mWalkingSprite_l2rv79$_0).walk_rtfsey$(d);
      this.direction = d;
    }
    this.updatePosInMap_11qlre$_0(d);
  };
  Character.prototype.updatePosInMap_11qlre$_0 = function (d) {
    switch (d.name) {
      case 'East':
        var tmp$;
        tmp$ = this.posInMap;
        tmp$.x = tmp$.x + 1 | 0;
        break;
      case 'West':
        var tmp$_0;
        tmp$_0 = this.posInMap;
        tmp$_0.x = tmp$_0.x - 1 | 0;
        break;
      case 'North':
        var tmp$_1;
        tmp$_1 = this.posInMap;
        tmp$_1.y = tmp$_1.y - 1 | 0;
        break;
      case 'South':
        var tmp$_2;
        tmp$_2 = this.posInMap;
        tmp$_2.y = tmp$_2.y + 1 | 0;
        break;
      default:Kotlin.noWhenBranchMatched();
        break;
    }
  };
  Character.prototype.walkStay_rtfsey$ = function (d) {
    if (d === this.direction) {
      ensureNotNull(this.mWalkingSprite_l2rv79$_0).walk();
    }
     else {
      ensureNotNull(this.mWalkingSprite_l2rv79$_0).walk_rtfsey$(d);
      this.direction = d;
    }
  };
  Character.prototype.walkStay = function () {
    ensureNotNull(this.mWalkingSprite_l2rv79$_0).walk();
  };
  Character.prototype.drawWalkingSprite_hbb1nm$ = function (canvas, posMapScreen) {
    var p = this.getPosOnScreen_wl9rgt$(posMapScreen);
    ensureNotNull(this.mWalkingSprite_l2rv79$_0).draw_2g4tob$(canvas, p.x * 16 | 0, p.y * 16 | 0);
  };
  function Character$State(name, ordinal, v) {
    Enum.call(this);
    this.v = v;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Character$State_initFields() {
    Character$State_initFields = function () {
    };
    Character$State$STOP_instance = new Character$State('STOP', 0, 0);
    Character$State$FORCE_MOVE_instance = new Character$State('FORCE_MOVE', 1, 1);
    Character$State$WALKING_instance = new Character$State('WALKING', 2, 2);
    Character$State$PAUSE_instance = new Character$State('PAUSE', 3, 3);
    Character$State$ACTIVE_instance = new Character$State('ACTIVE', 4, 4);
    Character$State$Companion_getInstance();
  }
  var Character$State$STOP_instance;
  function Character$State$STOP_getInstance() {
    Character$State_initFields();
    return Character$State$STOP_instance;
  }
  var Character$State$FORCE_MOVE_instance;
  function Character$State$FORCE_MOVE_getInstance() {
    Character$State_initFields();
    return Character$State$FORCE_MOVE_instance;
  }
  var Character$State$WALKING_instance;
  function Character$State$WALKING_getInstance() {
    Character$State_initFields();
    return Character$State$WALKING_instance;
  }
  var Character$State$PAUSE_instance;
  function Character$State$PAUSE_getInstance() {
    Character$State_initFields();
    return Character$State$PAUSE_instance;
  }
  var Character$State$ACTIVE_instance;
  function Character$State$ACTIVE_getInstance() {
    Character$State_initFields();
    return Character$State$ACTIVE_instance;
  }
  function Character$State$Companion() {
    Character$State$Companion_instance = this;
  }
  Character$State$Companion.prototype.fromInt_za3lpa$ = function (v) {
    var tmp$;
    switch (v) {
      case 0:
        tmp$ = Character$State$STOP_getInstance();
        break;
      case 1:
        tmp$ = Character$State$FORCE_MOVE_getInstance();
        break;
      case 2:
        tmp$ = Character$State$WALKING_getInstance();
        break;
      case 3:
        tmp$ = Character$State$PAUSE_getInstance();
        break;
      case 4:
        tmp$ = Character$State$ACTIVE_getInstance();
        break;
      default:println('State.fromInt invalid v=' + v);
        tmp$ = Character$State$STOP_getInstance();
        break;
    }
    return tmp$;
  };
  Character$State$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Character$State$Companion_instance = null;
  function Character$State$Companion_getInstance() {
    Character$State_initFields();
    if (Character$State$Companion_instance === null) {
      new Character$State$Companion();
    }
    return Character$State$Companion_instance;
  }
  Character$State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: [Enum]
  };
  function Character$State$values() {
    return [Character$State$STOP_getInstance(), Character$State$FORCE_MOVE_getInstance(), Character$State$WALKING_getInstance(), Character$State$PAUSE_getInstance(), Character$State$ACTIVE_getInstance()];
  }
  Character$State.values = Character$State$values;
  function Character$State$valueOf(name) {
    switch (name) {
      case 'STOP':
        return Character$State$STOP_getInstance();
      case 'FORCE_MOVE':
        return Character$State$FORCE_MOVE_getInstance();
      case 'WALKING':
        return Character$State$WALKING_getInstance();
      case 'PAUSE':
        return Character$State$PAUSE_getInstance();
      case 'ACTIVE':
        return Character$State$ACTIVE_getInstance();
      default:throwISE('No enum constant fmj.characters.Character.State.' + name);
    }
  }
  Character$State.valueOf_61zpoe$ = Character$State$valueOf;
  Character.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Character',
    interfaces: [ResBase]
  };
  function Direction(name, ordinal, v) {
    Enum.call(this);
    this.v = v;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Direction_initFields() {
    Direction_initFields = function () {
    };
    Direction$North_instance = new Direction('North', 0, 1);
    Direction$East_instance = new Direction('East', 1, 2);
    Direction$South_instance = new Direction('South', 2, 3);
    Direction$West_instance = new Direction('West', 3, 4);
    Direction$Companion_getInstance();
  }
  var Direction$North_instance;
  function Direction$North_getInstance() {
    Direction_initFields();
    return Direction$North_instance;
  }
  var Direction$East_instance;
  function Direction$East_getInstance() {
    Direction_initFields();
    return Direction$East_instance;
  }
  var Direction$South_instance;
  function Direction$South_getInstance() {
    Direction_initFields();
    return Direction$South_instance;
  }
  var Direction$West_instance;
  function Direction$West_getInstance() {
    Direction_initFields();
    return Direction$West_instance;
  }
  function Direction$Companion() {
    Direction$Companion_instance = this;
  }
  Direction$Companion.prototype.fromInt_za3lpa$ = function (v) {
    var tmp$;
    switch (v) {
      case 1:
        tmp$ = Direction$North_getInstance();
        break;
      case 2:
        tmp$ = Direction$East_getInstance();
        break;
      case 3:
        tmp$ = Direction$South_getInstance();
        break;
      case 4:
        tmp$ = Direction$West_getInstance();
        break;
      default:println('Direction.fromInt invalid v=' + v);
        tmp$ = Direction$North_getInstance();
        break;
    }
    return tmp$;
  };
  Direction$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Direction$Companion_instance = null;
  function Direction$Companion_getInstance() {
    Direction_initFields();
    if (Direction$Companion_instance === null) {
      new Direction$Companion();
    }
    return Direction$Companion_instance;
  }
  Direction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Direction',
    interfaces: [Enum]
  };
  function Direction$values() {
    return [Direction$North_getInstance(), Direction$East_getInstance(), Direction$South_getInstance(), Direction$West_getInstance()];
  }
  Direction.values = Direction$values;
  function Direction$valueOf(name) {
    switch (name) {
      case 'North':
        return Direction$North_getInstance();
      case 'East':
        return Direction$East_getInstance();
      case 'South':
        return Direction$South_getInstance();
      case 'West':
        return Direction$West_getInstance();
      default:throwISE('No enum constant fmj.characters.Direction.' + name);
    }
  }
  Direction.valueOf_61zpoe$ = Direction$valueOf;
  function Buff(value, round) {
    this.value = value;
    this.round = round;
  }
  Buff.prototype.reset = function () {
    this.round = 0;
    this.value = 0;
  };
  var Math_0 = Math;
  Buff.prototype.add_za3lpa$ = function (round) {
    if (round === 0) {
      this.value = this.value + 1 | 0;
    }
     else {
      if (this.round === 0) {
        this.value = this.value + 1 | 0;
      }
      var a = this.round;
      this.round = Math_0.max(a, round);
    }
  };
  Buff.prototype.fill_j10op8$ = function (other) {
    other.value = this.value;
    other.round = this.round;
  };
  Buff.prototype.diffFrom_j10op8$ = function (other) {
    return new Buff(this.value - other.value | 0, this.round - other.round | 0);
  };
  Buff.prototype.decay_za3lpa$ = function (mode) {
    if (this.round > 0) {
      this.round = this.round - 1 | 0;
      if (this.round === 0) {
        switch (mode) {
          case 0:
            this.value = this.value - 1 | 0;
            break;
          case 1:
            this.value = 0;
            break;
        }
      }
    }
  };
  Buff.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Buff',
    interfaces: []
  };
  var Array_0 = Array;
  function BuffMan(buffs) {
    BuffMan$Companion_getInstance();
    if (buffs === void 0) {
      var array = Array_0(8);
      var tmp$;
      tmp$ = array.length - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        array[i] = new Buff(0, 0);
      }
      buffs = array;
    }
    this.buffs = buffs;
  }
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  BuffMan.prototype.encode_vcd9jg$ = function (out) {
    var $receiver = this.buffs;
    var destination = ArrayList_init_0($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(item.value);
    }
    out.writeIntArray_q5rwfd$(toIntArray(destination));
    var $receiver_0 = this.buffs;
    var destination_0 = ArrayList_init_0($receiver_0.length);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
      var item_0 = $receiver_0[tmp$_0];
      destination_0.add_11rb$(item_0.round);
    }
    out.writeIntArray_q5rwfd$(toIntArray(destination_0));
  };
  BuffMan.prototype.decode_setnfj$ = function (coder) {
    var values = coder.readIntArray();
    var rounds = coder.readIntArray();
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = zip(values, rounds).iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var index_0 = (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0);
      this.buffs[index_0].value = item.first;
      this.buffs[index_0].round = item.second;
    }
  };
  function BuffMan$getBuffs$lambda(this$BuffMan) {
    return function (it) {
      return this$BuffMan.buffs[it];
    };
  }
  BuffMan.prototype.getBuffs_za3lpa$ = function (mask) {
    return map(FightingCharacter$Companion_getInstance().maskToIndexes_za3lpa$(mask), BuffMan$getBuffs$lambda(this));
  };
  BuffMan.prototype.hasBuff_za3lpa$ = function (mask) {
    return first(this.getBuffs_za3lpa$(mask)).value > 0;
  };
  BuffMan.prototype.addBuff_vux9f0$ = function (mask, round) {
    var tmp$;
    tmp$ = this.getBuffs_za3lpa$(mask).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.add_za3lpa$(round);
    }
  };
  BuffMan.prototype.delBuff_za3lpa$ = function (mask) {
    var tmp$;
    tmp$ = this.getBuffs_za3lpa$(mask).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.value > 0)
        element.value = element.value - 1 | 0;
    }
  };
  BuffMan.prototype.reset = function () {
    var $receiver = this.buffs;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      element.reset();
    }
  };
  BuffMan.prototype.fill_pd3tci$ = function (other) {
    var tmp$;
    tmp$ = zip_0(this.buffs, other.buffs).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.first.fill_j10op8$(element.second);
    }
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  BuffMan.prototype.diffFrom_pd3tci$ = function (other) {
    var $receiver = zip_0(this.buffs, other.buffs);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.first.diffFrom_j10op8$(item.second));
    }
    var newbuffs = copyToArray(destination);
    return new BuffMan(newbuffs);
  };
  BuffMan.prototype.decay = function () {
    var tmp$;
    tmp$ = (new IntRange(0, 3)).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.buffs[element].decay_za3lpa$(0);
    }
    var tmp$_0;
    tmp$_0 = (new IntRange(5, 7)).iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      this.buffs[element_0].decay_za3lpa$(1);
    }
  };
  function BuffMan$Companion() {
    BuffMan$Companion_instance = this;
  }
  BuffMan$Companion.prototype.fromInt_za3lpa$ = function (v) {
    var round = (v & 240) >> 4;
    var mask = v & 15;
    return this.fromRoundAndMask_vux9f0$(round, mask);
  };
  BuffMan$Companion.prototype.fromRoundAndMask_vux9f0$ = function (round, mask) {
    var inds = FightingCharacter$Companion_getInstance().maskToIndexes_za3lpa$(mask);
    var man = new BuffMan();
    var tmp$;
    tmp$ = inds.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      man.buffs[element].value = 1;
      man.buffs[element].round = round;
    }
    return man;
  };
  BuffMan$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BuffMan$Companion_instance = null;
  function BuffMan$Companion_getInstance() {
    if (BuffMan$Companion_instance === null) {
      new BuffMan$Companion();
    }
    return BuffMan$Companion_instance;
  }
  BuffMan.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BuffMan',
    interfaces: [Coder]
  };
  function health(mask, obj) {
    var tmp$;
    tmp$ = obj.getBuffs_za3lpa$(mask).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.value = 0;
      element.round = 0;
    }
  }
  function calcBuff(at, df, st, luck) {
    var rv = new BuffMan();
    var x = luck / 100;
    var pluck = Math_0.sqrt(x);
    var tmp$;
    tmp$ = (new IntRange(0, 3)).iterator();
    loop_label: while (tmp$.hasNext()) {
      var element = tmp$.next();
      action$break: do {
        if (random() + 0.01 < pluck) {
          break action$break;
        }
        var a = at.buffs[element];
        var d = df.buffs[element];
        var s = st.buffs[element];
        if (d.value === 0 && a.value > 0) {
          s.add_za3lpa$(a.round);
          rv.buffs[element].value = 1;
        }
      }
       while (false);
    }
    var tmp$_0;
    tmp$_0 = (new IntRange(5, 7)).iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      if (at.buffs[element_0].value !== 0) {
        st.buffs[element_0].value = -at.buffs[element_0].value | 0;
        st.buffs[element_0].round = at.buffs[element_0].round;
      }
    }
    return rv;
  }
  function FightingCharacter() {
    FightingCharacter$Companion_getInstance();
    Character.call(this);
    this.fightingSprite = null;
    this.magicChain = null;
    this.level = 0;
    this.maxHP_aqimg2$_0 = 0;
    this.maxMP_aqiiql$_0 = 0;
    this.hp_oo4bdu$_0 = 0;
    this.isVisiable = true;
    this.mp_oo4f3b$_0 = 0;
    this.attack_2swbku$_0 = 0;
    this.defend_xwzut0$_0 = 0;
    this.speed_7obhy5$_0 = 0;
    this.lingli_bak3kn$_0 = 0;
    this.luck_ge355z$_0 = 0;
    this.missed = false;
    this.buff = new BuffMan();
    this.debuff = new BuffMan();
    this.atbuff = new BuffMan();
    this.backup_2mheeg$_0 = new FightingCharacter$Diff();
  }
  function FightingCharacter$Diff() {
    this.debuff = new BuffMan();
    this.hp = 0;
    this.mp = 0;
  }
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  FightingCharacter$Diff.prototype.toAnimation_vux9f0$ = function (x, y) {
    var $receiver = this.debuff.buffs;
    var destination = ArrayList_init_0($receiver.length);
    var tmp$, tmp$_0;
    var index = 0;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      var tmp$_1 = destination.add_11rb$;
      var index_0 = (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0);
      var transform$result;
      if (item.value !== 0 || item.round !== 0) {
        transform$result = FightingCharacter$Companion_getInstance().indexToMask_za3lpa$(index_0);
      }
       else {
        transform$result = 0;
      }
      tmp$_1.call(destination, transform$result);
    }
    var iterator = destination.iterator();
    if (!iterator.hasNext())
      throw UnsupportedOperationException_init("Empty collection can't be reduced.");
    var accumulator = iterator.next();
    while (iterator.hasNext()) {
      accumulator = accumulator + iterator.next() | 0;
    }
    var buff = accumulator;
    return new RaiseAnimation(x, y, this.hp, buff);
  };
  FightingCharacter$Diff.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Diff',
    interfaces: []
  };
  Object.defineProperty(FightingCharacter.prototype, 'combatX', {
    get: function () {
      return ensureNotNull(this.fightingSprite).combatX;
    }
  });
  Object.defineProperty(FightingCharacter.prototype, 'combatY', {
    get: function () {
      return ensureNotNull(this.fightingSprite).combatY;
    }
  });
  Object.defineProperty(FightingCharacter.prototype, 'combatLeft', {
    get: function () {
      return ensureNotNull(this.fightingSprite).combatX - (ensureNotNull(this.fightingSprite).width / 2 | 0) | 0;
    }
  });
  Object.defineProperty(FightingCharacter.prototype, 'combatTop', {
    get: function () {
      return ensureNotNull(this.fightingSprite).combatY - (ensureNotNull(this.fightingSprite).height / 2 | 0) | 0;
    }
  });
  Object.defineProperty(FightingCharacter.prototype, 'maxHP', {
    get: function () {
      return this.maxHP_aqimg2$_0;
    },
    set: function (maxHP) {
      this.maxHP_aqimg2$_0 = Math_0.min(999, maxHP);
    }
  });
  Object.defineProperty(FightingCharacter.prototype, 'maxMP', {
    get: function () {
      return this.maxMP_aqiiql$_0;
    },
    set: function (maxMP) {
      this.maxMP_aqiiql$_0 = Math_0.min(999, maxMP);
    }
  });
  Object.defineProperty(FightingCharacter.prototype, 'hp', {
    get: function () {
      return this.hp_oo4bdu$_0;
    },
    set: function (hp) {
      var a = this.maxHP;
      this.hp_oo4bdu$_0 = Math_0.min(a, hp);
    }
  });
  Object.defineProperty(FightingCharacter.prototype, 'isAlive', {
    get: function () {
      return this.hp > 0;
    }
  });
  Object.defineProperty(FightingCharacter.prototype, 'mp', {
    get: function () {
      return this.mp_oo4f3b$_0;
    },
    set: function (mp) {
      var a = this.maxMP;
      this.mp_oo4f3b$_0 = Math_0.min(a, mp);
    }
  });
  Object.defineProperty(FightingCharacter.prototype, 'attack', {
    get: function () {
      return this.attack_2swbku$_0;
    },
    set: function (at) {
      this.attack_2swbku$_0 = Math_0.min(999, at);
    }
  });
  Object.defineProperty(FightingCharacter.prototype, 'defend', {
    get: function () {
      return this.defend_xwzut0$_0;
    },
    set: function (d) {
      this.defend_xwzut0$_0 = Math_0.min(999, d);
    }
  });
  Object.defineProperty(FightingCharacter.prototype, 'speed', {
    get: function () {
      return this.speed_7obhy5$_0;
    },
    set: function (s) {
      this.speed_7obhy5$_0 = Math_0.min(99, s);
    }
  });
  Object.defineProperty(FightingCharacter.prototype, 'lingli', {
    get: function () {
      return this.lingli_bak3kn$_0;
    },
    set: function (l) {
      this.lingli_bak3kn$_0 = Math_0.min(99, l);
    }
  });
  Object.defineProperty(FightingCharacter.prototype, 'luck', {
    get: function () {
      return this.luck_ge355z$_0;
    },
    set: function (l) {
      this.luck_ge355z$_0 = Math_0.min(99, l);
    }
  });
  Object.defineProperty(FightingCharacter.prototype, 'computedSpeed', {
    get: function () {
      return this.speed + (Kotlin.imul(this.speed, first(this.debuff.getBuffs_za3lpa$(FightingCharacter$Companion_getInstance().BUFF_MASK_SU)).value) / 100 | 0) | 0;
    }
  });
  Object.defineProperty(FightingCharacter.prototype, 'computedAttack', {
    get: function () {
      return this.attack + (Kotlin.imul(this.attack, first(this.debuff.getBuffs_za3lpa$(FightingCharacter$Companion_getInstance().BUFF_MASK_GONG)).value) / 100 | 0) | 0;
    }
  });
  Object.defineProperty(FightingCharacter.prototype, 'computedDefend', {
    get: function () {
      return this.defend + (Kotlin.imul(this.defend, first(this.debuff.getBuffs_za3lpa$(FightingCharacter$Companion_getInstance().BUFF_MASK_FANG)).value) / 100 | 0) | 0;
    }
  });
  Object.defineProperty(FightingCharacter.prototype, 'isPoisoned', {
    get: function () {
      return this.hasDebuff_za3lpa$(FightingCharacter$Companion_getInstance().BUFF_MASK_DU);
    }
  });
  Object.defineProperty(FightingCharacter.prototype, 'isConfusing', {
    get: function () {
      return this.hasDebuff_za3lpa$(FightingCharacter$Companion_getInstance().BUFF_MASK_LUAN);
    }
  });
  Object.defineProperty(FightingCharacter.prototype, 'isSealed', {
    get: function () {
      return this.hasDebuff_za3lpa$(FightingCharacter$Companion_getInstance().BUFF_MASK_FENG);
    }
  });
  Object.defineProperty(FightingCharacter.prototype, 'isSleeping', {
    get: function () {
      return this.hasDebuff_za3lpa$(FightingCharacter$Companion_getInstance().BUFF_MASK_MIAN);
    }
  });
  FightingCharacter.prototype.setCombatPos_vux9f0$ = function (x, y) {
    ensureNotNull(this.fightingSprite).setCombatPos_vux9f0$(x, y);
  };
  FightingCharacter.prototype.hasBuff_za3lpa$ = function (mask) {
    return this.buff.hasBuff_za3lpa$(mask);
  };
  FightingCharacter.prototype.hasDebuff_za3lpa$ = function (mask) {
    return this.debuff.hasBuff_za3lpa$(mask);
  };
  FightingCharacter.prototype.resetDebuff = function () {
    this.debuff.reset();
  };
  FightingCharacter.prototype.hasAtbuff_za3lpa$ = function (mask) {
    return this.atbuff.hasBuff_za3lpa$(mask);
  };
  FightingCharacter.prototype.addBuff_vux9f0$ = function (mask, rounds) {
    if (rounds === void 0)
      rounds = 0;
    this.buff.addBuff_vux9f0$(mask, rounds);
  };
  FightingCharacter.prototype.delBuff_za3lpa$ = function (mask) {
    this.buff.delBuff_za3lpa$(mask);
  };
  FightingCharacter.prototype.setAtbuff_vux9f0$ = function (mask, rounds) {
    this.atbuff.reset();
    this.atbuff.addBuff_vux9f0$(mask, rounds);
  };
  FightingCharacter.prototype.resetAtbuff = function () {
    this.atbuff.reset();
  };
  FightingCharacter.prototype.attack_6u7vdj$ = function (other, rate, allowMiss) {
    if (rate === void 0)
      rate = 1.0;
    if (allowMiss === void 0)
      allowMiss = true;
    if (SaveLoadGame_getInstance().allowMiss && allowMiss) {
      if (CalcDamage_getInstance().randomMiss_qwqr58$(this, other)) {
        other.missed = true;
        return new BuffMan();
      }
    }
    var damage = numberToInt(CalcDamage_getInstance().calcBaseDamage_vux9f0$(this.computedAttack, other.computedDefend) * rate);
    if (damage <= 0) {
      damage = 1;
    }
    damage = damage + numberToInt(random() * 10) | 0;
    other.hp = other.hp - damage | 0;
    return other.beAttackedWithBuff_ila1b3$(this.atbuff);
  };
  FightingCharacter.prototype.beAttackedWithBuff_ila1b3$ = function (b, luck) {
    if (luck === void 0)
      luck = null;
    return calcBuff(b, this.buff, this.debuff, luck != null ? luck : this.luck);
  };
  FightingCharacter.prototype.backupStatus = function () {
    this.backup_2mheeg$_0.hp = this.hp;
    this.backup_2mheeg$_0.mp = this.mp;
    this.debuff.fill_pd3tci$(this.backup_2mheeg$_0.debuff);
    this.missed = false;
  };
  FightingCharacter.prototype.diff_6taknv$ = function (withBuff) {
    var diff = new FightingCharacter$Diff();
    diff.mp = this.mp - this.backup_2mheeg$_0.mp | 0;
    diff.hp = this.hp - this.backup_2mheeg$_0.hp | 0;
    if (withBuff)
      diff.debuff = this.debuff.diffFrom_pd3tci$(this.backup_2mheeg$_0.debuff);
    return diff;
  };
  FightingCharacter.prototype.diffToAnimation_6taknv$ = function (withBuff) {
    if (withBuff === void 0)
      withBuff = true;
    var tmp$;
    if (this.missed) {
      tmp$ = new RaiseBitmapAnimation(this.combatX, this.combatY, DatLib$Companion_getInstance().missBitmap);
    }
     else {
      tmp$ = this.diff_6taknv$(withBuff).toAnimation_vux9f0$(this.combatX, this.combatY);
    }
    return tmp$;
  };
  FightingCharacter.prototype.decay = function () {
    this.buff.decay();
    this.debuff.decay();
  };
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  FightingCharacter.prototype.getAllMagics = function () {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.magicChain) != null ? tmp$.getAllLearntMagics() : null) != null ? tmp$_0 : emptyList();
  };
  function FightingCharacter$Companion() {
    FightingCharacter$Companion_instance = this;
    this.BUFF_MASK_ALL = 16;
    this.BUFF_MASK_DU = 8;
    this.BUFF_MASK_LUAN = 4;
    this.BUFF_MASK_FENG = 2;
    this.BUFF_MASK_MIAN = 1;
    this.BUFF_MASK_GONG = 32;
    this.BUFF_MASK_FANG = 64;
    this.BUFF_MASK_SU = 128;
  }
  FightingCharacter$Companion.prototype.isMaskSet_vux9f0$ = function (mask, b) {
    return (mask & b) !== 0;
  };
  FightingCharacter$Companion.prototype.maskToIndex_za3lpa$ = function (mask) {
    return first(this.maskToIndexes_za3lpa$(mask));
  };
  FightingCharacter$Companion.prototype.indexToMask_za3lpa$ = function (i) {
    var tmp$;
    switch (i) {
      case 0:
        tmp$ = this.BUFF_MASK_MIAN;
        break;
      case 1:
        tmp$ = this.BUFF_MASK_FENG;
        break;
      case 2:
        tmp$ = this.BUFF_MASK_LUAN;
        break;
      case 3:
        tmp$ = this.BUFF_MASK_DU;
        break;
      case 4:
        tmp$ = this.BUFF_MASK_ALL;
        break;
      case 5:
        tmp$ = this.BUFF_MASK_GONG;
        break;
      case 6:
        tmp$ = this.BUFF_MASK_FANG;
        break;
      case 7:
        tmp$ = this.BUFF_MASK_SU;
        break;
      default:tmp$ = 0;
        break;
    }
    return tmp$;
  };
  function FightingCharacter$Companion$maskToIndexes$lambda(closure$mask_0, this$FightingCharacter$_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$FightingCharacter$Companion$maskToIndexes$lambda(closure$mask_0, this$FightingCharacter$_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$FightingCharacter$Companion$maskToIndexes$lambda(closure$mask_0, this$FightingCharacter$_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$mask = closure$mask_0;
    this.local$this$FightingCharacter$ = this$FightingCharacter$_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$FightingCharacter$Companion$maskToIndexes$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FightingCharacter$Companion$maskToIndexes$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FightingCharacter$Companion$maskToIndexes$lambda.prototype.constructor = Coroutine$FightingCharacter$Companion$maskToIndexes$lambda;
  Coroutine$FightingCharacter$Companion$maskToIndexes$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$this$FightingCharacter$.isMaskSet_vux9f0$(this.local$closure$mask, this.local$this$FightingCharacter$.BUFF_MASK_MIAN)) {
              this.state_0 = 2;
              this.result_0 = this.local$$receiver.yield_11rb$(0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            if (this.local$this$FightingCharacter$.isMaskSet_vux9f0$(this.local$closure$mask, this.local$this$FightingCharacter$.BUFF_MASK_FENG)) {
              this.state_0 = 4;
              this.result_0 = this.local$$receiver.yield_11rb$(1, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            if (this.local$this$FightingCharacter$.isMaskSet_vux9f0$(this.local$closure$mask, this.local$this$FightingCharacter$.BUFF_MASK_LUAN)) {
              this.state_0 = 6;
              this.result_0 = this.local$$receiver.yield_11rb$(2, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 7;
              continue;
            }

          case 6:
            this.state_0 = 7;
            continue;
          case 7:
            if (this.local$this$FightingCharacter$.isMaskSet_vux9f0$(this.local$closure$mask, this.local$this$FightingCharacter$.BUFF_MASK_DU)) {
              this.state_0 = 8;
              this.result_0 = this.local$$receiver.yield_11rb$(3, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 9;
              continue;
            }

          case 8:
            this.state_0 = 9;
            continue;
          case 9:
            if (this.local$this$FightingCharacter$.isMaskSet_vux9f0$(this.local$closure$mask, this.local$this$FightingCharacter$.BUFF_MASK_ALL)) {
              this.state_0 = 10;
              this.result_0 = this.local$$receiver.yield_11rb$(4, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 11;
              continue;
            }

          case 10:
            this.state_0 = 11;
            continue;
          case 11:
            if (this.local$this$FightingCharacter$.isMaskSet_vux9f0$(this.local$closure$mask, this.local$this$FightingCharacter$.BUFF_MASK_GONG)) {
              this.state_0 = 12;
              this.result_0 = this.local$$receiver.yield_11rb$(5, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 13;
              continue;
            }

          case 12:
            this.state_0 = 13;
            continue;
          case 13:
            if (this.local$this$FightingCharacter$.isMaskSet_vux9f0$(this.local$closure$mask, this.local$this$FightingCharacter$.BUFF_MASK_FANG)) {
              this.state_0 = 14;
              this.result_0 = this.local$$receiver.yield_11rb$(6, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 15;
              continue;
            }

          case 14:
            this.state_0 = 15;
            continue;
          case 15:
            if (this.local$this$FightingCharacter$.isMaskSet_vux9f0$(this.local$closure$mask, this.local$this$FightingCharacter$.BUFF_MASK_SU)) {
              this.state_0 = 16;
              this.result_0 = this.local$$receiver.yield_11rb$(7, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 17;
              continue;
            }

          case 16:
            return Unit;
          case 17:
            return Unit;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  FightingCharacter$Companion.prototype.maskToIndexes_za3lpa$ = function (mask) {
    return buildSequence(FightingCharacter$Companion$maskToIndexes$lambda(mask, this));
  };
  FightingCharacter$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FightingCharacter$Companion_instance = null;
  function FightingCharacter$Companion_getInstance() {
    if (FightingCharacter$Companion_instance === null) {
      new FightingCharacter$Companion();
    }
    return FightingCharacter$Companion_instance;
  }
  FightingCharacter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FightingCharacter',
    interfaces: [Character]
  };
  function FightingSprite(resType, index) {
    this.mImage_0 = null;
    this.currentFrame = 1;
    this.combatX_ti0xg4$_0 = 0;
    this.combatY_ti0xgz$_0 = 0;
    var tmp$, tmp$_0;
    if (resType === DatLib$ResType$ACP_getInstance()) {
      this.mImage_0 = Kotlin.isType(tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$ACP_getInstance(), 3, index), ResImage) ? tmp$ : throwCCE();
    }
     else if (resType === DatLib$ResType$PIC_getInstance()) {
      this.mImage_0 = Kotlin.isType(tmp$_0 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$PIC_getInstance(), 3, index), ResImage) ? tmp$_0 : throwCCE();
    }
     else {
      throw Error_init('resType Error. resType=' + resType);
    }
  }
  Object.defineProperty(FightingSprite.prototype, 'combatX', {
    get: function () {
      return this.combatX_ti0xg4$_0;
    },
    set: function (combatX) {
      this.combatX_ti0xg4$_0 = combatX;
    }
  });
  Object.defineProperty(FightingSprite.prototype, 'combatY', {
    get: function () {
      return this.combatY_ti0xgz$_0;
    },
    set: function (combatY) {
      this.combatY_ti0xgz$_0 = combatY;
    }
  });
  Object.defineProperty(FightingSprite.prototype, 'width', {
    get: function () {
      return ensureNotNull(this.mImage_0).width;
    }
  });
  Object.defineProperty(FightingSprite.prototype, 'height', {
    get: function () {
      return ensureNotNull(this.mImage_0).height;
    }
  });
  Object.defineProperty(FightingSprite.prototype, 'frameCnt', {
    get: function () {
      return ensureNotNull(this.mImage_0).number;
    }
  });
  FightingSprite.prototype.draw_9in0vv$ = function (canvas) {
    ensureNotNull(this.mImage_0).draw_tj1hu5$(canvas, this.currentFrame, this.combatX - (ensureNotNull(this.mImage_0).width / 2 | 0) | 0, this.combatY - (ensureNotNull(this.mImage_0).height / 2 | 0) | 0);
  };
  FightingSprite.prototype.draw_2g4tob$ = function (canvas, x, y) {
    ensureNotNull(this.mImage_0).draw_tj1hu5$(canvas, this.currentFrame, x, y);
  };
  FightingSprite.prototype.setCombatPos_vux9f0$ = function (x, y) {
    this.combatX = x;
    this.combatY = y;
  };
  FightingSprite.prototype.move_vux9f0$ = function (dx, dy) {
    this.combatX = this.combatX + dx | 0;
    this.combatY = this.combatY + dy | 0;
  };
  FightingSprite.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FightingSprite',
    interfaces: []
  };
  function Monster() {
    Monster$Companion_getInstance();
    FightingCharacter.call(this);
    this.mIQ = 0;
    this.money_mfcpdz$_0 = 0;
    this.exp_81bzzq$_0 = 0;
    this.mCarryGoods1_0 = new Int32Array(3);
    this.mCarryGoods2_0 = new Int32Array(3);
  }
  Object.defineProperty(Monster.prototype, 'money', {
    get: function () {
      return this.money_mfcpdz$_0;
    },
    set: function (money) {
      this.money_mfcpdz$_0 = money;
    }
  });
  Object.defineProperty(Monster.prototype, 'exp', {
    get: function () {
      return this.exp_81bzzq$_0;
    },
    set: function (exp) {
      this.exp_81bzzq$_0 = exp;
    }
  });
  Object.defineProperty(Monster.prototype, 'dropGoods', {
    get: function () {
      var tmp$;
      if (this.mCarryGoods2_0[0] === 0 || this.mCarryGoods2_0[1] === 0 || this.mCarryGoods2_0[2] === 0) {
        return null;
      }
      var g = Kotlin.isType(tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$GRS_getInstance(), this.mCarryGoods2_0[0], this.mCarryGoods2_0[1]), BaseGoods) ? tmp$ : throwCCE();
      g.goodsNum = this.mCarryGoods2_0[2];
      return g;
    }
  });
  Monster.prototype.stealGoods_qpjxya$ = function (attacker) {
    var tmp$, tmp$_0;
    if (this.mCarryGoods1_0[0] === 0 || this.mCarryGoods1_0[1] === 0 || this.mCarryGoods1_0[2] === 0) {
      return null;
    }
    if (random() < 0.2) {
      return null;
    }
    tmp$ = this.mCarryGoods1_0;
    tmp$[2] = tmp$[2] - 1 | 0;
    return Kotlin.isType(tmp$_0 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$GRS_getInstance(), this.mCarryGoods1_0[0], this.mCarryGoods1_0[1]), BaseGoods) ? tmp$_0 : throwCCE();
  };
  Monster.prototype.setData_ir89t6$ = function (buf, offset) {
    var tmp$;
    this.type = buf[offset] & 255;
    this.index = buf[offset + 1 | 0] & 255;
    var magicIndex = buf[offset + 47 | 0] & 255;
    this.magicChain = DatLib$Companion_getInstance().getMlr_ydzd23$(1, magicIndex, true);
    (tmp$ = this.magicChain) != null ? (tmp$.learnNum = buf[offset + 2 | 0] & 255) : null;
    this.addBuff_vux9f0$(buf[offset + 3 | 0] & 255);
    var round = buf[offset + 23 | 0] & 255;
    this.atbuff.addBuff_vux9f0$(buf[offset + 4 | 0] & 255, round);
    this.name = ResBase$Companion_getInstance().getString_ir89t6$(buf, offset + 6 | 0);
    this.level = buf[offset + 18 | 0] & 255;
    this.maxHP = ResBase$Companion_getInstance().get2BytesInt_ir89t6$(buf, offset + 24 | 0);
    this.hp = ResBase$Companion_getInstance().get2BytesInt_ir89t6$(buf, offset + 26 | 0);
    this.maxMP = ResBase$Companion_getInstance().get2BytesInt_ir89t6$(buf, offset + 28 | 0);
    this.mp = ResBase$Companion_getInstance().get2BytesInt_ir89t6$(buf, offset + 30 | 0);
    this.attack = ResBase$Companion_getInstance().get2BytesInt_ir89t6$(buf, offset + 32 | 0);
    this.defend = ResBase$Companion_getInstance().get2BytesInt_ir89t6$(buf, offset + 34 | 0);
    this.speed = buf[offset + 19 | 0] & 255;
    this.lingli = buf[offset + 20 | 0] & 255;
    this.luck = buf[offset + 22 | 0] & 255;
    this.mIQ = buf[offset + 21 | 0] & 255;
    this.money = ResBase$Companion_getInstance().get2BytesInt_ir89t6$(buf, offset + 36 | 0);
    this.exp = ResBase$Companion_getInstance().get2BytesInt_ir89t6$(buf, offset + 38 | 0);
    this.mCarryGoods1_0[0] = buf[offset + 40 | 0] & 255;
    this.mCarryGoods1_0[1] = buf[offset + 41 | 0] & 255;
    this.mCarryGoods1_0[2] = buf[offset + 42 | 0] & 255;
    this.mCarryGoods2_0[0] = buf[offset + 43 | 0] & 255;
    this.mCarryGoods2_0[1] = buf[offset + 44 | 0] & 255;
    this.mCarryGoods2_0[2] = buf[offset + 45 | 0] & 255;
    this.fightingSprite = new FightingSprite(DatLib$ResType$ACP_getInstance(), buf[offset + 46 | 0] & 255);
  };
  Monster.prototype.setOriginalCombatPos_za3lpa$ = function (i) {
    var fs = this.fightingSprite;
    fs != null ? (fs.setCombatPos_vux9f0$(Monster$Companion_getInstance().arr_0[i][0] - (fs.width / 6 | 0) + (fs.width / 2 | 0) | 0, Monster$Companion_getInstance().arr_0[i][1] - (fs.height / 10 | 0) + (fs.height / 2 | 0) | 0), Unit) : null;
  };
  function Monster$Companion() {
    Monster$Companion_instance = this;
    this.arr_0 = [new Int32Array([12, 25]), new Int32Array([44, 14]), new Int32Array([82, 11])];
  }
  Monster$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Monster$Companion_instance = null;
  function Monster$Companion_getInstance() {
    if (Monster$Companion_instance === null) {
      new Monster$Companion();
    }
    return Monster$Companion_instance;
  }
  Monster.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Monster',
    interfaces: [FightingCharacter]
  };
  function NPC() {
    NPC$Companion_getInstance();
    Character.call(this);
    this.mDelay = 0;
    this.mCanWalk_lbchmg$_0 = null;
    this.mRandom_1t4gy8$_0 = new Random();
    this.mPauseCnt_9x88qo$_0 = Kotlin.Long.fromInt(this.mDelay * 100 | 0);
    this.mActiveCnt_bik1a6$_0 = L0;
    this.mWalkingCnt_xj4ebn$_0 = L0;
  }
  NPC.prototype.setData_ir89t6$ = function (buf, offset) {
    this.type = buf[offset] & 255;
    this.index = buf[offset + 1 | 0] & 255;
    var st = buf[offset + 4 | 0] & 255;
    this.state = Character$State$Companion_getInstance().fromInt_za3lpa$(st);
    this.name = ResBase$Companion_getInstance().getString_ir89t6$(buf, offset + 9 | 0);
    this.mDelay = buf[offset + 21 | 0] & 255;
    if (this.mDelay === 0) {
      this.state = Character$State$STOP_getInstance();
    }
    this.setWalkingSprite_arnj7f$(new WalkingSprite(2, buf[offset + 22 | 0] & 255));
    var faceto = buf[offset + 2 | 0] & 255;
    this.direction = Direction$Companion_getInstance().fromInt_za3lpa$(faceto);
    this.step = buf[offset + 3 | 0] & 255;
  };
  NPC.prototype.encode_vcd9jg$ = function (out) {
    out.writeInt_za3lpa$(this.type);
    out.writeInt_za3lpa$(this.index);
    out.writeInt_za3lpa$(this.state.v);
    out.writeString_61zpoe$(this.name);
    out.writeInt_za3lpa$(this.mDelay);
    out.writeInt_za3lpa$(this.walkingSpriteId);
    out.writeInt_za3lpa$(this.direction.v);
    out.writeInt_za3lpa$(this.step);
    out.writeLong_s8cxhz$(this.mPauseCnt_9x88qo$_0);
    out.writeLong_s8cxhz$(this.mActiveCnt_bik1a6$_0);
    out.writeLong_s8cxhz$(this.mWalkingCnt_xj4ebn$_0);
    out.writeInt_za3lpa$(this.posInMap.x);
    out.writeInt_za3lpa$(this.posInMap.y);
  };
  NPC.prototype.decode_setnfj$ = function (coder) {
    this.type = coder.readInt();
    this.index = coder.readInt();
    this.state = Character$State$Companion_getInstance().fromInt_za3lpa$(coder.readInt());
    this.name = coder.readString();
    this.mDelay = coder.readInt();
    this.setWalkingSprite_arnj7f$(new WalkingSprite(2, coder.readInt()));
    this.direction = Direction$Companion_getInstance().fromInt_za3lpa$(coder.readInt());
    this.step = coder.readInt();
    this.mPauseCnt_9x88qo$_0 = coder.readLong();
    this.mActiveCnt_bik1a6$_0 = coder.readLong();
    this.mWalkingCnt_xj4ebn$_0 = coder.readLong();
    this.setPosInMap_vux9f0$(coder.readInt(), coder.readInt());
  };
  function NPC$ICanWalk() {
  }
  NPC$ICanWalk.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ICanWalk',
    interfaces: []
  };
  NPC.prototype.setICanWalk_mkhjrq$ = function (arg) {
    this.mCanWalk_lbchmg$_0 = arg;
  };
  NPC.prototype.update_s8cxhz$ = function (delta) {
    switch (this.state.name) {
      case 'PAUSE':
        this.mPauseCnt_9x88qo$_0 = this.mPauseCnt_9x88qo$_0.subtract(delta);
        if (this.mPauseCnt_9x88qo$_0.toNumber() < 0) {
          this.state = Character$State$WALKING_getInstance();
        }

        break;
      case 'FORCE_MOVE':
      case 'WALKING':
        this.mWalkingCnt_xj4ebn$_0 = this.mWalkingCnt_xj4ebn$_0.add(delta);
        if (this.mWalkingCnt_xj4ebn$_0.toNumber() < 500)
          return;
        this.mWalkingCnt_xj4ebn$_0 = L0;
        if (this.mRandom_1t4gy8$_0.nextInt_za3lpa$(5) === 0) {
          this.mPauseCnt_9x88qo$_0 = Kotlin.Long.fromInt(this.mDelay * 100 | 0);
          this.state = Character$State$PAUSE_getInstance();
        }
         else if (this.mRandom_1t4gy8$_0.nextInt_za3lpa$(5) === 0) {
          var i = this.mRandom_1t4gy8$_0.nextInt_za3lpa$(4);
          var d = Direction$North_getInstance();
          switch (i) {
            case 0:
              d = Direction$North_getInstance();
              break;
            case 1:
              d = Direction$East_getInstance();
              break;
            case 2:
              d = Direction$South_getInstance();
              break;
            case 3:
              d = Direction$West_getInstance();
              break;
          }
          this.direction = d;
          this.walk();
        }
         else {
          this.walk();
        }

        break;
      case 'STOP':
        break;
      case 'ACTIVE':
        this.mActiveCnt_bik1a6$_0 = this.mActiveCnt_bik1a6$_0.add(delta);
        if (this.mActiveCnt_bik1a6$_0.toNumber() > 100) {
          this.mActiveCnt_bik1a6$_0 = L0;
          this.walkStay();
        }

        break;
    }
  };
  NPC.prototype.walk = function () {
    var x = this.posInMap.x;
    var y = this.posInMap.y;
    switch (this.direction.name) {
      case 'North':
        y = y - 1 | 0;
        break;
      case 'East':
        x = x + 1 | 0;
        break;
      case 'South':
        y = y + 1 | 0;
        break;
      case 'West':
        x = x - 1 | 0;
        break;
      default:Kotlin.noWhenBranchMatched();
        break;
    }
    if (ensureNotNull(this.mCanWalk_lbchmg$_0).canWalk_vux9f0$(x, y)) {
      Character.prototype.walk.call(this);
    }
  };
  Object.defineProperty(NPC.prototype, 'isEmpty', {
    get: function () {
      return this.type === 0;
    }
  });
  function NPC$Companion() {
    NPC$Companion_instance = this;
    this.empty = new NPC();
  }
  NPC$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var NPC$Companion_instance = null;
  function NPC$Companion_getInstance() {
    if (NPC$Companion_instance === null) {
      new NPC$Companion();
    }
    return NPC$Companion_instance;
  }
  NPC.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NPC',
    interfaces: [Coder, Character]
  };
  function Player() {
    Player$Companion_getInstance();
    FightingCharacter.call(this);
    this.mImgHead_0 = null;
    this.levelupChain_1ejzlo$_0 = this.levelupChain_1ejzlo$_0;
    this.currentExp = 0;
    this.equipmentsArray = Kotlin.newArray(8, null);
    this.privateLearntMagics = ArrayList_init();
  }
  Object.defineProperty(Player.prototype, 'levelupChain', {
    get: function () {
      if (this.levelupChain_1ejzlo$_0 == null)
        return throwUPAE('levelupChain');
      return this.levelupChain_1ejzlo$_0;
    },
    set: function (levelupChain) {
      this.levelupChain_1ejzlo$_0 = levelupChain;
    }
  });
  Player.prototype.drawHead_2g4tob$ = function (canvas, x, y) {
    if (this.mImgHead_0 != null) {
      ensureNotNull(this.mImgHead_0).draw_tj1hu5$(canvas, 1, x, y);
    }
  };
  Player.prototype.setFrameByState = function () {
    if (this.isAlive) {
      if (this.isSleeping || this.hp < (this.maxHP / 10 | 0)) {
        ensureNotNull(this.fightingSprite).currentFrame = 11;
      }
       else {
        ensureNotNull(this.fightingSprite).currentFrame = 1;
      }
    }
     else {
      ensureNotNull(this.fightingSprite).currentFrame = 12;
    }
  };
  Player.prototype.setData_ir89t6$ = function (buf, offset) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10;
    this.type = buf[offset] & 255;
    this.index = buf[offset + 1 | 0] & 255;
    if (this.index > 0)
      this.mImgHead_0 = (tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$PIC_getInstance(), 1, this.index)) == null || Kotlin.isType(tmp$, ResImage) ? tmp$ : throwCCE();
    this.setWalkingSprite_arnj7f$(new WalkingSprite(this.type, buf[offset + 22 | 0] & 255));
    this.fightingSprite = new FightingSprite(DatLib$ResType$PIC_getInstance(), this.index);
    this.direction = Direction$Companion_getInstance().fromInt_za3lpa$(buf[offset + 2 | 0] & 255);
    this.step = buf[offset + 3 | 0] & 255;
    this.setPosInMap_vux9f0$(buf[offset + 5 | 0] & 255, buf[offset + 6 | 0] & 255);
    var magicChainId = buf[offset + 23 | 0] & 255;
    this.magicChain = DatLib$Companion_getInstance().getMlr_ydzd23$(1, magicChainId, true);
    (tmp$_0 = this.magicChain) != null ? (tmp$_0.learnNum = buf[offset + 9 | 0] & 255) : null;
    this.name = ResBase$Companion_getInstance().getString_ir89t6$(buf, offset + 10 | 0);
    this.level = buf[offset + 32 | 0] & 255;
    this.maxHP = ResBase$Companion_getInstance().get2BytesInt_ir89t6$(buf, offset + 38 | 0);
    this.hp = ResBase$Companion_getInstance().get2BytesInt_ir89t6$(buf, offset + 40 | 0);
    this.maxMP = ResBase$Companion_getInstance().get2BytesInt_ir89t6$(buf, offset + 42 | 0);
    this.mp = ResBase$Companion_getInstance().get2BytesInt_ir89t6$(buf, offset + 44 | 0);
    this.attack = ResBase$Companion_getInstance().get2BytesInt_ir89t6$(buf, offset + 46 | 0);
    this.defend = ResBase$Companion_getInstance().get2BytesInt_ir89t6$(buf, offset + 48 | 0);
    this.speed = buf[offset + 54 | 0] & 255;
    this.lingli = buf[offset + 55 | 0] & 255;
    this.luck = buf[offset + 56 | 0] & 255;
    this.currentExp = ResBase$Companion_getInstance().get2BytesInt_ir89t6$(buf, offset + 50 | 0);
    this.levelupChain = (tmp$_2 = (tmp$_1 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$MLR_getInstance(), 2, this.index, true)) == null || Kotlin.isType(tmp$_1, ResLevelupChain) ? tmp$_1 : throwCCE()) != null ? tmp$_2 : new ResLevelupChain();
    var tmp = buf[offset + 30 | 0] & 255;
    if (tmp !== 0) {
      this.equipmentsArray[0] = (tmp$_3 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$GRS_getInstance(), 6, tmp)) == null || Kotlin.isType(tmp$_3, GoodsEquipment) ? tmp$_3 : throwCCE();
    }
    tmp = buf[offset + 31 | 0] & 255;
    if (tmp !== 0) {
      this.equipmentsArray[1] = (tmp$_4 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$GRS_getInstance(), 6, tmp)) == null || Kotlin.isType(tmp$_4, GoodsEquipment) ? tmp$_4 : throwCCE();
    }
    tmp = buf[offset + 27 | 0] & 255;
    if (tmp !== 0) {
      this.equipmentsArray[2] = (tmp$_5 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$GRS_getInstance(), 5, tmp)) == null || Kotlin.isType(tmp$_5, GoodsEquipment) ? tmp$_5 : throwCCE();
    }
    tmp = buf[offset + 29 | 0] & 255;
    if (tmp !== 0) {
      this.equipmentsArray[3] = (tmp$_6 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$GRS_getInstance(), 3, tmp)) == null || Kotlin.isType(tmp$_6, GoodsEquipment) ? tmp$_6 : throwCCE();
    }
    tmp = buf[offset + 28 | 0] & 255;
    if (tmp !== 0) {
      this.equipmentsArray[4] = (tmp$_7 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$GRS_getInstance(), 7, tmp)) == null || Kotlin.isType(tmp$_7, GoodsEquipment) ? tmp$_7 : throwCCE();
    }
    tmp = buf[offset + 25 | 0] & 255;
    if (tmp !== 0) {
      this.equipmentsArray[5] = (tmp$_8 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$GRS_getInstance(), 2, tmp)) == null || Kotlin.isType(tmp$_8, GoodsEquipment) ? tmp$_8 : throwCCE();
    }
    tmp = buf[offset + 26 | 0] & 255;
    if (tmp !== 0) {
      this.equipmentsArray[6] = (tmp$_9 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$GRS_getInstance(), 4, tmp)) == null || Kotlin.isType(tmp$_9, GoodsEquipment) ? tmp$_9 : throwCCE();
    }
    tmp = buf[offset + 24 | 0] & 255;
    if (tmp !== 0) {
      this.equipmentsArray[7] = (tmp$_10 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$GRS_getInstance(), 1, tmp)) == null || Kotlin.isType(tmp$_10, GoodsEquipment) ? tmp$_10 : throwCCE();
    }
  };
  Player.prototype.getEquipmentByIndex_za3lpa$ = function (index) {
    return this.equipmentsArray[index];
  };
  Player.prototype.getCurrentEquipment_za3lpa$ = function (type) {
    for (var i = 0; i <= 7; i++) {
      if (Player$Companion_getInstance().sEquipTypes[i] === type) {
        return this.equipmentsArray[i];
      }
    }
    return null;
  };
  Player.prototype.hasEquipt_vux9f0$ = function (type, id) {
    var tmp$;
    if (type === 6) {
      var $receiver = [this.equipmentsArray[0], this.equipmentsArray[1]];
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
        var element = $receiver[tmp$_0];
        var tmp$_1;
        return (tmp$_1 = element != null ? element.type === type && element.index === id : null) != null ? tmp$_1 : false;
      }
      return true;
    }
    for (var i = 2; i <= 7; i++) {
      if ((tmp$ = this.equipmentsArray[i]) != null) {
        if (tmp$.type === type && tmp$.index === id) {
          return true;
        }
      }
    }
    return false;
  };
  Player.prototype.putOnAt_0 = function (goods, index) {
    if (this.equipmentsArray[index] == null) {
      goods.putOn_xa4yhy$(this);
      this.equipmentsArray[index] = goods;
    }
  };
  Player.prototype.putOn_sp4jd8$ = function (goods, at) {
    if (at === void 0)
      at = null;
    if (at != null) {
      this.putOnAt_0(goods, at);
      return;
    }
    for (var i = 0; i <= 7; i++) {
      if (goods.type === Player$Companion_getInstance().sEquipTypes[i]) {
        if (this.equipmentsArray[i] == null) {
          goods.putOn_xa4yhy$(this);
          this.equipmentsArray[i] = goods;
          break;
        }
      }
    }
  };
  Player.prototype.takeOff_6sxnot$ = function (type, index) {
    if (index === void 0)
      index = null;
    var tmp$;
    if (index != null) {
      this.takeOffByIndex_0(index);
      return;
    }
    for (var i = 0; i <= 7; i++) {
      if (type === Player$Companion_getInstance().sEquipTypes[i]) {
        if (this.equipmentsArray[i] != null) {
          (tmp$ = this.equipmentsArray[i]) != null ? (tmp$.takeOff_xa4yhy$(this), Unit) : null;
          this.equipmentsArray[i] = null;
          break;
        }
      }
    }
  };
  Player.prototype.takeOffByIndex_0 = function (index) {
    var tmp$;
    (tmp$ = this.equipmentsArray[index]) != null ? (tmp$.takeOff_xa4yhy$(this), Unit) : null;
    this.equipmentsArray[index] = null;
  };
  Player.prototype.hasSpace_za3lpa$ = function (type) {
    if (type === 6) {
      return this.equipmentsArray[0] == null || this.equipmentsArray[1] == null;
    }
     else {
      for (var i = 0; i <= 7; i++) {
        if (Player$Companion_getInstance().sEquipTypes[i] === type && this.equipmentsArray[i] == null) {
          return true;
        }
      }
    }
    return false;
  };
  Player.prototype.drawState_86va19$ = function (canvas, page) {
    canvas.drawLine_x3aj6j$(37, 10, 37, 87, Util_getInstance().sBlackPaint);
    if (page === 0) {
      TextRender_getInstance().drawText_kkuqvh$(canvas, '\u7B49\u7EA7   ' + this.level, 41, 4);
      TextRender_getInstance().drawText_kkuqvh$(canvas, '\u751F\u547D   ' + this.hp + '/' + this.maxHP, 41, 23);
      TextRender_getInstance().drawText_kkuqvh$(canvas, '\u771F\u6C14   ' + this.mp + '/' + this.maxMP, 41, 41);
      TextRender_getInstance().drawText_kkuqvh$(canvas, '\u653B\u51FB\u529B ' + this.attack, 41, 59);
      TextRender_getInstance().drawText_kkuqvh$(canvas, '\u9632\u5FA1\u529B ' + this.defend, 41, 77);
    }
     else if (page === 1) {
      TextRender_getInstance().drawText_kkuqvh$(canvas, '\u7ECF\u9A8C\u503C', 41, 4);
      var w = Util_getInstance().drawSmallNum_tj1hu5$(canvas, this.currentExp, 97, 4);
      TextRender_getInstance().drawText_kkuqvh$(canvas, '/', 97 + w + 2 | 0, 4);
      Util_getInstance().drawSmallNum_tj1hu5$(canvas, this.levelupChain.getNextLevelExp_za3lpa$(this.level), 97 + w + 9 | 0, 10);
      TextRender_getInstance().drawText_kkuqvh$(canvas, '\u8EAB\u6CD5   ' + this.speed, 41, 23);
      TextRender_getInstance().drawText_kkuqvh$(canvas, '\u7075\u529B   ' + this.lingli, 41, 41);
      TextRender_getInstance().drawText_kkuqvh$(canvas, '\u5E78\u8FD0   ' + this.luck, 41, 59);
      var sb = new StringBuilder('\u514D\u75AB   ');
      var tmp = StringBuilder_init();
      if (this.hasBuff_za3lpa$(FightingCharacter$Companion_getInstance().BUFF_MASK_DU)) {
        tmp.append_s8itvh$(27602);
      }
      if (this.hasBuff_za3lpa$(FightingCharacter$Companion_getInstance().BUFF_MASK_LUAN)) {
        tmp.append_s8itvh$(20081);
      }
      if (this.hasBuff_za3lpa$(FightingCharacter$Companion_getInstance().BUFF_MASK_FENG)) {
        tmp.append_s8itvh$(23553);
      }
      if (this.hasBuff_za3lpa$(FightingCharacter$Companion_getInstance().BUFF_MASK_MIAN)) {
        tmp.append_s8itvh$(30496);
      }
      if (tmp.length > 0) {
        sb.append_gw00v9$(tmp);
      }
       else {
        sb.append_s8itvh$(26080);
      }
      TextRender_getInstance().drawText_kkuqvh$(canvas, sb.toString(), 41, 77);
    }
  };
  Player.prototype.decode_setnfj$ = function (coder) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    this.type = coder.readInt();
    this.index = coder.readInt();
    if (this.index > 0)
      this.mImgHead_0 = (tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$PIC_getInstance(), 1, this.index)) == null || Kotlin.isType(tmp$, ResImage) ? tmp$ : throwCCE();
    this.levelupChain = (tmp$_1 = (tmp$_0 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$MLR_getInstance(), 2, this.index, true)) == null || Kotlin.isType(tmp$_0, ResLevelupChain) ? tmp$_0 : throwCCE()) != null ? tmp$_1 : new ResLevelupChain();
    this.setWalkingSprite_arnj7f$(new WalkingSprite(this.type, coder.readInt()));
    this.fightingSprite = new FightingSprite(DatLib$ResType$PIC_getInstance(), this.index);
    this.direction = Direction$Companion_getInstance().fromInt_za3lpa$(coder.readInt());
    this.step = coder.readInt();
    this.setPosInMap_vux9f0$(coder.readInt(), coder.readInt());
    this.magicChain = DatLib$Companion_getInstance().getMlr_ydzd23$(1, coder.readInt(), true);
    (tmp$_2 = this.magicChain) != null ? (tmp$_2.learnNum = coder.readInt()) : null;
    this.name = coder.readString();
    this.level = coder.readInt();
    this.maxHP = coder.readInt();
    this.hp = coder.readInt();
    this.maxMP = coder.readInt();
    this.mp = coder.readInt();
    this.attack = coder.readInt();
    this.defend = coder.readInt();
    this.speed = coder.readInt();
    this.lingli = coder.readInt();
    this.luck = coder.readInt();
    this.currentExp = coder.readInt();
    for (var i = 0; i <= 7; i++) {
      var type = coder.readInt();
      var index = coder.readInt();
      if (type !== 0 && index !== 0) {
        this.equipmentsArray[i] = (tmp$_3 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$GRS_getInstance(), type, index)) == null || Kotlin.isType(tmp$_3, GoodsEquipment) ? tmp$_3 : throwCCE();
      }
    }
    var size = coder.readInt();
    for (var i_0 = 0; i_0 < size; i_0++) {
      var type_0 = coder.readInt();
      var index_0 = coder.readInt();
      var magic = DatLib$Companion_getInstance().getMrs_vux9f0$(type_0, index_0);
      this.privateLearntMagics.add_11rb$(magic);
    }
    if (coder.version >= 3) {
      this.buff.decode_setnfj$(coder);
      this.debuff.decode_setnfj$(coder);
      this.atbuff.decode_setnfj$(coder);
    }
  };
  Player.prototype.encode_vcd9jg$ = function (out) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    out.writeInt_za3lpa$(this.type);
    out.writeInt_za3lpa$(this.index);
    out.writeInt_za3lpa$(this.walkingSpriteId);
    out.writeInt_za3lpa$(this.direction.v);
    out.writeInt_za3lpa$(this.step);
    out.writeInt_za3lpa$(this.posInMap.x);
    out.writeInt_za3lpa$(this.posInMap.y);
    out.writeInt_za3lpa$((tmp$_0 = (tmp$ = this.magicChain) != null ? tmp$.index : null) != null ? tmp$_0 : 0);
    if ((tmp$_1 = this.magicChain) != null) {
      out.writeInt_za3lpa$(tmp$_1.learnNum);
    }
    out.writeString_61zpoe$(this.name);
    out.writeInt_za3lpa$(this.level);
    out.writeInt_za3lpa$(this.maxHP);
    out.writeInt_za3lpa$(this.hp);
    out.writeInt_za3lpa$(this.maxMP);
    out.writeInt_za3lpa$(this.mp);
    out.writeInt_za3lpa$(this.attack);
    out.writeInt_za3lpa$(this.defend);
    out.writeInt_za3lpa$(this.speed);
    out.writeInt_za3lpa$(this.lingli);
    out.writeInt_za3lpa$(this.luck);
    out.writeInt_za3lpa$(this.currentExp);
    for (var i = 0; i <= 7; i++) {
      var tmp$_3;
      if ((tmp$_2 = this.equipmentsArray[i]) != null) {
        out.writeInt_za3lpa$(tmp$_2.type);
        out.writeInt_za3lpa$(tmp$_2.index);
        tmp$_3 = Unit;
      }
       else
        tmp$_3 = null;
      if (tmp$_3 == null) {
        out.writeInt_za3lpa$(0);
        out.writeInt_za3lpa$(0);
      }
    }
    out.writeInt_za3lpa$(this.privateLearntMagics.size);
    var tmp$_4;
    tmp$_4 = this.privateLearntMagics.iterator();
    while (tmp$_4.hasNext()) {
      var element = tmp$_4.next();
      out.writeInt_za3lpa$(element.type);
      out.writeInt_za3lpa$(element.index);
    }
    this.buff.encode_vcd9jg$(out);
    this.debuff.encode_vcd9jg$(out);
    this.atbuff.encode_vcd9jg$(out);
  };
  Player.prototype.setLevel_za3lpa$ = function (level) {
    var b = this.levelupChain.maxLevel;
    this.level = Math_0.min(level, b);
  };
  Player.prototype.getAllMagics = function () {
    return plus(this.privateLearntMagics, FightingCharacter.prototype.getAllMagics.call(this));
  };
  Player.prototype.learnMagic_3fncnk$ = function (magic) {
    this.privateLearntMagics.add_11rb$(magic);
  };
  Player.prototype.levelUp_za3lpa$ = function (to) {
    var tmp$;
    if (to <= this.level)
      return;
    var cl = this.level;
    var c = this.levelupChain;
    var p = this;
    p.level = to;
    p.maxHP = p.maxHP + c.getMaxHP_za3lpa$(to) - c.getMaxHP_za3lpa$(cl) | 0;
    p.hp = p.maxHP;
    p.maxMP = p.maxMP + c.getMaxMP_za3lpa$(to) - c.getMaxMP_za3lpa$(cl) | 0;
    p.mp = p.maxMP;
    p.attack = p.attack + c.getAttack_za3lpa$(to) - c.getAttack_za3lpa$(cl) | 0;
    p.defend = p.defend + c.getDefend_za3lpa$(to) - c.getDefend_za3lpa$(cl) | 0;
    (tmp$ = p.magicChain) != null ? (tmp$.learnNum = c.getLearnMagicNum_za3lpa$(to)) : null;
    p.speed = p.speed + c.getSpeed_za3lpa$(to) - c.getSpeed_za3lpa$(cl) | 0;
    p.lingli = p.lingli + c.getLingli_za3lpa$(to) - c.getLingli_za3lpa$(cl) | 0;
    p.luck = p.luck + c.getLuck_za3lpa$(to) - c.getLuck_za3lpa$(cl) | 0;
  };
  function Player$Companion() {
    Player$Companion_instance = this;
    this.sEquipTypes = new Int32Array([6, 6, 5, 3, 7, 2, 4, 1]);
    this.sGoodsList = new GoodsManage();
    this.sMoney = 0;
  }
  Player$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Player$Companion_instance = null;
  function Player$Companion_getInstance() {
    if (Player$Companion_instance === null) {
      new Player$Companion();
    }
    return Player$Companion_instance;
  }
  Player.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Player',
    interfaces: [Coder, FightingCharacter]
  };
  function ResLevelupChain() {
    ResLevelupChain$Companion_getInstance();
    ResBase.call(this);
    this.maxLevel_vhqkyz$_0 = 0;
    this.mLevelData_0 = new Int8Array(Kotlin.imul(this.maxLevel, ResLevelupChain$Companion_getInstance().LEVEL_BYTES_0));
  }
  Object.defineProperty(ResLevelupChain.prototype, 'maxLevel', {
    get: function () {
      return this.maxLevel_vhqkyz$_0;
    },
    set: function (maxLevel) {
      this.maxLevel_vhqkyz$_0 = maxLevel;
    }
  });
  ResLevelupChain.prototype.setData_ir89t6$ = function (buf, offset) {
    this.type = buf[offset] & 255;
    this.index = buf[offset + 1 | 0] & 255;
    this.maxLevel = buf[offset + 2 | 0] & 255;
    this.mLevelData_0 = new Int8Array(Kotlin.imul(this.maxLevel, ResLevelupChain$Companion_getInstance().LEVEL_BYTES_0));
    System_getInstance().arraycopy_nlwz52$(buf, offset + 4 | 0, this.mLevelData_0, 0, this.mLevelData_0.length);
  };
  ResLevelupChain.prototype.getMaxHP_za3lpa$ = function (level) {
    var tmp$;
    if (level <= this.maxLevel) {
      tmp$ = ResBase$Companion_getInstance().get2BytesInt_ir89t6$(this.mLevelData_0, Kotlin.imul(level, ResLevelupChain$Companion_getInstance().LEVEL_BYTES_0) - ResLevelupChain$Companion_getInstance().LEVEL_BYTES_0 | 0);
    }
     else
      tmp$ = 0;
    return tmp$;
  };
  ResLevelupChain.prototype.getHP_za3lpa$ = function (level) {
    var tmp$;
    if (level <= this.maxLevel) {
      tmp$ = ResBase$Companion_getInstance().get2BytesInt_ir89t6$(this.mLevelData_0, 2 + Kotlin.imul(level, ResLevelupChain$Companion_getInstance().LEVEL_BYTES_0) - ResLevelupChain$Companion_getInstance().LEVEL_BYTES_0 | 0);
    }
     else
      tmp$ = 0;
    return tmp$;
  };
  ResLevelupChain.prototype.getMaxMP_za3lpa$ = function (l) {
    var tmp$;
    if (l <= this.maxLevel) {
      tmp$ = ResBase$Companion_getInstance().get2BytesInt_ir89t6$(this.mLevelData_0, 4 + Kotlin.imul(l, ResLevelupChain$Companion_getInstance().LEVEL_BYTES_0) - ResLevelupChain$Companion_getInstance().LEVEL_BYTES_0 | 0);
    }
     else
      tmp$ = 0;
    return tmp$;
  };
  ResLevelupChain.prototype.getMP_za3lpa$ = function (l) {
    var tmp$;
    if (l <= this.maxLevel) {
      tmp$ = ResBase$Companion_getInstance().get2BytesInt_ir89t6$(this.mLevelData_0, 6 + Kotlin.imul(l, ResLevelupChain$Companion_getInstance().LEVEL_BYTES_0) - ResLevelupChain$Companion_getInstance().LEVEL_BYTES_0 | 0);
    }
     else
      tmp$ = 0;
    return tmp$;
  };
  ResLevelupChain.prototype.getAttack_za3lpa$ = function (l) {
    var tmp$;
    if (l <= this.maxLevel) {
      tmp$ = ResBase$Companion_getInstance().get2BytesInt_ir89t6$(this.mLevelData_0, 8 + Kotlin.imul(l, ResLevelupChain$Companion_getInstance().LEVEL_BYTES_0) - ResLevelupChain$Companion_getInstance().LEVEL_BYTES_0 | 0);
    }
     else
      tmp$ = 0;
    return tmp$;
  };
  ResLevelupChain.prototype.getDefend_za3lpa$ = function (l) {
    var tmp$;
    if (l <= this.maxLevel) {
      tmp$ = ResBase$Companion_getInstance().get2BytesInt_ir89t6$(this.mLevelData_0, 10 + Kotlin.imul(l, ResLevelupChain$Companion_getInstance().LEVEL_BYTES_0) - ResLevelupChain$Companion_getInstance().LEVEL_BYTES_0 | 0);
    }
     else
      tmp$ = 0;
    return tmp$;
  };
  ResLevelupChain.prototype.getNextLevelExp_za3lpa$ = function (l) {
    var tmp$;
    if (l <= this.maxLevel) {
      tmp$ = ResBase$Companion_getInstance().get2BytesInt_ir89t6$(this.mLevelData_0, 14 + Kotlin.imul(l, ResLevelupChain$Companion_getInstance().LEVEL_BYTES_0) - ResLevelupChain$Companion_getInstance().LEVEL_BYTES_0 | 0);
    }
     else
      tmp$ = 0;
    return tmp$;
  };
  ResLevelupChain.prototype.getSpeed_za3lpa$ = function (l) {
    var tmp$;
    if (l <= this.maxLevel) {
      tmp$ = this.mLevelData_0[Kotlin.imul(l, ResLevelupChain$Companion_getInstance().LEVEL_BYTES_0) - ResLevelupChain$Companion_getInstance().LEVEL_BYTES_0 + 16 | 0] & 255;
    }
     else
      tmp$ = 0;
    return tmp$;
  };
  ResLevelupChain.prototype.getLingli_za3lpa$ = function (l) {
    var tmp$;
    if (l <= this.maxLevel) {
      tmp$ = this.mLevelData_0[Kotlin.imul(l, ResLevelupChain$Companion_getInstance().LEVEL_BYTES_0) - ResLevelupChain$Companion_getInstance().LEVEL_BYTES_0 + 17 | 0] & 255;
    }
     else
      tmp$ = 0;
    return tmp$;
  };
  ResLevelupChain.prototype.getLuck_za3lpa$ = function (l) {
    var tmp$;
    if (l <= this.maxLevel) {
      tmp$ = this.mLevelData_0[Kotlin.imul(l, ResLevelupChain$Companion_getInstance().LEVEL_BYTES_0) - ResLevelupChain$Companion_getInstance().LEVEL_BYTES_0 + 18 | 0] & 255;
    }
     else
      tmp$ = 0;
    return tmp$;
  };
  ResLevelupChain.prototype.getLearnMagicNum_za3lpa$ = function (l) {
    var tmp$;
    if (l <= this.maxLevel) {
      tmp$ = this.mLevelData_0[Kotlin.imul(l, ResLevelupChain$Companion_getInstance().LEVEL_BYTES_0) - ResLevelupChain$Companion_getInstance().LEVEL_BYTES_0 + 19 | 0] & 255;
    }
     else
      tmp$ = 0;
    return tmp$;
  };
  function ResLevelupChain$Companion() {
    ResLevelupChain$Companion_instance = this;
    this.LEVEL_BYTES_0 = 20;
  }
  ResLevelupChain$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ResLevelupChain$Companion_instance = null;
  function ResLevelupChain$Companion_getInstance() {
    if (ResLevelupChain$Companion_instance === null) {
      new ResLevelupChain$Companion();
    }
    return ResLevelupChain$Companion_instance;
  }
  ResLevelupChain.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResLevelupChain',
    interfaces: [ResBase]
  };
  function SceneObj() {
    NPC.call(this);
  }
  SceneObj.prototype.setData_ir89t6$ = function (buf, offset) {
    this.type = buf[offset] & 255;
    this.index = buf[offset + 1 | 0] & 255;
    this.state = Character$State$Companion_getInstance().fromInt_za3lpa$(buf[offset + 4 | 0] & 255);
    this.name = ResBase$Companion_getInstance().getString_ir89t6$(buf, offset + 9 | 0);
    this.mDelay = buf[offset + 21 | 0] & 255;
    this.setWalkingSprite_arnj7f$(new WalkingSprite(4, buf[offset + 22 | 0] & 255));
    this.direction = Direction$North_getInstance();
    this.step = buf[offset + 3 | 0] & 255;
  };
  SceneObj.prototype.encode_vcd9jg$ = function (out) {
    out.writeInt_za3lpa$(this.type);
    out.writeInt_za3lpa$(this.index);
    out.writeInt_za3lpa$(this.state.v);
    out.writeString_61zpoe$(this.name);
    out.writeInt_za3lpa$(this.mDelay);
    out.writeInt_za3lpa$(this.walkingSpriteId);
    out.writeInt_za3lpa$(this.direction.v);
    out.writeInt_za3lpa$(this.step);
    out.writeInt_za3lpa$(this.posInMap.x);
    out.writeInt_za3lpa$(this.posInMap.y);
  };
  SceneObj.prototype.decode_setnfj$ = function (coder) {
    this.type = coder.readInt();
    this.index = coder.readInt();
    this.state = Character$State$Companion_getInstance().fromInt_za3lpa$(coder.readInt());
    this.name = coder.readString();
    this.mDelay = coder.readInt();
    this.setWalkingSprite_arnj7f$(new WalkingSprite(4, coder.readInt()));
    this.direction = Direction$Companion_getInstance().fromInt_za3lpa$(coder.readInt());
    this.step = coder.readInt();
    this.setPosInMap_vux9f0$(coder.readInt(), coder.readInt());
  };
  SceneObj.prototype.walk = function () {
  };
  SceneObj.prototype.walk_rtfsey$ = function (d) {
  };
  SceneObj.prototype.walkStay_rtfsey$ = function (d) {
  };
  SceneObj.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SceneObj',
    interfaces: [NPC]
  };
  function WalkingSprite(type, id) {
    WalkingSprite$Companion_getInstance();
    this.resImage_0 = ensureNotNull(DatLib$Companion_getInstance().getACP_ydzd23$(type, id));
    this.offset_0 = 1;
    this.step_uf76it$_0 = 0;
  }
  Object.defineProperty(WalkingSprite.prototype, 'id', {
    get: function () {
      return this.resImage_0.index;
    }
  });
  Object.defineProperty(WalkingSprite.prototype, 'step', {
    get: function () {
      return this.step_uf76it$_0;
    },
    set: function (step) {
      this.step_uf76it$_0 = step % 4;
    }
  });
  WalkingSprite.prototype.setDirection_rtfsey$ = function (d) {
    var tmp$;
    switch (d.name) {
      case 'North':
        tmp$ = 1;
        break;
      case 'East':
        tmp$ = 4;
        break;
      case 'South':
        tmp$ = 7;
        break;
      case 'West':
        tmp$ = 10;
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    this.offset_0 = tmp$;
  };
  WalkingSprite.prototype.walk_rtfsey$ = function (d) {
    this.setDirection_rtfsey$(d);
    this.walk();
  };
  WalkingSprite.prototype.walk = function () {
    this.step = this.step + 1 | 0;
    this.step = this.step % 4;
  };
  WalkingSprite.prototype.draw_2g4tob$ = function (canvas, x, y) {
    var tmpY = y;
    tmpY = tmpY + 16 - this.resImage_0.height | 0;
    if ((x + this.resImage_0.width | 0) > 0 && x < 144 && (tmpY + this.resImage_0.height | 0) > 0 && tmpY < 96) {
      this.resImage_0.draw_tj1hu5$(canvas, this.offset_0 + WalkingSprite$Companion_getInstance().OFFSET_0[this.step] | 0, x + Global_getInstance().MAP_LEFT_OFFSET | 0, tmpY);
    }
  };
  function WalkingSprite$Companion() {
    WalkingSprite$Companion_instance = this;
    this.OFFSET_0 = new Int32Array([0, 1, 2, 1]);
  }
  WalkingSprite$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var WalkingSprite$Companion_instance = null;
  function WalkingSprite$Companion_getInstance() {
    if (WalkingSprite$Companion_instance === null) {
      new WalkingSprite$Companion();
    }
    return WalkingSprite$Companion_instance;
  }
  WalkingSprite.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WalkingSprite',
    interfaces: []
  };
  function ActionExecutor(mActionQueue, mCombat) {
    this.mActionQueue_0 = mActionQueue;
    this.mCombat_0 = mCombat;
    this.mCurrentAction_0 = null;
    this.mIsNewAction_0 = true;
    this.postAction_0 = null;
  }
  ActionExecutor.prototype.reset = function () {
    this.mCurrentAction_0 = null;
    this.mIsNewAction_0 = true;
  };
  ActionExecutor.prototype.update_s8cxhz$ = function (delta) {
    var tmp$;
    if ((tmp$ = this.postAction_0) != null) {
      if (tmp$.update_s8cxhz$(delta)) {
        return true;
      }
      this.postAction_0 = null;
      this.mCurrentAction_0 = this.mActionQueue_0.pop();
      if (this.mCurrentAction_0 == null) {
        return false;
      }
      this.mIsNewAction_0 = true;
      return true;
    }
    if (this.mCurrentAction_0 == null) {
      this.mCurrentAction_0 = this.mActionQueue_0.pop();
      if (this.mCurrentAction_0 == null) {
        return false;
      }
      this.mIsNewAction_0 = true;
    }
    if (this.mIsNewAction_0) {
      this.prepareAction_0();
      return true;
    }
    if (!ensureNotNull(this.mCurrentAction_0).update_s8cxhz$(delta)) {
      ensureNotNull(this.mCurrentAction_0).postExecute();
      this.postAction_1();
    }
    return true;
  };
  ActionExecutor.prototype.postAction_1 = function () {
    this.postAction_0 = ensureNotNull(this.mCurrentAction_0).postAction();
    ensureNotNull(this.mCurrentAction_0).decay();
    this.mCurrentAction_0 = null;
    this.mIsNewAction_0 = false;
  };
  ActionExecutor.prototype.prepareAction_0 = function () {
    var tmp$, tmp$_0, tmp$_1;
    if (!ensureNotNull(this.mCurrentAction_0).isAttackerActionable) {
      ensureNotNull(this.mCurrentAction_0).cancel();
      this.postAction_1();
      return;
    }
    if (ensureNotNull(this.mCurrentAction_0).isAttackerConfusing) {
      ensureNotNull(this.mCurrentAction_0).cancel();
      this.mCurrentAction_0 = new ActionSelfHurt(ensureNotNull(ensureNotNull(this.mCurrentAction_0).mAttacker));
    }
    if (ensureNotNull(this.mCurrentAction_0).isMagic && ensureNotNull(this.mCurrentAction_0).isAttackerSealed) {
      ensureNotNull(this.mCurrentAction_0).cancel();
      this.mCurrentAction_0 = ensureNotNull(this.mCurrentAction_0).rollbackToPhysical();
    }
    if (!ensureNotNull(this.mCurrentAction_0).isTargetAlive) {
      if (!ensureNotNull(this.mCurrentAction_0).isSingleTarget) {
        this.mCurrentAction_0 = null;
      }
       else {
        if (ensureNotNull(this.mCurrentAction_0).targetIsMonster()) {
          tmp$ = this.mCombat_0.firstAliveMonster;
        }
         else {
          tmp$ = this.mCombat_0.randomAlivePlayer;
        }
        var newTarget = tmp$;
        if (newTarget == null) {
          this.postAction_1();
          return;
        }
         else if (!Kotlin.isType(this.mCurrentAction_0, ActionFlee)) {
          (Kotlin.isType(tmp$_0 = this.mCurrentAction_0, ActionSingleTarget) ? tmp$_0 : throwCCE()).setTarget_qpjxya$(newTarget);
        }
      }
    }
    (tmp$_1 = this.mCurrentAction_0) != null ? (tmp$_1.preproccess(), Unit) : null;
    this.mIsNewAction_0 = false;
  };
  ActionExecutor.prototype.draw_9in0vv$ = function (canvas) {
    var tmp$, tmp$_0;
    if ((tmp$ = this.postAction_0) != null) {
      tmp$.draw_9in0vv$(canvas);
      return;
    }
    (tmp$_0 = this.mCurrentAction_0) != null ? (tmp$_0.draw_9in0vv$(canvas), Unit) : null;
  };
  ActionExecutor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionExecutor',
    interfaces: []
  };
  function Combat(parent) {
    Combat$Companion_getInstance();
    this.parent_4ej3zv$_0 = parent;
    this.mScrb_0 = 0;
    this.mScrl_0 = 0;
    this.mScrR_0 = 0;
    this.mCombatState_0 = Combat$CombatState$SelectAction_getInstance();
    this.mIsAutoAttack_0 = false;
    this.mActionQueue_0 = ArrayQueue$Companion_getInstance().create_287e2$();
    this.mActionExecutor_0 = new ActionExecutor(this.mActionQueue_0, this);
    this.mCombatUI_0 = new CombatUI(this, this, 0);
    this.mMonsterType_0 = new Int32Array([]);
    this.mMonsterList_0 = ArrayList_init();
    this.mPlayerList_0 = emptyList();
    this.mCurSelActionPlayerIndex_0 = 0;
    this.mRoundCnt_0 = 0;
    this.mHasEventExed_0 = false;
    this.mMaxRound_0 = 0;
    this.mEventRound_0 = null;
    this.mEventNum_0 = null;
    this.mLossAddr_0 = 0;
    this.mWinAddr_0 = 0;
    var tmp$;
    this.mFlyPeach_0 = Kotlin.isType(tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$SRS_getInstance(), 1, 249), ResSrs) ? tmp$ : throwCCE();
    this.mIsWin_0 = false;
    this.mBackground_8be2vx$ = Bitmap_init(0, 0);
    this.mWinMoney_0 = 0;
    this.mWinExp_0 = 0;
    this.mCombatSuccess_0 = null;
    this.mTimeCnt_0 = L0;
  }
  Object.defineProperty(Combat.prototype, 'parent', {
    get: function () {
      return this.parent_4ej3zv$_0;
    }
  });
  var Collection = Kotlin.kotlin.collections.Collection;
  Object.defineProperty(Combat.prototype, 'isAnyPlayerAlive_0', {
    get: function () {
      var $receiver = this.mPlayerList_0;
      var any$result;
      any$break: do {
        var tmp$;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          any$result = false;
          break any$break;
        }
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (element.hp > 0) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      }
       while (false);
      return any$result;
    }
  });
  Object.defineProperty(Combat.prototype, 'isAllMonsterDead_0', {
    get: function () {
      return this.firstAliveMonster == null;
    }
  });
  Object.defineProperty(Combat.prototype, 'nextAlivePlayerIndex_0', {
    get: function () {
      var tmp$;
      var $receiver = until(this.mCurSelActionPlayerIndex_0 + 1 | 0, this.mPlayerList_0.size);
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$_0;
        tmp$_0 = $receiver.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          if (this.mPlayerList_0.get_za3lpa$(element).isAlive) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }
        }
        firstOrNull$result = null;
      }
       while (false);
      return (tmp$ = firstOrNull$result) != null ? tmp$ : -1;
    }
  });
  Object.defineProperty(Combat.prototype, 'preAlivePlayerIndex_0', {
    get: function () {
      var tmp$;
      var $receiver = downTo(this.mCurSelActionPlayerIndex_0 - 1 | 0, 0);
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$_0;
        tmp$_0 = $receiver.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          if (this.mPlayerList_0.get_za3lpa$(element).isAlive) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }
        }
        firstOrNull$result = null;
      }
       while (false);
      return (tmp$ = firstOrNull$result) != null ? tmp$ : -1;
    }
  });
  Object.defineProperty(Combat.prototype, 'firstAlivePlayerIndex_0', {
    get: function () {
      var tmp$;
      var $receiver = get_indices(this.mPlayerList_0);
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$_0;
        tmp$_0 = $receiver.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          if (this.mPlayerList_0.get_za3lpa$(element).isAlive) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }
        }
        firstOrNull$result = null;
      }
       while (false);
      return (tmp$ = firstOrNull$result) != null ? tmp$ : -1;
    }
  });
  Object.defineProperty(Combat.prototype, 'firstAliveMonster', {
    get: function () {
      var $receiver = this.mMonsterList_0;
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (element.isAlive) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }
        }
        firstOrNull$result = null;
      }
       while (false);
      return firstOrNull$result;
    }
  });
  Object.defineProperty(Combat.prototype, 'randomAlivePlayer', {
    get: function () {
      var tmp$, tmp$_0, tmp$_1;
      var cnt = 0;
      tmp$ = this.mPlayerList_0.iterator();
      while (tmp$.hasNext()) {
        var p = tmp$.next();
        if (p.isAlive) {
          cnt = cnt + 1 | 0;
        }
      }
      if (cnt === 0)
        return null;
      var arr = Kotlin.newArray(cnt, null);
      var i = 0;
      tmp$_0 = this.mPlayerList_0.iterator();
      while (tmp$_0.hasNext()) {
        var p_0 = tmp$_0.next();
        if (p_0.isAlive) {
          arr[tmp$_1 = i, i = tmp$_1 + 1 | 0, tmp$_1] = p_0;
        }
      }
      return arr[Combat$Companion_getInstance().sRandom_0.nextInt_za3lpa$(cnt)];
    }
  });
  function Combat$CombatState(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Combat$CombatState_initFields() {
    Combat$CombatState_initFields = function () {
    };
    Combat$CombatState$SelectAction_instance = new Combat$CombatState('SelectAction', 0);
    Combat$CombatState$PerformAction_instance = new Combat$CombatState('PerformAction', 1);
    Combat$CombatState$Win_instance = new Combat$CombatState('Win', 2);
    Combat$CombatState$Loss_instance = new Combat$CombatState('Loss', 3);
    Combat$CombatState$Exit_instance = new Combat$CombatState('Exit', 4);
  }
  var Combat$CombatState$SelectAction_instance;
  function Combat$CombatState$SelectAction_getInstance() {
    Combat$CombatState_initFields();
    return Combat$CombatState$SelectAction_instance;
  }
  var Combat$CombatState$PerformAction_instance;
  function Combat$CombatState$PerformAction_getInstance() {
    Combat$CombatState_initFields();
    return Combat$CombatState$PerformAction_instance;
  }
  var Combat$CombatState$Win_instance;
  function Combat$CombatState$Win_getInstance() {
    Combat$CombatState_initFields();
    return Combat$CombatState$Win_instance;
  }
  var Combat$CombatState$Loss_instance;
  function Combat$CombatState$Loss_getInstance() {
    Combat$CombatState_initFields();
    return Combat$CombatState$Loss_instance;
  }
  var Combat$CombatState$Exit_instance;
  function Combat$CombatState$Exit_getInstance() {
    Combat$CombatState_initFields();
    return Combat$CombatState$Exit_instance;
  }
  Combat$CombatState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CombatState',
    interfaces: [Enum]
  };
  function Combat$CombatState$values() {
    return [Combat$CombatState$SelectAction_getInstance(), Combat$CombatState$PerformAction_getInstance(), Combat$CombatState$Win_getInstance(), Combat$CombatState$Loss_getInstance(), Combat$CombatState$Exit_getInstance()];
  }
  Combat$CombatState.values = Combat$CombatState$values;
  function Combat$CombatState$valueOf(name) {
    switch (name) {
      case 'SelectAction':
        return Combat$CombatState$SelectAction_getInstance();
      case 'PerformAction':
        return Combat$CombatState$PerformAction_getInstance();
      case 'Win':
        return Combat$CombatState$Win_getInstance();
      case 'Loss':
        return Combat$CombatState$Loss_getInstance();
      case 'Exit':
        return Combat$CombatState$Exit_getInstance();
      default:throwISE('No enum constant fmj.combat.Combat.CombatState.' + name);
    }
  }
  Combat$CombatState.valueOf_61zpoe$ = Combat$CombatState$valueOf;
  Combat.prototype.createBackgroundBitmap_0 = function (scrb, scrl, scrr) {
    var tmp$, tmp$_0, tmp$_1;
    this.mBackground_8be2vx$ = Bitmap$Companion_getInstance().createBitmap_vux9f0$(160, 96);
    var canvas = new Canvas(this.mBackground_8be2vx$);
    var img;
    img = Kotlin.isType(tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$PIC_getInstance(), 4, scrb), ResImage) ? tmp$ : throwCCE();
    img.draw_tj1hu5$(canvas, 1, 0, 0);
    img = Kotlin.isType(tmp$_0 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$PIC_getInstance(), 4, scrl), ResImage) ? tmp$_0 : throwCCE();
    img.draw_tj1hu5$(canvas, 1, 0, 96 - img.height | 0);
    img = Kotlin.isType(tmp$_1 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$PIC_getInstance(), 4, scrr), ResImage) ? tmp$_1 : throwCCE();
    img.draw_tj1hu5$(canvas, 1, 160 - img.width | 0, 0);
    this.mScrb_0 = scrb;
    this.mScrl_0 = scrl;
    this.mScrR_0 = scrr;
  };
  Combat.prototype.prepareForNewCombat_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.mActionQueue_0.clear();
    this.mIsAutoAttack_0 = false;
    this.mCombatState_0 = Combat$CombatState$SelectAction_getInstance();
    this.mCurSelActionPlayerIndex_0 = 0;
    this.mPlayerList_0 = this.game.playerList;
    this.mCombatUI_0.reset();
    this.mCombatUI_0.setCurrentPlayerIndex_za3lpa$(0);
    this.mCombatUI_0.setMonsterList_kg2ssq$(this.mMonsterList_0);
    this.mCombatUI_0.setPlayerList_51hka1$(this.mPlayerList_0);
    var tmp$_3;
    tmp$_3 = this.mPlayerList_0.iterator();
    while (tmp$_3.hasNext()) {
      var element = tmp$_3.next();
      element.resetDebuff();
    }
    this.setOriginalPlayerPos_0();
    this.setOriginalMonsterPos_0();
    this.mRoundCnt_0 = 0;
    this.mHasEventExed_0 = false;
    tmp$ = this.mPlayerList_0.iterator();
    while (tmp$.hasNext()) {
      var p = tmp$.next();
      if (p.hp <= 0) {
        p.hp = 1;
      }
      p.setFrameByState();
    }
    tmp$_0 = this.mMonsterList_0.iterator();
    while (tmp$_0.hasNext()) {
      var m = tmp$_0.next();
      m.hp = m.maxHP;
    }
    this.mWinMoney_0 = 0;
    this.mWinExp_0 = 0;
    tmp$_1 = this.mMonsterList_0.iterator();
    while (tmp$_1.hasNext()) {
      var m_0 = tmp$_1.next();
      this.mWinMoney_0 = this.mWinMoney_0 + m_0.money | 0;
      this.mWinExp_0 = this.mWinExp_0 + m_0.exp | 0;
    }
    if (!Combat$Companion_getInstance().sIsRandomFight_0 && this.mMonsterList_0.size === 1) {
      var m_1 = this.mMonsterList_0.get_za3lpa$(0);
      var n = Kotlin.isType(tmp$_2 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$ARS_getInstance(), m_1.type, m_1.index), Monster) ? tmp$_2 : throwCCE();
      n.hp = -1;
      n.isVisiable = false;
      this.mMonsterList_0.add_wxm5ur$(0, n);
      this.setOriginalMonsterPos_0();
    }
    this.mFlyPeach_0.start();
    this.mFlyPeach_0.setIteratorNum_za3lpa$(5);
  };
  Combat.prototype.exitCurrentCombat_0 = function () {
    var tmp$;
    if (!Combat$Companion_getInstance().sIsRandomFight_0) {
      this.game.gotoAddress_za3lpa$(this.mIsWin_0 ? this.mWinAddr_0 : this.mLossAddr_0);
      this.game.mainScene.scriptProcess.goonExecute = true;
      Combat$Companion_getInstance().sIsRandomFight_0 = true;
      Combat$Companion_getInstance().sInstance_0 = Combat$Companion_getInstance().sInstanceBk_0;
      Combat$Companion_getInstance().sInstanceBk_0 = null;
    }
     else {
      if (!this.mIsWin_0) {
        this.game.changeScreen_gacx6e$(ScreenViewType$SCREEN_MENU_getInstance());
      }
    }
    Combat$Companion_getInstance().sIsFighting_0 = false;
    this.mActionQueue_0.clear();
    this.mActionExecutor_0.reset();
    this.mCombatUI_0.reset();
    this.mIsAutoAttack_0 = false;
    tmp$ = this.mPlayerList_0.iterator();
    while (tmp$.hasNext()) {
      var p = tmp$.next();
      if (p.hp <= 0) {
        p.hp = 1;
      }
      if (p.mp <= 0) {
        p.mp = 1;
      }
      p.hp = p.hp + ((p.maxHP - p.hp | 0) / 10 | 0) | 0;
      p.mp = p.mp + (p.maxMP / 5 | 0) | 0;
      if (p.mp > p.maxMP) {
        p.mp = p.maxMP;
      }
    }
  };
  Combat.prototype.setOriginalPlayerPos_0 = function () {
    var tmp$;
    tmp$ = this.mPlayerList_0;
    for (var i = 0; i !== tmp$.size; ++i) {
      this.mPlayerList_0.get_za3lpa$(i).setCombatPos_vux9f0$(Combat$Companion_getInstance().sPlayerPos[i].x, Combat$Companion_getInstance().sPlayerPos[i].y);
    }
  };
  Combat.prototype.setOriginalMonsterPos_0 = function () {
    var tmp$;
    tmp$ = this.mMonsterList_0;
    for (var i = 0; i !== tmp$.size; ++i) {
      this.mMonsterList_0.get_za3lpa$(i).setOriginalCombatPos_za3lpa$(i);
    }
  };
  Combat.prototype.update_s8cxhz$ = function (delta) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    this.mTimeCnt_0 = this.mTimeCnt_0.add(delta);
    switch (this.mCombatState_0.name) {
      case 'SelectAction':
        if (!this.mHasEventExed_0 && !Combat$Companion_getInstance().sIsRandomFight_0) {
          this.mHasEventExed_0 = true;
          tmp$ = ensureNotNull(this.mEventRound_0);
          for (var i = 0; i !== tmp$.length; ++i) {
            if (this.mRoundCnt_0 === ensureNotNull(this.mEventRound_0)[i] && ensureNotNull(this.mEventNum_0)[i] !== 0) {
              this.game.triggerEvent_za3lpa$(ensureNotNull(this.mEventNum_0)[i]);
            }
          }
        }

        if (this.mIsAutoAttack_0) {
          this.generateAutoActionQueue_0();
          this.mCombatState_0 = Combat$CombatState$PerformAction_getInstance();
        }
         else {
          this.mCombatUI_0.update_s8cxhz$(delta);
        }

        break;
      case 'PerformAction':
        if (!this.mActionExecutor_0.update_s8cxhz$(delta)) {
          if (this.isAllMonsterDead_0) {
            this.mTimeCnt_0 = L0;
            this.mCombatState_0 = Combat$CombatState$Win_getInstance();
            tmp$_0 = Player$Companion_getInstance();
            tmp$_0.sMoney = tmp$_0.sMoney + this.mWinMoney_0 | 0;
            var lvuplist = ArrayList_init();
            tmp$_1 = this.mPlayerList_0.iterator();
            while (tmp$_1.hasNext()) {
              var p = tmp$_1.next();
              if (p.isAlive) {
                if (p.level >= p.levelupChain.maxLevel)
                  break;
                var nextExp = p.levelupChain.getNextLevelExp_za3lpa$(p.level);
                var exp = this.mWinExp_0 + p.currentExp | 0;
                if (exp < nextExp) {
                  p.currentExp = exp;
                }
                 else {
                  var cl = p.level;
                  var c = p.levelupChain;
                  p.currentExp = exp - nextExp | 0;
                  p.level = cl + 1 | 0;
                  p.maxHP = p.maxHP + c.getMaxHP_za3lpa$(cl + 1 | 0) - c.getMaxHP_za3lpa$(cl) | 0;
                  p.hp = p.maxHP;
                  p.maxMP = p.maxMP + c.getMaxMP_za3lpa$(cl + 1 | 0) - c.getMaxMP_za3lpa$(cl) | 0;
                  p.mp = p.maxMP;
                  p.attack = p.attack + c.getAttack_za3lpa$(cl + 1 | 0) - c.getAttack_za3lpa$(cl) | 0;
                  p.defend = p.defend + c.getDefend_za3lpa$(cl + 1 | 0) - c.getDefend_za3lpa$(cl) | 0;
                  (tmp$_2 = p.magicChain) != null ? (tmp$_2.learnNum = c.getLearnMagicNum_za3lpa$(cl + 1 | 0)) : null;
                  p.speed = p.speed + c.getSpeed_za3lpa$(cl + 1 | 0) - c.getSpeed_za3lpa$(cl) | 0;
                  p.lingli = p.lingli + c.getLingli_za3lpa$(cl + 1 | 0) - c.getLingli_za3lpa$(cl) | 0;
                  p.luck = p.luck + c.getLuck_za3lpa$(cl + 1 | 0) - c.getLuck_za3lpa$(cl) | 0;
                  lvuplist.add_11rb$(p);
                }
              }
            }
            var ppt = 10;
            tmp$_3 = this.mPlayerList_0.iterator();
            while (tmp$_3.hasNext()) {
              var p_0 = tmp$_3.next();
              if (p_0.luck > ppt) {
                ppt = p_0.luck;
              }
            }
            ppt = ppt - 10 | 0;
            if (ppt > 100) {
              ppt = 100;
            }
             else if (ppt < 0) {
              ppt = 10;
            }
            var gm = new GoodsManage();
            var gl = ArrayList_init();
            tmp$_4 = this.mMonsterList_0.iterator();
            while (tmp$_4.hasNext()) {
              var m = tmp$_4.next();
              var g = m.dropGoods;
              if (g != null && Combat$Companion_getInstance().sRandom_0.nextInt_za3lpa$(101) < ppt) {
                gm.addGoods_qt1dr2$(g.type, g.index, g.goodsNum);
                Player$Companion_getInstance().sGoodsList.addGoods_qt1dr2$(g.type, g.index, g.goodsNum);
              }
            }
            gl.addAll_brywnq$(gm.goodsList);
            gl.addAll_brywnq$(gm.equipList);
            this.mCombatSuccess_0 = new CombatSuccess(this, this.mWinExp_0, this.mWinMoney_0, gl, lvuplist);
          }
           else {
            if (this.isAnyPlayerAlive_0) {
              this.mRoundCnt_0 = this.mRoundCnt_0 + 1 | 0;
              this.updateFighterState_0();
              this.mCombatState_0 = Combat$CombatState$SelectAction_getInstance();
              this.mCurSelActionPlayerIndex_0 = this.firstAlivePlayerIndex_0;
              this.mCombatUI_0.setCurrentPlayerIndex_za3lpa$(this.mCurSelActionPlayerIndex_0);
              tmp$_5 = this.mPlayerList_0.iterator();
              while (tmp$_5.hasNext()) {
                var p_1 = tmp$_5.next();
                p_1.setFrameByState();
              }
            }
             else {
              this.mTimeCnt_0 = L0;
              this.mCombatState_0 = Combat$CombatState$Loss_getInstance();
            }
          }
        }

        break;
      case 'Win':
        this.mIsWin_0 = true;
        if ((tmp$_7 = (tmp$_6 = this.mCombatSuccess_0) != null ? tmp$_6.update_s8cxhz$(delta) : null) != null ? tmp$_7 : true) {
          this.mCombatState_0 = Combat$CombatState$Exit_getInstance();
        }

        break;
      case 'Loss':
        if (!Combat$Companion_getInstance().sIsRandomFight_0 || !this.mFlyPeach_0.update_s8cxhz$(delta)) {
          this.mIsWin_0 = false;
          this.mCombatState_0 = Combat$CombatState$Exit_getInstance();
        }

        break;
      case 'Exit':
        this.exitCurrentCombat_0();
        break;
    }
  };
  Combat.prototype.draw_9in0vv$ = function (canvas) {
    var tmp$, tmp$_0, tmp$_1;
    canvas.drawBitmap_t8cslu$(this.mBackground_8be2vx$, 0, 0);
    tmp$ = this.mMonsterList_0;
    for (var i = 0; i !== tmp$.size; ++i) {
      var fc = this.mMonsterList_0.get_za3lpa$(i);
      if (fc.isVisiable) {
        ensureNotNull(fc.fightingSprite).draw_9in0vv$(canvas);
      }
    }
    tmp$_0 = reversed(get_indices(this.mPlayerList_0)).iterator();
    while (tmp$_0.hasNext()) {
      var i_0 = tmp$_0.next();
      var f = ensureNotNull(this.mPlayerList_0.get_za3lpa$(i_0).fightingSprite);
      f.draw_9in0vv$(canvas);
    }
    if (this.mCombatState_0 === Combat$CombatState$SelectAction_getInstance() && !this.mIsAutoAttack_0) {
      this.mCombatUI_0.draw_9in0vv$(canvas);
    }
     else if (this.mCombatState_0 === Combat$CombatState$PerformAction_getInstance()) {
      this.mActionExecutor_0.draw_9in0vv$(canvas);
    }
     else if (this.mCombatState_0 === Combat$CombatState$Win_getInstance()) {
      (tmp$_1 = this.mCombatSuccess_0) != null ? (tmp$_1.draw_9in0vv$(canvas), Unit) : null;
    }
     else if (this.mCombatState_0 === Combat$CombatState$Loss_getInstance() && Combat$Companion_getInstance().sIsRandomFight_0) {
      this.mFlyPeach_0.draw_2g4tob$(canvas, 0, 0);
    }
  };
  Combat.prototype.onKeyDown_za3lpa$ = function (key) {
    var tmp$;
    if (this.mCombatState_0 === Combat$CombatState$SelectAction_getInstance()) {
      if (!this.mIsAutoAttack_0) {
        this.mCombatUI_0.onKeyDown_za3lpa$(key);
      }
    }
     else if (this.mCombatState_0 === Combat$CombatState$Win_getInstance()) {
      (tmp$ = this.mCombatSuccess_0) != null ? (tmp$.onKeyDown_za3lpa$(key), Unit) : null;
    }
  };
  Combat.prototype.onKeyUp_za3lpa$ = function (key) {
    var tmp$;
    if (this.mCombatState_0 === Combat$CombatState$SelectAction_getInstance()) {
      if (!this.mIsAutoAttack_0) {
        this.mCombatUI_0.onKeyUp_za3lpa$(key);
      }
    }
     else if (this.mCombatState_0 === Combat$CombatState$Win_getInstance()) {
      (tmp$ = this.mCombatSuccess_0) != null ? (tmp$.onKeyUp_za3lpa$(key), Unit) : null;
    }
    if (this.mIsAutoAttack_0 && key === Global_getInstance().KEY_CANCEL) {
      this.mIsAutoAttack_0 = false;
    }
  };
  Combat.prototype.generateAutoActionQueue_0 = function () {
    var tmp$;
    var monster = this.firstAliveMonster;
    this.mActionQueue_0.clear();
    tmp$ = this.mPlayerList_0.iterator();
    while (tmp$.hasNext()) {
      var p = tmp$.next();
      if (p.isAlive) {
        this.mActionQueue_0.add_11rb$(p.hasAtbuff_za3lpa$(FightingCharacter$Companion_getInstance().BUFF_MASK_ALL) ? new ActionPhysicalAttackAll(p, this.mMonsterList_0) : new ActionPhysicalAttackOne(p, ensureNotNull(monster)));
      }
    }
    this.generateMonstersActions_0();
    this.sortActionQueue_0();
  };
  Combat.prototype.generateMonstersActions_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var $receiver = this.mMonsterList_0;
    var destination = ArrayList_init();
    var tmp$_4;
    tmp$_4 = $receiver.iterator();
    while (tmp$_4.hasNext()) {
      var element = tmp$_4.next();
      if (element.isAlive)
        destination.add_11rb$(element);
    }
    var liveMonsters = destination;
    tmp$ = liveMonsters.iterator();
    loop_label: while (tmp$.hasNext()) {
      var m = tmp$.next();
      var iq = m.mIQ / 100.0;
      tmp$_0 = this.randomAlivePlayer;
      if (tmp$_0 == null) {
        return;
      }
      var p = tmp$_0;
      var tmp$_5;
      if ((tmp$_2 = (tmp$_1 = m.magicChain) != null ? tmp$_1.getAllLearntMagics() : null) != null) {
        var destination_0 = ArrayList_init();
        var tmp$_6;
        tmp$_6 = tmp$_2.iterator();
        while (tmp$_6.hasNext()) {
          var element_0 = tmp$_6.next();
          if (element_0.costMp < m.mp)
            destination_0.add_11rb$(element_0);
        }
        tmp$_5 = destination_0;
      }
       else
        tmp$_5 = null;
      var magics = tmp$_5;
      if (!m.isSealed && magics != null) {
        var dying = (m.maxHP / m.hp | 0) > 3;
        var firstOrNull$result;
        firstOrNull$break: do {
          var tmp$_7;
          tmp$_7 = magics.iterator();
          while (tmp$_7.hasNext()) {
            var element_1 = tmp$_7.next();
            if (Kotlin.isType(element_1, MagicRestore)) {
              firstOrNull$result = element_1;
              break firstOrNull$break;
            }
          }
          firstOrNull$result = null;
        }
         while (false);
        var restoreMagic = firstOrNull$result;
        var firstOrNull$result_0;
        firstOrNull$break: do {
          var tmp$_8;
          tmp$_8 = magics.iterator();
          while (tmp$_8.hasNext()) {
            var element_2 = tmp$_8.next();
            if (Kotlin.isType(element_2, MagicAttack)) {
              firstOrNull$result_0 = element_2;
              break firstOrNull$break;
            }
          }
          firstOrNull$result_0 = null;
        }
         while (false);
        var attackMagic = Kotlin.isType(tmp$_3 = firstOrNull$result_0, MagicAttack) ? tmp$_3 : null;
        var tmp$_9 = dying && restoreMagic != null;
        if (tmp$_9) {
          tmp$_9 = random() < Math_0.sqrt(iq);
        }
        if (tmp$_9) {
          if (restoreMagic.isForAll) {
            this.mActionQueue_0.add_11rb$(new ActionMagicHelpAll(m, this.mMonsterList_0, restoreMagic));
          }
           else {
            this.mActionQueue_0.add_11rb$(new ActionMagicHelpOne(m, m, restoreMagic));
          }
          continue loop_label;
        }
        if (attackMagic != null && random() < iq) {
          if (attackMagic.isForAll) {
            this.mActionQueue_0.add_11rb$(new ActionMagicAttackAll(m, this.mPlayerList_0, attackMagic));
          }
           else {
            this.mActionQueue_0.add_11rb$(new ActionMagicAttackOne(m, p, attackMagic));
          }
          continue loop_label;
        }
      }
      this.mActionQueue_0.add_11rb$(m.hasAtbuff_za3lpa$(FightingCharacter$Companion_getInstance().BUFF_MASK_ALL) ? new ActionPhysicalAttackAll(m, this.mPlayerList_0) : new ActionPhysicalAttackOne(m, p));
    }
  };
  function Combat$sortActionQueue$lambda(it) {
    return it.priority;
  }
  var sortWith = Kotlin.kotlin.collections.sortWith_nqfjgj$;
  var compareByDescending$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(b), selector(a));
      };
    };
  });
  var Comparator = Kotlin.kotlin.Comparator;
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  Combat.prototype.sortActionQueue_0 = function () {
    var $receiver = this.mActionQueue_0;
    if ($receiver.size > 1) {
      sortWith($receiver, new Comparator$ObjectLiteral(compareByDescending$lambda(Combat$sortActionQueue$lambda)));
    }
  };
  Combat.prototype.isPlayerBehindDead_0 = function (index) {
    var $receiver = until(index + 1 | 0, this.mPlayerList_0.size);
    var none$result;
    none$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        none$result = true;
        break none$break;
      }
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (this.mPlayerList_0.get_za3lpa$(element).isAlive) {
          none$result = false;
          break none$break;
        }
      }
      none$result = true;
    }
     while (false);
    return none$result;
  };
  Combat.prototype.updateFighterState_0 = function () {
  };
  function Combat$onActionSelected$go(this$Combat) {
    return function () {
      this$Combat.generateMonstersActions_0();
      this$Combat.sortActionQueue_0();
      this$Combat.mCombatState_0 = Combat$CombatState$PerformAction_getInstance();
    };
  }
  Combat.prototype.onActionSelected_wwcj9m$ = function (action) {
    this.mActionQueue_0.add_11rb$(action);
    this.mCombatUI_0.reset();
    var go = Combat$onActionSelected$go(this);
    if (Kotlin.isType(action, ActionCoopMagic)) {
      this.mActionQueue_0.clear();
      this.mActionQueue_0.add_11rb$(action);
      go();
    }
     else if (this.mCurSelActionPlayerIndex_0 >= (this.mPlayerList_0.size - 1 | 0) || this.isPlayerBehindDead_0(this.mCurSelActionPlayerIndex_0)) {
      go();
    }
     else {
      var nextIndex = this.nextAlivePlayerIndex_0;
      this.mCurSelActionPlayerIndex_0 = nextIndex;
      this.mCombatUI_0.setCurrentPlayerIndex_za3lpa$(nextIndex);
    }
  };
  Combat.prototype.onAutoAttack = function () {
    this.mCombatUI_0.reset();
    this.mActionQueue_0.clear();
    this.mIsAutoAttack_0 = true;
    this.mCombatState_0 = Combat$CombatState$SelectAction_getInstance();
  };
  function Combat$onFlee$ObjectLiteral(this$Combat) {
    this.this$Combat = this$Combat;
  }
  Combat$onFlee$ObjectLiteral.prototype.run = function () {
    this.this$Combat.mIsWin_0 = true;
    this.this$Combat.mCombatState_0 = Combat$CombatState$Exit_getInstance();
  };
  Combat$onFlee$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Runnable]
  };
  Combat.prototype.onFlee = function () {
    var tmp$, tmp$_0;
    this.mCombatUI_0.reset();
    tmp$ = this.mCurSelActionPlayerIndex_0;
    tmp$_0 = this.mPlayerList_0.size;
    for (var i = tmp$; i < tmp$_0; i++) {
      if (this.mPlayerList_0.get_za3lpa$(i).isAlive && Combat$Companion_getInstance().sRandom_0.nextBoolean() && Combat$Companion_getInstance().sIsRandomFight_0) {
        this.mActionQueue_0.add_11rb$(new ActionFlee(this.mPlayerList_0.get_za3lpa$(i), true, new Combat$onFlee$ObjectLiteral(this)));
        break;
      }
       else {
        this.mActionQueue_0.add_11rb$(new ActionFlee(this.mPlayerList_0.get_za3lpa$(i), false, null));
      }
    }
    this.generateMonstersActions_0();
    this.sortActionQueue_0();
    this.mCombatState_0 = Combat$CombatState$PerformAction_getInstance();
  };
  Combat.prototype.onCancel = function () {
    var i = this.preAlivePlayerIndex_0;
    if (i >= 0) {
      this.mActionQueue_0.removeAt_za3lpa$(this.mActionQueue_0.size - 1 | 0).cancel();
      this.mCurSelActionPlayerIndex_0 = i;
      this.mCombatUI_0.setCurrentPlayerIndex_za3lpa$(this.mCurSelActionPlayerIndex_0);
      if (this.mCurSelActionPlayerIndex_0 > 0) {
        var p = this.mPlayerList_0.get_za3lpa$(this.mCurSelActionPlayerIndex_0);
        if (p.isSleeping || p.isConfusing) {
          this.onCancel();
        }
      }
      this.mCombatUI_0.reset();
    }
  };
  function Combat$Companion() {
    Combat$Companion_instance = this;
    this.sIsEnable_0 = false;
    this.globalDisableFighting_0 = false;
    this.sIsFighting_0 = false;
    this.sInstance_0 = null;
    this.sInstanceBk_0 = null;
    this.sIsRandomFight_0 = false;
    this.COMBAT_PROBABILITY_0 = 20;
    this.sRandom_0 = new Random();
    this.sPlayerPos = [new Point(76, 70), new Point(108, 66), new Point(140, 58)];
  }
  Combat$Companion.prototype.IsActive = function () {
    return this.sIsEnable_0 && this.sInstance_0 != null && this.sIsFighting_0;
  };
  Combat$Companion.prototype.FightEnable = function () {
    this.sIsEnable_0 = true;
  };
  Combat$Companion.prototype.FightDisable = function () {
    this.sIsEnable_0 = false;
    if (this.sInstance_0 != null) {
      this.sInstance_0 = null;
    }
  };
  Combat$Companion.prototype.InitFight_qk7mas$ = function (parent, monstersType, scrb, scrl, scrr) {
    this.sIsEnable_0 = true;
    this.sIsRandomFight_0 = true;
    this.sIsFighting_0 = false;
    var instance = new Combat(parent);
    this.sInstance_0 = instance;
    this.sInstanceBk_0 = null;
    var destination = ArrayList_init();
    var tmp$;
    for (tmp$ = 0; tmp$ !== monstersType.length; ++tmp$) {
      var element = monstersType[tmp$];
      if (element !== 0)
        destination.add_11rb$(element);
    }
    instance.mMonsterType_0 = toIntArray(destination);
    instance.mRoundCnt_0 = 0;
    instance.mMaxRound_0 = 0;
    instance.createBackgroundBitmap_0(scrb, scrl, scrr);
  };
  Combat$Companion.prototype.write_vcd9jg$ = function (out) {
    var instance = this.sInstance_0;
    var fightEnabled = this.sIsEnable_0 && instance != null;
    out.writeBoolean_6taknv$(fightEnabled);
    if (this.sIsEnable_0 && instance != null) {
      out.writeIntArray_q5rwfd$(instance.mMonsterType_0);
      out.writeInt_za3lpa$(instance.mScrb_0);
      out.writeInt_za3lpa$(instance.mScrl_0);
      out.writeInt_za3lpa$(instance.mScrR_0);
    }
  };
  Combat$Companion.prototype.read_40ut0s$ = function (parent, coder) {
    this.sIsEnable_0 = coder.readBoolean();
    if (this.sIsEnable_0) {
      var monsterType = coder.readIntArray();
      var scrb = coder.readInt();
      var scrl = coder.readInt();
      var scrr = coder.readInt();
      this.InitFight_qk7mas$(parent, monsterType, scrb, scrl, scrr);
    }
  };
  Combat$Companion.prototype.EnterFight_dnhp7$ = function (parent, roundMax, monstersType, scr, evtRnds, evts, lossto, winto) {
    this.sIsRandomFight_0 = false;
    this.sInstanceBk_0 = this.sInstance_0;
    var instance = new Combat(parent);
    this.sInstance_0 = instance;
    instance.mMonsterList_0 = ArrayList_init();
    var $receiver = get_indices_0(monstersType);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (monstersType[element] > 0)
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1;
      destination_0.add_11rb$(Kotlin.isType(tmp$_1 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$ARS_getInstance(), 3, monstersType[item]), Monster) ? tmp$_1 : throwCCE());
    }
    var tmp$_2;
    tmp$_2 = destination_0.iterator();
    while (tmp$_2.hasNext()) {
      var element_0 = tmp$_2.next();
      instance.mMonsterList_0.add_11rb$(element_0);
    }
    instance.mMaxRound_0 = roundMax;
    instance.mRoundCnt_0 = 0;
    this.prepareForNewCombat_0(instance);
    instance.createBackgroundBitmap_0(scr[0], scr[1], scr[2]);
    instance.mEventRound_0 = evtRnds;
    instance.mEventNum_0 = evts;
    instance.mLossAddr_0 = lossto;
    instance.mWinAddr_0 = winto;
  };
  Combat$Companion.prototype.prepareForNewCombat_0 = function (combat) {
    this.sIsEnable_0 = true;
    this.sIsFighting_0 = true;
    combat.prepareForNewCombat_0();
  };
  Combat$Companion.prototype.StartNewRandomCombat = function () {
    var instance = this.sInstance_0;
    var tmp$ = this.globalDisableFighting_0 || !this.sIsEnable_0 || instance == null;
    if (!tmp$) {
      tmp$ = instance.mMonsterType_0.length === 0;
    }
    if (tmp$ || this.sRandom_0.nextInt_za3lpa$(this.COMBAT_PROBABILITY_0) !== 0) {
      this.sIsFighting_0 = false;
      return false;
    }
    instance.mMonsterList_0.clear();
    var i = this.sRandom_0.nextInt_za3lpa$(3);
    var tmp$_0;
    tmp$_0 = (new IntRange(0, i)).iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var tmp$_1;
      var x = this.sRandom_0.nextInt_za3lpa$(instance.mMonsterType_0.length);
      var m = Kotlin.isType(tmp$_1 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$ARS_getInstance(), 3, instance.mMonsterType_0[x]), Monster) ? tmp$_1 : throwCCE();
      instance.mMonsterList_0.add_11rb$(m);
    }
    instance.mRoundCnt_0 = 0;
    instance.mMaxRound_0 = 0;
    this.prepareForNewCombat_0(instance);
    return true;
  };
  Combat$Companion.prototype.Update_s8cxhz$ = function (delta) {
    var tmp$;
    (tmp$ = this.sInstance_0) != null ? (tmp$.update_s8cxhz$(delta), Unit) : null;
  };
  Combat$Companion.prototype.Draw_9in0vv$ = function (canvas) {
    var tmp$;
    (tmp$ = this.sInstance_0) != null ? (tmp$.draw_9in0vv$(canvas), Unit) : null;
  };
  Combat$Companion.prototype.KeyDown_za3lpa$ = function (key) {
    var tmp$;
    (tmp$ = this.sInstance_0) != null ? (tmp$.onKeyDown_za3lpa$(key), Unit) : null;
  };
  Combat$Companion.prototype.KeyUp_za3lpa$ = function (key) {
    var tmp$;
    (tmp$ = this.sInstance_0) != null ? (tmp$.onKeyUp_za3lpa$(key), Unit) : null;
  };
  Combat$Companion.prototype.ForceWin = function () {
    var tmp$;
    (tmp$ = this.sInstance_0) != null ? (tmp$.mCombatState_0 = Combat$CombatState$Win_getInstance()) : null;
  };
  Combat$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Combat$Companion_instance = null;
  function Combat$Companion_getInstance() {
    if (Combat$Companion_instance === null) {
      new Combat$Companion();
    }
    return Combat$Companion_instance;
  }
  Combat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Combat',
    interfaces: [CombatUI$CallBack, BaseScreen]
  };
  function Action() {
    Action$Companion_getInstance();
    this.mAttacker_q5ie7k$_0 = null;
    this.mTimeCnt_13rtyr$_0 = L0;
    this.mCurrentFrame = 0;
    this.mRaiseAnimations = ArrayList_init();
    this.isMagic_nuxkrz$_0 = false;
  }
  Object.defineProperty(Action.prototype, 'mAttacker', {
    get: function () {
      return this.mAttacker_q5ie7k$_0;
    },
    set: function (mAttacker) {
      this.mAttacker_q5ie7k$_0 = mAttacker;
    }
  });
  Object.defineProperty(Action.prototype, 'priority', {
    get: function () {
      return ensureNotNull(this.mAttacker).computedSpeed;
    }
  });
  Object.defineProperty(Action.prototype, 'isAttackerActionable', {
    get: function () {
      return ensureNotNull(this.mAttacker).isAlive && !this.isAttackerSleep;
    }
  });
  Object.defineProperty(Action.prototype, 'isAttackerSleep', {
    get: function () {
      return ensureNotNull(this.mAttacker).isSleeping;
    }
  });
  Object.defineProperty(Action.prototype, 'isAttackerConfusing', {
    get: function () {
      return ensureNotNull(this.mAttacker).isConfusing;
    }
  });
  Object.defineProperty(Action.prototype, 'isAttackerSealed', {
    get: function () {
      return ensureNotNull(this.mAttacker).isSealed;
    }
  });
  Object.defineProperty(Action.prototype, 'isMagic', {
    get: function () {
      return this.isMagic_nuxkrz$_0;
    }
  });
  Action.prototype.preproccess = function () {
  };
  Action.prototype.postAction = function () {
    var tmp$;
    tmp$ = this.mAttacker;
    if (tmp$ == null) {
      return new PostAction();
    }
    var attacker = tmp$;
    return new AwardAndPunishPostAction(arrayListOf([attacker]));
  };
  function Action$updateRaiseAnimation$lambda(closure$delta) {
    return function (it) {
      return !it.update_s8cxhz$(closure$delta);
    };
  }
  Action.prototype.updateRaiseAnimation_s8cxhz$ = function (delta) {
    removeAll(this.mRaiseAnimations, Action$updateRaiseAnimation$lambda(delta));
    return !this.mRaiseAnimations.isEmpty();
  };
  Action.prototype.drawRaiseAnimation_9in0vv$ = function (canvas) {
    var tmp$;
    tmp$ = this.mRaiseAnimations.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.draw_9in0vv$(canvas);
    }
  };
  Action.prototype.update_s8cxhz$ = function (delta) {
    this.mTimeCnt_13rtyr$_0 = this.mTimeCnt_13rtyr$_0.add(delta);
    if (this.mTimeCnt_13rtyr$_0.toNumber() >= Action$Companion_getInstance().DELTA_0) {
      this.mCurrentFrame = this.mCurrentFrame + 1 | 0;
      this.mTimeCnt_13rtyr$_0 = L0;
    }
    return true;
  };
  Action.prototype.draw_9in0vv$ = function (canvas) {
  };
  Action.prototype.decay = function () {
    var tmp$;
    (tmp$ = this.mAttacker) != null ? (tmp$.decay(), Unit) : null;
  };
  Action.prototype.cancel = function () {
  };
  Action.prototype.rollbackToPhysical = function () {
    return new ActionNop(ensureNotNull(this.mAttacker));
  };
  function Action$Companion() {
    Action$Companion_instance = this;
    this.DELTA_0 = 50;
  }
  Action$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Action$Companion_instance = null;
  function Action$Companion_getInstance() {
    if (Action$Companion_instance === null) {
      new Action$Companion();
    }
    return Action$Companion_instance;
  }
  Action.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Action',
    interfaces: []
  };
  function ActionCoopMagic() {
    ActionCoopMagic$Companion_getInstance();
    this.mState_0 = ActionCoopMagic$Companion_getInstance().STATE_MOV_0;
    this.mActors_0 = null;
    this.mMonsters_0 = ArrayList_init();
    this.isSingleTarget_2ttc7h$_0 = false;
    this.magic_8be2vx$ = null;
    this.mAni_0 = new ResSrs();
    this.dxy_0 = null;
    this.oxy_0 = null;
    this.mAniX_0 = 0;
    this.mAniY_0 = 0;
  }
  Object.defineProperty(ActionCoopMagic.prototype, 'mMonster_0', {
    get: function () {
      return this.mMonsters_0.get_za3lpa$(0);
    },
    set: function (value) {
      this.mMonsters_0 = mutableListOf([value]);
    }
  });
  Object.defineProperty(ActionCoopMagic.prototype, 'isSingleTarget', {
    get: function () {
      return this.isSingleTarget_2ttc7h$_0;
    },
    set: function (isSingleTarget) {
      this.isSingleTarget_2ttc7h$_0 = isSingleTarget;
    }
  });
  Object.defineProperty(ActionCoopMagic.prototype, 'coopMagic_0', {
    get: function () {
      var tmp$;
      var firstPlayer = this.mActors_0.get_za3lpa$(0);
      var dc = (tmp$ = firstPlayer.equipmentsArray[0]) == null || Kotlin.isType(tmp$, GoodsDecorations) ? tmp$ : throwCCE();
      return dc != null ? dc.coopMagic : null;
    }
  });
  Object.defineProperty(ActionCoopMagic.prototype, 'priority', {
    get: function () {
      return this.mActors_0.get_za3lpa$(0).computedDefend;
    }
  });
  Object.defineProperty(ActionCoopMagic.prototype, 'isAttackerActionable', {
    get: function () {
      var $receiver = this.mActors_0;
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.isAlive && !element.isSleeping)
          destination.add_11rb$(element);
      }
      return destination.size >= 2;
    }
  });
  Object.defineProperty(ActionCoopMagic.prototype, 'isAttackerSleep', {
    get: function () {
      var $receiver = this.mActors_0;
      var all$result;
      all$break: do {
        var tmp$;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          all$result = true;
          break all$break;
        }
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (!element.isSleeping) {
            all$result = false;
            break all$break;
          }
        }
        all$result = true;
      }
       while (false);
      return all$result;
    }
  });
  Object.defineProperty(ActionCoopMagic.prototype, 'isAttackerConfusing', {
    get: function () {
      return false;
    }
  });
  Object.defineProperty(ActionCoopMagic.prototype, 'isAttackerSealed', {
    get: function () {
      return false;
    }
  });
  Object.defineProperty(ActionCoopMagic.prototype, 'isTargetAlive', {
    get: function () {
      if (this.isSingleTarget) {
        return this.mMonster_0.isAlive;
      }
       else {
        var $receiver = this.mMonsters_0;
        var any$result;
        any$break: do {
          var tmp$;
          if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
            any$result = false;
            break any$break;
          }
          tmp$ = $receiver.iterator();
          while (tmp$.hasNext()) {
            var element = tmp$.next();
            if (element.isAlive) {
              any$result = true;
              break any$break;
            }
          }
          any$result = false;
        }
         while (false);
        return any$result;
      }
    }
  });
  function ActionCoopMagic$preproccess$lambda(it) {
    return !it.isAlive;
  }
  ActionCoopMagic.prototype.preproccess = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    removeAll(this.mMonsters_0, ActionCoopMagic$preproccess$lambda);
    if (this.mMonsters_0.isEmpty())
      return;
    var tmp$_3;
    tmp$_3 = this.mMonsters_0.iterator();
    while (tmp$_3.hasNext()) {
      var element = tmp$_3.next();
      element.backupStatus();
    }
    var tmp$_4;
    tmp$_4 = this.mActors_0.iterator();
    while (tmp$_4.hasNext()) {
      var element_0 = tmp$_4.next();
      element_0.backupStatus();
    }
    var midpos = [new Int32Array([92, 52]), new Int32Array([109, 63]), new Int32Array([126, 74])];
    var array = Array_0(this.mActors_0.size);
    var tmp$_5;
    tmp$_5 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_5; i++) {
      array[i] = new Float32Array(2);
    }
    this.dxy_0 = array;
    var array_0 = Array_0(this.mActors_0.size);
    var tmp$_6;
    tmp$_6 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_6; i_0++) {
      array_0[i_0] = new Int32Array(2);
    }
    this.oxy_0 = array_0;
    tmp$ = this.mActors_0;
    for (var i_1 = 0; i_1 !== tmp$.size; ++i_1) {
      ensureNotNull(this.oxy_0)[i_1][0] = this.mActors_0.get_za3lpa$(i_1).combatX;
      ensureNotNull(this.oxy_0)[i_1][1] = this.mActors_0.get_za3lpa$(i_1).combatY;
    }
    tmp$_0 = ensureNotNull(this.dxy_0);
    for (var i_2 = 0; i_2 !== tmp$_0.length; ++i_2) {
      ensureNotNull(this.dxy_0)[i_2][0] = midpos[i_2][0] - ensureNotNull(this.oxy_0)[i_2][0] | 0;
      ensureNotNull(this.dxy_0)[i_2][0] = ensureNotNull(this.dxy_0)[i_2][0] / ActionCoopMagic$Companion_getInstance().MOV_FRAME_0;
      ensureNotNull(this.dxy_0)[i_2][1] = midpos[i_2][1] - ensureNotNull(this.oxy_0)[i_2][1] | 0;
      ensureNotNull(this.dxy_0)[i_2][1] = ensureNotNull(this.dxy_0)[i_2][1] / ActionCoopMagic$Companion_getInstance().MOV_FRAME_0;
    }
    if (this.isSingleTarget) {
      this.mAniX_0 = this.mMonster_0.combatX;
      this.mAniY_0 = this.mMonster_0.combatY - (ensureNotNull(this.mMonster_0.fightingSprite).height / 2 | 0) | 0;
    }
     else {
      this.mAniY_0 = 0;
      this.mAniX_0 = this.mAniY_0;
    }
    if (this.magic_8be2vx$ == null) {
      tmp$_2 = Kotlin.isType(tmp$_1 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$SRS_getInstance(), 2, 240), ResSrs) ? tmp$_1 : throwCCE();
    }
     else {
      tmp$_2 = ensureNotNull(ensureNotNull(this.magic_8be2vx$).magicAni);
    }
    this.mAni_0 = tmp$_2;
    var mgc = this.magic_8be2vx$;
    var tmp$_7;
    tmp$_7 = this.mActors_0.iterator();
    while (tmp$_7.hasNext()) {
      var element_1 = tmp$_7.next();
      var player = element_1;
      if (mgc != null) {
        if (this.isSingleTarget) {
          mgc.use_qwqr58$(element_1, this.mMonster_0);
        }
         else {
          mgc.use_h32lzv$(element_1, this.mMonsters_0);
        }
      }
       else {
        var tmp$_8;
        tmp$_8 = this.mMonsters_0.iterator();
        while (tmp$_8.hasNext()) {
          var element_2 = tmp$_8.next();
          player.attack_6u7vdj$(element_2, 1.6);
        }
      }
    }
    var tmp$_9;
    tmp$_9 = this.mMonsters_0.iterator();
    while (tmp$_9.hasNext()) {
      var element_3 = tmp$_9.next();
      this.mRaiseAnimations.add_11rb$(element_3.diffToAnimation_6taknv$());
    }
    var tmp$_10;
    tmp$_10 = this.mActors_0.iterator();
    while (tmp$_10.hasNext()) {
      var element_4 = tmp$_10.next();
      this.mRaiseAnimations.add_11rb$(element_4.diffToAnimation_6taknv$());
    }
    this.mAni_0.start();
  };
  ActionCoopMagic.prototype.update_s8cxhz$ = function (delta) {
    var tmp$, tmp$_0, tmp$_1;
    if (this.mMonsters_0.isEmpty())
      return false;
    Action.prototype.update_s8cxhz$.call(this, delta);
    switch (this.mState_0) {
      case 0:
        if (this.mCurrentFrame < ActionCoopMagic$Companion_getInstance().MOV_FRAME_0) {
          tmp$ = this.mActors_0;
          for (var i = 0; i !== tmp$.size; ++i) {
            var x = ensureNotNull(this.oxy_0)[i][0] + ensureNotNull(this.dxy_0)[i][0] * this.mCurrentFrame;
            var y = ensureNotNull(this.oxy_0)[i][1] + ensureNotNull(this.dxy_0)[i][1] * this.mCurrentFrame;
            this.mActors_0.get_za3lpa$(i).setCombatPos_vux9f0$(numberToInt(x), numberToInt(y));
          }
        }
         else {
          this.mState_0 = ActionCoopMagic$Companion_getInstance().STATE_PRE_0;
        }

        break;
      case 1:
        if (this.mCurrentFrame < (10 + ActionCoopMagic$Companion_getInstance().MOV_FRAME_0 | 0)) {
          tmp$_0 = this.mActors_0;
          for (var i_0 = 0; i_0 !== tmp$_0.size; ++i_0) {
            ensureNotNull(this.mActors_0.get_za3lpa$(i_0).fightingSprite).currentFrame = (((this.mCurrentFrame - ActionCoopMagic$Companion_getInstance().MOV_FRAME_0 | 0) * 3 | 0) / 10 | 0) + 6 | 0;
          }
        }
         else {
          this.mState_0 = ActionCoopMagic$Companion_getInstance().STATE_ANI_0;
        }

        break;
      case 2:
        if (!this.mAni_0.update_s8cxhz$(delta)) {
          this.mState_0 = ActionCoopMagic$Companion_getInstance().STATE_AFT_0;
          tmp$_1 = this.mActors_0;
          for (var i_1 = 0; i_1 !== tmp$_1.size; ++i_1) {
            this.mActors_0.get_za3lpa$(i_1).setFrameByState();
            this.mActors_0.get_za3lpa$(i_1).setCombatPos_vux9f0$(ensureNotNull(this.oxy_0)[i_1][0], ensureNotNull(this.oxy_0)[i_1][1]);
          }
        }

        break;
      case 3:
        if (!this.updateRaiseAnimation_s8cxhz$(delta)) {
          return false;
        }

        break;
    }
    return true;
  };
  ActionCoopMagic.prototype.draw_9in0vv$ = function (canvas) {
    switch (this.mState_0) {
      case 2:
        this.mAni_0.drawAbsolutely_2g4tob$(canvas, this.mAniX_0, this.mAniY_0);
        break;
      case 3:
        this.drawRaiseAnimation_9in0vv$(canvas);
        break;
    }
  };
  ActionCoopMagic.prototype.postExecute = function () {
    var tmp$;
    tmp$ = this.mMonsters_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.isVisiable = element.isAlive;
    }
  };
  ActionCoopMagic.prototype.postAction = function () {
    return new AwardAndPunishPostAction(this.mActors_0);
  };
  ActionCoopMagic.prototype.targetIsMonster = function () {
    return true;
  };
  ActionCoopMagic.prototype.decay = function () {
    var tmp$;
    tmp$ = this.mActors_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.decay();
    }
  };
  function ActionCoopMagic$Companion() {
    ActionCoopMagic$Companion_instance = this;
    this.STATE_MOV_0 = 0;
    this.STATE_PRE_0 = 1;
    this.STATE_ANI_0 = 2;
    this.STATE_AFT_0 = 3;
    this.MOV_FRAME_0 = 5;
  }
  ActionCoopMagic$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ActionCoopMagic$Companion_instance = null;
  function ActionCoopMagic$Companion_getInstance() {
    if (ActionCoopMagic$Companion_instance === null) {
      new ActionCoopMagic$Companion();
    }
    return ActionCoopMagic$Companion_instance;
  }
  ActionCoopMagic.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionCoopMagic',
    interfaces: [Action]
  };
  function ActionCoopMagic_init(actors, monster, $this) {
    $this = $this || Object.create(ActionCoopMagic.prototype);
    Action.call($this);
    ActionCoopMagic.call($this);
    $this.mActors_0 = actors;
    $this.mMonster_0 = monster;
    $this.isSingleTarget = true;
    $this.magic_8be2vx$ = $this.coopMagic_0;
    return $this;
  }
  function ActionCoopMagic_init_0(actors, monsters, $this) {
    $this = $this || Object.create(ActionCoopMagic.prototype);
    Action.call($this);
    ActionCoopMagic.call($this);
    $this.mActors_0 = actors;
    $this.mMonsters_0 = ArrayList_init();
    $this.mMonsters_0.addAll_brywnq$(monsters);
    $this.isSingleTarget = false;
    $this.magic_8be2vx$ = $this.coopMagic_0;
    return $this;
  }
  function ActionDefend(fc) {
    ActionSingleTarget.call(this, fc, fc);
  }
  Object.defineProperty(ActionDefend.prototype, 'isTargetAlive', {
    get: function () {
      return true;
    }
  });
  Object.defineProperty(ActionDefend.prototype, 'isSingleTarget', {
    get: function () {
      return false;
    }
  });
  ActionDefend.prototype.preproccess = function () {
  };
  ActionDefend.prototype.postExecute = function () {
  };
  ActionDefend.prototype.targetIsMonster = function () {
    return true;
  };
  ActionDefend.prototype.update_s8cxhz$ = function (delta) {
    return false;
  };
  ActionDefend.prototype.draw_9in0vv$ = function (canvas) {
  };
  ActionDefend.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionDefend',
    interfaces: [ActionSingleTarget]
  };
  function ActionFlee(player, fleeSucceed, runAfterFlee) {
    Action.call(this);
    this.player_0 = player;
    this.fleeSucceed_0 = fleeSucceed;
    this.runAfterFlee_0 = runAfterFlee;
    this.FRAME_CNT_0 = 5;
    this.ox_0 = 0;
    this.oy_0 = 0;
    this.dy_0 = 0;
  }
  Object.defineProperty(ActionFlee.prototype, 'priority', {
    get: function () {
      return this.player_0.computedSpeed * 100 | 0;
    }
  });
  Object.defineProperty(ActionFlee.prototype, 'isAttackerActionable', {
    get: function () {
      return true;
    }
  });
  Object.defineProperty(ActionFlee.prototype, 'isAttackerConfusing', {
    get: function () {
      return false;
    }
  });
  Object.defineProperty(ActionFlee.prototype, 'isTargetAlive', {
    get: function () {
      return true;
    }
  });
  Object.defineProperty(ActionFlee.prototype, 'isSingleTarget', {
    get: function () {
      return false;
    }
  });
  ActionFlee.prototype.preproccess = function () {
    this.ox_0 = this.player_0.combatX;
    this.oy_0 = this.player_0.combatY;
    this.dy_0 = (96 - this.oy_0 | 0) / this.FRAME_CNT_0 | 0;
    ensureNotNull(this.player_0.fightingSprite).currentFrame = 1;
  };
  ActionFlee.prototype.update_s8cxhz$ = function (delta) {
    Action.prototype.update_s8cxhz$.call(this, delta);
    if (this.mCurrentFrame < this.FRAME_CNT_0) {
      this.player_0.setCombatPos_vux9f0$(this.ox_0, this.oy_0 + Kotlin.imul(this.dy_0, this.mCurrentFrame) | 0);
      return true;
    }
     else if (!this.fleeSucceed_0 && this.mCurrentFrame < (this.FRAME_CNT_0 + 2 | 0)) {
      this.player_0.setCombatPos_vux9f0$(this.ox_0, this.oy_0);
      ensureNotNull(this.player_0.fightingSprite).currentFrame = 11;
    }
     else if (!this.fleeSucceed_0) {
      this.player_0.setFrameByState();
    }
    return false;
  };
  ActionFlee.prototype.postExecute = function () {
    if (this.fleeSucceed_0 && this.runAfterFlee_0 != null) {
      this.runAfterFlee_0.run();
    }
     else {
      this.player_0.setCombatPos_vux9f0$(this.ox_0, this.oy_0);
    }
  };
  ActionFlee.prototype.updateRaiseAnimation_s8cxhz$ = function (delta) {
    return false;
  };
  ActionFlee.prototype.drawRaiseAnimation_9in0vv$ = function (canvas) {
  };
  ActionFlee.prototype.targetIsMonster = function () {
    return false;
  };
  ActionFlee.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionFlee',
    interfaces: [Action]
  };
  function ActionMagicAttackAll(attacker, targets, magic) {
    ActionMagicAttackAll$Companion_getInstance();
    ActionMultiTarget.call(this, attacker, targets);
    this.magic_0 = magic;
    this.mState_0 = 1;
    this.mAni_0 = null;
    this.ox_0 = 0;
    this.oy_0 = 0;
    this.isMagic_rc6ojh$_0 = true;
  }
  Object.defineProperty(ActionMagicAttackAll.prototype, 'isMagic', {
    get: function () {
      return this.isMagic_rc6ojh$_0;
    }
  });
  ActionMagicAttackAll.prototype.preproccess = function () {
    var tmp$;
    tmp$ = this.mAttacker;
    if (tmp$ == null) {
      return;
    }
    var attacker = tmp$;
    attacker.backupStatus();
    var tmp$_0;
    tmp$_0 = this.mTargets.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      element.backupStatus();
    }
    this.ox_0 = attacker.combatX;
    this.oy_0 = attacker.combatY;
    this.mAni_0 = this.magic_0.magicAni;
    ensureNotNull(this.mAni_0).start();
    ensureNotNull(this.mAni_0).setIteratorNum_za3lpa$(2);
    this.magic_0.use_h32lzv$(attacker, this.mTargets);
    this.mRaiseAnimations.add_11rb$(attacker.diffToAnimation_6taknv$());
    var tmp$_1 = this.mRaiseAnimations;
    var $receiver = this.mTargets;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_2;
    tmp$_2 = $receiver.iterator();
    while (tmp$_2.hasNext()) {
      var item = tmp$_2.next();
      destination.add_11rb$(item.diffToAnimation_6taknv$());
    }
    tmp$_1.addAll_brywnq$(destination);
  };
  ActionMagicAttackAll.prototype.update_s8cxhz$ = function (delta) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    ActionMultiTarget.prototype.update_s8cxhz$.call(this, delta);
    switch (this.mState_0) {
      case 1:
        if (this.mCurrentFrame < 10) {
          if (Kotlin.isType(this.mAttacker, Player)) {
            ensureNotNull(ensureNotNull(this.mAttacker).fightingSprite).currentFrame = ((this.mCurrentFrame * 3 | 0) / 10 | 0) + 6 | 0;
          }
           else {
            ensureNotNull(this.mAttacker).setCombatPos_vux9f0$(this.ox_0 + 2 | 0, this.oy_0 + 2 | 0);
          }
        }
         else {
          this.mState_0 = ActionMagicAttackAll$Companion_getInstance().STATE_ANI_0;
        }

        break;
      case 2:
        if (!ensureNotNull(this.mAni_0).update_s8cxhz$(delta)) {
          this.mState_0 = ActionMagicAttackAll$Companion_getInstance().STATE_AFT_0;
          if (Kotlin.isType(this.mAttacker, Player)) {
            (Kotlin.isType(tmp$ = this.mAttacker, Player) ? tmp$ : throwCCE()).setFrameByState();
          }
           else {
            ensureNotNull(ensureNotNull(this.mAttacker).fightingSprite).move_vux9f0$(-2, -2);
          }
          if (Kotlin.isType(this.mTargets.get_za3lpa$(0), Player)) {
            tmp$_0 = this.mTargets.iterator();
            while (tmp$_0.hasNext()) {
              var fc = tmp$_0.next();
              ensureNotNull(fc.fightingSprite).currentFrame = 10;
            }
          }
           else {
            tmp$_1 = this.mTargets.iterator();
            while (tmp$_1.hasNext()) {
              var fc_0 = tmp$_1.next();
              ensureNotNull(fc_0.fightingSprite).move_vux9f0$(2, 2);
            }
          }
        }

        break;
      case 3:
        if (!this.updateRaiseAnimation_s8cxhz$(delta)) {
          if (Kotlin.isType(this.mTargets.get_za3lpa$(0), Player)) {
            tmp$_2 = this.mTargets.iterator();
            while (tmp$_2.hasNext()) {
              var fc_1 = tmp$_2.next();
              (Kotlin.isType(tmp$_3 = fc_1, Player) ? tmp$_3 : throwCCE()).setFrameByState();
            }
          }
           else {
            tmp$_4 = this.mTargets.iterator();
            while (tmp$_4.hasNext()) {
              var fc_2 = tmp$_4.next();
              ensureNotNull(fc_2.fightingSprite).move_vux9f0$(-2, -2);
            }
          }
          return false;
        }

        break;
    }
    return true;
  };
  ActionMagicAttackAll.prototype.draw_9in0vv$ = function (canvas) {
    ActionMultiTarget.prototype.draw_9in0vv$.call(this, canvas);
    if (this.mState_0 === ActionMagicAttackAll$Companion_getInstance().STATE_ANI_0) {
      ensureNotNull(this.mAni_0).draw_2g4tob$(canvas, 0, 0);
    }
     else if (this.mState_0 === ActionMagicAttackAll$Companion_getInstance().STATE_AFT_0) {
      this.drawRaiseAnimation_9in0vv$(canvas);
    }
  };
  ActionMagicAttackAll.prototype.rollbackToPhysical = function () {
    var attacker = ensureNotNull(this.mAttacker);
    return attacker.hasAtbuff_za3lpa$(FightingCharacter$Companion_getInstance().BUFF_MASK_ALL) ? new ActionPhysicalAttackAll(attacker, this.mTargets) : new ActionPhysicalAttackOne(attacker, this.mTargets.get_za3lpa$(0));
  };
  function ActionMagicAttackAll$Companion() {
    ActionMagicAttackAll$Companion_instance = this;
    this.STATE_PRE_0 = 1;
    this.STATE_ANI_0 = 2;
    this.STATE_AFT_0 = 3;
  }
  ActionMagicAttackAll$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ActionMagicAttackAll$Companion_instance = null;
  function ActionMagicAttackAll$Companion_getInstance() {
    if (ActionMagicAttackAll$Companion_instance === null) {
      new ActionMagicAttackAll$Companion();
    }
    return ActionMagicAttackAll$Companion_instance;
  }
  ActionMagicAttackAll.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionMagicAttackAll',
    interfaces: [ActionMultiTarget]
  };
  function ActionMagicAttackOne(attacker, target, magic) {
    ActionMagicAttackOne$Companion_getInstance();
    ActionSingleTarget.call(this, attacker, target);
    this.magic_0 = magic;
    this.mState_0 = 1;
    this.mAni_0 = null;
    this.mAniX_0 = 0;
    this.mAniY_0 = 0;
    this.ox_0 = 0;
    this.oy_0 = 0;
    this.tip_0 = null;
    this.isMagic_y4z202$_0 = true;
  }
  Object.defineProperty(ActionMagicAttackOne.prototype, 'isMagic', {
    get: function () {
      return this.isMagic_y4z202$_0;
    }
  });
  function ActionMagicAttackOne$preproccess$lambda$ObjectLiteral(closure$it) {
    this.countdown = 1000;
    this.text = '\u83B7\u5F97 ' + closure$it.name;
  }
  ActionMagicAttackOne$preproccess$lambda$ObjectLiteral.prototype.update_s8cxhz$ = function (delta) {
    this.countdown = this.countdown - delta.toInt() | 0;
    return this.countdown > 0;
  };
  ActionMagicAttackOne$preproccess$lambda$ObjectLiteral.prototype.draw_9in0vv$ = function (canvas) {
    Util_getInstance().showMessage_g6cl4j$(canvas, this.text);
  };
  ActionMagicAttackOne$preproccess$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Animation]
  };
  ActionMagicAttackOne.prototype.preproccess = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$ = this.mAttacker;
    if (tmp$ == null) {
      return;
    }
    var attacker = tmp$;
    var target = this.mTarget;
    attacker.backupStatus();
    target.backupStatus();
    this.ox_0 = attacker.combatX;
    this.oy_0 = attacker.combatY;
    this.mAni_0 = this.magic_0.magicAni;
    (tmp$_0 = this.mAni_0) != null ? (tmp$_0.start(), Unit) : null;
    (tmp$_1 = this.mAni_0) != null ? (tmp$_1.setIteratorNum_za3lpa$(2), Unit) : null;
    if (Kotlin.isType(this.magic_0, MagicAttack)) {
      this.magic_0.use_qwqr58$(attacker, target);
    }
    this.mAniX_0 = target.combatX;
    this.mAniY_0 = target.combatY - (ensureNotNull(target.fightingSprite).height / 2 | 0) | 0;
    this.mRaiseAnimations.add_11rb$(target.diffToAnimation_6taknv$());
    this.mRaiseAnimations.add_11rb$(attacker.diffToAnimation_6taknv$());
    if (Kotlin.isType(this.magic_0, MagicSpecial)) {
      if ((tmp$_2 = this.steal_qpjxya$(attacker)) != null) {
        Player$Companion_getInstance().sGoodsList.addGoods_vux9f0$(tmp$_2.type, tmp$_2.index);
        this.tip_0 = new ActionMagicAttackOne$preproccess$lambda$ObjectLiteral(tmp$_2);
      }
    }
  };
  ActionMagicAttackOne.prototype.update_s8cxhz$ = function (delta) {
    var tmp$, tmp$_0, tmp$_1;
    ActionSingleTarget.prototype.update_s8cxhz$.call(this, delta);
    switch (this.mState_0) {
      case 1:
        if (this.mCurrentFrame < 10) {
          if (Kotlin.isType(this.mAttacker, Player)) {
            ensureNotNull(ensureNotNull(this.mAttacker).fightingSprite).currentFrame = ((this.mCurrentFrame * 3 | 0) / 10 | 0) + 6 | 0;
          }
           else {
            ensureNotNull(this.mAttacker).setCombatPos_vux9f0$(this.ox_0 + 2 | 0, this.oy_0 + 2 | 0);
          }
        }
         else {
          this.mState_0 = ActionMagicAttackOne$Companion_getInstance().STATE_ANI_0;
        }

        break;
      case 2:
        if (!ensureNotNull(this.mAni_0).update_s8cxhz$(delta)) {
          this.mState_0 = ActionMagicAttackOne$Companion_getInstance().STATE_AFT_0;
          if (Kotlin.isType(this.mAttacker, Player)) {
            (Kotlin.isType(tmp$ = this.mAttacker, Player) ? tmp$ : throwCCE()).setFrameByState();
          }
           else {
            ensureNotNull(ensureNotNull(this.mAttacker).fightingSprite).move_vux9f0$(-2, -2);
          }
          if (Kotlin.isType(this.mTarget, Player)) {
            ensureNotNull(this.mTarget.fightingSprite).currentFrame = 10;
          }
           else {
            ensureNotNull(this.mTarget.fightingSprite).move_vux9f0$(2, 2);
          }
        }

        break;
      case 3:
        if (!this.updateRaiseAnimation_s8cxhz$(delta)) {
          if (Kotlin.isType(this.mTarget, Player)) {
            (Kotlin.isType(tmp$_0 = this.mTarget, Player) ? tmp$_0 : throwCCE()).setFrameByState();
          }
           else {
            ensureNotNull(this.mTarget.fightingSprite).move_vux9f0$(-2, -2);
          }
          this.mState_0 = ActionMagicAttackOne$Companion_getInstance().STATE_TIP_0;
        }

        break;
      case 4:
        if (((tmp$_1 = this.tip_0) != null ? tmp$_1.update_s8cxhz$(delta) : null) !== true) {
          return false;
        }

        break;
    }
    return true;
  };
  ActionMagicAttackOne.prototype.draw_9in0vv$ = function (canvas) {
    var tmp$, tmp$_0;
    switch (this.mState_0) {
      case 2:
        (tmp$ = this.mAni_0) != null ? (tmp$.drawAbsolutely_2g4tob$(canvas, this.mAniX_0, this.mAniY_0), Unit) : null;
        break;
      case 3:
        this.drawRaiseAnimation_9in0vv$(canvas);
        break;
      case 4:
        (tmp$_0 = this.tip_0) != null ? (tmp$_0.draw_9in0vv$(canvas), Unit) : null;
        break;
    }
  };
  ActionMagicAttackOne.prototype.rollbackToPhysical = function () {
    var attacker = ensureNotNull(this.mAttacker);
    return new ActionPhysicalAttackOne(attacker, this.mTarget);
  };
  function ActionMagicAttackOne$Companion() {
    ActionMagicAttackOne$Companion_instance = this;
    this.STATE_PRE_0 = 1;
    this.STATE_ANI_0 = 2;
    this.STATE_AFT_0 = 3;
    this.STATE_TIP_0 = 4;
  }
  ActionMagicAttackOne$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ActionMagicAttackOne$Companion_instance = null;
  function ActionMagicAttackOne$Companion_getInstance() {
    if (ActionMagicAttackOne$Companion_instance === null) {
      new ActionMagicAttackOne$Companion();
    }
    return ActionMagicAttackOne$Companion_instance;
  }
  ActionMagicAttackOne.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionMagicAttackOne',
    interfaces: [ActionSingleTarget]
  };
  function ActionMagicHelpAll(attacker, targets, magic) {
    ActionMagicHelpAll$Companion_getInstance();
    ActionMultiTarget.call(this, attacker, targets);
    this.magic_8be2vx$ = magic;
    this.state_0 = 1;
    this.animation_0 = ensureNotNull(this.magic_8be2vx$.magicAni);
    this.ox_8be2vx$ = 0;
    this.oy_8be2vx$ = 0;
    this.isMagic_r9fu64$_0 = true;
  }
  Object.defineProperty(ActionMagicHelpAll.prototype, 'isMagic', {
    get: function () {
      return this.isMagic_r9fu64$_0;
    }
  });
  ActionMagicHelpAll.prototype.preproccess = function () {
    var tmp$;
    tmp$ = this.mAttacker;
    if (tmp$ == null) {
      return;
    }
    var attacker = tmp$;
    var tmp$_0;
    tmp$_0 = this.mTargets.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      element.backupStatus();
    }
    this.ox_8be2vx$ = attacker.combatX;
    this.oy_8be2vx$ = attacker.combatY;
    this.animation_0.start();
    this.animation_0.setIteratorNum_za3lpa$(2);
    var tmp$_1;
    tmp$_1 = this.mTargets.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      this.magic_8be2vx$.use_qwqr58$(ensureNotNull(this.mAttacker), element_0);
    }
    var tmp$_2 = this.mRaiseAnimations;
    var $receiver = this.mTargets;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_3;
    tmp$_3 = $receiver.iterator();
    while (tmp$_3.hasNext()) {
      var item = tmp$_3.next();
      destination.add_11rb$(item.diffToAnimation_6taknv$(false));
    }
    tmp$_2.addAll_brywnq$(destination);
  };
  ActionMagicHelpAll.prototype.update_s8cxhz$ = function (delta) {
    var tmp$;
    ActionMultiTarget.prototype.update_s8cxhz$.call(this, delta);
    switch (this.state_0) {
      case 1:
        if (this.mCurrentFrame < 10) {
          if (Kotlin.isType(this.mAttacker, Player)) {
            ensureNotNull(ensureNotNull(this.mAttacker).fightingSprite).currentFrame = ((this.mCurrentFrame * 3 | 0) / 10 | 0) + 6 | 0;
          }
           else {
            ensureNotNull(this.mAttacker).setCombatPos_vux9f0$(this.ox_8be2vx$ + 2 | 0, this.oy_8be2vx$ + 2 | 0);
          }
        }
         else {
          this.state_0 = ActionMagicHelpAll$Companion_getInstance().STATE_ANI_0;
        }

        break;
      case 2:
        if (!this.animation_0.update_s8cxhz$(delta)) {
          this.state_0 = ActionMagicHelpAll$Companion_getInstance().STATE_AFT_0;
          if (Kotlin.isType(this.mAttacker, Player)) {
            (Kotlin.isType(tmp$ = this.mAttacker, Player) ? tmp$ : throwCCE()).setFrameByState();
          }
           else {
            ensureNotNull(ensureNotNull(this.mAttacker).fightingSprite).move_vux9f0$(-2, -2);
          }
        }

        break;
      case 3:
        return this.updateRaiseAnimation_s8cxhz$(delta);
    }
    return true;
  };
  ActionMagicHelpAll.prototype.draw_9in0vv$ = function (canvas) {
    if (this.state_0 === ActionMagicHelpAll$Companion_getInstance().STATE_ANI_0) {
      this.animation_0.draw_2g4tob$(canvas, 0, 0);
    }
     else if (this.state_0 === ActionMagicHelpAll$Companion_getInstance().STATE_AFT_0) {
      this.drawRaiseAnimation_9in0vv$(canvas);
    }
  };
  ActionMagicHelpAll.prototype.rollbackToPhysical = function () {
    var attacker = ensureNotNull(this.mAttacker);
    return new ActionNop(attacker);
  };
  function ActionMagicHelpAll$Companion() {
    ActionMagicHelpAll$Companion_instance = this;
    this.STATE_PRE_0 = 1;
    this.STATE_ANI_0 = 2;
    this.STATE_AFT_0 = 3;
  }
  ActionMagicHelpAll$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ActionMagicHelpAll$Companion_instance = null;
  function ActionMagicHelpAll$Companion_getInstance() {
    if (ActionMagicHelpAll$Companion_instance === null) {
      new ActionMagicHelpAll$Companion();
    }
    return ActionMagicHelpAll$Companion_instance;
  }
  ActionMagicHelpAll.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionMagicHelpAll',
    interfaces: [ActionMultiTarget]
  };
  function ActionMagicHelpOne(attacker, target, magic) {
    ActionMagicHelpOne$Companion_getInstance();
    ActionSingleTarget.call(this, attacker, target);
    this.magic_8be2vx$ = magic;
    this.mState_0 = 1;
    this.mAni_8be2vx$ = new ResSrs();
    this.mAnix_8be2vx$ = 0;
    this.mAniy_8be2vx$ = 0;
    this.ox_8be2vx$ = 0;
    this.oy_8be2vx$ = 0;
    this.isMagic_kgngpj$_0 = true;
  }
  Object.defineProperty(ActionMagicHelpOne.prototype, 'isMagic', {
    get: function () {
      return this.isMagic_kgngpj$_0;
    }
  });
  ActionMagicHelpOne.prototype.preproccess = function () {
    this.ox_8be2vx$ = ensureNotNull(this.mAttacker).combatX;
    this.oy_8be2vx$ = ensureNotNull(this.mAttacker).combatY;
    this.mAni_8be2vx$ = ensureNotNull(this.magic_8be2vx$.magicAni);
    this.mAni_8be2vx$.start();
    this.mAni_8be2vx$.setIteratorNum_za3lpa$(2);
    this.mAnix_8be2vx$ = this.mTarget.combatX;
    this.mAniy_8be2vx$ = this.mTarget.combatY;
    var ohp = this.mTarget.hp;
    this.magic_8be2vx$.use_qwqr58$(ensureNotNull(this.mAttacker), this.mTarget);
    var diff = this.mTarget.hp - ohp | 0;
    this.mRaiseAnimations.add_11rb$(new RaiseAnimation(this.mTarget.combatX, this.mTarget.combatTop, diff, 0));
  };
  ActionMagicHelpOne.prototype.update_s8cxhz$ = function (delta) {
    var tmp$;
    ActionSingleTarget.prototype.update_s8cxhz$.call(this, delta);
    switch (this.mState_0) {
      case 1:
        if (this.mCurrentFrame < 10) {
          if (Kotlin.isType(this.mAttacker, Player)) {
            ensureNotNull(ensureNotNull(this.mAttacker).fightingSprite).currentFrame = ((this.mCurrentFrame * 3 | 0) / 10 | 0) + 6 | 0;
          }
           else {
            ensureNotNull(this.mAttacker).setCombatPos_vux9f0$(this.ox_8be2vx$ + 2 | 0, this.oy_8be2vx$ + 2 | 0);
          }
        }
         else {
          this.mState_0 = ActionMagicHelpOne$Companion_getInstance().STATE_ANI_0;
        }

        break;
      case 2:
        if (!this.mAni_8be2vx$.update_s8cxhz$(delta)) {
          this.mState_0 = ActionMagicHelpOne$Companion_getInstance().STATE_AFT_0;
          if (Kotlin.isType(this.mAttacker, Player)) {
            (Kotlin.isType(tmp$ = this.mAttacker, Player) ? tmp$ : throwCCE()).setFrameByState();
          }
           else {
            ensureNotNull(ensureNotNull(this.mAttacker).fightingSprite).move_vux9f0$(-2, -2);
          }
        }

        break;
      case 3:
        return this.updateRaiseAnimation_s8cxhz$(delta);
    }
    return true;
  };
  ActionMagicHelpOne.prototype.draw_9in0vv$ = function (canvas) {
    if (this.mState_0 === ActionMagicHelpOne$Companion_getInstance().STATE_ANI_0) {
      this.mAni_8be2vx$.drawAbsolutely_2g4tob$(canvas, this.mAnix_8be2vx$, this.mAniy_8be2vx$);
    }
     else if (this.mState_0 === ActionMagicHelpOne$Companion_getInstance().STATE_AFT_0) {
      this.drawRaiseAnimation_9in0vv$(canvas);
    }
  };
  ActionMagicHelpOne.prototype.rollbackToPhysical = function () {
    var attacker = ensureNotNull(this.mAttacker);
    return new ActionNop(attacker);
  };
  function ActionMagicHelpOne$Companion() {
    ActionMagicHelpOne$Companion_instance = this;
    this.STATE_PRE_0 = 1;
    this.STATE_ANI_0 = 2;
    this.STATE_AFT_0 = 3;
  }
  ActionMagicHelpOne$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ActionMagicHelpOne$Companion_instance = null;
  function ActionMagicHelpOne$Companion_getInstance() {
    if (ActionMagicHelpOne$Companion_instance === null) {
      new ActionMagicHelpOne$Companion();
    }
    return ActionMagicHelpOne$Companion_instance;
  }
  ActionMagicHelpOne.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionMagicHelpOne',
    interfaces: [ActionSingleTarget]
  };
  function ActionMultiTarget(attacker, targets) {
    Action.call(this);
    this.mTargets = ArrayList_init();
    this.mAttacker = attacker;
    this.mTargets.addAll_brywnq$(targets);
  }
  Object.defineProperty(ActionMultiTarget.prototype, 'isTargetAlive', {
    get: function () {
      var $receiver = this.mTargets;
      var any$result;
      any$break: do {
        var tmp$;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          any$result = false;
          break any$break;
        }
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (element.isAlive) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      }
       while (false);
      return any$result;
    }
  });
  Object.defineProperty(ActionMultiTarget.prototype, 'isSingleTarget', {
    get: function () {
      return false;
    }
  });
  ActionMultiTarget.prototype.postExecute = function () {
    var tmp$;
    tmp$ = this.mTargets.iterator();
    while (tmp$.hasNext()) {
      var fc = tmp$.next();
      fc.isVisiable = fc.isAlive;
    }
  };
  ActionMultiTarget.prototype.targetIsMonster = function () {
    return Kotlin.isType(this.mTargets.get_za3lpa$(0), Monster);
  };
  ActionMultiTarget.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionMultiTarget',
    interfaces: [Action]
  };
  function ActionPhysicalAttackAll(attacker, targets) {
    ActionMultiTarget.call(this, attacker, targets);
    this.TOTAL_FRAME_0 = 5;
    this.dx_0 = 0;
    this.dy_0 = 0;
    this.ox_0 = 0;
    this.oy_0 = 0;
  }
  ActionPhysicalAttackAll.prototype.preproccess = function () {
    var tmp$, tmp$_0;
    tmp$ = this.mAttacker;
    if (tmp$ == null) {
      return;
    }
    var attacker = tmp$;
    var tmp$_1;
    tmp$_1 = this.mTargets.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      element.backupStatus();
    }
    this.ox_0 = attacker.combatX;
    this.oy_0 = attacker.combatY;
    this.dx_0 = (44.0 - attacker.combatX) / this.TOTAL_FRAME_0;
    this.dy_0 = (14.0 - attacker.combatY) / this.TOTAL_FRAME_0;
    tmp$_0 = this.mTargets.size;
    for (var i = 0; i < tmp$_0; i++) {
      var fc = this.mTargets.get_za3lpa$(i);
      if (!fc.isAlive) {
        continue;
      }
      attacker.attack_6u7vdj$(fc);
    }
    var tmp$_2 = this.mRaiseAnimations;
    var $receiver = this.mTargets;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_3;
    tmp$_3 = $receiver.iterator();
    while (tmp$_3.hasNext()) {
      var item = tmp$_3.next();
      destination.add_11rb$(item.diffToAnimation_6taknv$(true));
    }
    tmp$_2.addAll_brywnq$(destination);
  };
  ActionPhysicalAttackAll.prototype.update_s8cxhz$ = function (delta) {
    ActionMultiTarget.prototype.update_s8cxhz$.call(this, delta);
    if (this.mCurrentFrame < this.TOTAL_FRAME_0) {
      ensureNotNull(this.mAttacker).setCombatPos_vux9f0$(numberToInt(this.ox_0 + this.dx_0 * this.mCurrentFrame), numberToInt(this.oy_0 + this.dy_0 * this.mCurrentFrame));
      if (Kotlin.isType(this.mAttacker, Monster)) {
        var fs = ensureNotNull(ensureNotNull(this.mAttacker).fightingSprite);
        fs.currentFrame = (Kotlin.imul(fs.frameCnt, this.mCurrentFrame) / this.TOTAL_FRAME_0 | 0) + 1 | 0;
      }
       else if (Kotlin.isType(this.mAttacker, Player)) {
        var fs_0 = ensureNotNull(ensureNotNull(this.mAttacker).fightingSprite);
        fs_0.currentFrame = ((5 * this.mCurrentFrame | 0) / this.TOTAL_FRAME_0 | 0) + 1 | 0;
      }
    }
     else if (this.mCurrentFrame > this.TOTAL_FRAME_0) {
      return this.updateRaiseAnimation_s8cxhz$(delta);
    }
     else {
      ensureNotNull(this.mAttacker).setCombatPos_vux9f0$(this.ox_0, this.oy_0);
      if (Kotlin.isType(this.mAttacker, Monster)) {
        ensureNotNull(ensureNotNull(this.mAttacker).fightingSprite).currentFrame = 1;
      }
       else if (Kotlin.isType(this.mAttacker, Player)) {
        var fs_1 = ensureNotNull(ensureNotNull(this.mAttacker).fightingSprite);
        fs_1.currentFrame = 1;
      }
    }
    return true;
  };
  ActionPhysicalAttackAll.prototype.draw_9in0vv$ = function (canvas) {
    if (this.mCurrentFrame >= this.TOTAL_FRAME_0) {
      this.drawRaiseAnimation_9in0vv$(canvas);
    }
  };
  ActionPhysicalAttackAll.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionPhysicalAttackAll',
    interfaces: [ActionMultiTarget]
  };
  function ActionPhysicalAttackOne(attacker, target) {
    ActionSingleTarget.call(this, attacker, target);
    this.TOTAL_FRAME_0 = 5;
    this.dx_0 = 0;
    this.dy_0 = 0;
    this.ox_0 = 0;
    this.oy_0 = 0;
    this.mTotalMark_0 = true;
  }
  ActionPhysicalAttackOne.prototype.preproccess = function () {
    var tmp$;
    tmp$ = this.mAttacker;
    if (tmp$ == null) {
      return;
    }
    var attacker = tmp$;
    var target = this.mTarget;
    target.backupStatus();
    this.ox_0 = attacker.combatX;
    this.oy_0 = attacker.combatY;
    this.dx_0 = (target.combatX - attacker.combatX | 0) / this.TOTAL_FRAME_0;
    this.dy_0 = (target.combatY - attacker.combatY | 0) / this.TOTAL_FRAME_0;
    attacker.attack_6u7vdj$(target);
    this.mRaiseAnimations.add_11rb$(target.diffToAnimation_6taknv$());
  };
  ActionPhysicalAttackOne.prototype.update_s8cxhz$ = function (delta) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    ActionSingleTarget.prototype.update_s8cxhz$.call(this, delta);
    if (this.mCurrentFrame < this.TOTAL_FRAME_0) {
      ensureNotNull(this.mAttacker).setCombatPos_vux9f0$(numberToInt(this.ox_0 + this.dx_0 * this.mCurrentFrame), numberToInt(this.oy_0 + this.dy_0 * this.mCurrentFrame));
      if (Kotlin.isType(this.mAttacker, Monster)) {
        var fs = ensureNotNull((Kotlin.isType(tmp$ = this.mAttacker, Monster) ? tmp$ : throwCCE()).fightingSprite);
        fs.currentFrame = (Kotlin.imul(fs.frameCnt, this.mCurrentFrame) / this.TOTAL_FRAME_0 | 0) + 1 | 0;
      }
       else if (Kotlin.isType(this.mAttacker, Player)) {
        var fs_0 = ensureNotNull(ensureNotNull(this.mAttacker).fightingSprite);
        fs_0.currentFrame = ((5 * this.mCurrentFrame | 0) / this.TOTAL_FRAME_0 | 0) + 1 | 0;
      }
    }
     else if (this.mCurrentFrame > this.TOTAL_FRAME_0) {
      if (!this.updateRaiseAnimation_s8cxhz$(delta)) {
        if (Kotlin.isType(this.mTarget, Player)) {
          (Kotlin.isType(tmp$_0 = this.mTarget, Player) ? tmp$_0 : throwCCE()).setFrameByState();
        }
         else {
          ensureNotNull(this.mTarget.fightingSprite).move_vux9f0$(-2, -2);
        }
        return false;
      }
    }
     else if (this.mTotalMark_0) {
      this.mTotalMark_0 = false;
      ensureNotNull(this.mAttacker).setCombatPos_vux9f0$(this.ox_0, this.oy_0);
      if (Kotlin.isType(this.mAttacker, Monster)) {
        var fs_1 = ensureNotNull((Kotlin.isType(tmp$_1 = this.mAttacker, Monster) ? tmp$_1 : throwCCE()).fightingSprite);
        fs_1.currentFrame = 1;
      }
       else if (Kotlin.isType(this.mAttacker, Player)) {
        (Kotlin.isType(tmp$_2 = this.mAttacker, Player) ? tmp$_2 : throwCCE()).setFrameByState();
      }
      if (Kotlin.isType(this.mTarget, Player)) {
        ensureNotNull(this.mTarget.fightingSprite).currentFrame = 10;
      }
       else {
        ensureNotNull(this.mTarget.fightingSprite).move_vux9f0$(2, 2);
      }
    }
    return true;
  };
  ActionPhysicalAttackOne.prototype.draw_9in0vv$ = function (canvas) {
    if (this.mCurrentFrame >= this.TOTAL_FRAME_0) {
      this.drawRaiseAnimation_9in0vv$(canvas);
    }
  };
  ActionPhysicalAttackOne.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionPhysicalAttackOne',
    interfaces: [ActionSingleTarget]
  };
  function ActionSelfHurt(target) {
    ActionSingleTarget.call(this, target, target);
    this.state_0 = ActionSelfHurt$State$Acting_getInstance();
    this.ox_0 = target.combatX;
    this.oy_0 = target.combatY;
  }
  function ActionSelfHurt$State(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ActionSelfHurt$State_initFields() {
    ActionSelfHurt$State_initFields = function () {
    };
    ActionSelfHurt$State$Acting_instance = new ActionSelfHurt$State('Acting', 0);
    ActionSelfHurt$State$Hurting_instance = new ActionSelfHurt$State('Hurting', 1);
  }
  var ActionSelfHurt$State$Acting_instance;
  function ActionSelfHurt$State$Acting_getInstance() {
    ActionSelfHurt$State_initFields();
    return ActionSelfHurt$State$Acting_instance;
  }
  var ActionSelfHurt$State$Hurting_instance;
  function ActionSelfHurt$State$Hurting_getInstance() {
    ActionSelfHurt$State_initFields();
    return ActionSelfHurt$State$Hurting_instance;
  }
  ActionSelfHurt$State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: [Enum]
  };
  function ActionSelfHurt$State$values() {
    return [ActionSelfHurt$State$Acting_getInstance(), ActionSelfHurt$State$Hurting_getInstance()];
  }
  ActionSelfHurt$State.values = ActionSelfHurt$State$values;
  function ActionSelfHurt$State$valueOf(name) {
    switch (name) {
      case 'Acting':
        return ActionSelfHurt$State$Acting_getInstance();
      case 'Hurting':
        return ActionSelfHurt$State$Hurting_getInstance();
      default:throwISE('No enum constant fmj.combat.actions.ActionSelfHurt.State.' + name);
    }
  }
  ActionSelfHurt$State.valueOf_61zpoe$ = ActionSelfHurt$State$valueOf;
  ActionSelfHurt.prototype.preproccess = function () {
    var target = this.mTarget;
    target.backupStatus();
    target.attack_6u7vdj$(target, void 0, false);
    this.mRaiseAnimations.add_11rb$(target.diffToAnimation_6taknv$());
  };
  ActionSelfHurt.prototype.update_s8cxhz$ = function (delta) {
    ActionSingleTarget.prototype.update_s8cxhz$.call(this, delta);
    switch (this.state_0.name) {
      case 'Acting':
        if (this.mCurrentFrame < 10) {
          this.mTarget.setCombatPos_vux9f0$(this.ox_0 + 2 | 0, this.oy_0 + 2 | 0);
        }
         else {
          this.mTarget.setCombatPos_vux9f0$(this.ox_0, this.oy_0);
          this.state_0 = ActionSelfHurt$State$Hurting_getInstance();
        }

        break;
      case 'Hurting':
        return this.updateRaiseAnimation_s8cxhz$(delta);
    }
    return true;
  };
  ActionSelfHurt.prototype.draw_9in0vv$ = function (canvas) {
    if (this.state_0 === ActionSelfHurt$State$Hurting_getInstance()) {
      this.drawRaiseAnimation_9in0vv$(canvas);
    }
  };
  ActionSelfHurt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionSelfHurt',
    interfaces: [ActionSingleTarget]
  };
  function ActionSingleTarget(attacker, mTarget) {
    Action.call(this);
    this.mTarget = mTarget;
    this.mAttacker = attacker;
  }
  Object.defineProperty(ActionSingleTarget.prototype, 'isTargetAlive', {
    get: function () {
      return this.mTarget.isAlive;
    }
  });
  Object.defineProperty(ActionSingleTarget.prototype, 'isSingleTarget', {
    get: function () {
      return true;
    }
  });
  ActionSingleTarget.prototype.postExecute = function () {
    this.mTarget.isVisiable = this.mTarget.isAlive;
  };
  ActionSingleTarget.prototype.targetIsMonster = function () {
    return Kotlin.isType(this.mTarget, Monster);
  };
  ActionSingleTarget.prototype.setTarget_qpjxya$ = function (fc) {
    this.mTarget = fc;
  };
  ActionSingleTarget.prototype.steal_qpjxya$ = function (attacker) {
    var target = this.mTarget;
    if (Kotlin.isType(target, Monster)) {
      return target.stealGoods_qpjxya$(attacker);
    }
    return null;
  };
  ActionSingleTarget.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionSingleTarget',
    interfaces: [Action]
  };
  function ActionNop(target) {
    ActionSingleTarget.call(this, target, target);
  }
  ActionNop.prototype.update_s8cxhz$ = function (delta) {
    return false;
  };
  ActionNop.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionNop',
    interfaces: [ActionSingleTarget]
  };
  function ActionThrowItemAll(attacker, targets, weapon) {
    ActionThrowItemAll$Companion_getInstance();
    ActionMultiTarget.call(this, attacker, targets);
    this.weapon_8be2vx$ = weapon;
    this.mState_0 = 1;
    this.mAni_0 = new ResSrs();
    this.ox_0 = 0;
    this.oy_0 = 0;
  }
  ActionThrowItemAll.prototype.preproccess = function () {
    var tmp$;
    tmp$ = this.mAttacker;
    if (tmp$ == null) {
      return;
    }
    var attacker = tmp$;
    var tmp$_0;
    tmp$_0 = this.mTargets.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      element.backupStatus();
    }
    this.ox_0 = attacker.combatX;
    this.oy_0 = attacker.combatY;
    this.mAni_0 = this.weapon_8be2vx$.ani;
    this.mAni_0.start();
    this.mAni_0.setIteratorNum_za3lpa$(2);
    var tmp$_1;
    tmp$_1 = this.mTargets.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      this.weapon_8be2vx$.attack_qpjxya$(element_0);
    }
    var tmp$_2 = this.mRaiseAnimations;
    var $receiver = this.mTargets;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_3;
    tmp$_3 = $receiver.iterator();
    while (tmp$_3.hasNext()) {
      var item = tmp$_3.next();
      destination.add_11rb$(item.diffToAnimation_6taknv$());
    }
    tmp$_2.addAll_brywnq$(destination);
  };
  ActionThrowItemAll.prototype.update_s8cxhz$ = function (delta) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    ActionMultiTarget.prototype.update_s8cxhz$.call(this, delta);
    switch (this.mState_0) {
      case 1:
        if (this.mCurrentFrame < 10) {
          if (Kotlin.isType(this.mAttacker, Player)) {
            ensureNotNull((Kotlin.isType(tmp$ = this.mAttacker, Player) ? tmp$ : throwCCE()).fightingSprite).currentFrame = ((this.mCurrentFrame * 3 | 0) / 10 | 0) + 6 | 0;
          }
           else {
            ensureNotNull(this.mAttacker).setCombatPos_vux9f0$(this.ox_0 + 2 | 0, this.oy_0 + 2 | 0);
          }
        }
         else {
          this.mState_0 = ActionThrowItemAll$Companion_getInstance().STATE_ANI_0;
        }

        break;
      case 2:
        if (!this.mAni_0.update_s8cxhz$(delta)) {
          this.mState_0 = ActionThrowItemAll$Companion_getInstance().STATE_AFT_0;
          if (Kotlin.isType(this.mAttacker, Player)) {
            (Kotlin.isType(tmp$_0 = this.mAttacker, Player) ? tmp$_0 : throwCCE()).setFrameByState();
          }
           else {
            ensureNotNull(ensureNotNull(this.mAttacker).fightingSprite).move_vux9f0$(-2, -2);
          }
          if (!this.targetIsMonster()) {
            tmp$_1 = this.mTargets.iterator();
            while (tmp$_1.hasNext()) {
              var fc = tmp$_1.next();
              ensureNotNull(fc.fightingSprite).currentFrame = 10;
            }
          }
           else {
            tmp$_2 = this.mTargets.iterator();
            while (tmp$_2.hasNext()) {
              var fc_0 = tmp$_2.next();
              ensureNotNull(fc_0.fightingSprite).move_vux9f0$(2, 2);
            }
          }
        }

        break;
      case 3:
        if (!this.updateRaiseAnimation_s8cxhz$(delta)) {
          if (this.targetIsMonster()) {
            tmp$_3 = this.mTargets.iterator();
            while (tmp$_3.hasNext()) {
              var fc_1 = tmp$_3.next();
              ensureNotNull(fc_1.fightingSprite).move_vux9f0$(-2, -2);
            }
          }
           else {
            tmp$_4 = this.mTargets.iterator();
            while (tmp$_4.hasNext()) {
              var fc_2 = tmp$_4.next();
              (Kotlin.isType(tmp$_5 = fc_2, Player) ? tmp$_5 : throwCCE()).setFrameByState();
            }
          }
          return false;
        }

        break;
    }
    return true;
  };
  ActionThrowItemAll.prototype.draw_9in0vv$ = function (canvas) {
    if (this.mState_0 === ActionThrowItemAll$Companion_getInstance().STATE_ANI_0) {
      this.mAni_0.draw_2g4tob$(canvas, 0, 0);
    }
     else if (this.mState_0 === ActionThrowItemAll$Companion_getInstance().STATE_AFT_0) {
      this.drawRaiseAnimation_9in0vv$(canvas);
    }
  };
  ActionThrowItemAll.prototype.cancel = function () {
    var tmp$;
    Player$Companion_getInstance().sGoodsList.addGoods_6xxg66$(Kotlin.isType(tmp$ = this.weapon_8be2vx$, BaseGoods) ? tmp$ : throwCCE());
  };
  function ActionThrowItemAll$Companion() {
    ActionThrowItemAll$Companion_instance = this;
    this.STATE_PRE_0 = 1;
    this.STATE_ANI_0 = 2;
    this.STATE_AFT_0 = 3;
  }
  ActionThrowItemAll$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ActionThrowItemAll$Companion_instance = null;
  function ActionThrowItemAll$Companion_getInstance() {
    if (ActionThrowItemAll$Companion_instance === null) {
      new ActionThrowItemAll$Companion();
    }
    return ActionThrowItemAll$Companion_instance;
  }
  ActionThrowItemAll.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionThrowItemAll',
    interfaces: [ActionMultiTarget]
  };
  function ActionThrowItemOne(attacker, target, weapon) {
    ActionThrowItemOne$Companion_getInstance();
    ActionSingleTarget.call(this, attacker, target);
    this.weapon_8be2vx$ = weapon;
    this.mState_0 = 1;
    this.mAni_0 = new ResSrs();
    this.mAniX_0 = 0;
    this.mAniY_0 = 0;
    this.ox_0 = 0;
    this.oy_0 = 0;
  }
  ActionThrowItemOne.prototype.preproccess = function () {
    var tmp$;
    tmp$ = this.mAttacker;
    if (tmp$ == null) {
      return;
    }
    var attacker = tmp$;
    var target = this.mTarget;
    target.backupStatus();
    this.ox_0 = attacker.combatX;
    this.oy_0 = attacker.combatY;
    this.mAni_0 = this.weapon_8be2vx$.ani;
    this.mAni_0.start();
    this.mAni_0.setIteratorNum_za3lpa$(2);
    this.mAniX_0 = this.mTarget.combatX;
    this.mAniY_0 = this.mTarget.combatY;
    this.weapon_8be2vx$.attack_qpjxya$(target);
    this.mRaiseAnimations.add_11rb$(target.diffToAnimation_6taknv$());
  };
  ActionThrowItemOne.prototype.update_s8cxhz$ = function (delta) {
    var tmp$, tmp$_0, tmp$_1;
    ActionSingleTarget.prototype.update_s8cxhz$.call(this, delta);
    switch (this.mState_0) {
      case 1:
        if (this.mCurrentFrame < 10) {
          if (Kotlin.isType(this.mAttacker, Player)) {
            ensureNotNull((Kotlin.isType(tmp$ = this.mAttacker, Player) ? tmp$ : throwCCE()).fightingSprite).currentFrame = ((this.mCurrentFrame * 3 | 0) / 10 | 0) + 6 | 0;
          }
           else {
            ensureNotNull(this.mAttacker).setCombatPos_vux9f0$(this.ox_0 + 2 | 0, this.oy_0 + 2 | 0);
          }
        }
         else {
          this.mState_0 = ActionThrowItemOne$Companion_getInstance().STATE_ANI_0;
        }

        break;
      case 2:
        if (!this.mAni_0.update_s8cxhz$(delta)) {
          this.mState_0 = ActionThrowItemOne$Companion_getInstance().STATE_AFT_0;
          if (Kotlin.isType(this.mAttacker, Player)) {
            (Kotlin.isType(tmp$_0 = this.mAttacker, Player) ? tmp$_0 : throwCCE()).setFrameByState();
          }
           else {
            ensureNotNull(ensureNotNull(this.mAttacker).fightingSprite).move_vux9f0$(-2, -2);
          }
          if (Kotlin.isType(this.mTarget, Player)) {
            ensureNotNull(this.mTarget.fightingSprite).currentFrame = 10;
          }
           else {
            ensureNotNull(this.mTarget.fightingSprite).move_vux9f0$(2, 2);
          }
        }

        break;
      case 3:
        if (!this.updateRaiseAnimation_s8cxhz$(delta)) {
          if (Kotlin.isType(this.mTarget, Player)) {
            (Kotlin.isType(tmp$_1 = this.mTarget, Player) ? tmp$_1 : throwCCE()).setFrameByState();
          }
           else {
            ensureNotNull(this.mTarget.fightingSprite).move_vux9f0$(-2, -2);
          }
          return false;
        }

        break;
    }
    return true;
  };
  ActionThrowItemOne.prototype.draw_9in0vv$ = function (canvas) {
    if (this.mState_0 === ActionThrowItemOne$Companion_getInstance().STATE_ANI_0) {
      this.mAni_0.drawAbsolutely_2g4tob$(canvas, this.mAniX_0, this.mAniY_0);
    }
     else if (this.mState_0 === ActionThrowItemOne$Companion_getInstance().STATE_AFT_0) {
      this.drawRaiseAnimation_9in0vv$(canvas);
    }
  };
  ActionThrowItemOne.prototype.cancel = function () {
    var tmp$;
    Player$Companion_getInstance().sGoodsList.addGoods_6xxg66$(Kotlin.isType(tmp$ = this.weapon_8be2vx$, BaseGoods) ? tmp$ : throwCCE());
  };
  function ActionThrowItemOne$Companion() {
    ActionThrowItemOne$Companion_instance = this;
    this.STATE_PRE_0 = 1;
    this.STATE_ANI_0 = 2;
    this.STATE_AFT_0 = 3;
  }
  ActionThrowItemOne$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ActionThrowItemOne$Companion_instance = null;
  function ActionThrowItemOne$Companion_getInstance() {
    if (ActionThrowItemOne$Companion_instance === null) {
      new ActionThrowItemOne$Companion();
    }
    return ActionThrowItemOne$Companion_instance;
  }
  ActionThrowItemOne.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionThrowItemOne',
    interfaces: [ActionSingleTarget]
  };
  function ActionUseItemAll(attacker, targets, goods) {
    ActionUseItemAll$Companion_getInstance();
    ActionMultiTarget.call(this, attacker, targets);
    this.goods_8be2vx$ = goods;
    this.mState_0 = 1;
    this.mAni_0 = null;
    this.ox_8be2vx$ = 0;
    this.oy_8be2vx$ = 0;
  }
  ActionUseItemAll.prototype.preproccess = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$ = this.mAttacker;
    if (tmp$ == null) {
      return;
    }
    var attacker = tmp$;
    var tmp$_3;
    tmp$_3 = this.mTargets.iterator();
    while (tmp$_3.hasNext()) {
      var element = tmp$_3.next();
      element.backupStatus();
    }
    this.ox_8be2vx$ = attacker.combatX;
    this.oy_8be2vx$ = attacker.combatY;
    if (Kotlin.isType(this.goods_8be2vx$, GoodsMedicine)) {
      this.mAni_0 = this.goods_8be2vx$.ani;
      var tmp$_4;
      tmp$_4 = this.mTargets.iterator();
      while (tmp$_4.hasNext()) {
        var element_0 = tmp$_4.next();
        var tmp$_5;
        this.goods_8be2vx$.eat_xa4yhy$(Kotlin.isType(tmp$_5 = element_0, Player) ? tmp$_5 : throwCCE());
      }
    }
     else {
      this.mAni_0 = Kotlin.isType(tmp$_0 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$SRS_getInstance(), 2, 1), ResSrs) ? tmp$_0 : throwCCE();
    }
    (tmp$_1 = this.mAni_0) != null ? (tmp$_1.start(), Unit) : null;
    (tmp$_2 = this.mAni_0) != null ? (tmp$_2.setIteratorNum_za3lpa$(2), Unit) : null;
    var tmp$_6 = this.mRaiseAnimations;
    var $receiver = this.mTargets;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_7;
    tmp$_7 = $receiver.iterator();
    while (tmp$_7.hasNext()) {
      var item = tmp$_7.next();
      destination.add_11rb$(item.diffToAnimation_6taknv$());
    }
    tmp$_6.addAll_brywnq$(destination);
  };
  ActionUseItemAll.prototype.update_s8cxhz$ = function (delta) {
    var tmp$, tmp$_0, tmp$_1;
    ActionMultiTarget.prototype.update_s8cxhz$.call(this, delta);
    switch (this.mState_0) {
      case 1:
        if (this.mCurrentFrame < 10) {
          if (Kotlin.isType(this.mAttacker, Player)) {
            ensureNotNull((Kotlin.isType(tmp$ = this.mAttacker, Player) ? tmp$ : throwCCE()).fightingSprite).currentFrame = ((this.mCurrentFrame * 3 | 0) / 10 | 0) + 6 | 0;
          }
           else {
            ensureNotNull(this.mAttacker).setCombatPos_vux9f0$(this.ox_8be2vx$ + 2 | 0, this.oy_8be2vx$ + 2 | 0);
          }
        }
         else {
          this.mState_0 = ActionUseItemAll$Companion_getInstance().STATE_ANI_0;
        }

        break;
      case 2:
        if (((tmp$_0 = this.mAni_0) != null ? tmp$_0.update_s8cxhz$(delta) : null) !== true) {
          this.mState_0 = ActionUseItemAll$Companion_getInstance().STATE_AFT_0;
          if (Kotlin.isType(this.mAttacker, Player)) {
            (Kotlin.isType(tmp$_1 = this.mAttacker, Player) ? tmp$_1 : throwCCE()).setFrameByState();
          }
           else {
            ensureNotNull(ensureNotNull(this.mAttacker).fightingSprite).move_vux9f0$(-2, -2);
          }
        }

        break;
      case 3:
        return this.updateRaiseAnimation_s8cxhz$(delta);
    }
    return true;
  };
  ActionUseItemAll.prototype.draw_9in0vv$ = function (canvas) {
    var tmp$;
    if (this.mState_0 === ActionUseItemAll$Companion_getInstance().STATE_ANI_0) {
      (tmp$ = this.mAni_0) != null ? (tmp$.draw_2g4tob$(canvas, 0, 0), Unit) : null;
    }
     else if (this.mState_0 === ActionUseItemAll$Companion_getInstance().STATE_AFT_0) {
      this.drawRaiseAnimation_9in0vv$(canvas);
    }
  };
  ActionUseItemAll.prototype.cancel = function () {
    Player$Companion_getInstance().sGoodsList.addGoods_6xxg66$(this.goods_8be2vx$);
  };
  function ActionUseItemAll$Companion() {
    ActionUseItemAll$Companion_instance = this;
    this.STATE_PRE_0 = 1;
    this.STATE_ANI_0 = 2;
    this.STATE_AFT_0 = 3;
  }
  ActionUseItemAll$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ActionUseItemAll$Companion_instance = null;
  function ActionUseItemAll$Companion_getInstance() {
    if (ActionUseItemAll$Companion_instance === null) {
      new ActionUseItemAll$Companion();
    }
    return ActionUseItemAll$Companion_instance;
  }
  ActionUseItemAll.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionUseItemAll',
    interfaces: [ActionMultiTarget]
  };
  function ActionUseItemOne(attacker, target, goods) {
    ActionUseItemOne$Companion_getInstance();
    ActionSingleTarget.call(this, attacker, target);
    this.goods_8be2vx$ = goods;
    this.mState_0 = 1;
    this.mAni_8be2vx$ = new ResSrs();
    this.mAnix_8be2vx$ = 0;
    this.mAniy_8be2vx$ = 0;
    this.ox_8be2vx$ = 0;
    this.oy_8be2vx$ = 0;
  }
  ActionUseItemOne.prototype.preproccess = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.mTarget.backupStatus();
    if (Kotlin.isType(this.goods_8be2vx$, GoodsMedicine)) {
      this.mAni_8be2vx$ = ensureNotNull((Kotlin.isType(tmp$ = this.goods_8be2vx$, GoodsMedicine) ? tmp$ : throwCCE()).ani);
      (Kotlin.isType(tmp$_0 = this.goods_8be2vx$, GoodsMedicine) ? tmp$_0 : throwCCE()).eat_xa4yhy$(Kotlin.isType(tmp$_1 = this.mTarget, Player) ? tmp$_1 : throwCCE());
    }
     else {
      this.mAni_8be2vx$ = Kotlin.isType(tmp$_2 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$SRS_getInstance(), 2, 1), ResSrs) ? tmp$_2 : throwCCE();
    }
    this.mAni_8be2vx$.start();
    this.mAni_8be2vx$.setIteratorNum_za3lpa$(2);
    this.mAnix_8be2vx$ = this.mTarget.combatX;
    this.mAniy_8be2vx$ = this.mTarget.combatY;
    this.mRaiseAnimations.add_11rb$(this.mTarget.diffToAnimation_6taknv$());
  };
  ActionUseItemOne.prototype.update_s8cxhz$ = function (delta) {
    var tmp$, tmp$_0;
    ActionSingleTarget.prototype.update_s8cxhz$.call(this, delta);
    switch (this.mState_0) {
      case 1:
        if (this.mCurrentFrame < 10) {
          if (Kotlin.isType(this.mAttacker, Player)) {
            ensureNotNull((Kotlin.isType(tmp$ = this.mAttacker, Player) ? tmp$ : throwCCE()).fightingSprite).currentFrame = ((this.mCurrentFrame * 3 | 0) / 10 | 0) + 6 | 0;
          }
           else {
            ensureNotNull(this.mAttacker).setCombatPos_vux9f0$(this.ox_8be2vx$ + 2 | 0, this.oy_8be2vx$ + 2 | 0);
          }
        }
         else {
          this.mState_0 = ActionUseItemOne$Companion_getInstance().STATE_ANI_0;
        }

        break;
      case 2:
        if (!this.mAni_8be2vx$.update_s8cxhz$(delta)) {
          this.mState_0 = ActionUseItemOne$Companion_getInstance().STATE_AFT_0;
          if (Kotlin.isType(this.mAttacker, Player)) {
            (Kotlin.isType(tmp$_0 = this.mAttacker, Player) ? tmp$_0 : throwCCE()).setFrameByState();
          }
           else {
            ensureNotNull(ensureNotNull(this.mAttacker).fightingSprite).move_vux9f0$(-2, -2);
          }
        }

        break;
      case 3:
        return this.updateRaiseAnimation_s8cxhz$(delta);
    }
    return true;
  };
  ActionUseItemOne.prototype.draw_9in0vv$ = function (canvas) {
    if (this.mState_0 === ActionUseItemOne$Companion_getInstance().STATE_ANI_0) {
      this.mAni_8be2vx$.drawAbsolutely_2g4tob$(canvas, this.mAnix_8be2vx$, this.mAniy_8be2vx$);
    }
     else if (this.mState_0 === ActionUseItemOne$Companion_getInstance().STATE_AFT_0) {
      this.drawRaiseAnimation_9in0vv$(canvas);
    }
  };
  ActionUseItemOne.prototype.cancel = function () {
    Player$Companion_getInstance().sGoodsList.addGoods_6xxg66$(this.goods_8be2vx$);
  };
  function ActionUseItemOne$Companion() {
    ActionUseItemOne$Companion_instance = this;
    this.STATE_PRE_0 = 1;
    this.STATE_ANI_0 = 2;
    this.STATE_AFT_0 = 3;
  }
  ActionUseItemOne$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ActionUseItemOne$Companion_instance = null;
  function ActionUseItemOne$Companion_getInstance() {
    if (ActionUseItemOne$Companion_instance === null) {
      new ActionUseItemOne$Companion();
    }
    return ActionUseItemOne$Companion_instance;
  }
  ActionUseItemOne.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionUseItemOne',
    interfaces: [ActionSingleTarget]
  };
  function AwardAndPunishPostAction(attackers) {
    PostAction.call(this);
    this.animations = ArrayList_init();
    var tmp$;
    tmp$ = attackers.iterator();
    while (tmp$.hasNext()) {
      var attacker = tmp$.next();
      if (!attacker.isAlive) {
        continue;
      }
      if (Kotlin.isType(attacker, Player)) {
        attacker.backupStatus();
        var decs = filterNotNull(sliceArray(attacker.equipmentsArray, new IntRange(0, 1)));
        if (!decs.isEmpty()) {
          var tmp$_0;
          tmp$_0 = decs.iterator();
          while (tmp$_0.hasNext()) {
            var element = tmp$_0.next();
            element.affect_qpjxya$(attacker);
          }
          this.animations.add_11rb$(attacker.diffToAnimation_6taknv$());
        }
      }
      if (attacker.isPoisoned) {
        attacker.backupStatus();
        if (attacker.hp === 1) {
          attacker.hp = 0;
        }
         else {
          var hp = attacker.hp * 0.75;
          attacker.hp = numberToInt(hp);
        }
        this.animations.add_11rb$(attacker.diffToAnimation_6taknv$());
      }
    }
  }
  AwardAndPunishPostAction.prototype.update_s8cxhz$ = function (delta) {
    if (this.animations.isEmpty())
      return false;
    if (!first_0(this.animations).update_s8cxhz$(delta))
      this.animations.removeAt_za3lpa$(0);
    return !this.animations.isEmpty();
  };
  AwardAndPunishPostAction.prototype.draw_9in0vv$ = function (canvas) {
    if (this.animations.isEmpty())
      return;
    first_0(this.animations).draw_9in0vv$(canvas);
  };
  AwardAndPunishPostAction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AwardAndPunishPostAction',
    interfaces: [PostAction]
  };
  function CalcDamage() {
    CalcDamage_instance = this;
  }
  CalcDamage.prototype.calcBaseDamage_vux9f0$ = function (attack, defense) {
    var a = attack - defense | 0;
    return Math_0.max(a, 0);
  };
  CalcDamage.prototype.randomMiss_qwqr58$ = function (at, df) {
    var diff = at.computedSpeed - df.computedSpeed | 0;
    var prob = (-diff | 0) * 0.003 + 0.3;
    return random() < prob;
  };
  CalcDamage.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CalcDamage',
    interfaces: []
  };
  var CalcDamage_instance = null;
  function CalcDamage_getInstance() {
    if (CalcDamage_instance === null) {
      new CalcDamage();
    }
    return CalcDamage_instance;
  }
  function PostAction() {
  }
  PostAction.prototype.update_s8cxhz$ = function (delta) {
    return false;
  };
  PostAction.prototype.draw_9in0vv$ = function (canvas) {
  };
  PostAction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PostAction',
    interfaces: []
  };
  function Animation() {
  }
  Animation.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Animation',
    interfaces: []
  };
  function SequencialAnimation(animations) {
    this.animations = toMutableList(animations);
  }
  SequencialAnimation.prototype.update_s8cxhz$ = function (delta) {
    if (!first_0(this.animations).update_s8cxhz$(delta)) {
      this.animations.removeAt_za3lpa$(0);
    }
    return !this.animations.isEmpty();
  };
  SequencialAnimation.prototype.draw_9in0vv$ = function (canvas) {
    if (this.animations.size === 0)
      return;
    first_0(this.animations).draw_9in0vv$(canvas);
  };
  SequencialAnimation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SequencialAnimation',
    interfaces: [Animation]
  };
  function FrameAnimation(mImage, mStartFrame, mEndFrame) {
    if (mStartFrame === void 0)
      mStartFrame = 1;
    if (mEndFrame === void 0)
      mEndFrame = mImage.number;
    this.mImage_0 = mImage;
    this.mStartFrame_0 = mStartFrame;
    this.mEndFrame_0 = mEndFrame;
    this.DELTA_0 = 200;
    this.mCurFrame_0 = 0;
    this.mTimeCnt_0 = L0;
    this.mCurFrame_0 = this.mStartFrame_0;
  }
  FrameAnimation.prototype.setFPS_za3lpa$ = function (fps) {
    this.DELTA_0 = 1000 / fps | 0;
  };
  FrameAnimation.prototype.update_s8cxhz$ = function (delta) {
    this.mTimeCnt_0 = this.mTimeCnt_0.add(delta);
    if (this.mTimeCnt_0.toNumber() >= this.DELTA_0) {
      this.mTimeCnt_0 = L0;
      if ((this.mCurFrame_0 = this.mCurFrame_0 + 1 | 0, this.mCurFrame_0) > this.mEndFrame_0) {
        this.mCurFrame_0 = this.mStartFrame_0;
      }
    }
  };
  FrameAnimation.prototype.draw_2g4tob$ = function (canvas, x, y) {
    this.mImage_0.draw_tj1hu5$(canvas, this.mCurFrame_0, x, y);
  };
  FrameAnimation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FrameAnimation',
    interfaces: []
  };
  function RaiseAnimation(x, y, hitpoint, buff) {
    this.x_0 = x;
    this.y_0 = y;
    this.dy_0 = 0;
    this.dt_0 = 0;
    this.raiseNum_0 = Util_getInstance().getSmallSignedNumBitmap_za3lpa$(hitpoint);
    this.srsList_0 = null;
    this.bShowNum_0 = false;
    this.cnt_0 = L0;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    this.bShowNum_0 = hitpoint !== 0;
    this.srsList_0 = ArrayList_init();
    if ((buff & FightingCharacter$Companion_getInstance().BUFF_MASK_DU) === FightingCharacter$Companion_getInstance().BUFF_MASK_DU) {
      this.srsList_0.add_11rb$(Kotlin.isType(tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$SRS_getInstance(), 1, 243), ResSrs) ? tmp$ : throwCCE());
      last(this.srsList_0).start();
    }
    if ((buff & FightingCharacter$Companion_getInstance().BUFF_MASK_LUAN) === FightingCharacter$Companion_getInstance().BUFF_MASK_LUAN) {
      this.srsList_0.add_11rb$(Kotlin.isType(tmp$_0 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$SRS_getInstance(), 1, 244), ResSrs) ? tmp$_0 : throwCCE());
      last(this.srsList_0).start();
    }
    if ((buff & FightingCharacter$Companion_getInstance().BUFF_MASK_FENG) === FightingCharacter$Companion_getInstance().BUFF_MASK_FENG) {
      this.srsList_0.add_11rb$(Kotlin.isType(tmp$_1 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$SRS_getInstance(), 1, 245), ResSrs) ? tmp$_1 : throwCCE());
      last(this.srsList_0).start();
    }
    if ((buff & FightingCharacter$Companion_getInstance().BUFF_MASK_MIAN) === FightingCharacter$Companion_getInstance().BUFF_MASK_MIAN) {
      this.srsList_0.add_11rb$(Kotlin.isType(tmp$_2 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$SRS_getInstance(), 1, 246), ResSrs) ? tmp$_2 : throwCCE());
      last(this.srsList_0).start();
    }
    if ((buff & FightingCharacter$Companion_getInstance().BUFF_MASK_GONG) === FightingCharacter$Companion_getInstance().BUFF_MASK_GONG) {
      this.srsList_0.add_11rb$(Kotlin.isType(tmp$_3 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$SRS_getInstance(), 1, 240), ResSrs) ? tmp$_3 : throwCCE());
      last(this.srsList_0).start();
    }
    if ((buff & FightingCharacter$Companion_getInstance().BUFF_MASK_FANG) === FightingCharacter$Companion_getInstance().BUFF_MASK_FANG) {
      this.srsList_0.add_11rb$(Kotlin.isType(tmp$_4 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$SRS_getInstance(), 1, 241), ResSrs) ? tmp$_4 : throwCCE());
      last(this.srsList_0).start();
    }
    if ((buff & FightingCharacter$Companion_getInstance().BUFF_MASK_SU) === FightingCharacter$Companion_getInstance().BUFF_MASK_SU) {
      this.srsList_0.add_11rb$(Kotlin.isType(tmp$_5 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$SRS_getInstance(), 1, 242), ResSrs) ? tmp$_5 : throwCCE());
      last(this.srsList_0).start();
    }
  }
  RaiseAnimation.prototype.update_s8cxhz$ = function (delta) {
    if (this.bShowNum_0) {
      this.cnt_0 = this.cnt_0.add(delta);
      if (this.cnt_0.toNumber() > 50) {
        this.cnt_0 = L0;
        this.dt_0 = this.dt_0 + 1 | 0;
        this.dy_0 = this.dy_0 - this.dt_0 | 0;
        if (this.dt_0 > 4) {
          this.bShowNum_0 = false;
        }
      }
    }
     else {
      if (this.srsList_0.isEmpty()) {
        return false;
      }
       else {
        if (!first_0(this.srsList_0).update_s8cxhz$(delta)) {
          this.srsList_0.removeAt_za3lpa$(0);
          return !this.srsList_0.isEmpty();
        }
      }
    }
    return true;
  };
  RaiseAnimation.prototype.draw_9in0vv$ = function (canvas) {
    if (this.bShowNum_0) {
      canvas.drawBitmap_t8cslu$(this.raiseNum_0, this.x_0, this.y_0 + this.dy_0 | 0);
    }
     else {
      if (this.srsList_0.size > 0) {
        first_0(this.srsList_0).drawAbsolutely_2g4tob$(canvas, this.x_0, this.y_0);
      }
    }
  };
  RaiseAnimation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RaiseAnimation',
    interfaces: [Animation]
  };
  function RaiseBitmapAnimation(x, y, image) {
    this.x_0 = x;
    this.y_0 = y;
    this.image = image;
    this.dy_0 = 0;
    this.dt_0 = 0;
    this.cnt_0 = L0;
  }
  RaiseBitmapAnimation.prototype.update_s8cxhz$ = function (delta) {
    this.cnt_0 = this.cnt_0.add(delta);
    if (this.cnt_0.toNumber() > 50) {
      this.cnt_0 = L0;
      this.dt_0 = this.dt_0 + 1 | 0;
      this.dy_0 = this.dy_0 - this.dt_0 | 0;
      if (this.dt_0 > 4) {
        return false;
      }
    }
    return true;
  };
  RaiseBitmapAnimation.prototype.draw_9in0vv$ = function (canvas) {
    canvas.drawBitmap_t8cslu$(this.image, this.x_0, this.y_0 + this.dy_0 | 0);
  };
  RaiseBitmapAnimation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RaiseBitmapAnimation',
    interfaces: [Animation]
  };
  function CombatSuccess(parent, exp, money, mGoodsList, lvuplist) {
    this.parent_0 = parent;
    this.mGoodsList_0 = mGoodsList;
    this.mMsgList_0 = ArrayList_init();
    this.mLvupList_0 = null;
    this.mCnt_0 = L0;
    this.mIsAnyKeyPressed_0 = false;
    var tmp$;
    var e = exp.toString();
    var tmp$_0 = this.mMsgList_0;
    var tmp$_1 = this.parent_0;
    var $receiver = '\u83B7\u5F97\u7ECF\u9A8C     ';
    var endIndex = 9 - e.length | 0;
    tmp$_0.add_11rb$(new MsgScreen(tmp$_1, 18, $receiver.substring(0, endIndex) + e));
    var m = money.toString();
    var tmp$_2 = this.mMsgList_0;
    var tmp$_3 = this.parent_0;
    var $receiver_0 = '\u6218\u6597\u83B7\u5F97        ';
    var endIndex_0 = 10 - m.length | 0;
    tmp$_2.add_11rb$(new MsgScreen(tmp$_3, 46, $receiver_0.substring(0, endIndex_0) + m + '\u94B1'));
    this.mLvupList_0 = ArrayList_init();
    tmp$ = lvuplist.iterator();
    while (tmp$.hasNext()) {
      var p = tmp$.next();
      this.mLvupList_0.add_11rb$(MsgScreen_init(this.parent_0, p.name + '\u4FEE\u884C\u63D0\u5347'));
      this.mLvupList_0.add_11rb$(new LevelupScreen(this.parent_0, p));
      var magicChain = p.magicChain;
      if (magicChain != null) {
        var newNum = p.levelupChain.getLearnMagicNum_za3lpa$(p.level);
        var oldNum = p.levelupChain.getLearnMagicNum_za3lpa$(p.level - 1 | 0);
        var destination = this.mLvupList_0;
        var tmp$_4;
        tmp$_4 = until(oldNum, newNum).iterator();
        while (tmp$_4.hasNext()) {
          var item = tmp$_4.next();
          destination.add_11rb$(new LearnMagicScreen(this.parent_0, p.name, magicChain.getMagic_za3lpa$(item).magicName));
        }
      }
    }
  }
  CombatSuccess.prototype.update_s8cxhz$ = function (delta) {
    this.mCnt_0 = this.mCnt_0.add(delta);
    if (this.mCnt_0.toNumber() > 1000 || this.mIsAnyKeyPressed_0) {
      this.mCnt_0 = L0;
      this.mIsAnyKeyPressed_0 = false;
      if (this.mGoodsList_0.size === 0) {
        if (this.mLvupList_0.size === 0) {
          return true;
        }
         else {
          this.mMsgList_0.add_11rb$(this.mLvupList_0.removeAt_za3lpa$(0));
        }
      }
       else {
        var g = this.mGoodsList_0.removeAt_za3lpa$(0);
        this.mMsgList_0.add_11rb$(MsgScreen_init(this.parent_0, '\u5F97\u5230 ' + g.name + ' x' + g.goodsNum));
      }
    }
    return false;
  };
  CombatSuccess.prototype.draw_9in0vv$ = function (canvas) {
    var tmp$;
    tmp$ = this.mMsgList_0.iterator();
    while (tmp$.hasNext()) {
      var s = tmp$.next();
      s.draw_9in0vv$(canvas);
    }
  };
  CombatSuccess.prototype.onKeyDown_za3lpa$ = function (key) {
  };
  CombatSuccess.prototype.onKeyUp_za3lpa$ = function (key) {
    this.mIsAnyKeyPressed_0 = true;
  };
  CombatSuccess.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CombatSuccess',
    interfaces: []
  };
  function LevelupScreen(parent, p) {
    this.parent_46sbj2$_0 = parent;
    this.mInfo_0 = null;
    var tmp$;
    var ri = Kotlin.isType(tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$PIC_getInstance(), 2, 9), ResImage) ? tmp$ : throwCCE();
    this.mInfo_0 = ensureNotNull(ri.getBitmap_za3lpa$(0));
    var canvas = new Canvas(this.mInfo_0);
    var lc = p.levelupChain;
    var curl = p.level;
    Util_getInstance().drawSmallNum_tj1hu5$(canvas, p.hp, 37, 9);
    p.hp = p.maxHP;
    Util_getInstance().drawSmallNum_tj1hu5$(canvas, p.maxHP - (lc.getMaxHP_za3lpa$(curl) - lc.getMaxHP_za3lpa$(curl - 1 | 0)) | 0, 56, 9);
    Util_getInstance().drawSmallNum_tj1hu5$(canvas, p.maxHP, 86, 9);
    Util_getInstance().drawSmallNum_tj1hu5$(canvas, p.maxHP, 105, 9);
    Util_getInstance().drawSmallNum_tj1hu5$(canvas, p.mp, 37, 21);
    p.mp = p.maxMP;
    Util_getInstance().drawSmallNum_tj1hu5$(canvas, p.maxMP - (lc.getMaxMP_za3lpa$(curl) - lc.getMaxMP_za3lpa$(curl - 1 | 0)) | 0, 56, 21);
    Util_getInstance().drawSmallNum_tj1hu5$(canvas, p.maxMP, 86, 21);
    Util_getInstance().drawSmallNum_tj1hu5$(canvas, p.maxMP, 105, 21);
    Util_getInstance().drawSmallNum_tj1hu5$(canvas, p.attack - (lc.getAttack_za3lpa$(curl) - lc.getAttack_za3lpa$(curl - 1 | 0)) | 0, 47, 33);
    Util_getInstance().drawSmallNum_tj1hu5$(canvas, p.attack, 96, 33);
    Util_getInstance().drawSmallNum_tj1hu5$(canvas, p.defend - (lc.getDefend_za3lpa$(curl) - lc.getDefend_za3lpa$(curl - 1 | 0)) | 0, 47, 45);
    Util_getInstance().drawSmallNum_tj1hu5$(canvas, p.defend, 96, 45);
    Util_getInstance().drawSmallNum_tj1hu5$(canvas, p.speed - (lc.getSpeed_za3lpa$(curl) - lc.getSpeed_za3lpa$(curl - 1 | 0)) | 0, 47, 57);
    Util_getInstance().drawSmallNum_tj1hu5$(canvas, p.speed, 96, 57);
    Util_getInstance().drawSmallNum_tj1hu5$(canvas, p.lingli - (lc.getLingli_za3lpa$(curl) - lc.getLingli_za3lpa$(curl - 1 | 0)) | 0, 47, 69);
    Util_getInstance().drawSmallNum_tj1hu5$(canvas, p.lingli, 96, 69);
    Util_getInstance().drawSmallNum_tj1hu5$(canvas, p.luck - (lc.getLuck_za3lpa$(curl) - lc.getLuck_za3lpa$(curl - 1 | 0)) | 0, 47, 81);
    Util_getInstance().drawSmallNum_tj1hu5$(canvas, p.luck, 96, 81);
  }
  Object.defineProperty(LevelupScreen.prototype, 'parent', {
    get: function () {
      return this.parent_46sbj2$_0;
    }
  });
  LevelupScreen.prototype.update_s8cxhz$ = function (delta) {
  };
  LevelupScreen.prototype.draw_9in0vv$ = function (canvas) {
    canvas.drawBitmap_t8cslu$(this.mInfo_0, (160 - this.mInfo_0.width | 0) / 2 | 0, (96 - this.mInfo_0.height | 0) / 2 | 0);
  };
  LevelupScreen.prototype.onKeyDown_za3lpa$ = function (key) {
  };
  LevelupScreen.prototype.onKeyUp_za3lpa$ = function (key) {
  };
  LevelupScreen.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LevelupScreen',
    interfaces: [BaseScreen]
  };
  function MsgScreen(parent, mY, _msg) {
    this.parent_wr51j0$_0 = parent;
    this.mY_0 = mY;
    this.mMsg_0 = null;
    this.mX_0 = 0;
    var tmp$;
    var msg = gbkBytes(_msg);
    var side = Kotlin.isType(tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$PIC_getInstance(), 2, 8), ResImage) ? tmp$ : throwCCE();
    this.mMsg_0 = Bitmap$Companion_getInstance().createBitmap_vux9f0$((msg.length * 8 | 0) + 8 | 0, 24);
    var c = new Canvas(this.mMsg_0);
    c.drawColor_we4i00$(Global_getInstance().COLOR_WHITE);
    side.draw_tj1hu5$(c, 1, 0, 0);
    side.draw_tj1hu5$(c, 2, this.mMsg_0.width - 3 | 0, 0);
    var p = new Paint();
    p.color = Global_getInstance().COLOR_BLACK;
    p.style = Paint$Style$FILL_AND_STROKE_getInstance();
    c.drawLine_x3aj6j$(0, 1, this.mMsg_0.width, 1, p);
    c.drawLine_x3aj6j$(0, 22, this.mMsg_0.width, 22, p);
    TextRender_getInstance().drawText_pbrmiz$(c, msg, 4, 4);
    this.mX_0 = (160 - this.mMsg_0.width | 0) / 2 | 0;
  }
  Object.defineProperty(MsgScreen.prototype, 'parent', {
    get: function () {
      return this.parent_wr51j0$_0;
    }
  });
  MsgScreen.prototype.update_s8cxhz$ = function (delta) {
  };
  MsgScreen.prototype.draw_9in0vv$ = function (canvas) {
    canvas.drawBitmap_t8cslu$(this.mMsg_0, this.mX_0, this.mY_0);
  };
  MsgScreen.prototype.onKeyDown_za3lpa$ = function (key) {
  };
  MsgScreen.prototype.onKeyUp_za3lpa$ = function (key) {
  };
  MsgScreen.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MsgScreen',
    interfaces: [BaseScreen]
  };
  function MsgScreen_init(parent, msg, $this) {
    $this = $this || Object.create(MsgScreen.prototype);
    MsgScreen.call($this, parent, 36, msg);
    return $this;
  }
  function LearnMagicScreen(parent, playerName, magicName) {
    this.parent_qgy22q$_0 = parent;
    var tmp$;
    this.mInfo_0 = ensureNotNull((Kotlin.isType(tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$PIC_getInstance(), 2, 10), ResImage) ? tmp$ : throwCCE()).getBitmap_za3lpa$(0));
    var pn;
    var mn;
    try {
      pn = gbkBytes(playerName);
      mn = gbkBytes(magicName);
    }
     catch (e) {
      if (Kotlin.isType(e, Error_0)) {
        pn = new Int8Array(0);
        mn = new Int8Array(0);
      }
       else
        throw e;
    }
    var canvas = new Canvas(this.mInfo_0);
    TextRender_getInstance().drawText_pbrmiz$(canvas, pn, (this.mInfo_0.width - (pn.length * 8 | 0) | 0) / 2 | 0, 8);
    TextRender_getInstance().drawText_pbrmiz$(canvas, mn, (this.mInfo_0.width - (mn.length * 8 | 0) | 0) / 2 | 0, 42);
  }
  Object.defineProperty(LearnMagicScreen.prototype, 'parent', {
    get: function () {
      return this.parent_qgy22q$_0;
    }
  });
  LearnMagicScreen.prototype.update_s8cxhz$ = function (delta) {
  };
  LearnMagicScreen.prototype.draw_9in0vv$ = function (canvas) {
    canvas.drawBitmap_t8cslu$(this.mInfo_0, (160 - this.mInfo_0.width | 0) / 2 | 0, (96 - this.mInfo_0.height | 0) / 2 | 0);
  };
  LearnMagicScreen.prototype.onKeyDown_za3lpa$ = function (key) {
  };
  LearnMagicScreen.prototype.onKeyUp_za3lpa$ = function (key) {
  };
  LearnMagicScreen.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LearnMagicScreen',
    interfaces: [BaseScreen]
  };
  function CombatUI(parent, mCallBack, mCurPlayerIndex) {
    CombatUI$Companion_getInstance();
    this.parent_i3j217$_0 = parent;
    this.mCallBack_0 = mCallBack;
    this.mCurPlayerIndex_0 = mCurPlayerIndex;
    this.mScreenStack_0 = new ScreenStack(this.game);
    this.mPlayerList_0 = emptyList();
    this.mMonsterList_0 = emptyList();
    this.mPlayerIndicator_0 = null;
    this.mTargetIndicator_0 = null;
    this.mMonsterIndicator_0 = null;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    this.mHeadsImg_0 = [Kotlin.isType(tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$PIC_getInstance(), 1, 1), ResImage) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$PIC_getInstance(), 1, 2), ResImage) ? tmp$_0 : throwCCE(), Kotlin.isType(tmp$_1 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$PIC_getInstance(), 1, 3), ResImage) ? tmp$_1 : throwCCE(), Kotlin.isType(tmp$_2 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$PIC_getInstance(), 1, 4), ResImage) ? tmp$_2 : throwCCE(), Kotlin.isType(tmp$_3 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$PIC_getInstance(), 1, 5), ResImage) ? tmp$_3 : throwCCE(), Kotlin.isType(tmp$_4 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$PIC_getInstance(), 1, 6), ResImage) ? tmp$_4 : throwCCE(), Kotlin.isType(tmp$_5 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$PIC_getInstance(), 1, 7), ResImage) ? tmp$_5 : throwCCE(), Kotlin.isType(tmp$_6 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$PIC_getInstance(), 1, 8), ResImage) ? tmp$_6 : throwCCE()];
    this.mScreenStack_0.pushScreen_2o7n0o$(new CombatUI$MainMenu(this, this));
    var tmpImg = Kotlin.isType(tmp$_7 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$PIC_getInstance(), 2, 4), ResImage) ? tmp$_7 : throwCCE();
    this.mPlayerIndicator_0 = new FrameAnimation(tmpImg, 1, 2);
    this.mTargetIndicator_0 = new FrameAnimation(tmpImg, 3, 4);
    tmpImg = Kotlin.isType(tmp$_8 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$PIC_getInstance(), 2, 3), ResImage) ? tmp$_8 : throwCCE();
    this.mMonsterIndicator_0 = new FrameAnimation(tmpImg);
  }
  Object.defineProperty(CombatUI.prototype, 'parent', {
    get: function () {
      return this.parent_i3j217$_0;
    }
  });
  Object.defineProperty(CombatUI.prototype, 'selectedPlayer_0', {
    get: function () {
      return this.mPlayerList_0.get_za3lpa$(this.mCurPlayerIndex_0);
    }
  });
  function CombatUI$CallBack() {
  }
  CombatUI$CallBack.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CallBack',
    interfaces: []
  };
  CombatUI.prototype.update_s8cxhz$ = function (delta) {
    this.mScreenStack_0.update_s8cxhz$(delta);
  };
  CombatUI.prototype.draw_9in0vv$ = function (canvas) {
    this.mScreenStack_0.draw_9in0vv$(canvas);
  };
  CombatUI.prototype.onKeyDown_za3lpa$ = function (key) {
    this.mScreenStack_0.keyDown_za3lpa$(key);
  };
  CombatUI.prototype.onKeyUp_za3lpa$ = function (key) {
    this.mScreenStack_0.keyUp_za3lpa$(key);
  };
  CombatUI.prototype.reset = function () {
    this.mScreenStack_0.clear();
    this.mScreenStack_0.pushScreen_2o7n0o$(new CombatUI$MainMenu(this, this));
  };
  CombatUI.prototype.setPlayerList_51hka1$ = function (list) {
    this.mPlayerList_0 = list;
  };
  CombatUI.prototype.setMonsterList_kg2ssq$ = function (list) {
    this.mMonsterList_0 = list;
  };
  CombatUI.prototype.setCurrentPlayerIndex_za3lpa$ = function (i) {
    this.mCurPlayerIndex_0 = i;
  };
  CombatUI.prototype.onActionSelected_0 = function (action) {
    var tmp$;
    (tmp$ = this.mCallBack_0) != null ? (tmp$.onActionSelected_wwcj9m$(action), Unit) : null;
  };
  CombatUI.prototype.onCancel_0 = function () {
    var tmp$;
    (tmp$ = this.mCallBack_0) != null ? (tmp$.onCancel(), Unit) : null;
  };
  CombatUI.prototype.getGBKBytes_61zpoe$ = function (s) {
    return gbkBytes(s);
  };
  function CombatUI$MainMenu($outer, parent) {
    this.$outer = $outer;
    this.parent_6sidor$_0 = parent;
    var tmp$, tmp$_0;
    this.mMenuIcon_0 = Kotlin.isType(tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$PIC_getInstance(), 2, 1), ResImage) ? tmp$ : throwCCE();
    this.mPlayerInfoBg_0 = Kotlin.isType(tmp$_0 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$PIC_getInstance(), 2, 2), ResImage) ? tmp$_0 : throwCCE();
    this.mCurIconIndex_0 = 1;
  }
  Object.defineProperty(CombatUI$MainMenu.prototype, 'parent', {
    get: function () {
      return this.parent_6sidor$_0;
    }
  });
  CombatUI$MainMenu.prototype.update_s8cxhz$ = function (delta) {
    if (this.$outer.selectedPlayer_0.isConfusing)
      this.$outer.onActionSelected_0(new ActionNop(this.$outer.selectedPlayer_0));
    else if (this.$outer.selectedPlayer_0.isSleeping)
      this.$outer.onActionSelected_0(new ActionNop(this.$outer.selectedPlayer_0));
    else
      this.$outer.mPlayerIndicator_0.update_s8cxhz$(delta);
  };
  CombatUI$MainMenu.prototype.draw_9in0vv$ = function (canvas) {
    this.mMenuIcon_0.draw_tj1hu5$(canvas, this.mCurIconIndex_0, 7, 96 - this.mMenuIcon_0.height | 0);
    this.mPlayerInfoBg_0.draw_tj1hu5$(canvas, 1, 49, 66);
    var p = this.$outer.selectedPlayer_0;
    this.$outer.mHeadsImg_0[p.index - 1 | 0].draw_tj1hu5$(canvas, 1, 50, 63);
    Util_getInstance().drawSmallNum_tj1hu5$(canvas, p.hp, 79, 72);
    Util_getInstance().drawSmallNum_tj1hu5$(canvas, p.maxHP, 104, 72);
    Util_getInstance().drawSmallNum_tj1hu5$(canvas, p.mp, 79, 83);
    Util_getInstance().drawSmallNum_tj1hu5$(canvas, p.maxMP, 104, 83);
    this.$outer.mPlayerIndicator_0.draw_2g4tob$(canvas, CombatUI$Companion_getInstance().sPlayerIndicatorPos_0[this.$outer.mCurPlayerIndex_0].x, CombatUI$Companion_getInstance().sPlayerIndicatorPos_0[this.$outer.mCurPlayerIndex_0].y);
  };
  CombatUI$MainMenu.prototype.onKeyDown_za3lpa$ = function (key) {
    switch (key) {
      case 3:
        if (this.$outer.selectedPlayer_0.isSealed) {
          return;
        }

        this.mCurIconIndex_0 = 2;
        break;
      case 2:
        this.mCurIconIndex_0 = 3;
        break;
      case 4:
        var $receiver = this.$outer.mPlayerList_0;
        var destination = ArrayList_init();
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (element.isAlive && !element.isSleeping)
            destination.add_11rb$(element);
        }

        var aliveCount = destination.size;
        if (aliveCount <= 1) {
          return;
        }

        this.mCurIconIndex_0 = 4;
        break;
      case 1:
        this.mCurIconIndex_0 = 1;
        break;
    }
  };
  function CombatUI$MainMenu$onKeyUp$ObjectLiteral(this$CombatUI) {
    this.this$CombatUI = this$CombatUI;
  }
  CombatUI$MainMenu$onKeyUp$ObjectLiteral.prototype.onCharacterSelected_qpjxya$ = function (fc) {
    this.this$CombatUI.onActionSelected_0(new ActionPhysicalAttackOne(this.this$CombatUI.selectedPlayer_0, fc));
  };
  CombatUI$MainMenu$onKeyUp$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [CombatUI$OnCharacterSelectedListener]
  };
  function CombatUI$MainMenu$onKeyUp$lambda$ObjectLiteral(this$, this$CombatUI, this$MainMenu) {
    this.this$ = this$;
    this.this$CombatUI = this$CombatUI;
    this.this$MainMenu = this$MainMenu;
  }
  function CombatUI$MainMenu$onKeyUp$lambda$ObjectLiteral$onItemSelected$ObjectLiteral(this$CombatUI, closure$magic) {
    this.this$CombatUI = this$CombatUI;
    this.closure$magic = closure$magic;
  }
  CombatUI$MainMenu$onKeyUp$lambda$ObjectLiteral$onItemSelected$ObjectLiteral.prototype.onCharacterSelected_qpjxya$ = function (fc) {
    this.this$CombatUI.onActionSelected_0(new ActionMagicAttackOne(this.this$CombatUI.selectedPlayer_0, fc, this.closure$magic));
  };
  CombatUI$MainMenu$onKeyUp$lambda$ObjectLiteral$onItemSelected$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [CombatUI$OnCharacterSelectedListener]
  };
  function CombatUI$MainMenu$onKeyUp$lambda$ObjectLiteral$onItemSelected$ObjectLiteral_0(this$CombatUI, closure$magic) {
    this.this$CombatUI = this$CombatUI;
    this.closure$magic = closure$magic;
  }
  CombatUI$MainMenu$onKeyUp$lambda$ObjectLiteral$onItemSelected$ObjectLiteral_0.prototype.onCharacterSelected_qpjxya$ = function (fc) {
    this.this$CombatUI.onActionSelected_0(new ActionMagicHelpOne(this.this$CombatUI.selectedPlayer_0, fc, this.closure$magic));
  };
  CombatUI$MainMenu$onKeyUp$lambda$ObjectLiteral$onItemSelected$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [CombatUI$OnCharacterSelectedListener]
  };
  CombatUI$MainMenu$onKeyUp$lambda$ObjectLiteral.prototype.onItemSelected_3fncnk$ = function (magic) {
    var tmp$, tmp$_0;
    this.this$.popScreen();
    if (Kotlin.isType(magic, MagicAttack) || Kotlin.isType(magic, MagicSpecial)) {
      if (magic.isForAll) {
        tmp$_0 = new ActionMagicAttackAll(this.this$CombatUI.selectedPlayer_0, this.this$CombatUI.mMonsterList_0, Kotlin.isType(tmp$ = magic, MagicAttack) ? tmp$ : throwCCE());
        this.this$CombatUI.onActionSelected_0(tmp$_0);
      }
       else {
        this.this$.pushScreen_2o7n0o$(new CombatUI$MenuCharacterSelect(this.this$CombatUI, this.this$MainMenu, this.this$CombatUI.mMonsterIndicator_0, CombatUI$Companion_getInstance().sMonsterIndicatorPos_0, this.this$CombatUI.mMonsterList_0, new CombatUI$MainMenu$onKeyUp$lambda$ObjectLiteral$onItemSelected$ObjectLiteral(this.this$CombatUI, magic), true));
      }
    }
     else {
      if (magic.isForAll) {
        this.this$CombatUI.onActionSelected_0(new ActionMagicHelpAll(this.this$CombatUI.selectedPlayer_0, this.this$CombatUI.mPlayerList_0, magic));
      }
       else {
        this.this$.pushScreen_2o7n0o$(new CombatUI$MenuCharacterSelect(this.this$CombatUI, this.this$MainMenu, this.this$CombatUI.mTargetIndicator_0, CombatUI$Companion_getInstance().sPlayerIndicatorPos_0, this.this$CombatUI.mPlayerList_0, new CombatUI$MainMenu$onKeyUp$lambda$ObjectLiteral$onItemSelected$ObjectLiteral_0(this.this$CombatUI, magic), false));
      }
    }
  };
  CombatUI$MainMenu$onKeyUp$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ScreenMagic$OnItemSelectedListener]
  };
  function CombatUI$MainMenu$onKeyUp$ObjectLiteral_0(this$CombatUI) {
    this.this$CombatUI = this$CombatUI;
  }
  CombatUI$MainMenu$onKeyUp$ObjectLiteral_0.prototype.onCharacterSelected_qpjxya$ = function (fc) {
    var lst = ArrayList_init();
    var first = this.this$CombatUI.selectedPlayer_0;
    lst.add_11rb$(first);
    var $receiver = this.this$CombatUI.mPlayerList_0;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.isAlive && !equals(element, first))
        destination.add_11rb$(element);
    }
    lst.addAll_brywnq$(destination);
    this.this$CombatUI.onActionSelected_0(ActionCoopMagic_init(lst, fc));
  };
  CombatUI$MainMenu$onKeyUp$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [CombatUI$OnCharacterSelectedListener]
  };
  CombatUI$MainMenu.prototype.onKeyUp_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_ENTER) {
      switch (this.mCurIconIndex_0) {
        case 1:
          if (this.$outer.selectedPlayer_0.hasAtbuff_za3lpa$(FightingCharacter$Companion_getInstance().BUFF_MASK_ALL)) {
            this.$outer.onActionSelected_0(new ActionPhysicalAttackAll(this.$outer.selectedPlayer_0, this.$outer.mMonsterList_0));
            return;
          }

          this.pushScreen_2o7n0o$(new CombatUI$MenuCharacterSelect(this.$outer, this, this.$outer.mMonsterIndicator_0, CombatUI$Companion_getInstance().sMonsterIndicatorPos_0, this.$outer.mMonsterList_0, new CombatUI$MainMenu$onKeyUp$ObjectLiteral(this.$outer), true));
          break;
        case 2:
          this.$outer;
          var this$CombatUI = this.$outer;
          block$break: do {
            var magics = this$CombatUI.selectedPlayer_0.getAllMagics();
            if (magics.isEmpty()) {
              break block$break;
            }
            this.pushScreen_2o7n0o$(new ScreenMagic(this, magics, this$CombatUI.selectedPlayer_0.mp, new CombatUI$MainMenu$onKeyUp$lambda$ObjectLiteral(this, this$CombatUI, this)));
          }
           while (false);
          break;
        case 3:
          this.pushScreen_2o7n0o$(new CombatUI$MenuMisc(this.$outer, this));
          break;
        case 4:
          this.pushScreen_2o7n0o$(new CombatUI$MenuCharacterSelect(this.$outer, this, this.$outer.mMonsterIndicator_0, CombatUI$Companion_getInstance().sMonsterIndicatorPos_0, this.$outer.mMonsterList_0, new CombatUI$MainMenu$onKeyUp$ObjectLiteral_0(this.$outer), true));
          break;
      }
    }
     else if (key === Global_getInstance().KEY_CANCEL) {
      this.$outer.onCancel_0();
    }
  };
  CombatUI$MainMenu.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MainMenu',
    interfaces: [BaseScreen]
  };
  function CombatUI$OnCharacterSelectedListener() {
  }
  CombatUI$OnCharacterSelectedListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'OnCharacterSelectedListener',
    interfaces: []
  };
  function CombatUI$MenuCharacterSelect($outer, parent, mIndicator, mIndicatorPos, mList, mOnCharacterSelectedListener, mIgnoreDead) {
    this.$outer = $outer;
    this.parent_rqn4hf$_0 = parent;
    this.mIndicator_0 = mIndicator;
    this.mIndicatorPos_0 = mIndicatorPos;
    this.mList_0 = mList;
    this.mOnCharacterSelectedListener_0 = mOnCharacterSelectedListener;
    this.mIgnoreDead_0 = mIgnoreDead;
    this.mCurSel_0 = 0;
    var tmp$;
    tmp$ = this.mList_0.size;
    for (var i = 0; i < tmp$; i++) {
      if (this.mList_0.get_za3lpa$(i).isAlive) {
        this.mCurSel_0 = i;
        break;
      }
    }
  }
  Object.defineProperty(CombatUI$MenuCharacterSelect.prototype, 'parent', {
    get: function () {
      return this.parent_rqn4hf$_0;
    }
  });
  CombatUI$MenuCharacterSelect.prototype.update_s8cxhz$ = function (delta) {
    this.mIndicator_0.update_s8cxhz$(delta);
  };
  CombatUI$MenuCharacterSelect.prototype.draw_9in0vv$ = function (canvas) {
    this.mIndicator_0.draw_2g4tob$(canvas, this.mIndicatorPos_0[this.mCurSel_0].x, this.mIndicatorPos_0[this.mCurSel_0].y);
    if (equals(this.mIndicator_0, this.$outer.mTargetIndicator_0)) {
      var p = this.$outer.mPlayerList_0.get_za3lpa$(this.mCurSel_0);
      this.$outer.mHeadsImg_0[p.index - 1 | 0].draw_tj1hu5$(canvas, 1, 50, 63);
      Util_getInstance().drawSmallNum_tj1hu5$(canvas, p.hp, 79, 72);
      Util_getInstance().drawSmallNum_tj1hu5$(canvas, p.maxHP, 104, 72);
      Util_getInstance().drawSmallNum_tj1hu5$(canvas, p.mp, 79, 83);
      Util_getInstance().drawSmallNum_tj1hu5$(canvas, p.maxMP, 104, 83);
    }
  };
  CombatUI$MenuCharacterSelect.prototype.selectNextTarget_0 = function () {
    do {
      this.mCurSel_0 = this.mCurSel_0 + 1 | 0;
      this.mCurSel_0 = this.mCurSel_0 % this.mList_0.size;
    }
     while (this.mIgnoreDead_0 && !this.mList_0.get_za3lpa$(this.mCurSel_0).isAlive);
  };
  CombatUI$MenuCharacterSelect.prototype.selectPreTarget_0 = function () {
    do {
      this.mCurSel_0 = this.mCurSel_0 - 1 | 0;
      this.mCurSel_0 = (this.mCurSel_0 + this.mList_0.size | 0) % this.mList_0.size;
    }
     while (this.mIgnoreDead_0 && !this.mList_0.get_za3lpa$(this.mCurSel_0).isAlive);
  };
  CombatUI$MenuCharacterSelect.prototype.onKeyDown_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_RIGHT) {
      this.selectNextTarget_0();
    }
     else if (key === Global_getInstance().KEY_LEFT) {
      this.selectPreTarget_0();
    }
  };
  CombatUI$MenuCharacterSelect.prototype.onKeyUp_za3lpa$ = function (key) {
    var tmp$;
    if (key === Global_getInstance().KEY_CANCEL) {
      this.popScreen();
    }
     else if (key === Global_getInstance().KEY_ENTER) {
      this.popScreen();
      (tmp$ = this.mOnCharacterSelectedListener_0) != null ? (tmp$.onCharacterSelected_qpjxya$(this.mList_0.get_za3lpa$(this.mCurSel_0)), Unit) : null;
    }
  };
  CombatUI$MenuCharacterSelect.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MenuCharacterSelect',
    interfaces: [BaseScreen]
  };
  function CombatUI$MenuMisc($outer, parent) {
    this.$outer = $outer;
    this.parent_635dw8$_0 = parent;
    this.mBg_0 = Util_getInstance().getFrameBitmap_vux9f0$(38, 86);
    this.mText_0 = this.$outer.getGBKBytes_61zpoe$('\u56F4\u653B\u9053\u5177\u9632\u5FA1\u9003\u8DD1\u72B6\u6001');
    this.mItemText_0 = [this.$outer.getGBKBytes_61zpoe$('\u56F4\u653B'), this.$outer.getGBKBytes_61zpoe$('\u9053\u5177'), this.$outer.getGBKBytes_61zpoe$('\u9632\u5FA1'), this.$outer.getGBKBytes_61zpoe$('\u9003\u8DD1'), this.$outer.getGBKBytes_61zpoe$('\u72B6\u6001')];
    this.mTextRect_0 = new Rect(12, 7, 45, 87);
    this.mCurSelIndex_0 = 0;
  }
  Object.defineProperty(CombatUI$MenuMisc.prototype, 'parent', {
    get: function () {
      return this.parent_635dw8$_0;
    }
  });
  CombatUI$MenuMisc.prototype.update_s8cxhz$ = function (delta) {
  };
  CombatUI$MenuMisc.prototype.draw_9in0vv$ = function (canvas) {
    canvas.drawBitmap_t8cslu$(this.mBg_0, 9, 4);
    TextRender_getInstance().drawText_tz7kd0$(canvas, this.mText_0, 0, this.mTextRect_0);
    TextRender_getInstance().drawSelText_pbrmiz$(canvas, this.mItemText_0[this.mCurSelIndex_0], this.mTextRect_0.left, this.mTextRect_0.top + (this.mCurSelIndex_0 * 16 | 0) | 0);
  };
  CombatUI$MenuMisc.prototype.onKeyDown_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_UP) {
      this.mCurSelIndex_0 = this.mCurSelIndex_0 - 1 | 0;
      this.mCurSelIndex_0 = (this.mItemText_0.length + this.mCurSelIndex_0 | 0) % this.mItemText_0.length;
    }
     else if (key === Global_getInstance().KEY_DOWN) {
      this.mCurSelIndex_0 = this.mCurSelIndex_0 + 1 | 0;
      this.mCurSelIndex_0 = this.mCurSelIndex_0 % this.mItemText_0.length;
    }
  };
  CombatUI$MenuMisc.prototype.onKeyUp_za3lpa$ = function (key) {
    var tmp$, tmp$_0;
    if (key === Global_getInstance().KEY_ENTER) {
      switch (this.mCurSelIndex_0) {
        case 0:
          (tmp$ = this.$outer.mCallBack_0) != null ? (tmp$.onAutoAttack(), Unit) : null;
          break;
        case 1:
          this.pushScreen_2o7n0o$(new CombatUI$MenuGoods(this.$outer, this));
          break;
        case 2:
          var p = this.$outer.selectedPlayer_0;
          ensureNotNull(p.fightingSprite).currentFrame = 9;
          this.$outer.onActionSelected_0(new ActionDefend(p));
          break;
        case 3:
          (tmp$_0 = this.$outer.mCallBack_0) != null ? (tmp$_0.onFlee(), Unit) : null;
          break;
        case 4:
          this.popScreen();
          this.pushScreen_2o7n0o$(new CombatUI$MenuMisc$MenuState(this, this));
          break;
      }
    }
     else if (key === Global_getInstance().KEY_CANCEL) {
      this.popScreen();
    }
  };
  function CombatUI$MenuMisc$MenuState($outer, parent) {
    this.$outer = $outer;
    this.parent_3yzzuc$_0 = parent;
    var tmp$, tmp$_0;
    this.mBg_0 = Kotlin.isType(tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$PIC_getInstance(), 2, 11), ResImage) ? tmp$ : throwCCE();
    this.mMarker_0 = Kotlin.isType(tmp$_0 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$PIC_getInstance(), 2, 12), ResImage) ? tmp$_0 : throwCCE();
    this.mCurPlayer_0 = 0;
    this.mCurPlayer_0 = this.$outer.$outer.mCurPlayerIndex_0;
  }
  Object.defineProperty(CombatUI$MenuMisc$MenuState.prototype, 'parent', {
    get: function () {
      return this.parent_3yzzuc$_0;
    }
  });
  CombatUI$MenuMisc$MenuState.prototype.update_s8cxhz$ = function (delta) {
  };
  function CombatUI$MenuMisc$MenuState$draw$drawMarker(closure$p, this$MenuState, closure$canvas, closure$x, closure$y) {
    return function (mask, ox, isBool) {
      var tmp$;
      var buff = first(closure$p.debuff.getBuffs_za3lpa$(mask));
      if (!isBool && buff.value > 0)
        tmp$ = 1;
      else if (!isBool && buff.value < 0)
        tmp$ = 2;
      else if (isBool && buff.value === 0)
        tmp$ = 3;
      else if (isBool && buff.value !== 0)
        tmp$ = 4;
      else if (!isBool && buff.value === 0)
        tmp$ = 5;
      else
        tmp$ = 1;
      var ind = tmp$;
      this$MenuState.mMarker_0.draw_tj1hu5$(closure$canvas, ind, closure$x + ox | 0, closure$y + 48 | 0);
      Util_getInstance().drawSmallNum_tj1hu5$(closure$canvas, buff.round, closure$x + ox + 1 | 0, closure$y + 57 | 0);
    };
  }
  CombatUI$MenuMisc$MenuState.prototype.draw_9in0vv$ = function (canvas) {
    var x = (160 - this.mBg_0.width | 0) / 2 | 0;
    var y = (96 - this.mBg_0.height | 0) / 2 | 0;
    this.mBg_0.draw_tj1hu5$(canvas, 1, x, y);
    var p = this.$outer.$outer.mPlayerList_0.get_za3lpa$(this.mCurPlayer_0);
    p.drawHead_2g4tob$(canvas, x + 7 | 0, y + 4 | 0);
    Util_getInstance().drawSmallNum_tj1hu5$(canvas, p.hp, x + 50 | 0, y + 9 | 0);
    Util_getInstance().drawSmallNum_tj1hu5$(canvas, p.attack, x + 50 | 0, y + 21 | 0);
    Util_getInstance().drawSmallNum_tj1hu5$(canvas, p.luck, x + 87 | 0, y + 9 | 0);
    Util_getInstance().drawSmallNum_tj1hu5$(canvas, p.speed, x + 87 | 0, y + 21 | 0);
    var drawMarker = CombatUI$MenuMisc$MenuState$draw$drawMarker(p, this, canvas, x, y);
    drawMarker(FightingCharacter$Companion_getInstance().BUFF_MASK_GONG, 9, false);
    drawMarker(FightingCharacter$Companion_getInstance().BUFF_MASK_FANG, 25, false);
    drawMarker(FightingCharacter$Companion_getInstance().BUFF_MASK_SU, 41, false);
    drawMarker(FightingCharacter$Companion_getInstance().BUFF_MASK_DU, 57, true);
    drawMarker(FightingCharacter$Companion_getInstance().BUFF_MASK_LUAN, 73, true);
    drawMarker(FightingCharacter$Companion_getInstance().BUFF_MASK_FENG, 88, true);
    drawMarker(FightingCharacter$Companion_getInstance().BUFF_MASK_MIAN, 104, true);
  };
  CombatUI$MenuMisc$MenuState.prototype.onKeyDown_za3lpa$ = function (key) {
    switch (key) {
      case 4:
      case 2:
      case 6:
      case 7:
        this.mCurPlayer_0 = this.mCurPlayer_0 + 1 | 0;
        this.mCurPlayer_0 = this.mCurPlayer_0 % this.$outer.$outer.mPlayerList_0.size;
        break;
      case 3:
      case 1:
      case 5:
        this.mCurPlayer_0 = this.mCurPlayer_0 - 1 | 0;
        this.mCurPlayer_0 = (this.mCurPlayer_0 + this.$outer.$outer.mPlayerList_0.size | 0) % this.$outer.$outer.mPlayerList_0.size;
        break;
    }
  };
  CombatUI$MenuMisc$MenuState.prototype.onKeyUp_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_CANCEL) {
      this.popScreen();
      this.pushScreen_2o7n0o$(new CombatUI$MenuMisc(this.$outer.$outer, this));
    }
  };
  CombatUI$MenuMisc$MenuState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MenuState',
    interfaces: [BaseScreen]
  };
  CombatUI$MenuMisc.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MenuMisc',
    interfaces: [BaseScreen]
  };
  function CombatUI$MenuGoods($outer, parent) {
    this.$outer = $outer;
    this.parent_j2r09u$_0 = parent;
    this.mBg_0 = Util_getInstance().getFrameBitmap_vux9f0$(38, 54);
    this.mText_0 = this.$outer.getGBKBytes_61zpoe$('\u88C5\u5907\u6295\u63B7\u4F7F\u7528');
    this.mItemText_0 = [this.$outer.getGBKBytes_61zpoe$('\u88C5\u5907'), this.$outer.getGBKBytes_61zpoe$('\u6295\u63B7'), this.$outer.getGBKBytes_61zpoe$('\u4F7F\u7528')];
    this.mTextRect_0 = new Rect(32, 17, 32 + this.mBg_0.width | 0, 17 + this.mBg_0.height | 0);
    this.mSelIndex_0 = 0;
  }
  Object.defineProperty(CombatUI$MenuGoods.prototype, 'parent', {
    get: function () {
      return this.parent_j2r09u$_0;
    }
  });
  Object.defineProperty(CombatUI$MenuGoods.prototype, 'useableGoodsList_0', {
    get: function () {
      var tmp$;
      var rlt = ArrayList_init();
      tmp$ = Player$Companion_getInstance().sGoodsList.goodsList.iterator();
      while (tmp$.hasNext()) {
        var g = tmp$.next();
        switch (g.type) {
          case 9:
          case 10:
          case 11:
          case 12:
            rlt.add_11rb$(g);
            break;
        }
      }
      return rlt;
    }
  });
  Object.defineProperty(CombatUI$MenuGoods.prototype, 'throwableGoodsList_0', {
    get: function () {
      var tmp$;
      var $receiver = Player$Companion_getInstance().sGoodsList.goodsList;
      var destination = ArrayList_init();
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (element.type === 8)
          destination.add_11rb$(element);
      }
      var hide = destination;
      if (SaveLoadGame_getInstance().allowTossArm) {
        var $receiver_0 = Player$Companion_getInstance().sGoodsList.equipList;
        var destination_0 = ArrayList_init();
        var tmp$_1;
        tmp$_1 = $receiver_0.iterator();
        while (tmp$_1.hasNext()) {
          var element_0 = tmp$_1.next();
          if (element_0.type === 7)
            destination_0.add_11rb$(element_0);
        }
        tmp$ = destination_0;
      }
       else {
        tmp$ = ArrayList_init();
      }
      var arms = tmp$;
      return plus(hide, arms);
    }
  });
  CombatUI$MenuGoods.prototype.update_s8cxhz$ = function (delta) {
  };
  CombatUI$MenuGoods.prototype.draw_9in0vv$ = function (canvas) {
    canvas.drawBitmap_t8cslu$(this.mBg_0, 29, 14);
    TextRender_getInstance().drawText_tz7kd0$(canvas, this.mText_0, 0, this.mTextRect_0);
    TextRender_getInstance().drawSelText_pbrmiz$(canvas, this.mItemText_0[this.mSelIndex_0], this.mTextRect_0.left, this.mTextRect_0.top + (16 * this.mSelIndex_0 | 0) | 0);
  };
  CombatUI$MenuGoods.prototype.onKeyDown_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_DOWN) {
      this.mSelIndex_0 = this.mSelIndex_0 + 1 | 0;
      this.mSelIndex_0 = this.mSelIndex_0 % this.mItemText_0.length;
    }
     else if (key === Global_getInstance().KEY_UP) {
      this.mSelIndex_0 = this.mSelIndex_0 - 1 | 0;
      this.mSelIndex_0 = (this.mSelIndex_0 + this.mItemText_0.length | 0) % this.mItemText_0.length;
    }
  };
  function CombatUI$MenuGoods$onKeyUp$ObjectLiteral(this$MenuGoods) {
    this.this$MenuGoods = this$MenuGoods;
  }
  CombatUI$MenuGoods$onKeyUp$ObjectLiteral.prototype.onItemSelected_6xxg66$ = function (goods) {
    this.this$MenuGoods.equipSelected_0(goods);
  };
  CombatUI$MenuGoods$onKeyUp$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ScreenGoodsList$OnItemSelectedListener]
  };
  function CombatUI$MenuGoods$onKeyUp$ObjectLiteral_0(this$MenuGoods, this$CombatUI) {
    this.this$MenuGoods = this$MenuGoods;
    this.this$CombatUI = this$CombatUI;
  }
  function CombatUI$MenuGoods$onKeyUp$ObjectLiteral$onItemSelected$ObjectLiteral(this$MenuGoods, closure$goods, this$CombatUI) {
    this.this$MenuGoods = this$MenuGoods;
    this.closure$goods = closure$goods;
    this.this$CombatUI = this$CombatUI;
  }
  CombatUI$MenuGoods$onKeyUp$ObjectLiteral$onItemSelected$ObjectLiteral.prototype.onCharacterSelected_qpjxya$ = function (fc) {
    var tmp$, tmp$_0;
    this.this$MenuGoods.game.bag.deleteGoods_6xxg66$(this.closure$goods);
    tmp$_0 = new ActionThrowItemOne(this.this$CombatUI.selectedPlayer_0, fc, Kotlin.isType(tmp$ = this.closure$goods, Throwable) ? tmp$ : throwCCE());
    this.this$CombatUI.onActionSelected_0(tmp$_0);
  };
  CombatUI$MenuGoods$onKeyUp$ObjectLiteral$onItemSelected$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [CombatUI$OnCharacterSelectedListener]
  };
  CombatUI$MenuGoods$onKeyUp$ObjectLiteral_0.prototype.onItemSelected_6xxg66$ = function (goods) {
    var tmp$, tmp$_0;
    this.this$MenuGoods.popScreen();
    this.this$MenuGoods.popScreen();
    if (goods.effectAll()) {
      this.this$MenuGoods.game.bag.deleteGoods_6xxg66$(goods);
      tmp$_0 = new ActionThrowItemAll(this.this$CombatUI.selectedPlayer_0, this.this$CombatUI.mMonsterList_0, Kotlin.isType(tmp$ = goods, Throwable) ? tmp$ : throwCCE());
      this.this$CombatUI.onActionSelected_0(tmp$_0);
    }
     else {
      this.this$MenuGoods.pushScreen_2o7n0o$(new CombatUI$MenuCharacterSelect(this.this$CombatUI, this.this$CombatUI, this.this$CombatUI.mMonsterIndicator_0, CombatUI$Companion_getInstance().sMonsterIndicatorPos_0, this.this$CombatUI.mMonsterList_0, new CombatUI$MenuGoods$onKeyUp$ObjectLiteral$onItemSelected$ObjectLiteral(this.this$MenuGoods, goods, this.this$CombatUI), true));
    }
  };
  CombatUI$MenuGoods$onKeyUp$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ScreenGoodsList$OnItemSelectedListener]
  };
  function CombatUI$MenuGoods$onKeyUp$ObjectLiteral_1(this$MenuGoods, this$CombatUI) {
    this.this$MenuGoods = this$MenuGoods;
    this.this$CombatUI = this$CombatUI;
  }
  function CombatUI$MenuGoods$onKeyUp$ObjectLiteral$onItemSelected$ObjectLiteral_0(this$MenuGoods, closure$goods, this$CombatUI) {
    this.this$MenuGoods = this$MenuGoods;
    this.closure$goods = closure$goods;
    this.this$CombatUI = this$CombatUI;
  }
  CombatUI$MenuGoods$onKeyUp$ObjectLiteral$onItemSelected$ObjectLiteral_0.prototype.onCharacterSelected_qpjxya$ = function (fc) {
    this.this$MenuGoods.game.bag.deleteGoods_6xxg66$(this.closure$goods);
    this.this$CombatUI.onActionSelected_0(new ActionUseItemOne(this.this$CombatUI.selectedPlayer_0, fc, this.closure$goods));
  };
  CombatUI$MenuGoods$onKeyUp$ObjectLiteral$onItemSelected$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [CombatUI$OnCharacterSelectedListener]
  };
  CombatUI$MenuGoods$onKeyUp$ObjectLiteral_1.prototype.onItemSelected_6xxg66$ = function (goods) {
    this.this$MenuGoods.popScreen();
    this.this$MenuGoods.popScreen();
    if (goods.effectAll()) {
      this.this$MenuGoods.game.bag.deleteGoods_6xxg66$(goods);
      this.this$CombatUI.onActionSelected_0(new ActionUseItemAll(this.this$CombatUI.selectedPlayer_0, this.this$CombatUI.mPlayerList_0, goods));
    }
     else {
      this.this$MenuGoods.pushScreen_2o7n0o$(new CombatUI$MenuCharacterSelect(this.this$CombatUI, this.this$MenuGoods, this.this$CombatUI.mTargetIndicator_0, CombatUI$Companion_getInstance().sPlayerIndicatorPos_0, this.this$CombatUI.mPlayerList_0, new CombatUI$MenuGoods$onKeyUp$ObjectLiteral$onItemSelected$ObjectLiteral_0(this.this$MenuGoods, goods, this.this$CombatUI), false));
    }
  };
  CombatUI$MenuGoods$onKeyUp$ObjectLiteral_1.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ScreenGoodsList$OnItemSelectedListener]
  };
  CombatUI$MenuGoods.prototype.onKeyUp_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_ENTER) {
      this.popScreen();
      switch (this.mSelIndex_0) {
        case 0:
          this.pushScreen_2o7n0o$(new ScreenGoodsList(this, Player$Companion_getInstance().sGoodsList.equipList, new CombatUI$MenuGoods$onKeyUp$ObjectLiteral(this), ScreenGoodsList$Mode$Use_getInstance()));
          break;
        case 1:
          this.pushScreen_2o7n0o$(new ScreenGoodsList(this, this.throwableGoodsList_0, new CombatUI$MenuGoods$onKeyUp$ObjectLiteral_0(this, this.$outer), ScreenGoodsList$Mode$Use_getInstance()));
          break;
        case 2:
          this.pushScreen_2o7n0o$(new ScreenGoodsList(this, this.useableGoodsList_0, new CombatUI$MenuGoods$onKeyUp$ObjectLiteral_1(this, this.$outer), ScreenGoodsList$Mode$Use_getInstance()));
          break;
      }
    }
     else if (key === Global_getInstance().KEY_CANCEL) {
      this.popScreen();
    }
  };
  function CombatUI$MenuGoods$equipSelected$ObjectLiteral(closure$list, closure$goods, this$MenuGoods) {
    this.closure$list = closure$list;
    this.closure$goods = closure$goods;
    this.parent_nvvq8w$_0 = this$MenuGoods;
    this.bg_8be2vx$ = Util_getInstance().getFrameBitmap_vux9f0$(86, 6 + (16 * closure$list.size | 0) | 0);
    this.curSel_8be2vx$ = 0;
    var array = Array_0(closure$list.size);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Int8Array(11);
    }
    this.itemsText_8be2vx$ = array;
    var tmp$_0;
    tmp$_0 = this.itemsText_8be2vx$;
    for (var i_0 = 0; i_0 !== tmp$_0.length; ++i_0) {
      for (var j = 0; j <= 9; j++) {
        this.itemsText_8be2vx$[i_0][j] = toByte(32 | 0);
      }
      var tmp = gbkBytes(closure$list.get_za3lpa$(i_0).name);
      System_getInstance().arraycopy_nlwz52$(tmp, 0, this.itemsText_8be2vx$[i_0], 0, tmp.length);
    }
  }
  Object.defineProperty(CombatUI$MenuGoods$equipSelected$ObjectLiteral.prototype, 'parent', {
    get: function () {
      return this.parent_nvvq8w$_0;
    }
  });
  CombatUI$MenuGoods$equipSelected$ObjectLiteral.prototype.update_s8cxhz$ = function (delta) {
  };
  CombatUI$MenuGoods$equipSelected$ObjectLiteral.prototype.onKeyUp_za3lpa$ = function (key) {
    var tmp$;
    if (key === Global_getInstance().KEY_ENTER) {
      if (this.closure$list.get_za3lpa$(this.curSel_8be2vx$).hasEquipt_vux9f0$(this.closure$goods.type, this.closure$goods.index)) {
        this.showMessage_4wgjuj$('\u5DF2\u88C5\u5907!', L1000);
      }
       else {
        this.popScreen();
        this.pushScreen_2o7n0o$(new ScreenChgEquipment(this, this.closure$list.get_za3lpa$(this.curSel_8be2vx$), Kotlin.isType(tmp$ = this.closure$goods, GoodsEquipment) ? tmp$ : throwCCE()));
      }
    }
     else if (key === Global_getInstance().KEY_CANCEL) {
      this.popScreen();
    }
  };
  CombatUI$MenuGoods$equipSelected$ObjectLiteral.prototype.onKeyDown_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_DOWN) {
      this.curSel_8be2vx$ = this.curSel_8be2vx$ + 1 | 0;
      this.curSel_8be2vx$ = this.curSel_8be2vx$ % this.itemsText_8be2vx$.length;
    }
     else if (key === Global_getInstance().KEY_UP) {
      this.curSel_8be2vx$ = this.curSel_8be2vx$ - 1 | 0;
      this.curSel_8be2vx$ = (this.curSel_8be2vx$ + this.itemsText_8be2vx$.length | 0) % this.itemsText_8be2vx$.length;
    }
  };
  CombatUI$MenuGoods$equipSelected$ObjectLiteral.prototype.draw_9in0vv$ = function (canvas) {
    var tmp$;
    canvas.drawBitmap_t8cslu$(this.bg_8be2vx$, 50, 14);
    tmp$ = this.itemsText_8be2vx$;
    for (var i = 0; i !== tmp$.length; ++i) {
      if (i !== this.curSel_8be2vx$) {
        TextRender_getInstance().drawText_pbrmiz$(canvas, this.itemsText_8be2vx$[i], 53, 17 + (16 * i | 0) | 0);
      }
       else {
        TextRender_getInstance().drawSelText_pbrmiz$(canvas, this.itemsText_8be2vx$[i], 53, 17 + (16 * i | 0) | 0);
      }
    }
  };
  CombatUI$MenuGoods$equipSelected$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [BaseScreen]
  };
  CombatUI$MenuGoods.prototype.equipSelected_0 = function (goods) {
    var tmp$;
    var list = ArrayList_init();
    var tmp$_0;
    tmp$_0 = this.$outer.mPlayerList_0.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (goods.canPlayerUse_za3lpa$(element.index))
        list.add_11rb$(element);
    }
    if (list.size === 0) {
      this.showMessage_4wgjuj$('\u4E0D\u80FD\u88C5\u5907!', L1000);
    }
     else if (list.size === 1) {
      if (list.get_za3lpa$(0).hasEquipt_vux9f0$(goods.type, goods.index)) {
        this.showMessage_4wgjuj$('\u5DF2\u88C5\u5907!', L1000);
      }
       else {
        this.pushScreen_2o7n0o$(new ScreenChgEquipment(this, list.get_za3lpa$(0), Kotlin.isType(tmp$ = goods, GoodsEquipment) ? tmp$ : throwCCE()));
      }
    }
     else {
      this.pushScreen_2o7n0o$(new CombatUI$MenuGoods$equipSelected$ObjectLiteral(list, goods, this));
    }
  };
  CombatUI$MenuGoods.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MenuGoods',
    interfaces: [BaseScreen]
  };
  CombatUI.prototype.popScreen = function () {
    this.mScreenStack_0.popScreen();
  };
  CombatUI.prototype.pushScreen_2o7n0o$ = function (scr) {
    this.mScreenStack_0.pushScreen_2o7n0o$(scr);
  };
  CombatUI.prototype.getCurScreen = function () {
    return this.mScreenStack_0.getCurScreen();
  };
  CombatUI.prototype.showMessage_4wgjuj$ = function (msg, delay) {
    this.mScreenStack_0.showMessage_4wgjuj$(msg, delay);
  };
  function CombatUI$Companion() {
    CombatUI$Companion_instance = this;
    this.sPlayerIndicatorPos_0 = [new Point(69, 45), new Point(101, 41), new Point(133, 33)];
    this.sMonsterIndicatorPos_0 = [new Point(16, 14), new Point(48, 3), new Point(86, 0)];
  }
  CombatUI$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CombatUI$Companion_instance = null;
  function CombatUI$Companion_getInstance() {
    if (CombatUI$Companion_instance === null) {
      new CombatUI$Companion();
    }
    return CombatUI$Companion_instance;
  }
  CombatUI.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CombatUI',
    interfaces: [BaseScreen]
  };
  function ScreenActorState(parent) {
    this.parent_60db44$_0 = parent;
    this.mPage_0 = 0;
    this.mPlayerList_0 = this.game.playerList;
    this.mCurPlayer_0 = 0;
  }
  Object.defineProperty(ScreenActorState.prototype, 'parent', {
    get: function () {
      return this.parent_60db44$_0;
    }
  });
  ScreenActorState.prototype.update_s8cxhz$ = function (delta) {
  };
  ScreenActorState.prototype.draw_9in0vv$ = function (canvas) {
    canvas.drawColor_we4i00$(Global_getInstance().COLOR_WHITE);
    var i = 0;
    while (i < this.mPlayerList_0.size) {
      this.mPlayerList_0.get_za3lpa$(i).drawHead_2g4tob$(canvas, 10, 2 + (32 * i | 0) | 0);
      i = i + 1 | 0;
    }
    if (!this.mPlayerList_0.isEmpty()) {
      this.mPlayerList_0.get_za3lpa$(this.mCurPlayer_0).drawState_86va19$(canvas, this.mPage_0);
      Util_getInstance().drawTriangleCursor_2g4tob$(canvas, 3, 10 + (32 * this.mCurPlayer_0 | 0) | 0);
    }
  };
  ScreenActorState.prototype.onKeyDown_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_PAGEDOWN || key === Global_getInstance().KEY_PAGEUP) {
      this.mPage_0 = 1 - this.mPage_0 | 0;
    }
     else if (key === Global_getInstance().KEY_DOWN) {
      this.mCurPlayer_0 = this.mCurPlayer_0 + 1 | 0;
      if (this.mCurPlayer_0 >= this.mPlayerList_0.size) {
        this.mCurPlayer_0 = 0;
      }
    }
     else if (key === Global_getInstance().KEY_UP) {
      this.mCurPlayer_0 = this.mCurPlayer_0 - 1 | 0;
      if (this.mCurPlayer_0 < 0) {
        this.mCurPlayer_0 = this.mPlayerList_0.size - 1 | 0;
      }
    }
  };
  ScreenActorState.prototype.onKeyUp_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_CANCEL) {
      this.popScreen();
    }
  };
  ScreenActorState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScreenActorState',
    interfaces: [BaseScreen]
  };
  function ScreenActorWearing(parent) {
    ScreenActorWearing$Companion_getInstance();
    this.parent_awqx5e$_0 = parent;
    this.mPos_0 = null;
    this.mEquipments_0 = null;
    this.mItemName_0 = ['\u88C5\u9970', '\u88C5\u9970', '\u62A4\u8155', '\u811A\u8E6C', '\u624B\u6301', '\u8EAB\u7A7F', '\u80A9\u62AB', '\u5934\u6234'];
    this.mCurItem_0 = 0;
    this.mActorIndex_0 = -1;
    this.showingDesc_0 = false;
    this.bmpName_0 = Util_getInstance().getFrameBitmap_vux9f0$(84, 20);
    this.bmpDesc_0 = Util_getInstance().getFrameBitmap_vux9f0$(143, 38);
    this.mTextName_0 = new Int8Array([]);
    this.mTextDesc_0 = new Int8Array([]);
    this.mToDraw_0 = 0;
    this.mNextToDraw_0 = 0;
    this.mStackLastToDraw_0 = Stack$Companion_getInstance().create_287e2$();
    this.mEquipments_0 = this.game.playerList.get_za3lpa$(0).equipmentsArray;
    this.mActorIndex_0 = 0;
    this.mPos_0 = [new Point(4, 3), new Point(4, 30), new Point(21, 59), new Point(51, 65), new Point(80, 61), new Point(109, 46), new Point(107, 9), new Point(79, 2)];
  }
  Object.defineProperty(ScreenActorWearing.prototype, 'parent', {
    get: function () {
      return this.parent_awqx5e$_0;
    }
  });
  ScreenActorWearing.prototype.getGBKBytes_0 = function (s) {
    return gbkBytes(s);
  };
  ScreenActorWearing.prototype.update_s8cxhz$ = function (delta) {
  };
  ScreenActorWearing.prototype.draw_9in0vv$ = function (canvas) {
    var tmp$;
    canvas.drawColor_we4i00$(Global_getInstance().COLOR_WHITE);
    canvas.drawBitmap_t8cslu$(Util_getInstance().bmpChuandai, 160 - Util_getInstance().bmpChuandai.width | 0, 0);
    for (var i = 0; i <= 7; i++) {
      (tmp$ = this.mEquipments_0[i]) != null ? (tmp$.draw_2g4tob$(canvas, this.mPos_0[i].x + 1 | 0, this.mPos_0[i].y + 1 | 0), Unit) : null;
    }
    canvas.drawRect_x3aj6j$(this.mPos_0[this.mCurItem_0].x, this.mPos_0[this.mCurItem_0].y, this.mPos_0[this.mCurItem_0].x + 25 | 0, this.mPos_0[this.mCurItem_0].y + 25 | 0, Util_getInstance().sBlackPaint);
    TextRender_getInstance().drawText_kkuqvh$(canvas, this.mItemName_0[this.mCurItem_0], 120, 80);
    if (this.mActorIndex_0 >= 0) {
      var p = this.game.playerList.get_za3lpa$(this.mActorIndex_0);
      p.drawHead_2g4tob$(canvas, 44, 12);
      TextRender_getInstance().drawText_kkuqvh$(canvas, p.name, 30, 40);
    }
    if (this.showingDesc_0) {
      canvas.drawBitmap_t8cslu$(this.bmpName_0, 9, 10);
      canvas.drawBitmap_t8cslu$(this.bmpDesc_0, 9, 28);
      TextRender_getInstance().drawText_pbrmiz$(canvas, this.mTextName_0, 12, 13);
      this.mNextToDraw_0 = TextRender_getInstance().drawText_tz7kd0$(canvas, this.mTextDesc_0, this.mToDraw_0, ScreenActorWearing$Companion_getInstance().sRectDesc_0);
    }
  };
  ScreenActorWearing.prototype.resetDesc_0 = function () {
    if (this.showingDesc_0) {
      this.showingDesc_0 = false;
      this.mNextToDraw_0 = 0;
      this.mToDraw_0 = this.mNextToDraw_0;
      this.mStackLastToDraw_0.clear();
    }
  };
  ScreenActorWearing.prototype.onKeyDown_za3lpa$ = function (key) {
    var tmp$;
    if (key === Global_getInstance().KEY_DOWN && this.mCurItem_0 < 7) {
      this.mCurItem_0 = this.mCurItem_0 + 1 | 0;
      this.resetDesc_0();
    }
     else if (key === Global_getInstance().KEY_UP && this.mCurItem_0 > 0) {
      this.mCurItem_0 = this.mCurItem_0 - 1 | 0;
      this.resetDesc_0();
    }
     else if (key === Global_getInstance().KEY_RIGHT && this.mActorIndex_0 < (this.game.playerList.size - 1 | 0)) {
      this.mActorIndex_0 = this.mActorIndex_0 + 1 | 0;
      this.mEquipments_0 = this.game.playerList.get_za3lpa$(this.mActorIndex_0).equipmentsArray;
      this.resetDesc_0();
    }
     else if (key === Global_getInstance().KEY_LEFT && this.mActorIndex_0 > 0) {
      this.mActorIndex_0 = this.mActorIndex_0 - 1 | 0;
      this.mEquipments_0 = this.game.playerList.get_za3lpa$(this.mActorIndex_0).equipmentsArray;
      this.resetDesc_0();
    }
     else if (this.showingDesc_0) {
      if (key === Global_getInstance().KEY_PAGEDOWN) {
        if (this.mNextToDraw_0 < this.mTextDesc_0.length) {
          this.mStackLastToDraw_0.push_11rb$(this.mToDraw_0);
          this.mToDraw_0 = this.mNextToDraw_0;
        }
      }
       else if (key === Global_getInstance().KEY_PAGEUP && this.mToDraw_0 !== 0) {
        if ((tmp$ = this.mStackLastToDraw_0.pop()) != null) {
          this.mToDraw_0 = tmp$;
        }
      }
    }
  };
  function ScreenActorWearing$onKeyUp$ObjectLiteral(this$ScreenActorWearing) {
    this.this$ScreenActorWearing = this$ScreenActorWearing;
  }
  ScreenActorWearing$onKeyUp$ObjectLiteral.prototype.onItemSelected_6xxg66$ = function (goods) {
    var tmp$, tmp$_0;
    var actor = this.this$ScreenActorWearing.game.playerList.get_za3lpa$(this.this$ScreenActorWearing.mActorIndex_0);
    if (goods.canPlayerUse_za3lpa$(actor.index)) {
      this.this$ScreenActorWearing.popScreen();
      tmp$_0 = new ScreenChgEquipment(this.this$ScreenActorWearing, actor, Kotlin.isType(tmp$ = goods, GoodsEquipment) ? tmp$ : throwCCE(), this.this$ScreenActorWearing.mCurItem_0);
      this.this$ScreenActorWearing.pushScreen_2o7n0o$(tmp$_0);
    }
     else {
      this.this$ScreenActorWearing.showMessage_4wgjuj$('\u4E0D\u80FD\u88C5\u5907!', L1000);
    }
  };
  ScreenActorWearing$onKeyUp$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ScreenGoodsList$OnItemSelectedListener]
  };
  ScreenActorWearing.prototype.onKeyUp_za3lpa$ = function (key) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (key === Global_getInstance().KEY_CANCEL) {
      this.popScreen();
    }
     else if (key === Global_getInstance().KEY_ENTER) {
      if (!this.showingDesc_0 && this.mEquipments_0[this.mCurItem_0] != null) {
        this.showingDesc_0 = true;
        this.mTextName_0 = this.getGBKBytes_0((tmp$_0 = (tmp$ = this.mEquipments_0[this.mCurItem_0]) != null ? tmp$.name : null) != null ? tmp$_0 : '');
        this.mTextDesc_0 = this.getGBKBytes_0((tmp$_2 = (tmp$_1 = this.mEquipments_0[this.mCurItem_0]) != null ? tmp$_1.description : null) != null ? tmp$_2 : '');
      }
       else {
        this.resetDesc_0();
        this.pushScreen_2o7n0o$(new ScreenGoodsList(this, this.getTheEquipList_0(Player$Companion_getInstance().sEquipTypes[this.mCurItem_0]), new ScreenActorWearing$onKeyUp$ObjectLiteral(this), ScreenGoodsList$Mode$Use_getInstance()));
      }
    }
  };
  ScreenActorWearing.prototype.getTheEquipList_0 = function (type) {
    var $receiver = Player$Companion_getInstance().sGoodsList.equipList;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.type === type)
        destination.add_11rb$(element);
    }
    return destination;
  };
  function ScreenActorWearing$Companion() {
    ScreenActorWearing$Companion_instance = this;
    this.sRectDesc_0 = new Rect(12, 31, 151, 65);
  }
  ScreenActorWearing$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ScreenActorWearing$Companion_instance = null;
  function ScreenActorWearing$Companion_getInstance() {
    if (ScreenActorWearing$Companion_instance === null) {
      new ScreenActorWearing$Companion();
    }
    return ScreenActorWearing$Companion_instance;
  }
  ScreenActorWearing.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScreenActorWearing',
    interfaces: [BaseScreen]
  };
  function ScreenChgEquipment(parent, mActor, goods, itemIndex) {
    if (itemIndex === void 0)
      itemIndex = null;
    this.parent_nxw0wk$_0 = parent;
    this.mActor_0 = mActor;
    this.itemIndex = itemIndex;
    this.mGoods_0 = null;
    this.mSelIndex_0 = 0;
    this.mPage_0 = 0;
    var tmp$;
    if (this.itemIndex == null) {
      tmp$ = this.mActor_0.getCurrentEquipment_za3lpa$(goods.type);
    }
     else {
      tmp$ = this.mActor_0.getEquipmentByIndex_za3lpa$(this.itemIndex);
    }
    var currentEquip = tmp$;
    if (currentEquip == null || (this.itemIndex == null && this.mActor_0.hasSpace_za3lpa$(goods.type))) {
      this.mGoods_0 = [goods];
      this.mSelIndex_0 = 0;
    }
     else {
      this.mGoods_0 = [currentEquip, goods];
      this.mSelIndex_0 = 1;
      this.mActor_0.takeOff_6sxnot$(goods.type, this.itemIndex);
    }
    this.mActor_0.putOn_sp4jd8$(goods, this.itemIndex);
  }
  Object.defineProperty(ScreenChgEquipment.prototype, 'parent', {
    get: function () {
      return this.parent_nxw0wk$_0;
    }
  });
  ScreenChgEquipment.prototype.update_s8cxhz$ = function (delta) {
  };
  ScreenChgEquipment.prototype.draw_9in0vv$ = function (canvas) {
    canvas.drawColor_we4i00$(Global_getInstance().COLOR_WHITE);
    this.mActor_0.drawState_86va19$(canvas, this.mPage_0);
    this.mActor_0.drawHead_2g4tob$(canvas, 5, 60);
    var $receiver = this.mGoods_0;
    var tmp$, tmp$_0;
    var index = 0;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      item.draw_2g4tob$(canvas, 8, 2 + (32 * (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0) | 0) | 0);
    }
    Util_getInstance().drawTriangleCursor_2g4tob$(canvas, 1, 10 + (32 * this.mSelIndex_0 | 0) | 0);
  };
  function ScreenChgEquipment$onKeyDown$step(this$ScreenChgEquipment) {
    return function (x) {
      this$ScreenChgEquipment.mActor_0.takeOff_6sxnot$(this$ScreenChgEquipment.mGoods_0[this$ScreenChgEquipment.mSelIndex_0].type, this$ScreenChgEquipment.itemIndex);
      this$ScreenChgEquipment.mSelIndex_0 = this$ScreenChgEquipment.mSelIndex_0 + x | 0;
      this$ScreenChgEquipment.mActor_0.putOn_sp4jd8$(this$ScreenChgEquipment.mGoods_0[this$ScreenChgEquipment.mSelIndex_0], this$ScreenChgEquipment.itemIndex);
    };
  }
  ScreenChgEquipment.prototype.onKeyDown_za3lpa$ = function (key) {
    var step = ScreenChgEquipment$onKeyDown$step(this);
    if (key === Global_getInstance().KEY_UP && this.mSelIndex_0 > 0) {
      step(-1);
    }
     else if (key === Global_getInstance().KEY_DOWN && this.mSelIndex_0 < (this.mGoods_0.length - 1 | 0)) {
      step(1);
    }
     else if (key === Global_getInstance().KEY_PAGEDOWN || key === Global_getInstance().KEY_PAGEUP) {
      this.mPage_0 = 1 - this.mPage_0 | 0;
    }
  };
  ScreenChgEquipment.prototype.onKeyUp_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_CANCEL) {
      this.mActor_0.takeOff_6sxnot$(this.mGoods_0[0].type, this.itemIndex);
      if (this.mGoods_0.length > 1) {
        this.mActor_0.putOn_sp4jd8$(this.mGoods_0[0], this.itemIndex);
      }
      this.popScreen();
    }
     else if (key === Global_getInstance().KEY_ENTER) {
      if (this.mSelIndex_0 === (this.mGoods_0.length - 1 | 0)) {
        Player$Companion_getInstance().sGoodsList.deleteGoods_vux9f0$(this.mGoods_0[this.mGoods_0.length - 1 | 0].type, this.mGoods_0[this.mGoods_0.length - 1 | 0].index);
        if (this.mGoods_0.length > 1) {
          Player$Companion_getInstance().sGoodsList.addGoods_vux9f0$(this.mGoods_0[0].type, this.mGoods_0[0].index);
        }
      }
      this.popScreen();
    }
  };
  ScreenChgEquipment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScreenChgEquipment',
    interfaces: [BaseScreen]
  };
  function ScreenCommonMenu(parent, items, callback) {
    this.parent_usi9me$_0 = parent;
    this.callback_0 = callback;
    this.curSel_0 = 0;
    this.paddedItems_0 = null;
    this.top_0 = 0;
    this.left_0 = 0;
    this.bg_0 = null;
    this.padx_0 = 3;
    this.pady_0 = 3;
    var tmp$;
    var destination = ArrayList_init_0(items.length);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== items.length; ++tmp$_0) {
      var item = items[tmp$_0];
      destination.add_11rb$(gbkBytes(item));
    }
    var byteItems = destination;
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(byteItems, 10));
    var tmp$_1;
    tmp$_1 = byteItems.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      destination_0.add_11rb$(item_0.length);
    }
    var colCount = (tmp$ = max(destination_0)) != null ? tmp$ : 2;
    var width = 8 * colCount | 0;
    var height = 16 * items.length | 0;
    this.bg_0 = Util_getInstance().getFrameBitmap_vux9f0$(width + (this.padx_0 * 2 | 0) | 0, height + (this.pady_0 * 2 | 0) | 0);
    this.left_0 = (Global_getInstance().SCREEN_WIDTH - width | 0) / 2 | 0;
    this.top_0 = (Global_getInstance().SCREEN_HEIGHT - height | 0) / 2 | 0;
    var destination_1 = ArrayList_init_0(collectionSizeOrDefault(byteItems, 10));
    var tmp$_2;
    tmp$_2 = byteItems.iterator();
    while (tmp$_2.hasNext()) {
      var item_1 = tmp$_2.next();
      var tmp$_3 = destination_1.add_11rb$;
      var s = toMutableList_0(item_1);
      while (s.size < colCount)
        s.add_11rb$(toByte(32 | 0));
      tmp$_3.call(destination_1, toByteArray(s));
    }
    this.paddedItems_0 = destination_1;
  }
  Object.defineProperty(ScreenCommonMenu.prototype, 'parent', {
    get: function () {
      return this.parent_usi9me$_0;
    }
  });
  Object.defineProperty(ScreenCommonMenu.prototype, 'isPopup', {
    get: function () {
      return true;
    }
  });
  ScreenCommonMenu.prototype.update_s8cxhz$ = function (delta) {
  };
  ScreenCommonMenu.prototype.onKeyUp_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_ENTER) {
      this.popScreen();
      this.callback_0(this.curSel_0 + 1 | 0);
    }
     else if (key === Global_getInstance().KEY_CANCEL) {
      this.popScreen();
      this.callback_0(0);
    }
  };
  ScreenCommonMenu.prototype.onKeyDown_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_DOWN && this.curSel_0 < (this.paddedItems_0.size - 1 | 0)) {
      this.curSel_0 = this.curSel_0 + 1 | 0;
    }
     else if (key === Global_getInstance().KEY_UP && this.curSel_0 > 0) {
      this.curSel_0 = this.curSel_0 - 1 | 0;
    }
  };
  ScreenCommonMenu.prototype.draw_9in0vv$ = function (canvas) {
    var tmp$;
    canvas.drawBitmap_t8cslu$(this.bg_0, this.left_0 - this.padx_0 | 0, this.top_0 - this.pady_0 | 0);
    tmp$ = this.paddedItems_0;
    for (var i = 0; i !== tmp$.size; ++i) {
      if (i !== this.curSel_0) {
        TextRender_getInstance().drawText_pbrmiz$(canvas, this.paddedItems_0.get_za3lpa$(i), this.left_0, this.top_0 + (16 * i | 0) | 0);
      }
       else {
        TextRender_getInstance().drawSelText_pbrmiz$(canvas, this.paddedItems_0.get_za3lpa$(i), this.left_0, this.top_0 + (16 * i | 0) | 0);
      }
    }
  };
  ScreenCommonMenu.prototype.reset = function () {
    this.curSel_0 = 0;
  };
  ScreenCommonMenu.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScreenCommonMenu',
    interfaces: [BaseScreen]
  };
  function ScreenGameMainMenu(parent) {
    this.parent_pp5hre$_0 = parent;
    this.bmpFrame1_0 = Util_getInstance().getFrameBitmap_vux9f0$(93, 22);
    this.bmpFrame2_0 = Util_getInstance().getFrameBitmap_vux9f0$(38, 70);
    this.menuItemsRect_0 = null;
    this.menuItems_0 = gbkBytes('\u5C5E\u6027\u9B54\u6CD5\u7269\u54C1\u7CFB\u7EDF');
    this.menuItemsS_0 = ['\u5C5E\u6027', '\u9B54\u6CD5', '\u7269\u54C1', '\u7CFB\u7EDF'];
    this.mSelIndex_0 = 0;
    this.screenSelectActor_0 = new ScreenGameMainMenu$screenSelectActor$ObjectLiteral(this);
    var l = 12;
    var t = 27;
    var r = l + 32 | 0;
    var b = t + 64 | 0;
    this.menuItemsRect_0 = new Rect(l, t, r, b);
  }
  Object.defineProperty(ScreenGameMainMenu.prototype, 'parent', {
    get: function () {
      return this.parent_pp5hre$_0;
    }
  });
  Object.defineProperty(ScreenGameMainMenu.prototype, 'isPopup', {
    get: function () {
      return true;
    }
  });
  ScreenGameMainMenu.prototype.update_s8cxhz$ = function (delta) {
  };
  ScreenGameMainMenu.prototype.draw_9in0vv$ = function (canvas) {
    canvas.drawBitmap_t8cslu$(this.bmpFrame1_0, 9, 3);
    TextRender_getInstance().drawText_kkuqvh$(canvas, '\u91D1\u94B1:' + toString(Player$Companion_getInstance().sMoney), 12, 6);
    canvas.drawBitmap_t8cslu$(this.bmpFrame2_0, 9, 24);
    TextRender_getInstance().drawText_tz7kd0$(canvas, this.menuItems_0, 0, this.menuItemsRect_0);
    TextRender_getInstance().drawSelText_kkuqvh$(canvas, this.menuItemsS_0[this.mSelIndex_0], this.menuItemsRect_0.left, this.menuItemsRect_0.top + (this.mSelIndex_0 * 16 | 0) | 0);
  };
  ScreenGameMainMenu.prototype.onKeyDown_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_UP) {
      if ((this.mSelIndex_0 = this.mSelIndex_0 - 1 | 0, this.mSelIndex_0) < 0) {
        this.mSelIndex_0 = 3;
      }
    }
     else if (key === Global_getInstance().KEY_DOWN) {
      if ((this.mSelIndex_0 = this.mSelIndex_0 + 1 | 0, this.mSelIndex_0) > 3) {
        this.mSelIndex_0 = 0;
      }
    }
  };
  ScreenGameMainMenu.prototype.onKeyUp_za3lpa$ = function (key) {
    var tmp$;
    if (key === Global_getInstance().KEY_ENTER) {
      switch (this.mSelIndex_0) {
        case 0:
          tmp$ = new ScreenMenuProperties(this);
          break;
        case 1:
          tmp$ = this.game.playerList.size > 1 ? this.screenSelectActor_0 : this.getScreenMagic_0(0);
          break;
        case 2:
          tmp$ = new ScreenMenuGoods(this);
          break;
        case 3:
          tmp$ = new ScreenMenuSystem(this);
          break;
        default:tmp$ = null;
          break;
      }
      var screen = tmp$;
      if (screen != null) {
        this.pushScreen_2o7n0o$(screen);
      }
    }
     else if (key === Global_getInstance().KEY_CANCEL) {
      this.popScreen();
    }
  };
  function ScreenGameMainMenu$getScreenMagic$ObjectLiteral(this$ScreenGameMainMenu, closure$id) {
    this.this$ScreenGameMainMenu = this$ScreenGameMainMenu;
    this.closure$id = closure$id;
  }
  ScreenGameMainMenu$getScreenMagic$ObjectLiteral.prototype.onItemSelected_3fncnk$ = function (magic) {
    if (Kotlin.isType(magic, MagicRestore)) {
      this.this$ScreenGameMainMenu.pushScreen_2o7n0o$(new ScreenUseMagic(this.this$ScreenGameMainMenu, magic, this.this$ScreenGameMainMenu.game.playerList.get_za3lpa$(this.closure$id)));
    }
     else {
      this.this$ScreenGameMainMenu.showMessage_4wgjuj$('\u6B64\u5904\u65E0\u6CD5\u4F7F\u7528!', L1000);
    }
  };
  ScreenGameMainMenu$getScreenMagic$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ScreenMagic$OnItemSelectedListener]
  };
  ScreenGameMainMenu.prototype.getScreenMagic_0 = function (id) {
    var player = this.game.playerList.get_za3lpa$(id);
    var magics = player.getAllMagics();
    if (magics.isEmpty())
      return null;
    return new ScreenMagic(this, magics, player.mp, new ScreenGameMainMenu$getScreenMagic$ObjectLiteral(this, id));
  };
  function ScreenGameMainMenu$screenSelectActor$ObjectLiteral(this$ScreenGameMainMenu) {
    this.this$ScreenGameMainMenu = this$ScreenGameMainMenu;
    this.parent_yu190y$_0 = this$ScreenGameMainMenu;
    this.index_0 = 0;
    this.mFrameRect_0 = new Rect(39, 29, 125, 35 + (this.game.playerList.size * 16 | 0) | 0);
    this.bmpFrame_0 = Util_getInstance().getFrameBitmap_vux9f0$(this.mFrameRect_0.width(), this.mFrameRect_0.height());
    this.mNames_0 = null;
    this.mSum_0 = 0;
    var list = this.game.playerList;
    this.mSum_0 = list.size;
    var destination = ArrayList_init_0(collectionSizeOrDefault(list, 10));
    var tmp$;
    tmp$ = list.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.name);
    }
    this.mNames_0 = copyToArray(destination);
  }
  Object.defineProperty(ScreenGameMainMenu$screenSelectActor$ObjectLiteral.prototype, 'parent', {
    get: function () {
      return this.parent_yu190y$_0;
    }
  });
  Object.defineProperty(ScreenGameMainMenu$screenSelectActor$ObjectLiteral.prototype, 'isPopup', {
    get: function () {
      return true;
    }
  });
  ScreenGameMainMenu$screenSelectActor$ObjectLiteral.prototype.update_s8cxhz$ = function (delta) {
  };
  ScreenGameMainMenu$screenSelectActor$ObjectLiteral.prototype.draw_9in0vv$ = function (canvas) {
    var tmp$;
    canvas.drawBitmap_t8cslu$(this.bmpFrame_0, this.mFrameRect_0.left, this.mFrameRect_0.top);
    tmp$ = this.mSum_0;
    for (var i = 0; i < tmp$; i++) {
      if (i === this.index_0) {
        TextRender_getInstance().drawSelText_kkuqvh$(canvas, this.mNames_0[i], this.mFrameRect_0.left + 3 | 0, this.mFrameRect_0.top + 3 + (16 * i | 0) | 0);
      }
       else {
        TextRender_getInstance().drawText_kkuqvh$(canvas, this.mNames_0[i], this.mFrameRect_0.left + 3 | 0, this.mFrameRect_0.top + 3 + (16 * i | 0) | 0);
      }
    }
  };
  ScreenGameMainMenu$screenSelectActor$ObjectLiteral.prototype.onKeyDown_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_DOWN) {
      this.index_0 = this.index_0 + 1 | 0;
      if (this.index_0 >= this.mSum_0) {
        this.index_0 = 0;
      }
    }
     else if (key === Global_getInstance().KEY_UP) {
      this.index_0 = this.index_0 - 1 | 0;
      if (this.index_0 < 0) {
        this.index_0 = this.mSum_0 - 1 | 0;
      }
    }
  };
  ScreenGameMainMenu$screenSelectActor$ObjectLiteral.prototype.onKeyUp_za3lpa$ = function (key) {
    var tmp$;
    if (key === Global_getInstance().KEY_CANCEL) {
      this.popScreen();
    }
     else if (key === Global_getInstance().KEY_ENTER) {
      this.popScreen();
      if ((tmp$ = this.this$ScreenGameMainMenu.getScreenMagic_0(this.index_0)) != null) {
        this.pushScreen_2o7n0o$(tmp$);
      }
    }
  };
  ScreenGameMainMenu$screenSelectActor$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [BaseScreen]
  };
  ScreenGameMainMenu.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScreenGameMainMenu',
    interfaces: [BaseScreen]
  };
  function ScreenGoodsList(parent, goodsList, itemSelectedListener, mode) {
    ScreenGoodsList$Companion_getInstance();
    this.parent_5sd2vc$_0 = parent;
    this.goodsList_0 = goodsList;
    this.itemSelectedListener_0 = itemSelectedListener;
    this.mode_0 = mode;
    this.description_0 = gbkBytes('');
    this.toDraw_0 = 0;
    this.nextToDraw_0 = 0;
    this.stackLastToDraw_0 = Stack$Companion_getInstance().create_287e2$();
    this.firstDisplayItemIndex_0 = 0;
    this.curItemIndex_0 = 0;
    this.lastDownKey_0 = -1;
  }
  Object.defineProperty(ScreenGoodsList.prototype, 'parent', {
    get: function () {
      return this.parent_5sd2vc$_0;
    }
  });
  function ScreenGoodsList$Mode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ScreenGoodsList$Mode_initFields() {
    ScreenGoodsList$Mode_initFields = function () {
    };
    ScreenGoodsList$Mode$Sale_instance = new ScreenGoodsList$Mode('Sale', 0);
    ScreenGoodsList$Mode$Buy_instance = new ScreenGoodsList$Mode('Buy', 1);
    ScreenGoodsList$Mode$Use_instance = new ScreenGoodsList$Mode('Use', 2);
  }
  var ScreenGoodsList$Mode$Sale_instance;
  function ScreenGoodsList$Mode$Sale_getInstance() {
    ScreenGoodsList$Mode_initFields();
    return ScreenGoodsList$Mode$Sale_instance;
  }
  var ScreenGoodsList$Mode$Buy_instance;
  function ScreenGoodsList$Mode$Buy_getInstance() {
    ScreenGoodsList$Mode_initFields();
    return ScreenGoodsList$Mode$Buy_instance;
  }
  var ScreenGoodsList$Mode$Use_instance;
  function ScreenGoodsList$Mode$Use_getInstance() {
    ScreenGoodsList$Mode_initFields();
    return ScreenGoodsList$Mode$Use_instance;
  }
  ScreenGoodsList$Mode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mode',
    interfaces: [Enum]
  };
  function ScreenGoodsList$Mode$values() {
    return [ScreenGoodsList$Mode$Sale_getInstance(), ScreenGoodsList$Mode$Buy_getInstance(), ScreenGoodsList$Mode$Use_getInstance()];
  }
  ScreenGoodsList$Mode.values = ScreenGoodsList$Mode$values;
  function ScreenGoodsList$Mode$valueOf(name) {
    switch (name) {
      case 'Sale':
        return ScreenGoodsList$Mode$Sale_getInstance();
      case 'Buy':
        return ScreenGoodsList$Mode$Buy_getInstance();
      case 'Use':
        return ScreenGoodsList$Mode$Use_getInstance();
      default:throwISE('No enum constant fmj.gamemenu.ScreenGoodsList.Mode.' + name);
    }
  }
  ScreenGoodsList$Mode.valueOf_61zpoe$ = ScreenGoodsList$Mode$valueOf;
  function ScreenGoodsList$OnItemSelectedListener() {
  }
  ScreenGoodsList$OnItemSelectedListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'OnItemSelectedListener',
    interfaces: []
  };
  ScreenGoodsList.prototype.resetDescription_0 = function () {
    var tmp$;
    if (!this.goodsList_0.isEmpty()) {
      tmp$ = gbkBytes(this.goodsList_0.get_za3lpa$(this.curItemIndex_0).description);
    }
     else {
      tmp$ = gbkBytes('');
    }
    this.description_0 = tmp$;
    this.nextToDraw_0 = 0;
    this.toDraw_0 = this.nextToDraw_0;
    this.stackLastToDraw_0.clear();
  };
  ScreenGoodsList.prototype.willAppear = function () {
    if (this.goodsList_0.isEmpty()) {
      this.curItemIndex_0 = 0;
    }
     else if (this.curItemIndex_0 >= this.goodsList_0.size) {
      this.curItemIndex_0 = this.goodsList_0.size - 1 | 0;
    }
    this.resetDescription_0();
  };
  ScreenGoodsList.prototype.update_s8cxhz$ = function (delta) {
    if (this.goodsList_0.isEmpty()) {
      this.popScreen();
    }
  };
  ScreenGoodsList.prototype.draw_9in0vv$ = function (canvas) {
    canvas.drawBitmap_t8cslu$(ScreenGoodsList$Companion_getInstance().bgImage_0, 0, 0);
    if (this.goodsList_0.isEmpty())
      return;
    while (this.curItemIndex_0 >= this.goodsList_0.size)
      this.showPreItem_0();
    var g = this.goodsList_0.get_za3lpa$(this.curItemIndex_0);
    TextRender_getInstance().drawText_kkuqvh$(canvas, this.mode_0 === ScreenGoodsList$Mode$Buy_getInstance() ? '\u91D1\u94B1:' + toString(Player$Companion_getInstance().sMoney) : '\u6570\u91CF:' + toString(g.goodsNum), 60, 2);
    TextRender_getInstance().drawText_kkuqvh$(canvas, g.name, 69, 23);
    TextRender_getInstance().drawText_kkuqvh$(canvas, '' + toString(this.mode_0 === ScreenGoodsList$Mode$Buy_getInstance() ? g.buyPrice : g.sellPrice), 69, 40);
    Util_getInstance().drawTriangleCursor_2g4tob$(canvas, 4, 8 + (23 * (this.curItemIndex_0 - this.firstDisplayItemIndex_0 | 0) | 0) | 0);
    var i = this.firstDisplayItemIndex_0;
    while (i < (this.firstDisplayItemIndex_0 + ScreenGoodsList$Companion_getInstance().itemNumberPerPage_0 | 0) && i < this.goodsList_0.size) {
      this.goodsList_0.get_za3lpa$(i).draw_2g4tob$(canvas, 14, 2 + (23 * (i - this.firstDisplayItemIndex_0 | 0) | 0) | 0);
      i = i + 1 | 0;
    }
    this.nextToDraw_0 = TextRender_getInstance().drawText_tz7kd0$(canvas, this.description_0, this.toDraw_0, ScreenGoodsList$Companion_getInstance().displayRect_0);
  };
  ScreenGoodsList.prototype.showNextItem_0 = function () {
    this.curItemIndex_0 = this.curItemIndex_0 + 1 | 0;
    if (this.curItemIndex_0 >= (this.firstDisplayItemIndex_0 + ScreenGoodsList$Companion_getInstance().itemNumberPerPage_0 | 0)) {
      this.firstDisplayItemIndex_0 = this.firstDisplayItemIndex_0 + 1 | 0;
    }
    this.resetDescription_0();
  };
  ScreenGoodsList.prototype.showPreItem_0 = function () {
    this.curItemIndex_0 = this.curItemIndex_0 - 1 | 0;
    if (this.curItemIndex_0 < this.firstDisplayItemIndex_0) {
      this.firstDisplayItemIndex_0 = this.firstDisplayItemIndex_0 - 1 | 0;
    }
    this.resetDescription_0();
  };
  ScreenGoodsList.prototype.onKeyDown_za3lpa$ = function (key) {
    var tmp$;
    if (key === Global_getInstance().KEY_UP && this.curItemIndex_0 > 0) {
      this.showPreItem_0();
    }
     else if (key === Global_getInstance().KEY_DOWN && (this.curItemIndex_0 + 1 | 0) < this.goodsList_0.size) {
      this.showNextItem_0();
    }
     else if (key === Global_getInstance().KEY_PAGEDOWN) {
      var len = this.description_0.length;
      if (this.nextToDraw_0 < len) {
        this.stackLastToDraw_0.push_11rb$(this.toDraw_0);
        this.toDraw_0 = this.nextToDraw_0;
      }
    }
     else if (key === Global_getInstance().KEY_PAGEUP && this.toDraw_0 !== 0) {
      if ((tmp$ = this.stackLastToDraw_0.pop()) != null) {
        this.toDraw_0 = tmp$;
      }
    }
    this.lastDownKey_0 = key;
  };
  ScreenGoodsList.prototype.onKeyUp_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_ENTER && this.lastDownKey_0 === Global_getInstance().KEY_ENTER) {
      this.itemSelectedListener_0.onItemSelected_6xxg66$(this.goodsList_0.get_za3lpa$(this.curItemIndex_0));
    }
     else if (key === Global_getInstance().KEY_CANCEL) {
      this.popScreen();
    }
  };
  function ScreenGoodsList$Companion() {
    ScreenGoodsList$Companion_instance = this;
    this.bgImage_nrj872$_0 = lazy(ScreenGoodsList$Companion$bgImage$lambda);
    this.displayRect_0 = new Rect(44, 61, 156, 94);
    this.itemNumberPerPage_0 = 4;
  }
  Object.defineProperty(ScreenGoodsList$Companion.prototype, 'bgImage_0', {
    get: function () {
      return this.bgImage_nrj872$_0.value;
    }
  });
  function ScreenGoodsList$Companion$bgImage$lambda() {
    var bmp = Bitmap$Companion_getInstance().createBitmap_vux9f0$(160, 96);
    var pts = new Float32Array([40.0, 21.0, 40.0, 95.0, 40.0, 95.0, 0.0, 95.0, 0.0, 95.0, 0.0, 5.0, 0.0, 5.0, 5.0, 0.0, 5.0, 0.0, 39.0, 0.0, 39.0, 0.0, 58.0, 19.0, 38.0, 0.0, 57.0, 19.0, 57.0, 19.0, 140.0, 19.0, 41.0, 20.0, 140.0, 20.0, 41.0, 21.0, 159.0, 21.0, 54.0, 0.0, 140.0, 0.0, 40.0, 95.0, 159.0, 95.0, 40.0, 57.0, 160.0, 57.0, 40.0, 58.0, 140.0, 58.0, 40.0, 59.0, 159.0, 59.0, 41.0, 20.0, 41.0, 95.0, 42.0, 20.0, 42.0, 95.0, 159.0, 21.0, 159.0, 57.0, 159.0, 59.0, 159.0, 96.0]);
    var c = new Canvas(bmp);
    c.drawColor_we4i00$(Global_getInstance().COLOR_WHITE);
    c.drawLines_ffeagz$(pts, Util_getInstance().sBlackPaint);
    TextRender_getInstance().drawText_kkuqvh$(c, '\u540D:', 45, 23);
    TextRender_getInstance().drawText_kkuqvh$(c, '\u4EF7:', 45, 40);
    return bmp;
  }
  ScreenGoodsList$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ScreenGoodsList$Companion_instance = null;
  function ScreenGoodsList$Companion_getInstance() {
    if (ScreenGoodsList$Companion_instance === null) {
      new ScreenGoodsList$Companion();
    }
    return ScreenGoodsList$Companion_instance;
  }
  ScreenGoodsList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScreenGoodsList',
    interfaces: [BaseScreen]
  };
  function ScreenMenuGoods(parent) {
    this.parent_lbnd5n$_0 = parent;
    this.mFrameBmp_0 = Util_getInstance().getFrameBitmap_vux9f0$(39, 39);
    this.strs_0 = ['\u4F7F\u7528', '\u88C5\u5907'];
    this.mSelId_0 = 0;
  }
  Object.defineProperty(ScreenMenuGoods.prototype, 'parent', {
    get: function () {
      return this.parent_lbnd5n$_0;
    }
  });
  Object.defineProperty(ScreenMenuGoods.prototype, 'isPopup', {
    get: function () {
      return true;
    }
  });
  ScreenMenuGoods.prototype.update_s8cxhz$ = function (delta) {
  };
  ScreenMenuGoods.prototype.draw_9in0vv$ = function (canvas) {
    canvas.drawBitmap_t8cslu$(this.mFrameBmp_0, 39, 39);
    if (this.mSelId_0 === 0) {
      TextRender_getInstance().drawSelText_kkuqvh$(canvas, this.strs_0[0], 42, 42);
      TextRender_getInstance().drawText_kkuqvh$(canvas, this.strs_0[1], 42, 58);
    }
     else if (this.mSelId_0 === 1) {
      TextRender_getInstance().drawText_kkuqvh$(canvas, this.strs_0[0], 42, 42);
      TextRender_getInstance().drawSelText_kkuqvh$(canvas, this.strs_0[1], 42, 58);
    }
  };
  ScreenMenuGoods.prototype.onKeyDown_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_UP || key === Global_getInstance().KEY_DOWN) {
      this.mSelId_0 = 1 - this.mSelId_0 | 0;
    }
  };
  ScreenMenuGoods.prototype.onKeyUp_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_CANCEL) {
      this.popScreen();
    }
     else if (key === Global_getInstance().KEY_ENTER) {
      this.popScreen();
      this.pushScreen_2o7n0o$(new ScreenGoodsList(this, this.mSelId_0 === 0 ? Player$Companion_getInstance().sGoodsList.goodsList : Player$Companion_getInstance().sGoodsList.equipList, this, ScreenGoodsList$Mode$Use_getInstance()));
    }
  };
  ScreenMenuGoods.prototype.onItemSelected_6xxg66$ = function (goods) {
    if (this.mSelId_0 === 0) {
      this.goodsSelected_0(goods);
    }
     else if (this.mSelId_0 === 1) {
      this.equipSelected_0(goods);
    }
  };
  ScreenMenuGoods.prototype.goodsSelected_0 = function (goods) {
    switch (goods.type) {
      case 8:
      case 12:
        this.showMessage_4wgjuj$('\u6218\u6597\u4E2D\u624D\u80FD\u4F7F\u7528!', L1000);
        break;
      case 13:
        this.game.triggerEvent_za3lpa$(255);
        while (!Kotlin.isType(this.getCurScreen(), ScreenMainGame)) {
          this.popScreen();
        }

        break;
      case 14:
        var gut = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$GUT_getInstance(), 255, goods.index, true);
        if (gut == null) {
          this.showMessage_4wgjuj$('\u5F53\u524D\u65E0\u6CD5\u4F7F\u7528!', L1000);
        }
         else {
          while (!Kotlin.isType(this.getCurScreen(), ScreenMainGame)) {
            this.popScreen();
          }
          this.game.mainScene.callChapter_vux9f0$(255, goods.index);
        }

        break;
      case 9:
      case 10:
      case 11:
        this.pushScreen_2o7n0o$(new ScreenTakeMedicine(this, goods));
        break;
    }
  };
  function ScreenMenuGoods$equipSelected$ObjectLiteral(closure$list, closure$goods, this$ScreenMenuGoods) {
    this.closure$list = closure$list;
    this.closure$goods = closure$goods;
    this.parent_19e743$_0 = this$ScreenMenuGoods;
    this.bg_8be2vx$ = Util_getInstance().getFrameBitmap_vux9f0$(86, 6 + (16 * closure$list.size | 0) | 0);
    this.curSel_8be2vx$ = 0;
    var array = Array_0(closure$list.size);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Int8Array(11);
    }
    this.itemsText_8be2vx$ = array;
    var tmp$_0;
    tmp$_0 = this.itemsText_8be2vx$;
    for (var i_0 = 0; i_0 !== tmp$_0.length; ++i_0) {
      for (var j = 0; j <= 9; j++) {
        this.itemsText_8be2vx$[i_0][j] = toByte(32 | 0);
      }
      var tmp = gbkBytes(closure$list.get_za3lpa$(i_0).name);
      System_getInstance().arraycopy_nlwz52$(tmp, 0, this.itemsText_8be2vx$[i_0], 0, tmp.length);
    }
  }
  Object.defineProperty(ScreenMenuGoods$equipSelected$ObjectLiteral.prototype, 'parent', {
    get: function () {
      return this.parent_19e743$_0;
    }
  });
  Object.defineProperty(ScreenMenuGoods$equipSelected$ObjectLiteral.prototype, 'isPopup', {
    get: function () {
      return true;
    }
  });
  ScreenMenuGoods$equipSelected$ObjectLiteral.prototype.update_s8cxhz$ = function (delta) {
  };
  ScreenMenuGoods$equipSelected$ObjectLiteral.prototype.onKeyUp_za3lpa$ = function (key) {
    var tmp$;
    if (key === Global_getInstance().KEY_ENTER) {
      if (this.closure$list.get_za3lpa$(this.curSel_8be2vx$).hasEquipt_vux9f0$(this.closure$goods.type, this.closure$goods.index)) {
        this.showMessage_4wgjuj$('\u5DF2\u88C5\u5907!', L1000);
      }
       else {
        this.popScreen();
        this.pushScreen_2o7n0o$(new ScreenChgEquipment(this, this.closure$list.get_za3lpa$(this.curSel_8be2vx$), Kotlin.isType(tmp$ = this.closure$goods, GoodsEquipment) ? tmp$ : throwCCE()));
      }
    }
     else if (key === Global_getInstance().KEY_CANCEL) {
      this.popScreen();
    }
  };
  ScreenMenuGoods$equipSelected$ObjectLiteral.prototype.onKeyDown_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_DOWN && this.curSel_8be2vx$ < (this.itemsText_8be2vx$.length - 1 | 0)) {
      this.curSel_8be2vx$ = this.curSel_8be2vx$ + 1 | 0;
    }
     else if (key === Global_getInstance().KEY_UP && this.curSel_8be2vx$ > 0) {
      this.curSel_8be2vx$ = this.curSel_8be2vx$ - 1 | 0;
    }
  };
  ScreenMenuGoods$equipSelected$ObjectLiteral.prototype.draw_9in0vv$ = function (canvas) {
    var tmp$;
    canvas.drawBitmap_t8cslu$(this.bg_8be2vx$, 50, 14);
    tmp$ = this.itemsText_8be2vx$;
    for (var i = 0; i !== tmp$.length; ++i) {
      if (i !== this.curSel_8be2vx$) {
        TextRender_getInstance().drawText_pbrmiz$(canvas, this.itemsText_8be2vx$[i], 53, 17 + (16 * i | 0) | 0);
      }
       else {
        TextRender_getInstance().drawSelText_pbrmiz$(canvas, this.itemsText_8be2vx$[i], 53, 17 + (16 * i | 0) | 0);
      }
    }
  };
  ScreenMenuGoods$equipSelected$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [BaseScreen]
  };
  ScreenMenuGoods.prototype.equipSelected_0 = function (goods) {
    var tmp$;
    var $receiver = this.game.playerList;
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (goods.canPlayerUse_za3lpa$(element.index))
        destination.add_11rb$(element);
    }
    var list = destination;
    if (list.isEmpty()) {
      this.showMessage_4wgjuj$('\u4E0D\u80FD\u88C5\u5907!', L1000);
    }
     else if (list.size === 1) {
      if (list.get_za3lpa$(0).hasEquipt_vux9f0$(goods.type, goods.index)) {
        this.showMessage_4wgjuj$('\u5DF2\u88C5\u5907!', L1000);
      }
       else {
        this.pushScreen_2o7n0o$(new ScreenChgEquipment(this, list.get_za3lpa$(0), Kotlin.isType(tmp$ = goods, GoodsEquipment) ? tmp$ : throwCCE()));
      }
    }
     else {
      this.pushScreen_2o7n0o$(new ScreenMenuGoods$equipSelected$ObjectLiteral(list, goods, this));
    }
  };
  ScreenMenuGoods.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScreenMenuGoods',
    interfaces: [ScreenGoodsList$OnItemSelectedListener, BaseScreen]
  };
  function ScreenMenuProperties(parent) {
    this.parent_1alj2q$_0 = parent;
    this.mFrameBmp_0 = Util_getInstance().getFrameBitmap_vux9f0$(39, 39);
    this.strs_0 = ['\u72B6\u6001', '\u7A7F\u6234'];
    this.mSelId_0 = 0;
  }
  Object.defineProperty(ScreenMenuProperties.prototype, 'parent', {
    get: function () {
      return this.parent_1alj2q$_0;
    }
  });
  Object.defineProperty(ScreenMenuProperties.prototype, 'isPopup', {
    get: function () {
      return true;
    }
  });
  ScreenMenuProperties.prototype.update_s8cxhz$ = function (delta) {
  };
  ScreenMenuProperties.prototype.draw_9in0vv$ = function (canvas) {
    canvas.drawBitmap_t8cslu$(this.mFrameBmp_0, 39, 16);
    if (this.mSelId_0 === 0) {
      TextRender_getInstance().drawSelText_kkuqvh$(canvas, this.strs_0[0], 42, 19);
      TextRender_getInstance().drawText_kkuqvh$(canvas, this.strs_0[1], 42, 35);
    }
     else if (this.mSelId_0 === 1) {
      TextRender_getInstance().drawText_kkuqvh$(canvas, this.strs_0[0], 42, 19);
      TextRender_getInstance().drawSelText_kkuqvh$(canvas, this.strs_0[1], 42, 35);
    }
  };
  ScreenMenuProperties.prototype.onKeyDown_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_UP || key === Global_getInstance().KEY_DOWN) {
      this.mSelId_0 = 1 - this.mSelId_0 | 0;
    }
  };
  ScreenMenuProperties.prototype.onKeyUp_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_CANCEL) {
      this.popScreen();
    }
     else if (key === Global_getInstance().KEY_ENTER) {
      this.popScreen();
      if (this.mSelId_0 === 0) {
        this.pushScreen_2o7n0o$(new ScreenActorState(this));
      }
       else {
        this.pushScreen_2o7n0o$(new ScreenActorWearing(this));
      }
    }
  };
  ScreenMenuProperties.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScreenMenuProperties',
    interfaces: [BaseScreen]
  };
  function ScreenMenuSystem(parent) {
    this.parent_1ykl9u$_0 = parent;
    this.first_0 = 0;
    this.index_0 = 0;
    this.str_0 = ['\u8BFB\u5165\u8FDB\u5EA6', '\u5B58\u50A8\u8FDB\u5EA6', '\u6E38\u620F\u8BBE\u7F6E', '\u7ED3\u675F\u6E38\u620F'];
    this.strX_0 = 42;
    this.strY_0 = 32;
    this.selY_0 = this.strY_0;
    this.bmpFrame_0 = Util_getInstance().getFrameBitmap_vux9f0$(71, 63);
    this.bmpArrowUp_0 = Bitmap$Companion_getInstance().createBitmap_vux9f0$(7, 4);
    this.bmpArrowDown_0 = Bitmap$Companion_getInstance().createBitmap_vux9f0$(7, 4);
    this.bmpArr_0 = [this.bmpArrowDown_0, this.bmpArrowUp_0];
    this.arrowX_0 = 70;
    this.arrowY_0 = 82;
    this.bmpi_0 = 0;
    var p = new Paint();
    p.color = Global_getInstance().COLOR_BLACK;
    var c = new Canvas(this.bmpArrowUp_0);
    c.drawColor_we4i00$(Global_getInstance().COLOR_WHITE);
    c.drawLine_x3aj6j$(3, 0, 4, 0, p);
    c.drawLine_x3aj6j$(2, 1, 5, 1, p);
    c.drawLine_x3aj6j$(1, 2, 6, 2, p);
    c.drawLine_x3aj6j$(0, 3, 7, 3, p);
    c.setBitmap_963ehe$(this.bmpArrowDown_0);
    c.drawColor_we4i00$(Global_getInstance().COLOR_WHITE);
    c.drawLine_x3aj6j$(0, 0, 7, 0, p);
    c.drawLine_x3aj6j$(1, 1, 6, 1, p);
    c.drawLine_x3aj6j$(2, 2, 5, 2, p);
    c.drawLine_x3aj6j$(3, 3, 4, 3, p);
  }
  Object.defineProperty(ScreenMenuSystem.prototype, 'parent', {
    get: function () {
      return this.parent_1ykl9u$_0;
    }
  });
  Object.defineProperty(ScreenMenuSystem.prototype, 'isPopup', {
    get: function () {
      return true;
    }
  });
  ScreenMenuSystem.prototype.update_s8cxhz$ = function (delta) {
  };
  ScreenMenuSystem.prototype.draw_9in0vv$ = function (canvas) {
    canvas.drawBitmap_t8cslu$(this.bmpFrame_0, 39, 29);
    TextRender_getInstance().drawText_kkuqvh$(canvas, this.str_0[this.first_0], this.strX_0, this.strY_0);
    TextRender_getInstance().drawText_kkuqvh$(canvas, this.str_0[this.first_0 + 1 | 0], this.strX_0, this.strY_0 + 16 | 0);
    TextRender_getInstance().drawText_kkuqvh$(canvas, this.str_0[this.first_0 + 2 | 0], this.strX_0, this.strY_0 + 32 | 0);
    TextRender_getInstance().drawSelText_kkuqvh$(canvas, this.str_0[this.index_0], this.strX_0, this.selY_0);
    canvas.drawBitmap_t8cslu$(this.bmpArr_0[this.bmpi_0], this.arrowX_0, this.arrowY_0);
  };
  ScreenMenuSystem.prototype.onKeyDown_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_UP) {
      this.index_0 = this.index_0 - 1 | 0;
      this.selY_0 = this.selY_0 - 16 | 0;
    }
     else if (key === Global_getInstance().KEY_DOWN) {
      this.index_0 = this.index_0 + 1 | 0;
      this.selY_0 = this.selY_0 + 16 | 0;
    }
    if (this.index_0 === 0 || this.index_0 === 4) {
      this.index_0 = 0;
      this.selY_0 = 32;
      this.arrowY_0 = 82;
      this.bmpi_0 = 0;
      this.first_0 = 0;
      this.strY_0 = 32;
    }
     else if (this.index_0 === 3 || this.index_0 === -1) {
      this.index_0 = 3;
      this.selY_0 = 72;
      this.arrowY_0 = 34;
      this.bmpi_0 = 1;
      this.first_0 = 1;
      this.strY_0 = 40;
    }
  };
  ScreenMenuSystem.prototype.onKeyUp_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_CANCEL) {
      this.popScreen();
    }
     else if (key === Global_getInstance().KEY_ENTER) {
      switch (this.index_0) {
        case 0:
          this.pushScreen_2o7n0o$(new ScreenSaveLoadGame(this, ScreenSaveLoadGame$Operate$LOAD_getInstance()));
          break;
        case 1:
          if (Global_getInstance().disableSave)
            this.showMessage_61zpoe$('\u5F53\u524D\u4E0D\u80FD\u5B58\u6863');
          else if (this.game.mainScene.scriptProcess.prev != null)
            this.showMessage_61zpoe$('\u526F\u672C\u4E2D\u4E0D\u80FD\u5B58\u6863');
          else
            this.pushScreen_2o7n0o$(new ScreenSaveLoadGame(this, ScreenSaveLoadGame$Operate$SAVE_getInstance()));
          break;
        case 2:
          break;
        case 3:
          this.game.changeScreen_gacx6e$(ScreenViewType$SCREEN_MENU_getInstance());
          break;
      }
    }
  };
  ScreenMenuSystem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScreenMenuSystem',
    interfaces: [BaseScreen]
  };
  function ScreenTakeMedicine(parent, mMedicine) {
    this.parent_pazhkv$_0 = parent;
    this.mMedicine_0 = mMedicine;
    this.mStatePageIndex_0 = 0;
    this.mActorIndex_0 = 0;
  }
  Object.defineProperty(ScreenTakeMedicine.prototype, 'parent', {
    get: function () {
      return this.parent_pazhkv$_0;
    }
  });
  ScreenTakeMedicine.prototype.update_s8cxhz$ = function (delta) {
  };
  ScreenTakeMedicine.prototype.draw_9in0vv$ = function (canvas) {
    canvas.drawColor_we4i00$(Global_getInstance().COLOR_WHITE);
    this.game.playerList.get_za3lpa$(this.mActorIndex_0).drawState_86va19$(canvas, this.mStatePageIndex_0);
    this.game.playerList.get_za3lpa$(this.mActorIndex_0).drawHead_2g4tob$(canvas, 5, 60);
    if (this.mMedicine_0.goodsNum > 0) {
      this.mMedicine_0.draw_2g4tob$(canvas, 5, 10);
      TextRender_getInstance().drawText_kkuqvh$(canvas, '' + toString(this.mMedicine_0.goodsNum), 13, 35);
    }
  };
  ScreenTakeMedicine.prototype.onKeyDown_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_PAGEDOWN) {
      this.mStatePageIndex_0 = 1;
    }
     else if (key === Global_getInstance().KEY_PAGEUP) {
      this.mStatePageIndex_0 = 0;
    }
     else if (key === Global_getInstance().KEY_LEFT && this.mActorIndex_0 > 0) {
      this.mActorIndex_0 = this.mActorIndex_0 - 1 | 0;
    }
     else if (key === Global_getInstance().KEY_RIGHT && this.mActorIndex_0 < (this.game.playerList.size - 1 | 0)) {
      this.mActorIndex_0 = this.mActorIndex_0 + 1 | 0;
    }
  };
  ScreenTakeMedicine.prototype.onKeyUp_za3lpa$ = function (key) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (key === Global_getInstance().KEY_CANCEL) {
      this.popScreen();
    }
     else if (key === Global_getInstance().KEY_ENTER) {
      if (this.mMedicine_0.goodsNum > 0) {
        if (this.mMedicine_0.type === 9 && (Kotlin.isType(tmp$ = this.mMedicine_0, GoodsMedicine) ? tmp$ : throwCCE()).effectAll()) {
          tmp$_0 = reversed(get_indices(this.game.playerList)).iterator();
          while (tmp$_0.hasNext()) {
            var i = tmp$_0.next();
            (Kotlin.isType(tmp$_1 = this.mMedicine_0, IEatMedicine) ? tmp$_1 : throwCCE()).eat_xa4yhy$(this.game.playerList.get_za3lpa$(i));
          }
        }
         else {
          (Kotlin.isType(tmp$_2 = this.mMedicine_0, IEatMedicine) ? tmp$_2 : throwCCE()).eat_xa4yhy$(this.game.playerList.get_za3lpa$(this.mActorIndex_0));
        }
        this.game.bag.deleteGoods_6xxg66$(this.mMedicine_0);
      }
       else {
        this.popScreen();
      }
    }
  };
  ScreenTakeMedicine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScreenTakeMedicine',
    interfaces: [BaseScreen]
  };
  function ScreenUseMagic(parent, mMagic, mScr) {
    ScreenUseMagic$Companion_getInstance();
    this.parent_g7mshy$_0 = parent;
    this.mMagic_0 = mMagic;
    this.mScr_0 = mScr;
    this.mCurPage_0 = 0;
    this.mCurActor_0 = 0;
  }
  Object.defineProperty(ScreenUseMagic.prototype, 'parent', {
    get: function () {
      return this.parent_g7mshy$_0;
    }
  });
  ScreenUseMagic.prototype.update_s8cxhz$ = function (delta) {
  };
  ScreenUseMagic.prototype.draw_9in0vv$ = function (canvas) {
    canvas.drawColor_we4i00$(Global_getInstance().COLOR_WHITE);
    TextRender_getInstance().drawText_8xt01w$(canvas, this.mMagic_0.magicName, 0, ScreenUseMagic$Companion_getInstance().sNameRect_0);
    var actor = this.game.playerList.get_za3lpa$(this.mCurActor_0);
    actor.drawState_86va19$(canvas, this.mCurPage_0);
    actor.drawHead_2g4tob$(canvas, 5, 60);
  };
  ScreenUseMagic.prototype.onKeyDown_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_RIGHT && this.mCurActor_0 < (this.game.playerList.size - 1 | 0)) {
      this.mCurActor_0 = this.mCurActor_0 + 1 | 0;
    }
     else if (key === Global_getInstance().KEY_LEFT && this.mCurActor_0 > 0) {
      this.mCurActor_0 = this.mCurActor_0 - 1 | 0;
    }
     else if (key === Global_getInstance().KEY_PAGEDOWN || key === Global_getInstance().KEY_PAGEUP) {
      this.mCurPage_0 = 1 - this.mCurPage_0 | 0;
    }
  };
  ScreenUseMagic.prototype.onKeyUp_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_CANCEL) {
      this.popScreen();
    }
     else if (key === Global_getInstance().KEY_ENTER) {
      this.mMagic_0.use_qwqr58$(this.mScr_0, this.game.playerList.get_za3lpa$(this.mCurActor_0));
      this.popScreen();
    }
  };
  function ScreenUseMagic$Companion() {
    ScreenUseMagic$Companion_instance = this;
    this.sNameRect_0 = new Rect(4, 4, 37, 96);
  }
  ScreenUseMagic$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ScreenUseMagic$Companion_instance = null;
  function ScreenUseMagic$Companion_getInstance() {
    if (ScreenUseMagic$Companion_instance === null) {
      new ScreenUseMagic$Companion();
    }
    return ScreenUseMagic$Companion_instance;
  }
  ScreenUseMagic.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScreenUseMagic',
    interfaces: [BaseScreen]
  };
  function BaseGoods() {
    ResBase.call(this);
    this.mEnable_799bpm$_0 = 0;
    this.sumRound_y71hmz$_0 = 0;
    this.mImage_na5mo$_0 = null;
    this.name_dx74sj$_0 = '';
    this.buyPrice_79wyzv$_0 = 0;
    this.sellPrice_tlp66n$_0 = 0;
    this.description_yw9j1y$_0 = '';
    this.eventId_jwk35b$_0 = 0;
    this.goodsNum = 0;
  }
  Object.defineProperty(BaseGoods.prototype, 'sumRound', {
    get: function () {
      return this.sumRound_y71hmz$_0;
    },
    set: function (sumRound) {
      this.sumRound_y71hmz$_0 = sumRound;
    }
  });
  Object.defineProperty(BaseGoods.prototype, 'name', {
    get: function () {
      return this.name_dx74sj$_0;
    },
    set: function (name) {
      this.name_dx74sj$_0 = name;
    }
  });
  Object.defineProperty(BaseGoods.prototype, 'buyPrice', {
    get: function () {
      return this.buyPrice_79wyzv$_0;
    },
    set: function (buyPrice) {
      this.buyPrice_79wyzv$_0 = buyPrice;
    }
  });
  Object.defineProperty(BaseGoods.prototype, 'sellPrice', {
    get: function () {
      return this.sellPrice_tlp66n$_0;
    },
    set: function (sellPrice) {
      this.sellPrice_tlp66n$_0 = sellPrice;
    }
  });
  Object.defineProperty(BaseGoods.prototype, 'description', {
    get: function () {
      return this.description_yw9j1y$_0;
    },
    set: function (description) {
      this.description_yw9j1y$_0 = description;
    }
  });
  Object.defineProperty(BaseGoods.prototype, 'eventId', {
    get: function () {
      return this.eventId_jwk35b$_0;
    },
    set: function (eventId) {
      this.eventId_jwk35b$_0 = eventId;
    }
  });
  BaseGoods.prototype.setData_ir89t6$ = function (buf, offset) {
    var tmp$;
    this.type = buf[offset] & 255;
    this.index = buf[offset + 1 | 0] & 255;
    this.mEnable_799bpm$_0 = buf[offset + 3 | 0] & 255;
    this.sumRound = buf[offset + 4 | 0] & 255;
    this.mImage_na5mo$_0 = Kotlin.isType(tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$GDP_getInstance(), this.type, buf[offset + 5 | 0] & 255), ResImage) ? tmp$ : throwCCE();
    this.name = ResBase$Companion_getInstance().getString_ir89t6$(buf, offset + 6 | 0);
    this.buyPrice = ResBase$Companion_getInstance().get2BytesInt_ir89t6$(buf, offset + 18 | 0);
    this.sellPrice = ResBase$Companion_getInstance().get2BytesInt_ir89t6$(buf, offset + 20 | 0);
    this.description = ResBase$Companion_getInstance().getString_ir89t6$(buf, offset + 30 | 0);
    this.eventId = ResBase$Companion_getInstance().get2BytesInt_ir89t6$(buf, offset + 132 | 0);
    this.setOtherData_ir89t6$(buf, offset);
  };
  BaseGoods.prototype.canPlayerUse_za3lpa$ = function (playId) {
    var tmp$;
    if (1 <= playId && playId <= 4) {
      tmp$ = (this.mEnable_799bpm$_0 & 1 << playId - 1) !== 0;
    }
     else
      tmp$ = false;
    return tmp$;
  };
  BaseGoods.prototype.draw_2g4tob$ = function (canvas, x, y) {
    ensureNotNull(this.mImage_na5mo$_0).draw_tj1hu5$(canvas, 1, x, y);
  };
  BaseGoods.prototype.addGoodsNum_za3lpa$ = function (d) {
    this.goodsNum = this.goodsNum + d | 0;
  };
  BaseGoods.prototype.effectAll = function () {
    return false;
  };
  BaseGoods.prototype.equals = function (other) {
    var tmp$;
    return this.type === (Kotlin.isType(tmp$ = other, BaseGoods) ? tmp$ : throwCCE()).type && this.index === other.index;
  };
  BaseGoods.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseGoods',
    interfaces: [ResBase]
  };
  function Throwable() {
  }
  Throwable.prototype.attack_qpjxya$ = function (other) {
    other.hp = other.hp - this.affectHp | 0;
    other.mp = other.mp - this.affectMp | 0;
    other.beAttackedWithBuff_ila1b3$(this.buff, 0);
  };
  Throwable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Throwable',
    interfaces: []
  };
  function GoodsDecorations() {
    GoodsEquipment.call(this);
    this.mMp_0 = 0;
    this.mHp_0 = 0;
    this.mMagic_0 = 0;
  }
  Object.defineProperty(GoodsDecorations.prototype, 'coopMagic', {
    get: function () {
      var tmp$;
      return Kotlin.isType(tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$MRS_getInstance(), 1, this.mMagic_0), MagicAttack) ? tmp$ : throwCCE();
    }
  });
  GoodsDecorations.prototype.setOtherData_ir89t6$ = function (buf, offset) {
    this.mMp_0 = ResBase$Companion_getInstance().get1ByteSInt_ir89t6$(buf, offset + 22 | 0);
    this.mHp_0 = ResBase$Companion_getInstance().get1ByteSInt_ir89t6$(buf, offset + 23 | 0);
    this.mdf = ResBase$Companion_getInstance().get1ByteSInt_ir89t6$(buf, offset + 24 | 0);
    this.mat = buf[offset + 25 | 0] & 255;
    this.mlingli = ResBase$Companion_getInstance().get1ByteSInt_ir89t6$(buf, offset + 26 | 0);
    this.mSpeed = ResBase$Companion_getInstance().get1ByteSInt_ir89t6$(buf, offset + 27 | 0);
    this.mMagic_0 = buf[offset + 28 | 0] & 255;
    this.mLuck = ResBase$Companion_getInstance().get1ByteSInt_ir89t6$(buf, offset + 29 | 0);
  };
  GoodsDecorations.prototype.putOn_xa4yhy$ = function (p) {
    GoodsEquipment.prototype.putOn_xa4yhy$.call(this, p);
  };
  GoodsDecorations.prototype.takeOff_xa4yhy$ = function (p) {
    GoodsEquipment.prototype.takeOff_xa4yhy$.call(this, p);
  };
  GoodsDecorations.prototype.affect_qpjxya$ = function (fighter) {
    fighter.hp = fighter.hp + this.mHp_0 | 0;
    fighter.mp = fighter.mp + this.mMp_0 | 0;
  };
  GoodsDecorations.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GoodsDecorations',
    interfaces: [GoodsEquipment]
  };
  function GoodsDrama() {
    BaseGoods.call(this);
  }
  GoodsDrama.prototype.setOtherData_ir89t6$ = function (buf, offset) {
  };
  GoodsDrama.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GoodsDrama',
    interfaces: [BaseGoods]
  };
  function GoodsEquipment() {
    BaseGoods.call(this);
    this.mMpMax = 0;
    this.mHpMax = 0;
    this.mdf = 0;
    this.mat = 0;
    this.mlingli = 0;
    this.mSpeed = 0;
    this.mBitEffect = 0;
    this.mLuck = 0;
  }
  GoodsEquipment.prototype.setOtherData_ir89t6$ = function (buf, offset) {
    this.mMpMax = ResBase$Companion_getInstance().get1ByteSInt_ir89t6$(buf, offset + 22 | 0);
    this.mHpMax = ResBase$Companion_getInstance().get1ByteSInt_ir89t6$(buf, offset + 23 | 0);
    this.mdf = ResBase$Companion_getInstance().get1ByteSInt_ir89t6$(buf, offset + 24 | 0);
    this.mat = buf[offset + 25 | 0] & 255;
    this.mlingli = ResBase$Companion_getInstance().get1ByteSInt_ir89t6$(buf, offset + 26 | 0);
    this.mSpeed = ResBase$Companion_getInstance().get1ByteSInt_ir89t6$(buf, offset + 27 | 0);
    this.mBitEffect = buf[offset + 28 | 0] & 255;
    this.mLuck = ResBase$Companion_getInstance().get1ByteSInt_ir89t6$(buf, offset + 29 | 0);
  };
  GoodsEquipment.prototype.putOn_xa4yhy$ = function (p) {
    if (this.canPlayerUse_za3lpa$(p.index)) {
      p.maxMP = p.maxMP + this.mMpMax | 0;
      p.maxHP = p.maxHP + this.mHpMax | 0;
      p.defend = p.defend + this.mdf | 0;
      p.attack = p.attack + this.mat | 0;
      p.lingli = p.lingli + this.mlingli | 0;
      p.speed = p.speed + this.mSpeed | 0;
      if (!Kotlin.isType(this, GoodsWeapon)) {
        p.addBuff_vux9f0$(this.mBitEffect);
      }
      p.luck = p.luck + this.mLuck | 0;
      if (this.eventId !== 0) {
        ScriptResources_getInstance().setEvent_za3lpa$(this.eventId);
      }
    }
  };
  GoodsEquipment.prototype.takeOff_xa4yhy$ = function (p) {
    p.maxMP = p.maxMP - this.mMpMax | 0;
    p.maxHP = p.maxHP - this.mHpMax | 0;
    p.defend = p.defend - this.mdf | 0;
    p.attack = p.attack - this.mat | 0;
    p.lingli = p.lingli - this.mlingli | 0;
    p.speed = p.speed - this.mSpeed | 0;
    if (!Kotlin.isType(this, GoodsWeapon)) {
      p.delBuff_za3lpa$(this.mBitEffect);
    }
    p.luck = p.luck - this.mLuck | 0;
    if (this.eventId !== 0) {
      ScriptResources_getInstance().clearEvent_za3lpa$(this.eventId);
    }
  };
  GoodsEquipment.prototype.affect_qpjxya$ = function (fighter) {
  };
  GoodsEquipment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GoodsEquipment',
    interfaces: [BaseGoods]
  };
  function GoodsHiddenWeapon() {
    BaseGoods.call(this);
    this.affectHp_adfuug$_0 = 0;
    this.affectMp_adfyjx$_0 = 0;
    this.ani_o36ozx$_0 = new ResSrs();
    this.mBitMask_0 = 0;
    this.buff_ym5b6a$_0 = new BuffMan();
  }
  Object.defineProperty(GoodsHiddenWeapon.prototype, 'affectHp', {
    get: function () {
      return this.affectHp_adfuug$_0;
    },
    set: function (affectHp) {
      this.affectHp_adfuug$_0 = affectHp;
    }
  });
  Object.defineProperty(GoodsHiddenWeapon.prototype, 'affectMp', {
    get: function () {
      return this.affectMp_adfyjx$_0;
    },
    set: function (affectMp) {
      this.affectMp_adfyjx$_0 = affectMp;
    }
  });
  Object.defineProperty(GoodsHiddenWeapon.prototype, 'ani', {
    get: function () {
      return this.ani_o36ozx$_0;
    },
    set: function (ani) {
      this.ani_o36ozx$_0 = ani;
    }
  });
  Object.defineProperty(GoodsHiddenWeapon.prototype, 'buff', {
    get: function () {
      return this.buff_ym5b6a$_0;
    },
    set: function (buff) {
      this.buff_ym5b6a$_0 = buff;
    }
  });
  GoodsHiddenWeapon.prototype.setOtherData_ir89t6$ = function (buf, offset) {
    var tmp$;
    this.affectHp = ResBase$Companion_getInstance().get2BytesSInt_ir89t6$(buf, offset + 22 | 0);
    this.affectMp = ResBase$Companion_getInstance().get2BytesSInt_ir89t6$(buf, offset + 24 | 0);
    var type = buf[offset + 27 | 0] & 255;
    var index = buf[offset + 26 | 0] & 255;
    this.ani = Kotlin.isType(tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$SRS_getInstance(), type, index), ResSrs) ? tmp$ : throwCCE();
    this.mBitMask_0 = buf[offset + 28 | 0] & 255;
    this.buff = BuffMan$Companion_getInstance().fromRoundAndMask_vux9f0$(this.sumRound, this.mBitMask_0);
  };
  GoodsHiddenWeapon.prototype.effectAll = function () {
    return (this.mBitMask_0 & 16) !== 0;
  };
  GoodsHiddenWeapon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GoodsHiddenWeapon',
    interfaces: [Throwable, BaseGoods]
  };
  function GoodsManage() {
    this.mGoodsList_8be2vx$ = ArrayList_init();
    this.mEquipList_8be2vx$ = ArrayList_init();
  }
  Object.defineProperty(GoodsManage.prototype, 'goodsList', {
    get: function () {
      return this.mGoodsList_8be2vx$;
    }
  });
  Object.defineProperty(GoodsManage.prototype, 'equipList', {
    get: function () {
      return this.mEquipList_8be2vx$;
    }
  });
  Object.defineProperty(GoodsManage.prototype, 'equitTypeNum', {
    get: function () {
      return this.mEquipList_8be2vx$.size;
    }
  });
  Object.defineProperty(GoodsManage.prototype, 'goodsTypeNum', {
    get: function () {
      return this.mGoodsList_8be2vx$.size;
    }
  });
  GoodsManage.prototype.getEquip_za3lpa$ = function (i) {
    var tmp$;
    if (i >= 0 && i < this.mEquipList_8be2vx$.size) {
      tmp$ = this.mEquipList_8be2vx$.get_za3lpa$(i);
    }
     else
      tmp$ = null;
    return tmp$;
  };
  GoodsManage.prototype.getGoods_za3lpa$ = function (i) {
    var tmp$;
    if (i >= 0 && i < this.mGoodsList_8be2vx$.size) {
      tmp$ = this.mGoodsList_8be2vx$.get_za3lpa$(i);
    }
     else
      tmp$ = null;
    return tmp$;
  };
  GoodsManage.prototype.getGoods_vux9f0$ = function (type, index) {
    if (type >= 1 && type <= 7) {
      return this.getGoods_0(this.mEquipList_8be2vx$, type, index);
    }
     else if (type >= 8 && type <= 14) {
      return this.getGoods_0(this.mGoodsList_8be2vx$, type, index);
    }
    return null;
  };
  GoodsManage.prototype.getGoods_0 = function (list, type, index) {
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = list.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.type === type && element.index === index) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  };
  GoodsManage.prototype.getGoodsNum_vux9f0$ = function (type, index) {
    var num = 0;
    if (1 <= type && type <= 7) {
      num = this.getGoodsNum_0(this.mEquipList_8be2vx$, type, index);
    }
     else if (8 <= type && type <= 14) {
      num = this.getGoodsNum_0(this.mGoodsList_8be2vx$, type, index);
    }
    return num;
  };
  GoodsManage.prototype.getGoodsNum_0 = function (list, type, index) {
    var tmp$, tmp$_0;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_1;
      tmp$_1 = list.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        if (element.type === type && element.index === index) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return (tmp$_0 = (tmp$ = firstOrNull$result) != null ? tmp$.goodsNum : null) != null ? tmp$_0 : 0;
  };
  GoodsManage.prototype.addGoods_qt1dr2$ = function (type, index, num) {
    if (1 <= type && type <= 7) {
      this.addGoods_0(this.mEquipList_8be2vx$, type, index, num);
    }
     else if (8 <= type && type <= 14) {
      this.addGoods_0(this.mGoodsList_8be2vx$, type, index, num);
    }
  };
  GoodsManage.prototype.addGoods_vux9f0$ = function (type, index) {
    if (1 <= type && type <= 7) {
      this.addGoods_0(this.mEquipList_8be2vx$, type, index, 1);
    }
     else if (8 <= type && type <= 14) {
      this.addGoods_0(this.mGoodsList_8be2vx$, type, index, 1);
    }
  };
  GoodsManage.prototype.addGoods_6xxg66$ = function (goods) {
    this.addGoods_vux9f0$(goods.type, goods.index);
  };
  GoodsManage.prototype.deleteGoods_6xxg66$ = function (goods) {
    this.deleteGoods_vux9f0$(goods.type, goods.index);
  };
  GoodsManage.prototype.addGoods_0 = function (list, type, index, num) {
    var tmp$;
    var tmp$_0;
    tmp$_0 = list.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (element.type === type && element.index === index) {
        element.addGoodsNum_za3lpa$(num);
        return;
      }
    }
    var item = Kotlin.isType(tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$GRS_getInstance(), type, index), BaseGoods) ? tmp$ : throwCCE();
    item.goodsNum = num;
    list.add_11rb$(item);
  };
  GoodsManage.prototype.deleteGoods_vux9f0$ = function (type, index) {
    return this.useGoodsNum_qt1dr2$(type, index, 1);
  };
  GoodsManage.prototype.useGoodsNum_qt1dr2$ = function (type, index, num) {
    if (1 <= type && type <= 7) {
      return this.deleteGoods_0(this.mEquipList_8be2vx$, type, index, num);
    }
     else if (8 <= type && type <= 14) {
      return this.deleteGoods_0(this.mGoodsList_8be2vx$, type, index, num);
    }
    return false;
  };
  GoodsManage.prototype.deleteGoods_0 = function (list, type, index, num) {
    var iter = list.iterator();
    while (iter.hasNext()) {
      var i = iter.next();
      if (i.type === type && i.index === index) {
        if (i.goodsNum < num) {
          return false;
        }
        i.addGoodsNum_za3lpa$(-num | 0);
        if (i.goodsNum <= 0) {
          iter.remove();
        }
        return true;
      }
    }
    return false;
  };
  GoodsManage.prototype.clear = function () {
    this.mEquipList_8be2vx$.clear();
    this.mGoodsList_8be2vx$.clear();
  };
  GoodsManage.prototype.read_setnfj$ = function (coder) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.clear();
    var size = coder.readInt();
    tmp$ = size;
    for (var i = 0; i < tmp$; i++) {
      var g = Kotlin.isType(tmp$_0 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$GRS_getInstance(), coder.readInt(), coder.readInt()), BaseGoods) ? tmp$_0 : throwCCE();
      g.goodsNum = coder.readInt();
      this.mEquipList_8be2vx$.add_11rb$(g);
    }
    size = coder.readInt();
    tmp$_1 = size;
    for (var i_0 = 0; i_0 < tmp$_1; i_0++) {
      var g_0 = Kotlin.isType(tmp$_2 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$GRS_getInstance(), coder.readInt(), coder.readInt()), BaseGoods) ? tmp$_2 : throwCCE();
      g_0.goodsNum = coder.readInt();
      this.mGoodsList_8be2vx$.add_11rb$(g_0);
    }
  };
  GoodsManage.prototype.write_vcd9jg$ = function (out) {
    var tmp$, tmp$_0;
    var size = this.mEquipList_8be2vx$.size;
    out.writeInt_za3lpa$(size);
    tmp$ = size;
    for (var i = 0; i < tmp$; i++) {
      var g = this.mEquipList_8be2vx$.get_za3lpa$(i);
      out.writeInt_za3lpa$(g.type);
      out.writeInt_za3lpa$(g.index);
      out.writeInt_za3lpa$(g.goodsNum);
    }
    size = this.mGoodsList_8be2vx$.size;
    out.writeInt_za3lpa$(size);
    tmp$_0 = size;
    for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
      var g_0 = this.mGoodsList_8be2vx$.get_za3lpa$(i_0);
      out.writeInt_za3lpa$(g_0.type);
      out.writeInt_za3lpa$(g_0.index);
      out.writeInt_za3lpa$(g_0.goodsNum);
    }
  };
  GoodsManage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GoodsManage',
    interfaces: []
  };
  function GoodsMedicine() {
    BaseGoods.call(this);
    this.mHp_0 = 0;
    this.mMp_0 = 0;
    this.ani_3cznkv$_0 = null;
    this.mBitMask_0 = 0;
  }
  Object.defineProperty(GoodsMedicine.prototype, 'ani', {
    get: function () {
      return this.ani_3cznkv$_0;
    },
    set: function (ani) {
      this.ani_3cznkv$_0 = ani;
    }
  });
  GoodsMedicine.prototype.setOtherData_ir89t6$ = function (buf, offset) {
    var tmp$;
    this.mHp_0 = ResBase$Companion_getInstance().get2BytesInt_ir89t6$(buf, offset + 22 | 0);
    this.mMp_0 = ResBase$Companion_getInstance().get2BytesInt_ir89t6$(buf, offset + 24 | 0);
    var index = buf[offset + 26 | 0] & 255;
    if (index > 0) {
      this.ani = (tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$SRS_getInstance(), 2, index)) == null || Kotlin.isType(tmp$, ResSrs) ? tmp$ : throwCCE();
    }
    this.mBitMask_0 = buf[offset + 28 | 0] & 255;
  };
  GoodsMedicine.prototype.eat_xa4yhy$ = function (player) {
    player.hp = player.hp + this.mHp_0 | 0;
    if (player.hp > player.maxHP) {
      player.hp = player.maxHP;
    }
    player.mp = player.mp + this.mMp_0 | 0;
    if (player.mp > player.maxMP) {
      player.mp = player.maxMP;
    }
    health(this.mBitMask_0, player.debuff);
  };
  GoodsMedicine.prototype.effectAll = function () {
    return (this.mBitMask_0 & 16) !== 0;
  };
  GoodsMedicine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GoodsMedicine',
    interfaces: [IEatMedicine, BaseGoods]
  };
  function GoodsMedicineChg4Ever() {
    BaseGoods.call(this);
    this.mMpMax_0 = 0;
    this.mHpMax_0 = 0;
    this.mdf_0 = 0;
    this.mat_0 = 0;
    this.mling_0 = 0;
    this.mSpeed_0 = 0;
    this.mLuck_0 = 0;
  }
  GoodsMedicineChg4Ever.prototype.setOtherData_ir89t6$ = function (buf, offset) {
    this.mMpMax_0 = ResBase$Companion_getInstance().get1ByteSInt_ir89t6$(buf, offset + 22 | 0);
    this.mHpMax_0 = ResBase$Companion_getInstance().get1ByteSInt_ir89t6$(buf, offset + 23 | 0);
    this.mdf_0 = ResBase$Companion_getInstance().get1ByteSInt_ir89t6$(buf, offset + 24 | 0);
    this.mat_0 = ResBase$Companion_getInstance().get1ByteSInt_ir89t6$(buf, offset + 25 | 0);
    this.mling_0 = ResBase$Companion_getInstance().get1ByteSInt_ir89t6$(buf, offset + 26 | 0);
    this.mSpeed_0 = ResBase$Companion_getInstance().get1ByteSInt_ir89t6$(buf, offset + 27 | 0);
    this.mLuck_0 = ResBase$Companion_getInstance().get1ByteSInt_ir89t6$(buf, offset + 29 | 0);
  };
  GoodsMedicineChg4Ever.prototype.eat_xa4yhy$ = function (player) {
    player.maxMP = player.maxMP + this.mMpMax_0 | 0;
    player.maxHP = player.maxHP + this.mHpMax_0 | 0;
    player.defend = player.defend + this.mdf_0 | 0;
    player.attack = player.attack + this.mat_0 | 0;
    player.lingli = player.lingli + this.mling_0 | 0;
    player.speed = player.speed + this.mSpeed_0 | 0;
    player.luck = player.luck + this.mLuck_0 | 0;
    Player$Companion_getInstance().sGoodsList.deleteGoods_vux9f0$(this.type, this.index);
  };
  GoodsMedicineChg4Ever.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GoodsMedicineChg4Ever',
    interfaces: [IEatMedicine, BaseGoods]
  };
  function GoodsMedicineLife() {
    BaseGoods.call(this);
    this.mPercent_0 = 0;
  }
  GoodsMedicineLife.prototype.setOtherData_ir89t6$ = function (buf, offset) {
    this.mPercent_0 = buf[offset + 23 | 0] & 255;
    if (this.mPercent_0 > 100) {
      this.mPercent_0 = 100;
    }
  };
  GoodsMedicineLife.prototype.eat_xa4yhy$ = function (player) {
    player.mp = player.mp + (Kotlin.imul(player.maxMP, this.mPercent_0) / 100 | 0) | 0;
    if (player.mp > player.maxMP) {
      player.mp = player.maxMP;
    }
    Player$Companion_getInstance().sGoodsList.deleteGoods_vux9f0$(this.type, this.index);
  };
  GoodsMedicineLife.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GoodsMedicineLife',
    interfaces: [IEatMedicine, BaseGoods]
  };
  function GoodsStimulant() {
    BaseGoods.call(this);
    this.mdfPercent_0 = 0;
    this.matPercent_0 = 0;
    this.mSpeedPercent_0 = 0;
    this.mForAll_0 = false;
  }
  GoodsStimulant.prototype.setOtherData_ir89t6$ = function (buf, offset) {
    this.mdfPercent_0 = buf[offset + 24 | 0] & 255;
    this.matPercent_0 = buf[offset + 25 | 0] & 255;
    this.mSpeedPercent_0 = buf[offset + 27 | 0] & 255;
    this.mForAll_0 = (buf[offset + 28 | 0] & 16) !== 0;
  };
  GoodsStimulant.prototype.effectAll = function () {
    return this.mForAll_0;
  };
  GoodsStimulant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GoodsStimulant',
    interfaces: [BaseGoods]
  };
  function GoodsTudun() {
    BaseGoods.call(this);
  }
  GoodsTudun.prototype.setOtherData_ir89t6$ = function (buf, offset) {
  };
  GoodsTudun.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GoodsTudun',
    interfaces: [BaseGoods]
  };
  function GoodsWeapon() {
    GoodsEquipment.call(this);
    this.ani_fqvjjx$_0 = new ResSrs();
    this.affectMp_bzw5b1$_0 = 0;
    this.buff_91ybaw$_0 = new BuffMan();
  }
  Object.defineProperty(GoodsWeapon.prototype, 'ani', {
    get: function () {
      return this.ani_fqvjjx$_0;
    }
  });
  Object.defineProperty(GoodsWeapon.prototype, 'affectMp', {
    get: function () {
      return this.affectMp_bzw5b1$_0;
    },
    set: function (affectMp) {
      this.affectMp_bzw5b1$_0 = affectMp;
    }
  });
  Object.defineProperty(GoodsWeapon.prototype, 'affectHp', {
    get: function () {
      return this.mat * 50 | 0;
    }
  });
  Object.defineProperty(GoodsWeapon.prototype, 'buff', {
    get: function () {
      return this.buff_91ybaw$_0;
    }
  });
  GoodsWeapon.prototype.putOn_xa4yhy$ = function (p) {
    GoodsEquipment.prototype.putOn_xa4yhy$.call(this, p);
    p.setAtbuff_vux9f0$(this.mBitEffect, this.sumRound);
  };
  GoodsWeapon.prototype.takeOff_xa4yhy$ = function (p) {
    GoodsEquipment.prototype.takeOff_xa4yhy$.call(this, p);
    p.resetAtbuff();
  };
  GoodsWeapon.prototype.attackAll = function () {
    return (this.mBitEffect & 16) !== 0;
  };
  GoodsWeapon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GoodsWeapon',
    interfaces: [Throwable, GoodsEquipment]
  };
  function IEatMedicine() {
  }
  IEatMedicine.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IEatMedicine',
    interfaces: []
  };
  function TextRender() {
    TextRender_instance = this;
    this.mHZKBuf_0 = File$Companion_getInstance().contentsOf_61zpoe$('HZK16');
    this.mASCBuf_0 = File$Companion_getInstance().contentsOf_61zpoe$('ASC16');
    var array = Array_0(256);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = Color$Companion_getInstance().WHITE;
    }
    this.mPixels_0 = array;
    this.mBmpHzk_0 = Bitmap$Companion_getInstance().createBitmap_vux9f0$(16, 16);
    this.mBmpAsc_0 = Bitmap$Companion_getInstance().createBitmap_vux9f0$(8, 16);
  }
  TextRender.prototype.drawText_kkuqvh$ = function (canvas, text, x, y) {
    this.drawText_pbrmiz$(canvas, gbkBytes(text), x, y);
  };
  TextRender.prototype.drawSelText_kkuqvh$ = function (canvas, text, x, y) {
    this.drawSelText_pbrmiz$(canvas, gbkBytes(text), x, y);
  };
  TextRender.prototype.drawSelText_pbrmiz$ = function (canvas, text, x, y) {
    Global_getInstance().fgColor = Global_getInstance().COLOR_WHITE;
    Global_getInstance().bgColor = Global_getInstance().COLOR_BLACK;
    this.drawText_pbrmiz$(canvas, text, x, y);
    Global_getInstance().fgColor = Global_getInstance().COLOR_BLACK;
    Global_getInstance().bgColor = Global_getInstance().COLOR_WHITE;
  };
  TextRender.prototype.drawText_pbrmiz$ = function (canvas, text, x, y) {
    var x0 = x;
    var i = 0;
    while (i < text.length && text[i] !== 0) {
      var t = text[i] & 255;
      if (t >= 161) {
        i = i + 1 | 0;
        var offset = ((94 * (t - 161 | 0) | 0) + (text[i] & 255) - 161 | 0) * 32 | 0;
        canvas.drawBitmap_t8cslu$(this.getHzk_0(offset), x0, y);
        x0 = x0 + 16 | 0;
      }
       else if (t < 128) {
        var offset_0 = t * 16 | 0;
        canvas.drawBitmap_t8cslu$(this.getAsc_0(offset_0), x0, y);
        x0 = x0 + 8 | 0;
      }
       else {
        x0 = x0 + 8 | 0;
      }
      i = i + 1 | 0;
    }
  };
  TextRender.prototype.drawText_3oojmu$ = function (canvas, text, r, y) {
    return this.drawText_sfexxe$(canvas, gbkBytes(text), r, y);
  };
  TextRender.prototype.drawText_sfexxe$ = function (canvas, buf, r, y) {
    var tmp$;
    var tmpY = y;
    var i = 0;
    while (tmpY <= (r.top - 16 | 0) && i < buf.length) {
      var tmpX = r.left;
      while (tmpX <= (r.right - 16 | 0) && i < buf.length) {
        var t = buf[i] & 255;
        if (t >= 161) {
          i = i + 2 | 0;
          tmpX = tmpX + 16 | 0;
        }
         else {
          i = i + 1 | 0;
          tmpX = tmpX + 8 | 0;
        }
      }
      tmpY = tmpY + 16 | 0;
    }
    if (i >= buf.length) {
      return 0;
    }
    while (tmpY <= (r.bottom - 16 | 0) && i < buf.length) {
      var tmpX_0 = r.left;
      while (tmpX_0 <= (r.right - 16 | 0) && i < buf.length) {
        var t_0 = buf[i] & 255;
        if (t_0 >= 161) {
          i = i + 1 | 0;
          var offset = ((94 * (t_0 - 161 | 0) | 0) + (buf[i] & 255) - 161 | 0) * 32 | 0;
          canvas.drawBitmap_t8cslu$(this.getHzk_0(offset), tmpX_0, tmpY);
          tmpX_0 = tmpX_0 + 16 | 0;
        }
         else if (t_0 < 128) {
          var offset_0 = t_0 * 16 | 0;
          canvas.drawBitmap_t8cslu$(this.getAsc_0(offset_0), tmpX_0, tmpY);
          tmpX_0 = tmpX_0 + 8 | 0;
        }
         else {
          tmpX_0 = tmpX_0 + 8 | 0;
        }
        i = i + 1 | 0;
      }
      tmpY = tmpY + 16 | 0;
    }
    var tmp$_0 = i === 0;
    if (tmp$_0) {
      tmp$_0 = !(buf.length === 0);
    }
    if (tmp$_0) {
      tmp$ = 2;
    }
     else
      tmp$ = 1;
    return tmp$;
  };
  TextRender.prototype.textHeightForWitdh_bm4lxs$ = function (s, width) {
    return this.textHeightForWitdh_ir89t6$(gbkBytes(s), width);
  };
  TextRender.prototype.textHeightForWitdh_ir89t6$ = function (buf, width) {
    var tmpY = 0;
    var i = 0;
    while (i < buf.length) {
      var tmpX = 0;
      while (tmpX < width && i < buf.length) {
        var t = buf[i] & 255;
        var tmp$;
        tmp$ = tmpX;
        var tmp$_0;
        if (t >= 161) {
          i = i + 1 | 0;
          tmp$_0 = 16;
        }
         else if (t < 128)
          tmp$_0 = 8;
        else
          tmp$_0 = 8;
        tmpX = tmp$ + tmp$_0 | 0;
        i = i + 1 | 0;
      }
      tmpY = tmpY + 16 | 0;
    }
    return tmpY;
  };
  TextRender.prototype.drawText_8xt01w$ = function (canvas, text, start, r) {
    return this.drawText_tz7kd0$(canvas, gbkBytes(text), start, r);
  };
  TextRender.prototype.drawText_tz7kd0$ = function (canvas, buf, start, r) {
    var i = start;
    var y = r.top;
    while (y <= (r.bottom - 16 | 0) && i < buf.length) {
      var x = r.left;
      while (x <= (r.right - 16 | 0) && i < buf.length) {
        var t = buf[i] & 255;
        if (t >= 161) {
          i = i + 1 | 0;
          var offset = ((94 * (t - 161 | 0) | 0) + (buf[i] & 255) - 161 | 0) * 32 | 0;
          canvas.drawBitmap_t8cslu$(this.getHzk_0(offset), x, y);
          x = x + 16 | 0;
        }
         else if (t < 128) {
          var offset_0 = t * 16 | 0;
          canvas.drawBitmap_t8cslu$(this.getAsc_0(offset_0), x, y);
          x = x + 8 | 0;
        }
         else {
          x = x + 8 | 0;
        }
        i = i + 1 | 0;
      }
      y = y + 16 | 0;
    }
    return i;
  };
  TextRender.prototype.getHzk_0 = function (offset) {
    for (var i = 0; i <= 31; i++) {
      var t = this.mHZKBuf_0[offset + i | 0];
      var k = i << 3;
      this.mPixels_0[k] = (t & 128) !== 0 ? Global_getInstance().fgColor : Global_getInstance().bgColor;
      this.mPixels_0[k | 1] = (t & 64) !== 0 ? Global_getInstance().fgColor : Global_getInstance().bgColor;
      this.mPixels_0[k | 2] = (t & 32) !== 0 ? Global_getInstance().fgColor : Global_getInstance().bgColor;
      this.mPixels_0[k | 3] = (t & 16) !== 0 ? Global_getInstance().fgColor : Global_getInstance().bgColor;
      this.mPixels_0[k | 4] = (t & 8) !== 0 ? Global_getInstance().fgColor : Global_getInstance().bgColor;
      this.mPixels_0[k | 5] = (t & 4) !== 0 ? Global_getInstance().fgColor : Global_getInstance().bgColor;
      this.mPixels_0[k | 6] = (t & 2) !== 0 ? Global_getInstance().fgColor : Global_getInstance().bgColor;
      this.mPixels_0[k | 7] = (t & 1) !== 0 ? Global_getInstance().fgColor : Global_getInstance().bgColor;
    }
    this.mBmpHzk_0.setPixels_khhbfk$(this.mPixels_0, 0, 0, 0, 16, 16);
    return this.mBmpHzk_0;
  };
  TextRender.prototype.getAsc_0 = function (offset) {
    for (var i = 0; i <= 15; i++) {
      var t = this.mASCBuf_0[offset + i | 0];
      var k = i << 3;
      this.mPixels_0[k] = (t & 128) !== 0 ? Global_getInstance().fgColor : Global_getInstance().bgColor;
      this.mPixels_0[k | 1] = (t & 64) !== 0 ? Global_getInstance().fgColor : Global_getInstance().bgColor;
      this.mPixels_0[k | 2] = (t & 32) !== 0 ? Global_getInstance().fgColor : Global_getInstance().bgColor;
      this.mPixels_0[k | 3] = (t & 16) !== 0 ? Global_getInstance().fgColor : Global_getInstance().bgColor;
      this.mPixels_0[k | 4] = (t & 8) !== 0 ? Global_getInstance().fgColor : Global_getInstance().bgColor;
      this.mPixels_0[k | 5] = (t & 4) !== 0 ? Global_getInstance().fgColor : Global_getInstance().bgColor;
      this.mPixels_0[k | 6] = (t & 2) !== 0 ? Global_getInstance().fgColor : Global_getInstance().bgColor;
      this.mPixels_0[k | 7] = (t & 1) !== 0 ? Global_getInstance().fgColor : Global_getInstance().bgColor;
    }
    this.mBmpAsc_0.setPixels_khhbfk$(this.mPixels_0, 0, 0, 0, 8, 16);
    return this.mBmpAsc_0;
  };
  TextRender.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'TextRender',
    interfaces: []
  };
  var TextRender_instance = null;
  function TextRender_getInstance() {
    if (TextRender_instance === null) {
      new TextRender();
    }
    return TextRender_instance;
  }
  function Tiles(index) {
    Tiles$Companion_getInstance();
    var tmp$;
    this.mTileRes_0 = Kotlin.isType(tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$TIL_getInstance(), 1, index), ResImage) ? tmp$ : throwCCE();
  }
  Tiles.prototype.draw_tj1hu5$ = function (canvas, x, y, i) {
    this.mTileRes_0.draw_tj1hu5$(canvas, i + 1 | 0, x, y);
  };
  function Tiles$Companion() {
    Tiles$Companion_instance = this;
    this.WIDTH = 16;
    this.HEIGHT = 16;
  }
  Tiles$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Tiles$Companion_instance = null;
  function Tiles$Companion_getInstance() {
    if (Tiles$Companion_instance === null) {
      new Tiles$Companion();
    }
    return Tiles$Companion_instance;
  }
  Tiles.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tiles',
    interfaces: []
  };
  function Util() {
    Util_instance = this;
    this.bmpInformationBg_0 = null;
    this.bmpSideFrame_0 = null;
    this.drawFramePaint_0 = new Paint();
    this.bmpTriangleCursor_0 = null;
    this.imgSmallNum_0 = null;
    this.bmpChuandai = null;
    this.sBlackPaint = null;
    var tmp$;
    var canvas = Canvas_init();
    var paint = new Paint();
    paint.color = Global_getInstance().COLOR_WHITE;
    paint.style = Paint$Style$FILL_AND_STROKE_getInstance();
    var ind = {v: 0};
    var array = Array_0(5);
    var tmp$_0;
    tmp$_0 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_0; i++) {
      var bmp = Bitmap$Companion_getInstance().createBitmap_vux9f0$(138, 23 + (16 * ind.v | 0) | 0);
      canvas.setBitmap_963ehe$(bmp);
      canvas.drawColor_we4i00$(Global_getInstance().COLOR_BLACK);
      canvas.drawRect_x3aj6j$(1, 1, 135, 20 + (16 * ind.v | 0) | 0, paint);
      canvas.drawRect_x3aj6j$(136, 0, 138, 3, paint);
      canvas.drawLine_x3aj6j$(0, 21 + (16 * ind.v | 0) | 0, 3, 21 + (16 * ind.v | 0) | 0, paint);
      canvas.drawLine_x3aj6j$(0, 22 + (16 * ind.v | 0) | 0, 3, 22 + (16 * ind.v | 0) | 0, paint);
      ind.v = ind.v + 1 | 0;
      array[i] = bmp;
    }
    this.bmpInformationBg_0 = array;
    this.bmpSideFrame_0 = Bitmap$Companion_getInstance().createBitmap_vux9f0$(8, 96);
    canvas.setBitmap_963ehe$(this.bmpSideFrame_0);
    canvas.drawColor_we4i00$(Global_getInstance().COLOR_WHITE);
    paint.color = Global_getInstance().COLOR_BLACK;
    for (var i_0 = 0; i_0 <= 3; i_0++) {
      canvas.drawLine_x3aj6j$(i_0 * 2 | 0, 0, i_0 * 2 | 0, 96, paint);
    }
    this.bmpTriangleCursor_0 = Bitmap$Companion_getInstance().createBitmap_vux9f0$(7, 13);
    canvas.setBitmap_963ehe$(this.bmpTriangleCursor_0);
    canvas.drawColor_we4i00$(Global_getInstance().COLOR_WHITE);
    for (var i_1 = 0; i_1 <= 6; i_1++) {
      canvas.drawLine_x3aj6j$(i_1, i_1, i_1, 13 - i_1 | 0, paint);
    }
    this.imgSmallNum_0 = Kotlin.isType(tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$PIC_getInstance(), 2, 5), ResImage) ? tmp$ : throwCCE();
    this.bmpChuandai = Bitmap$Companion_getInstance().createBitmap_vux9f0$(22, 39);
    var b = Global_getInstance().COLOR_BLACK;
    var w = Global_getInstance().COLOR_WHITE;
    var pixels = [w, w, w, w, w, w, w, w, w, b, b, b, w, w, w, w, w, w, w, w, w, w, w, w, w, b, b, w, w, b, b, b, b, b, b, b, b, b, b, b, b, b, w, w, w, w, b, b, b, b, b, w, w, w, w, w, w, w, w, b, b, b, b, b, w, w, w, w, b, b, w, w, w, b, b, b, w, w, b, b, b, w, w, w, b, b, w, w, w, w, w, b, w, w, b, w, w, w, w, w, w, w, w, w, w, w, b, b, w, w, w, w, w, b, w, w, b, b, b, b, b, b, b, b, b, b, b, w, w, w, w, w, w, w, w, w, w, w, w, b, w, w, w, w, b, b, w, w, w, w, w, w, w, w, w, w, w, w, w, w, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, w, w, w, w, w, w, b, b, w, w, w, b, b, b, b, w, b, b, b, b, b, b, w, w, w, w, w, w, w, w, w, b, b, b, b, b, b, w, w, w, b, b, b, w, w, w, w, w, w, w, b, b, b, b, w, w, b, b, b, w, w, w, w, w, w, w, b, b, b, b, b, b, b, b, w, w, w, w, b, b, b, w, w, w, w, w, w, w, w, b, b, b, b, w, w, w, w, w, w, w, b, b, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, b, b, b, b, b, b, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, b, b, b, b, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, b, w, w, w, w, b, b, w, w, w, b, w, w, w, w, w, w, w, w, b, b, b, b, b, b, b, w, b, b, w, w, b, b, w, w, w, w, w, w, w, b, b, w, w, b, w, w, w, w, b, b, w, b, w, w, w, w, w, w, w, w, w, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, w, w, w, w, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, w, w, w, w, w, w, w, w, b, b, b, b, b, b, b, w, b, b, w, b, b, w, w, w, w, w, w, w, w, w, b, b, w, b, b, b, b, w, b, b, w, b, b, w, w, w, w, w, w, w, w, w, b, w, b, b, w, w, b, w, w, b, w, b, b, w, w, w, w, w, w, w, w, w, b, b, b, b, b, b, b, w, w, b, b, b, b, w, w, w, w, w, w, w, w, w, b, b, b, b, b, b, b, w, w, b, b, b, w, w, w, w, w, w, w, w, w, w, w, b, b, b, b, b, w, w, w, w, b, b, b, w, w, w, w, w, w, b, b, b, b, b, w, w, w, w, b, b, b, b, b, b, b, b, b, b, w, w, w, w, w, w, b, b, b, w, w, b, b, w, b, b, w, w, b, b, b, b, b, b, b, w, w, b, b, w, w, w, w, w, w, b, w, w, w, w, w, b, b, b, b, b, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, b, b, w, w];
    this.bmpChuandai.setPixels_khhbfk$(pixels, 0, 0, 0, 22, 39);
    this.drawFramePaint_0.color = Global_getInstance().COLOR_BLACK;
    this.drawFramePaint_0.style = Paint$Style$STROKE_getInstance();
    this.sBlackPaint = new Paint();
    this.sBlackPaint.color = Global_getInstance().COLOR_BLACK;
    this.sBlackPaint.style = Paint$Style$STROKE_getInstance();
    this.sBlackPaint.strokeWidth = 1;
  }
  Util.prototype.showInformation_g6cl4j$ = function (canvas, msg) {
    canvas.drawBitmap_t8cslu$(this.bmpInformationBg_0[0], 11, 37);
    TextRender_getInstance().drawText_kkuqvh$(canvas, msg, 16, 39);
  };
  Util.prototype.showMessage_g6cl4j$ = function (canvas, msg) {
    this.showMessage_2yb3jp$(canvas, gbkBytes(msg));
  };
  Util.prototype.showMessage_2yb3jp$ = function (canvas, msg) {
    var lineNum = msg.length / 16 | 0;
    if (lineNum >= 5)
      lineNum = 4;
    var textY = 39 - (lineNum * 8 | 0) | 0;
    canvas.drawBitmap_t8cslu$(this.bmpInformationBg_0[lineNum], 11, textY - 2 | 0);
    TextRender_getInstance().drawText_tz7kd0$(canvas, msg, 0, new Rect(16, textY, 144, textY + (16 * lineNum | 0) + 16 | 0));
  };
  Util.prototype.drawSideFrame_9in0vv$ = function (canvas) {
    canvas.drawBitmap_t8cslu$(this.bmpSideFrame_0, 0, 0);
    canvas.drawBitmap_t8cslu$(this.bmpSideFrame_0, 152, 0);
  };
  Util.prototype.getFrameBitmap_vux9f0$ = function (w, h) {
    var bmp = Bitmap$Companion_getInstance().createBitmap_vux9f0$(w, h);
    var tmpC = new Canvas(bmp);
    tmpC.drawColor_we4i00$(Global_getInstance().COLOR_WHITE);
    tmpC.drawRect_x3aj6j$(1, 1, w - 2 | 0, h - 2 | 0, this.drawFramePaint_0);
    return bmp;
  };
  Util.prototype.drawTriangleCursor_2g4tob$ = function (canvas, x, y) {
    canvas.drawBitmap_t8cslu$(this.bmpTriangleCursor_0, x, y);
  };
  Util.prototype.drawSmallNum_tj1hu5$ = function (canvas, num, x, y) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var tmpNum = num;
    var tmpX = x;
    if (tmpNum < 0)
      tmpNum = -tmpNum | 0;
    var digits = tmpNum.toString();
    tmp$ = get_indices_1(digits);
    tmp$_0 = tmp$.first;
    tmp$_1 = tmp$.last;
    tmp$_2 = tmp$.step;
    for (var i = tmp$_0; i <= tmp$_1; i += tmp$_2) {
      this.imgSmallNum_0.draw_tj1hu5$(canvas, digits.charCodeAt(i) - 48 + 1 | 0, tmpX, y);
      tmpX = tmpX + (this.imgSmallNum_0.width + 1) | 0;
    }
    return Kotlin.imul(digits.length, this.imgSmallNum_0.width);
  };
  Util.prototype.getSmallSignedNumBitmap_za3lpa$ = function (num) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var digits = (num > 0 ? num : -num | 0).toString();
    var sign = Kotlin.isType(tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$PIC_getInstance(), 2, num > 0 ? 6 : 7), ResImage) ? tmp$ : throwCCE();
    var bmp = Bitmap$Companion_getInstance().createBitmap_vux9f0$(sign.width + Kotlin.imul(digits.length, this.imgSmallNum_0.width) + 1 + digits.length | 0, this.imgSmallNum_0.height);
    var c = new Canvas(bmp);
    sign.draw_tj1hu5$(c, 1, 0, 0);
    var x = sign.width + 1 | 0;
    tmp$_0 = get_indices_1(digits);
    tmp$_1 = tmp$_0.first;
    tmp$_2 = tmp$_0.last;
    tmp$_3 = tmp$_0.step;
    for (var i = tmp$_1; i <= tmp$_2; i += tmp$_3) {
      this.imgSmallNum_0.draw_tj1hu5$(c, digits.charCodeAt(i) - 48 + 1 | 0, x, 0);
      x = x + (this.imgSmallNum_0.width + 1) | 0;
    }
    return bmp;
  };
  Util.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Util',
    interfaces: []
  };
  var Util_instance = null;
  function Util_getInstance() {
    if (Util_instance === null) {
      new Util();
    }
    return Util_instance;
  }
  function DatLib(buffer) {
    DatLib$Companion_getInstance();
    this.mBuffer_0 = buffer;
    this.mDataOffset_0 = HashMap_init(2048);
    this.guts_0 = ArrayList_init();
    this.getAllResOffset_0();
  }
  function DatLib$Res(type, index) {
    this.type = type;
    this.index = index;
  }
  DatLib$Res.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Res',
    interfaces: []
  };
  DatLib$Res.prototype.component1 = function () {
    return this.type;
  };
  DatLib$Res.prototype.component2 = function () {
    return this.index;
  };
  DatLib$Res.prototype.copy_vux9f0$ = function (type, index) {
    return new DatLib$Res(type === void 0 ? this.type : type, index === void 0 ? this.index : index);
  };
  DatLib$Res.prototype.toString = function () {
    return 'Res(type=' + Kotlin.toString(this.type) + (', index=' + Kotlin.toString(this.index)) + ')';
  };
  DatLib$Res.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.index) | 0;
    return result;
  };
  DatLib$Res.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.index, other.index)))));
  };
  DatLib.prototype.tryCompileScripts_3eoda2$ = function (vm) {
    println('Trying to compile all guts');
    var tmp$;
    tmp$ = this.guts_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      vm.compileScript_vux9f0$(element.type, element.index);
    }
    println('All guts compile OK');
  };
  DatLib.prototype.getAllResOffset_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var i = 16;
    var j = 8192;
    while (i < this.mBuffer_0.length && this.mBuffer_0[i] !== -1) {
      var resType = this.mBuffer_0[tmp$ = i, i = tmp$ + 1 | 0, tmp$];
      var type = this.mBuffer_0[tmp$_0 = i, i = tmp$_0 + 1 | 0, tmp$_0] & 255;
      var index = this.mBuffer_0[tmp$_1 = i, i = tmp$_1 + 1 | 0, tmp$_1] & 255;
      var key = this.getKey_0(resType, type, index);
      var block = this.mBuffer_0[tmp$_2 = j, j = tmp$_2 + 1 | 0, tmp$_2] & 255;
      var low = this.mBuffer_0[tmp$_3 = j, j = tmp$_3 + 1 | 0, tmp$_3] & 255;
      var high = this.mBuffer_0[tmp$_4 = j, j = tmp$_4 + 1 | 0, tmp$_4] & 255;
      var value = block * 16384 | 0 | (high << 8 | low);
      this.mDataOffset_0.put_xwzc9p$(key, value);
      if (resType === 1) {
        this.guts_0.add_11rb$(new DatLib$Res(type, index));
      }
    }
  };
  DatLib.prototype.getRes_2et8c9$ = function (resType, type, index, allowNull) {
    if (allowNull === void 0)
      allowNull = false;
    var tmp$, tmp$_0, tmp$_1;
    var offset = this.getDataOffset_0(resType, type, index);
    if (offset !== -1) {
      switch (resType.name) {
        case 'GUT':
          tmp$ = new ResGut();
          break;
        case 'MAP':
          tmp$ = new ResMap();
          break;
        case 'ARS':
          switch (type) {
            case 1:
              tmp$ = new Player();
              break;
            case 2:
              tmp$ = new NPC();
              break;
            case 3:
              tmp$ = new Monster();
              break;
            case 4:
              tmp$ = new SceneObj();
              break;
            default:tmp$ = null;
              break;
          }

          break;
        case 'MRS':
          tmp$ = this.getMagic_0(type);
          break;
        case 'SRS':
          tmp$ = new ResSrs();
          break;
        case 'GRS':
          tmp$ = this.getGoods_0(type);
          break;
        case 'TIL':
        case 'ACP':
        case 'GDP':
        case 'GGJ':
        case 'PIC':
          tmp$ = new ResImage();
          break;
        case 'MLR':
          switch (type) {
            case 1:
              tmp$ = new ResMagicChain();
              break;
            case 2:
              tmp$ = new ResLevelupChain();
              break;
            default:tmp$ = null;
              break;
          }

          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      var res = tmp$;
      res != null ? (res.setData_ir89t6$(this.mBuffer_0, offset), Unit) : null;
      tmp$_0 = res;
    }
     else {
      tmp$_0 = null;
    }
    var res_0 = tmp$_0;
    if (allowNull)
      return res_0;
    if (res_0 == null) {
      switch (resType.name) {
        case 'SRS':
          tmp$_1 = new ResSrs();
          break;
        case 'TIL':
        case 'ACP':
        case 'GDP':
        case 'GGJ':
        case 'PIC':
          tmp$_1 = new ResImage();
          break;
        case 'MLR':
          switch (type) {
            case 1:
              tmp$_1 = new ResMagicChain();
              break;
            case 2:
              tmp$_1 = new ResLevelupChain();
              break;
            default:tmp$_1 = null;
              break;
          }

          break;
        default:tmp$_1 = null;
          break;
      }
      res_0 = tmp$_1;
    }
    if (res_0 == null) {
      throw Error_init('res not found:resType=' + resType + ',type=' + type + ',index=' + index);
    }
    return res_0;
  };
  DatLib.prototype.getGoods_0 = function (type) {
    if (1 <= type && type <= 5) {
      return new GoodsEquipment();
    }
    var rtn = null;
    switch (type) {
      case 6:
        rtn = new GoodsDecorations();
        break;
      case 7:
        rtn = new GoodsWeapon();
        break;
      case 8:
        rtn = new GoodsHiddenWeapon();
        break;
      case 9:
        rtn = new GoodsMedicine();
        break;
      case 10:
        rtn = new GoodsMedicineLife();
        break;
      case 11:
        rtn = new GoodsMedicineChg4Ever();
        break;
      case 12:
        rtn = new GoodsStimulant();
        break;
      case 13:
        rtn = new GoodsTudun();
        break;
      case 14:
        rtn = new GoodsDrama();
        break;
    }
    return rtn;
  };
  DatLib.prototype.getMagic_0 = function (type) {
    switch (type) {
      case 1:
        return new MagicAttack();
      case 2:
        return new MagicEnhance();
      case 3:
        return new MagicRestore();
      case 4:
        return new MagicAuxiliary();
      case 5:
        return new MagicSpecial();
    }
    return null;
  };
  DatLib.prototype.getDataOffset_0 = function (resType, type, index) {
    var tmp$;
    return (tmp$ = this.mDataOffset_0.get_11rb$(this.getKey_0(resType.v, type, index))) != null ? tmp$ : -1;
  };
  DatLib.prototype.getKey_0 = function (resType, type, index) {
    return resType << 16 | type << 8 | index;
  };
  function DatLib$ResType(name, ordinal, v) {
    Enum.call(this);
    this.v = v;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DatLib$ResType_initFields() {
    DatLib$ResType_initFields = function () {
    };
    DatLib$ResType$GUT_instance = new DatLib$ResType('GUT', 0, 1);
    DatLib$ResType$MAP_instance = new DatLib$ResType('MAP', 1, 2);
    DatLib$ResType$ARS_instance = new DatLib$ResType('ARS', 2, 3);
    DatLib$ResType$MRS_instance = new DatLib$ResType('MRS', 3, 4);
    DatLib$ResType$SRS_instance = new DatLib$ResType('SRS', 4, 5);
    DatLib$ResType$GRS_instance = new DatLib$ResType('GRS', 5, 6);
    DatLib$ResType$TIL_instance = new DatLib$ResType('TIL', 6, 7);
    DatLib$ResType$ACP_instance = new DatLib$ResType('ACP', 7, 8);
    DatLib$ResType$GDP_instance = new DatLib$ResType('GDP', 8, 9);
    DatLib$ResType$GGJ_instance = new DatLib$ResType('GGJ', 9, 10);
    DatLib$ResType$PIC_instance = new DatLib$ResType('PIC', 10, 11);
    DatLib$ResType$MLR_instance = new DatLib$ResType('MLR', 11, 12);
  }
  var DatLib$ResType$GUT_instance;
  function DatLib$ResType$GUT_getInstance() {
    DatLib$ResType_initFields();
    return DatLib$ResType$GUT_instance;
  }
  var DatLib$ResType$MAP_instance;
  function DatLib$ResType$MAP_getInstance() {
    DatLib$ResType_initFields();
    return DatLib$ResType$MAP_instance;
  }
  var DatLib$ResType$ARS_instance;
  function DatLib$ResType$ARS_getInstance() {
    DatLib$ResType_initFields();
    return DatLib$ResType$ARS_instance;
  }
  var DatLib$ResType$MRS_instance;
  function DatLib$ResType$MRS_getInstance() {
    DatLib$ResType_initFields();
    return DatLib$ResType$MRS_instance;
  }
  var DatLib$ResType$SRS_instance;
  function DatLib$ResType$SRS_getInstance() {
    DatLib$ResType_initFields();
    return DatLib$ResType$SRS_instance;
  }
  var DatLib$ResType$GRS_instance;
  function DatLib$ResType$GRS_getInstance() {
    DatLib$ResType_initFields();
    return DatLib$ResType$GRS_instance;
  }
  var DatLib$ResType$TIL_instance;
  function DatLib$ResType$TIL_getInstance() {
    DatLib$ResType_initFields();
    return DatLib$ResType$TIL_instance;
  }
  var DatLib$ResType$ACP_instance;
  function DatLib$ResType$ACP_getInstance() {
    DatLib$ResType_initFields();
    return DatLib$ResType$ACP_instance;
  }
  var DatLib$ResType$GDP_instance;
  function DatLib$ResType$GDP_getInstance() {
    DatLib$ResType_initFields();
    return DatLib$ResType$GDP_instance;
  }
  var DatLib$ResType$GGJ_instance;
  function DatLib$ResType$GGJ_getInstance() {
    DatLib$ResType_initFields();
    return DatLib$ResType$GGJ_instance;
  }
  var DatLib$ResType$PIC_instance;
  function DatLib$ResType$PIC_getInstance() {
    DatLib$ResType_initFields();
    return DatLib$ResType$PIC_instance;
  }
  var DatLib$ResType$MLR_instance;
  function DatLib$ResType$MLR_getInstance() {
    DatLib$ResType_initFields();
    return DatLib$ResType$MLR_instance;
  }
  DatLib$ResType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResType',
    interfaces: [Enum]
  };
  function DatLib$ResType$values() {
    return [DatLib$ResType$GUT_getInstance(), DatLib$ResType$MAP_getInstance(), DatLib$ResType$ARS_getInstance(), DatLib$ResType$MRS_getInstance(), DatLib$ResType$SRS_getInstance(), DatLib$ResType$GRS_getInstance(), DatLib$ResType$TIL_getInstance(), DatLib$ResType$ACP_getInstance(), DatLib$ResType$GDP_getInstance(), DatLib$ResType$GGJ_getInstance(), DatLib$ResType$PIC_getInstance(), DatLib$ResType$MLR_getInstance()];
  }
  DatLib$ResType.values = DatLib$ResType$values;
  function DatLib$ResType$valueOf(name) {
    switch (name) {
      case 'GUT':
        return DatLib$ResType$GUT_getInstance();
      case 'MAP':
        return DatLib$ResType$MAP_getInstance();
      case 'ARS':
        return DatLib$ResType$ARS_getInstance();
      case 'MRS':
        return DatLib$ResType$MRS_getInstance();
      case 'SRS':
        return DatLib$ResType$SRS_getInstance();
      case 'GRS':
        return DatLib$ResType$GRS_getInstance();
      case 'TIL':
        return DatLib$ResType$TIL_getInstance();
      case 'ACP':
        return DatLib$ResType$ACP_getInstance();
      case 'GDP':
        return DatLib$ResType$GDP_getInstance();
      case 'GGJ':
        return DatLib$ResType$GGJ_getInstance();
      case 'PIC':
        return DatLib$ResType$PIC_getInstance();
      case 'MLR':
        return DatLib$ResType$MLR_getInstance();
      default:throwISE('No enum constant fmj.lib.DatLib.ResType.' + name);
    }
  }
  DatLib$ResType.valueOf_61zpoe$ = DatLib$ResType$valueOf;
  function DatLib$Companion() {
    DatLib$Companion_instance = this;
    this.instance_vl9d13$_0 = lazy(DatLib$Companion$instance$lambda);
    this.missBitmap_80n5q9$_0 = lazy(DatLib$Companion$missBitmap$lambda(this));
  }
  Object.defineProperty(DatLib$Companion.prototype, 'instance', {
    get: function () {
      return this.instance_vl9d13$_0.value;
    }
  });
  DatLib$Companion.prototype.getRes_2et8c9$ = function (resType, type, index, allowNull) {
    if (allowNull === void 0)
      allowNull = false;
    return this.instance.getRes_2et8c9$(resType, type, index, allowNull);
  };
  DatLib$Companion.prototype.getPic_ydzd23$ = function (type, index, allowNull) {
    if (allowNull === void 0)
      allowNull = false;
    var tmp$;
    return (tmp$ = this.getRes_2et8c9$(DatLib$ResType$PIC_getInstance(), type, index, allowNull)) == null || Kotlin.isType(tmp$, ResImage) ? tmp$ : throwCCE();
  };
  DatLib$Companion.prototype.getMlr_ydzd23$ = function (type, index, allowNull) {
    if (allowNull === void 0)
      allowNull = false;
    var tmp$;
    return (tmp$ = this.getRes_2et8c9$(DatLib$ResType$MLR_getInstance(), type, index, allowNull)) == null || Kotlin.isType(tmp$, ResMagicChain) ? tmp$ : throwCCE();
  };
  DatLib$Companion.prototype.getACP_ydzd23$ = function (type, index, allowNull) {
    if (allowNull === void 0)
      allowNull = false;
    var tmp$;
    return (tmp$ = this.getRes_2et8c9$(DatLib$ResType$ACP_getInstance(), type, index, allowNull)) == null || Kotlin.isType(tmp$, ResImage) ? tmp$ : throwCCE();
  };
  DatLib$Companion.prototype.getMrsOrNull_vux9f0$ = function (type, index) {
    var tmp$;
    return (tmp$ = this.getRes_2et8c9$(DatLib$ResType$MRS_getInstance(), type, index, true)) == null || Kotlin.isType(tmp$, BaseMagic) ? tmp$ : throwCCE();
  };
  DatLib$Companion.prototype.getMrs_vux9f0$ = function (type, index) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.getRes_2et8c9$(DatLib$ResType$MRS_getInstance(), type, index, false), BaseMagic) ? tmp$ : throwCCE();
  };
  Object.defineProperty(DatLib$Companion.prototype, 'missBitmap', {
    get: function () {
      return this.missBitmap_80n5q9$_0.value;
    }
  });
  function DatLib$Companion$instance$lambda() {
    return new DatLib(File$Companion_getInstance().contentsOf_61zpoe$('DAT.LIB'));
  }
  function DatLib$Companion$missBitmap$lambda(this$DatLib$) {
    return function () {
      var tmp$, tmp$_0;
      var tmp$_1;
      if ((tmp$_0 = (tmp$ = this$DatLib$.getPic_ydzd23$(2, 18)) != null ? tmp$.getBitmap_za3lpa$(0) : null) != null)
        tmp$_1 = tmp$_0;
      else {
        var bmp = Bitmap_init(32, 14);
        var canvas = new Canvas(bmp);
        TextRender_getInstance().drawText_kkuqvh$(canvas, 'Miss', 0, -2);
        tmp$_1 = bmp;
      }
      return tmp$_1;
    };
  }
  DatLib$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DatLib$Companion_instance = null;
  function DatLib$Companion_getInstance() {
    if (DatLib$Companion_instance === null) {
      new DatLib$Companion();
    }
    return DatLib$Companion_instance;
  }
  DatLib.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DatLib',
    interfaces: []
  };
  function ResBase() {
    ResBase$Companion_getInstance();
    this.type_6ym9b$_0 = 0;
    this.index_m1yu1$_0 = 0;
  }
  Object.defineProperty(ResBase.prototype, 'type', {
    get: function () {
      return this.type_6ym9b$_0;
    },
    set: function (type) {
      this.type_6ym9b$_0 = type;
    }
  });
  Object.defineProperty(ResBase.prototype, 'index', {
    get: function () {
      return this.index_m1yu1$_0;
    },
    set: function (index) {
      this.index_m1yu1$_0 = index;
    }
  });
  function ResBase$Companion() {
    ResBase$Companion_instance = this;
  }
  ResBase$Companion.prototype.getString_ir89t6$ = function (buf, start) {
    var i = 0;
    while (buf[start + i | 0] !== 0)
      i = i + 1 | 0;
    return gbkString(buf, start, i);
  };
  ResBase$Companion.prototype.get2BytesInt_ir89t6$ = function (buf, start) {
    return buf[start] & 255 | buf[start + 1 | 0] << 8 & 65280;
  };
  ResBase$Companion.prototype.get2BytesSInt_ir89t6$ = function (buf, start) {
    var i = buf[start] & 255 | buf[start + 1 | 0] << 8 & 65280;
    return toShort(i);
  };
  ResBase$Companion.prototype.get1ByteSInt_ir89t6$ = function (buf, start) {
    return buf[start];
  };
  ResBase$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ResBase$Companion_instance = null;
  function ResBase$Companion_getInstance() {
    if (ResBase$Companion_instance === null) {
      new ResBase$Companion();
    }
    return ResBase$Companion_instance;
  }
  ResBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResBase',
    interfaces: []
  };
  function ResGut() {
    ResBase.call(this);
    this.description_ropvta$_0 = '';
    this.mLength_0 = 0;
    this.mNumSceneEvent_0 = 0;
    this.sceneEvent_d7sl48$_0 = this.sceneEvent_d7sl48$_0;
    this.scriptData_7tvrfz$_0 = this.scriptData_7tvrfz$_0;
  }
  Object.defineProperty(ResGut.prototype, 'description', {
    get: function () {
      return this.description_ropvta$_0;
    },
    set: function (description) {
      this.description_ropvta$_0 = description;
    }
  });
  Object.defineProperty(ResGut.prototype, 'sceneEvent', {
    get: function () {
      if (this.sceneEvent_d7sl48$_0 == null)
        return throwUPAE('sceneEvent');
      return this.sceneEvent_d7sl48$_0;
    },
    set: function (sceneEvent) {
      this.sceneEvent_d7sl48$_0 = sceneEvent;
    }
  });
  Object.defineProperty(ResGut.prototype, 'scriptData', {
    get: function () {
      if (this.scriptData_7tvrfz$_0 == null)
        return throwUPAE('scriptData');
      return this.scriptData_7tvrfz$_0;
    },
    set: function (scriptData) {
      this.scriptData_7tvrfz$_0 = scriptData;
    }
  });
  ResGut.prototype.setData_ir89t6$ = function (buf, offset) {
    var tmp$;
    this.type = buf[offset];
    this.index = buf[offset + 1 | 0];
    this.description = ResBase$Companion_getInstance().getString_ir89t6$(buf, offset + 2 | 0);
    this.mLength_0 = (buf[offset + 25 | 0] & 255) << 8 | buf[offset + 24 | 0] & 255;
    this.mNumSceneEvent_0 = buf[offset + 26 | 0] & 255;
    this.sceneEvent = new Int32Array(this.mNumSceneEvent_0);
    tmp$ = this.mNumSceneEvent_0;
    for (var i = 0; i < tmp$; i++) {
      this.sceneEvent[i] = (buf[offset + (i << 1) + 28 | 0] & 255) << 8 | buf[offset + (i << 1) + 27 | 0] & 255;
    }
    var len = this.mLength_0 - (this.mNumSceneEvent_0 * 2 | 0) - 3 | 0;
    this.scriptData = new Int8Array(len);
    System_getInstance().arraycopy_nlwz52$(buf, offset + 27 + (this.mNumSceneEvent_0 * 2 | 0) | 0, this.scriptData, 0, len);
  };
  ResGut.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResGut',
    interfaces: [ResBase]
  };
  function ResImage() {
    ResBase.call(this);
    this.width_qjhswd$_0 = 0;
    this.height_koqwes$_0 = 0;
    this.number_po9mq6$_0 = 0;
    this.mTransparent_0 = false;
    this.mData_0 = null;
    this.mBitmaps_0 = null;
  }
  Object.defineProperty(ResImage.prototype, 'width', {
    get: function () {
      return this.width_qjhswd$_0;
    },
    set: function (width) {
      this.width_qjhswd$_0 = width;
    }
  });
  Object.defineProperty(ResImage.prototype, 'height', {
    get: function () {
      return this.height_koqwes$_0;
    },
    set: function (height) {
      this.height_koqwes$_0 = height;
    }
  });
  Object.defineProperty(ResImage.prototype, 'number', {
    get: function () {
      return this.number_po9mq6$_0;
    },
    set: function (number) {
      this.number_po9mq6$_0 = number;
    }
  });
  Object.defineProperty(ResImage.prototype, 'bytesCount', {
    get: function () {
      return ensureNotNull(this.mData_0).length + 6 | 0;
    }
  });
  ResImage.prototype.setData_ir89t6$ = function (buf, offset) {
    this.type = buf[offset] & 255;
    this.index = buf[offset + 1 | 0] & 255;
    this.width = buf[offset + 2 | 0] & 255;
    this.height = buf[offset + 3 | 0] & 255;
    this.number = buf[offset + 4 | 0] & 255;
    this.mTransparent_0 = buf[offset + 5 | 0] === 2;
    var len = Kotlin.imul(Kotlin.imul(Kotlin.imul(this.number, (this.width / 8 | 0) + (this.width % 8 !== 0 ? 1 : 0) | 0), this.height), buf[offset + 5 | 0]);
    this.mData_0 = new Int8Array(len);
    System_getInstance().arraycopy_nlwz52$(buf, offset + 6 | 0, ensureNotNull(this.mData_0), 0, len);
    this.createBitmaps_0();
  };
  ResImage.prototype.createBitmaps_0 = function () {
    var iOfData = {v: 0};
    var array = Array_0(this.number);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var init$result;
      var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
      var array_0 = Array_0(Kotlin.imul(this.width, this.height));
      var tmp$_5;
      tmp$_5 = array_0.length - 1 | 0;
      for (var i_0 = 0; i_0 <= tmp$_5; i_0++) {
        array_0[i_0] = Color$Companion_getInstance().WHITE;
      }
      var tmp = array_0;
      if (this.mTransparent_0) {
        var cnt = 0;
        var iOfTmp = 0;
        tmp$_0 = this.height;
        for (var y = 0; y < tmp$_0; y++) {
          tmp$_1 = this.width;
          for (var x = 0; x < tmp$_1; x++) {
            if ((ensureNotNull(this.mData_0)[iOfData.v] << cnt & 128) !== 0) {
              tmp[iOfTmp] = Global_getInstance().COLOR_TRANSP;
            }
             else {
              tmp[iOfTmp] = (ensureNotNull(this.mData_0)[iOfData.v] << cnt << 1 & 128) !== 0 ? Global_getInstance().COLOR_BLACK : Global_getInstance().COLOR_WHITE;
            }
            iOfTmp = iOfTmp + 1 | 0;
            cnt = cnt + 2 | 0;
            if (cnt >= 8) {
              cnt = 0;
              iOfData.v = iOfData.v + 1 | 0;
            }
          }
          if (1 <= cnt && cnt <= 7) {
            cnt = 0;
            iOfData.v = iOfData.v + 1 | 0;
          }
          if (iOfData.v % 2 !== 0) {
            iOfData.v = iOfData.v + 1 | 0;
          }
        }
        init$result = Bitmap$Companion_getInstance().createBitmap_34aymq$(tmp, this.width, this.height);
      }
       else {
        var cnt_0 = 0;
        var iOfTmp_0 = 0;
        tmp$_2 = this.height;
        for (var y_0 = 0; y_0 < tmp$_2; y_0++) {
          tmp$_3 = this.width;
          for (var x_0 = 0; x_0 < tmp$_3; x_0++) {
            tmp[tmp$_4 = iOfTmp_0, iOfTmp_0 = tmp$_4 + 1 | 0, tmp$_4] = (ensureNotNull(this.mData_0)[iOfData.v] << cnt_0 & 128) !== 0 ? Global_getInstance().COLOR_BLACK : Global_getInstance().COLOR_WHITE;
            if ((cnt_0 = cnt_0 + 1 | 0, cnt_0) >= 8) {
              cnt_0 = 0;
              iOfData.v = iOfData.v + 1 | 0;
            }
          }
          if (cnt_0 !== 0) {
            cnt_0 = 0;
            iOfData.v = iOfData.v + 1 | 0;
          }
        }
        init$result = Bitmap$Companion_getInstance().createBitmap_34aymq$(tmp, this.width, this.height);
      }
      array[i] = init$result;
    }
    this.mBitmaps_0 = array;
  };
  ResImage.prototype.draw_tj1hu5$ = function (canvas, num, left, top) {
    if (num <= this.number) {
      canvas.drawBitmap_t8cslu$(ensureNotNull(this.mBitmaps_0)[num - 1 | 0], left, top);
    }
     else {
      if (this.number > 0) {
        canvas.drawBitmap_t8cslu$(ensureNotNull(this.mBitmaps_0)[0], left, top);
      }
       else {
        TextRender_getInstance().drawText_kkuqvh$(canvas, '\u70EB', left, top);
      }
    }
  };
  ResImage.prototype.getBitmap_za3lpa$ = function (index) {
    var tmp$;
    if (index >= this.number) {
      tmp$ = null;
    }
     else
      tmp$ = ensureNotNull(this.mBitmaps_0)[index].copy();
    return tmp$;
  };
  ResImage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResImage',
    interfaces: [ResBase]
  };
  function ResMap() {
    ResMap$Companion_getInstance();
    ResBase.call(this);
    this.mTilIndex_0 = 0;
    this.mapName_e64bwv$_0 = null;
    this.mapWidth_8pedri$_0 = 0;
    this.mapHeight_5cshsl$_0 = 0;
    this.mData_0 = null;
    this.mTiles_0 = null;
  }
  Object.defineProperty(ResMap.prototype, 'mapName', {
    get: function () {
      return this.mapName_e64bwv$_0;
    },
    set: function (mapName) {
      this.mapName_e64bwv$_0 = mapName;
    }
  });
  Object.defineProperty(ResMap.prototype, 'mapWidth', {
    get: function () {
      return this.mapWidth_8pedri$_0;
    },
    set: function (mapWidth) {
      this.mapWidth_8pedri$_0 = mapWidth;
    }
  });
  Object.defineProperty(ResMap.prototype, 'mapHeight', {
    get: function () {
      return this.mapHeight_5cshsl$_0;
    },
    set: function (mapHeight) {
      this.mapHeight_5cshsl$_0 = mapHeight;
    }
  });
  ResMap.prototype.setData_ir89t6$ = function (buf, offset) {
    this.type = buf[offset] & 255;
    this.index = buf[offset + 1 | 0] & 255;
    this.mTilIndex_0 = buf[offset + 2 | 0];
    var i = 0;
    while (buf[offset + 3 + i | 0] !== 0)
      i = i + 1 | 0;
    this.mapName = gbkString(buf, offset + 3 | 0, i);
    this.mapWidth = buf[offset + 16 | 0];
    this.mapHeight = buf[offset + 17 | 0];
    var len = Kotlin.imul(this.mapWidth, this.mapHeight) * 2 | 0;
    this.mData_0 = new Int8Array(len);
    System_getInstance().arraycopy_nlwz52$(buf, offset + 18 | 0, ensureNotNull(this.mData_0), 0, len);
  };
  ResMap.prototype.canWalk_vux9f0$ = function (x, y) {
    if (x < 0 || x >= this.mapWidth || y < 0 || y >= this.mapHeight) {
      return false;
    }
    var i = Kotlin.imul(y, this.mapWidth) + x | 0;
    return (ensureNotNull(this.mData_0)[i * 2 | 0] & 128) !== 0;
  };
  ResMap.prototype.canPlayerWalk_vux9f0$ = function (x, y) {
    return this.canWalk_vux9f0$(x, y) && x >= 4 && x < (this.mapWidth - 4 | 0) && y >= 3 && y < (this.mapHeight - 2 | 0);
  };
  ResMap.prototype.getEventNum_vux9f0$ = function (x, y) {
    if (x < 0 || x >= this.mapWidth || y < 0 || y >= this.mapHeight) {
      return -1;
    }
    var i = Kotlin.imul(y, this.mapWidth) + x | 0;
    return ensureNotNull(this.mData_0)[(i * 2 | 0) + 1 | 0] & 255;
  };
  ResMap.prototype.getTileIndex_0 = function (x, y) {
    var i = Kotlin.imul(y, this.mapWidth) + x | 0;
    return ensureNotNull(this.mData_0)[i * 2 | 0] & 127;
  };
  ResMap.prototype.drawMap_2g4tob$ = function (canvas, left, top) {
    if (this.mTiles_0 == null) {
      this.mTiles_0 = new Tiles(this.mTilIndex_0);
    }
    var a = ResMap$Companion_getInstance().HEIGHT;
    var b = this.mapHeight - top | 0;
    var minY = Math_0.min(a, b);
    var a_0 = ResMap$Companion_getInstance().WIDTH;
    var b_0 = this.mapWidth - left | 0;
    var minX = Math_0.min(a_0, b_0);
    for (var y = 0; y < minY; y++) {
      for (var x = 0; x < minX; x++) {
        ensureNotNull(this.mTiles_0).draw_tj1hu5$(canvas, Kotlin.imul(x, Tiles$Companion_getInstance().WIDTH) + Global_getInstance().MAP_LEFT_OFFSET | 0, Kotlin.imul(y, Tiles$Companion_getInstance().HEIGHT), this.getTileIndex_0(left + x | 0, top + y | 0));
      }
    }
  };
  ResMap.prototype.drawWholeMap_2g4tob$ = function (canvas, x, y) {
    var tmp$, tmp$_0;
    if (this.mTiles_0 == null) {
      this.mTiles_0 = new Tiles(this.mTilIndex_0);
    }
    tmp$ = this.mapHeight;
    for (var ty = 0; ty < tmp$; ty++) {
      tmp$_0 = this.mapWidth;
      for (var tx = 0; tx < tmp$_0; tx++) {
        var sx = Kotlin.imul(tx, Tiles$Companion_getInstance().WIDTH) + x | 0;
        var sy = Kotlin.imul(ty, Tiles$Companion_getInstance().HEIGHT) + y | 0;
        ensureNotNull(this.mTiles_0).draw_tj1hu5$(canvas, sx, sy, this.getTileIndex_0(tx, ty));
        var event = this.getEventNum_vux9f0$(tx, ty);
        if (event !== 0) {
          Global_getInstance().bgColor = Color$Companion_getInstance().RED;
          TextRender_getInstance().drawText_kkuqvh$(canvas, event.toString(), sx, sy);
          Global_getInstance().bgColor = Global_getInstance().COLOR_WHITE;
        }
      }
    }
  };
  function ResMap$Companion() {
    ResMap$Companion_instance = this;
    this.WIDTH = 9;
    this.HEIGHT = 6;
  }
  ResMap$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ResMap$Companion_instance = null;
  function ResMap$Companion_getInstance() {
    if (ResMap$Companion_instance === null) {
      new ResMap$Companion();
    }
    return ResMap$Companion_instance;
  }
  ResMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResMap',
    interfaces: [ResBase]
  };
  function ResSrs() {
    ResBase.call(this);
    this.mFrameNum_0 = 0;
    this.mImageNum_0 = 0;
    this.mStartFrame_0 = 0;
    this.mEndFrame_0 = 0;
    this.mFrameHeader_0 = null;
    this.mImage_0 = null;
    this.ITERATOR_0 = 1;
    this.mShowList_0 = ArrayList_init();
  }
  ResSrs.prototype.setData_ir89t6$ = function (buf, offset) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9;
    this.type = buf[offset];
    this.index = buf[offset + 1 | 0] & 255;
    this.mFrameNum_0 = buf[offset + 2 | 0] & 255;
    this.mImageNum_0 = buf[offset + 3 | 0] & 255;
    this.mStartFrame_0 = buf[offset + 4 | 0] & 255;
    this.mEndFrame_0 = buf[offset + 5 | 0] & 255;
    var ptr = {v: offset + 6 | 0};
    var array = Array_0(this.mFrameNum_0);
    var tmp$_10;
    tmp$_10 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_10; i++) {
      array[i] = new Int32Array(5);
    }
    this.mFrameHeader_0 = array;
    tmp$ = this.mFrameNum_0;
    for (var i_0 = 0; i_0 < tmp$; i_0++) {
      tmp$_1 = (tmp$_0 = ptr.v, ptr.v = tmp$_0 + 1 | 0, tmp$_0);
      ensureNotNull(this.mFrameHeader_0)[i_0][0] = buf[tmp$_1] & 255;
      tmp$_3 = (tmp$_2 = ptr.v, ptr.v = tmp$_2 + 1 | 0, tmp$_2);
      ensureNotNull(this.mFrameHeader_0)[i_0][1] = buf[tmp$_3] & 255;
      tmp$_5 = (tmp$_4 = ptr.v, ptr.v = tmp$_4 + 1 | 0, tmp$_4);
      ensureNotNull(this.mFrameHeader_0)[i_0][2] = buf[tmp$_5] & 255;
      tmp$_7 = (tmp$_6 = ptr.v, ptr.v = tmp$_6 + 1 | 0, tmp$_6);
      ensureNotNull(this.mFrameHeader_0)[i_0][3] = buf[tmp$_7] & 255;
      tmp$_9 = (tmp$_8 = ptr.v, ptr.v = tmp$_8 + 1 | 0, tmp$_8);
      ensureNotNull(this.mFrameHeader_0)[i_0][4] = buf[tmp$_9] & 255;
    }
    var array_0 = Array_0(this.mImageNum_0);
    var tmp$_11;
    tmp$_11 = array_0.length - 1 | 0;
    for (var i_1 = 0; i_1 <= tmp$_11; i_1++) {
      var img = new ResImage();
      img.setData_ir89t6$(buf, ptr.v);
      ptr.v = ptr.v + img.bytesCount | 0;
      array_0[i_1] = img;
    }
    this.mImage_0 = array_0;
  };
  function ResSrs$Key($outer, index) {
    this.$outer = $outer;
    this.index_8be2vx$ = index;
    this.show_8be2vx$ = 0;
    this.nshow_8be2vx$ = 0;
    this.show_8be2vx$ = ensureNotNull(this.$outer.mFrameHeader_0)[this.index_8be2vx$][2];
    this.nshow_8be2vx$ = ensureNotNull(this.$outer.mFrameHeader_0)[this.index_8be2vx$][3];
  }
  ResSrs$Key.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Key',
    interfaces: []
  };
  ResSrs.prototype.start = function () {
    if (this.mFrameNum_0 === 0)
      return;
    this.mShowList_0.clear();
    this.mShowList_0.add_11rb$(new ResSrs$Key(this, 0));
  };
  ResSrs.prototype.update_s8cxhz$ = function (delta) {
    var tmp$;
    if (this.mFrameNum_0 === 0)
      return false;
    tmp$ = this.ITERATOR_0;
    for (var j = 0; j < tmp$; j++) {
      var iter = this.mShowList_0.listIterator();
      while (iter.hasNext()) {
        var i = iter.next();
        i.show_8be2vx$ = i.show_8be2vx$ - 1 | 0;
        i.nshow_8be2vx$ = i.nshow_8be2vx$ - 1 | 0;
        if (i.nshow_8be2vx$ === 0 && (i.index_8be2vx$ + 1 | 0) < this.mFrameNum_0) {
          iter.add_11rb$(new ResSrs$Key(this, i.index_8be2vx$ + 1 | 0));
        }
      }
      iter = this.mShowList_0.listIterator();
      while (iter.hasNext()) {
        var i_0 = iter.next();
        if (i_0.show_8be2vx$ <= 0) {
          iter.remove();
        }
      }
      if (this.mShowList_0.isEmpty())
        return false;
    }
    return true;
  };
  ResSrs.prototype.draw_2g4tob$ = function (canvas, dx, dy) {
    var tmp$;
    tmp$ = this.mShowList_0.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      ensureNotNull(this.mImage_0)[ensureNotNull(this.mFrameHeader_0)[i.index_8be2vx$][4]].draw_tj1hu5$(canvas, 1, ensureNotNull(this.mFrameHeader_0)[i.index_8be2vx$][0] + dx | 0, ensureNotNull(this.mFrameHeader_0)[i.index_8be2vx$][1] + dy | 0);
    }
  };
  ResSrs.prototype.drawAbsolutely_2g4tob$ = function (canvas, x, y) {
    var tmp$;
    tmp$ = this.mShowList_0.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      ensureNotNull(this.mImage_0)[ensureNotNull(this.mFrameHeader_0)[i.index_8be2vx$][4]].draw_tj1hu5$(canvas, 1, ensureNotNull(this.mFrameHeader_0)[i.index_8be2vx$][0] - ensureNotNull(this.mFrameHeader_0)[0][0] + x | 0, ensureNotNull(this.mFrameHeader_0)[i.index_8be2vx$][1] - ensureNotNull(this.mFrameHeader_0)[0][1] + y | 0);
    }
  };
  ResSrs.prototype.setIteratorNum_za3lpa$ = function (n) {
    this.ITERATOR_0 = n;
    if (this.ITERATOR_0 < 1) {
      this.ITERATOR_0 = 1;
    }
  };
  ResSrs.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResSrs',
    interfaces: [ResBase]
  };
  function BaseMagic() {
    ResBase.call(this);
    this.roundNum_kflf2c$_0 = 0;
    this.isForAll_alczq$_0 = false;
    this.costMp_a1afck$_0 = 0;
    this.magicAni_fbh3sj$_0 = null;
    this.magicName_miz96o$_0 = '';
    this.magicDescription_3948lv$_0 = '';
  }
  Object.defineProperty(BaseMagic.prototype, 'roundNum', {
    get: function () {
      return this.roundNum_kflf2c$_0;
    },
    set: function (roundNum) {
      this.roundNum_kflf2c$_0 = roundNum;
    }
  });
  Object.defineProperty(BaseMagic.prototype, 'isForAll', {
    get: function () {
      return this.isForAll_alczq$_0;
    },
    set: function (isForAll) {
      this.isForAll_alczq$_0 = isForAll;
    }
  });
  Object.defineProperty(BaseMagic.prototype, 'costMp', {
    get: function () {
      return this.costMp_a1afck$_0;
    },
    set: function (costMp) {
      this.costMp_a1afck$_0 = costMp;
    }
  });
  Object.defineProperty(BaseMagic.prototype, 'magicAni', {
    get: function () {
      return this.magicAni_fbh3sj$_0;
    },
    set: function (magicAni) {
      this.magicAni_fbh3sj$_0 = magicAni;
    }
  });
  Object.defineProperty(BaseMagic.prototype, 'magicName', {
    get: function () {
      return this.magicName_miz96o$_0;
    },
    set: function (magicName) {
      this.magicName_miz96o$_0 = magicName;
    }
  });
  Object.defineProperty(BaseMagic.prototype, 'magicDescription', {
    get: function () {
      return this.magicDescription_3948lv$_0;
    },
    set: function (magicDescription) {
      this.magicDescription_3948lv$_0 = magicDescription;
    }
  });
  BaseMagic.prototype.setData_ir89t6$ = function (buf, offset) {
    var tmp$;
    this.type = buf[offset] & 255;
    this.index = buf[offset + 1 | 0] & 255;
    this.roundNum = buf[offset + 3 | 0] & 127;
    this.isForAll = (buf[offset + 3 | 0] & 128) !== 0;
    this.costMp = buf[offset + 4 | 0];
    this.magicAni = Kotlin.isType(tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$SRS_getInstance(), 2, buf[offset + 5 | 0] & 255), ResSrs) ? tmp$ : throwCCE();
    this.magicName = ResBase$Companion_getInstance().getString_ir89t6$(buf, offset + 6 | 0);
    if ((buf[offset + 2 | 0] & 255) > 112) {
      buf[offset + 112 | 0] = 0;
    }
    this.magicDescription = ResBase$Companion_getInstance().getString_ir89t6$(buf, offset + 26 | 0);
    this.setOtherData_ir89t6$(buf, offset);
  };
  BaseMagic.prototype.use_qwqr58$ = function (src, dst) {
  };
  BaseMagic.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseMagic',
    interfaces: [ResBase]
  };
  function MagicAttack() {
    BaseMagic.call(this);
    this.mHp_0 = 0;
    this.mMp_0 = 0;
    this.mDf_0 = 0;
    this.mAt_0 = 0;
    this.mBuff_0 = 0;
    this.mSu_0 = 0;
  }
  Object.defineProperty(MagicAttack.prototype, 'buff_0', {
    get: function () {
      var atbuff = BuffMan$Companion_getInstance().fromInt_za3lpa$(this.mBuff_0);
      atbuff.buffs[FightingCharacter$Companion_getInstance().maskToIndex_za3lpa$(FightingCharacter$Companion_getInstance().BUFF_MASK_FANG)].value = this.mDf_0;
      atbuff.buffs[FightingCharacter$Companion_getInstance().maskToIndex_za3lpa$(FightingCharacter$Companion_getInstance().BUFF_MASK_GONG)].value = this.mAt_0;
      atbuff.buffs[FightingCharacter$Companion_getInstance().maskToIndex_za3lpa$(FightingCharacter$Companion_getInstance().BUFF_MASK_SU)].value = this.mSu_0;
      return atbuff;
    }
  });
  MagicAttack.prototype.setOtherData_ir89t6$ = function (buf, offset) {
    this.mHp_0 = ResBase$Companion_getInstance().get2BytesSInt_ir89t6$(buf, offset + 18 | 0);
    this.mMp_0 = ResBase$Companion_getInstance().get2BytesSInt_ir89t6$(buf, offset + 20 | 0);
    this.mDf_0 = buf[offset + 22 | 0] & 255;
    this.mAt_0 = buf[offset + 23 | 0] & 255;
    this.mBuff_0 = buf[offset + 24 | 0] & 255;
    this.mSu_0 = buf[offset + 25 | 0] & 255;
  };
  MagicAttack.prototype.calcHurt_0 = function (src, dst, hp) {
    var tmp$, tmp$_0;
    if (hp > 0) {
      var add = (src.lingli - dst.lingli | 0) / 100;
      var a = hp + numberToInt(hp * add) | 0;
      tmp$_0 = Math_0.max(a, 0);
    }
     else {
      if (dst.level <= 8)
        tmp$ = 1;
      else if (dst.level <= 16)
        tmp$ = 2;
      else
        tmp$ = 3;
      var rate = tmp$;
      tmp$_0 = Kotlin.imul(hp, rate);
    }
    return tmp$_0;
  };
  MagicAttack.prototype.use_qwqr58$ = function (src, dst) {
    if (SaveLoadGame_getInstance().allowMiss) {
      if (CalcDamage_getInstance().randomMiss_qwqr58$(src, dst)) {
        dst.missed = true;
        return;
      }
    }
    src.mp = src.mp - this.costMp | 0;
    var hpHurt = this.calcHurt_0(src, dst, this.mHp_0);
    dst.hp = dst.hp - abs(hpHurt) | 0;
    if (hpHurt < 0) {
      src.hp = src.hp - hpHurt | 0;
    }
    var mpHurt = this.calcHurt_0(src, dst, this.mMp_0);
    dst.mp = dst.mp - abs(mpHurt) | 0;
    if (mpHurt < 0) {
      src.mp = src.mp - mpHurt | 0;
    }
    dst.beAttackedWithBuff_ila1b3$(this.buff_0);
  };
  MagicAttack.prototype.use_h32lzv$ = function (src, dst) {
    var tmp$;
    src.mp = src.mp - this.costMp | 0;
    var buff = this.buff_0;
    tmp$ = dst.iterator();
    while (tmp$.hasNext()) {
      var fc = tmp$.next();
      if (SaveLoadGame_getInstance().allowMiss) {
        if (CalcDamage_getInstance().randomMiss_qwqr58$(src, fc)) {
          fc.missed = true;
          continue;
        }
      }
      fc.hp = fc.hp - this.calcHurt_0(src, fc, this.mHp_0) | 0;
      fc.beAttackedWithBuff_ila1b3$(buff);
    }
  };
  MagicAttack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MagicAttack',
    interfaces: [BaseMagic]
  };
  function MagicAuxiliary() {
    BaseMagic.call(this);
    this.mHp_0 = 0;
  }
  MagicAuxiliary.prototype.setOtherData_ir89t6$ = function (buf, offset) {
    this.mHp_0 = ResBase$Companion_getInstance().get2BytesInt_ir89t6$(buf, offset + 18 | 0);
  };
  MagicAuxiliary.prototype.use_qwqr58$ = function (src, dst) {
    var a = dst.maxHP;
    var b = dst.hp + (Kotlin.imul(dst.maxMP, this.mHp_0) / 100 | 0) | 0;
    dst.hp = Math_0.min(a, b);
  };
  MagicAuxiliary.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MagicAuxiliary',
    interfaces: [BaseMagic]
  };
  function MagicEnhance() {
    BaseMagic.call(this);
    this.buff_0 = new BuffMan();
  }
  MagicEnhance.prototype.setOtherData_ir89t6$ = function (buf, offset) {
    var at = first(this.buff_0.getBuffs_za3lpa$(FightingCharacter$Companion_getInstance().BUFF_MASK_GONG));
    var df = first(this.buff_0.getBuffs_za3lpa$(FightingCharacter$Companion_getInstance().BUFF_MASK_FANG));
    var v = first(this.buff_0.getBuffs_za3lpa$(FightingCharacter$Companion_getInstance().BUFF_MASK_SU));
    at.value = -(buf[offset + 23 | 0] & 255) | 0;
    df.value = -(buf[offset + 22 | 0] & 255) | 0;
    v.value = -(buf[offset + 25 | 0] & 255) | 0;
    var round = buf[offset + 24 | 0] >> 4 & 15;
    var $receiver = [at, df, v];
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      element.round = round;
    }
  };
  MagicEnhance.prototype.use_qwqr58$ = function (src, dst) {
    dst.beAttackedWithBuff_ila1b3$(this.buff_0, 0);
  };
  MagicEnhance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MagicEnhance',
    interfaces: [BaseMagic]
  };
  function MagicRestore() {
    BaseMagic.call(this);
    this.mHp_0 = 0;
    this.mBuff_0 = 0;
  }
  MagicRestore.prototype.setOtherData_ir89t6$ = function (buf, offset) {
    this.mHp_0 = ResBase$Companion_getInstance().get2BytesInt_ir89t6$(buf, offset + 18 | 0);
    this.mBuff_0 = buf[offset + 24 | 0];
  };
  MagicRestore.prototype.use_qwqr58$ = function (src, dst) {
    if (src.mp < this.costMp)
      return;
    src.mp = src.mp - this.costMp | 0;
    dst.hp = dst.hp + this.mHp_0 | 0;
    if (dst.hp > dst.maxHP) {
      dst.hp = dst.maxHP;
    }
    health(this.mBuff_0, dst.debuff);
  };
  MagicRestore.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MagicRestore',
    interfaces: [BaseMagic]
  };
  function MagicSpecial() {
    BaseMagic.call(this);
  }
  MagicSpecial.prototype.setOtherData_ir89t6$ = function (buf, offset) {
  };
  MagicSpecial.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MagicSpecial',
    interfaces: [BaseMagic]
  };
  function ResMagicChain() {
    ResBase.call(this);
    this.magicSum_0 = 0;
    this.mMagics_0 = emptyList();
    this.learnNum = 0;
  }
  ResMagicChain.prototype.setData_ir89t6$ = function (buf, offset) {
    this.type = buf[offset] & 255;
    this.index = buf[offset + 1 | 0] & 255;
    this.magicSum_0 = buf[offset + 2 | 0] & 255;
    var index = {v: offset + 3 | 0};
    var size = this.magicSum_0;
    var list = ArrayList_init_0(size);
    for (var index_0 = 0; index_0 < size; index_0++) {
      var tmp$, tmp$_0, tmp$_1;
      list.add_11rb$(Kotlin.isType(tmp$_1 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$MRS_getInstance(), buf[tmp$ = index.v, index.v = tmp$ + 1 | 0, tmp$], buf[tmp$_0 = index.v, index.v = tmp$_0 + 1 | 0, tmp$_0]), BaseMagic) ? tmp$_1 : throwCCE());
    }
    this.mMagics_0 = list;
  };
  ResMagicChain.prototype.getMagic_za3lpa$ = function (index) {
    return this.mMagics_0.get_za3lpa$(index);
  };
  ResMagicChain.prototype.getAllLearntMagics = function () {
    var tmp$ = this.mMagics_0;
    var a = this.learnNum;
    var b = this.magicSum_0;
    return slice(tmp$, until(0, Math_0.min(a, b)));
  };
  ResMagicChain.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResMagicChain',
    interfaces: [ResBase]
  };
  function ScreenMagic(parent, magics, mp, mOnItemSelectedListener) {
    ScreenMagic$Companion_getInstance();
    this.parent_30f5dj$_0 = parent;
    this.mp_0 = mp;
    this.mOnItemSelectedListener_0 = mOnItemSelectedListener;
    this.magics_0 = copyToArray(magics);
    this.mFirstItemIndex_0 = 0;
    this.mCurItemIndex_0 = 0;
    this.mBmpCursor_0 = Bitmap$Companion_getInstance().createBitmap_vux9f0$(12, 11);
    this.mBmpMarker_0 = Bitmap$Companion_getInstance().createBitmap_vux9f0$(5, 8);
    this.mBmpMarker2_0 = Bitmap$Companion_getInstance().createBitmap_vux9f0$(5, 8);
    this.mRectTop_0 = new Rect(10, 4, 147, 39);
    this.mRectBtm_0 = new Rect(10, 41, 147, 76);
    this.mRectDsp_0 = new Rect(11, 42, 146, 75);
    this.mTextPos_0 = new Point(10, 77);
    this.mFramePaint_0 = new Paint();
    this.description_0 = new ScreenMagic$PageText(this.magics_0[this.mCurItemIndex_0].magicDescription, this.mRectDsp_0);
    this.mFramePaint_0.color = Global_getInstance().COLOR_BLACK;
    this.mFramePaint_0.style = Paint$Style$STROKE_getInstance();
    this.mFramePaint_0.strokeWidth = 1;
    this.createBmp_0();
  }
  Object.defineProperty(ScreenMagic.prototype, 'parent', {
    get: function () {
      return this.parent_30f5dj$_0;
    }
  });
  function ScreenMagic$PageText(text, rect) {
    this.text = text;
    this.rect = rect;
    this.totalHeight_0 = TextRender_getInstance().textHeightForWitdh_bm4lxs$(this.text, this.rect.width());
    this.top_0 = 0;
  }
  ScreenMagic$PageText.prototype.draw_9in0vv$ = function (canvas) {
    TextRender_getInstance().drawText_3oojmu$(canvas, this.text, this.rect, this.top_0 + this.rect.top | 0);
  };
  ScreenMagic$PageText.prototype.alignTop_za3lpa$ = function (t) {
    var rd = round(t / 16) * 16;
    return numberToInt(rd);
  };
  ScreenMagic$PageText.prototype.pageup = function () {
    var newTop = this.alignTop_za3lpa$(this.top_0 + this.rect.height() | 0);
    if (newTop <= 0) {
      this.top_0 = newTop;
    }
  };
  ScreenMagic$PageText.prototype.pagedown = function () {
    var newTop = this.alignTop_za3lpa$(this.top_0 - this.rect.height() | 0);
    if ((this.totalHeight_0 + newTop | 0) >= 16) {
      this.top_0 = newTop;
    }
  };
  ScreenMagic$PageText.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PageText',
    interfaces: []
  };
  function ScreenMagic$OnItemSelectedListener() {
  }
  ScreenMagic$OnItemSelectedListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'OnItemSelectedListener',
    interfaces: []
  };
  ScreenMagic.prototype.createBmp_0 = function () {
    var canvas = Canvas_init();
    var p = new Paint();
    p.color = Global_getInstance().COLOR_BLACK;
    p.strokeWidth = 1;
    p.style = Paint$Style$STROKE_getInstance();
    canvas.setBitmap_963ehe$(this.mBmpCursor_0);
    canvas.drawColor_we4i00$(Global_getInstance().COLOR_WHITE);
    canvas.drawLine_x3aj6j$(8, 0, 11, 0, p);
    canvas.drawLine_x3aj6j$(11, 1, 11, 4, p);
    canvas.drawRect_x3aj6j$(6, 1, 7, 4, p);
    canvas.drawRect_x3aj6j$(7, 4, 10, 5, p);
    canvas.drawLine_x3aj6j$(7, 4, 0, 11, p);
    canvas.drawLine_x3aj6j$(8, 5, 2, 11, p);
    canvas.setBitmap_963ehe$(this.mBmpMarker_0);
    canvas.drawColor_we4i00$(Global_getInstance().COLOR_WHITE);
    var pts = new Float32Array([2.0, 0.0, 4.0, 2.0, 4.0, 2.0, 4.0, 6.0, 4.0, 6.0, 2.0, 8.0, 2.0, 7.0, 0.0, 5.0, 0.0, 5.0, 0.0, 2.0, 0.0, 3.0, 3.0, 0.0, 2.0, 3.0, 2.0, 5.0]);
    canvas.drawLines_ffeagz$(pts, p);
    canvas.setBitmap_963ehe$(this.mBmpMarker2_0);
    canvas.drawColor_we4i00$(Global_getInstance().COLOR_WHITE);
    canvas.drawLines_ffeagz$(pts, p);
    var pts2 = new Float32Array([1.0, 1.0, 1.0, 6.0, 2.0, 0.0, 2.0, 8.0, 3.0, 2.0, 3.0, 6.0]);
    canvas.drawLines_ffeagz$(pts2, p);
  };
  ScreenMagic.prototype.update_s8cxhz$ = function (delta) {
  };
  ScreenMagic.prototype.draw_9in0vv$ = function (canvas) {
    canvas.drawColor_we4i00$(Global_getInstance().COLOR_WHITE);
    var hlMagic = this.magics_0[this.mFirstItemIndex_0];
    TextRender_getInstance().drawText_kkuqvh$(canvas, hlMagic.magicName, this.mRectTop_0.left + 1 | 0, this.mRectTop_0.top + 1 | 0);
    if ((this.mFirstItemIndex_0 + 1 | 0) < this.magics_0.length) {
      TextRender_getInstance().drawText_kkuqvh$(canvas, this.magics_0[this.mFirstItemIndex_0 + 1 | 0].magicName, this.mRectTop_0.left + 1 | 0, this.mRectTop_0.top + 1 + 16 | 0);
    }
    this.description_0.draw_9in0vv$(canvas);
    TextRender_getInstance().drawText_kkuqvh$(canvas, '\u8017\u771F\u6C14:' + toString(hlMagic.costMp), this.mTextPos_0.x, this.mTextPos_0.y);
    canvas.drawBitmap_t8cslu$(this.mBmpCursor_0, 100, this.mFirstItemIndex_0 === this.mCurItemIndex_0 ? 10 : 26);
    canvas.drawBitmap_t8cslu$(this.mFirstItemIndex_0 === 0 ? this.mBmpMarker_0 : this.mBmpMarker2_0, 135, 6);
    canvas.drawBitmap_t8cslu$(this.mBmpMarker_0, 135, 14);
    canvas.drawBitmap_t8cslu$(this.mBmpMarker_0, 135, 22);
    canvas.drawBitmap_t8cslu$((this.mFirstItemIndex_0 + 2 | 0) < this.magics_0.length ? this.mBmpMarker2_0 : this.mBmpMarker_0, 135, 30);
    canvas.drawRect_ed5hcw$(this.mRectTop_0, this.mFramePaint_0);
    canvas.drawRect_ed5hcw$(this.mRectBtm_0, this.mFramePaint_0);
  };
  ScreenMagic.prototype.onKeyDown_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_UP && this.mCurItemIndex_0 > 0) {
      this.mCurItemIndex_0 = this.mCurItemIndex_0 - 1 | 0;
      if (this.mCurItemIndex_0 < this.mFirstItemIndex_0) {
        this.mFirstItemIndex_0 = this.mFirstItemIndex_0 - 1 | 0;
      }
      this.description_0 = new ScreenMagic$PageText(this.magics_0[this.mCurItemIndex_0].magicDescription, this.mRectDsp_0);
    }
     else if (key === Global_getInstance().KEY_DOWN && (this.mCurItemIndex_0 + 1 | 0) < this.magics_0.length) {
      this.mCurItemIndex_0 = this.mCurItemIndex_0 + 1 | 0;
      if (this.mCurItemIndex_0 >= (this.mFirstItemIndex_0 + ScreenMagic$Companion_getInstance().ITEM_NUM_0 | 0)) {
        this.mFirstItemIndex_0 = this.mFirstItemIndex_0 + 1 | 0;
      }
      this.description_0 = new ScreenMagic$PageText(this.magics_0[this.mCurItemIndex_0].magicDescription, this.mRectDsp_0);
    }
     else if (key === Global_getInstance().KEY_PAGEDOWN) {
      this.description_0.pagedown();
    }
     else if (key === Global_getInstance().KEY_PAGEUP) {
      this.description_0.pageup();
    }
  };
  ScreenMagic.prototype.onKeyUp_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_ENTER) {
      if (this.mp_0 < this.magics_0[this.mCurItemIndex_0].costMp) {
        this.showMessage_61zpoe$('\u771F\u6C14\u4E0D\u8DB3');
      }
       else {
        this.mOnItemSelectedListener_0.onItemSelected_3fncnk$(this.magics_0[this.mCurItemIndex_0]);
      }
    }
     else if (key === Global_getInstance().KEY_CANCEL) {
      this.popScreen();
    }
  };
  function ScreenMagic$Companion() {
    ScreenMagic$Companion_instance = this;
    this.ITEM_NUM_0 = 2;
  }
  ScreenMagic$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ScreenMagic$Companion_instance = null;
  function ScreenMagic$Companion_getInstance() {
    if (ScreenMagic$Companion_instance === null) {
      new ScreenMagic$Companion();
    }
    return ScreenMagic$Companion_instance;
  }
  ScreenMagic.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScreenMagic',
    interfaces: [BaseScreen]
  };
  function SaveLoadGame() {
    SaveLoadGame_instance = this;
    this.magicNum = 1735614838;
    this.version = 4;
    this.startNewGame = true;
    this.MapType = 1;
    this.MapIndex = 1;
    this.MapScreenX = 1;
    this.MapScreenY = 1;
    this.ScriptType = 1;
    this.ScriptIndex = 1;
    this.SceneName = '';
    this.NpcObjs = [];
    this.scriptProcess = null;
    this.playerDb = ArrayList_init();
    this.allowTossArm = true;
    this.allowMiss = false;
  }
  function SaveLoadGame$loadPlayers$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$SaveLoadGame$loadPlayers$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$SaveLoadGame$loadPlayers$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$SaveLoadGame$loadPlayers$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SaveLoadGame$loadPlayers$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SaveLoadGame$loadPlayers$lambda.prototype.constructor = Coroutine$SaveLoadGame$loadPlayers$lambda;
  Coroutine$SaveLoadGame$loadPlayers$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = (new IntRange(0, 25)).iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            var element = this.local$tmp$.next();
            var tmp$;
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.yield_11rb$((tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$ARS_getInstance(), 1, element, true)) == null || Kotlin.isType(tmp$, Player) ? tmp$ : throwCCE(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
            return Unit;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  SaveLoadGame.prototype.loadPlayers = function () {
    this.playerDb = toMutableList_1(filterNotNull_0(buildSequence(SaveLoadGame$loadPlayers$lambda)));
  };
  SaveLoadGame.prototype.getPlayerByIndex_za3lpa$ = function (index) {
    var tmp$;
    tmp$ = this.playerDb.iterator();
    while (tmp$.hasNext()) {
      var p = tmp$.next();
      if (p.index === index)
        return p;
    }
    return null;
  };
  function SaveLoadGame$write$lambda(io, obj) {
    if (obj.isEmpty) {
      io.writeByte_s8j3t7$(0);
    }
     else {
      if (Kotlin.isType(obj, SceneObj)) {
        io.writeByte_s8j3t7$(2);
      }
       else {
        io.writeByte_s8j3t7$(1);
      }
      obj.encode_vcd9jg$(io);
    }
    return Unit;
  }
  SaveLoadGame.prototype.write_bvlcvx$ = function (game, out) {
    var tmp$;
    out.writeString_61zpoe$(this.SceneName);
    var actorNum = game.playerList.size;
    out.writeInt_za3lpa$(actorNum);
    for (var i = 0; i < actorNum; i++) {
      out.writeInt_za3lpa$(game.playerList.get_za3lpa$(i).index);
    }
    out.writeInt_za3lpa$(1735614838);
    out.writeInt_za3lpa$(4);
    out.writeInt_za3lpa$(this.MapType);
    out.writeInt_za3lpa$(this.MapIndex);
    out.writeInt_za3lpa$(this.MapScreenX);
    out.writeInt_za3lpa$(this.MapScreenY);
    out.writeInt_za3lpa$(this.ScriptType);
    out.writeInt_za3lpa$(this.ScriptIndex);
    out.writeBoolean_6taknv$(this.allowMiss);
    out.writeBoolean_6taknv$(this.allowTossArm);
    game.mainScene.scriptProcess.encode_vcd9jg$(out);
    out.writeInt_za3lpa$(this.playerDb.size);
    tmp$ = this.playerDb.size;
    for (var i_0 = 0; i_0 < tmp$; i_0++) {
      this.playerDb.get_za3lpa$(i_0).encode_vcd9jg$(out);
    }
    out.writeInt_za3lpa$(Player$Companion_getInstance().sMoney);
    Player$Companion_getInstance().sGoodsList.write_vcd9jg$(out);
    writeArray(out, this.NpcObjs, SaveLoadGame$write$lambda);
    Combat$Companion_getInstance().write_vcd9jg$(out);
  };
  function SaveLoadGame$read$lambda(closure$actorNum_0, closure$coder_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$SaveLoadGame$read$lambda(closure$actorNum_0, closure$coder_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$SaveLoadGame$read$lambda(closure$actorNum_0, closure$coder_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$actorNum = closure$actorNum_0;
    this.local$closure$coder = closure$coder_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$SaveLoadGame$read$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SaveLoadGame$read$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SaveLoadGame$read$lambda.prototype.constructor = Coroutine$SaveLoadGame$read$lambda;
  Coroutine$SaveLoadGame$read$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if ((tmp$ = this.local$closure$actorNum.v, this.local$closure$actorNum.v = tmp$ - 1 | 0, tmp$) <= 0) {
              this.state_0 = 4;
              continue;
            }

            this.state_0 = 3;
            this.result_0 = this.local$$receiver.yield_11rb$(this.local$closure$coder.readInt(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
            return Unit;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  SaveLoadGame.prototype.read_r7hctu$ = function (game, coder) {
    var tmp$, tmp$_0, tmp$_1;
    this.SceneName = coder.readString();
    var actorNum = {v: coder.readInt()};
    var playerIds = toList(buildSequence(SaveLoadGame$read$lambda(actorNum, coder)));
    var m = coder.readInt();
    if (m === 1735614838) {
      tmp$ = 0;
    }
     else {
      tmp$ = coder.readInt();
    }
    var version = tmp$;
    if (version < 4) {
      game.showMessage_61zpoe$('\u4E0D\u517C\u5BB9\u7684\u5B58\u6863\u7248\u672C');
      return false;
    }
    coder.version = version;
    if (version === 0) {
      tmp$_0 = m;
    }
     else {
      tmp$_0 = coder.readInt();
    }
    this.MapType = tmp$_0;
    this.MapIndex = coder.readInt();
    this.MapScreenX = coder.readInt();
    this.MapScreenY = coder.readInt();
    this.ScriptType = coder.readInt();
    this.ScriptIndex = coder.readInt();
    if (version >= 2) {
      this.allowMiss = coder.readBoolean();
      this.allowTossArm = coder.readBoolean();
    }
     else {
      this.allowMiss = false;
      this.allowTossArm = true;
    }
    this.scriptProcess = game.vm.loadScript_vux9f0$(SaveLoadGame_getInstance().ScriptType, SaveLoadGame_getInstance().ScriptIndex);
    (tmp$_1 = this.scriptProcess) != null ? (tmp$_1.decode_setnfj$(coder), Unit) : null;
    var size = coder.readInt();
    this.playerDb.clear();
    for (var i = 0; i < size; i++) {
      var p = new Player();
      p.decode_setnfj$(coder);
      this.playerDb.add_11rb$(p);
    }
    game.playerList.clear();
    var tmp$_2 = game.playerList;
    var destination = ArrayList_init_0(collectionSizeOrDefault(playerIds, 10));
    var tmp$_3;
    tmp$_3 = playerIds.iterator();
    while (tmp$_3.hasNext()) {
      var item = tmp$_3.next();
      destination.add_11rb$(this.getPlayerByIndex_za3lpa$(item));
    }
    tmp$_2.addAll_brywnq$(filterNotNull_1(destination));
    Player$Companion_getInstance().sMoney = coder.readInt();
    Player$Companion_getInstance().sGoodsList.read_setnfj$(coder);
    var len = coder.readInt();
    var array = Array_0(len);
    var tmp$_4;
    tmp$_4 = array.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_4; i_0++) {
      var tmp$_5;
      var type = coder.readByte();
      switch (type) {
        case 0:
        case 1:
          tmp$_5 = new NPC();
          break;
        case 2:
          tmp$_5 = new SceneObj();
          break;
        default:throw Error_init('Bad obj type');
      }
      var npc = tmp$_5;
      if (type !== 0) {
        npc.decode_setnfj$(coder);
      }
      array[i_0] = npc;
    }
    this.NpcObjs = array;
    Combat$Companion_getInstance().read_40ut0s$(game, coder);
    return true;
  };
  SaveLoadGame.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SaveLoadGame',
    interfaces: []
  };
  var SaveLoadGame_instance = null;
  function SaveLoadGame_getInstance() {
    if (SaveLoadGame_instance === null) {
      new SaveLoadGame();
    }
    return SaveLoadGame_instance;
  }
  function ScreenMainGame(parent, vm) {
    this.parent_3gdkhy$_0 = parent;
    this.vm_0 = vm;
    this.currentMap_say9n7$_0 = null;
    this.mMapScreenPos_0 = new Point();
    this.scriptProcess = null;
    this.sceneName_v90cur$_0 = '';
    var array = Array_0(41);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = NPC$Companion_getInstance().empty;
    }
    this.mNPCObj_0 = array;
    this.mCanWalk_0 = new ScreenMainGame$mCanWalk$ObjectLiteral(this);
    if (SaveLoadGame_getInstance().startNewGame) {
      Combat$Companion_getInstance().FightDisable();
      ScriptResources_getInstance().initGlobalVar();
      ScriptResources_getInstance().initGlobalEvents();
      SaveLoadGame_getInstance().NpcObjs = this.mNPCObj_0;
      SaveLoadGame_getInstance().loadPlayers();
      this.playerList.clear();
      Player$Companion_getInstance().sGoodsList.clear();
      Player$Companion_getInstance().sMoney = 0;
      this.scriptProcess = this.doStartChapter_0(1, 1);
      this.scriptProcess.start();
    }
     else {
      this.loadMap_tjonv8$(SaveLoadGame_getInstance().MapType, SaveLoadGame_getInstance().MapIndex, SaveLoadGame_getInstance().MapScreenX, SaveLoadGame_getInstance().MapScreenY);
      this.fixPlayerPosition();
      this.mNPCObj_0 = SaveLoadGame_getInstance().NpcObjs;
      var $receiver = this.mNPCObj_0;
      var destination = ArrayList_init();
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
        var element = $receiver[tmp$_0];
        if (!element.isEmpty)
          destination.add_11rb$(element);
      }
      var tmp$_1;
      tmp$_1 = destination.iterator();
      while (tmp$_1.hasNext()) {
        var element_0 = tmp$_1.next();
        element_0.setICanWalk_mkhjrq$(this.mCanWalk_0);
      }
      this.scriptProcess = ensureNotNull(SaveLoadGame_getInstance().scriptProcess);
      this.scriptProcess.goonExecute = true;
    }
  }
  Object.defineProperty(ScreenMainGame.prototype, 'parent', {
    get: function () {
      return this.parent_3gdkhy$_0;
    }
  });
  Object.defineProperty(ScreenMainGame.prototype, 'player', {
    get: function () {
      return firstOrNull(this.playerList);
    }
  });
  Object.defineProperty(ScreenMainGame.prototype, 'currentMap', {
    get: function () {
      return this.currentMap_say9n7$_0;
    },
    set: function (currentMap) {
      this.currentMap_say9n7$_0 = currentMap;
    }
  });
  Object.defineProperty(ScreenMainGame.prototype, 'sceneName', {
    get: function () {
      return this.sceneName_v90cur$_0;
    },
    set: function (name) {
      this.sceneName_v90cur$_0 = name;
      SaveLoadGame_getInstance().SceneName = name;
    }
  });
  function ScreenMainGame$get_ScreenMainGame$sortedNpcObjs$lambda(it) {
    return it.posInMap.y;
  }
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var compareByDescending$lambda_0 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(b), selector(a));
      };
    };
  });
  function Comparator$ObjectLiteral_0(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_0.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  Object.defineProperty(ScreenMainGame.prototype, 'sortedNpcObjs_0', {
    get: function () {
      var $receiver = this.mNPCObj_0;
      var destination = ArrayList_init();
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (!element.isEmpty)
          destination.add_11rb$(element);
      }
      return copyToArray(sortedWith(destination, new Comparator$ObjectLiteral_0(compareByDescending$lambda_0(ScreenMainGame$get_ScreenMainGame$sortedNpcObjs$lambda))));
    }
  });
  Object.defineProperty(ScreenMainGame.prototype, 'playerList', {
    get: function () {
      return this.game.playerList;
    }
  });
  ScreenMainGame.prototype.callChapter_vux9f0$ = function (type, index) {
    var process = this.vm_0.loadScript_vux9f0$(type, index);
    process.prev = this.scriptProcess;
    this.scriptProcess = process;
    process.start();
  };
  ScreenMainGame.prototype.exitScript = function () {
    while (this.scriptProcess.prev != null) {
      this.scriptProcess.stop();
      this.scriptProcess = ensureNotNull(this.scriptProcess.prev);
    }
    this.scriptProcess.stop();
  };
  ScreenMainGame.prototype.doStartChapter_0 = function (type, index) {
    var process = this.vm_0.loadScript_vux9f0$(type, index);
    for (var i = 1; i <= 40; i++) {
      this.mNPCObj_0[i] = NPC$Companion_getInstance().empty;
    }
    ScriptResources_getInstance().initLocalVar();
    SaveLoadGame_getInstance().ScriptType = type;
    SaveLoadGame_getInstance().ScriptIndex = index;
    return process;
  };
  ScreenMainGame.prototype.startChapter_vux9f0$ = function (type, index) {
    this.scriptProcess.stop();
    this.scriptProcess = this.doStartChapter_0(type, index);
    this.scriptProcess.start();
  };
  ScreenMainGame.prototype.update_s8cxhz$ = function (delta) {
    if (this.scriptProcess.running) {
      this.scriptProcess.process();
      this.scriptProcess.update_s8cxhz$(delta);
      this.scriptProcess.timerStep_s8cxhz$(delta);
    }
     else if (Combat$Companion_getInstance().IsActive()) {
      Combat$Companion_getInstance().Update_s8cxhz$(delta);
    }
     else {
      var $receiver = this.mNPCObj_0;
      var destination = ArrayList_init();
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (!element.isEmpty)
          destination.add_11rb$(element);
      }
      var tmp$_0;
      tmp$_0 = destination.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        element_0.update_s8cxhz$(delta);
      }
      this.scriptProcess.timerStep_s8cxhz$(delta);
    }
  };
  ScreenMainGame.prototype.draw_9in0vv$ = function (canvas) {
    if (this.scriptProcess.running) {
      if (Combat$Companion_getInstance().IsActive()) {
        Combat$Companion_getInstance().Draw_9in0vv$(canvas);
      }
      this.scriptProcess.draw_9in0vv$(canvas);
    }
     else if (Combat$Companion_getInstance().IsActive()) {
      Combat$Companion_getInstance().Draw_9in0vv$(canvas);
      return;
    }
     else {
      this.drawScene_9in0vv$(canvas);
    }
  };
  ScreenMainGame.prototype.drawScene_9in0vv$ = function (canvas) {
    var tmp$;
    if (this.currentMap != null) {
      ensureNotNull(this.currentMap).drawMap_2g4tob$(canvas, this.mMapScreenPos_0.x, this.mMapScreenPos_0.y);
    }
    var playY = 10000;
    var hasPlayerBeenDrawn = false;
    if (this.player != null) {
      playY = ensureNotNull(this.player).posInMap.y;
    }
    var npcs = this.sortedNpcObjs_0;
    tmp$ = reversed(get_indices_2(npcs)).iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      if (!hasPlayerBeenDrawn && playY < npcs[i].posInMap.y) {
        ensureNotNull(this.player).drawWalkingSprite_hbb1nm$(canvas, this.mMapScreenPos_0);
        hasPlayerBeenDrawn = true;
      }
      npcs[i].drawWalkingSprite_hbb1nm$(canvas, this.mMapScreenPos_0);
    }
    if (this.player != null && !hasPlayerBeenDrawn) {
      ensureNotNull(this.player).drawWalkingSprite_hbb1nm$(canvas, this.mMapScreenPos_0);
    }
    Util_getInstance().drawSideFrame_9in0vv$(canvas);
  };
  ScreenMainGame.prototype.onKeyDown_za3lpa$ = function (key) {
    if (this.scriptProcess.running) {
      this.scriptProcess.keyDown_za3lpa$(key);
    }
     else if (Combat$Companion_getInstance().IsActive()) {
      Combat$Companion_getInstance().KeyDown_za3lpa$(key);
      return;
    }
     else if (this.player != null) {
      switch (key) {
        case 3:
          this.walkLeft_0();
          break;
        case 4:
          this.walkRight_0();
          break;
        case 1:
          this.walkUp_0();
          break;
        case 2:
          this.walkDown_0();
          break;
        case 7:
          this.triggerSceneObjEvent_0();
          break;
      }
    }
  };
  ScreenMainGame.prototype.onKeyUp_za3lpa$ = function (key) {
    if (this.scriptProcess.running) {
      this.scriptProcess.keyUp_za3lpa$(key);
    }
     else if (Combat$Companion_getInstance().IsActive()) {
      Combat$Companion_getInstance().KeyUp_za3lpa$(key);
      return;
    }
     else if (key === Global_getInstance().KEY_CANCEL) {
      this.pushScreen_2o7n0o$(new ScreenGameMainMenu(this));
    }
  };
  ScreenMainGame.prototype.gotoAddress_za3lpa$ = function (address) {
    this.scriptProcess.gotoAddress_za3lpa$(address);
  };
  ScreenMainGame.prototype.triggerEvent_za3lpa$ = function (eventId) {
    this.scriptProcess.triggerEvent_za3lpa$(eventId);
  };
  ScreenMainGame.prototype.triggerSceneObjEvent_0 = function () {
    var p = this.player;
    var x = ensureNotNull(p).posInMap.x;
    var y = p.posInMap.y;
    switch (p.direction.name) {
      case 'East':
        x = x + 1 | 0;
        break;
      case 'North':
        y = y - 1 | 0;
        break;
      case 'South':
        y = y + 1 | 0;
        break;
      case 'West':
        x = x - 1 | 0;
        break;
      default:Kotlin.noWhenBranchMatched();
        break;
    }
    var npcId = this.getNpcIdFromPosInMap_0(x, y);
    if (npcId !== 0) {
      this.scriptProcess.triggerEvent_za3lpa$(npcId);
      return;
    }
     else
      this.triggerMapEvent_0(x, y);
  };
  ScreenMainGame.prototype.triggerMapEvent_0 = function (x, y) {
    if (this.currentMap != null) {
      var id = ensureNotNull(this.currentMap).getEventNum_vux9f0$(x, y);
      if (id !== 0) {
        this.scriptProcess.triggerEvent_za3lpa$(id + 40 | 0);
        return true;
      }
    }
    Combat$Companion_getInstance().StartNewRandomCombat();
    return false;
  };
  ScreenMainGame.prototype.canPlayerWalk_0 = function (x, y) {
    return this.currentMap == null ? false : ensureNotNull(this.currentMap).canPlayerWalk_vux9f0$(x, y) && this.getNpcFromPosInMap_vux9f0$(x, y).isEmpty;
  };
  ScreenMainGame.prototype.walkLeft_0 = function () {
    var tmp$ = ensureNotNull(this.player).posInMap;
    var x = tmp$.component1()
    , y = tmp$.component2();
    this.triggerMapEvent_0(x - 1 | 0, y);
    if (this.canPlayerWalk_0(x - 1 | 0, y)) {
      ensureNotNull(this.player).walk_rtfsey$(Direction$West_getInstance());
      var tmp$_0;
      tmp$_0 = this.mMapScreenPos_0;
      tmp$_0.x = tmp$_0.x - 1 | 0;
      SaveLoadGame_getInstance().MapScreenX = this.mMapScreenPos_0.x;
    }
     else {
      ensureNotNull(this.player).walkStay_rtfsey$(Direction$West_getInstance());
    }
  };
  ScreenMainGame.prototype.walkUp_0 = function () {
    var tmp$ = ensureNotNull(this.player).posInMap;
    var x = tmp$.component1()
    , y = tmp$.component2();
    this.triggerMapEvent_0(x, y - 1 | 0);
    if (this.canPlayerWalk_0(x, y - 1 | 0)) {
      ensureNotNull(this.player).walk_rtfsey$(Direction$North_getInstance());
      var tmp$_0;
      tmp$_0 = this.mMapScreenPos_0;
      tmp$_0.y = tmp$_0.y - 1 | 0;
      SaveLoadGame_getInstance().MapScreenY = this.mMapScreenPos_0.y;
    }
     else {
      ensureNotNull(this.player).walkStay_rtfsey$(Direction$North_getInstance());
    }
  };
  ScreenMainGame.prototype.walkRight_0 = function () {
    var tmp$ = ensureNotNull(this.player).posInMap;
    var x = tmp$.component1()
    , y = tmp$.component2();
    this.triggerMapEvent_0(x + 1 | 0, y);
    if (this.canPlayerWalk_0(x + 1 | 0, y)) {
      var tmp$_0;
      tmp$_0 = this.mMapScreenPos_0;
      tmp$_0.x = tmp$_0.x + 1 | 0;
      SaveLoadGame_getInstance().MapScreenX = this.mMapScreenPos_0.x;
      ensureNotNull(this.player).walk_rtfsey$(Direction$East_getInstance());
    }
     else {
      ensureNotNull(this.player).walkStay_rtfsey$(Direction$East_getInstance());
    }
  };
  ScreenMainGame.prototype.walkDown_0 = function () {
    var tmp$ = ensureNotNull(this.player).posInMap;
    var x = tmp$.component1()
    , y = tmp$.component2();
    this.triggerMapEvent_0(x, y + 1 | 0);
    if (this.canPlayerWalk_0(x, y + 1 | 0)) {
      var tmp$_0;
      tmp$_0 = this.mMapScreenPos_0;
      tmp$_0.y = tmp$_0.y + 1 | 0;
      SaveLoadGame_getInstance().MapScreenY = this.mMapScreenPos_0.y;
      ensureNotNull(this.player).walk_rtfsey$(Direction$South_getInstance());
    }
     else {
      ensureNotNull(this.player).walkStay_rtfsey$(Direction$South_getInstance());
    }
  };
  ScreenMainGame.prototype.loadMap_tjonv8$ = function (type, index, x, y) {
    var tmp$;
    var tmpP = null;
    if (this.player != null && this.currentMap != null) {
      tmpP = ensureNotNull(this.player).getPosOnScreen_wl9rgt$(this.mMapScreenPos_0);
    }
    this.currentMap = Kotlin.isType(tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$MAP_getInstance(), type, index), ResMap) ? tmp$ : throwCCE();
    this.mMapScreenPos_0.set_vux9f0$(x, y);
    if (tmpP != null) {
      ensureNotNull(this.player).setPosOnScreen_av5i43$(tmpP.x, tmpP.y, this.mMapScreenPos_0);
    }
    SaveLoadGame_getInstance().MapType = type;
    SaveLoadGame_getInstance().MapIndex = index;
    SaveLoadGame_getInstance().MapScreenX = x;
    SaveLoadGame_getInstance().MapScreenY = y;
  };
  ScreenMainGame.prototype.fixPlayerPosition = function () {
    var tmp$;
    if ((tmp$ = this.player) != null) {
      tmp$.setPosOnScreen_av5i43$(4, 3, this.mMapScreenPos_0);
    }
  };
  ScreenMainGame.prototype.setMapScreenPos_vux9f0$ = function (x, y) {
    this.mMapScreenPos_0.set_vux9f0$(x, y);
  };
  ScreenMainGame.prototype.createActor_qt1dr2$ = function (actorId, x, y) {
    var p = ensureNotNull(SaveLoadGame_getInstance().getPlayerByIndex_za3lpa$(actorId));
    this.playerList.add_11rb$(p);
    p.setPosOnScreen_av5i43$(x, y, this.mMapScreenPos_0);
  };
  ScreenMainGame.prototype.deleteActor_za3lpa$ = function (actorId) {
    var tmp$;
    tmp$ = this.playerList.size;
    for (var i = 0; i < tmp$; i++) {
      if (this.playerList.get_za3lpa$(i).index === actorId) {
        this.playerList.removeAt_za3lpa$(i);
        break;
      }
    }
  };
  ScreenMainGame.prototype.getPlayer_za3lpa$ = function (actorId) {
    var $receiver = SaveLoadGame_getInstance().playerDb;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.index === actorId) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  };
  ScreenMainGame.prototype.createNpc_tjonv8$ = function (id, npc, x, y) {
    var tmp$;
    var npcobj = Kotlin.isType(tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$ARS_getInstance(), 2, npc), NPC) ? tmp$ : throwCCE();
    npcobj.setPosInMap_vux9f0$(x, y);
    npcobj.setICanWalk_mkhjrq$(this.mCanWalk_0);
    this.mNPCObj_0[id] = npcobj;
    return npcobj;
  };
  ScreenMainGame.prototype.deleteNpc_za3lpa$ = function (id) {
    this.mNPCObj_0[id] = NPC$Companion_getInstance().empty;
  };
  ScreenMainGame.prototype.deleteAllNpc = function () {
    for (var i = 0; i <= 40; i++) {
      this.mNPCObj_0[i] = NPC$Companion_getInstance().empty;
    }
  };
  ScreenMainGame.prototype.getNPC_za3lpa$ = function (id) {
    return this.mNPCObj_0[id];
  };
  ScreenMainGame.prototype.setControlPlayer_za3lpa$ = function (id) {
    var $receiver = this.playerList;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.index === id) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    var p = firstOrNull$result;
    if (p != null) {
      var tmp$_0;
      var oldPos = (tmp$_0 = this.player) != null ? tmp$_0.posInMap : null;
      if (oldPos != null) {
        p.setPosInMap_vux9f0$(oldPos.x, oldPos.y);
      }
      this.playerList.remove_11rb$(p);
      this.playerList.add_wxm5ur$(0, p);
    }
  };
  ScreenMainGame.prototype.isNpcVisible_l8hog8$ = function (npc) {
    var tmp$ = npc.getPosOnScreen_wl9rgt$(this.mMapScreenPos_0);
    var x = tmp$.component1()
    , y = tmp$.component2();
    return x >= 0 && x < ResMap$Companion_getInstance().WIDTH && y >= 0 && y <= ResMap$Companion_getInstance().HEIGHT;
  };
  ScreenMainGame.prototype.getNpcFromPosInMap_vux9f0$ = function (x, y) {
    return this.mNPCObj_0[this.getNpcIdFromPosInMap_0(x, y)];
  };
  ScreenMainGame.prototype.getNpcIdFromPosInMap_0 = function (x, y) {
    var $receiver = this.mNPCObj_0;
    var indexOfFirst$result;
    indexOfFirst$break: do {
      for (var index = 0; index !== $receiver.length; ++index) {
        var it = $receiver[index];
        var tmp$;
        if (!it.isEmpty && ((tmp$ = it.posInMap) != null ? tmp$.equals(new Point(x, y)) : null)) {
          indexOfFirst$result = index;
          break indexOfFirst$break;
        }
      }
      indexOfFirst$result = -1;
    }
     while (false);
    var id = indexOfFirst$result;
    return id === -1 ? 0 : id;
  };
  ScreenMainGame.prototype.createBox_tjonv8$ = function (id, boxIndex, x, y) {
    var tmp$;
    var box = Kotlin.isType(tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$ARS_getInstance(), 4, boxIndex), SceneObj) ? tmp$ : throwCCE();
    box.setPosInMap_vux9f0$(x, y);
    this.mNPCObj_0[id] = box;
    return box;
  };
  ScreenMainGame.prototype.deleteBox_za3lpa$ = function (id) {
    this.mNPCObj_0[id] = NPC$Companion_getInstance().empty;
  };
  function ScreenMainGame$mCanWalk$ObjectLiteral(this$ScreenMainGame) {
    this.this$ScreenMainGame = this$ScreenMainGame;
  }
  ScreenMainGame$mCanWalk$ObjectLiteral.prototype.canWalk_vux9f0$ = function (x, y) {
    var tmp$;
    return ensureNotNull(this.this$ScreenMainGame.currentMap).canWalk_vux9f0$(x, y) && this.this$ScreenMainGame.getNpcFromPosInMap_vux9f0$(x, y).isEmpty && !((tmp$ = ensureNotNull(this.this$ScreenMainGame.player).posInMap) != null ? tmp$.equals(new Point(x, y)) : null);
  };
  ScreenMainGame$mCanWalk$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [NPC$ICanWalk]
  };
  ScreenMainGame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScreenMainGame',
    interfaces: [BaseScreen]
  };
  function Command() {
  }
  Command.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Command',
    interfaces: []
  };
  function Operate() {
  }
  Operate.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Operate',
    interfaces: []
  };
  function OperateAdapter() {
  }
  OperateAdapter.prototype.update_s8cxhz$ = function (delta) {
    return false;
  };
  OperateAdapter.prototype.draw_9in0vv$ = function (canvas) {
  };
  OperateAdapter.prototype.onKeyDown_za3lpa$ = function (key) {
  };
  OperateAdapter.prototype.onKeyUp_za3lpa$ = function (key) {
  };
  OperateAdapter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OperateAdapter',
    interfaces: [Operate]
  };
  function OperateBuy(parent, data) {
    this.parent_fciqf8$_0 = parent;
    this.goodsList_0 = ArrayList_init();
    this.mBuyScreen_0 = new OperateBuy$BuyGoodsScreen(this);
    var tmp$;
    var i = 0;
    while (data[i] !== 0) {
      var g = Player$Companion_getInstance().sGoodsList.getGoods_vux9f0$(data[i + 1 | 0] & 255, data[i] & 255);
      if (g == null) {
        g = Kotlin.isType(tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$GRS_getInstance(), data[i + 1 | 0] & 255, data[i] & 255), BaseGoods) ? tmp$ : throwCCE();
        g.goodsNum = 0;
      }
      this.goodsList_0.add_11rb$(g);
      i = i + 2 | 0;
    }
    this.run_0();
  }
  Object.defineProperty(OperateBuy.prototype, 'parent', {
    get: function () {
      return this.parent_fciqf8$_0;
    }
  });
  OperateBuy.prototype.run_0 = function () {
    this.pushScreen_2o7n0o$(new ScreenGoodsList(this, this.goodsList_0, this, ScreenGoodsList$Mode$Buy_getInstance()));
  };
  OperateBuy.prototype.update_s8cxhz$ = function (delta) {
    return false;
  };
  OperateBuy.prototype.draw_9in0vv$ = function (canvas) {
    this.game.mainScene.drawScene_9in0vv$(canvas);
  };
  OperateBuy.prototype.onKeyDown_za3lpa$ = function (key) {
  };
  OperateBuy.prototype.onKeyUp_za3lpa$ = function (key) {
  };
  OperateBuy.prototype.onItemSelected_6xxg66$ = function (goods) {
    if (Player$Companion_getInstance().sMoney < goods.buyPrice) {
      this.showMessage_4wgjuj$('\u91D1\u94B1\u4E0D\u8DB3!', L1000);
    }
     else {
      this.mBuyScreen_0.init_6xxg66$(goods);
      this.pushScreen_2o7n0o$(this.mBuyScreen_0);
    }
  };
  function OperateBuy$BuyGoodsScreen(parent) {
    this.parent_a0038u$_0 = parent;
    this.goods_0 = null;
    this.buyCnt_0 = 0;
    this.money_0 = 0;
    this.bmpBg_dn5wdu$_0 = lazy(OperateBuy$BuyGoodsScreen$bmpBg$lambda);
  }
  Object.defineProperty(OperateBuy$BuyGoodsScreen.prototype, 'parent', {
    get: function () {
      return this.parent_a0038u$_0;
    }
  });
  Object.defineProperty(OperateBuy$BuyGoodsScreen.prototype, 'bmpBg_0', {
    get: function () {
      return this.bmpBg_dn5wdu$_0.value;
    }
  });
  Object.defineProperty(OperateBuy$BuyGoodsScreen.prototype, 'isPopup', {
    get: function () {
      return true;
    }
  });
  OperateBuy$BuyGoodsScreen.prototype.init_6xxg66$ = function (goods) {
    this.goods_0 = goods;
    this.buyCnt_0 = 0;
    this.money_0 = Player$Companion_getInstance().sMoney;
  };
  OperateBuy$BuyGoodsScreen.prototype.update_s8cxhz$ = function (delta) {
  };
  OperateBuy$BuyGoodsScreen.prototype.draw_9in0vv$ = function (canvas) {
    canvas.drawBitmap_t8cslu$(this.bmpBg_0, 12, 21);
    TextRender_getInstance().drawText_kkuqvh$(canvas, '\u91D1\u94B1\uFF1A' + toString(this.money_0), 15, 24);
    TextRender_getInstance().drawText_kkuqvh$(canvas, ensureNotNull(this.goods_0).name, 15, 40);
    TextRender_getInstance().drawText_kkuqvh$(canvas, ': ' + toString(ensureNotNull(this.goods_0).goodsNum), 93, 40);
    TextRender_getInstance().drawText_kkuqvh$(canvas, '\u4E70\u5165\u4E2A\u6570\u3000\uFF1A' + toString(this.buyCnt_0), 15, 56);
  };
  OperateBuy$BuyGoodsScreen.prototype.onKeyUp_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_ENTER) {
      Player$Companion_getInstance().sMoney = this.money_0;
      if (this.buyCnt_0 === ensureNotNull(this.goods_0).goodsNum && this.buyCnt_0 > 0) {
        Player$Companion_getInstance().sGoodsList.addGoods_qt1dr2$(ensureNotNull(this.goods_0).type, ensureNotNull(this.goods_0).index, this.buyCnt_0);
      }
      this.popScreen();
    }
     else if (key === Global_getInstance().KEY_CANCEL) {
      ensureNotNull(this.goods_0).addGoodsNum_za3lpa$(-this.buyCnt_0 | 0);
      this.popScreen();
    }
  };
  OperateBuy$BuyGoodsScreen.prototype.onKeyDown_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_UP && ensureNotNull(this.goods_0).goodsNum < 99) {
      if (this.money_0 >= ensureNotNull(this.goods_0).buyPrice) {
        this.buyCnt_0 = this.buyCnt_0 + 1 | 0;
        ensureNotNull(this.goods_0).addGoodsNum_za3lpa$(1);
        this.money_0 = this.money_0 - ensureNotNull(this.goods_0).buyPrice | 0;
      }
       else {
        this.showMessage_4wgjuj$('\u91D1\u94B1\u4E0D\u8DB3!', L1000);
      }
    }
     else if (key === Global_getInstance().KEY_DOWN && this.buyCnt_0 > 0) {
      this.buyCnt_0 = this.buyCnt_0 - 1 | 0;
      ensureNotNull(this.goods_0).addGoodsNum_za3lpa$(-1);
      this.money_0 = this.money_0 + ensureNotNull(this.goods_0).buyPrice | 0;
    }
  };
  function OperateBuy$BuyGoodsScreen$bmpBg$lambda() {
    return Util_getInstance().getFrameBitmap_vux9f0$(136, 55);
  }
  OperateBuy$BuyGoodsScreen.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BuyGoodsScreen',
    interfaces: [BaseScreen]
  };
  OperateBuy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OperateBuy',
    interfaces: [ScreenGoodsList$OnItemSelectedListener, Operate, Control]
  };
  function OperateDrawOnce() {
    this.drawCnt_jhho4u$_0 = 0;
  }
  OperateDrawOnce.prototype.update_s8cxhz$ = function (delta) {
    if (this.drawCnt_jhho4u$_0 >= 3) {
      this.drawCnt_jhho4u$_0 = 0;
      return false;
    }
    return true;
  };
  OperateDrawOnce.prototype.draw_9in0vv$ = function (canvas) {
    this.drawOnce_9in0vv$(canvas);
    this.drawCnt_jhho4u$_0 = this.drawCnt_jhho4u$_0 + 1 | 0;
  };
  OperateDrawOnce.prototype.onKeyDown_za3lpa$ = function (key) {
  };
  OperateDrawOnce.prototype.onKeyUp_za3lpa$ = function (key) {
  };
  OperateDrawOnce.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OperateDrawOnce',
    interfaces: [Operate]
  };
  function OperateSale(parent) {
    this.parent_bkp9d7$_0 = parent;
  }
  Object.defineProperty(OperateSale.prototype, 'parent', {
    get: function () {
      return this.parent_bkp9d7$_0;
    }
  });
  OperateSale.prototype.update_s8cxhz$ = function (delta) {
    return false;
  };
  OperateSale.prototype.draw_9in0vv$ = function (canvas) {
  };
  OperateSale.prototype.onKeyDown_za3lpa$ = function (key) {
  };
  OperateSale.prototype.onKeyUp_za3lpa$ = function (key) {
  };
  OperateSale.prototype.onItemSelected_6xxg66$ = function (goods) {
    if (Kotlin.isType(goods, GoodsDrama)) {
      this.showMessage_4wgjuj$('\u4EFB\u52A1\u7269\u54C1!', L1000);
    }
     else {
      this.pushScreen_2o7n0o$(new OperateSale$SaleGoodsScreen(this, this, goods));
    }
  };
  function OperateSale$SaleGoodsScreen($outer, parent, goods) {
    this.$outer = $outer;
    this.parent_5e21we$_0 = parent;
    this.goods_0 = goods;
    this.saleCnt_0 = 0;
    this.money_0 = Player$Companion_getInstance().sMoney;
    this.bmpBg_4u37ni$_0 = lazy(OperateSale$SaleGoodsScreen$bmpBg$lambda);
  }
  Object.defineProperty(OperateSale$SaleGoodsScreen.prototype, 'parent', {
    get: function () {
      return this.parent_5e21we$_0;
    }
  });
  Object.defineProperty(OperateSale$SaleGoodsScreen.prototype, 'bmpBg_0', {
    get: function () {
      return this.bmpBg_4u37ni$_0.value;
    }
  });
  Object.defineProperty(OperateSale$SaleGoodsScreen.prototype, 'isPopup', {
    get: function () {
      return true;
    }
  });
  OperateSale$SaleGoodsScreen.prototype.update_s8cxhz$ = function (delta) {
  };
  OperateSale$SaleGoodsScreen.prototype.draw_9in0vv$ = function (canvas) {
    canvas.drawBitmap_t8cslu$(this.bmpBg_0, 12, 21);
    TextRender_getInstance().drawText_kkuqvh$(canvas, '\u91D1\u94B1\uFF1A' + toString(this.money_0), 15, 24);
    TextRender_getInstance().drawText_kkuqvh$(canvas, this.goods_0.name, 15, 40);
    TextRender_getInstance().drawText_kkuqvh$(canvas, ': ' + toString(this.goods_0.goodsNum - this.saleCnt_0 | 0), 93, 40);
    TextRender_getInstance().drawText_kkuqvh$(canvas, '\u5356\u51FA\u4E2A\u6570\u3000\uFF1A' + toString(this.saleCnt_0), 15, 56);
  };
  OperateSale$SaleGoodsScreen.prototype.onKeyUp_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_ENTER) {
      Player$Companion_getInstance().sMoney = this.money_0;
      if (this.saleCnt_0 > 0) {
        Player$Companion_getInstance().sGoodsList.useGoodsNum_qt1dr2$(this.goods_0.type, this.goods_0.index, this.saleCnt_0);
      }
      this.popScreen();
      this.popScreen();
      var list = ArrayList_init();
      list.addAll_brywnq$(Player$Companion_getInstance().sGoodsList.goodsList);
      list.addAll_brywnq$(Player$Companion_getInstance().sGoodsList.equipList);
      this.pushScreen_2o7n0o$(new ScreenGoodsList(this, list, this.$outer, ScreenGoodsList$Mode$Sale_getInstance()));
    }
     else if (key === Global_getInstance().KEY_CANCEL) {
      this.popScreen();
    }
  };
  OperateSale$SaleGoodsScreen.prototype.onKeyDown_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_UP && this.saleCnt_0 > 0) {
      this.saleCnt_0 = this.saleCnt_0 - 1 | 0;
      this.money_0 = this.money_0 - this.goods_0.sellPrice | 0;
    }
     else if (key === Global_getInstance().KEY_DOWN && this.goods_0.goodsNum > this.saleCnt_0) {
      this.saleCnt_0 = this.saleCnt_0 + 1 | 0;
      this.money_0 = this.money_0 + this.goods_0.sellPrice | 0;
      if (this.money_0 > 99999) {
        this.money_0 = 99999;
      }
    }
  };
  function OperateSale$SaleGoodsScreen$bmpBg$lambda() {
    return Util_getInstance().getFrameBitmap_vux9f0$(136, 55);
  }
  OperateSale$SaleGoodsScreen.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SaleGoodsScreen',
    interfaces: [BaseScreen]
  };
  OperateSale.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OperateSale',
    interfaces: [ScreenGoodsList$OnItemSelectedListener, Operate, Control]
  };
  function ScriptProcess(name, commands, eventIndex, mMapAddrOffsetIndex, mHeaderCnt) {
    this.name_0 = name;
    this.commands_0 = commands;
    this.eventIndex_0 = eventIndex;
    this.mMapAddrOffsetIndex_0 = mMapAddrOffsetIndex;
    this.mHeaderCnt_0 = mHeaderCnt;
    this.mCurExeOperateIndex_0 = 0;
    this.curOp_0 = null;
    this.running_4a4ioz$_0 = false;
    this.prev = null;
    this.timer = 0;
    this.timerCounter = 0;
    this.timerEventId = 0;
    this.goonExecute = true;
  }
  Object.defineProperty(ScriptProcess.prototype, 'running', {
    get: function () {
      return this.running_4a4ioz$_0;
    },
    set: function (running) {
      this.running_4a4ioz$_0 = running;
    }
  });
  ScriptProcess.prototype.start = function () {
    this.running = true;
    this.goonExecute = true;
  };
  ScriptProcess.prototype.stop = function () {
    this.running = false;
    this.goonExecute = false;
  };
  ScriptProcess.prototype.triggerEvent_za3lpa$ = function (eventId) {
    if (eventId > this.eventIndex_0.length) {
      this.stop();
      return false;
    }
    var index = this.eventIndex_0[eventId - 1 | 0];
    if (index !== -1) {
      this.mCurExeOperateIndex_0 = index;
      this.curOp_0 = null;
      this.start();
      return true;
    }
    this.stop();
    return false;
  };
  ScriptProcess.prototype.gotoAddress_za3lpa$ = function (address) {
    this.mCurExeOperateIndex_0 = ensureNotNull(this.mMapAddrOffsetIndex_0.get_11rb$(address - this.mHeaderCnt_0 | 0));
    if (this.curOp_0 != null) {
      this.curOp_0 = null;
      this.mCurExeOperateIndex_0 = this.mCurExeOperateIndex_0 - 1 | 0;
    }
     else {
      this.goonExecute = false;
    }
    this.running = true;
  };
  ScriptProcess.prototype.process = function () {
    if (this.curOp_0 == null) {
      while (this.mCurExeOperateIndex_0 < this.commands_0.size && this.goonExecute) {
        var cmd = this.commands_0.get_za3lpa$(this.mCurExeOperateIndex_0);
        this.curOp_0 = cmd.run_fhed9o$(this);
        if (this.curOp_0 != null) {
          return;
        }
        if (!this.goonExecute) {
          this.goonExecute = true;
          return;
        }
        this.mCurExeOperateIndex_0 = this.mCurExeOperateIndex_0 + 1 | 0;
      }
    }
  };
  ScriptProcess.prototype.update_s8cxhz$ = function (delta) {
    var tmp$, tmp$_0;
    if ((tmp$_0 = (tmp$ = this.curOp_0) != null ? tmp$.update_s8cxhz$(delta) : null) != null) {
      if (!tmp$_0) {
        this.curOp_0 = null;
        this.mCurExeOperateIndex_0 = this.mCurExeOperateIndex_0 + 1 | 0;
      }
    }
  };
  ScriptProcess.prototype.timerStep_s8cxhz$ = function (delta) {
    if (this.timer > 0 && this.timerEventId > 0) {
      this.timerCounter = this.timerCounter - delta.toInt() | 0;
      if (this.timerCounter <= 0) {
        this.timerCounter = this.timerCounter + this.timer | 0;
        this.triggerEvent_za3lpa$(this.timerEventId);
      }
    }
  };
  ScriptProcess.prototype.setTimer_vux9f0$ = function (timer, eventId) {
    this.timer = timer * 500 | 0;
    this.timerCounter = this.timer;
    this.timerEventId = eventId;
  };
  ScriptProcess.prototype.draw_9in0vv$ = function (canvas) {
    var tmp$;
    (tmp$ = this.curOp_0) != null ? (tmp$.draw_9in0vv$(canvas), Unit) : null;
  };
  ScriptProcess.prototype.keyDown_za3lpa$ = function (key) {
    var tmp$;
    (tmp$ = this.curOp_0) != null ? (tmp$.onKeyDown_za3lpa$(key), Unit) : null;
  };
  ScriptProcess.prototype.keyUp_za3lpa$ = function (key) {
    var tmp$;
    (tmp$ = this.curOp_0) != null ? (tmp$.onKeyUp_za3lpa$(key), Unit) : null;
  };
  ScriptProcess.prototype.encode_vcd9jg$ = function (coder) {
    coder.writeInt_za3lpa$(this.timer);
    coder.writeInt_za3lpa$(this.timerCounter);
    coder.writeInt_za3lpa$(this.timerEventId);
  };
  ScriptProcess.prototype.decode_setnfj$ = function (coder) {
    this.timer = coder.readInt();
    this.timerCounter = coder.readInt();
    this.timerEventId = coder.readInt();
  };
  ScriptProcess.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScriptProcess',
    interfaces: []
  };
  function ScriptResources() {
    ScriptResources_instance = this;
    this.globalEvents = Kotlin.booleanArray(2401);
    this.variables = new Int32Array(240);
  }
  ScriptResources.prototype.initLocalVar = function () {
    for (var i = 200; i <= 239; i++) {
      this.variables[i] = 0;
    }
  };
  ScriptResources.prototype.initGlobalVar = function () {
    for (var i = 0; i <= 199; i++) {
      this.variables[i] = 0;
    }
  };
  ScriptResources.prototype.initGlobalEvents = function () {
    for (var i = 1; i <= 2400; i++) {
      this.globalEvents[i] = false;
    }
  };
  ScriptResources.prototype.setEvent_za3lpa$ = function (num) {
    this.globalEvents[num] = true;
  };
  ScriptResources.prototype.clearEvent_za3lpa$ = function (num) {
    this.globalEvents[num] = false;
  };
  ScriptResources.prototype.write_vcd9jg$ = function (out) {
    for (var i = 1; i <= 2400; i++) {
      out.writeBoolean_6taknv$(this.globalEvents[i]);
    }
    for (var i_0 = 0; i_0 <= 239; i_0++) {
      out.writeInt_za3lpa$(this.variables[i_0]);
    }
  };
  ScriptResources.prototype.read_setnfj$ = function (coder) {
    for (var i = 1; i <= 2400; i++) {
      this.globalEvents[i] = coder.readBoolean();
    }
    for (var i_0 = 0; i_0 <= 239; i_0++) {
      this.variables[i_0] = coder.readInt();
    }
  };
  ScriptResources.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ScriptResources',
    interfaces: []
  };
  var ScriptResources_instance = null;
  function ScriptResources_getInstance() {
    if (ScriptResources_instance === null) {
      new ScriptResources();
    }
    return ScriptResources_instance;
  }
  var makeCommand = defineInlineFunction('fmj.core.fmj.script.makeCommand_wclmr0$', wrapFunction(function () {
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var Command = _.fmj.script.Command;
    function makeCommand$ObjectLiteral(closure$run, closure$desc, closure$len) {
      this.closure$run = closure$run;
      this.description_bq3bja$_0 = closure$desc;
      this.len_gjbbj3$_0 = closure$len;
    }
    Object.defineProperty(makeCommand$ObjectLiteral.prototype, 'description', {
      get: function () {
        return this.description_bq3bja$_0;
      }
    });
    Object.defineProperty(makeCommand$ObjectLiteral.prototype, 'len', {
      get: function () {
        return this.len_gjbbj3$_0;
      }
    });
    makeCommand$ObjectLiteral.prototype.run_fhed9o$ = function (p) {
      return this.closure$run(p);
    };
    makeCommand$ObjectLiteral.$metadata$ = {
      kind: Kind_CLASS,
      interfaces: [Command]
    };
    return function (len, desc, run) {
      if (desc === void 0)
        desc = null;
      return new makeCommand$ObjectLiteral(run, desc, len);
    };
  }));
  function ScriptVM(parent) {
    ScriptVM$Companion_getInstance();
    this.parent_tqr9cs$_0 = parent;
    this.instructions_0 = null;
    var cmd_music = ScriptVM_init$cmd_music;
    var cmd_loadmap = ScriptVM_init$cmd_loadmap(this);
    var cmd_createactor = ScriptVM_init$cmd_createactor(this);
    var cmd_deletenpc = ScriptVM_init$cmd_deletenpc(this);
    var cmd_move = ScriptVM_init$cmd_move(this);
    var cmd_callback = ScriptVM_init$cmd_callback(this);
    var cmd_goto = ScriptVM_init$cmd_goto(this);
    var cmd_if = ScriptVM_init$cmd_if(this);
    var cmd_set = ScriptVM_init$cmd_set;
    var cmd_say = ScriptVM_init$cmd_say(this);
    var cmd_startchapter = ScriptVM_init$cmd_startchapter(this);
    var cmd_screens = ScriptVM_init$cmd_screens(this);
    var cmd_gameover = ScriptVM_init$cmd_gameover(this);
    var cmd_ifcmp = ScriptVM_init$cmd_ifcmp(this);
    var cmd_add = ScriptVM_init$cmd_add;
    var cmd_sub = ScriptVM_init$cmd_sub;
    var cmd_setcontrolid = ScriptVM_init$cmd_setcontrolid(this);
    var cmd_setevent = ScriptVM_init$cmd_setevent;
    var cmd_clrevent = ScriptVM_init$cmd_clrevent;
    var cmd_buy = ScriptVM_init$cmd_buy(this);
    var cmd_facetoface = ScriptVM_init$cmd_facetoface(this);
    var cmd_movie = ScriptVM_init$cmd_movie(this);
    var cmd_choice = ScriptVM_init$cmd_choice(this);
    var cmd_createbox = ScriptVM_init$cmd_createbox(this);
    var cmd_deletebox = ScriptVM_init$cmd_deletebox(this);
    var cmd_gaingoods = ScriptVM_init$cmd_gaingoods;
    var cmd_initfight = ScriptVM_init$cmd_initfight(this);
    var cmd_fightenable = ScriptVM_init$cmd_fightenable;
    var cmd_fightdisenable = ScriptVM_init$cmd_fightdisenable;
    var cmd_createnpc = ScriptVM_init$cmd_createnpc(this);
    var cmd_enterfight = ScriptVM_init$cmd_enterfight(this);
    var cmd_deleteactor = ScriptVM_init$cmd_deleteactor(this);
    var cmd_gainmoney = ScriptVM_init$cmd_gainmoney;
    var cmd_usemoney = ScriptVM_init$cmd_usemoney;
    var cmd_setmoney = ScriptVM_init$cmd_setmoney;
    var cmd_learnmagic = ScriptVM_init$cmd_learnmagic(this);
    var cmd_sale = ScriptVM_init$cmd_sale(this);
    var cmd_npcmovemod = ScriptVM_init$cmd_npcmovemod(this);
    var cmd_message = ScriptVM_init$cmd_message;
    var cmd_deletegoods = ScriptVM_init$cmd_deletegoods(this);
    var cmd_resumeactorhp = ScriptVM_init$cmd_resumeactorhp(this);
    var cmd_actorlayerup = ScriptVM_init$cmd_actorlayerup(this);
    var cmd_boxopen = ScriptVM_init$cmd_boxopen(this);
    var cmd_delallnpc = ScriptVM_init$cmd_delallnpc(this);
    var cmd_npcstep = ScriptVM_init$cmd_npcstep(this);
    var cmd_setscenename = ScriptVM_init$cmd_setscenename(this);
    var cmd_showscenename = ScriptVM_init$cmd_showscenename(this);
    var cmd_showscreen = ScriptVM_init$cmd_showscreen(this);
    var cmd_usegoods = ScriptVM_init$cmd_usegoods(this);
    var cmd_attribtest = ScriptVM_init$cmd_attribtest(this);
    var cmd_attribset = ScriptVM_init$cmd_attribset(this);
    var cmd_attribadd = ScriptVM_init$cmd_attribadd(this);
    var cmd_showgut = ScriptVM_init$cmd_showgut;
    var cmd_usegoodsnum = ScriptVM_init$cmd_usegoodsnum(this);
    var cmd_randrade = ScriptVM_init$cmd_randrade(this);
    var cmd_menu = ScriptVM_init$cmd_menu(this);
    var cmd_testmoney = ScriptVM_init$cmd_testmoney(this);
    var cmd_callchapter = ScriptVM_init$cmd_callchapter(this);
    var cmd_discmp = ScriptVM_init$cmd_discmp(this);
    var cmd_return = ScriptVM_init$cmd_return(this);
    var cmd_timemsg = ScriptVM_init$cmd_timemsg;
    var cmd_disablesave = ScriptVM_init$cmd_disablesave;
    var cmd_enablesave = ScriptVM_init$cmd_enablesave;
    var cmd_gamesave = ScriptVM_init$cmd_gamesave(this);
    var cmd_seteventtimer = ScriptVM_init$cmd_seteventtimer;
    var cmd_enableshowpos = ScriptVM_init$cmd_enableshowpos;
    var cmd_disableshowpos = ScriptVM_init$cmd_disableshowpos;
    var cmd_setto = ScriptVM_init$cmd_setto;
    var cmd_testgoodsnum = ScriptVM_init$cmd_testgoodsnum(this);
    var cmd_setfightmiss = ScriptVM_init$cmd_setfightmiss;
    var cmd_setarmstoss = ScriptVM_init$cmd_setarmstoss;
    this.instructions_0 = [getCallableRef('cmd_music', function (code, start) {
      return cmd_music(code, start);
    }), getCallableRef('cmd_loadmap', function (code, start) {
      return cmd_loadmap(code, start);
    }), getCallableRef('cmd_createactor', function (code, start) {
      return cmd_createactor(code, start);
    }), getCallableRef('cmd_deletenpc', function (code, start) {
      return cmd_deletenpc(code, start);
    }), null, null, getCallableRef('cmd_move', function (code, start) {
      return cmd_move(code, start);
    }), null, null, getCallableRef('cmd_callback', function (code, start) {
      return cmd_callback(code, start);
    }), getCallableRef('cmd_goto', function (code, start) {
      return cmd_goto(code, start);
    }), getCallableRef('cmd_if', function (code, start) {
      return cmd_if(code, start);
    }), getCallableRef('cmd_set', function (code, start) {
      return cmd_set(code, start);
    }), getCallableRef('cmd_say', function (code, start) {
      return cmd_say(code, start);
    }), getCallableRef('cmd_startchapter', function (code, start) {
      return cmd_startchapter(code, start);
    }), null, getCallableRef('cmd_screens', function (code, start) {
      return cmd_screens(code, start);
    }), null, null, null, getCallableRef('cmd_gameover', function (code, start) {
      return cmd_gameover(code, start);
    }), getCallableRef('cmd_ifcmp', function (code, start) {
      return cmd_ifcmp(code, start);
    }), getCallableRef('cmd_add', function (code, start) {
      return cmd_add(code, start);
    }), getCallableRef('cmd_sub', function (code, start) {
      return cmd_sub(code, start);
    }), getCallableRef('cmd_setcontrolid', function (code, start) {
      return cmd_setcontrolid(code, start);
    }), null, getCallableRef('cmd_setevent', function (code, start) {
      return cmd_setevent(code, start);
    }), getCallableRef('cmd_clrevent', function (code, start) {
      return cmd_clrevent(code, start);
    }), getCallableRef('cmd_buy', function (code, start) {
      return cmd_buy(code, start);
    }), getCallableRef('cmd_facetoface', function (code, start) {
      return cmd_facetoface(code, start);
    }), getCallableRef('cmd_movie', function (code, start) {
      return cmd_movie(code, start);
    }), getCallableRef('cmd_choice', function (code, start) {
      return cmd_choice(code, start);
    }), getCallableRef('cmd_createbox', function (code, start) {
      return cmd_createbox(code, start);
    }), getCallableRef('cmd_deletebox', function (code, start) {
      return cmd_deletebox(code, start);
    }), getCallableRef('cmd_gaingoods', function (code, start) {
      return cmd_gaingoods(code, start);
    }), getCallableRef('cmd_initfight', function (code, start) {
      return cmd_initfight(code, start);
    }), getCallableRef('cmd_fightenable', function (code, start) {
      return cmd_fightenable(code, start);
    }), getCallableRef('cmd_fightdisenable', function (code, start) {
      return cmd_fightdisenable(code, start);
    }), getCallableRef('cmd_createnpc', function (code, start) {
      return cmd_createnpc(code, start);
    }), getCallableRef('cmd_enterfight', function (code, start) {
      return cmd_enterfight(code, start);
    }), getCallableRef('cmd_deleteactor', function (code, start) {
      return cmd_deleteactor(code, start);
    }), getCallableRef('cmd_gainmoney', function (code, start) {
      return cmd_gainmoney(code, start);
    }), getCallableRef('cmd_usemoney', function (code, start) {
      return cmd_usemoney(code, start);
    }), getCallableRef('cmd_setmoney', function (code, start) {
      return cmd_setmoney(code, start);
    }), getCallableRef('cmd_learnmagic', function (code, start) {
      return cmd_learnmagic(code, start);
    }), getCallableRef('cmd_sale', function (code, start) {
      return cmd_sale(code, start);
    }), getCallableRef('cmd_npcmovemod', function (code, start) {
      return cmd_npcmovemod(code, start);
    }), getCallableRef('cmd_message', function (code, start) {
      return cmd_message(code, start);
    }), getCallableRef('cmd_deletegoods', function (code, start) {
      return cmd_deletegoods(code, start);
    }), getCallableRef('cmd_resumeactorhp', function (code, start) {
      return cmd_resumeactorhp(code, start);
    }), getCallableRef('cmd_actorlayerup', function (code, start) {
      return cmd_actorlayerup(code, start);
    }), getCallableRef('cmd_boxopen', function (code, start) {
      return cmd_boxopen(code, start);
    }), getCallableRef('cmd_delallnpc', function (code, start) {
      return cmd_delallnpc(code, start);
    }), getCallableRef('cmd_npcstep', function (code, start) {
      return cmd_npcstep(code, start);
    }), getCallableRef('cmd_setscenename', function (code, start) {
      return cmd_setscenename(code, start);
    }), getCallableRef('cmd_showscenename', function (code, start) {
      return cmd_showscenename(code, start);
    }), getCallableRef('cmd_showscreen', function (code, start) {
      return cmd_showscreen(code, start);
    }), getCallableRef('cmd_usegoods', function (code, start) {
      return cmd_usegoods(code, start);
    }), getCallableRef('cmd_attribtest', function (code, start) {
      return cmd_attribtest(code, start);
    }), getCallableRef('cmd_attribset', function (code, start) {
      return cmd_attribset(code, start);
    }), getCallableRef('cmd_attribadd', function (code, start) {
      return cmd_attribadd(code, start);
    }), getCallableRef('cmd_showgut', function (code, start) {
      return cmd_showgut(code, start);
    }), getCallableRef('cmd_usegoodsnum', function (code, start) {
      return cmd_usegoodsnum(code, start);
    }), getCallableRef('cmd_randrade', function (code, start) {
      return cmd_randrade(code, start);
    }), getCallableRef('cmd_menu', function (code, start) {
      return cmd_menu(code, start);
    }), getCallableRef('cmd_testmoney', function (code, start) {
      return cmd_testmoney(code, start);
    }), getCallableRef('cmd_callchapter', function (code, start) {
      return cmd_callchapter(code, start);
    }), getCallableRef('cmd_discmp', function (code, start) {
      return cmd_discmp(code, start);
    }), getCallableRef('cmd_return', function (code, start) {
      return cmd_return(code, start);
    }), getCallableRef('cmd_timemsg', function (code, start) {
      return cmd_timemsg(code, start);
    }), getCallableRef('cmd_disablesave', function (code, start) {
      return cmd_disablesave(code, start);
    }), getCallableRef('cmd_enablesave', function (code, start) {
      return cmd_enablesave(code, start);
    }), getCallableRef('cmd_gamesave', function (code, start) {
      return cmd_gamesave(code, start);
    }), getCallableRef('cmd_seteventtimer', function (code, start) {
      return cmd_seteventtimer(code, start);
    }), getCallableRef('cmd_enableshowpos', function (code, start) {
      return cmd_enableshowpos(code, start);
    }), getCallableRef('cmd_disableshowpos', function (code, start) {
      return cmd_disableshowpos(code, start);
    }), getCallableRef('cmd_setto', function (code, start) {
      return cmd_setto(code, start);
    }), getCallableRef('cmd_testgoodsnum', function (code, start) {
      return cmd_testgoodsnum(code, start);
    }), getCallableRef('cmd_setfightmiss', function (code, start) {
      return cmd_setfightmiss(code, start);
    }), getCallableRef('cmd_setarmstoss', function (code, start) {
      return cmd_setarmstoss(code, start);
    })];
  }
  Object.defineProperty(ScriptVM.prototype, 'parent', {
    get: function () {
      return this.parent_tqr9cs$_0;
    }
  });
  ScriptVM.prototype.loadGut_0 = function (gut, print) {
    if (print === void 0)
      print = false;
    var tmp$;
    var code = gut.scriptData;
    var pointer = 0;
    var map = HashMap_init(128);
    var address = 0;
    var commands = ArrayList_init();
    while (pointer < code.length) {
      map.put_xwzc9p$(pointer, address);
      address = address + 1 | 0;
      var cmdCode = code[pointer] & 255;
      var cmdMaker = this.instructions_0[cmdCode];
      if (cmdMaker != null) {
        var cmd = cmdMaker(code, pointer + 1 | 0);
        if (print) {
          var desc = 'cmd' + cmdCode + ' ' + toString((tmp$ = cmd.description) != null ? tmp$ : '');
          println(address.toString() + ': ' + desc);
        }
        commands.add_11rb$(cmd);
        pointer = pointer + (cmd.len + 1) | 0;
      }
       else {
        throw Error_init('ECMD: ' + cmdCode);
      }
    }
    var events = gut.sceneEvent;
    var eventIndex = new Int32Array(events.length);
    for (var i = 0; i !== events.length; ++i) {
      if (events[i] === 0) {
        eventIndex[i] = -1;
      }
       else {
        eventIndex[i] = ensureNotNull(map.get_11rb$(events[i] - (events.length * 2 | 0) - 3 | 0));
      }
    }
    return new ScriptProcess(gut.type.toString() + '-' + gut.index, commands, eventIndex, map, (events.length * 2 | 0) + 3 | 0);
  };
  ScriptVM.prototype.loadScript_vux9f0$ = function (type, index) {
    var tmp$;
    var gut = Kotlin.isType(tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$GUT_getInstance(), type, index), ResGut) ? tmp$ : throwCCE();
    return this.loadGut_0(gut);
  };
  ScriptVM.prototype.compileScript_vux9f0$ = function (type, index) {
    var tmp$;
    var gut = Kotlin.isType(tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$GUT_getInstance(), type, index), ResGut) ? tmp$ : throwCCE();
    println('Compiling GUT ' + type + ' ' + index);
    return this.loadGut_0(gut, true);
  };
  function ScriptVM$Companion() {
    ScriptVM$Companion_instance = this;
    this.cmdDebug = true;
  }
  ScriptVM$Companion.prototype.get2ByteInt_ir89t6$ = function (data, start) {
    return data[start] & 255 | data[start + 1 | 0] << 8 & 65280;
  };
  ScriptVM$Companion.prototype.get4BytesInt_ir89t6$ = function (data, start) {
    return data[start] & 255 | data[start + 1 | 0] << 8 & 65280 | data[start + 2 | 0] << 16 & 16711680 | data[start + 3 | 0] << 24;
  };
  ScriptVM$Companion.prototype.getStringBytes_ir89t6$ = function (data, start) {
    var i = 0;
    while (data[start + i | 0] !== 0)
      i = i + 1 | 0;
    var rlt = new Int8Array((i = i + 1 | 0, i));
    System_getInstance().arraycopy_nlwz52$(data, start, rlt, 0, i);
    return rlt;
  };
  ScriptVM$Companion.prototype.cmdPrint_61zpoe$ = function (msg) {
    if (this.cmdDebug)
      println(msg);
  };
  ScriptVM$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ScriptVM$Companion_instance = null;
  function ScriptVM$Companion_getInstance() {
    if (ScriptVM$Companion_instance === null) {
      new ScriptVM$Companion();
    }
    return ScriptVM$Companion_instance;
  }
  function ScriptVM_init$cmd_music$lambda(it) {
    return null;
  }
  function makeCommand$ObjectLiteral(closure$run, closure$desc, closure$len) {
    this.closure$run = closure$run;
    this.description_bq3bja$_0 = closure$desc;
    this.len_gjbbj3$_0 = closure$len;
  }
  Object.defineProperty(makeCommand$ObjectLiteral.prototype, 'description', {
    get: function () {
      return this.description_bq3bja$_0;
    }
  });
  Object.defineProperty(makeCommand$ObjectLiteral.prototype, 'len', {
    get: function () {
      return this.len_gjbbj3$_0;
    }
  });
  makeCommand$ObjectLiteral.prototype.run_fhed9o$ = function (p) {
    return this.closure$run(p);
  };
  makeCommand$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Command]
  };
  function ScriptVM_init$cmd_music(code, start) {
    println('cmd_music not implemented');
    return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_music$lambda, null, 4);
  }
  function ScriptVM_init$cmd_loadmap$lambda$ObjectLiteral(this$ScriptVM) {
    this.this$ScriptVM = this$ScriptVM;
    OperateDrawOnce.call(this);
  }
  ScriptVM_init$cmd_loadmap$lambda$ObjectLiteral.prototype.drawOnce_9in0vv$ = function (canvas) {
    this.this$ScriptVM.game.mainScene.drawScene_9in0vv$(canvas);
  };
  ScriptVM_init$cmd_loadmap$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [OperateDrawOnce]
  };
  function ScriptVM_init$cmd_loadmap$lambda(closure$type, closure$index, closure$x, closure$y, this$ScriptVM) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_loadmap type=' + closure$type + ' index=' + closure$index + ' x=' + closure$x + ' y=' + closure$y);
      this$ScriptVM.game.mainScene.loadMap_tjonv8$(closure$type, closure$index, closure$x, closure$y);
      return new ScriptVM_init$cmd_loadmap$lambda$ObjectLiteral(this$ScriptVM);
    };
  }
  function ScriptVM_init$cmd_loadmap(this$ScriptVM) {
    return function (code, start) {
      var type = code[start] & 255 | code[start + 1 | 0] << 8 & 65280;
      var index = code[start + 2 | 0] & 255 | code[start + 3 | 0] << 8 & 65280;
      var x = code[start + 4 | 0] & 255 | code[start + 5 | 0] << 8 & 65280;
      var y = code[start + 6 | 0] & 255 | code[start + 7 | 0] << 8 & 65280;
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_loadmap$lambda(type, index, x, y, this$ScriptVM), null, 8);
    };
  }
  function ScriptVM_init$cmd_createactor$lambda$ObjectLiteral(this$ScriptVM) {
    this.this$ScriptVM = this$ScriptVM;
    OperateDrawOnce.call(this);
  }
  ScriptVM_init$cmd_createactor$lambda$ObjectLiteral.prototype.drawOnce_9in0vv$ = function (canvas) {
    this.this$ScriptVM.game.mainScene.drawScene_9in0vv$(canvas);
  };
  ScriptVM_init$cmd_createactor$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [OperateDrawOnce]
  };
  function ScriptVM_init$cmd_createactor$lambda(closure$actor, closure$x, closure$y, this$ScriptVM) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_createactor ' + closure$actor + ' at (' + closure$x + ', ' + closure$y + ')');
      this$ScriptVM.game.mainScene.createActor_qt1dr2$(closure$actor, closure$x, closure$y);
      return new ScriptVM_init$cmd_createactor$lambda$ObjectLiteral(this$ScriptVM);
    };
  }
  function ScriptVM_init$cmd_createactor(this$ScriptVM) {
    return function (code, start) {
      var actor = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
      var x = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 2 | 0);
      var y = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 4 | 0);
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_createactor$lambda(actor, x, y, this$ScriptVM), null, 6);
    };
  }
  function ScriptVM_init$cmd_deletenpc$lambda(closure$npc, this$ScriptVM) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_deletenpc ' + closure$npc);
      this$ScriptVM.game.mainScene.deleteNpc_za3lpa$(closure$npc);
      return null;
    };
  }
  function ScriptVM_init$cmd_deletenpc(this$ScriptVM) {
    return function (code, start) {
      var npc = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_deletenpc$lambda(npc, this$ScriptVM), null, 2);
    };
  }
  function ScriptVM_init$cmd_move$lambda$ObjectLiteral(closure$npc, closure$dstX, closure$dstY, this$ScriptVM) {
    this.closure$npc = closure$npc;
    this.closure$dstX = closure$dstX;
    this.closure$dstY = closure$dstY;
    this.this$ScriptVM = this$ScriptVM;
    this.time_0 = L400;
  }
  ScriptVM_init$cmd_move$lambda$ObjectLiteral.prototype.update_s8cxhz$ = function (delta) {
    this.time_0 = this.time_0.add(delta);
    if (this.time_0.toNumber() > 100) {
      var p = this.closure$npc.posInMap;
      if (this.closure$dstX < p.x)
        this.closure$npc.walk_rtfsey$(Direction$West_getInstance());
      else if (this.closure$dstX > p.x)
        this.closure$npc.walk_rtfsey$(Direction$East_getInstance());
      else if (this.closure$dstY < p.y)
        this.closure$npc.walk_rtfsey$(Direction$North_getInstance());
      else if (this.closure$dstY > p.y)
        this.closure$npc.walk_rtfsey$(Direction$South_getInstance());
      else
        return false;
      this.time_0 = L0;
    }
    return true;
  };
  ScriptVM_init$cmd_move$lambda$ObjectLiteral.prototype.onKeyUp_za3lpa$ = function (key) {
  };
  ScriptVM_init$cmd_move$lambda$ObjectLiteral.prototype.onKeyDown_za3lpa$ = function (key) {
  };
  ScriptVM_init$cmd_move$lambda$ObjectLiteral.prototype.draw_9in0vv$ = function (canvas) {
    this.this$ScriptVM.game.mainScene.drawScene_9in0vv$(canvas);
  };
  ScriptVM_init$cmd_move$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Operate]
  };
  function ScriptVM_init$cmd_move$lambda(this$ScriptVM, closure$npcId, closure$dstX, closure$dstY) {
    return function (it) {
      var npc = this$ScriptVM.game.mainScene.getNPC_za3lpa$(closure$npcId);
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_move ' + npc.name + ' to (' + closure$dstX + ', ' + closure$dstY + ')');
      return new ScriptVM_init$cmd_move$lambda$ObjectLiteral(npc, closure$dstX, closure$dstY, this$ScriptVM);
    };
  }
  function ScriptVM_init$cmd_move(this$ScriptVM) {
    return function (code, start) {
      var npcId = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
      var dstX = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 2 | 0);
      var dstY = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 4 | 0);
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_move$lambda(this$ScriptVM, npcId, dstX, dstY), null, 6);
    };
  }
  function ScriptVM_init$cmd_callback$lambda(this$ScriptVM) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_callback');
      this$ScriptVM.game.mainScene.exitScript();
      return null;
    };
  }
  function ScriptVM_init$cmd_callback(this$ScriptVM) {
    return function (code, start) {
      var desc = 'callback';
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_callback$lambda(this$ScriptVM), desc, 0);
    };
  }
  function ScriptVM_init$cmd_goto$lambda(closure$start, closure$address, this$ScriptVM) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_goto from ' + closure$start + ' to ' + closure$address);
      this$ScriptVM.game.gotoAddress_za3lpa$(closure$address);
      return null;
    };
  }
  function ScriptVM_init$cmd_goto(this$ScriptVM) {
    return function (code, start) {
      var address = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
      var desc = 'goto ' + address;
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_goto$lambda(start, address, this$ScriptVM), desc, 2);
    };
  }
  function ScriptVM_init$cmd_if$lambda(closure$va, closure$address, this$ScriptVM) {
    return function (it) {
      var value = ScriptResources_getInstance().globalEvents[closure$va];
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_if ' + closure$va + '(=' + value + ') goto ' + closure$address);
      if (value) {
        this$ScriptVM.game.gotoAddress_za3lpa$(closure$address);
      }
      return null;
    };
  }
  function ScriptVM_init$cmd_if(this$ScriptVM) {
    return function (code, start) {
      var va = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
      var address = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 2 | 0);
      var desc = 'if ' + va + ' ' + address;
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_if$lambda(va, address, this$ScriptVM), desc, 4);
    };
  }
  function ScriptVM_init$cmd_set$lambda(closure$id, closure$value) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_set ' + closure$id + ' = ' + closure$value);
      ScriptResources_getInstance().variables[closure$id] = closure$value;
      return null;
    };
  }
  function ScriptVM_init$cmd_set(code, start) {
    var id = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
    var value = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 2 | 0);
    return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_set$lambda(id, value), null, 4);
  }
  function ScriptVM_init$cmd_say$lambda$ObjectLiteral(closure$isAnyKeyDown, closure$iOfNext, closure$text, closure$iOfText, this$ScriptVM, closure$headImg, closure$paint, closure$rWithoutPic, closure$rWithoutTextT, closure$rWithoutTextB, closure$rWithPic, closure$rWithTextT, closure$rWithTextB) {
    this.closure$isAnyKeyDown = closure$isAnyKeyDown;
    this.closure$iOfNext = closure$iOfNext;
    this.closure$text = closure$text;
    this.closure$iOfText = closure$iOfText;
    this.this$ScriptVM = this$ScriptVM;
    this.closure$headImg = closure$headImg;
    this.closure$paint = closure$paint;
    this.closure$rWithoutPic = closure$rWithoutPic;
    this.closure$rWithoutTextT = closure$rWithoutTextT;
    this.closure$rWithoutTextB = closure$rWithoutTextB;
    this.closure$rWithPic = closure$rWithPic;
    this.closure$rWithTextT = closure$rWithTextT;
    this.closure$rWithTextB = closure$rWithTextB;
  }
  ScriptVM_init$cmd_say$lambda$ObjectLiteral.prototype.update_s8cxhz$ = function (delta) {
    if (this.closure$isAnyKeyDown.v) {
      if (this.closure$iOfNext.v >= (this.closure$text.length - 1 | 0)) {
        return false;
      }
       else {
        this.closure$iOfText.v = this.closure$iOfNext.v;
        this.closure$isAnyKeyDown.v = false;
      }
    }
    return true;
  };
  ScriptVM_init$cmd_say$lambda$ObjectLiteral.prototype.onKeyUp_za3lpa$ = function (key) {
  };
  ScriptVM_init$cmd_say$lambda$ObjectLiteral.prototype.onKeyDown_za3lpa$ = function (key) {
    this.closure$isAnyKeyDown.v = true;
  };
  ScriptVM_init$cmd_say$lambda$ObjectLiteral.prototype.draw_9in0vv$ = function (canvas) {
    if (!Combat$Companion_getInstance().IsActive()) {
      this.this$ScriptVM.game.mainScene.drawScene_9in0vv$(canvas);
    }
    if (this.closure$headImg == null) {
      this.closure$paint.color = Global_getInstance().COLOR_WHITE;
      this.closure$paint.style = Paint$Style$FILL_getInstance();
      canvas.drawRect_mw38p4$(this.closure$rWithoutPic, this.closure$paint);
      this.closure$paint.color = Global_getInstance().COLOR_BLACK;
      this.closure$paint.style = Paint$Style$STROKE_getInstance();
      this.closure$paint.strokeWidth = 1;
      canvas.drawRect_mw38p4$(this.closure$rWithoutPic, this.closure$paint);
      this.closure$iOfNext.v = TextRender_getInstance().drawText_tz7kd0$(canvas, this.closure$text, this.closure$iOfText.v, this.closure$rWithoutTextT);
      this.closure$iOfNext.v = TextRender_getInstance().drawText_tz7kd0$(canvas, this.closure$text, this.closure$iOfNext.v, this.closure$rWithoutTextB);
    }
     else {
      this.closure$paint.color = Global_getInstance().COLOR_WHITE;
      this.closure$paint.style = Paint$Style$FILL_getInstance();
      canvas.drawRect_mw38p4$(this.closure$rWithPic, this.closure$paint);
      this.closure$paint.color = Global_getInstance().COLOR_BLACK;
      this.closure$paint.style = Paint$Style$STROKE_getInstance();
      this.closure$paint.strokeWidth = 1;
      canvas.drawRect_mw38p4$(this.closure$rWithPic, this.closure$paint);
      canvas.drawLine_x3aj6j$(38, 50, 44, 56, this.closure$paint);
      canvas.drawLine_gwdwo5$(43.5, 56.0, 151.0, 56.0, this.closure$paint);
      this.closure$headImg.draw_tj1hu5$(canvas, 1, 13, 46);
      this.closure$iOfNext.v = TextRender_getInstance().drawText_tz7kd0$(canvas, this.closure$text, this.closure$iOfText.v, this.closure$rWithTextT);
      this.closure$iOfNext.v = TextRender_getInstance().drawText_tz7kd0$(canvas, this.closure$text, this.closure$iOfNext.v, this.closure$rWithTextB);
    }
  };
  ScriptVM_init$cmd_say$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Operate]
  };
  function ScriptVM_init$cmd_say$lambda(closure$text, closure$isAnyKeyDown, this$ScriptVM, closure$headImg, closure$paint, closure$rWithoutPic, closure$rWithoutTextT, closure$rWithoutTextB, closure$rWithPic, closure$rWithTextT, closure$rWithTextB) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_say ' + gbkString_0(closure$text));
      var iOfText = {v: 0};
      var iOfNext = {v: 0};
      return new ScriptVM_init$cmd_say$lambda$ObjectLiteral(closure$isAnyKeyDown, iOfNext, closure$text, iOfText, this$ScriptVM, closure$headImg, closure$paint, closure$rWithoutPic, closure$rWithoutTextT, closure$rWithoutTextB, closure$rWithPic, closure$rWithTextT, closure$rWithTextB);
    };
  }
  function ScriptVM_init$cmd_say(this$ScriptVM) {
    return function (code, start) {
      var picNum = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
      var text = ScriptVM$Companion_getInstance().getStringBytes_ir89t6$(code, start + 2 | 0);
      var headImg = DatLib$Companion_getInstance().getPic_ydzd23$(1, picNum, true);
      var isAnyKeyDown = {v: false};
      var rWithPic = new RectF(9.0, 50.0, 151.0, 96 - 0.5);
      var rWithTextT = new Rect(44, 58, 145, 75);
      var rWithTextB = new Rect(14, 76, 145, 93);
      var rWithoutPic = new RectF(9.0, 55.0, 151.0, 96 - 0.5);
      var rWithoutTextT = new Rect(14, 58, 145, 75);
      var rWithoutTextB = new Rect(14, 76, 145, 93);
      var paint = new Paint();
      paint.color = Global_getInstance().COLOR_BLACK;
      paint.style = Paint$Style$FILL_AND_STROKE_getInstance();
      var desc = 'say ' + picNum + ' ' + gbkString_0(text);
      var len = 2 + text.length | 0;
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_say$lambda(text, isAnyKeyDown, this$ScriptVM, headImg, paint, rWithoutPic, rWithoutTextT, rWithoutTextB, rWithPic, rWithTextT, rWithTextB), desc, len);
    };
  }
  function ScriptVM_init$cmd_startchapter$lambda(closure$type, closure$index, this$ScriptVM) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_startchapter ' + closure$type + ' ' + closure$index);
      this$ScriptVM.game.mainScene.startChapter_vux9f0$(closure$type, closure$index);
      return null;
    };
  }
  function ScriptVM_init$cmd_startchapter(this$ScriptVM) {
    return function (code, start) {
      var type = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start) & 255;
      var index = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 2 | 0) & 255;
      var desc = 'startchapter ' + type + ' ' + index;
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_startchapter$lambda(type, index, this$ScriptVM), desc, 4);
    };
  }
  function ScriptVM_init$cmd_screens$lambda(closure$x, closure$y, this$ScriptVM) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_screens (' + closure$x + ',' + closure$y + ')');
      this$ScriptVM.game.mainScene.setMapScreenPos_vux9f0$(closure$x, closure$y);
      return null;
    };
  }
  function ScriptVM_init$cmd_screens(this$ScriptVM) {
    return function (code, start) {
      var x = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
      var y = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 2 | 0);
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_screens$lambda(x, y, this$ScriptVM), null, 4);
    };
  }
  function ScriptVM_init$cmd_gameover$lambda(this$ScriptVM) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_gameover');
      this$ScriptVM.game.changeScreen_gacx6e$(ScreenViewType$SCREEN_MENU_getInstance());
      return null;
    };
  }
  function ScriptVM_init$cmd_gameover(this$ScriptVM) {
    return function (code, start) {
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_gameover$lambda(this$ScriptVM), null, 0);
    };
  }
  function ScriptVM_init$cmd_ifcmp$lambda(closure$id, closure$other, closure$addr, this$ScriptVM) {
    return function (it) {
      var value = ScriptResources_getInstance().variables[closure$id];
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_ifcmp ' + closure$id + '(=' + value + ') vs ' + closure$other + ' goto ' + closure$addr);
      if (value === closure$other) {
        this$ScriptVM.game.gotoAddress_za3lpa$(closure$addr);
      }
      return null;
    };
  }
  function ScriptVM_init$cmd_ifcmp(this$ScriptVM) {
    return function (code, start) {
      var id = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
      var other = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 2 | 0);
      var addr = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 4 | 0);
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_ifcmp$lambda(id, other, addr, this$ScriptVM), null, 6);
    };
  }
  function ScriptVM_init$cmd_add$lambda(closure$va, closure$value) {
    return function (it) {
      var tmp$;
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_add');
      tmp$ = ScriptResources_getInstance().variables;
      tmp$[closure$va] = tmp$[closure$va] + closure$value | 0;
      return null;
    };
  }
  function ScriptVM_init$cmd_add(code, start) {
    var va = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
    var value = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 2 | 0);
    return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_add$lambda(va, value), null, 4);
  }
  function ScriptVM_init$cmd_sub$lambda(closure$va, closure$value) {
    return function (it) {
      var tmp$;
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_sub');
      tmp$ = ScriptResources_getInstance().variables;
      tmp$[closure$va] = tmp$[closure$va] - closure$value | 0;
      return null;
    };
  }
  function ScriptVM_init$cmd_sub(code, start) {
    var va = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
    var value = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 2 | 0);
    return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_sub$lambda(va, value), null, 4);
  }
  function ScriptVM_init$cmd_setcontrolid$lambda(closure$code, closure$start, this$ScriptVM) {
    return function (it) {
      var id = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start);
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_setcontrolid ' + id);
      this$ScriptVM.game.mainScene.setControlPlayer_za3lpa$(id);
      return null;
    };
  }
  function ScriptVM_init$cmd_setcontrolid(this$ScriptVM) {
    return function (code, start) {
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_setcontrolid$lambda(code, start, this$ScriptVM), null, 2);
    };
  }
  function ScriptVM_init$cmd_setevent$lambda(closure$event) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_setevent ' + closure$event);
      ScriptResources_getInstance().setEvent_za3lpa$(closure$event);
      return null;
    };
  }
  function ScriptVM_init$cmd_setevent(code, start) {
    var event = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
    return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_setevent$lambda(event), null, 2);
  }
  function ScriptVM_init$cmd_clrevent$lambda(closure$event) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_clrevent ' + closure$event);
      ScriptResources_getInstance().clearEvent_za3lpa$(closure$event);
      return null;
    };
  }
  function ScriptVM_init$cmd_clrevent(code, start) {
    var event = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
    return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_clrevent$lambda(event), null, 2);
  }
  function ScriptVM_init$cmd_buy$lambda(this$ScriptVM, closure$bytes) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_buy');
      return new OperateBuy(this$ScriptVM, closure$bytes);
    };
  }
  function ScriptVM_init$cmd_buy(this$ScriptVM) {
    return function (code, start) {
      var bytes = ScriptVM$Companion_getInstance().getStringBytes_ir89t6$(code, start);
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_buy$lambda(this$ScriptVM, bytes), null, bytes.length);
    };
  }
  function ScriptVM_init$cmd_facetoface$getCharacter(this$ScriptVM) {
    return function (id) {
      var tmp$;
      if (id === 0) {
        tmp$ = ensureNotNull(this$ScriptVM.game.mainScene.player);
      }
       else
        tmp$ = this$ScriptVM.game.mainScene.getNPC_za3lpa$(id);
      return tmp$;
    };
  }
  function ScriptVM_init$cmd_facetoface$lambda$ObjectLiteral(this$ScriptVM) {
    this.this$ScriptVM = this$ScriptVM;
    OperateDrawOnce.call(this);
  }
  ScriptVM_init$cmd_facetoface$lambda$ObjectLiteral.prototype.drawOnce_9in0vv$ = function (canvas) {
    this.this$ScriptVM.game.mainScene.drawScene_9in0vv$(canvas);
  };
  ScriptVM_init$cmd_facetoface$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [OperateDrawOnce]
  };
  function ScriptVM_init$cmd_facetoface$lambda(closure$id0, closure$getCharacter, closure$id1, this$ScriptVM) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_facetoface');
      var c1 = closure$getCharacter(closure$id0);
      var c2 = closure$getCharacter(closure$id1);
      var p1 = c1.posInMap;
      var p2 = c2.posInMap;
      if (p1.x > p2.x) {
        c2.direction = Direction$East_getInstance();
      }
       else if (p1.x < p2.x) {
        c2.direction = Direction$West_getInstance();
      }
       else {
        if (p1.y > p2.y) {
          c2.direction = Direction$South_getInstance();
        }
         else if (p1.y < p2.y) {
          c2.direction = Direction$North_getInstance();
        }
      }
      return new ScriptVM_init$cmd_facetoface$lambda$ObjectLiteral(this$ScriptVM);
    };
  }
  function ScriptVM_init$cmd_facetoface(this$ScriptVM) {
    return function (code, start) {
      var id0 = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
      var id1 = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 2 | 0);
      var getCharacter = ScriptVM_init$cmd_facetoface$getCharacter(this$ScriptVM);
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_facetoface$lambda(id0, getCharacter, id1, this$ScriptVM), null, 4);
    };
  }
  function ScriptVM_init$cmd_movie$lambda$ObjectLiteral(closure$ctl, closure$movie, this$ScriptVM, closure$x, closure$y) {
    this.closure$ctl = closure$ctl;
    this.closure$movie = closure$movie;
    this.this$ScriptVM = this$ScriptVM;
    this.closure$x = closure$x;
    this.closure$y = closure$y;
    this.downKey_8be2vx$ = 0;
    this.isAnyKeyPressed_8be2vx$ = false;
  }
  ScriptVM_init$cmd_movie$lambda$ObjectLiteral.prototype.update_s8cxhz$ = function (delta) {
    var tmp$;
    if ((this.closure$ctl === 1 || this.closure$ctl === 3) && this.isAnyKeyPressed_8be2vx$) {
      tmp$ = false;
    }
     else
      tmp$ = this.closure$movie.update_s8cxhz$(delta);
    return tmp$;
  };
  ScriptVM_init$cmd_movie$lambda$ObjectLiteral.prototype.onKeyUp_za3lpa$ = function (key) {
    if (key === this.downKey_8be2vx$) {
      this.isAnyKeyPressed_8be2vx$ = true;
    }
  };
  ScriptVM_init$cmd_movie$lambda$ObjectLiteral.prototype.onKeyDown_za3lpa$ = function (key) {
    this.downKey_8be2vx$ = key;
  };
  ScriptVM_init$cmd_movie$lambda$ObjectLiteral.prototype.draw_9in0vv$ = function (canvas) {
    if (this.closure$ctl === 2 || this.closure$ctl === 3) {
      this.this$ScriptVM.game.mainScene.drawScene_9in0vv$(canvas);
    }
    this.closure$movie.draw_2g4tob$(canvas, this.closure$x, this.closure$y);
  };
  ScriptVM_init$cmd_movie$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Operate]
  };
  function ScriptVM_init$cmd_movie$lambda(closure$type, closure$index, closure$ctl, this$ScriptVM, closure$x, closure$y) {
    return function (it) {
      var tmp$, tmp$_0;
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_movie');
      tmp$_0 = (tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$SRS_getInstance(), closure$type, closure$index)) == null || Kotlin.isType(tmp$, ResSrs) ? tmp$ : throwCCE();
      if (tmp$_0 == null) {
        return null;
      }
      var movie = tmp$_0;
      movie.setIteratorNum_za3lpa$(5);
      movie.start();
      return new ScriptVM_init$cmd_movie$lambda$ObjectLiteral(closure$ctl, movie, this$ScriptVM, closure$x, closure$y);
    };
  }
  function ScriptVM_init$cmd_movie(this$ScriptVM) {
    return function (code, start) {
      var type = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
      var index = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 2 | 0);
      var x = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 4 | 0);
      var y = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 6 | 0);
      var ctl = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 8 | 0);
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_movie$lambda(type, index, ctl, this$ScriptVM, x, y), null, 10);
    };
  }
  function ScriptVM_init$cmd_choice$lambda$ObjectLiteral(this$ScriptVM, closure$address, closure$bg, closure$bgx, closure$bgy, closure$choice1, closure$choice2) {
    this.this$ScriptVM = this$ScriptVM;
    this.closure$address = closure$address;
    this.closure$bg = closure$bg;
    this.closure$bgx = closure$bgx;
    this.closure$bgy = closure$bgy;
    this.closure$choice1 = closure$choice1;
    this.closure$choice2 = closure$choice2;
    this.curChoice_0 = 0;
    this.hasSelect_0 = false;
    this.mLastDownKey_0 = -1;
  }
  ScriptVM_init$cmd_choice$lambda$ObjectLiteral.prototype.update_s8cxhz$ = function (delta) {
    if (this.hasSelect_0) {
      if (this.curChoice_0 === 1) {
        this.this$ScriptVM.game.gotoAddress_za3lpa$(this.closure$address);
      }
      return false;
    }
    return true;
  };
  ScriptVM_init$cmd_choice$lambda$ObjectLiteral.prototype.onKeyUp_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_ENTER && this.mLastDownKey_0 === key) {
      this.hasSelect_0 = true;
    }
  };
  ScriptVM_init$cmd_choice$lambda$ObjectLiteral.prototype.onKeyDown_za3lpa$ = function (key) {
    switch (key) {
      case 2:
      case 1:
      case 3:
      case 4:
        this.curChoice_0 = 1 - this.curChoice_0 | 0;
        break;
    }
    this.mLastDownKey_0 = key;
  };
  ScriptVM_init$cmd_choice$lambda$ObjectLiteral.prototype.draw_9in0vv$ = function (canvas) {
    this.this$ScriptVM.game.mainScene.drawScene_9in0vv$(canvas);
    canvas.drawBitmap_t8cslu$(this.closure$bg, this.closure$bgx, this.closure$bgy);
    if (this.curChoice_0 === 0) {
      TextRender_getInstance().drawSelText_pbrmiz$(canvas, this.closure$choice1.v, this.closure$bgx + 3 | 0, this.closure$bgy + 3 | 0);
      TextRender_getInstance().drawText_pbrmiz$(canvas, this.closure$choice2.v, this.closure$bgx + 3 | 0, this.closure$bgy + 3 + 16 | 0);
    }
     else {
      TextRender_getInstance().drawText_pbrmiz$(canvas, this.closure$choice1.v, this.closure$bgx + 3 | 0, this.closure$bgy + 3 | 0);
      TextRender_getInstance().drawSelText_pbrmiz$(canvas, this.closure$choice2.v, this.closure$bgx + 3 | 0, this.closure$bgy + 3 + 16 | 0);
    }
  };
  ScriptVM_init$cmd_choice$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Operate]
  };
  function ScriptVM_init$cmd_choice$lambda(this$ScriptVM, closure$address, closure$bg, closure$bgx, closure$bgy, closure$choice1, closure$choice2) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_choice');
      return new ScriptVM_init$cmd_choice$lambda$ObjectLiteral(this$ScriptVM, closure$address, closure$bg, closure$bgx, closure$bgy, closure$choice1, closure$choice2);
    };
  }
  function ScriptVM_init$cmd_choice(this$ScriptVM) {
    return function (code, start) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      var choice1 = {v: ScriptVM$Companion_getInstance().getStringBytes_ir89t6$(code, start)};
      var choice2 = {v: ScriptVM$Companion_getInstance().getStringBytes_ir89t6$(code, start + choice1.v.length | 0)};
      var addrOffset = choice1.v.length + choice2.v.length | 0;
      var address = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + addrOffset | 0);
      var w;
      var tmp;
      var bg;
      var bgx;
      var bgy;
      if (choice1.v.length > choice2.v.length) {
        w = (choice1.v.length * 8 | 0) - 8 + 6 | 0;
        tmp = new Int8Array(choice1.v.length);
        System_getInstance().arraycopy_nlwz52$(choice2.v, 0, tmp, 0, choice2.v.length);
        tmp$ = choice2.v.length - 1 | 0;
        tmp$_0 = tmp.length;
        for (var i = tmp$; i < tmp$_0; i++) {
          tmp[i] = toByte(32 | 0);
        }
        tmp[tmp.length - 1 | 0] = 0;
        choice2.v = tmp;
      }
       else {
        w = (choice2.v.length * 8 | 0) - 8 + 6 | 0;
        tmp = new Int8Array(choice2.v.length);
        System_getInstance().arraycopy_nlwz52$(choice1.v, 0, tmp, 0, choice1.v.length);
        tmp$_1 = choice1.v.length - 1 | 0;
        tmp$_2 = tmp.length;
        for (var i_0 = tmp$_1; i_0 < tmp$_2; i_0++) {
          tmp[i_0] = toByte(32 | 0);
        }
        tmp[tmp.length - 1 | 0] = 0;
        choice1.v = tmp;
      }
      bg = Util_getInstance().getFrameBitmap_vux9f0$(w, 38);
      bgx = (160 - bg.width | 0) / 2 | 0;
      bgy = (96 - bg.height | 0) / 2 | 0;
      var desc = 'choice ' + gbkString_0(choice1.v) + ' ' + gbkString_0(choice2.v) + ' ' + address;
      var len = addrOffset + 2 | 0;
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_choice$lambda(this$ScriptVM, address, bg, bgx, bgy, choice1, choice2), desc, len);
    };
  }
  function ScriptVM_init$cmd_createbox$lambda(this$ScriptVM, closure$id, closure$boxId, closure$x, closure$y) {
    return function (it) {
      var box = this$ScriptVM.game.mainScene.createBox_tjonv8$(closure$id, closure$boxId, closure$x, closure$y);
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_createbox ' + box.name + ' at (' + closure$x + ',' + closure$y + ')');
      return null;
    };
  }
  function ScriptVM_init$cmd_createbox(this$ScriptVM) {
    return function (code, start) {
      var id = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
      var boxId = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 2 | 0);
      var x = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 4 | 0);
      var y = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 6 | 0);
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_createbox$lambda(this$ScriptVM, id, boxId, x, y), null, 8);
    };
  }
  function ScriptVM_init$cmd_deletebox$lambda(this$ScriptVM, closure$boxid) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_deletebox');
      this$ScriptVM.game.mainScene.deleteBox_za3lpa$(closure$boxid);
      return null;
    };
  }
  function ScriptVM_init$cmd_deletebox(this$ScriptVM) {
    return function (code, start) {
      var boxid = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_deletebox$lambda(this$ScriptVM, boxid), null, 2);
    };
  }
  function ScriptVM_init$cmd_gaingoods$lambda$ObjectLiteral(closure$msg) {
    this.closure$msg = closure$msg;
    this.time_8be2vx$ = L0;
    this.isAnyKeyPressed_8be2vx$ = false;
    this.downKey_8be2vx$ = 0;
  }
  ScriptVM_init$cmd_gaingoods$lambda$ObjectLiteral.prototype.update_s8cxhz$ = function (delta) {
    this.time_8be2vx$ = this.time_8be2vx$.add(delta);
    return !(this.time_8be2vx$.toNumber() > 1000 || this.isAnyKeyPressed_8be2vx$);
  };
  ScriptVM_init$cmd_gaingoods$lambda$ObjectLiteral.prototype.onKeyUp_za3lpa$ = function (key) {
    if (key === this.downKey_8be2vx$) {
      this.isAnyKeyPressed_8be2vx$ = true;
    }
  };
  ScriptVM_init$cmd_gaingoods$lambda$ObjectLiteral.prototype.onKeyDown_za3lpa$ = function (key) {
    this.downKey_8be2vx$ = key;
  };
  ScriptVM_init$cmd_gaingoods$lambda$ObjectLiteral.prototype.draw_9in0vv$ = function (canvas) {
    Util_getInstance().showMessage_g6cl4j$(canvas, this.closure$msg);
  };
  ScriptVM_init$cmd_gaingoods$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Operate]
  };
  function ScriptVM_init$cmd_gaingoods$lambda(closure$goods, closure$msg) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_gaingoods ' + closure$goods.name);
      closure$goods.goodsNum = 1;
      Player$Companion_getInstance().sGoodsList.addGoods_vux9f0$(closure$goods.type, closure$goods.index);
      return new ScriptVM_init$cmd_gaingoods$lambda$ObjectLiteral(closure$msg);
    };
  }
  function ScriptVM_init$cmd_gaingoods(code, start) {
    var tmp$;
    var goods = Kotlin.isType(tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$GRS_getInstance(), ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start), ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 2 | 0)), BaseGoods) ? tmp$ : throwCCE();
    var msg = '\u83B7\u5F97:' + goods.name;
    return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_gaingoods$lambda(goods, msg), null, 4);
  }
  function ScriptVM_init$cmd_initfight$lambda(this$ScriptVM, closure$arr, closure$scrb, closure$scrl, closure$scrr) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_initfight');
      Combat$Companion_getInstance().InitFight_qk7mas$(this$ScriptVM, closure$arr, closure$scrb, closure$scrl, closure$scrr);
      return null;
    };
  }
  function ScriptVM_init$cmd_initfight(this$ScriptVM) {
    return function (code, start) {
      var scrb = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 16 | 0);
      var scrl = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 18 | 0);
      var scrr = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 20 | 0);
      var arr = new Int32Array(8);
      for (var i = 0; i <= 7; i++) {
        arr[i] = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + (i * 2 | 0) | 0);
      }
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_initfight$lambda(this$ScriptVM, arr, scrb, scrl, scrr), null, 22);
    };
  }
  function ScriptVM_init$cmd_fightenable$lambda(it) {
    ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_fightenable');
    Combat$Companion_getInstance().FightEnable();
    return null;
  }
  function ScriptVM_init$cmd_fightenable(code, start) {
    return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_fightenable$lambda, null, 0);
  }
  function ScriptVM_init$cmd_fightdisenable$lambda(it) {
    ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_fightdisable');
    Combat$Companion_getInstance().FightDisable();
    return null;
  }
  function ScriptVM_init$cmd_fightdisenable(code, start) {
    return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_fightdisenable$lambda, null, 0);
  }
  function ScriptVM_init$cmd_createnpc$lambda(this$ScriptVM, closure$id, closure$resId, closure$x, closure$y) {
    return function (it) {
      var npc = this$ScriptVM.game.mainScene.createNpc_tjonv8$(closure$id, closure$resId, closure$x, closure$y);
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_createnpc ' + npc.name + ' at ' + npc.posInMap);
      return null;
    };
  }
  function ScriptVM_init$cmd_createnpc(this$ScriptVM) {
    return function (code, start) {
      var id = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
      var resId = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 2 | 0);
      var x = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 4 | 0);
      var y = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 6 | 0);
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_createnpc$lambda(this$ScriptVM, id, resId, x, y), null, 8);
    };
  }
  function ScriptVM_init$cmd_enterfight$lambda(closure$code, closure$start, this$ScriptVM) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_enterfight');
      var monstersType = new Int32Array([ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start + 2 | 0), ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start + 4 | 0), ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start + 6 | 0)]);
      var scr = new Int32Array([ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start + 8 | 0), ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start + 10 | 0), ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start + 12 | 0)]);
      var evtRnds = new Int32Array([ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start + 14 | 0), ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start + 16 | 0), ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start + 18 | 0)]);
      var evts = new Int32Array([ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start + 20 | 0), ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start + 22 | 0), ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start + 24 | 0)]);
      var lossto = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start + 26 | 0);
      var winto = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start + 28 | 0);
      Combat$Companion_getInstance().EnterFight_dnhp7$(this$ScriptVM, ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start), monstersType, scr, evtRnds, evts, lossto, winto);
      this$ScriptVM.game.exitScript();
      return null;
    };
  }
  function ScriptVM_init$cmd_enterfight(this$ScriptVM) {
    return function (code, start) {
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_enterfight$lambda(code, start, this$ScriptVM), null, 30);
    };
  }
  function ScriptVM_init$cmd_deleteactor$lambda(this$ScriptVM, closure$id) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_deleteactor');
      this$ScriptVM.game.mainScene.deleteActor_za3lpa$(closure$id);
      return null;
    };
  }
  function ScriptVM_init$cmd_deleteactor(this$ScriptVM) {
    return function (code, start) {
      var id = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_deleteactor$lambda(this$ScriptVM, id), null, 2);
    };
  }
  function ScriptVM_init$cmd_gainmoney$lambda(closure$value) {
    return function (it) {
      var tmp$;
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_gainmoney');
      tmp$ = Player$Companion_getInstance();
      tmp$.sMoney = tmp$.sMoney + closure$value | 0;
      return null;
    };
  }
  function ScriptVM_init$cmd_gainmoney(code, start) {
    var value = ScriptVM$Companion_getInstance().get4BytesInt_ir89t6$(code, start);
    return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_gainmoney$lambda(value), null, 4);
  }
  function ScriptVM_init$cmd_usemoney$lambda(closure$value) {
    return function (it) {
      var tmp$;
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_usemoney');
      tmp$ = Player$Companion_getInstance();
      tmp$.sMoney = tmp$.sMoney - closure$value | 0;
      return null;
    };
  }
  function ScriptVM_init$cmd_usemoney(code, start) {
    var value = ScriptVM$Companion_getInstance().get4BytesInt_ir89t6$(code, start);
    return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_usemoney$lambda(value), null, 4);
  }
  function ScriptVM_init$cmd_setmoney$lambda(closure$money) {
    return function (it) {
      Player$Companion_getInstance().sMoney = closure$money;
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_setmoney ' + closure$money);
      return null;
    };
  }
  function ScriptVM_init$cmd_setmoney(code, start) {
    var money = ScriptVM$Companion_getInstance().get4BytesInt_ir89t6$(code, start);
    return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_setmoney$lambda(money), null, 4);
  }
  function ScriptVM_init$cmd_learnmagic$lambda$ObjectLiteral(closure$tip) {
    this.closure$tip = closure$tip;
    this.isAnyKeyDown = false;
    this.timeCnt = L0;
  }
  ScriptVM_init$cmd_learnmagic$lambda$ObjectLiteral.prototype.update_s8cxhz$ = function (delta) {
    this.timeCnt = this.timeCnt.add(delta);
    return this.timeCnt.toNumber() < 1000 && !this.isAnyKeyDown;
  };
  ScriptVM_init$cmd_learnmagic$lambda$ObjectLiteral.prototype.onKeyUp_za3lpa$ = function (key) {
  };
  ScriptVM_init$cmd_learnmagic$lambda$ObjectLiteral.prototype.onKeyDown_za3lpa$ = function (key) {
  };
  ScriptVM_init$cmd_learnmagic$lambda$ObjectLiteral.prototype.draw_9in0vv$ = function (canvas) {
    this.closure$tip.draw_9in0vv$(canvas);
  };
  ScriptVM_init$cmd_learnmagic$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Operate]
  };
  function ScriptVM_init$cmd_learnmagic$lambda(closure$type, closure$index, this$ScriptVM, closure$actorId) {
    return function (it) {
      var tmp$;
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_learmagic');
      var magic = DatLib$Companion_getInstance().getMrs_vux9f0$(closure$type, closure$index);
      var player = this$ScriptVM.game.mainScene.getPlayer_za3lpa$(closure$actorId);
      player != null ? (player.learnMagic_3fncnk$(magic), Unit) : null;
      var playerName = (tmp$ = player != null ? player.name : null) != null ? tmp$ : 'E';
      var tip = new LearnMagicScreen(this$ScriptVM, playerName, magic.magicName);
      return new ScriptVM_init$cmd_learnmagic$lambda$ObjectLiteral(tip);
    };
  }
  function ScriptVM_init$cmd_learnmagic(this$ScriptVM) {
    return function (code, start) {
      var actorId = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
      var type = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 2 | 0);
      var index = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 4 | 0);
      var desc = 'learnmagic ' + actorId + ' ' + type + ' ' + index;
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_learnmagic$lambda(type, index, this$ScriptVM, actorId), desc, 6);
    };
  }
  function ScriptVM_init$cmd_sale$lambda(this$ScriptVM) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_sale');
      var op = new OperateSale(this$ScriptVM);
      var list = ArrayList_init();
      list.addAll_brywnq$(Player$Companion_getInstance().sGoodsList.goodsList);
      list.addAll_brywnq$(Player$Companion_getInstance().sGoodsList.equipList);
      this$ScriptVM.pushScreen_2o7n0o$(new ScreenGoodsList(this$ScriptVM, list, op, ScreenGoodsList$Mode$Sale_getInstance()));
      return op;
    };
  }
  function ScriptVM_init$cmd_sale(this$ScriptVM) {
    return function (code, start) {
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_sale$lambda(this$ScriptVM), null, 0);
    };
  }
  function ScriptVM_init$cmd_npcmovemod$lambda(closure$state, this$ScriptVM, closure$id) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_npcmovemod');
      this$ScriptVM.game.mainScene.getNPC_za3lpa$(closure$id).state = Character$State$Companion_getInstance().fromInt_za3lpa$(closure$state);
      return null;
    };
  }
  function ScriptVM_init$cmd_npcmovemod(this$ScriptVM) {
    return function (code, start) {
      var id = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
      var state = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 2 | 0);
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_npcmovemod$lambda(state, this$ScriptVM, id), null, 4);
    };
  }
  function ScriptVM_init$cmd_message$lambda$ObjectLiteral(closure$msg) {
    this.closure$msg = closure$msg;
    this.downKey_8be2vx$ = 0;
    this.isAnyKeyDown_8be2vx$ = false;
  }
  ScriptVM_init$cmd_message$lambda$ObjectLiteral.prototype.update_s8cxhz$ = function (delta) {
    return !this.isAnyKeyDown_8be2vx$;
  };
  ScriptVM_init$cmd_message$lambda$ObjectLiteral.prototype.onKeyUp_za3lpa$ = function (key) {
    if (this.downKey_8be2vx$ === key) {
      this.isAnyKeyDown_8be2vx$ = true;
    }
  };
  ScriptVM_init$cmd_message$lambda$ObjectLiteral.prototype.onKeyDown_za3lpa$ = function (key) {
    this.downKey_8be2vx$ = key;
  };
  ScriptVM_init$cmd_message$lambda$ObjectLiteral.prototype.draw_9in0vv$ = function (canvas) {
    Util_getInstance().showMessage_2yb3jp$(canvas, this.closure$msg);
  };
  ScriptVM_init$cmd_message$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Operate]
  };
  function ScriptVM_init$cmd_message$lambda(closure$msg) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_message ' + gbkString_0(closure$msg));
      return new ScriptVM_init$cmd_message$lambda$ObjectLiteral(closure$msg);
    };
  }
  function ScriptVM_init$cmd_message(code, start) {
    var msg = ScriptVM$Companion_getInstance().getStringBytes_ir89t6$(code, start);
    var desc = 'message ' + gbkString_0(msg);
    return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_message$lambda(msg), desc, msg.length);
  }
  function ScriptVM_init$cmd_deletegoods$lambda(closure$type, closure$index, this$ScriptVM, closure$address) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_deletegoods');
      var r = Player$Companion_getInstance().sGoodsList.deleteGoods_vux9f0$(closure$type, closure$index);
      if (!r) {
        this$ScriptVM.game.gotoAddress_za3lpa$(closure$address);
      }
      return null;
    };
  }
  function ScriptVM_init$cmd_deletegoods(this$ScriptVM) {
    return function (code, start) {
      var type = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
      var index = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 2 | 0);
      var address = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 2 | 0);
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_deletegoods$lambda(type, index, this$ScriptVM, address), null, 6);
    };
  }
  function ScriptVM_init$cmd_resumeactorhp$lambda(this$ScriptVM, closure$id, closure$value) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_resumeactorhp');
      var p = this$ScriptVM.game.mainScene.getPlayer_za3lpa$(closure$id);
      if (p != null) {
        p.hp = Kotlin.imul(p.maxHP, closure$value) / 100 | 0;
      }
      return null;
    };
  }
  function ScriptVM_init$cmd_resumeactorhp(this$ScriptVM) {
    return function (code, start) {
      var id = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
      var value = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 2 | 0);
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_resumeactorhp$lambda(this$ScriptVM, id, value), null, 4);
    };
  }
  function ScriptVM_init$cmd_actorlayerup$lambda$ObjectLiteral(closure$msgScreen, closure$levelupScreen) {
    this.closure$msgScreen = closure$msgScreen;
    this.closure$levelupScreen = closure$levelupScreen;
    this.exit = false;
    this.keydown = false;
  }
  ScriptVM_init$cmd_actorlayerup$lambda$ObjectLiteral.prototype.update_s8cxhz$ = function (delta) {
    return !this.exit;
  };
  ScriptVM_init$cmd_actorlayerup$lambda$ObjectLiteral.prototype.onKeyUp_za3lpa$ = function (key) {
    if (this.keydown) {
      this.exit = true;
    }
  };
  ScriptVM_init$cmd_actorlayerup$lambda$ObjectLiteral.prototype.onKeyDown_za3lpa$ = function (key) {
    this.keydown = true;
  };
  ScriptVM_init$cmd_actorlayerup$lambda$ObjectLiteral.prototype.draw_9in0vv$ = function (canvas) {
    this.closure$msgScreen.draw_9in0vv$(canvas);
    this.closure$levelupScreen.draw_9in0vv$(canvas);
  };
  ScriptVM_init$cmd_actorlayerup$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Operate]
  };
  function ScriptVM_init$cmd_actorlayerup$lambda(this$ScriptVM, closure$actor, closure$toLevel) {
    return function (it) {
      var tmp$;
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_actorlayerup');
      tmp$ = this$ScriptVM.game.mainScene.getPlayer_za3lpa$(closure$actor);
      if (tmp$ == null) {
        return null;
      }
      var player = tmp$;
      if (closure$toLevel <= player.level) {
        return null;
      }
      player.levelUp_za3lpa$(closure$toLevel);
      var msgScreen = MsgScreen_init(this$ScriptVM, player.name + '\u4FEE\u884C\u63D0\u5347');
      var levelupScreen = new LevelupScreen(this$ScriptVM, player);
      return new ScriptVM_init$cmd_actorlayerup$lambda$ObjectLiteral(msgScreen, levelupScreen);
    };
  }
  function ScriptVM_init$cmd_actorlayerup(this$ScriptVM) {
    return function (code, start) {
      var actor = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
      var toLevel = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 2 | 0);
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_actorlayerup$lambda(this$ScriptVM, actor, toLevel), null, 4);
    };
  }
  function ScriptVM_init$cmd_boxopen$lambda(this$ScriptVM, closure$id) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_boxopen');
      var box = this$ScriptVM.game.mainScene.getNPC_za3lpa$(closure$id);
      box.step = 1;
      return null;
    };
  }
  function ScriptVM_init$cmd_boxopen(this$ScriptVM) {
    return function (code, start) {
      var id = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_boxopen$lambda(this$ScriptVM, id), null, 2);
    };
  }
  function ScriptVM_init$cmd_delallnpc$lambda(this$ScriptVM) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_delallnpc');
      this$ScriptVM.game.mainScene.deleteAllNpc();
      return null;
    };
  }
  function ScriptVM_init$cmd_delallnpc(this$ScriptVM) {
    return function (code, start) {
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_delallnpc$lambda(this$ScriptVM), null, 0);
    };
  }
  function ScriptVM_init$cmd_npcstep$lambda$ObjectLiteral(closure$interval, this$ScriptVM) {
    this.closure$interval = closure$interval;
    this.this$ScriptVM = this$ScriptVM;
    this.time_8be2vx$ = L0;
  }
  ScriptVM_init$cmd_npcstep$lambda$ObjectLiteral.prototype.update_s8cxhz$ = function (delta) {
    this.time_8be2vx$ = this.time_8be2vx$.add(delta);
    return this.time_8be2vx$.compareTo_11rb$(this.closure$interval) < 0;
  };
  ScriptVM_init$cmd_npcstep$lambda$ObjectLiteral.prototype.onKeyUp_za3lpa$ = function (key) {
  };
  ScriptVM_init$cmd_npcstep$lambda$ObjectLiteral.prototype.onKeyDown_za3lpa$ = function (key) {
  };
  ScriptVM_init$cmd_npcstep$lambda$ObjectLiteral.prototype.draw_9in0vv$ = function (canvas) {
    this.this$ScriptVM.game.mainScene.drawScene_9in0vv$(canvas);
  };
  ScriptVM_init$cmd_npcstep$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Operate]
  };
  function ScriptVM_init$cmd_npcstep$lambda(closure$id, closure$d, closure$step, this$ScriptVM) {
    return function (it) {
      var tmp$;
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_npcstep ' + closure$id + ' ' + closure$d + ' step=' + closure$step);
      var interval;
      if (closure$id === 0) {
        var p = ensureNotNull(this$ScriptVM.game.mainScene.player);
        p.direction = closure$d;
        p.step = closure$step;
        interval = L300;
      }
       else {
        var npc = this$ScriptVM.game.mainScene.getNPC_za3lpa$(closure$id);
        npc.direction = closure$d;
        npc.step = closure$step;
        if (this$ScriptVM.game.mainScene.isNpcVisible_l8hog8$(npc)) {
          tmp$ = L300;
        }
         else {
          tmp$ = L0;
        }
        interval = tmp$;
      }
      return new ScriptVM_init$cmd_npcstep$lambda$ObjectLiteral(interval, this$ScriptVM);
    };
  }
  function ScriptVM_init$cmd_npcstep(this$ScriptVM) {
    return function (code, start) {
      var tmp$;
      var id = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
      var faceto = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 2 | 0);
      var step = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 4 | 0);
      switch (faceto) {
        case 0:
          tmp$ = Direction$North_getInstance();
          break;
        case 1:
          tmp$ = Direction$East_getInstance();
          break;
        case 2:
          tmp$ = Direction$South_getInstance();
          break;
        case 3:
          tmp$ = Direction$West_getInstance();
          break;
        default:tmp$ = Direction$South_getInstance();
          break;
      }
      var d = tmp$;
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_npcstep$lambda(id, d, step, this$ScriptVM), null, 6);
    };
  }
  function ScriptVM_init$cmd_setscenename$lambda(closure$name, this$ScriptVM) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_setscenname ' + closure$name);
      this$ScriptVM.game.mainScene.sceneName = closure$name;
      return null;
    };
  }
  function ScriptVM_init$cmd_setscenename(this$ScriptVM) {
    return function (code, start) {
      var bytes = ScriptVM$Companion_getInstance().getStringBytes_ir89t6$(code, start);
      var name = gbkString_0(bytes);
      var desc = 'setscenename ' + name;
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_setscenename$lambda(name, this$ScriptVM), desc, bytes.length);
    };
  }
  function ScriptVM_init$cmd_showscenename$lambda$ObjectLiteral(closure$time, closure$isAnyKeyDown, this$ScriptVM, closure$text) {
    this.closure$time = closure$time;
    this.closure$isAnyKeyDown = closure$isAnyKeyDown;
    this.this$ScriptVM = this$ScriptVM;
    this.closure$text = closure$text;
  }
  ScriptVM_init$cmd_showscenename$lambda$ObjectLiteral.prototype.update_s8cxhz$ = function (delta) {
    this.closure$time.v = this.closure$time.v.add(delta);
    if (this.closure$time.v.toNumber() > 100 && this.closure$isAnyKeyDown.v) {
      this.closure$isAnyKeyDown.v = false;
      return false;
    }
    return this.closure$time.v.toNumber() < 1000;
  };
  ScriptVM_init$cmd_showscenename$lambda$ObjectLiteral.prototype.onKeyUp_za3lpa$ = function (key) {
  };
  ScriptVM_init$cmd_showscenename$lambda$ObjectLiteral.prototype.onKeyDown_za3lpa$ = function (key) {
    this.closure$isAnyKeyDown.v = true;
  };
  ScriptVM_init$cmd_showscenename$lambda$ObjectLiteral.prototype.draw_9in0vv$ = function (canvas) {
    this.this$ScriptVM.game.mainScene.drawScene_9in0vv$(canvas);
    Util_getInstance().showInformation_g6cl4j$(canvas, this.closure$text);
  };
  ScriptVM_init$cmd_showscenename$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Operate]
  };
  function ScriptVM_init$cmd_showscenename$lambda(this$ScriptVM) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_showscenename');
      var text = this$ScriptVM.game.mainScene.sceneName;
      var time = {v: L0};
      var isAnyKeyDown = {v: false};
      return new ScriptVM_init$cmd_showscenename$lambda$ObjectLiteral(time, isAnyKeyDown, this$ScriptVM, text);
    };
  }
  function ScriptVM_init$cmd_showscenename(this$ScriptVM) {
    return function (code, start) {
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_showscenename$lambda(this$ScriptVM), null, 0);
    };
  }
  function ScriptVM_init$cmd_showscreen$lambda$ObjectLiteral(this$ScriptVM) {
    this.this$ScriptVM = this$ScriptVM;
    OperateDrawOnce.call(this);
  }
  ScriptVM_init$cmd_showscreen$lambda$ObjectLiteral.prototype.drawOnce_9in0vv$ = function (canvas) {
    this.this$ScriptVM.game.mainScene.drawScene_9in0vv$(canvas);
  };
  ScriptVM_init$cmd_showscreen$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [OperateDrawOnce]
  };
  function ScriptVM_init$cmd_showscreen$lambda(this$ScriptVM) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_showscreen');
      return new ScriptVM_init$cmd_showscreen$lambda$ObjectLiteral(this$ScriptVM);
    };
  }
  function ScriptVM_init$cmd_showscreen(this$ScriptVM) {
    return function (code, start) {
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_showscreen$lambda(this$ScriptVM), null, 0);
    };
  }
  function ScriptVM_init$cmd_usegoods$lambda(closure$type, closure$index, this$ScriptVM, closure$address) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_usegoods');
      var b = Player$Companion_getInstance().sGoodsList.deleteGoods_vux9f0$(closure$type, closure$index);
      if (!b) {
        this$ScriptVM.game.gotoAddress_za3lpa$(closure$address);
      }
      return null;
    };
  }
  function ScriptVM_init$cmd_usegoods(this$ScriptVM) {
    return function (code, start) {
      var type = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
      var index = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 2 | 0);
      var address = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 4 | 0);
      var desc = 'usegoods ' + type + ' ' + index + ' ' + address;
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_usegoods$lambda(type, index, this$ScriptVM, address), desc, 6);
    };
  }
  function ScriptVM_init$cmd_attribtest$lambda(closure$actor, closure$type, closure$value, this$ScriptVM, closure$addr1, closure$addr2) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16;
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_attribtest ' + closure$actor + ' ' + closure$type + ' ' + closure$value);
      tmp$ = this$ScriptVM.game.mainScene.getPlayer_za3lpa$(closure$actor);
      if (tmp$ == null) {
        return null;
      }
      var player = tmp$;
      switch (closure$type) {
        case 0:
          tmp$_16 = player.level;
          break;
        case 1:
          tmp$_16 = player.attack;
          break;
        case 2:
          tmp$_16 = player.defend;
          break;
        case 3:
          tmp$_16 = player.speed;
          break;
        case 4:
          tmp$_16 = player.hp;
          break;
        case 5:
          tmp$_16 = player.mp;
          break;
        case 6:
          tmp$_16 = player.currentExp;
          break;
        case 7:
          tmp$_16 = player.lingli;
          break;
        case 8:
          tmp$_16 = player.luck;
          break;
        case 15:
          tmp$_16 = (tmp$_1 = (tmp$_0 = player.equipmentsArray[7]) != null ? tmp$_0.index : null) != null ? tmp$_1 : 0;
          break;
        case 16:
          tmp$_16 = (tmp$_3 = (tmp$_2 = player.equipmentsArray[5]) != null ? tmp$_2.index : null) != null ? tmp$_3 : 0;
          break;
        case 17:
          tmp$_16 = (tmp$_5 = (tmp$_4 = player.equipmentsArray[6]) != null ? tmp$_4.index : null) != null ? tmp$_5 : 0;
          break;
        case 18:
          tmp$_16 = (tmp$_7 = (tmp$_6 = player.equipmentsArray[2]) != null ? tmp$_6.index : null) != null ? tmp$_7 : 0;
          break;
        case 19:
          tmp$_16 = (tmp$_9 = (tmp$_8 = player.equipmentsArray[4]) != null ? tmp$_8.index : null) != null ? tmp$_9 : 0;
          break;
        case 20:
          tmp$_16 = (tmp$_11 = (tmp$_10 = player.equipmentsArray[3]) != null ? tmp$_10.index : null) != null ? tmp$_11 : 0;
          break;
        case 21:
          tmp$_16 = (tmp$_13 = (tmp$_12 = player.equipmentsArray[0]) != null ? tmp$_12.index : null) != null ? tmp$_13 : 0;
          break;
        case 22:
          tmp$_16 = (tmp$_15 = (tmp$_14 = player.equipmentsArray[1]) != null ? tmp$_14.index : null) != null ? tmp$_15 : 0;
          break;
        case 23:
          tmp$_16 = player.maxHP;
          break;
        case 24:
          tmp$_16 = player.maxMP;
          break;
        default:throw new NotImplementedError('ATTRIBTEST ' + closure$type);
      }
      var currentValue = tmp$_16;
      if (currentValue < closure$value)
        this$ScriptVM.game.gotoAddress_za3lpa$(closure$addr1);
      else if (currentValue > closure$value)
        this$ScriptVM.game.gotoAddress_za3lpa$(closure$addr2);
      return null;
    };
  }
  function ScriptVM_init$cmd_attribtest(this$ScriptVM) {
    return function (code, start) {
      var actor = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
      var type = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 2 | 0);
      var value = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 4 | 0);
      var addr1 = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 6 | 0);
      var addr2 = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 8 | 0);
      var desc = 'attribtest ' + actor + ' ' + type + ' ' + value + ' ' + addr1 + ' ' + addr2;
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_attribtest$lambda(actor, type, value, this$ScriptVM, addr1, addr2), desc, 10);
    };
  }
  function ScriptVM_init$cmd_attribset$lambda(closure$actor, closure$type, closure$value, this$ScriptVM) {
    return function (it) {
      var tmp$;
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_attribset ' + closure$actor + ' ' + closure$type + ' ' + closure$value);
      tmp$ = this$ScriptVM.game.mainScene.getPlayer_za3lpa$(closure$actor);
      if (tmp$ == null) {
        return null;
      }
      var player = tmp$;
      switch (closure$type) {
        case 0:
          player.setLevel_za3lpa$(closure$value);
          break;
        case 1:
          player.attack = closure$value;
          break;
        case 2:
          player.defend = closure$value;
          break;
        case 3:
          player.speed = closure$value;
          break;
        case 4:
          player.hp = closure$value;
          break;
        case 5:
          player.mp = closure$value;
          break;
        case 6:
          player.currentExp = closure$value;
          break;
        case 7:
          player.lingli = closure$value;
          break;
        case 8:
          player.luck = closure$value;
          break;
        case 15:
          player.maxHP = closure$value;
          break;
        case 16:
          player.maxMP = closure$value;
          break;
        default:throw new NotImplementedError('ATTRIBSET ' + closure$type);
      }
      return null;
    };
  }
  function ScriptVM_init$cmd_attribset(this$ScriptVM) {
    return function (code, start) {
      var actor = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
      var type = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 2 | 0);
      var value = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 4 | 0);
      var desc = 'attribset ' + actor + ' ' + type + ' ' + value;
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_attribset$lambda(actor, type, value, this$ScriptVM), desc, 6);
    };
  }
  function ScriptVM_init$cmd_attribadd$lambda(closure$actor, closure$type, closure$value, this$ScriptVM) {
    return function (it) {
      var tmp$;
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_attribadd ' + closure$actor + ' ' + closure$type + ' ' + closure$value);
      tmp$ = this$ScriptVM.game.mainScene.getPlayer_za3lpa$(closure$actor);
      if (tmp$ == null) {
        return null;
      }
      var player = tmp$;
      switch (closure$type) {
        case 0:
          player.setLevel_za3lpa$(player.level + closure$value | 0);
          break;
        case 1:
          player.attack = player.attack + closure$value | 0;
          break;
        case 2:
          player.defend = player.defend + closure$value | 0;
          break;
        case 3:
          player.speed = player.speed + closure$value | 0;
          break;
        case 4:
          player.hp = player.hp + closure$value | 0;
          break;
        case 5:
          player.mp = player.mp + closure$value | 0;
          break;
        case 6:
          player.currentExp = player.currentExp + closure$value | 0;
          break;
        case 7:
          player.lingli = player.lingli + closure$value | 0;
          break;
        case 8:
          player.luck = player.luck + closure$value | 0;
          break;
        case 10:
          player.maxHP = player.maxHP + closure$value | 0;
          break;
        case 11:
          player.maxMP = player.maxMP + closure$value | 0;
          break;
        default:throw new NotImplementedError('ATTRIBADD ' + closure$type);
      }
      return null;
    };
  }
  function ScriptVM_init$cmd_attribadd(this$ScriptVM) {
    return function (code, start) {
      var actor = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
      var type = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 2 | 0);
      var value = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 4 | 0);
      var desc = 'attribadd ' + actor + ' ' + type + ' ' + value;
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_attribadd$lambda(actor, type, value, this$ScriptVM), desc, 6);
    };
  }
  function ScriptVM_init$cmd_showgut$lambda$ObjectLiteral(closure$goon, closure$timeCnt, closure$interval, closure$curY, closure$step, closure$text, closure$rect, closure$imgTop, closure$imgBottom) {
    this.closure$goon = closure$goon;
    this.closure$timeCnt = closure$timeCnt;
    this.closure$interval = closure$interval;
    this.closure$curY = closure$curY;
    this.closure$step = closure$step;
    this.closure$text = closure$text;
    this.closure$rect = closure$rect;
    this.closure$imgTop = closure$imgTop;
    this.closure$imgBottom = closure$imgBottom;
  }
  ScriptVM_init$cmd_showgut$lambda$ObjectLiteral.prototype.update_s8cxhz$ = function (delta) {
    if (!this.closure$goon.v)
      return false;
    this.closure$timeCnt.v = this.closure$timeCnt.v.add(delta);
    if (this.closure$timeCnt.v.compareTo_11rb$(this.closure$interval.v) >= 0) {
      this.closure$timeCnt.v = L0;
      this.closure$curY.v = this.closure$curY.v - this.closure$step.v | 0;
    }
    return true;
  };
  ScriptVM_init$cmd_showgut$lambda$ObjectLiteral.prototype.onKeyUp_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_CANCEL) {
      this.closure$goon.v = false;
    }
    this.closure$step.v = 1;
    this.closure$interval.v = L50;
  };
  ScriptVM_init$cmd_showgut$lambda$ObjectLiteral.prototype.onKeyDown_za3lpa$ = function (key) {
    this.closure$step.v = 3;
    this.closure$interval.v = L20;
  };
  ScriptVM_init$cmd_showgut$lambda$ObjectLiteral.prototype.draw_9in0vv$ = function (canvas) {
    var tmp$, tmp$_0;
    canvas.drawColor_we4i00$(Global_getInstance().COLOR_WHITE);
    var e = TextRender_getInstance().drawText_3oojmu$(canvas, this.closure$text, this.closure$rect, this.closure$curY.v);
    if (e !== 1 && e !== 2) {
      this.closure$goon.v = false;
    }
    (tmp$ = this.closure$imgTop) != null ? (tmp$.draw_tj1hu5$(canvas, 1, 0, 0), Unit) : null;
    (tmp$_0 = this.closure$imgBottom) != null ? (tmp$_0.draw_tj1hu5$(canvas, 1, 0, 96 - this.closure$imgBottom.height | 0), Unit) : null;
  };
  ScriptVM_init$cmd_showgut$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Operate]
  };
  function ScriptVM_init$cmd_showgut$lambda(closure$top, closure$btm, closure$imgBottom, closure$imgTop, closure$text) {
    return function (it) {
      var tmp$;
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_showgut topimg = ' + closure$top + ', btmimg = ' + closure$btm);
      var goon = {v: true};
      var interval = {v: L50};
      var timeCnt = {v: L0};
      var step = {v: 1};
      var curY = {v: closure$imgBottom != null ? 96 - closure$imgBottom.height | 0 : 96};
      var rect = new Rect(0, (tmp$ = closure$imgTop != null ? closure$imgTop.height : null) != null ? tmp$ : 0, 160, curY.v);
      return new ScriptVM_init$cmd_showgut$lambda$ObjectLiteral(goon, timeCnt, interval, curY, step, closure$text, rect, closure$imgTop, closure$imgBottom);
    };
  }
  function ScriptVM_init$cmd_showgut(code, start) {
    var bytes = ScriptVM$Companion_getInstance().getStringBytes_ir89t6$(code, start + 4 | 0);
    var text = gbkString_0(bytes);
    var top = code[start] & 255 | code[start + 1 | 0] << 8 & 65280;
    var btm = code[start + 2 | 0] & 255 | code[start + 3 | 0] << 8 & 65280;
    var imgTop = DatLib$Companion_getInstance().getPic_ydzd23$(5, top, true);
    var imgBottom = DatLib$Companion_getInstance().getPic_ydzd23$(5, btm, true);
    var desc = 'showgut .. ' + text;
    return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_showgut$lambda(top, btm, imgBottom, imgTop, text), desc, bytes.length + 4 | 0);
  }
  function ScriptVM_init$cmd_usegoodsnum$lambda(closure$code, closure$start, this$ScriptVM) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_usegoodsnum');
      var b = Player$Companion_getInstance().sGoodsList.useGoodsNum_qt1dr2$(ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start), ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start + 2 | 0), ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start + 4 | 0));
      if (!b) {
        this$ScriptVM.game.gotoAddress_za3lpa$(ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start + 6 | 0));
      }
      return null;
    };
  }
  function ScriptVM_init$cmd_usegoodsnum(this$ScriptVM) {
    return function (code, start) {
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_usegoodsnum$lambda(code, start, this$ScriptVM), null, 8);
    };
  }
  function ScriptVM_init$cmd_randrade$lambda(closure$code, closure$start, this$ScriptVM) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_randrade');
      if (numberToInt(random() * 1000) <= ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start)) {
        this$ScriptVM.game.gotoAddress_za3lpa$(ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start + 2 | 0));
      }
      return null;
    };
  }
  function ScriptVM_init$cmd_randrade(this$ScriptVM) {
    return function (code, start) {
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_randrade$lambda(code, start, this$ScriptVM), null, 4);
    };
  }
  function ScriptVM_init$cmd_menu$lambda$lambda(closure$stringItems) {
    return function () {
      println(closure$stringItems);
      return copyToArray(closure$stringItems);
    };
  }
  function ScriptVM_init$cmd_menu$lambda$lambda_0(closure$rvAddr, closure$finished) {
    return function (it) {
      ScriptResources_getInstance().variables[closure$rvAddr] = it;
      closure$finished.v = true;
      return Unit;
    };
  }
  function ScriptVM_init$cmd_menu$lambda$ObjectLiteral(closure$menu, closure$finished) {
    this.closure$menu = closure$menu;
    this.closure$finished = closure$finished;
    OperateAdapter.call(this);
  }
  ScriptVM_init$cmd_menu$lambda$ObjectLiteral.prototype.draw_9in0vv$ = function (canvas) {
    this.closure$menu.draw_9in0vv$(canvas);
  };
  ScriptVM_init$cmd_menu$lambda$ObjectLiteral.prototype.onKeyDown_za3lpa$ = function (key) {
    this.closure$menu.onKeyDown_za3lpa$(key);
  };
  ScriptVM_init$cmd_menu$lambda$ObjectLiteral.prototype.onKeyUp_za3lpa$ = function (key) {
    this.closure$menu.onKeyUp_za3lpa$(key);
  };
  ScriptVM_init$cmd_menu$lambda$ObjectLiteral.prototype.update_s8cxhz$ = function (delta) {
    if (this.closure$finished.v)
      return false;
    this.closure$menu.update_s8cxhz$(delta);
    return true;
  };
  ScriptVM_init$cmd_menu$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [OperateAdapter]
  };
  function ScriptVM_init$cmd_menu$lambda(closure$code, closure$start, closure$stringItems, this$ScriptVM) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_menu');
      var finished = {v: false};
      var rvAddr = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start);
      var items = lazy(ScriptVM_init$cmd_menu$lambda$lambda(closure$stringItems));
      var menu = new ScreenCommonMenu(this$ScriptVM, items.value, ScriptVM_init$cmd_menu$lambda$lambda_0(rvAddr, finished));
      this$ScriptVM.pushScreen_2o7n0o$(menu);
      return new ScriptVM_init$cmd_menu$lambda$ObjectLiteral(menu, finished);
    };
  }
  function ScriptVM_init$cmd_menu(this$ScriptVM) {
    return function (code, start) {
      var i = start + 2 | 0;
      var bytes = getCString(code, i);
      var stringItems = split(gbkString_0(bytes), Kotlin.charArrayOf(32));
      var len = bytes.length + 3 | 0;
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_menu$lambda(code, start, stringItems, this$ScriptVM), null, len);
    };
  }
  function ScriptVM_init$cmd_testmoney$lambda(closure$money, this$ScriptVM, closure$address) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_testmoney');
      if (Player$Companion_getInstance().sMoney < closure$money) {
        this$ScriptVM.game.gotoAddress_za3lpa$(closure$address);
      }
      return null;
    };
  }
  function ScriptVM_init$cmd_testmoney(this$ScriptVM) {
    return function (code, start) {
      var money = ScriptVM$Companion_getInstance().get4BytesInt_ir89t6$(code, start);
      var address = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 4 | 0);
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_testmoney$lambda(money, this$ScriptVM, address), null, 6);
    };
  }
  function ScriptVM_init$cmd_callchapter$lambda(closure$type, closure$index, this$ScriptVM) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_callchapter ' + closure$type + ' ' + closure$index);
      this$ScriptVM.game.mainScene.callChapter_vux9f0$(closure$type, closure$index);
      return null;
    };
  }
  function ScriptVM_init$cmd_callchapter(this$ScriptVM) {
    return function (code, start) {
      var type = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
      var index = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 2 | 0);
      var desc = 'callchapter ' + type + ' ' + index;
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_callchapter$lambda(type, index, this$ScriptVM), desc, 4);
    };
  }
  function ScriptVM_init$cmd_discmp$lambda(closure$code, closure$start, this$ScriptVM) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_discmp');
      var var_0 = ScriptResources_getInstance().variables[ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start)];
      var num = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start + 2 | 0);
      if (var_0 < num) {
        this$ScriptVM.game.gotoAddress_za3lpa$(ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start + 4 | 0));
      }
       else if (var_0 > num) {
        this$ScriptVM.game.gotoAddress_za3lpa$(ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start + 6 | 0));
      }
      return null;
    };
  }
  function ScriptVM_init$cmd_discmp(this$ScriptVM) {
    return function (code, start) {
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_discmp$lambda(code, start, this$ScriptVM), null, 8);
    };
  }
  function ScriptVM_init$cmd_return$lambda(this$ScriptVM) {
    return function (it) {
      var tmp$;
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_return');
      it.stop();
      if ((tmp$ = this$ScriptVM.game.mainScene.scriptProcess.prev) != null) {
        this$ScriptVM.game.mainScene.scriptProcess = tmp$;
      }
      return null;
    };
  }
  function ScriptVM_init$cmd_return(this$ScriptVM) {
    return function (code, start) {
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_return$lambda(this$ScriptVM), 'return', 0);
    };
  }
  function ScriptVM_init$cmd_timemsg$lambda$ObjectLiteral(closure$text, closure$time) {
    this.closure$text = closure$text;
    this.downKey = 0;
    this.isAnyKeyDown = false;
    this.countDown = closure$time * 10 | 0;
  }
  ScriptVM_init$cmd_timemsg$lambda$ObjectLiteral.prototype.update_s8cxhz$ = function (delta) {
    if (this.countDown !== 0) {
      this.countDown = this.countDown - delta.toInt() | 0;
      if (this.countDown <= 0) {
        return false;
      }
    }
    return !this.isAnyKeyDown;
  };
  ScriptVM_init$cmd_timemsg$lambda$ObjectLiteral.prototype.onKeyUp_za3lpa$ = function (key) {
    if (this.downKey === key) {
      this.isAnyKeyDown = true;
    }
  };
  ScriptVM_init$cmd_timemsg$lambda$ObjectLiteral.prototype.onKeyDown_za3lpa$ = function (key) {
    this.downKey = key;
  };
  ScriptVM_init$cmd_timemsg$lambda$ObjectLiteral.prototype.draw_9in0vv$ = function (canvas) {
    Util_getInstance().showMessage_2yb3jp$(canvas, this.closure$text);
  };
  ScriptVM_init$cmd_timemsg$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Operate]
  };
  function ScriptVM_init$cmd_timemsg$lambda(closure$time, closure$text) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_timemsg ' + closure$time + ' ' + gbkString_0(closure$text));
      return new ScriptVM_init$cmd_timemsg$lambda$ObjectLiteral(closure$text, closure$time);
    };
  }
  function ScriptVM_init$cmd_timemsg(code, start) {
    var time = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
    var text = ScriptVM$Companion_getInstance().getStringBytes_ir89t6$(code, start + 2 | 0);
    var desc = 'timemsg ' + time + ' ' + text;
    return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_timemsg$lambda(time, text), desc, text.length + 2 | 0);
  }
  function ScriptVM_init$cmd_disablesave$lambda(it) {
    ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_disablesave');
    Global_getInstance().disableSave = true;
    return null;
  }
  function ScriptVM_init$cmd_disablesave(code, start) {
    return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_disablesave$lambda, null, 0);
  }
  function ScriptVM_init$cmd_enablesave$lambda(it) {
    ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_enablesave');
    Global_getInstance().disableSave = false;
    return null;
  }
  function ScriptVM_init$cmd_enablesave(code, start) {
    return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_enablesave$lambda, null, 0);
  }
  function ScriptVM_init$cmd_gamesave$lambda$lambda(closure$end) {
    return function () {
      closure$end.v = true;
      return Unit;
    };
  }
  function ScriptVM_init$cmd_gamesave$lambda$ObjectLiteral(closure$end) {
    this.closure$end = closure$end;
    OperateAdapter.call(this);
  }
  ScriptVM_init$cmd_gamesave$lambda$ObjectLiteral.prototype.update_s8cxhz$ = function (delta) {
    return !this.closure$end.v;
  };
  ScriptVM_init$cmd_gamesave$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [OperateAdapter]
  };
  function ScriptVM_init$cmd_gamesave$lambda(this$ScriptVM) {
    return function (it) {
      var end = {v: false};
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_gamesave');
      var view = new ScreenSaveLoadGame(this$ScriptVM, ScreenSaveLoadGame$Operate$SAVE_getInstance(), 1);
      view.callback = ScriptVM_init$cmd_gamesave$lambda$lambda(end);
      this$ScriptVM.pushScreen_2o7n0o$(view);
      return new ScriptVM_init$cmd_gamesave$lambda$ObjectLiteral(end);
    };
  }
  function ScriptVM_init$cmd_gamesave(this$ScriptVM) {
    return function (code, start) {
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_gamesave$lambda(this$ScriptVM), null, 0);
    };
  }
  function ScriptVM_init$cmd_seteventtimer$lambda(closure$timer, closure$event) {
    return function (it) {
      it.setTimer_vux9f0$(closure$timer, closure$event);
      return null;
    };
  }
  function ScriptVM_init$cmd_seteventtimer(code, start) {
    var event = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
    var timer = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start + 2 | 0);
    return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_seteventtimer$lambda(timer, event), null, 4);
  }
  function ScriptVM_init$cmd_enableshowpos$lambda(it) {
    return null;
  }
  function ScriptVM_init$cmd_enableshowpos(code, start) {
    return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_enableshowpos$lambda, null, 0);
  }
  function ScriptVM_init$cmd_disableshowpos$lambda(it) {
    return null;
  }
  function ScriptVM_init$cmd_disableshowpos(code, start) {
    return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_disableshowpos$lambda, null, 0);
  }
  function ScriptVM_init$cmd_setto$lambda(closure$code, closure$start) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_setto');
      ScriptResources_getInstance().variables[ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start + 2 | 0)] = ScriptResources_getInstance().variables[ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start)];
      return null;
    };
  }
  function ScriptVM_init$cmd_setto(code, start) {
    return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_setto$lambda(code, start), null, 4);
  }
  function ScriptVM_init$cmd_testgoodsnum$lambda(closure$code, closure$start, this$ScriptVM) {
    return function (it) {
      ScriptVM$Companion_getInstance().cmdPrint_61zpoe$('cmd_testgoodsnum');
      var goodsnum = Player$Companion_getInstance().sGoodsList.getGoodsNum_vux9f0$(ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start), ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start + 2 | 0));
      var num = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start + 4 | 0);
      if (goodsnum === num) {
        this$ScriptVM.game.gotoAddress_za3lpa$(ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start + 6 | 0));
      }
       else if (goodsnum > num) {
        this$ScriptVM.game.gotoAddress_za3lpa$(ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(closure$code, closure$start + 8 | 0));
      }
      return null;
    };
  }
  function ScriptVM_init$cmd_testgoodsnum(this$ScriptVM) {
    return function (code, start) {
      return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_testgoodsnum$lambda(code, start, this$ScriptVM), null, 10);
    };
  }
  function ScriptVM_init$cmd_setfightmiss$lambda(closure$enable) {
    return function (it) {
      SaveLoadGame_getInstance().allowMiss = closure$enable === 1;
      return null;
    };
  }
  function ScriptVM_init$cmd_setfightmiss(code, start) {
    var enable = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
    return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_setfightmiss$lambda(enable), null, 2);
  }
  function ScriptVM_init$cmd_setarmstoss$lambda(closure$enable) {
    return function (it) {
      SaveLoadGame_getInstance().allowTossArm = closure$enable === 1;
      return null;
    };
  }
  function ScriptVM_init$cmd_setarmstoss(code, start) {
    var enable = ScriptVM$Companion_getInstance().get2ByteInt_ir89t6$(code, start);
    return new makeCommand$ObjectLiteral(ScriptVM_init$cmd_setarmstoss$lambda(enable), null, 2);
  }
  ScriptVM.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScriptVM',
    interfaces: [Control]
  };
  function GameNode() {
  }
  Object.defineProperty(GameNode.prototype, 'game', {
    get: function () {
      return this.parent.game;
    }
  });
  GameNode.prototype.showMessage_61zpoe$ = function (msg) {
    this.showMessage_4wgjuj$(msg, L1000);
  };
  GameNode.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'GameNode',
    interfaces: []
  };
  function Control() {
  }
  Control.prototype.popScreen = function () {
    this.parent.popScreen();
  };
  Control.prototype.pushScreen_2o7n0o$ = function (scr) {
    this.parent.pushScreen_2o7n0o$(scr);
  };
  Control.prototype.getCurScreen = function () {
    return this.parent.getCurScreen();
  };
  Control.prototype.showMessage_4wgjuj$ = function (msg, delay) {
    this.parent.showMessage_4wgjuj$(msg, delay);
  };
  Control.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Control',
    interfaces: [GameNode]
  };
  function Game() {
  }
  Game.prototype.triggerEvent_za3lpa$ = function (eventId) {
    this.mainScene.triggerEvent_za3lpa$(eventId);
  };
  Game.prototype.gotoAddress_za3lpa$ = function (address) {
    this.mainScene.gotoAddress_za3lpa$(address);
  };
  Game.prototype.exitScript = function () {
    this.mainScene.exitScript();
  };
  Game.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Game',
    interfaces: [Control]
  };
  function BaseScreen() {
  }
  Object.defineProperty(BaseScreen.prototype, 'isPopup', {
    get: function () {
      return false;
    }
  });
  BaseScreen.prototype.willAppear = function () {
  };
  BaseScreen.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BaseScreen',
    interfaces: [Control]
  };
  function ScreenAnimation(parent, index) {
    this.parent_h7c0f$_0 = parent;
    this.index_0 = index;
    this.mResSrs_0 = null;
    var tmp$;
    if (this.index_0 !== 247 && this.index_0 !== 248 && this.index_0 !== 249) {
      throw IllegalArgumentException_init('\u53EA\u80FD\u662F247,248,249');
    }
    this.mResSrs_0 = Kotlin.isType(tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$SRS_getInstance(), 1, this.index_0), ResSrs) ? tmp$ : throwCCE();
    this.mResSrs_0.setIteratorNum_za3lpa$(4);
    this.mResSrs_0.start();
  }
  Object.defineProperty(ScreenAnimation.prototype, 'parent', {
    get: function () {
      return this.parent_h7c0f$_0;
    }
  });
  ScreenAnimation.prototype.update_s8cxhz$ = function (delta) {
    if (!this.mResSrs_0.update_s8cxhz$(delta)) {
      switch (this.index_0) {
        case 247:
          this.game.changeScreen_gacx6e$(ScreenViewType$SCREEN_GAME_LOGO_getInstance());
          break;
        case 248:
          this.game.changeScreen_gacx6e$(ScreenViewType$SCREEN_MENU_getInstance());
          break;
        case 249:
          this.game.changeScreen_gacx6e$(ScreenViewType$SCREEN_MENU_getInstance());
          break;
      }
    }
  };
  ScreenAnimation.prototype.draw_9in0vv$ = function (canvas) {
    canvas.drawColor_we4i00$(Global_getInstance().COLOR_WHITE);
    this.mResSrs_0.draw_2g4tob$(canvas, 0, 0);
  };
  ScreenAnimation.prototype.onKeyDown_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_CANCEL && (this.index_0 === 247 || this.index_0 === 248)) {
      this.game.changeScreen_gacx6e$(ScreenViewType$SCREEN_MENU_getInstance());
    }
  };
  ScreenAnimation.prototype.onKeyUp_za3lpa$ = function (key) {
  };
  ScreenAnimation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScreenAnimation',
    interfaces: [BaseScreen]
  };
  function ScreenMenu(parent) {
    this.parent_6klbaw$_0 = parent;
    this.mImgMenu_0 = ensureNotNull(DatLib$Companion_getInstance().getPic_ydzd23$(2, 14));
    this.mLeft_0 = 0;
    this.mTop_0 = 0;
    var tmp$, tmp$_0;
    this.mSrsSelector_0 = [Kotlin.isType(tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$SRS_getInstance(), 1, 250), ResSrs) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$SRS_getInstance(), 1, 251), ResSrs) ? tmp$_0 : throwCCE()];
    this.mCurSelect_0 = 0;
    this.isCancelKeyDown_0 = false;
    this.mSrsSelector_0[0].start();
    this.mSrsSelector_0[1].start();
    this.mLeft_0 = (160 - this.mImgMenu_0.width | 0) / 2 | 0;
    this.mTop_0 = (96 - this.mImgMenu_0.height | 0) / 2 | 0;
  }
  Object.defineProperty(ScreenMenu.prototype, 'parent', {
    get: function () {
      return this.parent_6klbaw$_0;
    }
  });
  ScreenMenu.prototype.update_s8cxhz$ = function (delta) {
    if (!this.mSrsSelector_0[this.mCurSelect_0].update_s8cxhz$(delta)) {
      this.mSrsSelector_0[this.mCurSelect_0].start();
    }
  };
  ScreenMenu.prototype.draw_9in0vv$ = function (canvas) {
    canvas.drawColor_we4i00$(Global_getInstance().COLOR_WHITE);
    this.mImgMenu_0.draw_tj1hu5$(canvas, 1, this.mLeft_0, this.mTop_0);
    this.mSrsSelector_0[this.mCurSelect_0].draw_2g4tob$(canvas, 0, 0);
  };
  ScreenMenu.prototype.onKeyDown_za3lpa$ = function (key) {
    switch (key) {
      case 1:
      case 2:
        this.mCurSelect_0 = 1 - this.mCurSelect_0 | 0;
        break;
      case 8:
        this.isCancelKeyDown_0 = true;
        break;
    }
  };
  ScreenMenu.prototype.onKeyUp_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_ENTER) {
      if (this.mCurSelect_0 === 0) {
        SaveLoadGame_getInstance().startNewGame = true;
        this.game.changeScreen_gacx6e$(ScreenViewType$SCREEN_MAIN_GAME_getInstance());
      }
       else if (this.mCurSelect_0 === 1) {
        this.pushScreen_2o7n0o$(new ScreenSaveLoadGame(this, ScreenSaveLoadGame$Operate$LOAD_getInstance()));
      }
    }
     else if (key === Global_getInstance().KEY_CANCEL && this.isCancelKeyDown_0) {
      sysExit();
    }
     else if (key === Global_getInstance().KEY_PAGEUP) {
      DatLib$Companion_getInstance().instance.tryCompileScripts_3eoda2$(this.game.vm);
    }
  };
  ScreenMenu.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScreenMenu',
    interfaces: [BaseScreen]
  };
  function ScreenMessageBox(parent, msg, mOnOkClickListener) {
    ScreenMessageBox$Companion_getInstance();
    this.parent_8ialgd$_0 = parent;
    this.mOnOkClickListener_0 = mOnOkClickListener;
    this.index_0 = 0;
    this.mMsg_0 = '';
    if (msg != null) {
      this.mMsg_0 = msg;
    }
  }
  Object.defineProperty(ScreenMessageBox.prototype, 'parent', {
    get: function () {
      return this.parent_8ialgd$_0;
    }
  });
  Object.defineProperty(ScreenMessageBox.prototype, 'isPopup', {
    get: function () {
      return true;
    }
  });
  function ScreenMessageBox$OnOKClickListener() {
  }
  ScreenMessageBox$OnOKClickListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'OnOKClickListener',
    interfaces: []
  };
  ScreenMessageBox.prototype.update_s8cxhz$ = function (delta) {
  };
  ScreenMessageBox.prototype.draw_9in0vv$ = function (canvas) {
    canvas.drawBitmap_t8cslu$(ScreenMessageBox$Companion_getInstance().bmpBg_0, 27, 15);
    TextRender_getInstance().drawText_kkuqvh$(canvas, this.mMsg_0, 33, 23);
    if (this.index_0 === 0) {
      TextRender_getInstance().drawSelText_kkuqvh$(canvas, '\u662F ', 45, 53);
      TextRender_getInstance().drawText_kkuqvh$(canvas, '\u5426 ', 93, 53);
    }
     else if (this.index_0 === 1) {
      TextRender_getInstance().drawText_kkuqvh$(canvas, '\u662F ', 45, 53);
      TextRender_getInstance().drawSelText_kkuqvh$(canvas, '\u5426 ', 93, 53);
    }
  };
  ScreenMessageBox.prototype.onKeyDown_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_LEFT || key === Global_getInstance().KEY_RIGHT) {
      this.index_0 = 1 - this.index_0 | 0;
    }
  };
  ScreenMessageBox.prototype.onKeyUp_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_ENTER) {
      if (this.index_0 === 0 && this.mOnOkClickListener_0 != null) {
        this.mOnOkClickListener_0.onOKClick();
      }
      this.exit_0();
    }
     else if (key === Global_getInstance().KEY_CANCEL) {
      this.exit_0();
    }
  };
  ScreenMessageBox.prototype.exit_0 = function () {
    this.popScreen();
  };
  function ScreenMessageBox$Companion() {
    ScreenMessageBox$Companion_instance = this;
    this.bmpBg_0 = Bitmap$Companion_getInstance().createBitmap_vux9f0$(111, 67);
    var c = new Canvas(this.bmpBg_0);
    c.drawColor_we4i00$(Global_getInstance().COLOR_WHITE);
    var p = new Paint();
    p.color = Global_getInstance().COLOR_BLACK;
    p.style = Paint$Style$STROKE_getInstance();
    c.drawRect_x3aj6j$(1, 1, this.bmpBg_0.width - 5 | 0, this.bmpBg_0.height - 5 | 0, p);
    c.drawRect_x3aj6j$(16, 36, 43, 55, p);
    c.drawRect_x3aj6j$(64, 36, 91, 55, p);
    p.style = Paint$Style$FILL_AND_STROKE_getInstance();
    c.drawRect_x3aj6j$(5, 62, 110, 66, p);
    c.drawRect_x3aj6j$(106, 5, this.bmpBg_0.width - 1 | 0, this.bmpBg_0.height - 1 | 0, p);
  }
  ScreenMessageBox$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ScreenMessageBox$Companion_instance = null;
  function ScreenMessageBox$Companion_getInstance() {
    if (ScreenMessageBox$Companion_instance === null) {
      new ScreenMessageBox$Companion();
    }
    return ScreenMessageBox$Companion_instance;
  }
  ScreenMessageBox.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScreenMessageBox',
    interfaces: [BaseScreen]
  };
  function ScreenSaveLoadGame(parent, mOperate, popDepth) {
    if (popDepth === void 0)
      popDepth = 3;
    this.parent_l2q1ci$_0 = parent;
    this.mOperate_0 = mOperate;
    this.popDepth_0 = popDepth;
    this.mTextPos_0 = [new Int32Array([68, 28]), new Int32Array([68, 51]), new Int32Array([68, 74])];
    this.index_0 = 0;
    this.mEmpty_0 = '\u7A7A\u6863\u6848    ';
    this.mText_0 = [this.mEmpty_0, this.mEmpty_0, this.mEmpty_0];
    this.mHeadImgs_0 = ArrayList_init();
    this.mFileNames_0 = ['fmjsave0', 'fmjsave1', 'fmjsave2'];
    this.mImgBg_0 = null;
    this.callback = null;
    var tmp$;
    this.mImgBg_0 = Kotlin.isType(tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$PIC_getInstance(), 2, this.mOperate_0 === ScreenSaveLoadGame$Operate$LOAD_getInstance() ? 16 : 15), ResImage) ? tmp$ : throwCCE();
    this.mHeadImgs_0.add_11rb$(ArrayList_init());
    this.mHeadImgs_0.add_11rb$(ArrayList_init());
    this.mHeadImgs_0.add_11rb$(ArrayList_init());
    var file = new File('sav/' + this.mFileNames_0[0]);
    if (file.exists()) {
      this.mText_0[0] = this.format_0(this.getSceneNameAndHeads_0(file, this.mHeadImgs_0.get_za3lpa$(0)));
    }
    file = new File('sav/' + this.mFileNames_0[1]);
    if (file.exists()) {
      this.mText_0[1] = this.format_0(this.getSceneNameAndHeads_0(file, this.mHeadImgs_0.get_za3lpa$(1)));
    }
    file = new File('sav/' + this.mFileNames_0[2]);
    if (file.exists()) {
      this.mText_0[2] = this.format_0(this.getSceneNameAndHeads_0(file, this.mHeadImgs_0.get_za3lpa$(2)));
    }
  }
  Object.defineProperty(ScreenSaveLoadGame.prototype, 'parent', {
    get: function () {
      return this.parent_l2q1ci$_0;
    }
  });
  function ScreenSaveLoadGame$Operate(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ScreenSaveLoadGame$Operate_initFields() {
    ScreenSaveLoadGame$Operate_initFields = function () {
    };
    ScreenSaveLoadGame$Operate$SAVE_instance = new ScreenSaveLoadGame$Operate('SAVE', 0);
    ScreenSaveLoadGame$Operate$LOAD_instance = new ScreenSaveLoadGame$Operate('LOAD', 1);
  }
  var ScreenSaveLoadGame$Operate$SAVE_instance;
  function ScreenSaveLoadGame$Operate$SAVE_getInstance() {
    ScreenSaveLoadGame$Operate_initFields();
    return ScreenSaveLoadGame$Operate$SAVE_instance;
  }
  var ScreenSaveLoadGame$Operate$LOAD_instance;
  function ScreenSaveLoadGame$Operate$LOAD_getInstance() {
    ScreenSaveLoadGame$Operate_initFields();
    return ScreenSaveLoadGame$Operate$LOAD_instance;
  }
  ScreenSaveLoadGame$Operate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Operate',
    interfaces: [Enum]
  };
  function ScreenSaveLoadGame$Operate$values() {
    return [ScreenSaveLoadGame$Operate$SAVE_getInstance(), ScreenSaveLoadGame$Operate$LOAD_getInstance()];
  }
  ScreenSaveLoadGame$Operate.values = ScreenSaveLoadGame$Operate$values;
  function ScreenSaveLoadGame$Operate$valueOf(name) {
    switch (name) {
      case 'SAVE':
        return ScreenSaveLoadGame$Operate$SAVE_getInstance();
      case 'LOAD':
        return ScreenSaveLoadGame$Operate$LOAD_getInstance();
      default:throwISE('No enum constant fmj.views.ScreenSaveLoadGame.Operate.' + name);
    }
  }
  ScreenSaveLoadGame$Operate.valueOf_61zpoe$ = ScreenSaveLoadGame$Operate$valueOf;
  ScreenSaveLoadGame.prototype.format_0 = function (s) {
    var tmp = s;
    while (gbkBytes(tmp).length < gbkBytes(this.mEmpty_0).length)
      tmp += ' ';
    return tmp;
  };
  ScreenSaveLoadGame.prototype.getSceneNameAndHeads_0 = function (f, heads) {
    var tmp$;
    var file = objectInputOf(f);
    var name = file.readString();
    var actorNum = file.readInt();
    for (var i = 0; i < actorNum; i++) {
      heads.add_11rb$(Kotlin.isType(tmp$ = DatLib$Companion_getInstance().getRes_2et8c9$(DatLib$ResType$PIC_getInstance(), 1, file.readInt()), ResImage) ? tmp$ : throwCCE());
    }
    file.close();
    return name;
  };
  ScreenSaveLoadGame.prototype.update_s8cxhz$ = function (delta) {
  };
  ScreenSaveLoadGame.prototype.draw_9in0vv$ = function (canvas) {
    var tmp$;
    this.mImgBg_0.draw_tj1hu5$(canvas, 1, 0, 0);
    tmp$ = this.mHeadImgs_0;
    for (var i = 0; i !== tmp$.size; ++i) {
      var tmp$_0;
      tmp$_0 = this.mHeadImgs_0.get_za3lpa$(i).size;
      for (var j = 0; j < tmp$_0; j++) {
        var img = this.mHeadImgs_0.get_za3lpa$(i).get_za3lpa$(j);
        img.draw_tj1hu5$(canvas, 7, 8 + (20 * j | 0) | 0, this.mTextPos_0[i][1] - 6 | 0);
      }
    }
    TextRender_getInstance().drawText_kkuqvh$(canvas, this.mText_0[0], this.mTextPos_0[0][0], this.mTextPos_0[0][1]);
    TextRender_getInstance().drawText_kkuqvh$(canvas, this.mText_0[1], this.mTextPos_0[1][0], this.mTextPos_0[1][1]);
    TextRender_getInstance().drawText_kkuqvh$(canvas, this.mText_0[2], this.mTextPos_0[2][0], this.mTextPos_0[2][1]);
    TextRender_getInstance().drawSelText_kkuqvh$(canvas, this.mText_0[this.index_0], this.mTextPos_0[this.index_0][0], this.mTextPos_0[this.index_0][1]);
  };
  ScreenSaveLoadGame.prototype.onKeyDown_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_UP) {
      if ((this.index_0 = this.index_0 - 1 | 0, this.index_0) < 0) {
        this.index_0 = 2;
      }
    }
     else if (key === Global_getInstance().KEY_DOWN) {
      if ((this.index_0 = this.index_0 + 1 | 0, this.index_0) > 2) {
        this.index_0 = 0;
      }
    }
  };
  ScreenSaveLoadGame.prototype.exit_0 = function () {
    var tmp$;
    var tmp$_0;
    tmp$_0 = until(0, this.popDepth_0).iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      this.popScreen();
    }
    (tmp$ = this.callback) != null ? tmp$() : null;
  };
  function ScreenSaveLoadGame$onKeyUp$ObjectLiteral(closure$file, this$ScreenSaveLoadGame) {
    this.closure$file = closure$file;
    this.this$ScreenSaveLoadGame = this$ScreenSaveLoadGame;
  }
  ScreenSaveLoadGame$onKeyUp$ObjectLiteral.prototype.onOKClick = function () {
    this.this$ScreenSaveLoadGame.saveGame_epr4t4$(this.closure$file);
    this.this$ScreenSaveLoadGame.exit_0();
  };
  ScreenSaveLoadGame$onKeyUp$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ScreenMessageBox$OnOKClickListener]
  };
  ScreenSaveLoadGame.prototype.onKeyUp_za3lpa$ = function (key) {
    if (key === Global_getInstance().KEY_CANCEL) {
      this.popScreen();
    }
     else if (key === Global_getInstance().KEY_ENTER) {
      var file = new File('sav/' + this.mFileNames_0[this.index_0]);
      if (this.mOperate_0 === ScreenSaveLoadGame$Operate$LOAD_getInstance()) {
        if (!file.exists()) {
          return;
        }
        if (!this.loadGame_0(file)) {
          return;
        }
        SaveLoadGame_getInstance().startNewGame = false;
        this.game.changeScreen_gacx6e$(ScreenViewType$SCREEN_MAIN_GAME_getInstance());
      }
       else {
        if (!file.exists()) {
          file.createNewFile();
          this.saveGame_epr4t4$(file);
          this.exit_0();
        }
         else {
          this.pushScreen_2o7n0o$(new ScreenMessageBox(this, '\u8986\u76D6\u539F\u8FDB\u5EA6?', new ScreenSaveLoadGame$onKeyUp$ObjectLiteral(file, this)));
        }
      }
    }
  };
  ScreenSaveLoadGame.prototype.loadGame_0 = function (file) {
    var ioIn = objectInputOf(file);
    if (!SaveLoadGame_getInstance().read_r7hctu$(this.game, ioIn))
      return false;
    ScriptResources_getInstance().read_setnfj$(ioIn);
    ioIn.close();
    return true;
  };
  ScreenSaveLoadGame.prototype.saveGame_epr4t4$ = function (file) {
    var o = objectOutputOf(file);
    SaveLoadGame_getInstance().write_bvlcvx$(this.game, o);
    ScriptResources_getInstance().write_vcd9jg$(o);
    o.close();
  };
  ScreenSaveLoadGame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScreenSaveLoadGame',
    interfaces: [BaseScreen]
  };
  function ScreenStack(parent) {
    this.parent_kp5vcd$_0 = parent;
    this.mScreenStack_0 = Stack$Companion_getInstance().create_287e2$();
  }
  Object.defineProperty(ScreenStack.prototype, 'parent', {
    get: function () {
      return this.parent_kp5vcd$_0;
    }
  });
  ScreenStack.prototype.clear = function () {
    this.mScreenStack_0.clear();
  };
  ScreenStack.prototype.keyDown_za3lpa$ = function (key) {
    var tmp$;
    (tmp$ = this.mScreenStack_0.peek()) != null ? (tmp$.onKeyDown_za3lpa$(key), Unit) : null;
  };
  ScreenStack.prototype.keyUp_za3lpa$ = function (key) {
    var tmp$;
    (tmp$ = this.mScreenStack_0.peek()) != null ? (tmp$.onKeyUp_za3lpa$(key), Unit) : null;
  };
  ScreenStack.prototype.changeScreen_2o7n0o$ = function (scr) {
    this.mScreenStack_0.clear();
    this.mScreenStack_0.push_11rb$(scr);
    scr.willAppear();
  };
  ScreenStack.prototype.pushScreen_2o7n0o$ = function (scr) {
    this.mScreenStack_0.push_11rb$(scr);
    scr.willAppear();
  };
  ScreenStack.prototype.popScreen = function () {
    var tmp$;
    this.mScreenStack_0.pop();
    (tmp$ = this.mScreenStack_0.peek()) != null ? (tmp$.willAppear(), Unit) : null;
  };
  ScreenStack.prototype.getCurScreen = function () {
    return ensureNotNull(this.mScreenStack_0.peek());
  };
  function ScreenStack$showMessage$ObjectLiteral(this$ScreenStack, closure$delay, closure$msg) {
    this.this$ScreenStack = this$ScreenStack;
    this.closure$delay = closure$delay;
    this.closure$msg = closure$msg;
    this.cnt_8be2vx$ = L0;
  }
  Object.defineProperty(ScreenStack$showMessage$ObjectLiteral.prototype, 'parent', {
    get: function () {
      return this.this$ScreenStack;
    }
  });
  Object.defineProperty(ScreenStack$showMessage$ObjectLiteral.prototype, 'isPopup', {
    get: function () {
      return true;
    }
  });
  ScreenStack$showMessage$ObjectLiteral.prototype.update_s8cxhz$ = function (delta) {
    this.cnt_8be2vx$ = this.cnt_8be2vx$.add(delta);
    if (this.cnt_8be2vx$.compareTo_11rb$(this.closure$delay) > 0) {
      this.popScreen();
    }
  };
  ScreenStack$showMessage$ObjectLiteral.prototype.draw_9in0vv$ = function (canvas) {
    Util_getInstance().showMessage_g6cl4j$(canvas, this.closure$msg);
  };
  ScreenStack$showMessage$ObjectLiteral.prototype.onKeyUp_za3lpa$ = function (key) {
  };
  ScreenStack$showMessage$ObjectLiteral.prototype.onKeyDown_za3lpa$ = function (key) {
    this.popScreen();
  };
  ScreenStack$showMessage$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [BaseScreen]
  };
  ScreenStack.prototype.showMessage_4wgjuj$ = function (msg, delay) {
    this.pushScreen_2o7n0o$(new ScreenStack$showMessage$ObjectLiteral(this, delay, msg));
  };
  ScreenStack.prototype.draw_9in0vv$ = function (canvas) {
    var tmp$;
    tmp$ = this.mScreenStack_0.iterator();
    while (tmp$.hasNext()) {
      var scr = tmp$.next();
      scr.draw_9in0vv$(canvas);
    }
  };
  ScreenStack.prototype.update_s8cxhz$ = function (delta) {
    var tmp$;
    (tmp$ = this.mScreenStack_0.peek()) != null ? (tmp$.update_s8cxhz$(delta), Unit) : null;
  };
  ScreenStack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScreenStack',
    interfaces: [GameNode]
  };
  function Color(r, g, b, a) {
    Color$Companion_getInstance();
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
  Object.defineProperty(Color.prototype, 'rgb', {
    get: function () {
      return (this.r >> 24 & this.g) >> 16 & this.b;
    }
  });
  function Color$Companion() {
    Color$Companion_instance = this;
    this.WHITE = new Color(180, 180, 180, 255);
    this.BLACK = new Color(0, 0, 0, 255);
    this.TRANSP = new Color(0, 0, 0, 0);
    this.RED = Color_init(255, 0, 0);
  }
  Color$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Color$Companion_instance = null;
  function Color$Companion_getInstance() {
    if (Color$Companion_instance === null) {
      new Color$Companion();
    }
    return Color$Companion_instance;
  }
  Color.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Color',
    interfaces: []
  };
  function Color_init(r, g, b, $this) {
    $this = $this || Object.create(Color.prototype);
    Color.call($this, r, g, b, 255);
    return $this;
  }
  function Paint() {
    this.style = Paint$Style$FILL_getInstance();
    this.color = Color$Companion_getInstance().BLACK;
    this.strokeWidth = 1;
  }
  function Paint$Style(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Paint$Style_initFields() {
    Paint$Style_initFields = function () {
    };
    Paint$Style$FILL_instance = new Paint$Style('FILL', 0);
    Paint$Style$STROKE_instance = new Paint$Style('STROKE', 1);
    Paint$Style$FILL_AND_STROKE_instance = new Paint$Style('FILL_AND_STROKE', 2);
  }
  var Paint$Style$FILL_instance;
  function Paint$Style$FILL_getInstance() {
    Paint$Style_initFields();
    return Paint$Style$FILL_instance;
  }
  var Paint$Style$STROKE_instance;
  function Paint$Style$STROKE_getInstance() {
    Paint$Style_initFields();
    return Paint$Style$STROKE_instance;
  }
  var Paint$Style$FILL_AND_STROKE_instance;
  function Paint$Style$FILL_AND_STROKE_getInstance() {
    Paint$Style_initFields();
    return Paint$Style$FILL_AND_STROKE_instance;
  }
  Paint$Style.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Style',
    interfaces: [Enum]
  };
  function Paint$Style$values() {
    return [Paint$Style$FILL_getInstance(), Paint$Style$STROKE_getInstance(), Paint$Style$FILL_AND_STROKE_getInstance()];
  }
  Paint$Style.values = Paint$Style$values;
  function Paint$Style$valueOf(name) {
    switch (name) {
      case 'FILL':
        return Paint$Style$FILL_getInstance();
      case 'STROKE':
        return Paint$Style$STROKE_getInstance();
      case 'FILL_AND_STROKE':
        return Paint$Style$FILL_AND_STROKE_getInstance();
      default:throwISE('No enum constant graphics.Paint.Style.' + name);
    }
  }
  Paint$Style.valueOf_61zpoe$ = Paint$Style$valueOf;
  Paint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Paint',
    interfaces: []
  };
  function Bitmap(width, height, buffer) {
    Bitmap$Companion_getInstance();
    this.width = width;
    this.height = height;
    this.buffer = buffer;
    this.color = Color$Companion_getInstance().WHITE;
  }
  Bitmap.prototype.drawImage_t8cslu$ = function (src, x, y) {
    this.setPixels_khhbfk$(src.buffer, 0, x, y, src.width, src.height);
  };
  Bitmap.prototype.setPixel_0 = function (col, row, color) {
    this.buffer[Kotlin.imul(this.width, row) + col | 0] = color;
  };
  Bitmap.prototype.fillRect_tjonv8$ = function (x, y, w, h) {
    var tmp$, tmp$_0;
    tmp$ = x + w | 0;
    for (var col = x; col < tmp$; col++) {
      tmp$_0 = y + h | 0;
      for (var row = y; row < tmp$_0; row++) {
        this.setPixel_0(col, row, this.color);
      }
    }
  };
  Bitmap.prototype.drawLine_tjonv8$ = function (x1, y1, x2, y2) {
    var dx = x2 - x1 | 0;
    var dy = y2 - y1 | 0;
    var ux = dx > 0 ? 1 : -1;
    var uy = dy > 0 ? 1 : -1;
    var x = x1;
    var y = y1;
    var eps = 0;
    dx = abs(dx);
    dy = abs(dy);
    if (dx > dy) {
      x = x1;
      while (true) {
        this.setPixel_0(x, y, this.color);
        if (x === x2)
          break;
        eps = eps + dy | 0;
        if (eps << 1 >= dx) {
          y = y + uy | 0;
          eps = eps - dx | 0;
        }
        x = x + ux | 0;
      }
    }
     else {
      y = y1;
      while (true) {
        this.setPixel_0(x, y, this.color);
        if (y === y2)
          break;
        eps = eps + dx | 0;
        if (eps << 1 >= dy) {
          x = x + ux | 0;
          eps = eps - dy | 0;
        }
        y = y + uy | 0;
      }
    }
  };
  Bitmap.prototype.drawRect_tjonv8$ = function (x, y, w, h) {
    this.drawLine_tjonv8$(x, y, x + w | 0, y);
    this.drawLine_tjonv8$(x + w | 0, y, x + w | 0, y + h | 0);
    this.drawLine_tjonv8$(x, y + h | 0, x + w | 0, y + h | 0);
    this.drawLine_tjonv8$(x, y, x, y + h | 0);
  };
  Bitmap.prototype.setPixels_khhbfk$ = function (pixels, offset, x, y, w, h) {
    var a = this.width - x | 0;
    var xWidth = Math_0.min(a, w);
    var a_0 = this.height - y | 0;
    var xHeight = Math_0.min(a_0, h);
    for (var col = 0; col < xWidth; col++) {
      for (var row = 0; row < xHeight; row++) {
        var dOff = Kotlin.imul(this.width, y + row | 0) + x + col | 0;
        var sOff = Kotlin.imul(w, row) + col | 0;
        if (pixels[offset + sOff | 0].a > 0) {
          this.buffer[dOff] = pixels[offset + sOff | 0];
        }
      }
    }
  };
  Bitmap.prototype.copy = function () {
    return new Bitmap(this.width, this.height, this.buffer.slice());
  };
  function Bitmap$Companion() {
    Bitmap$Companion_instance = this;
  }
  Bitmap$Companion.prototype.createBitmap_vux9f0$ = function (w, h) {
    return Bitmap_init(w, h);
  };
  Bitmap$Companion.prototype.createBitmap_34aymq$ = function (pixels, w, h) {
    return new Bitmap(w, h, pixels);
  };
  Bitmap$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Bitmap$Companion_instance = null;
  function Bitmap$Companion_getInstance() {
    if (Bitmap$Companion_instance === null) {
      new Bitmap$Companion();
    }
    return Bitmap$Companion_instance;
  }
  Bitmap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap',
    interfaces: []
  };
  function Bitmap_init(width, height, $this) {
    $this = $this || Object.create(Bitmap.prototype);
    var array = Array_0(Kotlin.imul(width, height));
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = Color$Companion_getInstance().WHITE;
    }
    Bitmap.call($this, width, height, array);
    return $this;
  }
  function Rect(left, top, right, bottom) {
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
  }
  Rect.prototype.width = function () {
    return this.right - this.left + 1 | 0;
  };
  Rect.prototype.height = function () {
    return this.bottom - this.top + 1 | 0;
  };
  Rect.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rect',
    interfaces: []
  };
  Rect.prototype.component1 = function () {
    return this.left;
  };
  Rect.prototype.component2 = function () {
    return this.top;
  };
  Rect.prototype.component3 = function () {
    return this.right;
  };
  Rect.prototype.component4 = function () {
    return this.bottom;
  };
  Rect.prototype.copy_tjonv8$ = function (left, top, right, bottom) {
    return new Rect(left === void 0 ? this.left : left, top === void 0 ? this.top : top, right === void 0 ? this.right : right, bottom === void 0 ? this.bottom : bottom);
  };
  Rect.prototype.toString = function () {
    return 'Rect(left=' + Kotlin.toString(this.left) + (', top=' + Kotlin.toString(this.top)) + (', right=' + Kotlin.toString(this.right)) + (', bottom=' + Kotlin.toString(this.bottom)) + ')';
  };
  Rect.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.left) | 0;
    result = result * 31 + Kotlin.hashCode(this.top) | 0;
    result = result * 31 + Kotlin.hashCode(this.right) | 0;
    result = result * 31 + Kotlin.hashCode(this.bottom) | 0;
    return result;
  };
  Rect.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.left, other.left) && Kotlin.equals(this.top, other.top) && Kotlin.equals(this.right, other.right) && Kotlin.equals(this.bottom, other.bottom)))));
  };
  function RectF(left, top, right, bottom) {
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
  }
  RectF.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RectF',
    interfaces: []
  };
  RectF.prototype.component1 = function () {
    return this.left;
  };
  RectF.prototype.component2 = function () {
    return this.top;
  };
  RectF.prototype.component3 = function () {
    return this.right;
  };
  RectF.prototype.component4 = function () {
    return this.bottom;
  };
  RectF.prototype.copy_7b5o5w$ = function (left, top, right, bottom) {
    return new RectF(left === void 0 ? this.left : left, top === void 0 ? this.top : top, right === void 0 ? this.right : right, bottom === void 0 ? this.bottom : bottom);
  };
  RectF.prototype.toString = function () {
    return 'RectF(left=' + Kotlin.toString(this.left) + (', top=' + Kotlin.toString(this.top)) + (', right=' + Kotlin.toString(this.right)) + (', bottom=' + Kotlin.toString(this.bottom)) + ')';
  };
  RectF.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.left) | 0;
    result = result * 31 + Kotlin.hashCode(this.top) | 0;
    result = result * 31 + Kotlin.hashCode(this.right) | 0;
    result = result * 31 + Kotlin.hashCode(this.bottom) | 0;
    return result;
  };
  RectF.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.left, other.left) && Kotlin.equals(this.top, other.top) && Kotlin.equals(this.right, other.right) && Kotlin.equals(this.bottom, other.bottom)))));
  };
  function Point(x, y) {
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    this.x = x;
    this.y = y;
  }
  Point.prototype.set_vux9f0$ = function (x, y) {
    this.x = x;
    this.y = y;
  };
  Point.prototype.offset_vux9f0$ = function (dx, dy) {
    this.x = this.x + dx | 0;
    this.y = this.y + dy | 0;
  };
  Point.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Point',
    interfaces: []
  };
  Point.prototype.component1 = function () {
    return this.x;
  };
  Point.prototype.component2 = function () {
    return this.y;
  };
  Point.prototype.copy_vux9f0$ = function (x, y) {
    return new Point(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Point.prototype.toString = function () {
    return 'Point(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  Point.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Point.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function Canvas(b) {
    this.bg_0 = b;
  }
  Object.defineProperty(Canvas.prototype, 'width', {
    get: function () {
      return this.bg_0.width;
    }
  });
  Object.defineProperty(Canvas.prototype, 'height', {
    get: function () {
      return this.bg_0.height;
    }
  });
  Object.defineProperty(Canvas.prototype, 'buffer', {
    get: function () {
      return this.bg_0.buffer;
    }
  });
  Canvas.prototype.drawBitmap_t8cslu$ = function (bitmap, left, top) {
    this.bg_0.drawImage_t8cslu$(bitmap, left, top);
  };
  Canvas.prototype.drawBitmap_2map2q$ = function (bitmap, left, top) {
    this.drawBitmap_t8cslu$(bitmap, numberToInt(left), numberToInt(top));
  };
  Canvas.prototype.drawColor_we4i00$ = function (color) {
    this.bg_0.color = color;
    this.bg_0.fillRect_tjonv8$(0, 0, this.bg_0.width, this.bg_0.height);
  };
  Canvas.prototype.drawLine_x3aj6j$ = function (startX, startY, stopX, stopY, paint) {
    this.drawLine_gwdwo5$(startX, startY, stopX, stopY, paint);
  };
  Canvas.prototype.drawLine_gwdwo5$ = function (startX, startY, stopX, stopY, paint) {
    this.bg_0.color = paint.color;
    this.bg_0.drawLine_tjonv8$(numberToInt(startX), numberToInt(startY), numberToInt(stopX), numberToInt(stopY));
  };
  Canvas.prototype.drawR_0 = function (x, y, i, j, paint, color) {
    this.bg_0.color = color;
    switch (paint.style.name) {
      case 'FILL':
        this.bg_0.fillRect_tjonv8$(x, y, i, j);
        break;
      case 'STROKE':
        this.bg_0.drawRect_tjonv8$(x, y, i, j);
        break;
      default:this.bg_0.fillRect_tjonv8$(x, y, i, j);
        break;
    }
  };
  Canvas.prototype.drawRect_x3aj6j$ = function (x, y, i, j, paint) {
    this.drawR_0(x, y, i - x | 0, j - y | 0, paint, paint.color);
  };
  Canvas.prototype.drawRect_ed5hcw$ = function (rect, paint) {
    this.drawR_0(rect.left, rect.top, rect.right - rect.left | 0, rect.bottom - rect.top | 0, paint, paint.color);
  };
  Canvas.prototype.drawRect_mw38p4$ = function (rect, paint) {
    this.drawR_0(numberToInt(rect.left), numberToInt(rect.top), numberToInt(rect.right - rect.left), numberToInt(rect.bottom - rect.top), paint, paint.color);
  };
  Canvas.prototype.drawLines_ffeagz$ = function (dots, paint) {
    this.bg_0.color = paint.color;
    var size = dots.length / 4 | 0;
    for (var i = 0; i < size; i++) {
      this.bg_0.drawLine_tjonv8$(numberToInt(dots[i * 4 | 0]), numberToInt(dots[(i * 4 | 0) + 1 | 0]), numberToInt(dots[(i * 4 | 0) + 2 | 0]), numberToInt(dots[(i * 4 | 0) + 3 | 0]));
    }
  };
  Canvas.prototype.setBitmap_963ehe$ = function (bmp) {
    this.bg_0 = bmp;
  };
  Canvas.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Canvas',
    interfaces: []
  };
  function Canvas_init($this) {
    $this = $this || Object.create(Canvas.prototype);
    Canvas.call($this, Bitmap$Companion_getInstance().createBitmap_vux9f0$(Global_getInstance().SCREEN_WIDTH, Global_getInstance().SCREEN_HEIGHT));
    return $this;
  }
  function Canvas_init_0(width, height, $this) {
    $this = $this || Object.create(Canvas.prototype);
    Canvas.call($this, Bitmap$Companion_getInstance().createBitmap_vux9f0$(width, height));
    return $this;
  }
  function Stack(list) {
    Stack$Companion_getInstance();
    this.items_0 = list;
  }
  Object.defineProperty(Stack.prototype, 'size', {
    get: function () {
      return this.items_0.size;
    }
  });
  Stack.prototype.push_11rb$ = function (element) {
    var position = this.items_0.size;
    this.items_0.add_wxm5ur$(position, element);
  };
  Stack.prototype.toString = function () {
    return this.items_0.toString();
  };
  Stack.prototype.pop = function () {
    var tmp$;
    if (this.items_0.isEmpty()) {
      tmp$ = null;
    }
     else {
      tmp$ = this.items_0.removeAt_za3lpa$(this.items_0.size - 1 | 0);
    }
    return tmp$;
  };
  Stack.prototype.peek = function () {
    var tmp$;
    if (this.items_0.isEmpty()) {
      tmp$ = null;
    }
     else {
      tmp$ = last(this.items_0);
    }
    return tmp$;
  };
  Stack.prototype.clear = function () {
    this.items_0.clear();
  };
  Stack.prototype.iterator = function () {
    return this.items_0.iterator();
  };
  function Stack$Companion() {
    Stack$Companion_instance = this;
  }
  Stack$Companion.prototype.create_287e2$ = function () {
    return new Stack(ArrayList_init());
  };
  Stack$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Stack$Companion_instance = null;
  function Stack$Companion_getInstance() {
    if (Stack$Companion_instance === null) {
      new Stack$Companion();
    }
    return Stack$Companion_instance;
  }
  Stack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Stack',
    interfaces: []
  };
  function Random() {
  }
  Random.prototype.nextInt_za3lpa$ = function (rng) {
    var x = random() * rng;
    return numberToInt(Math_0.floor(x));
  };
  Random.prototype.nextBoolean = function () {
    return this.nextInt_za3lpa$(2) === 1;
  };
  Random.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Random',
    interfaces: []
  };
  function Coder() {
  }
  Coder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Coder',
    interfaces: []
  };
  function ObjectOutput() {
  }
  ObjectOutput.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ObjectOutput',
    interfaces: []
  };
  function ObjectInput() {
  }
  ObjectInput.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ObjectInput',
    interfaces: []
  };
  function Runnable() {
  }
  Runnable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Runnable',
    interfaces: []
  };
  function gbkString($receiver, offset, length) {
    var arr = toTypedArray(sliceArray_0($receiver, until(offset, offset + length | 0)));
    return sysGbkDecode(arr);
  }
  function gbkString_0($receiver) {
    return sysGbkDecode(toTypedArray($receiver));
  }
  function getCString($receiver, from) {
    if (from === void 0)
      from = 0;
    var tmp$;
    var src = from === 0 ? $receiver : sliceArray_0($receiver, until(from, $receiver.length));
    var ind = indexOf(src, 0);
    if (ind === -1) {
      tmp$ = src;
    }
     else {
      tmp$ = toByteArray(slice_0(src, until(0, ind)));
    }
    return tmp$;
  }
  function gbkBytes($receiver) {
    return toByteArray_0(sysGbkEncode($receiver));
  }
  function System() {
    System_instance = this;
  }
  System.prototype.arraycopy_nlwz52$ = function (src, srcPos, dest, destPos, length) {
    for (var i = 0; i < length; i++) {
      dest[destPos + i | 0] = src[srcPos + i | 0];
    }
  };
  System.prototype.arraycopy_vybhjg$ = function (src, srcPos, dest, destPos, length) {
    if ((dest.length - destPos | 0) < length) {
      throw Error_init('array copy dst overflow');
    }
    if ((src.length - srcPos | 0) < length) {
      throw Error_init('array copy src overflow');
    }
    for (var i = 0; i < length; i++) {
      dest[destPos + i | 0] = src[srcPos + i | 0];
    }
  };
  System.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'System',
    interfaces: []
  };
  var System_instance = null;
  function System_getInstance() {
    if (System_instance === null) {
      new System();
    }
    return System_instance;
  }
  function Queue() {
  }
  Queue.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Queue',
    interfaces: []
  };
  function ArrayQueue(base) {
    ArrayQueue$Companion_getInstance();
    this.base_0 = base;
  }
  ArrayQueue.prototype.push_11rb$ = function (item) {
    this.base_0.add_11rb$(item);
  };
  ArrayQueue.prototype.pop = function () {
    var tmp$;
    if (this.base_0.isEmpty()) {
      tmp$ = null;
    }
     else {
      var r = first_0(this.base_0);
      this.base_0.removeAt_za3lpa$(0);
      tmp$ = r;
    }
    return tmp$;
  };
  function ArrayQueue$Companion() {
    ArrayQueue$Companion_instance = this;
  }
  ArrayQueue$Companion.prototype.create_287e2$ = function () {
    return new ArrayQueue(ArrayList_init());
  };
  ArrayQueue$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ArrayQueue$Companion_instance = null;
  function ArrayQueue$Companion_getInstance() {
    if (ArrayQueue$Companion_instance === null) {
      new ArrayQueue$Companion();
    }
    return ArrayQueue$Companion_instance;
  }
  Object.defineProperty(ArrayQueue.prototype, 'size', {
    get: function () {
      return this.base_0.size;
    }
  });
  ArrayQueue.prototype.add_11rb$ = function (element) {
    return this.base_0.add_11rb$(element);
  };
  ArrayQueue.prototype.add_wxm5ur$ = function (index, element) {
    return this.base_0.add_wxm5ur$(index, element);
  };
  ArrayQueue.prototype.addAll_u57x28$ = function (index, elements) {
    return this.base_0.addAll_u57x28$(index, elements);
  };
  ArrayQueue.prototype.addAll_brywnq$ = function (elements) {
    return this.base_0.addAll_brywnq$(elements);
  };
  ArrayQueue.prototype.clear = function () {
    return this.base_0.clear();
  };
  ArrayQueue.prototype.contains_11rb$ = function (element) {
    return this.base_0.contains_11rb$(element);
  };
  ArrayQueue.prototype.containsAll_brywnq$ = function (elements) {
    return this.base_0.containsAll_brywnq$(elements);
  };
  ArrayQueue.prototype.get_za3lpa$ = function (index) {
    return this.base_0.get_za3lpa$(index);
  };
  ArrayQueue.prototype.indexOf_11rb$ = function (element) {
    return this.base_0.indexOf_11rb$(element);
  };
  ArrayQueue.prototype.isEmpty = function () {
    return this.base_0.isEmpty();
  };
  ArrayQueue.prototype.iterator = function () {
    return this.base_0.iterator();
  };
  ArrayQueue.prototype.lastIndexOf_11rb$ = function (element) {
    return this.base_0.lastIndexOf_11rb$(element);
  };
  ArrayQueue.prototype.listIterator = function () {
    return this.base_0.listIterator();
  };
  ArrayQueue.prototype.listIterator_za3lpa$ = function (index) {
    return this.base_0.listIterator_za3lpa$(index);
  };
  ArrayQueue.prototype.remove_11rb$ = function (element) {
    return this.base_0.remove_11rb$(element);
  };
  ArrayQueue.prototype.removeAll_brywnq$ = function (elements) {
    return this.base_0.removeAll_brywnq$(elements);
  };
  ArrayQueue.prototype.removeAt_za3lpa$ = function (index) {
    return this.base_0.removeAt_za3lpa$(index);
  };
  ArrayQueue.prototype.retainAll_brywnq$ = function (elements) {
    return this.base_0.retainAll_brywnq$(elements);
  };
  ArrayQueue.prototype.set_wxm5ur$ = function (index, element) {
    return this.base_0.set_wxm5ur$(index, element);
  };
  ArrayQueue.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return this.base_0.subList_vux9f0$(fromIndex, toIndex);
  };
  ArrayQueue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArrayQueue',
    interfaces: [Queue, MutableList]
  };
  function hexByte(b) {
    var tbl = '0123456789ABCDEF';
    var l = tbl.charCodeAt(b & 15);
    var h = tbl.charCodeAt(b >> 4 & 15);
    return String.fromCharCode(h) + String.fromCharCode(l);
  }
  function hexByte$half(c) {
    var tmp$;
    if ((new CharRange(48, 57)).contains_mef7kx$(c))
      tmp$ = c - 48;
    else if ((new CharRange(97, 102)).contains_mef7kx$(c))
      tmp$ = c - 97 + 10 | 0;
    else if ((new CharRange(65, 70)).contains_mef7kx$(c))
      tmp$ = c - 65 + 10 | 0;
    else
      tmp$ = 0;
    return tmp$;
  }
  function hexByte_0(h, l) {
    var half = hexByte$half;
    return toByte(half(h) << 4 | half(l));
  }
  function hexDecode(s) {
    var $receiver = new IntRange(0, s.length / 2 | 0);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(hexByte_0(s.charCodeAt(item * 2 | 0), s.charCodeAt((item * 2 | 0) + 1 | 0)));
    }
    return toByteArray(destination);
  }
  function hexEncode$lambda(it) {
    return hexByte(it);
  }
  function hexEncode(arr) {
    return joinToString(arr, '', void 0, void 0, void 0, void 0, hexEncode$lambda);
  }
  function File(path) {
    File$Companion_getInstance();
    this.path_0 = path;
  }
  function File$Companion() {
    File$Companion_instance = this;
  }
  File$Companion.prototype.contentsOf_61zpoe$ = function (path) {
    var file = new File(path);
    var rv = file.readAll();
    file.close();
    return rv;
  };
  File$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var File$Companion_instance = null;
  function File$Companion_getInstance() {
    if (File$Companion_instance === null) {
      new File$Companion();
    }
    return File$Companion_instance;
  }
  File.prototype.exists = function () {
    return sysStorageHas(this.path_0);
  };
  File.prototype.createNewFile = function () {
  };
  File.prototype.readAll = function () {
    var tmp$;
    var s = sysStorageGet(this.path_0);
    if (s == null) {
      throw Error_init('File not found: ' + this.path_0);
    }
     else {
      tmp$ = hexDecode(s);
    }
    return tmp$;
  };
  File.prototype.wholeWrite_fqrh44$ = function (buf) {
    sysStorageSet(this.path_0, hexEncode(buf));
  };
  File.prototype.close = function () {
  };
  File.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'File',
    interfaces: []
  };
  function toIntShl($receiver, sft) {
    return ($receiver & 255) << (sft * 8 | 0);
  }
  function byte($receiver, ind) {
    return toByte($receiver >> (ind * 8 | 0) & 255);
  }
  function ObjectInputStream(file) {
    this.file_0 = file;
    this.buffer_0 = this.file_0.readAll();
    this.cur_0 = 0;
    this.version_9ypntb$_0 = 0;
  }
  Object.defineProperty(ObjectInputStream.prototype, 'version', {
    get: function () {
      return this.version_9ypntb$_0;
    },
    set: function (version) {
      this.version_9ypntb$_0 = version;
    }
  });
  ObjectInputStream.prototype.readByte = function () {
    var tmp$;
    return this.buffer_0[tmp$ = this.cur_0, this.cur_0 = tmp$ + 1 | 0, tmp$];
  };
  ObjectInputStream.prototype.readBytes_0 = function (n) {
    var c = this.cur_0;
    this.cur_0 = this.cur_0 + n | 0;
    return sliceArray_0(this.buffer_0, until(c, c + n | 0));
  };
  ObjectInputStream.prototype.readInt = function () {
    var bytes = this.readBytes_0(2);
    return toIntShl(bytes[0], 0) | toIntShl(bytes[1], 1);
  };
  ObjectInputStream.prototype.readLong = function () {
    var bytes = this.readBytes_0(4);
    return Kotlin.Long.fromInt(toIntShl(bytes[0], 0) | toIntShl(bytes[1], 1) | toIntShl(bytes[2], 2) | toIntShl(bytes[3], 3));
  };
  ObjectInputStream.prototype.readString = function () {
    var len = this.readInt();
    return gbkString(this.readBytes_0(len), 0, len);
  };
  ObjectInputStream.prototype.readBoolean = function () {
    return this.readByte() !== 0;
  };
  ObjectInputStream.prototype.readIntArray = function () {
    var len = this.readInt();
    var array = new Int32Array(len);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = this.readInt();
    }
    return array;
  };
  ObjectInputStream.prototype.close = function () {
    this.file_0.close();
  };
  ObjectInputStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ObjectInputStream',
    interfaces: [ObjectInput]
  };
  var readArray = defineInlineFunction('fmj.core.java.readArray_z86k8m$', wrapFunction(function () {
    var Array_0 = Array;
    return function (T_0, isT, io, read) {
      var len = io.readInt();
      var array = Array_0(len);
      var tmp$;
      tmp$ = array.length - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        array[i] = read(io);
      }
      return array;
    };
  }));
  function writeArray(out, objs, write) {
    var tmp$;
    out.writeInt_za3lpa$(objs.length);
    for (tmp$ = 0; tmp$ !== objs.length; ++tmp$) {
      var obj = objs[tmp$];
      write(out, obj);
    }
  }
  function ObjectOutputStream(file) {
    this.file_0 = file;
    this.buffer_0 = ArrayList_init();
  }
  ObjectOutputStream.prototype.writeInt_za3lpa$ = function (v) {
    this.buffer_0.add_11rb$(byte(v, 0));
    this.buffer_0.add_11rb$(byte(v, 1));
  };
  ObjectOutputStream.prototype.writeByte_s8j3t7$ = function (v) {
    this.buffer_0.add_11rb$(v);
  };
  ObjectOutputStream.prototype.writeLong_s8cxhz$ = function (v) {
    var i = v.toInt();
    this.buffer_0.add_11rb$(byte(i, 0));
    this.buffer_0.add_11rb$(byte(i, 1));
    this.buffer_0.add_11rb$(byte(i, 2));
    this.buffer_0.add_11rb$(byte(i, 3));
  };
  ObjectOutputStream.prototype.writeString_61zpoe$ = function (v) {
    var bytes = gbkBytes(v);
    var len = bytes.length;
    this.writeInt_za3lpa$(len);
    this.buffer_0.addAll_brywnq$(toList_0(bytes));
  };
  ObjectOutputStream.prototype.writeBoolean_6taknv$ = function (v) {
    var i = v ? 1 : 0;
    this.writeByte_s8j3t7$(toByte(i));
  };
  ObjectOutputStream.prototype.writeIntArray_q5rwfd$ = function (v) {
    var tmp$;
    this.writeInt_za3lpa$(v.length);
    for (tmp$ = 0; tmp$ !== v.length; ++tmp$) {
      var i = v[tmp$];
      this.writeInt_za3lpa$(i);
    }
  };
  ObjectOutputStream.prototype.close = function () {
    this.file_0.wholeWrite_fqrh44$(toByteArray(this.buffer_0));
    this.file_0.close();
  };
  ObjectOutputStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ObjectOutputStream',
    interfaces: [ObjectOutput]
  };
  function objectInputOf(f) {
    return new ObjectInputStream(f);
  }
  function objectOutputOf(f) {
    return new ObjectOutputStream(f);
  }
  function random() {
    return sysRandom();
  }
  var package$fmj = _.fmj || (_.fmj = {});
  package$fmj.MainGame_init = MainGame_init;
  package$fmj.MainGame = MainGame;
  Object.defineProperty(package$fmj, 'game', {
    get: function () {
      return game;
    }
  });
  package$fmj.main_kand9s$ = main;
  Object.defineProperty(package$fmj, 'Global', {
    get: Global_getInstance
  });
  Object.defineProperty(ScreenViewType, 'SCREEN_DEV_LOGO', {
    get: ScreenViewType$SCREEN_DEV_LOGO_getInstance
  });
  Object.defineProperty(ScreenViewType, 'SCREEN_GAME_LOGO', {
    get: ScreenViewType$SCREEN_GAME_LOGO_getInstance
  });
  Object.defineProperty(ScreenViewType, 'SCREEN_MENU', {
    get: ScreenViewType$SCREEN_MENU_getInstance
  });
  Object.defineProperty(ScreenViewType, 'SCREEN_MAIN_GAME', {
    get: ScreenViewType$SCREEN_MAIN_GAME_getInstance
  });
  Object.defineProperty(ScreenViewType, 'SCREEN_GAME_FAIL', {
    get: ScreenViewType$SCREEN_GAME_FAIL_getInstance
  });
  Object.defineProperty(ScreenViewType, 'SCREEN_SAVE_GAME', {
    get: ScreenViewType$SCREEN_SAVE_GAME_getInstance
  });
  Object.defineProperty(ScreenViewType, 'SCREEN_LOAD_GAME', {
    get: ScreenViewType$SCREEN_LOAD_GAME_getInstance
  });
  package$fmj.ScreenViewType = ScreenViewType;
  Object.defineProperty(Character$State, 'STOP', {
    get: Character$State$STOP_getInstance
  });
  Object.defineProperty(Character$State, 'FORCE_MOVE', {
    get: Character$State$FORCE_MOVE_getInstance
  });
  Object.defineProperty(Character$State, 'WALKING', {
    get: Character$State$WALKING_getInstance
  });
  Object.defineProperty(Character$State, 'PAUSE', {
    get: Character$State$PAUSE_getInstance
  });
  Object.defineProperty(Character$State, 'ACTIVE', {
    get: Character$State$ACTIVE_getInstance
  });
  Object.defineProperty(Character$State, 'Companion', {
    get: Character$State$Companion_getInstance
  });
  Character.State = Character$State;
  var package$characters = package$fmj.characters || (package$fmj.characters = {});
  package$characters.Character = Character;
  Object.defineProperty(Direction, 'North', {
    get: Direction$North_getInstance
  });
  Object.defineProperty(Direction, 'East', {
    get: Direction$East_getInstance
  });
  Object.defineProperty(Direction, 'South', {
    get: Direction$South_getInstance
  });
  Object.defineProperty(Direction, 'West', {
    get: Direction$West_getInstance
  });
  Object.defineProperty(Direction, 'Companion', {
    get: Direction$Companion_getInstance
  });
  package$characters.Direction = Direction;
  package$characters.Buff = Buff;
  Object.defineProperty(BuffMan, 'Companion', {
    get: BuffMan$Companion_getInstance
  });
  package$characters.BuffMan = BuffMan;
  package$characters.health_2sznso$ = health;
  package$characters.calcBuff_925ulc$ = calcBuff;
  FightingCharacter.Diff = FightingCharacter$Diff;
  Object.defineProperty(FightingCharacter, 'Companion', {
    get: FightingCharacter$Companion_getInstance
  });
  package$characters.FightingCharacter = FightingCharacter;
  package$characters.FightingSprite = FightingSprite;
  Object.defineProperty(Monster, 'Companion', {
    get: Monster$Companion_getInstance
  });
  package$characters.Monster = Monster;
  NPC.ICanWalk = NPC$ICanWalk;
  Object.defineProperty(NPC, 'Companion', {
    get: NPC$Companion_getInstance
  });
  package$characters.NPC = NPC;
  Object.defineProperty(Player, 'Companion', {
    get: Player$Companion_getInstance
  });
  package$characters.Player = Player;
  Object.defineProperty(ResLevelupChain, 'Companion', {
    get: ResLevelupChain$Companion_getInstance
  });
  package$characters.ResLevelupChain = ResLevelupChain;
  package$characters.SceneObj = SceneObj;
  Object.defineProperty(WalkingSprite, 'Companion', {
    get: WalkingSprite$Companion_getInstance
  });
  package$characters.WalkingSprite = WalkingSprite;
  var package$combat = package$fmj.combat || (package$fmj.combat = {});
  package$combat.ActionExecutor = ActionExecutor;
  Object.defineProperty(Combat, 'Companion', {
    get: Combat$Companion_getInstance
  });
  package$combat.Combat = Combat;
  Object.defineProperty(Action, 'Companion', {
    get: Action$Companion_getInstance
  });
  var package$actions = package$combat.actions || (package$combat.actions = {});
  package$actions.Action = Action;
  Object.defineProperty(ActionCoopMagic, 'Companion', {
    get: ActionCoopMagic$Companion_getInstance
  });
  package$actions.ActionCoopMagic_init_3g2wtp$ = ActionCoopMagic_init;
  package$actions.ActionCoopMagic_init_zbpvge$ = ActionCoopMagic_init_0;
  package$actions.ActionCoopMagic = ActionCoopMagic;
  package$actions.ActionDefend = ActionDefend;
  package$actions.ActionFlee = ActionFlee;
  Object.defineProperty(ActionMagicAttackAll, 'Companion', {
    get: ActionMagicAttackAll$Companion_getInstance
  });
  package$actions.ActionMagicAttackAll = ActionMagicAttackAll;
  Object.defineProperty(ActionMagicAttackOne, 'Companion', {
    get: ActionMagicAttackOne$Companion_getInstance
  });
  package$actions.ActionMagicAttackOne = ActionMagicAttackOne;
  Object.defineProperty(ActionMagicHelpAll, 'Companion', {
    get: ActionMagicHelpAll$Companion_getInstance
  });
  package$actions.ActionMagicHelpAll = ActionMagicHelpAll;
  Object.defineProperty(ActionMagicHelpOne, 'Companion', {
    get: ActionMagicHelpOne$Companion_getInstance
  });
  package$actions.ActionMagicHelpOne = ActionMagicHelpOne;
  package$actions.ActionMultiTarget = ActionMultiTarget;
  package$actions.ActionPhysicalAttackAll = ActionPhysicalAttackAll;
  package$actions.ActionPhysicalAttackOne = ActionPhysicalAttackOne;
  Object.defineProperty(ActionSelfHurt$State, 'Acting', {
    get: ActionSelfHurt$State$Acting_getInstance
  });
  Object.defineProperty(ActionSelfHurt$State, 'Hurting', {
    get: ActionSelfHurt$State$Hurting_getInstance
  });
  ActionSelfHurt.State = ActionSelfHurt$State;
  package$actions.ActionSelfHurt = ActionSelfHurt;
  package$actions.ActionSingleTarget = ActionSingleTarget;
  package$actions.ActionNop = ActionNop;
  Object.defineProperty(ActionThrowItemAll, 'Companion', {
    get: ActionThrowItemAll$Companion_getInstance
  });
  package$actions.ActionThrowItemAll = ActionThrowItemAll;
  Object.defineProperty(ActionThrowItemOne, 'Companion', {
    get: ActionThrowItemOne$Companion_getInstance
  });
  package$actions.ActionThrowItemOne = ActionThrowItemOne;
  Object.defineProperty(ActionUseItemAll, 'Companion', {
    get: ActionUseItemAll$Companion_getInstance
  });
  package$actions.ActionUseItemAll = ActionUseItemAll;
  Object.defineProperty(ActionUseItemOne, 'Companion', {
    get: ActionUseItemOne$Companion_getInstance
  });
  package$actions.ActionUseItemOne = ActionUseItemOne;
  package$actions.AwardAndPunishPostAction = AwardAndPunishPostAction;
  Object.defineProperty(package$actions, 'CalcDamage', {
    get: CalcDamage_getInstance
  });
  package$actions.PostAction = PostAction;
  var package$anim = package$combat.anim || (package$combat.anim = {});
  package$anim.Animation = Animation;
  package$anim.SequencialAnimation = SequencialAnimation;
  package$anim.FrameAnimation = FrameAnimation;
  package$anim.RaiseAnimation = RaiseAnimation;
  package$anim.RaiseBitmapAnimation = RaiseBitmapAnimation;
  var package$ui = package$combat.ui || (package$combat.ui = {});
  package$ui.CombatSuccess = CombatSuccess;
  package$ui.LevelupScreen = LevelupScreen;
  package$ui.MsgScreen_init_jssv2p$ = MsgScreen_init;
  package$ui.MsgScreen = MsgScreen;
  package$ui.LearnMagicScreen = LearnMagicScreen;
  CombatUI.CallBack = CombatUI$CallBack;
  Object.defineProperty(CombatUI, 'Companion', {
    get: CombatUI$Companion_getInstance
  });
  package$ui.CombatUI = CombatUI;
  var package$gamemenu = package$fmj.gamemenu || (package$fmj.gamemenu = {});
  package$gamemenu.ScreenActorState = ScreenActorState;
  Object.defineProperty(ScreenActorWearing, 'Companion', {
    get: ScreenActorWearing$Companion_getInstance
  });
  package$gamemenu.ScreenActorWearing = ScreenActorWearing;
  package$gamemenu.ScreenChgEquipment = ScreenChgEquipment;
  package$gamemenu.ScreenCommonMenu = ScreenCommonMenu;
  package$gamemenu.ScreenGameMainMenu = ScreenGameMainMenu;
  Object.defineProperty(ScreenGoodsList$Mode, 'Sale', {
    get: ScreenGoodsList$Mode$Sale_getInstance
  });
  Object.defineProperty(ScreenGoodsList$Mode, 'Buy', {
    get: ScreenGoodsList$Mode$Buy_getInstance
  });
  Object.defineProperty(ScreenGoodsList$Mode, 'Use', {
    get: ScreenGoodsList$Mode$Use_getInstance
  });
  ScreenGoodsList.Mode = ScreenGoodsList$Mode;
  ScreenGoodsList.OnItemSelectedListener = ScreenGoodsList$OnItemSelectedListener;
  Object.defineProperty(ScreenGoodsList, 'Companion', {
    get: ScreenGoodsList$Companion_getInstance
  });
  package$gamemenu.ScreenGoodsList = ScreenGoodsList;
  package$gamemenu.ScreenMenuGoods = ScreenMenuGoods;
  package$gamemenu.ScreenMenuProperties = ScreenMenuProperties;
  package$gamemenu.ScreenMenuSystem = ScreenMenuSystem;
  package$gamemenu.ScreenTakeMedicine = ScreenTakeMedicine;
  Object.defineProperty(ScreenUseMagic, 'Companion', {
    get: ScreenUseMagic$Companion_getInstance
  });
  package$gamemenu.ScreenUseMagic = ScreenUseMagic;
  var package$goods = package$fmj.goods || (package$fmj.goods = {});
  package$goods.BaseGoods = BaseGoods;
  package$goods.Throwable = Throwable;
  package$goods.GoodsDecorations = GoodsDecorations;
  package$goods.GoodsDrama = GoodsDrama;
  package$goods.GoodsEquipment = GoodsEquipment;
  package$goods.GoodsHiddenWeapon = GoodsHiddenWeapon;
  package$goods.GoodsManage = GoodsManage;
  package$goods.GoodsMedicine = GoodsMedicine;
  package$goods.GoodsMedicineChg4Ever = GoodsMedicineChg4Ever;
  package$goods.GoodsMedicineLife = GoodsMedicineLife;
  package$goods.GoodsStimulant = GoodsStimulant;
  package$goods.GoodsTudun = GoodsTudun;
  package$goods.GoodsWeapon = GoodsWeapon;
  package$goods.IEatMedicine = IEatMedicine;
  var package$graphics = package$fmj.graphics || (package$fmj.graphics = {});
  Object.defineProperty(package$graphics, 'TextRender', {
    get: TextRender_getInstance
  });
  Object.defineProperty(Tiles, 'Companion', {
    get: Tiles$Companion_getInstance
  });
  package$graphics.Tiles = Tiles;
  Object.defineProperty(package$graphics, 'Util', {
    get: Util_getInstance
  });
  DatLib.Res = DatLib$Res;
  Object.defineProperty(DatLib$ResType, 'GUT', {
    get: DatLib$ResType$GUT_getInstance
  });
  Object.defineProperty(DatLib$ResType, 'MAP', {
    get: DatLib$ResType$MAP_getInstance
  });
  Object.defineProperty(DatLib$ResType, 'ARS', {
    get: DatLib$ResType$ARS_getInstance
  });
  Object.defineProperty(DatLib$ResType, 'MRS', {
    get: DatLib$ResType$MRS_getInstance
  });
  Object.defineProperty(DatLib$ResType, 'SRS', {
    get: DatLib$ResType$SRS_getInstance
  });
  Object.defineProperty(DatLib$ResType, 'GRS', {
    get: DatLib$ResType$GRS_getInstance
  });
  Object.defineProperty(DatLib$ResType, 'TIL', {
    get: DatLib$ResType$TIL_getInstance
  });
  Object.defineProperty(DatLib$ResType, 'ACP', {
    get: DatLib$ResType$ACP_getInstance
  });
  Object.defineProperty(DatLib$ResType, 'GDP', {
    get: DatLib$ResType$GDP_getInstance
  });
  Object.defineProperty(DatLib$ResType, 'GGJ', {
    get: DatLib$ResType$GGJ_getInstance
  });
  Object.defineProperty(DatLib$ResType, 'PIC', {
    get: DatLib$ResType$PIC_getInstance
  });
  Object.defineProperty(DatLib$ResType, 'MLR', {
    get: DatLib$ResType$MLR_getInstance
  });
  DatLib.ResType = DatLib$ResType;
  Object.defineProperty(DatLib, 'Companion', {
    get: DatLib$Companion_getInstance
  });
  var package$lib = package$fmj.lib || (package$fmj.lib = {});
  package$lib.DatLib = DatLib;
  Object.defineProperty(ResBase, 'Companion', {
    get: ResBase$Companion_getInstance
  });
  package$lib.ResBase = ResBase;
  package$lib.ResGut = ResGut;
  package$lib.ResImage = ResImage;
  Object.defineProperty(ResMap, 'Companion', {
    get: ResMap$Companion_getInstance
  });
  package$lib.ResMap = ResMap;
  package$lib.ResSrs = ResSrs;
  var package$magic = package$fmj.magic || (package$fmj.magic = {});
  package$magic.BaseMagic = BaseMagic;
  package$magic.MagicAttack = MagicAttack;
  package$magic.MagicAuxiliary = MagicAuxiliary;
  package$magic.MagicEnhance = MagicEnhance;
  package$magic.MagicRestore = MagicRestore;
  package$magic.MagicSpecial = MagicSpecial;
  package$magic.ResMagicChain = ResMagicChain;
  ScreenMagic.PageText = ScreenMagic$PageText;
  ScreenMagic.OnItemSelectedListener = ScreenMagic$OnItemSelectedListener;
  Object.defineProperty(ScreenMagic, 'Companion', {
    get: ScreenMagic$Companion_getInstance
  });
  package$magic.ScreenMagic = ScreenMagic;
  $$importsForInline$$['fmj.core'] = _;
  var package$scene = package$fmj.scene || (package$fmj.scene = {});
  Object.defineProperty(package$scene, 'SaveLoadGame', {
    get: SaveLoadGame_getInstance
  });
  package$scene.ScreenMainGame = ScreenMainGame;
  var package$script = package$fmj.script || (package$fmj.script = {});
  package$script.Command = Command;
  package$script.Operate = Operate;
  package$script.OperateAdapter = OperateAdapter;
  package$script.OperateBuy = OperateBuy;
  package$script.OperateDrawOnce = OperateDrawOnce;
  package$script.OperateSale = OperateSale;
  package$script.ScriptProcess = ScriptProcess;
  Object.defineProperty(package$script, 'ScriptResources', {
    get: ScriptResources_getInstance
  });
  package$script.makeCommand_wclmr0$ = makeCommand;
  Object.defineProperty(ScriptVM, 'Companion', {
    get: ScriptVM$Companion_getInstance
  });
  package$script.ScriptVM = ScriptVM;
  var package$views = package$fmj.views || (package$fmj.views = {});
  package$views.GameNode = GameNode;
  package$views.Control = Control;
  package$views.Game = Game;
  package$views.BaseScreen = BaseScreen;
  package$views.ScreenAnimation = ScreenAnimation;
  package$views.ScreenMenu = ScreenMenu;
  ScreenMessageBox.OnOKClickListener = ScreenMessageBox$OnOKClickListener;
  Object.defineProperty(ScreenMessageBox, 'Companion', {
    get: ScreenMessageBox$Companion_getInstance
  });
  package$views.ScreenMessageBox = ScreenMessageBox;
  Object.defineProperty(ScreenSaveLoadGame$Operate, 'SAVE', {
    get: ScreenSaveLoadGame$Operate$SAVE_getInstance
  });
  Object.defineProperty(ScreenSaveLoadGame$Operate, 'LOAD', {
    get: ScreenSaveLoadGame$Operate$LOAD_getInstance
  });
  ScreenSaveLoadGame.Operate = ScreenSaveLoadGame$Operate;
  package$views.ScreenSaveLoadGame = ScreenSaveLoadGame;
  package$views.ScreenStack = ScreenStack;
  Object.defineProperty(Color, 'Companion', {
    get: Color$Companion_getInstance
  });
  var package$graphics_0 = _.graphics || (_.graphics = {});
  package$graphics_0.Color_init_qt1dr2$ = Color_init;
  package$graphics_0.Color = Color;
  Object.defineProperty(Paint$Style, 'FILL', {
    get: Paint$Style$FILL_getInstance
  });
  Object.defineProperty(Paint$Style, 'STROKE', {
    get: Paint$Style$STROKE_getInstance
  });
  Object.defineProperty(Paint$Style, 'FILL_AND_STROKE', {
    get: Paint$Style$FILL_AND_STROKE_getInstance
  });
  Paint.Style = Paint$Style;
  package$graphics_0.Paint = Paint;
  Object.defineProperty(Bitmap, 'Companion', {
    get: Bitmap$Companion_getInstance
  });
  package$graphics_0.Bitmap_init_vux9f0$ = Bitmap_init;
  package$graphics_0.Bitmap = Bitmap;
  package$graphics_0.Rect = Rect;
  package$graphics_0.RectF = RectF;
  package$graphics_0.Point = Point;
  package$graphics_0.Canvas_init = Canvas_init;
  package$graphics_0.Canvas_init_vux9f0$ = Canvas_init_0;
  package$graphics_0.Canvas = Canvas;
  Object.defineProperty(Stack, 'Companion', {
    get: Stack$Companion_getInstance
  });
  var package$java = _.java || (_.java = {});
  package$java.Stack = Stack;
  package$java.Random = Random;
  package$java.Coder = Coder;
  package$java.ObjectOutput = ObjectOutput;
  package$java.ObjectInput = ObjectInput;
  package$java.Runnable = Runnable;
  package$java.gbkString_ietg8x$ = gbkString;
  package$java.gbkString_964n91$ = gbkString_0;
  package$java.getCString_mrm5p$ = getCString;
  package$java.gbkBytes_pdl1vz$ = gbkBytes;
  Object.defineProperty(package$java, 'System', {
    get: System_getInstance
  });
  package$java.Queue = Queue;
  Object.defineProperty(ArrayQueue, 'Companion', {
    get: ArrayQueue$Companion_getInstance
  });
  package$java.ArrayQueue = ArrayQueue;
  Object.defineProperty(File, 'Companion', {
    get: File$Companion_getInstance
  });
  package$java.File = File;
  package$java.ObjectInputStream = ObjectInputStream;
  package$java.writeArray_3kjok1$ = writeArray;
  package$java.ObjectOutputStream = ObjectOutputStream;
  package$java.objectInputOf_epr4t4$ = objectInputOf;
  package$java.objectOutputOf_epr4t4$ = objectOutputOf;
  package$java.random = random;
  Control.prototype.showMessage_61zpoe$ = GameNode.prototype.showMessage_61zpoe$;
  Object.defineProperty(Control.prototype, 'game', Object.getOwnPropertyDescriptor(GameNode.prototype, 'game'));
  Game.prototype.popScreen = Control.prototype.popScreen;
  Game.prototype.pushScreen_2o7n0o$ = Control.prototype.pushScreen_2o7n0o$;
  Game.prototype.getCurScreen = Control.prototype.getCurScreen;
  Game.prototype.showMessage_4wgjuj$ = Control.prototype.showMessage_4wgjuj$;
  Game.prototype.showMessage_61zpoe$ = Control.prototype.showMessage_61zpoe$;
  Object.defineProperty(Game.prototype, 'game', Object.getOwnPropertyDescriptor(Control.prototype, 'game'));
  MainGame.prototype.triggerEvent_za3lpa$ = Game.prototype.triggerEvent_za3lpa$;
  MainGame.prototype.gotoAddress_za3lpa$ = Game.prototype.gotoAddress_za3lpa$;
  MainGame.prototype.exitScript = Game.prototype.exitScript;
  MainGame.prototype.popScreen = Game.prototype.popScreen;
  MainGame.prototype.pushScreen_2o7n0o$ = Game.prototype.pushScreen_2o7n0o$;
  MainGame.prototype.getCurScreen = Game.prototype.getCurScreen;
  MainGame.prototype.showMessage_4wgjuj$ = Game.prototype.showMessage_4wgjuj$;
  MainGame.prototype.showMessage_61zpoe$ = Game.prototype.showMessage_61zpoe$;
  BaseScreen.prototype.popScreen = Control.prototype.popScreen;
  BaseScreen.prototype.pushScreen_2o7n0o$ = Control.prototype.pushScreen_2o7n0o$;
  BaseScreen.prototype.getCurScreen = Control.prototype.getCurScreen;
  BaseScreen.prototype.showMessage_4wgjuj$ = Control.prototype.showMessage_4wgjuj$;
  BaseScreen.prototype.showMessage_61zpoe$ = Control.prototype.showMessage_61zpoe$;
  Object.defineProperty(BaseScreen.prototype, 'game', Object.getOwnPropertyDescriptor(Control.prototype, 'game'));
  Object.defineProperty(Combat.prototype, 'isPopup', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'isPopup'));
  Combat.prototype.willAppear = BaseScreen.prototype.willAppear;
  Combat.prototype.popScreen = BaseScreen.prototype.popScreen;
  Combat.prototype.pushScreen_2o7n0o$ = BaseScreen.prototype.pushScreen_2o7n0o$;
  Combat.prototype.getCurScreen = BaseScreen.prototype.getCurScreen;
  Combat.prototype.showMessage_4wgjuj$ = BaseScreen.prototype.showMessage_4wgjuj$;
  Combat.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(Combat.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  Object.defineProperty(LevelupScreen.prototype, 'isPopup', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'isPopup'));
  LevelupScreen.prototype.willAppear = BaseScreen.prototype.willAppear;
  LevelupScreen.prototype.popScreen = BaseScreen.prototype.popScreen;
  LevelupScreen.prototype.pushScreen_2o7n0o$ = BaseScreen.prototype.pushScreen_2o7n0o$;
  LevelupScreen.prototype.getCurScreen = BaseScreen.prototype.getCurScreen;
  LevelupScreen.prototype.showMessage_4wgjuj$ = BaseScreen.prototype.showMessage_4wgjuj$;
  LevelupScreen.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(LevelupScreen.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  Object.defineProperty(MsgScreen.prototype, 'isPopup', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'isPopup'));
  MsgScreen.prototype.willAppear = BaseScreen.prototype.willAppear;
  MsgScreen.prototype.popScreen = BaseScreen.prototype.popScreen;
  MsgScreen.prototype.pushScreen_2o7n0o$ = BaseScreen.prototype.pushScreen_2o7n0o$;
  MsgScreen.prototype.getCurScreen = BaseScreen.prototype.getCurScreen;
  MsgScreen.prototype.showMessage_4wgjuj$ = BaseScreen.prototype.showMessage_4wgjuj$;
  MsgScreen.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(MsgScreen.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  Object.defineProperty(LearnMagicScreen.prototype, 'isPopup', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'isPopup'));
  LearnMagicScreen.prototype.willAppear = BaseScreen.prototype.willAppear;
  LearnMagicScreen.prototype.popScreen = BaseScreen.prototype.popScreen;
  LearnMagicScreen.prototype.pushScreen_2o7n0o$ = BaseScreen.prototype.pushScreen_2o7n0o$;
  LearnMagicScreen.prototype.getCurScreen = BaseScreen.prototype.getCurScreen;
  LearnMagicScreen.prototype.showMessage_4wgjuj$ = BaseScreen.prototype.showMessage_4wgjuj$;
  LearnMagicScreen.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(LearnMagicScreen.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  Object.defineProperty(CombatUI$MainMenu.prototype, 'isPopup', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'isPopup'));
  CombatUI$MainMenu.prototype.willAppear = BaseScreen.prototype.willAppear;
  CombatUI$MainMenu.prototype.popScreen = BaseScreen.prototype.popScreen;
  CombatUI$MainMenu.prototype.pushScreen_2o7n0o$ = BaseScreen.prototype.pushScreen_2o7n0o$;
  CombatUI$MainMenu.prototype.getCurScreen = BaseScreen.prototype.getCurScreen;
  CombatUI$MainMenu.prototype.showMessage_4wgjuj$ = BaseScreen.prototype.showMessage_4wgjuj$;
  CombatUI$MainMenu.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(CombatUI$MainMenu.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  Object.defineProperty(CombatUI$MenuCharacterSelect.prototype, 'isPopup', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'isPopup'));
  CombatUI$MenuCharacterSelect.prototype.willAppear = BaseScreen.prototype.willAppear;
  CombatUI$MenuCharacterSelect.prototype.popScreen = BaseScreen.prototype.popScreen;
  CombatUI$MenuCharacterSelect.prototype.pushScreen_2o7n0o$ = BaseScreen.prototype.pushScreen_2o7n0o$;
  CombatUI$MenuCharacterSelect.prototype.getCurScreen = BaseScreen.prototype.getCurScreen;
  CombatUI$MenuCharacterSelect.prototype.showMessage_4wgjuj$ = BaseScreen.prototype.showMessage_4wgjuj$;
  CombatUI$MenuCharacterSelect.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(CombatUI$MenuCharacterSelect.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  Object.defineProperty(CombatUI$MenuMisc$MenuState.prototype, 'isPopup', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'isPopup'));
  CombatUI$MenuMisc$MenuState.prototype.willAppear = BaseScreen.prototype.willAppear;
  CombatUI$MenuMisc$MenuState.prototype.popScreen = BaseScreen.prototype.popScreen;
  CombatUI$MenuMisc$MenuState.prototype.pushScreen_2o7n0o$ = BaseScreen.prototype.pushScreen_2o7n0o$;
  CombatUI$MenuMisc$MenuState.prototype.getCurScreen = BaseScreen.prototype.getCurScreen;
  CombatUI$MenuMisc$MenuState.prototype.showMessage_4wgjuj$ = BaseScreen.prototype.showMessage_4wgjuj$;
  CombatUI$MenuMisc$MenuState.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(CombatUI$MenuMisc$MenuState.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  Object.defineProperty(CombatUI$MenuMisc.prototype, 'isPopup', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'isPopup'));
  CombatUI$MenuMisc.prototype.willAppear = BaseScreen.prototype.willAppear;
  CombatUI$MenuMisc.prototype.popScreen = BaseScreen.prototype.popScreen;
  CombatUI$MenuMisc.prototype.pushScreen_2o7n0o$ = BaseScreen.prototype.pushScreen_2o7n0o$;
  CombatUI$MenuMisc.prototype.getCurScreen = BaseScreen.prototype.getCurScreen;
  CombatUI$MenuMisc.prototype.showMessage_4wgjuj$ = BaseScreen.prototype.showMessage_4wgjuj$;
  CombatUI$MenuMisc.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(CombatUI$MenuMisc.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  Object.defineProperty(CombatUI$MenuGoods$equipSelected$ObjectLiteral.prototype, 'isPopup', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'isPopup'));
  CombatUI$MenuGoods$equipSelected$ObjectLiteral.prototype.willAppear = BaseScreen.prototype.willAppear;
  CombatUI$MenuGoods$equipSelected$ObjectLiteral.prototype.popScreen = BaseScreen.prototype.popScreen;
  CombatUI$MenuGoods$equipSelected$ObjectLiteral.prototype.pushScreen_2o7n0o$ = BaseScreen.prototype.pushScreen_2o7n0o$;
  CombatUI$MenuGoods$equipSelected$ObjectLiteral.prototype.getCurScreen = BaseScreen.prototype.getCurScreen;
  CombatUI$MenuGoods$equipSelected$ObjectLiteral.prototype.showMessage_4wgjuj$ = BaseScreen.prototype.showMessage_4wgjuj$;
  CombatUI$MenuGoods$equipSelected$ObjectLiteral.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(CombatUI$MenuGoods$equipSelected$ObjectLiteral.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  Object.defineProperty(CombatUI$MenuGoods.prototype, 'isPopup', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'isPopup'));
  CombatUI$MenuGoods.prototype.willAppear = BaseScreen.prototype.willAppear;
  CombatUI$MenuGoods.prototype.popScreen = BaseScreen.prototype.popScreen;
  CombatUI$MenuGoods.prototype.pushScreen_2o7n0o$ = BaseScreen.prototype.pushScreen_2o7n0o$;
  CombatUI$MenuGoods.prototype.getCurScreen = BaseScreen.prototype.getCurScreen;
  CombatUI$MenuGoods.prototype.showMessage_4wgjuj$ = BaseScreen.prototype.showMessage_4wgjuj$;
  CombatUI$MenuGoods.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(CombatUI$MenuGoods.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  CombatUI.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(CombatUI.prototype, 'isPopup', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'isPopup'));
  CombatUI.prototype.willAppear = BaseScreen.prototype.willAppear;
  Object.defineProperty(CombatUI.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  Object.defineProperty(ScreenActorState.prototype, 'isPopup', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'isPopup'));
  ScreenActorState.prototype.willAppear = BaseScreen.prototype.willAppear;
  ScreenActorState.prototype.popScreen = BaseScreen.prototype.popScreen;
  ScreenActorState.prototype.pushScreen_2o7n0o$ = BaseScreen.prototype.pushScreen_2o7n0o$;
  ScreenActorState.prototype.getCurScreen = BaseScreen.prototype.getCurScreen;
  ScreenActorState.prototype.showMessage_4wgjuj$ = BaseScreen.prototype.showMessage_4wgjuj$;
  ScreenActorState.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(ScreenActorState.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  Object.defineProperty(ScreenActorWearing.prototype, 'isPopup', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'isPopup'));
  ScreenActorWearing.prototype.willAppear = BaseScreen.prototype.willAppear;
  ScreenActorWearing.prototype.popScreen = BaseScreen.prototype.popScreen;
  ScreenActorWearing.prototype.pushScreen_2o7n0o$ = BaseScreen.prototype.pushScreen_2o7n0o$;
  ScreenActorWearing.prototype.getCurScreen = BaseScreen.prototype.getCurScreen;
  ScreenActorWearing.prototype.showMessage_4wgjuj$ = BaseScreen.prototype.showMessage_4wgjuj$;
  ScreenActorWearing.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(ScreenActorWearing.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  Object.defineProperty(ScreenChgEquipment.prototype, 'isPopup', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'isPopup'));
  ScreenChgEquipment.prototype.willAppear = BaseScreen.prototype.willAppear;
  ScreenChgEquipment.prototype.popScreen = BaseScreen.prototype.popScreen;
  ScreenChgEquipment.prototype.pushScreen_2o7n0o$ = BaseScreen.prototype.pushScreen_2o7n0o$;
  ScreenChgEquipment.prototype.getCurScreen = BaseScreen.prototype.getCurScreen;
  ScreenChgEquipment.prototype.showMessage_4wgjuj$ = BaseScreen.prototype.showMessage_4wgjuj$;
  ScreenChgEquipment.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(ScreenChgEquipment.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  ScreenCommonMenu.prototype.willAppear = BaseScreen.prototype.willAppear;
  ScreenCommonMenu.prototype.popScreen = BaseScreen.prototype.popScreen;
  ScreenCommonMenu.prototype.pushScreen_2o7n0o$ = BaseScreen.prototype.pushScreen_2o7n0o$;
  ScreenCommonMenu.prototype.getCurScreen = BaseScreen.prototype.getCurScreen;
  ScreenCommonMenu.prototype.showMessage_4wgjuj$ = BaseScreen.prototype.showMessage_4wgjuj$;
  ScreenCommonMenu.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(ScreenCommonMenu.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  ScreenGameMainMenu$screenSelectActor$ObjectLiteral.prototype.willAppear = BaseScreen.prototype.willAppear;
  ScreenGameMainMenu$screenSelectActor$ObjectLiteral.prototype.popScreen = BaseScreen.prototype.popScreen;
  ScreenGameMainMenu$screenSelectActor$ObjectLiteral.prototype.pushScreen_2o7n0o$ = BaseScreen.prototype.pushScreen_2o7n0o$;
  ScreenGameMainMenu$screenSelectActor$ObjectLiteral.prototype.getCurScreen = BaseScreen.prototype.getCurScreen;
  ScreenGameMainMenu$screenSelectActor$ObjectLiteral.prototype.showMessage_4wgjuj$ = BaseScreen.prototype.showMessage_4wgjuj$;
  ScreenGameMainMenu$screenSelectActor$ObjectLiteral.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(ScreenGameMainMenu$screenSelectActor$ObjectLiteral.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  ScreenGameMainMenu.prototype.willAppear = BaseScreen.prototype.willAppear;
  ScreenGameMainMenu.prototype.popScreen = BaseScreen.prototype.popScreen;
  ScreenGameMainMenu.prototype.pushScreen_2o7n0o$ = BaseScreen.prototype.pushScreen_2o7n0o$;
  ScreenGameMainMenu.prototype.getCurScreen = BaseScreen.prototype.getCurScreen;
  ScreenGameMainMenu.prototype.showMessage_4wgjuj$ = BaseScreen.prototype.showMessage_4wgjuj$;
  ScreenGameMainMenu.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(ScreenGameMainMenu.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  Object.defineProperty(ScreenGoodsList.prototype, 'isPopup', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'isPopup'));
  ScreenGoodsList.prototype.popScreen = BaseScreen.prototype.popScreen;
  ScreenGoodsList.prototype.pushScreen_2o7n0o$ = BaseScreen.prototype.pushScreen_2o7n0o$;
  ScreenGoodsList.prototype.getCurScreen = BaseScreen.prototype.getCurScreen;
  ScreenGoodsList.prototype.showMessage_4wgjuj$ = BaseScreen.prototype.showMessage_4wgjuj$;
  ScreenGoodsList.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(ScreenGoodsList.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  ScreenMenuGoods$equipSelected$ObjectLiteral.prototype.willAppear = BaseScreen.prototype.willAppear;
  ScreenMenuGoods$equipSelected$ObjectLiteral.prototype.popScreen = BaseScreen.prototype.popScreen;
  ScreenMenuGoods$equipSelected$ObjectLiteral.prototype.pushScreen_2o7n0o$ = BaseScreen.prototype.pushScreen_2o7n0o$;
  ScreenMenuGoods$equipSelected$ObjectLiteral.prototype.getCurScreen = BaseScreen.prototype.getCurScreen;
  ScreenMenuGoods$equipSelected$ObjectLiteral.prototype.showMessage_4wgjuj$ = BaseScreen.prototype.showMessage_4wgjuj$;
  ScreenMenuGoods$equipSelected$ObjectLiteral.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(ScreenMenuGoods$equipSelected$ObjectLiteral.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  ScreenMenuGoods.prototype.willAppear = BaseScreen.prototype.willAppear;
  ScreenMenuGoods.prototype.popScreen = BaseScreen.prototype.popScreen;
  ScreenMenuGoods.prototype.pushScreen_2o7n0o$ = BaseScreen.prototype.pushScreen_2o7n0o$;
  ScreenMenuGoods.prototype.getCurScreen = BaseScreen.prototype.getCurScreen;
  ScreenMenuGoods.prototype.showMessage_4wgjuj$ = BaseScreen.prototype.showMessage_4wgjuj$;
  ScreenMenuGoods.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(ScreenMenuGoods.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  ScreenMenuProperties.prototype.willAppear = BaseScreen.prototype.willAppear;
  ScreenMenuProperties.prototype.popScreen = BaseScreen.prototype.popScreen;
  ScreenMenuProperties.prototype.pushScreen_2o7n0o$ = BaseScreen.prototype.pushScreen_2o7n0o$;
  ScreenMenuProperties.prototype.getCurScreen = BaseScreen.prototype.getCurScreen;
  ScreenMenuProperties.prototype.showMessage_4wgjuj$ = BaseScreen.prototype.showMessage_4wgjuj$;
  ScreenMenuProperties.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(ScreenMenuProperties.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  ScreenMenuSystem.prototype.willAppear = BaseScreen.prototype.willAppear;
  ScreenMenuSystem.prototype.popScreen = BaseScreen.prototype.popScreen;
  ScreenMenuSystem.prototype.pushScreen_2o7n0o$ = BaseScreen.prototype.pushScreen_2o7n0o$;
  ScreenMenuSystem.prototype.getCurScreen = BaseScreen.prototype.getCurScreen;
  ScreenMenuSystem.prototype.showMessage_4wgjuj$ = BaseScreen.prototype.showMessage_4wgjuj$;
  ScreenMenuSystem.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(ScreenMenuSystem.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  Object.defineProperty(ScreenTakeMedicine.prototype, 'isPopup', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'isPopup'));
  ScreenTakeMedicine.prototype.willAppear = BaseScreen.prototype.willAppear;
  ScreenTakeMedicine.prototype.popScreen = BaseScreen.prototype.popScreen;
  ScreenTakeMedicine.prototype.pushScreen_2o7n0o$ = BaseScreen.prototype.pushScreen_2o7n0o$;
  ScreenTakeMedicine.prototype.getCurScreen = BaseScreen.prototype.getCurScreen;
  ScreenTakeMedicine.prototype.showMessage_4wgjuj$ = BaseScreen.prototype.showMessage_4wgjuj$;
  ScreenTakeMedicine.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(ScreenTakeMedicine.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  Object.defineProperty(ScreenUseMagic.prototype, 'isPopup', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'isPopup'));
  ScreenUseMagic.prototype.willAppear = BaseScreen.prototype.willAppear;
  ScreenUseMagic.prototype.popScreen = BaseScreen.prototype.popScreen;
  ScreenUseMagic.prototype.pushScreen_2o7n0o$ = BaseScreen.prototype.pushScreen_2o7n0o$;
  ScreenUseMagic.prototype.getCurScreen = BaseScreen.prototype.getCurScreen;
  ScreenUseMagic.prototype.showMessage_4wgjuj$ = BaseScreen.prototype.showMessage_4wgjuj$;
  ScreenUseMagic.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(ScreenUseMagic.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  GoodsHiddenWeapon.prototype.attack_qpjxya$ = Throwable.prototype.attack_qpjxya$;
  GoodsWeapon.prototype.attack_qpjxya$ = Throwable.prototype.attack_qpjxya$;
  Object.defineProperty(ScreenMagic.prototype, 'isPopup', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'isPopup'));
  ScreenMagic.prototype.willAppear = BaseScreen.prototype.willAppear;
  ScreenMagic.prototype.popScreen = BaseScreen.prototype.popScreen;
  ScreenMagic.prototype.pushScreen_2o7n0o$ = BaseScreen.prototype.pushScreen_2o7n0o$;
  ScreenMagic.prototype.getCurScreen = BaseScreen.prototype.getCurScreen;
  ScreenMagic.prototype.showMessage_4wgjuj$ = BaseScreen.prototype.showMessage_4wgjuj$;
  ScreenMagic.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(ScreenMagic.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  Object.defineProperty(ScreenMainGame.prototype, 'isPopup', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'isPopup'));
  ScreenMainGame.prototype.willAppear = BaseScreen.prototype.willAppear;
  ScreenMainGame.prototype.popScreen = BaseScreen.prototype.popScreen;
  ScreenMainGame.prototype.pushScreen_2o7n0o$ = BaseScreen.prototype.pushScreen_2o7n0o$;
  ScreenMainGame.prototype.getCurScreen = BaseScreen.prototype.getCurScreen;
  ScreenMainGame.prototype.showMessage_4wgjuj$ = BaseScreen.prototype.showMessage_4wgjuj$;
  ScreenMainGame.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(ScreenMainGame.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  OperateBuy$BuyGoodsScreen.prototype.willAppear = BaseScreen.prototype.willAppear;
  OperateBuy$BuyGoodsScreen.prototype.popScreen = BaseScreen.prototype.popScreen;
  OperateBuy$BuyGoodsScreen.prototype.pushScreen_2o7n0o$ = BaseScreen.prototype.pushScreen_2o7n0o$;
  OperateBuy$BuyGoodsScreen.prototype.getCurScreen = BaseScreen.prototype.getCurScreen;
  OperateBuy$BuyGoodsScreen.prototype.showMessage_4wgjuj$ = BaseScreen.prototype.showMessage_4wgjuj$;
  OperateBuy$BuyGoodsScreen.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(OperateBuy$BuyGoodsScreen.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  OperateBuy.prototype.popScreen = Control.prototype.popScreen;
  OperateBuy.prototype.pushScreen_2o7n0o$ = Control.prototype.pushScreen_2o7n0o$;
  OperateBuy.prototype.getCurScreen = Control.prototype.getCurScreen;
  OperateBuy.prototype.showMessage_4wgjuj$ = Control.prototype.showMessage_4wgjuj$;
  OperateBuy.prototype.showMessage_61zpoe$ = Control.prototype.showMessage_61zpoe$;
  Object.defineProperty(OperateBuy.prototype, 'game', Object.getOwnPropertyDescriptor(Control.prototype, 'game'));
  OperateSale$SaleGoodsScreen.prototype.willAppear = BaseScreen.prototype.willAppear;
  OperateSale$SaleGoodsScreen.prototype.popScreen = BaseScreen.prototype.popScreen;
  OperateSale$SaleGoodsScreen.prototype.pushScreen_2o7n0o$ = BaseScreen.prototype.pushScreen_2o7n0o$;
  OperateSale$SaleGoodsScreen.prototype.getCurScreen = BaseScreen.prototype.getCurScreen;
  OperateSale$SaleGoodsScreen.prototype.showMessage_4wgjuj$ = BaseScreen.prototype.showMessage_4wgjuj$;
  OperateSale$SaleGoodsScreen.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(OperateSale$SaleGoodsScreen.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  OperateSale.prototype.popScreen = Control.prototype.popScreen;
  OperateSale.prototype.pushScreen_2o7n0o$ = Control.prototype.pushScreen_2o7n0o$;
  OperateSale.prototype.getCurScreen = Control.prototype.getCurScreen;
  OperateSale.prototype.showMessage_4wgjuj$ = Control.prototype.showMessage_4wgjuj$;
  OperateSale.prototype.showMessage_61zpoe$ = Control.prototype.showMessage_61zpoe$;
  Object.defineProperty(OperateSale.prototype, 'game', Object.getOwnPropertyDescriptor(Control.prototype, 'game'));
  ScriptVM.prototype.popScreen = Control.prototype.popScreen;
  ScriptVM.prototype.pushScreen_2o7n0o$ = Control.prototype.pushScreen_2o7n0o$;
  ScriptVM.prototype.getCurScreen = Control.prototype.getCurScreen;
  ScriptVM.prototype.showMessage_4wgjuj$ = Control.prototype.showMessage_4wgjuj$;
  ScriptVM.prototype.showMessage_61zpoe$ = Control.prototype.showMessage_61zpoe$;
  Object.defineProperty(ScriptVM.prototype, 'game', Object.getOwnPropertyDescriptor(Control.prototype, 'game'));
  Object.defineProperty(ScreenAnimation.prototype, 'isPopup', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'isPopup'));
  ScreenAnimation.prototype.willAppear = BaseScreen.prototype.willAppear;
  ScreenAnimation.prototype.popScreen = BaseScreen.prototype.popScreen;
  ScreenAnimation.prototype.pushScreen_2o7n0o$ = BaseScreen.prototype.pushScreen_2o7n0o$;
  ScreenAnimation.prototype.getCurScreen = BaseScreen.prototype.getCurScreen;
  ScreenAnimation.prototype.showMessage_4wgjuj$ = BaseScreen.prototype.showMessage_4wgjuj$;
  ScreenAnimation.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(ScreenAnimation.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  Object.defineProperty(ScreenMenu.prototype, 'isPopup', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'isPopup'));
  ScreenMenu.prototype.willAppear = BaseScreen.prototype.willAppear;
  ScreenMenu.prototype.popScreen = BaseScreen.prototype.popScreen;
  ScreenMenu.prototype.pushScreen_2o7n0o$ = BaseScreen.prototype.pushScreen_2o7n0o$;
  ScreenMenu.prototype.getCurScreen = BaseScreen.prototype.getCurScreen;
  ScreenMenu.prototype.showMessage_4wgjuj$ = BaseScreen.prototype.showMessage_4wgjuj$;
  ScreenMenu.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(ScreenMenu.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  ScreenMessageBox.prototype.willAppear = BaseScreen.prototype.willAppear;
  ScreenMessageBox.prototype.popScreen = BaseScreen.prototype.popScreen;
  ScreenMessageBox.prototype.pushScreen_2o7n0o$ = BaseScreen.prototype.pushScreen_2o7n0o$;
  ScreenMessageBox.prototype.getCurScreen = BaseScreen.prototype.getCurScreen;
  ScreenMessageBox.prototype.showMessage_4wgjuj$ = BaseScreen.prototype.showMessage_4wgjuj$;
  ScreenMessageBox.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(ScreenMessageBox.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  Object.defineProperty(ScreenSaveLoadGame.prototype, 'isPopup', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'isPopup'));
  ScreenSaveLoadGame.prototype.willAppear = BaseScreen.prototype.willAppear;
  ScreenSaveLoadGame.prototype.popScreen = BaseScreen.prototype.popScreen;
  ScreenSaveLoadGame.prototype.pushScreen_2o7n0o$ = BaseScreen.prototype.pushScreen_2o7n0o$;
  ScreenSaveLoadGame.prototype.getCurScreen = BaseScreen.prototype.getCurScreen;
  ScreenSaveLoadGame.prototype.showMessage_4wgjuj$ = BaseScreen.prototype.showMessage_4wgjuj$;
  ScreenSaveLoadGame.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(ScreenSaveLoadGame.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  ScreenStack$showMessage$ObjectLiteral.prototype.willAppear = BaseScreen.prototype.willAppear;
  ScreenStack$showMessage$ObjectLiteral.prototype.popScreen = BaseScreen.prototype.popScreen;
  ScreenStack$showMessage$ObjectLiteral.prototype.pushScreen_2o7n0o$ = BaseScreen.prototype.pushScreen_2o7n0o$;
  ScreenStack$showMessage$ObjectLiteral.prototype.getCurScreen = BaseScreen.prototype.getCurScreen;
  ScreenStack$showMessage$ObjectLiteral.prototype.showMessage_4wgjuj$ = BaseScreen.prototype.showMessage_4wgjuj$;
  ScreenStack$showMessage$ObjectLiteral.prototype.showMessage_61zpoe$ = BaseScreen.prototype.showMessage_61zpoe$;
  Object.defineProperty(ScreenStack$showMessage$ObjectLiteral.prototype, 'game', Object.getOwnPropertyDescriptor(BaseScreen.prototype, 'game'));
  ScreenStack.prototype.showMessage_61zpoe$ = GameNode.prototype.showMessage_61zpoe$;
  Object.defineProperty(ScreenStack.prototype, 'game', Object.getOwnPropertyDescriptor(GameNode.prototype, 'game'));
  game = MainGame_init();
  main([]);
  Kotlin.defineModule('fmj.core', _);
  return _;
}(typeof this['fmj.core'] === 'undefined' ? {} : this['fmj.core'], kotlin);
