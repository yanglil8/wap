/* generated @ 2019-7-3 10:05:58*/
(function (a) {
    function b(d) {
        if (c[d]) return c[d].exports;
        var e = c[d] = {
            i: d,
            l: !1,
            exports: {}
        };
        return a[d].call(e.exports, e, e.exports, b), e.l = !0, e.exports
    }
    var c = {};
    return b.m = a, b.c = c, b.i = function (a) {
        return a
    }, b.d = function (a, c, d) {
        b.o(a, c) || Object.defineProperty(a, c, {
            configurable: !1,
            enumerable: !0,
            get: d
        })
    }, b.n = function (a) {
        var c = a && a.__esModule ? function () {
            return a['default']
        } : function () {
            return a
        };
        return b.d(c, 'a', c), c
    }, b.o = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }, b.p = '/', b(b.s = 28)
})([function (a, b) {
    'use strict';
    b.c = function (a) {
        var b = a.jsApiList,
            d = {};
        (b || []).forEach(function (a) {
            e[a] && (d[a] = !0)
        });
        var f = a.success;
        a.success = function (a, b) {
            if (a.success)
                for (var c in d) a.data[c] = !0;
            f && f(a, b)
        }, c._bridge.checkJsApi(a)
    }, b.a = function (a, b, c, g) {
        b && (d[a] = b, c && (e[a] = !0), g && (f[a] = !0))
    }, b.b = function (a) {
        var b = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {},
            e = d[a];
        if (e) {
            var g = e(b);
            g && (a = g.name, b = g.params)
        }
        f[a] || c._bridge.call(a, b)
    };
    var c = window.qing,
        d = {},
        e = {},
        f = {}
}, function (a, b, c) {
    'use strict';
    c.d(b, 'b', function () {
        return d
    }), c.d(b, 'a', function () {
        return e
    });
    var d = function (a) {
            console && console.log('[Qing] ' + a)
        },
        e = function (a) {
            console && console.warn('[Qing] ' + a)
        }
}, function (a, b, c) {
    'use strict';
    var d = c(5),
        e = Object.assign || function (a) {
            for (var b, c = 1; c < arguments.length; c++)
                for (var d in b = arguments[c], b) Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
            return a
        },
        f = '\u9274\u6743\u5931\u8D25',
        g = '\u83B7\u53D6\u7B7E\u540D\u5931\u8D25';
    b.a = function (a, b) {
        function h(b, c, d) {
            return b && b.appId && b.timeStamp && b.nonceStr && b.signature ? void a.call('runtime.auth', e({}, b, {
                success: function (a) {
                    'string' == typeof a.success && (a.success = 'true' === a.success), a.success ? c && c(a) : d && d(f)
                },
                error: function () {
                    d && d(f)
                }
            })) : d('\u7B7E\u540D\u4FE1\u606F\u9519\u8BEF')
        }
        if ('function' == typeof b.success)
            if (b.appId && b.timeStamp && b.nonceStr && b.signature) h(b, b.success, b.error);
            else if (b.signUrl) {
            var i = encodeURIComponent(location.href.split('#')[0]);
            /^file:/.test(location.href) && (i = encodeURIComponent(location.href.replace(/file:\/\//, ''))), c.i(d.a)({
                url: b.signUrl.replace(/\?|$/, '?url=' + i + '&').replace(/\&$/, ''),
                method: b.signMethod || 'post',
                success: function (a) {
                    if (!a || !a.success || !a.data) return void(b.error && b.error(g));
                    var c = a.data;
                    'function' == typeof b.signFormat && (c = b.signFormat(c)), h(c, b.success, b.error)
                },
                error: function () {
                    b.error && b.error(g)
                }
            })
        } else b.error && b.error('\u53C2\u6570\u9519\u8BEF')
    }
}, function (a, b) {
    'use strict';

    function c() {
        function a(a, b, d) {
            b.split(',').forEach(function (b) {
                var e = c.apis[b] = {
                    version: a
                };
                ('both' === d || 'ios' === d) && (e.ios = 1), ('both' === d || 'android' === d) && (e.android = 1)
            })
        }
        if (c.apis) return c.apis;
        var b = {
            both: {
                "0.9.0": 'hideWebViewTitle,setWebViewTitle,gotoApp,getPersonInfo,getNetworkType,share,switchCompany,personInfo,chat,selectPerson,fetchAvatar,joinBandCallback,socialShare,localFunction,selectFile,showFile,selectOrg,selectPic,scanQRCode,selectPersons',
                "0.9.3": 'gotoMyFile',
                "0.9.4": 'getPersonDepartment,getAdminOpenId',
                "0.9.5": 'setWebViewTitleBar,closeWebView',
                "0.9.6": 'createPop,closePop,getLocation,selectLocation',
                "0.9.11": 'defback,setDepartmentHeader',
                "0.9.12": 'clipBoard,freeCall,validate,orgManage',
                "0.9.13": 'enterpriseAuth',
                "0.9.14": 'selectOrgs',
                "0.9.16": 'previewImage',
                "0.9.17": 'iAppRevision,selectCloudhubContact,selectMobileContact',
                "0.9.18": 'gotoLightApp',
                "0.9.19": 'recordScreenshotsInfo,companyRename',
                "0.9.20": 'selectPhoto,gotoOpenAppRangeView',
                "0.9.21": 'extPersonInfo,selectPersonsInGroup,startLightApp,rotateUI',
                "0.9.22": 'startSignFeedback',
                "0.9.23": 'startRecord,stopRecord,playVoice,pauseVoice,stopVoice,uploadVoice,downloadVoice',
                "0.9.24": 'scanBizCard',
                "0.9.25": 'groupAppSort,screenShare,getMobileContact',
                "0.9.26": 'shareFile',
                "0.9.27": 'selectGroups',
                "0.9.28": 'defTitleBar',
                "0.9.29": 'selectConcernPersons',
                "0.9.30": 'mergeMsgRecord',
                "0.9.50": 'invoice,voiceRecognize,projection,getProjectionState,savePic,addCalendarEvent,runtime.auth,runtime.jsReady,ui.toast',
                "0.9.51": 'chooseImage,uploadImage,downloadImage,cloudoffice.request,cloudoffice.clearCardNotify,cloudoffice.showCardNotify,cloudoffice.getRoleType,cloudoffice.textShareClosed,cloudoffice.checkAppAuth,cloudoffice.downloadPic',
                "0.9.52": 'dateTimePicker',
                "0.9.55": 'getWiFi,selectAnyLocation,bluetooth.openBluetoothAdapter,bluetooth.closeBluetoothAdapter,bluetooth.getBluetoothAdapterState,bluetooth.onBluetoothAdapterStateChange,bluetooth.startBluetoothDevicesDiscovery,bluetooth.stopBluetoothDevicesDiscovery,bluetooth.getBluetoothDevices,bluetooth.onBluetoothDeviceFound,bluetooth.getConnectedBluetoothDevices,bluetooth.createBLEConnection,bluetooth.closeBLEConnection,bluetooth.getBLEDeviceServices,bluetooth.getBLEDeviceCharacteristics,bluetooth.readBLECharacteristicValue,bluetooth.writeBLECharacteristicValue,bluetooth.notifyBLECharacteristicValueChange,bluetooth.onBLEConnectionStateChange,bluetooth.onBLECharacteristicValueChange,bluetooth.getBondDevice',
                "0.9.56": 'commonRoute',
                "0.9.60": 'video.startRecord,video.upload,video.download,video.play',
                "0.9.62": 'voidceChanger,bluetooth.BLEPrint',
                "0.9.63": 'voiceSynthesize,selectBusinessUnits,keepScreenOn,cloudoffice.dataReport,cloudoffice.checkWorkbenchUpdate',
                "0.9.65": 'selectRoles',
                "0.9.66": 'ui.navigate',
                "0.9.67": 'voiceAssistant',
                "0.9.70": 'defHomeMainTitleBar,reloadWebView',
                "0.9.71": 'ui.changeNavStyle,ui.webViewPaddingTop',
                "0.9.72": 'getCalenderEvent,showTopMenu',
                "0.9.73": 'startLocation,stopLocation',
                "0.9.74": 'startSpeechRecognize,stopSpeechRecognize',
                "0.9.75": 'shareMiniprogram,video.select',
                "0.9.76": 'selectPersonsInRole,setCallBackData,storage.getItem,storage.setItem,storage.removeItem,storage.clear',
                "0.9.77": 'createLive,createVoiceMeeting',
                "0.9.79": 'queryCalenderAccounts,assist,setShortcuts',
                "0.9.80": 'todoList'
            },
            ios: {
                "0.9.27": 'setBounce',
                "0.9.51": 'getLocalImgData',
                "0.9.61": 'showARView',
                "0.9.63": 'setWebBottomInset',
                "0.9.79": 'setShortcuts'
            },
            android: {
                "0.9.30": 'selectLocalFile',
                "0.9.60": 'getPhoneOSInfo'
            }
        };
        return c.apis = {}, Object.keys(b).forEach(function (c) {
            var d = b[c];
            Object.keys(d).forEach(function (b) {
                a(b, d[b], c)
            })
        }), c.apis
    }
    b.a = c
}, function (a, b, c) {
    'use strict';
    var d = c(0),
        e = window.qing,
        f = (e.isAndroid || e.isIos) && e.checkVersion('0.9.76'),
        g = f ? c(21) : c(22);
    d.a('storage.getItem', g.getItem, !0), d.a('storage.setItem', g.setItem, !0), d.a('storage.removeItem', g.removeItem, !0), d.a('storage.clear', g.clear)
}, function (a, b) {
    'use strict';
    b.a = function (a) {
        var b, c = new XMLHttpRequest,
            d = /^(2\d{2}|304)$/;
        a.method || (a.method = 'GET'), a.error || (a.error = function () {}), a.success || (a.success = function () {}), c.open(a.method, a.url), c.onreadystatechange = function () {
            if (4 === c.readyState)
                if (d.test(c.status)) try {
                    a.success(JSON.parse(c.responseText), c)
                } catch (b) {
                    a.error('JSON\u89E3\u6790\u5931\u8D25')
                } else a.error(c.responseText)
        }, a.headers = a.headers || {}, 'json' === a.serializer ? (b = JSON.stringify(a.data), a.headers['Content-type'] = 'application/json; charset=utf-8') : (b = function (a) {
            var b = encodeURIComponent;
            return 'string' != typeof a && a ? Object.keys(a).map(function (c) {
                return b(c) + '=' + b(a[c])
            }).join('&') : a
        }(a.data), a.headers['Content-type'] = 'application/x-www-form-urlencoded; charset=utf-8'), a.headers && Object.keys(a.headers).forEach(function (b) {
            c.setRequestHeader(b, a.headers[b])
        }), c.send(b)
    }
}, function (a, b) {
    'use strict';

    function c() {
        var a, b = arguments,
            e = !1;
        return 'boolean' == typeof b[0] && (e = Array.prototype.shift.call(b)), a = Array.prototype.shift.call(b), Array.prototype.forEach.call(b, function (b) {
            Object.keys(b).forEach(function (f) {
                e && 'object' === d(b[f]) && 'object' === d(a[f]) ? c(!0, a[f], b[f]) : 'undefined' != typeof b[f] && (a[f] = b[f])
            })
        }), a
    }
    b.a = c;
    var d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (a) {
        return typeof a
    } : function (a) {
        return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a
    }
}, function (a, b, c) {
    (function (a) {
        if (!(a.qing && a.qing.version)) {
            var b = a.qing || (a.qing = {});
            b.version = '0.0.10', b.isReady = !1, b.debug = !1;
            var d = navigator.userAgent.toLowerCase(),
                e = d.match(/Qing\/(\d+(?:\.\d+)*)/i) || d.match(/App\/cloudhub \d+\/(\d+(?:\.\d+)*)/i),
                f = e;
            f && (b.nativeJsBridgeVersion = e[1]), b.isSupportNativeJsBridge = !!f, c(8).init(b), c(9).init(b), c(27).init(b), f ? b.isDesktop ? 3 < parseInt(b.nativeJsBridgeVersion.replace(/\./g, '')) ? !a.__hasQingDesktop && c(11) : !a.__hasQingDesktopLE3 && c(10) : b.checkVersion('0.9.50') ? !a.__hasQingMobile && c(15) : !a.__hasQingMobile && c(14) : b.isWX || !a.__hasQingWeb && c(24)
        }
    })(window)
}, function (a, b, c) {
    'use strict';
    Object.defineProperty(b, '__esModule', {
        value: !0
    });
    var d = c(1),
        e = c(25),
        f = c(0);
    b.init = function (a) {
        var b = document,
            h = [];
        a.once = function (b, c) {
            a.on(b, function d() {
                a.off(b, d), c && c()
            })
        };
        var i = a.ready = a._bridge ? function (a) {
            a && a()
        } : function (a) {
            b.addEventListener('QingReady', function c() {
                a(), b.removeEventListener('QingReady', c)
            })
        };
        a.config = function (b) {
            a.debug = !!b.debug, i(function () {
                a._bridge.config(b)
            }), (b.jsEventList || []).forEach(function (b) {
                -1 != h.indexOf(b) || (h.push(b), a.on(b, function (a) {
                    g(b, {
                        data: a
                    })
                }))
            })
        }, a.error = function (b) {
            a.on('error', b)
        };
        var j = ['call', 'off', 'on', 'checkJsApi', 'trigger'];
        j.forEach(function (b) {
            a[b] = function () {
                var d = c.i(e.a)(arguments);
                i(function () {
                    a[b].apply(a, d), d = null
                })
            }
        }), i(function () {
            c.i(d.b)('Ready'), a.isReady = !0;
            var b = a._bridge;
            j.forEach(function (c) {
                a[c] = b[c]
            }), a.call = f.b, a.checkJsApi = f.c, a.ready = function (a) {
                a && a()
            }
        }), a.error = function (b) {
            a.on('error', b)
        }, a.checkVersion = function (b) {
            var c = a.nativeJsBridgeVersion;
            if (!c || 'string' != typeof b) return !1;
            if (c == b) return !0;
            for (var d = c.split('.'), e = b.split('.'), f = Math.max(d.length, e.length), g = 0; g < f; g++) {
                var h = ~~e[g],
                    i = ~~d[g];
                if (h < i) return !0;
                if (h > i) return !1
            }
        };
        var k = [location.origin];
        a.trust = function (a) {
            k.push(a)
        }, window.addEventListener('message', function (b) {
            var c = b.data || {},
                d = c.params || {};
            !k.includes(b.origin) || c.call && ((c.callbackId || 'number' == typeof c.callbackId) && (d.complete = function (a) {
                b.source.postMessage({
                    callbackId: c.callbackId,
                    result: a
                }, '*')
            }), a.call && a.call(c.call, d))
        })
    };
    var g = function (a, b) {
        var c = document.createEvent('HTMLEvents');
        if (b)
            for (var d in b) c[d] = b[d];
        c.initEvent(a), document.dispatchEvent(c)
    }
}, function (a, b, c) {
    'use strict';

    function d(a) {
        return a.replace(/(^|;|\s*)deviceName\s*:[^;]*(;|$)/i, ';')
    }
    Object.defineProperty(b, '__esModule', {
        value: !0
    }), c.d(b, 'init', function () {
        return e
    });
    var e = function (a) {
        var b = d(navigator.userAgent.toLowerCase() || ''),
            c = navigator.vendor && navigator.vendor.toLowerCase() || '',
            e = navigator.appVersion.toLowerCase() || '',
            f = a.isWX = /micromessenger/i.test(b),
            g = a.isChrome = /chrome|chromium/i.test(b) && /google inc/.test(c),
            h = a.isFirefox = /firefox/i.test(b),
            i = a.isOpera = /^Opera\//.test(b) || /\x20OPR\//.test(b),
            j = a.isSafari = /safari/i.test(b) && /apple computer/i.test(c),
            k = a.isIe = function (a) {
                return a ? 11 <= a ? 'ActiveXObject' in window : new RegExp('msie ' + a).test(b) : /msie/i.test(b) || 'ActiveXObject' in window
            },
            l = a.isIphone = /iphone/i.test(b),
            m = a.isIpad = /ipad/i.test(b),
            n = a.isIpod = /ipod/i.test(b),
            o = a.isIos = l || m || n,
            p = a.isAndroid = /android/i.test(b),
            q = a.isAndroidPhone = p && /mobile/i.test(b),
            r = a.isAndroidTablet = p && !/mobile/i.test(b),
            s = a.isBlackberry = /blackberry/i.test(b),
            t = a.isCoolpad = /coolpad/i.test(b),
            u = a.isMac = /mac/i.test(e),
            v = a.isWindows = /win/i.test(e),
            w = a.isWindowsPhone = v && /phone/i.test(b),
            x = a.isWindowsTablet = v && !w && /touch/i.test(b),
            y = a.isMobile = l || n || q || s || w || t,
            z = a.isTablet = m || r || x,
            A = a.isDesktop = !y && !z,
            B = a.isTouchDevice = 'ontouchstart' in window || 'DocumentTouch' in window && document instanceof DocumentTouch
    }
}, function (a, b, c) {
    'use strict';
    Object.defineProperty(b, '__esModule', {
        value: !0
    });
    var d = c(1);
    (function (a, b, e) {
        if (!b.__hasQingDesktopLE3) {
            b.__hasQingDesktopLE3 = !0;
            var f = {},
                g = 0,
                h = function (a) {
                    var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        c = b.success,
                        d = b.complete;
                    delete b.success, delete b.error, delete b.complete;
                    var e = ++g;
                    f[e] = function (a) {
                        'true' === a.success ? a.success = !0 : 'false' === a.success && (a.success = !1), c && c(a, {
                            code: 200,
                            data: a
                        }), d && d(a, {
                            code: 200,
                            data: a
                        })
                    };
                    var h = document.createElement('IFRAME');
                    h.setAttribute('src', 'xuntong:' + a + ':' + e + ':' + encodeURIComponent(JSON.stringify(b))), h.setAttribute('height', '1px'), h.setAttribute('width', '1px'), document.documentElement.appendChild(h), h.parentNode.removeChild(h), h = null
                },
                i = function (a, b) {
                    try {
                        var c = f[a];
                        if (!c) return;
                        c.apply(null, [JSON.parse(b)])
                    } catch (a) {
                        alert(a)
                    }
                },
                j = {
                    share: !0,
                    chat: !0,
                    personInfo: !0,
                    getPersonInfo: !0,
                    gotoLightApp: !0,
                    selectPersons: !0,
                    setWebViewTitle: !0,
                    closeWebView: !0,
                    close: !0,
                    hideWebViewTitle: !0,
                    defback: !0,
                    showOptionMenu: !0,
                    hideOptionMenu: !0,
                    selectOrgs: !0,
                    closePop: !0,
                    createPop: !0
                },
                k = function (a) {
                    var b = a.jsApiList,
                        c = a.success,
                        d = a.complete,
                        e = {};
                    (b || []).forEach(function (a) {
                        e[a] = !!j[a]
                    });
                    var f = {
                        success: !0,
                        data: e
                    };
                    c && c(f), d && d(f)
                };
            b.XuntongJSBridge.handleMessageFromXT = i;
            var l = function (a) {
                return function () {
                    c.i(d.a)('method [' + a + '] not support')
                }
            };
            e._bridge = {
                call: h,
                on: l,
                off: l,
                checkJsApi: k,
                config: l,
                trigger: l
            }, a.dispatchEvent(new Event('QingReady'))
        }
    })(document, window, window.qing || (window.qing = {}))
}, function (a, b, c) {
    'use strict';
    Object.defineProperty(b, '__esModule', {
        value: !0
    });
    c(13);
    (function (a, b, c) {
        if (!b.__hasQingDesktop) {
            b.__hasQingDesktop = !0;
            var d = b._CloudHubJSBridge;
            c._bridge = {
                call: d.emit,
                on: d.on,
                off: d.off,
                checkJsApi: d.checkJsApi,
                trigger: d.trigger,
                config: function () {}
            }, a.dispatchEvent(new Event('QingReady'))
        }
    })(document, window, window.qing || (window.qing = {}))
}, function (a, b, c) {
    'use strict';
    var d = c(2),
        e = c(0);
    e.a('getTicket', function (a) {
        c.i(d.a)(window.qing, a)
    }, !0)
}, function (a, b, c) {
    'use strict';
    c(12)
}, function (a, b, c) {
    'use strict';
    Object.defineProperty(b, '__esModule', {
        value: !0
    });
    var d = c(1),
        e = c(3),
        f = Object.assign || function (a) {
            for (var b, c = 1; c < arguments.length; c++)
                for (var d in b = arguments[c], b) Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
            return a
        };
    (function (a, b, g) {
        if (!b.__hasQingMobile) {
            b.__hasQingMobile = !0;
            var h = function (a) {
                    return function () {
                        c.i(d.a)('method [' + a + '] not support')
                    }
                },
                i = {
                    index: 1,
                    map: {},
                    register: function (a) {
                        this.index += 2;
                        var b = '' + this.index;
                        return 'function' == typeof a && (this.map[b] = function (a) {
                            this.cb.call(null, a)
                        }.bind({
                            map: this.map,
                            id: b,
                            cb: a
                        })), b
                    },
                    invoke: function (a, b) {
                        var c = this.map[a + ''];
                        'function' == typeof c && c(b)
                    }
                },
                j = {
                    invoke: function (a, b, c) {
                        var d, e = i.register(c);
                        b = 'undefined' == typeof b ? '' : encodeURIComponent(JSON.stringify(b)), d = 'xuntong:' + a + ':' + e + ':' + b;
                        var f = window.XTBridgeIframes = window.XTBridgeIframes || function () {
                            var a, b, c = [];
                            for (b = 0; 9 > b; b++) a = document.createElement('IFRAME'), a.setAttribute('height', '1px'), a.setAttribute('width', '1px'), a.style.display = 'none', document.documentElement.appendChild(a), c.push(a);
                            return c
                        }();
                        j.callbackIndex = j.callbackIndex || 0;
                        var g = j.callbackIndex;
                        j.callbackIndex += 1;
                        var h = f[g % 9];
                        h.setAttribute('src', d), setTimeout(function () {
                            h.removeAttribute('src')
                        }, 10)
                    },
                    callback: function (a, b) {
                        if ('string' == typeof b && b.match(/^\s*\{/)) try {
                            b = JSON.parse(b), b && 'string' == typeof b.success && (b.success = 'true' === b.success)
                        } catch (a) {
                            console.error(a)
                        }
                        i.invoke(a, b)
                    }
                };
            window.XuntongJSBridge = f({
                invoke: j.invoke,
                call: j.invoke,
                handleMessageFromXT: j.callback
            }, window.XuntongJSBridge), g._bridge = {
                call: function (a, b) {
                    b = b || {};
                    var c = b.success,
                        d = b.complete;
                    delete b.success, delete b.error, delete b.complete, j.invoke(a, b, function () {
                        'function' == typeof c && c.apply(null, arguments), 'function' == typeof d && d.apply(null, arguments)
                    })
                },
                on: h,
                off: h,
                checkJsApi: function (a) {
                    var b = a.jsApiList,
                        d = {},
                        f = c.i(e.a)();
                    (b || []).forEach(function (a) {
                        var b = f[a],
                            c = g.isAndroid ? 'android' : g.isIos ? 'ios' : 'other';
                        d[a] = b && b[c] && g.checkVersion(b.version)
                    }), 'function' == typeof a.success && a.success({
                        success: !0,
                        data: d
                    })
                },
                config: h,
                trigger: h
            }, a.dispatchEvent(new Event('QingReady'))
        }
    })(document, window, window.qing || (window.qing = {}))
}, function (a, b, c) {
    'use strict';
    Object.defineProperty(b, '__esModule', {
        value: !0
    });
    var d = c(26),
        e = c(6),
        f = c(3),
        g = c(18);
    (function (a, b, g) {
        function h() {
            var a = {
                call: function (a) {
                    c.i(d.a)(p, a) ? n.invoke.apply(null, arguments) : o.call.apply(null, arguments)
                },
                on: n.on,
                handleMessageFromXT: o.handleMessageFromXT
            };
            a.invoke = a.call, b.XuntongJSBridge = a;
            var e = 'eventPrefix_',
                h = {},
                j = function (b) {
                    h[b] || (h[b] = !0, a.on(b, function (a) {
                        i(e + b, {
                            eventData: a
                        })
                    }))
                };
            g._bridge = {
                call: function (b, c) {
                    c = c || {};
                    var d = c.success,
                        e = c.complete;
                    delete c.success, delete c.error, delete c.complete, a.call(b, c, function (a) {
                        var b = {
                            code: 200,
                            data: a
                        };
                        d && d(a, b), e && e(a, b)
                    })
                },
                on: function (a, b) {
                    b && (j(a), 'function' == typeof b && (b = {
                        success: b
                    }), document.addEventListener(e + a, function (a) {
                        'function' == typeof b.success && b.success(a.eventData), 'function' == typeof b.complete && b.complete(a.eventData)
                    }))
                },
                off: function (a, b) {
                    document.removeEventListener(e + a, b)
                },
                checkJsApi: function (a) {
                    var b = a.jsApiList,
                        d = {};
                    if (g.checkVersion('0.9.80')) g.call('checkJsApi', a);
                    else {
                        var e = c.i(f.a)();
                        (b || []).forEach(function (a) {
                            var b = e[a],
                                c = g.isAndroid ? 'android' : g.isIos ? 'ios' : 'other';
                            d[a] = b && b[c] && g.checkVersion(b.version)
                        }), 'function' == typeof a.success && a.success({
                            success: !0,
                            data: d
                        })
                    }
                },
                config: function () {},
                trigger: function (a, b) {
                    n.trigger(a, b)
                }
            }, i('QingReady', g._bridge)
        }
        if (!b.__hasQingMobile) {
            b.__hasQingMobile = !0;
            var i = function (a, b) {
                    var d = document.createEvent('HTMLEvents');
                    c.i(e.a)(d, b), d.initEvent(a), document.dispatchEvent(d)
                },
                j = function (a) {
                    var b = a.match(/(.+)\.([^\.]+)/);
                    return b && 3 === b.length ? {
                        name: b[2],
                        ns: b[1]
                    } : {
                        ns: '',
                        name: a
                    }
                },
                k = function () {
                    var a = navigator.userAgent.split(';')[0],
                        b = a.slice(a.indexOf('Qing/') + 5);
                    return parseFloat(b.slice(2))
                }(),
                l = {
                    map: {},
                    index: 1,
                    indexStep: 2,
                    register: function (a) {
                        this.index += this.indexStep;
                        var b = '' + this.index;
                        return 'function' == typeof a && (this.map[b] = function (a) {
                            this.cb.call(null, a)
                        }.bind({
                            map: this.map,
                            id: b,
                            cb: a
                        })), b
                    },
                    invoke: function (a, b) {
                        var c = this.map[a + ''];
                        'function' == typeof c && c(b)
                    }
                },
                m = {},
                n = {
                    invoke: function (a, b, c) {
                        var d = (window.ClientInfo || {}).v9bridge || 'cloudhub';
                        return o.call(a, b, c, d)
                    },
                    callback: function (a, b) {
                        return o.handleMessageFromXT(a, b)
                    },
                    on: function (a, b) {
                        m[a] || (m[a] = []), m[a].push(b)
                    },
                    trigger: function (a, b) {
                        (m[a] || []).forEach(function (a) {
                            'function' == typeof a && a(b)
                        })
                    }
                },
                o = {
                    call: function (a, b, c, d) {
                        var e, f = l.register(c);
                        if (b = 'undefined' == typeof b ? '' : encodeURIComponent(JSON.stringify(b)), d ? (a = j(a), e = d + '://' + a.ns + ':' + f + '/' + a.name + '?' + b) : e = 'xuntong:' + a + ':' + f + ':' + b, g.isAndroid) {
                            if (window.AndroidInterface) return window.AndroidInterface.call(e), f;
                            if (9.59 <= k) return window.prompt(e), f
                        } else {
                            if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.wkbridge2) return window.webkit.messageHandlers.wkbridge2.postMessage({
                                url: e
                            }), f;
                            if (window.kdUIWebViewBridge) return window.kdUIWebViewBridge(e), f
                        }
                        var h = window.XTBridgeIframes = window.XTBridgeIframes || function () {
                            var a, b, c = [];
                            for (b = 0; 9 > b; b++) a = document.createElement('IFRAME'), a.setAttribute('height', '1px'), a.setAttribute('width', '1px'), a.style.display = 'none', document.documentElement.appendChild(a), c.push(a);
                            return c
                        }();
                        o.callbackIndex = o.callbackIndex || 0;
                        var i = o.callbackIndex;
                        o.callbackIndex += 1;
                        var m = h[i % 9];
                        return m.setAttribute('src', e), setTimeout(function () {
                            m.removeAttribute('src')
                        }, 10), f
                    },
                    handleMessageFromXT: function (a, b) {
                        if ('string' == typeof b && b.match(/^\s*\{/)) try {
                            b = JSON.parse(b), b && 'string' == typeof b.success && (b.success = 'true' === b.success)
                        } catch (a) {
                            console.error(a)
                        }
                        l.invoke(a, b)
                    }
                },
                p = ['runtime.auth', 'runtime.jsReady', 'cloudoffice.request', 'cloudoffice.showCardNotify', 'cloudoffice.clearCardNotify', 'cloudoffice.getRoleType', 'cloudoffice.checkAppAuth', 'cloudoffice.shareText', 'cloudoffice.downloadPic', 'cloudoffice.checkWorkbenchUpdate', 'cloudoffice.textShareClosed', 'cloudoffice.dataReport', 'cloudoffice.setScrollEnable', 'ui.changeNavBarStyle', 'ui.changeNavStyle', 'ui.toast', 'ui.webViewScrollTo', 'ui.webViewPaddingTop', 'ui.navigate', 'storage.getItem', 'storage.setItem', 'storage.removeItem', 'storage.clear', 'bluetooth.openBluetoothAdapter', 'bluetooth.closeBluetoothAdapter', 'bluetooth.getBluetoothAdapterState', 'bluetooth.onBluetoothAdapterStateChange', 'bluetooth.startBluetoothDevicesDiscovery', 'bluetooth.stopBluetoothDevicesDiscovery', 'bluetooth.getBluetoothDevices', 'bluetooth.onBluetoothDeviceFound', 'bluetooth.getConnectedBluetoothDevices', 'bluetooth.createBLEConnection', 'bluetooth.closeBLEConnection', 'bluetooth.getBLEDeviceServices', 'bluetooth.getBLEDeviceCharacteristic', 'bluetooth.readBLECharacteristicValue', 'bluetooth.writeBLECharacteristicValue', 'bluetooth.notifyBLECharacteristicValueChange', 'bluetooth.onBLEConnectionStateChange', 'bluetooth.onBLECharacteristicValueChange', 'bluetooth.getBLEDeviceCharacteristics', 'bluetooth.BLEPrint', 'bluetooth.getBondDevice', 'bluetooth.connectBluetoothDevice', 'bluetooth.writeBluetoothDevice', 'bluetooth.closeBluetoothConnection', 'video.startRecord', 'video.upload', 'video.download', 'video.play', 'video.select'];
            h(), Object.defineProperty(window, 'CloudHubJSBridge', {
                set: function () {},
                get: function () {
                    return n
                }
            })
        }
    })(document, window, window.qing || (window.qing = {}))
}, function (a, b, c) {
    'use strict';
    var d = c(0),
        e = function (a, b) {
            return a = window.qing.checkVersion('0.9.71') ? 'ui.changeNavStyle' : 'ui.changeNavBarStyle', {
                name: a,
                params: b
            }
        };
    d.a('ui.changeNavBarStyle', e), d.a('ui.changeNavStyle', e)
}, function (a, b, c) {
    'use strict';
    var d = c(2),
        e = c(0);
    e.a('getTicket', function (a) {
        c.i(d.a)(window.qing, a)
    }, !0, !0)
}, function (a, b, c) {
    'use strict';
    var d = c(17),
        e = c(23),
        f = c(19),
        g = c(4),
        h = c(16)
}, function (a, b, c) {
    'use strict';
    var d = c(0);
    d.a('request', function (a) {
        return {
            name: 'cloudoffice.request',
            params: a
        }
    })
}, function (a, b) {
    'use strict';
    b.a = function (a) {
        return 'string' == typeof a ? (a = a.replace(/'/gm, '\u25B4\u25B4').replace(/"/gm, '\u25BE\u25BE'), escape(a)) : a
    }, b.b = function (a) {
        return 'string' == typeof a ? (a = unescape(a), a.replace(/▴▴/gm, '\'').replace(/▾▾/gm, '"')) : a
    }
}, function (a, b, c) {
    'use strict';
    Object.defineProperty(b, '__esModule', {
        value: !0
    });
    var d = c(20);
    b.setItem = function (a) {
        return a.value = c.i(d.a)(a.value), {
            name: 'storage.setItem',
            params: a
        }
    }, b.getItem = function (a) {
        var b = a.success;
        return a.success = function (a) {
            a.success && a.data && a.data.value && (a.data.value = c.i(d.b)(a.data.value)), b(a)
        }, {
            name: 'storage.getItem',
            params: a
        }
    }
}, function (a, b) {
    'use strict';
    Object.defineProperty(b, '__esModule', {
        value: !0
    }), b.setItem = function (a) {
        var b = 'clientStorage_' + a.key,
            d = a.success;
        c.setItem(b, a.value), d && d()
    }, b.getItem = function (a) {
        var b = 'clientStorage_' + a.key,
            d = a.success;
        d && d({
            success: !0,
            data: {
                value: c.getItem(b)
            }
        })
    }, b.removeItem = function (a) {
        var b = 'clientStorage_' + a.key,
            d = a.success;
        c.removeItem(b), d && d()
    }, b.clear = function () {};
    var c = window.localStorage
}, function (a, b, c) {
    'use strict';
    var d = c(0);
    d.a('toast', function (a) {
        return a.message = a.msg, delete a.msg, {
            name: 'ui.toast',
            params: a
        }
    })
}, function (a, b, c) {
    'use strict';
    Object.defineProperty(b, '__esModule', {
        value: !0
    });
    var d = c(6),
        e = c(4),
        f = c(5);
    (function (a, b, g) {
        function h(a, b) {
            var c = window.top.__sessionUser,
                d = window.top.__myinfo,
                e = 100;
            b = b || 0, c && d ? a({
                success: !0,
                data: {
                    id: d.id,
                    openId: c.openId,
                    wbnetworkid: c.wbNetworkId,
                    eid: c.eid,
                    companyName: c.companyName,
                    photoUrl: c.photoUrl,
                    name: c.name,
                    wbuserid: c.wbUserId
                }
            }) : b * e > 3e4 ? a({
                success: !1
            }) : setTimeout(function () {
                h(a)
            }, e)
        }

        function i() {
            var a = {
                call: function (a, b, d, g) {
                    switch (a) {
                        case 'toast':
                            alert(b.msg);
                            break;
                        case 'request':
                            c.i(f.a)({
                                url: b.url,
                                data: b.data,
                                method: b.method,
                                headers: b.headers,
                                serializer: b.serializer,
                                success: b.success || d,
                                error: b.error || g
                            });
                            break;
                        case 'gotoLightApp':
                            'function' == typeof window.top.gotoLightApp && window.top.gotoLightApp(b);
                            break;
                        case 'getPersonInfo':
                            h(function (a) {
                                a.success ? ('function' == typeof b.success && b.success(a), 'function' == typeof d && d(a)) : ('function' == typeof b.error && b.error(a), 'function' == typeof g && g(a)), 'function' == typeof b.complete && b.complete(a)
                            });
                            break;
                        default:
                            console.log('not support bridge: ' + a);
                    }
                },
                on: function () {},
                handleMessageFromXT: function () {}
            };
            a.invoke = a.call, b.XuntongJSBridge = a, g._bridge = {
                call: function (b, d) {
                    if (d = d || {}, b.match(/^storage\./)) c.i(e['default'])(g, a, b, d);
                    else {
                        var f = d.success,
                            h = d.error,
                            i = d.complete;
                        delete d.success, delete d.error, delete d.complete, 'ui.toast' === b && (b = 'toast', d.msg = d.message, delete d.message), 'cloudoffice.request' === b && (b = 'request'), a.call(b, d, function () {
                            'function' == typeof f && f.apply(null, arguments), 'function' == typeof i && i.apply(null, arguments)
                        }, function () {
                            'function' == typeof h && h.apply(null, arguments), 'function' == typeof i && i.apply(null, arguments)
                        })
                    }
                },
                on: function () {},
                off: function () {},
                checkJsApi: function (a) {
                    return 'storage' === a || 'storage.getItem' === a || 'storage.setItem' === a || 'storage.removeItem' === a || 'storage.clear' === a || 'ui.toast' === a || 'toast' === a || 'request' === a || 'cloudoffice.request' === a || 'gotoLightApp' === a || 'getPersonInfo' === a
                },
                config: function () {},
                trigger: function () {}
            }, j('QingReady', g._bridge)
        }
        if (!b.__hasQingWeb) {
            b.__hasQingWeb = !0;
            var j = function (a, b) {
                var e = document.createEvent('HTMLEvents');
                c.i(d.a)(e, b), e.initEvent(a, !0, !1), document.dispatchEvent(e)
            };
            i()
        }
    })(document, window, window.qing || (window.qing = {}))
}, function (a, b) {
    'use strict';
    var c = Array.from;
    b.a = c ? c : function (a) {
        for (var b = a.length, c = [], d = 0; d < b; d++) c.push(a[d]);
        return c
    }
}, function (a, b) {
    'use strict';
    b.a = function (a, b) {
        return a && a.some && a.some(function (a) {
            return a === b
        })
    }
}, function (a, b) {
    'use strict';
    Object.defineProperty(b, '__esModule', {
        value: !0
    }), b.init = function (a) {
        c.XuntongJSBridge = {
            call: function (b) {
                var c = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {},
                    d = arguments[2];
                d && (c.complete = d), a.call(b, c)
            }
        }
    };
    var c = window
}, function (a, b, c) {
    a.exports = c(7)
}]);