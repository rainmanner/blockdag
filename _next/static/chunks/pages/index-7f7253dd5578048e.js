(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        75557: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return s(32238)
            }])
        },
        32238: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return t$
                }
            });
            var n = s(85893),
                a = s(9008),
                l = s.n(a),
                o = s(13282),
                i = s.n(o);

            function r(e) {
                let {
                    children: t,
                    className: s,
                    id: a,
                    large: l,
                    ...o
                } = e;
                return (0, n.jsx)("div", { ...o,
                    id: a || "",
                    className: "".concat(i().container, " ").concat(s || "", " ").concat(l ? i().large : ""),
                    children: t
                })
            }
            var c = s(36269),
                d = s.n(c),
                u = s(41664),
                h = s.n(u),
                m = s(67294),
                p = s(25675),
                _ = s.n(p);

            function g() {
                let [e, t] = (0, m.useState)(0);
                return (0, m.useEffect)(() => {
                    {
                        let e = () => {
                            t(window.scrollY)
                        };
                        return window.addEventListener("scroll", e), () => {
                            window.removeEventListener("scroll", e)
                        }
                    }
                }, []), e
            }

            function x(e) {
                let {
                    src: t,
                    alt: s,
                    priority: a,
                    className: l,
                    hero: o
                } = e, i = g();
                return (0, n.jsx)(n.Fragment, {
                    children: o ? (0, n.jsx)(_(), {
                        className: l || "",
                        src: t,
                        alt: s || "BlockDAG",
                        fill: !0,
                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                        priority: !!a
                    }) : i > 1 && (0, n.jsx)(_(), {
                        className: l || "",
                        src: t,
                        alt: s || "BlockDAG",
                        fill: !0,
                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                        priority: !!a
                    })
                })
            }
            var f = JSON.parse('[{"title":"DAGpaper v1","slug":"https://blockdag.network/whitepaper.pdf","target":true},{"title":"DAGpaper v2","slug":"/blockdag-technical-whitepaper.pdf","target":"_blank"},{"title":"Wiki ","slug":"https://wiki.blockdag.network/"},{"title":"Tokenomics","slug":"https://blockdag.network/tokenomics"},{"title":"Roadmap","slug":"https://blockdag.network/#roadmap"},{"title":"Press Kit","slug":"https://blockdag.network/presskit"},{"title":"Validation","slug":"https://blockdag.network/validation"}]'),
                v = JSON.parse('[{"title":"products","slug":"https://blockdag.network/crypto-mining-rigs"},{"title":"calculator","slug":"https://blockdag.network/crypto-mining-rigs"},{"title":"Private Clients","slug":"https://blockdag.network/private-clients","desktop":true},{"title":"News","slug":"https://blockdag.network/news"},{"title":"Blog","slug":"https://blockdag.network/blog"},{"title":"Pillars","slug":"https://blockdag.network/pillars"},{"title":"Keynote","slug":"https://blockdag.network/keynote"}]'),
                j = JSON.parse('[{"title":"Terms of Use","slug":"https://blockdag.network/terms"},{"title":"Cookie Policy","slug":"https://blockdag.network/cookie"},{"title":"Privacy Policy","slug":"https://blockdag.network/privacy"}]'),
                y = JSON.parse('[{"title":"telegram","slug":"https://t.me/blockDAGnetworkOfficial","footerLogo":"/images/socials/telegram.svg"},{"title":"twitter","slug":"https://twitter.com/blockdagnetwork","footerLogo":"/images/socials/x.svg"},{"title":"instagram","slug":"https://www.instagram.com/blockdagnetwork/","footerLogo":"/images/socials/insta.svg"},{"title":"Discord","slug":"https://discord.gg/Q7BxghMVyu","footerLogo":"/images/socials/discord.svg"},{"title":"youtube","slug":"https://www.youtube.com/@BlockDAGofficial","footerLogo":"/images/socials/youtube.svg"},{"title":"facebook","slug":"https://www.facebook.com/profile.php?id=61557699651392&mibextid=LQQJ4d","footerLogo":"/images/socials/facebook.svg"}]');

            function b() {
                let e = g(),
                    [t, s] = (0, m.useState)(!1);
                return (0, n.jsxs)("footer", {
                    className: d().footer,
                    children: [(0, n.jsx)(r, {
                        className: d().container,
                        large: !0,
                        children: (0, n.jsxs)("div", {
                            className: d().mid,
                            children: [(0, n.jsxs)("div", {
                                className: d().midNewContent,
                                children: [(0, n.jsxs)(h(), {
                                    href: "/",
                                    className: "".concat(d().logo),
                                    children: [(0, n.jsx)("div", {
                                        className: d().img,
                                        children: (0, n.jsx)(x, {
                                            src: "/3d.gif"
                                        })
                                    }), (0, n.jsx)("span", {
                                        children: "BlockDAG"
                                    })]
                                }), (0, n.jsx)("p", {
                                    className: d().paragraph,
                                    children: "BlockDAG is a Layer 1 proof of work consensus mechanism that evolves the crypto sphere with a cutting-edge Directed Acyclic Graph structure building on the foundations of Bitcoin & Kaspa"
                                })]
                            }), (0, n.jsxs)("div", {
                                className: d().midLeft,
                                children: [(0, n.jsxs)("div", {
                                    className: d().midItem,
                                    children: [(0, n.jsx)("h5", {
                                        children: "Sitemap"
                                    }), (0, n.jsxs)("div", {
                                        children: [(0, n.jsx)("ul", {
                                            className: d().leftUl,
                                            children: f.map((e, a) => (0, n.jsx)("li", {
                                                className: e.desktop ? "d-md" : "",
                                                children: (0, n.jsx)(h(), {
                                                    href: e.slug,
                                                    target: e.target ? "_blank" : "",
                                                    onClick: e.comingSoon ? () => s(!0) : null,
                                                    children: e.comingSoon && t ? "coming 01/04/24" : e.title
                                                })
                                            }, a))
                                        }), (0, n.jsx)("ul", {
                                            className: d().leftUl,
                                            children: v.map((e, t) => (0, n.jsx)("li", {
                                                className: e.desktop ? "d-md" : "",
                                                children: (0, n.jsx)(h(), {
                                                    href: e.slug,
                                                    target: e.target ? "_blank" : "",
                                                    children: e.title
                                                })
                                            }, t))
                                        })]
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: d().midItem,
                                    children: [(0, n.jsx)("h5", {
                                        children: "Legals"
                                    }), (0, n.jsx)("ul", {
                                        className: "".concat(d().policy, " ").concat(d().leftUl),
                                        children: j.map((e, t) => (0, n.jsx)("li", {
                                            children: (0, n.jsx)(h(), {
                                                href: e.slug,
                                                children: e.title
                                            })
                                        }, t))
                                    })]
                                })]
                            }), (0, n.jsx)("div", {
                                className: d().midRight,
                                children: (0, n.jsx)("div", {
                                    className: d().midItem,
                                    children: (0, n.jsxs)("div", {
                                        style: {
                                            flexDirection: "column",
                                            gap: "0"
                                        },
                                        children: [(0, n.jsx)("h5", {
                                            className: d().mobileTextCenter,
                                            children: "Socials"
                                        }), (0, n.jsx)("ul", {
                                            className: d().socials,
                                            children: y.map((t, s) => (0, n.jsx)("li", {
                                                children: (0, n.jsxs)(h(), {
                                                    href: t.slug,
                                                    target: "_blank",
                                                    children: [e > 1 && (0, n.jsx)("img", {
                                                        src: t.footerLogo,
                                                        alt: t.title
                                                    }), " ", (0, n.jsx)("span", {
                                                        children: t.title
                                                    })]
                                                })
                                            }, s))
                                        })]
                                    })
                                })
                            })]
                        })
                    }), (0, n.jsxs)("div", {
                        className: d().bot,
                        children: [(0, n.jsx)("p", {
                            children: "Copyright \xa9 BlockDAG"
                        }), (0, n.jsx)("p", {
                            className: "d-md",
                            children: "Disclaimer: Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may fluctuate. Profits may be subject to capital gains or other taxes applicable in your jurisdiction"
                        })]
                    })]
                })
            }
            var w = s(93504),
                N = s.n(w),
                k = JSON.parse('[{"title":"Keynote","slug":"https://blockdag.network/keynote"},{"title":"Dev Releases","slug":"https://blockdag.network/dev-releases"},{"title":"Products","slug":"https://blockdag.network/crypto-mining-rigs","list":[{"title":"BDAG Coins","slug":"https://blockdag.network/tokenomics"},{"title":"BlockDAG Card","slug":"https://blockdag.network/product/blockdag-card"},{"title":"BlockDAG X1","slug":"https://blockdag.network/product/blockdagx1"},{"title":"BlockDAG X10","slug":"https://blockdag.network/product/blockdagx10"},{"title":"BlockDAG X30","slug":"https://blockdag.network/product/blockdagx30"},{"title":"BlockDAG X100","slug":"https://blockdag.network/product/blockdagx100"}]},{"title":"Win $2M Usd","slug":"https://blockdag.network/giveaway"},{"title":"Wiki","slug":"https://wiki.blockdag.network/","target":"_blank"},{"title":"calculator","slug":"https://blockdag.network/crypto-mining-calculator"},{"title":"Mechanics","slug":"","list":[{"title":"Pillars","slug":"https://blockdag.network/pillars"},{"title":"News","slug":"https://blockdag.network/news"},{"title":"Blog","slug":"https://blockdag.network/blog"},{"title":"Press Kit","slug":"https://blockdag.network/press-kit"}]},{"title":"Private Clients","slug":"https://blockdag.network/private-clients","mobile":true}]'),
                B = s(62286),
                S = s(53543),
                C = s.n(S);
            let T = m.createContext(),
                M = () => (0, m.useContext)(T),
                L = e => {
                    let {
                        children: t
                    } = e, [s, a] = (0, m.useState)("desktop"), [l, o] = (0, m.useState)(!1), i = (0, m.useRef)(null), [r, c] = (0, m.useState)(!1);
                    return (0, n.jsx)(T.Provider, {
                        value: {
                            activeDeviceHTB: s,
                            setActiveDeviceHTB: a,
                            buyInputRef: i,
                            afterPurchaseActive: l,
                            setAfterPurchaseActive: o,
                            mobileNavActive: r,
                            setMobileNavActive: c
                        },
                        children: t
                    })
                };
            var P = s(4810),
                E = s.n(P),
                A = s(73935),
                D = function(e) {
                    return (0, n.jsx)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsx)("path", {
                            d: "M3 12H21M3 6H21M9 18H21",
                            stroke: "white",
                            strokeWidth: "3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                },
                I = function(e) {
                    return (0, n.jsx)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsx)("path", {
                            d: "M18 6L6 18M6 6L18 18",
                            stroke: "white",
                            strokeWidth: "3",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                },
                F = function(e) {
                    return (0, n.jsx)("svg", { ...e,
                        width: "32",
                        height: "33",
                        viewBox: "0 0 32 33",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsx)("path", {
                            d: "M16.0001 7.16699V25.8337M6.66675 16.5003H25.3334",
                            stroke: "currentColor",
                            strokeWidth: "2.66667",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                },
                R = function(e) {
                    return (0, n.jsx)("svg", { ...e,
                        width: "32",
                        height: "33",
                        viewBox: "0 0 32 33",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsx)("path", {
                            d: "M6.66675 16.5H25.3334",
                            stroke: "currentColor",
                            strokeWidth: "2.66667",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                },
                H = function(e) {
                    return (0, n.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "37",
                        height: "36",
                        viewBox: "0 0 37 36",
                        fill: "none",
                        children: [(0, n.jsx)("path", {
                            d: "M11.5085 15.1276L18.4997 8.13654L25.4945 15.1312L29.5625 11.0632L18.4997 0L7.44069 11.0596L11.5085 15.1276ZM0.5 17.9994L4.56813 13.9313L8.63598 17.9992L4.56789 22.0673L0.5 17.9994ZM11.5085 20.8724L18.4997 27.8635L25.4943 20.869L29.5645 24.9349L29.5625 24.937L18.4997 36L7.44033 24.9408L7.43457 24.935L11.5085 20.8724ZM28.3641 18.0017L32.4323 13.9336L36.5001 18.0014L32.432 22.0695L28.3641 18.0017Z",
                            fill: "#F3BA2F"
                        }), (0, n.jsx)("path", {
                            d: "M22.6259 17.9979H22.6277L18.4998 13.87L15.4492 16.9206H15.449L15.0985 17.2713L14.3756 17.9943L14.3699 17.9999L14.3756 18.0059L18.4998 22.1302L22.6277 18.0023L22.6297 17.9999L22.6259 17.9979Z",
                            fill: "#F3BA2F"
                        })]
                    })
                },
                W = function(e) {
                    return (0, n.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "43",
                        height: "36",
                        viewBox: "0 0 43 36",
                        fill: "none",
                        children: [(0, n.jsxs)("g", {
                            "clip-path": "url(#clip0_1018_1793)",
                            children: [(0, n.jsx)("path", {
                                d: "M34.7783 0H8.2217L0.5 16.1687L21.5 36L42.5 16.1687L34.7783 0Z",
                                fill: "#50AF95"
                            }), (0, n.jsx)("path", {
                                d: "M24.4164 12.8802V9.74219H31.7416V4.96118H11.7952V9.74219H19.1211V12.8777C13.1671 13.1451 8.68994 14.3006 8.68994 15.6842C8.68994 17.0679 13.1692 18.2232 19.1211 18.4937V28.5447H24.4189V18.4918C30.3619 18.2232 34.8297 17.0689 34.8297 15.6863C34.8297 14.3037 30.3619 13.1496 24.4189 12.881M24.4189 17.6406V17.6379C24.2696 17.6472 23.5017 17.6924 21.7921 17.6924C20.4252 17.6924 19.4634 17.6544 19.1251 17.6371V17.6414C13.8635 17.4131 9.93734 16.5157 9.93734 15.4421C9.93734 14.3685 13.8643 13.4724 19.1236 13.2439V16.7474C19.4682 16.7706 20.4535 16.8276 21.8135 16.8276C23.4471 16.8276 24.2684 16.761 24.4189 16.7474V13.2439C29.6689 13.4728 33.5861 14.371 33.5861 15.4409C33.5861 16.5108 29.6671 17.409 24.4189 17.6379",
                                fill: "#26262A"
                            })]
                        }), (0, n.jsx)("defs", {
                            children: (0, n.jsx)("clipPath", {
                                id: "clip0_1018_1793",
                                children: (0, n.jsx)("rect", {
                                    width: "42",
                                    height: "36",
                                    fill: "white",
                                    transform: "translate(0.5)"
                                })
                            })
                        })]
                    })
                },
                Z = function(e) {
                    return (0, n.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "37",
                        height: "38",
                        viewBox: "0 0 37 38",
                        fill: "none",
                        children: [(0, n.jsx)("path", {
                            d: "M18.3114 0.942505L18.0695 1.76283V25.5668L18.3114 25.8078L29.3875 19.2764L18.3114 0.942505Z",
                            fill: "#EDF0F4"
                        }), (0, n.jsx)("path", {
                            d: "M18.3114 0.942505L7.23535 19.2764L18.3114 25.8078L18.3115 14.2541L18.3114 0.942505Z",
                            fill: "#EDF0F4"
                        }), (0, n.jsx)("path", {
                            d: "M18.3114 27.8999L18.1751 28.0657V36.5452L18.3114 36.9425L29.3941 21.3718L18.3114 27.8999Z",
                            fill: "#EDF0F4"
                        }), (0, n.jsx)("path", {
                            d: "M18.3114 36.9425V27.8999L7.23535 21.3716L18.3114 36.9425Z",
                            fill: "#EDF0F4"
                        }), (0, n.jsx)("path", {
                            d: "M18.3114 25.8078L29.3875 19.2764L18.3115 14.2541L18.3114 25.8078Z",
                            fill: "#EDF0F4"
                        }), (0, n.jsx)("path", {
                            d: "M7.23535 19.2764L18.3114 25.8078L18.3115 14.2541L7.23535 19.2764Z",
                            fill: "#EDF0F4"
                        }), (0, n.jsx)("path", {
                            d: "M18.4389 0.852012C18.4186 0.823489 18.3889 0.80181 18.3533 0.791918C18.3473 0.790227 18.3412 0.788918 18.3351 0.787979C18.3208 0.785796 18.3061 0.785565 18.2914 0.787468C18.2851 0.788273 18.279 0.789445 18.273 0.790963L18.4389 0.852012ZM18.4389 0.852012C18.4411 0.855136 18.4432 0.858357 18.4452 0.861671L18.4389 0.852012ZM18.3719 25.9519C18.3271 25.9707 18.2764 25.9675 18.2347 25.944C18.2344 25.9438 18.2341 25.9437 18.2338 25.9435C18.2334 25.9432 18.2329 25.943 18.2324 25.9427L18.3719 25.9519ZM18.3719 25.9519C18.3743 25.9509 18.3767 25.9498 18.3791 25.9487",
                            stroke: "#EDF0F4",
                            strokeWidth: "0.312645",
                            strokeLinejoin: "round"
                        })]
                    })
                },
                O = e => {
                    let {
                        show: t,
                        onClose: s,
                        children: a,
                        hasNoIcon: l,
                        register: o
                    } = e, [i, r] = (0, m.useState)(!1);
                    (0, m.useEffect)(() => {
                        r(!0)
                    }, []);
                    let c = e => {
                            e.preventDefault(), s()
                        },
                        d = t ? (0, n.jsxs)("div", {
                            className: "".concat(E().ModalOverlay, " ").concat(o ? E().register : ""),
                            children: [(0, n.jsx)("div", {
                                className: E().StyledOverlayClose,
                                onClick: c
                            }), (0, n.jsx)("div", {
                                className: E().StyledModal,
                                children: (0, n.jsxs)("div", {
                                    className: " ".concat(E().StyledModalBody, " modalhere"),
                                    children: [(0, n.jsx)("div", {
                                        className: E().StyledCloseIcon,
                                        onClick: c,
                                        children: (0, n.jsx)(I, {})
                                    }), a]
                                })
                            })]
                        }) : null;
                    return i ? A.createPortal(d, document.getElementById("modal-root")) : null
                };
            let G = "googtrans",
                U = e => {
                    let {
                        className: t
                    } = e, [a, l] = (0, m.useState)(!1), [o, i] = (0, m.useState)("English"), [r, c] = (0, m.useState)("En"), {
                        mobileNavActive: d
                    } = M(), [u, h] = (0, m.useState)(), [p, _] = (0, m.useState)(), [g, f] = (0, m.useState)(!1);
                    if ((0, m.useEffect)(() => {
                            window.innerWidth > 991.98 ? f(!1) : f(!0)
                        }, []), (0, m.useEffect)(() => {
                            let e;
                            let t = (0, B.parseCookies)(),
                                n = t[G];
                            if (n) {
                                let t = n.split("/");
                                t.length > 2 && (e = t[2])
                            }
                            s.g.__GOOGLE_TRANSLATION_CONFIG__ && !e && (e = s.g.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage), e && h(e), s.g.__GOOGLE_TRANSLATION_CONFIG__ && _(s.g.__GOOGLE_TRANSLATION_CONFIG__)
                        }, []), !u || !p) return null;
                    let v = e => () => {
                        (0, B.setCookie)(null, G, "/en/" + e), window.location.reload()
                    };
                    return (0, n.jsxs)("div", {
                        className: C().langSwitcher,
                        children: [(0, n.jsxs)("div", {
                            translate: "no",
                            className: "".concat(C().googletranslate, " ").concat(a ? C().active : C().disable, " ").concat(d ? C().mobileNavActive : "", " ").concat(t || "", " ").concat(a ? "langActive" : ""),
                            onClick: () => l(e => !e),
                            children: [p.languages.map((e, t) => (0, n.jsx)(n.Fragment, {
                                children: u === e.name || "auto" === u && p.defaultLanguage === e ? (0, n.jsxs)("span", {
                                    className: "mx-3 text-orange-300",
                                    children: [(0, n.jsxs)("span", {
                                        children: ["test" == e.flag ? (0, n.jsx)(x, {
                                            hero: !0,
                                            src: "/favicon.png"
                                        }) : (0, n.jsx)(x, {
                                            hero: !0,
                                            src: "https://flagcdn.com/40x30/".concat(e.flag, ".png")
                                        }), " "]
                                    }), " ", e.title]
                                }, "l_s_".concat(e)) : null
                            })), !g && (0, n.jsx)("ul", {
                                className: C().languageList,
                                children: p.languages.map((e, t) => (0, n.jsx)(n.Fragment, {
                                    children: u === e.name || "auto" === u && p.defaultLanguage === e ? (0, n.jsxs)("span", {
                                        className: "mx-3 text-orange-300",
                                        children: [(0, n.jsx)("span", {
                                            children: "test" == e.flag ? (0, n.jsx)(x, {
                                                hero: !0,
                                                src: "/favicon.png"
                                            }) : (0, n.jsx)(x, {
                                                hero: !0,
                                                src: "https://flagcdn.com/40x30/".concat(e.flag, ".png")
                                            })
                                        }), e.title]
                                    }, "l_s_".concat(e)) : (0, n.jsxs)("a", {
                                        onClick: v(e.name),
                                        className: "mx-3 text-blue-300 cursor-pointer hover:underline",
                                        children: [(0, n.jsxs)("span", {
                                            children: [" ", "test" == e.flag ? (0, n.jsx)(x, {
                                                hero: !0,
                                                src: "/favicon.png"
                                            }) : (0, n.jsx)(x, {
                                                hero: !0,
                                                src: "https://flagcdn.com/40x30/".concat(e.flag, ".png")
                                            }), " "]
                                        }), " ", e.title]
                                    }, "l_s_".concat(e))
                                }))
                            }), g && (0, n.jsx)(O, {
                                show: a,
                                onClose: () => null,
                                children: (0, n.jsx)("ul", {
                                    className: C().languageList,
                                    translate: "no",
                                    children: p.languages.map((e, t) => (0, n.jsx)(n.Fragment, {
                                        children: u === e.name || "auto" === u && p.defaultLanguage === e ? (0, n.jsxs)("span", {
                                            className: "mx-3 text-orange-300",
                                            children: [(0, n.jsx)("span", {
                                                children: "test" == e.flag ? (0, n.jsx)(x, {
                                                    hero: !0,
                                                    src: "/favicon.png"
                                                }) : (0, n.jsx)(x, {
                                                    hero: !0,
                                                    src: "https://flagcdn.com/40x30/".concat(e.flag, ".png")
                                                })
                                            }), e.title]
                                        }, "l_s_".concat(e)) : (0, n.jsxs)("a", {
                                            onClick: v(e.name),
                                            className: "mx-3 text-blue-300 cursor-pointer hover:underline",
                                            children: [(0, n.jsxs)("span", {
                                                children: [" ", "test" == e.flag ? (0, n.jsx)(x, {
                                                    hero: !0,
                                                    src: "/favicon.png"
                                                }) : (0, n.jsx)(x, {
                                                    hero: !0,
                                                    src: "https://flagcdn.com/40x30/".concat(e.flag, ".png")
                                                }), " "]
                                            }), " ", e.title]
                                        }, "l_s_".concat(e))
                                    }))
                                })
                            })]
                        }), (0, n.jsx)("div", {
                            onClick: () => l(e => !e),
                            className: "".concat(a ? C().active : "", " ").concat(C().overlay)
                        })]
                    })
                };

            function q() {
                let [e, t] = (0, m.useState)(!1);
                return (0, m.useEffect)(() => {
                    setTimeout(() => {
                        t(!0)
                    }, 1e3)
                }, []), (0, n.jsx)(n.Fragment, {
                    children: e && (0, n.jsx)(U, {})
                })
            }
            var V = s(49812),
                z = s.n(V);

            function J(e) {
                let {
                    type: t,
                    children: s,
                    target: a,
                    soon: l,
                    href: o,
                    color: i,
                    className: r,
                    onClick: c,
                    disabled: d
                } = e, u = "black" == i ? z().black : "transparent" == i ? z().transparent : z().light, [p, _] = (0, m.useState)(!1);
                return (0, m.useEffect)(() => {
                    p && setTimeout(() => {
                        _(!1)
                    }, 1e3)
                }, [p]), (0, n.jsx)(n.Fragment, {
                    children: o ? (0, n.jsx)(h(), {
                        target: a ? "_blank" : "",
                        href: o,
                        className: "".concat(z().button, " ").concat(r || "", " ").concat(u),
                        onClick: c || null,
                        children: s
                    }) : l ? (0, n.jsxs)("div", {
                        className: z().div,
                        children: [(0, n.jsx)("button", {
                            disabled: d,
                            onClick: c || (l ? () => _(!0) : null),
                            className: "".concat(z().button, " ").concat(r || "", " ").concat(u),
                            children: s
                        }), p && (0, n.jsx)("span", {
                            className: z().soon,
                            children: "Soon"
                        })]
                    }) : (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsxs)("button", {
                            type: t || "button",
                            disabled: d,
                            onClick: c || (l ? () => _(!0) : null),
                            className: "".concat(z().button, " ").concat(r || "", " ").concat(u),
                            children: [s, p && (0, n.jsx)("span", {
                                className: z().soon,
                                children: "Soon"
                            })]
                        })
                    })
                })
            }
            var Y = s(3795),
                K = s(8732);

            function X() {
                let {
                    mobileNavActive: e,
                    setMobileNavActive: t
                } = M(), [s, a] = (0, m.useState)(!1), [l, o] = (0, m.useState)(!0), [i, c] = (0, m.useState)(!0);
                return (0, m.useEffect)(() => {
                    window.innerWidth < 768 ? a(!1) : a(!0)
                }, []), (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("div", {
                        className: "".concat(N().bonusCode, " ").concat(e ? N().active : ""),
                        children: (0, n.jsxs)("p", {
                            children: ["Our only verified ", (0, n.jsx)("img", {
                                className: N().verImg,
                                src: "/verified.png",
                                alt: "verified",
                                loading: "lazy"
                            }), " ", "Telegram handle:", (0, n.jsx)(h(), {
                                href: "https://t.me/blockDAGnetworkOfficial",
                                children: "@blockdagnetworkofficial"
                            }), (0, n.jsx)(h(), {
                                className: N().nounderline,
                                href: "https://t.me/blockDAGnetworkOfficial",
                                children: (0, n.jsx)("img", {
                                    src: "/images/socials/telegram-white.png",
                                    alt: "telegram",
                                    className: N().telegramIcon
                                })
                            })]
                        })
                    }), (0, n.jsx)("header", {
                        className: "".concat(N().header, " ").concat(e ? N().active : "", " ").concat(e ? "headerActive" : ""),
                        children: (0, n.jsx)("div", {
                            className: N().headerArea,
                            children: (0, n.jsxs)(r, {
                                large: !0,
                                className: N().container,
                                children: [(0, n.jsxs)(h(), {
                                    onClick: () => {
                                        t(!1)
                                    },
                                    href: K.cG,
                                    className: "".concat(N().logo, " d-md"),
                                    children: [(0, n.jsx)("div", {
                                        className: N().img,
                                        children: s ? (0, n.jsx)(x, {
                                            hero: !0,
                                            src: "/3d.gif"
                                        }) : (0, n.jsx)(x, {
                                            hero: !0,
                                            src: "/3dgif.png"
                                        })
                                    }), (0, n.jsx)("span", {
                                        children: "BlockDAG "
                                    })]
                                }), (0, n.jsxs)(h(), {
                                    onClick: () => {
                                        t(!1)
                                    },
                                    href: K.cG,
                                    className: "".concat(N().logo, " ").concat(N().logoMobile, " d-sm"),
                                    children: [(0, n.jsx)("div", {
                                        className: N().img,
                                        children: s ? (0, n.jsx)(x, {
                                            hero: !0,
                                            src: "/3d.gif"
                                        }) : (0, n.jsx)(x, {
                                            hero: !0,
                                            src: "/3dgif.png"
                                        })
                                    }), (0, n.jsx)("span", {
                                        children: "BlockDAG"
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: N().right,
                                    children: [(0, n.jsxs)("nav", {
                                        className: "".concat(N().nav, " ").concat(e ? N().activeNav : ""),
                                        children: [(0, n.jsxs)("ul", {
                                            className: N().navUl,
                                            children: [(0, n.jsx)("div", {
                                                className: "".concat(N().closeArea, " d-sm"),
                                                onClick: () => t(!1),
                                                children: (0, n.jsx)(I, {})
                                            }), k.map((e, s) => (0, n.jsxs)("li", {
                                                className: "".concat(N().navListItem, " ").concat(e.mobile ? "d-sm" : ""),
                                                children: [e.slug ? (0, n.jsx)("a", {
                                                    className: e.list ? N().listTitle : "",
                                                    onClick: () => {
                                                        "" !== e.slug && t(!1)
                                                    },
                                                    href: "" === e.slug ? "#" : e.slug,
                                                    target: e.target ? "_blank" : "",
                                                    children: e.title
                                                }) : (0, n.jsx)("span", {
                                                    className: "".concat(N().nohref, " ").concat(e.list ? N().listTitle : ""),
                                                    onClick: () => {
                                                        "" !== e.slug && t(!1), "Mechanics" === e.title && o(e => !e), "Products" === e.title && c(e => !e)
                                                    },
                                                    href: "" === e.slug ? "#" : e.slug,
                                                    target: e.target ? "_blank" : "",
                                                    children: e.title
                                                }), e.list && (0, n.jsx)("ul", {
                                                    className: "".concat(N().additionalList, " ").concat("Mechanics" !== e.title || l ? "" : N().mechanicsClicked, " ").concat("Products" !== e.title || i ? "" : N().mechanicsClicked),
                                                    children: e.list.map(e => (0, n.jsx)("li", {
                                                        children: (0, n.jsx)("a", {
                                                            onClick: () => {
                                                                t(!1)
                                                            },
                                                            href: e.slug,
                                                            target: e.target ? e.target : "",
                                                            children: e.title
                                                        })
                                                    }))
                                                })]
                                            }, s)), (0, n.jsx)(q, {
                                                mobile: !0
                                            })]
                                        }), (0, n.jsx)("div", {
                                            onClick: () => t(!1),
                                            className: N().overlay
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: N().rightBar,
                                        children: [(0, n.jsx)(J, {
                                            href: "".concat(K.YJ),
                                            color: "black",
                                            className: "d-md",
                                            children: "BUY"
                                        }), (0, n.jsx)(J, {
                                            href: "".concat(K.YJ),
                                            color: "black",
                                            className: "d-sm",
                                            children: "Buy"
                                        }), (0, n.jsx)("div", {
                                            onClick: () => {
                                                t(!e)
                                            },
                                            className: N().hamburger,
                                            children: e ? (0, n.jsx)(I, {}) : (0, n.jsx)(D, {})
                                        })]
                                    })]
                                })]
                            })
                        })
                    })]
                })
            }
            var Q = s(46811),
                $ = s.n(Q),
                ee = s(6154),
                et = s(11163),
                es = s(69077),
                en = s(57065);
            let ea = (0, m.createContext)(),
                el = () => (0, m.useContext)(ea),
                eo = e => {
                    let {
                        children: t
                    } = e, s = (0, et.useRouter)(), {
                        address: a,
                        isConnected: l,
                        isConnecting: o
                    } = (0, es.mA)(), [i, r] = (0, m.useState)(!1);
                    (0, m.useEffect)(() => {
                        o && r(!0)
                    }, [o]), (0, m.useEffect)(() => {
                        if (i && l) {
                            var e, t;
                            let n = (null === (e = s.query) || void 0 === e ? void 0 : e.utm_source) || "",
                                a = (null === (t = s.query) || void 0 === t ? void 0 : t.source) || "";
                            gtag("event", "walletAdded", {
                                source: n || a
                            }), fbq("track", "Lead", {
                                source: n || a
                            }), en.Attribution.track("Wallet Connect Event", {
                                source: n || a
                            })
                        }
                    }, [l, i]);
                    let [c, d] = (0, m.useState)(null), [u, h] = (0, m.useState)(null), [p, _] = (0, m.useState)(null), [g, x] = (0, m.useState)(null), [f, v] = (0, m.useState)(null), [j, y] = (0, m.useState)(!1), [b, w] = (0, m.useState)(null), [N, k] = (0, m.useState)(null), [B, S] = (0, m.useState)(null), [C, T] = (0, m.useState)(null), [M, L] = (0, m.useState)(null), [P, E] = (0, m.useState)(0), [A, D] = (0, m.useState)(null), [I, F] = (0, m.useState)(null), [R, H] = (0, m.useState)(null), [W, Z] = (0, m.useState)(null), [O, G] = (0, m.useState)(null), [U, q] = (0, m.useState)(null), [V, z] = (0, m.useState)(null), [J, X] = (0, m.useState)(null), [Q, $] = (0, m.useState)(null), [el, eo] = (0, m.useState)(null), [ei, er] = (0, m.useState)(null), [ec, ed] = (0, m.useState)(null), [eu, eh] = (0, m.useState)(Y.yM), [em, ep] = (0, m.useState)(null), [e_, eg] = (0, m.useState)(null), [ex, ef] = (0, m.useState)(null), [ev, ej] = (0, m.useState)({}), ey = () => {
                        {
                            let e = localStorage.getItem("sms_source"),
                                t = localStorage.getItem("utm_source"),
                                s = localStorage.getItem("utm_medium"),
                                n = localStorage.getItem("utm_campaign");
                            if (t || s || n || e) return {
                                utm_source: t,
                                utm_medium: s,
                                utm_campaign: n,
                                source: e
                            }
                        }
                        return ev
                    };
                    (0, m.useEffect)(() => {
                        let {
                            query: e
                        } = s, t = e.utm_source, n = e.utm_medium, a = e.utm_campaign, l = e.source;
                        ej(ey), t && (ej(e => ({ ...e,
                            utm_source: t
                        })), localStorage.setItem("utm_source", t)), n && (ej(e => ({ ...e,
                            utm_medium: n
                        })), localStorage.setItem("utm_medium", n)), a && (ej(e => ({ ...e,
                            utm_campaign: a
                        })), localStorage.setItem("utm_campaign", a)), l && (ej(e => ({ ...e,
                            source: l
                        })), localStorage.setItem("sms_source", l))
                    }, [s.query]), (0, m.useEffect)(() => {
                        if (a) {
                            let e = new Date,
                                t = localStorage.getItem("wagmi.cutoffTime"),
                                n = new Date(t || e.getTime() + 12e5);
                            localStorage.setItem("wagmi.cutoffTime", n), e > n && setTimeout(() => {
                                localStorage.clear(), s.reload()
                            }, 500)
                        }
                    }, [a]);
                    let eb = () => {
                        {
                            let e = localStorage.getItem("linkedReferral");
                            if (e) return e
                        }
                        return null
                    };
                    (0, m.useEffect)(() => {
                        a && ee.Z.get("".concat(Y.T5, "/buyer-details/").concat(a), K.ob).then(e => {
                            200 == e.status && ef(e.data.data)
                        })
                    }, [a]), (0, m.useEffect)(() => {
                        ep(eb), (() => {
                            let {
                                query: e
                            } = s, t = e.ref;
                            t && (ep(t), localStorage.setItem("linkedReferral", t))
                        })()
                    }, [s.query.ref]);
                    let ew = e => {
                        ee.Z.get("".concat(Y.T5, "/wallet/").concat(e), K.ob).then(e => {
                            e && e.data && H(e.data)
                        }), ee.Z.get("".concat(Y.T5, "/wallet/").concat(e), K.xE).then(e => {
                            e && e.data && Z(e.data)
                        }), ee.Z.get("".concat(Y.T5, "/wallet/").concat(e), K.$j).then(e => {
                            e && e.data && G(e.data)
                        }), ee.Z.get("".concat(Y.T5, "/wallet/").concat(e), K.T_).then(e => {
                            e && e.data && q(e.data)
                        })
                    };
                    return (0, m.useEffect)(() => {
                        a && ew(a)
                    }, [a]), (0, m.useEffect)(() => {
                        ee.Z.get("".concat(Y.T5), {
                            headers: {
                                project: "".concat(Y.yM)
                            }
                        }).then(e => {
                            setTimeout(() => {
                                _(e.data)
                            }, 500)
                        })
                    }, []), (0, m.useEffect)(() => {
                        {
                            let e = localStorage.getItem("selectedValue") || "";
                            F(e), localStorage.setItem("selectedValue", I)
                        }
                    }, [l]), (0, m.useEffect)(() => {
                        null !== A && localStorage.setItem("selectedMethod", A)
                    }, [A]), (0, m.useEffect)(() => {
                        {
                            let e = localStorage.getItem("selectedMethod");
                            "" !== e && (D(e), null == e && D("ETH"))
                        }
                    }, [A]), (0, n.jsx)(ea.Provider, {
                        value: {
                            tokenData: p,
                            setTokenData: _,
                            userBalance: g,
                            setUserBalance: x,
                            isRegisterShown: j,
                            setRegisterVisibility: y,
                            setMethod: D,
                            paymentMethod: A,
                            setPaymentAmount: F,
                            paymentAmount: I,
                            setBalance: v,
                            balance: f,
                            setWillSendPromoCode: h,
                            willSendPromoCode: u,
                            promo: c,
                            setPromo: d,
                            walletState: b,
                            setWalletState: w,
                            messageType: N,
                            setMessageType: k,
                            messageContent: B,
                            setMessageContent: S,
                            value: C,
                            setValue: T,
                            userTokenData: R,
                            setUserTokenData: H,
                            selectedProduct: M,
                            setSelectedProduct: L,
                            quantity: P,
                            setQuantity: E,
                            referralCode: V,
                            setReferralCode: z,
                            referralDetails: J,
                            setRefDetails: X,
                            linkedReferral: em,
                            buyType: Q,
                            setBuyType: $,
                            productTokenData10: el,
                            setProductTokenData10: eo,
                            productTokenData30: ei,
                            setProductTokenData30: er,
                            productTokenData100: ec,
                            setProductTokenData100: ed,
                            transactionHeader: eu,
                            setTransactionHeader: eh,
                            userTokenData10: W,
                            setUserTokenData10: Z,
                            userTokenData30: O,
                            setUserTokenData30: G,
                            userTokenData100: U,
                            setUserTokenData100: q,
                            hashCode: e_,
                            setHashCode: eg,
                            defaultData: ex,
                            setDefaultData: ef,
                            source: ev
                        },
                        children: t
                    })
                };
            var ei = s(39471),
                er = s.n(ei);

            function ec() {
                let e = (0, et.useRouter)(),
                    [t, s] = (0, m.useState)(!1);
                return (0, m.useEffect)(() => {
                    "/?restricted" === e.asPath && s(!0)
                }, [e.asPath]), (0, n.jsx)(n.Fragment, {
                    children: t ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)("div", {
                            className: "".concat(er().resrictedpopup),
                            children: [(0, n.jsx)("div", {
                                className: er().logo,
                                children: (0, n.jsx)("img", {
                                    src: "/favicon.png"
                                })
                            }), (0, n.jsx)("h2", {
                                children: "Forbidden Country"
                            }), (0, n.jsxs)("p", {
                                children: ["This site is not accessible to users from the UK; please leave if you are accessing it from within the United Kingdom.", " "]
                            }), (0, n.jsxs)("div", {
                                className: er().btns,
                                children: [(0, n.jsx)("a", {
                                    href: "https://google.com",
                                    children: "Leave the site"
                                }), (0, n.jsx)("a", {
                                    onClick: () => {
                                        s(!1), e.replace("/")
                                    },
                                    children: "Continue to site"
                                })]
                            })]
                        }), (0, n.jsx)("div", {
                            className: er().overlay
                        })]
                    }) : (0, n.jsx)(n.Fragment, {})
                })
            }

            function ed(e) {
                let {
                    children: t,
                    title: s,
                    description: a
                } = e;
                return (0, n.jsx)(eo, {
                    children: (0, n.jsxs)(L, {
                        children: [(0, n.jsxs)(l(), {
                            children: [(0, n.jsx)("title", {
                                children: s || "Buy BDAG Coins & Miners | Become A Part Of BlockDAG Network"
                            }), (0, n.jsx)("meta", {
                                name: "description",
                                content: a || "Invest in the future of blockchain and mining with BDAG coins. Get started easily with a wallet and trusted exchange."
                            }), (0, n.jsx)("link", {
                                rel: "icon",
                                type: "image/png",
                                href: "/favicon.png"
                            }), (0, n.jsx)("meta", {
                                name: "viewport",
                                content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                            })]
                        }), (0, n.jsx)(X, {}), (0, n.jsxs)("main", {
                            className: $().main,
                            children: [t, (0, n.jsx)("div", {
                                className: $().mainBg
                            })]
                        }), (0, n.jsx)(b, {}), (0, n.jsx)(ec, {})]
                    })
                })
            }
            var eu = s(57453),
                eh = s.n(eu),
                em = s(63750),
                ep = s(72122),
                e_ = s.n(ep),
                eg = s(86501),
                ex = s(2797),
                ef = s.n(ex);
            let ev = (e, t) => {
                    e = e.toString();
                    let s = e.split(".");
                    if (s.length < 2) return e;
                    let n = s[0],
                        a = s[1];
                    if (a.length <= t) return "";
                    let l = a.match(/0*$/);
                    if (!l) return "";
                    let o = l[0],
                        i = a.substring(0, l.index);
                    return o = o.substring(0, t - (a.length - o.length)), "".concat(n, ".").concat(i).concat(o)
                },
                ej = (e, t, s) => {
                    let n = (e = Math.floor(1e5 * e + .5) / 1e5).toString(),
                        a = 0;
                    if (n.includes(".") && (a = n.split(".")[1].length), a < t) {
                        0 === a && (n += ".");
                        for (var l = a; l < t; l++) n += "0"
                    }
                    if (a > 0) {
                        let e = n.split("."),
                            a = e[0],
                            l = e[1],
                            o = (l.match(/[1-9][0-9]*/) || [""])[0],
                            i = o.length,
                            r = (l.match(/0*/) || [""])[0],
                            c = r + o;
                        "0" !== a && c.length > s ? (c = c.substring(0, s), n = "".concat(a, ".").concat(ev(c, t))) : i > s && (o = o.substring(0, s), n = "".concat(a, ".").concat(r).concat(ev(o, t)))
                    }
                    return n
                },
                ey = e => {
                    let t = e.toString().split(".");
                    return t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","), t.join(".")
                },
                eb = (e, t, s) => ey(ej(e, t, s)),
                ew = (e, t) => (Math.floor(e * 10 ** t) / 10 ** t).toString(),
                eN = {
                    K: 1e3,
                    M: 1e6,
                    B: 1e9,
                    T: 1e12
                },
                ek = (e, t, s, n) => {
                    if (e < t) return eb(e, s, n);
                    let a = e = Math.floor(e),
                        l = "";
                    return Object.entries(eN).forEach(t => {
                        let [s, n] = t;
                        e / n < 1e3 && e / n >= 1 && (l = s, a = e / n)
                    }), "".concat(ew(a, 2)).concat(l)
                };

            function eB(e) {
                let {
                    promo: t,
                    setPromo: s,
                    promoCode: a,
                    setPromoCode: l
                } = e, [o, i] = (0, m.useState)(!1), [r, c] = (0, m.useState)(!1), {
                    selectedProduct: d,
                    quantity: u,
                    transactionHeader: h
                } = el(), p = e => {
                    i(!0), ee.Z.get("".concat("https://presaleapi.blockdag.network", "/checkPromoCode/").concat(e || a), {
                        headers: {
                            project: "https://blockdag.network/"
                        }
                    }).then(e => {
                        s(e.data), setTimeout(() => {
                            i(!1)
                        }, 1e3)
                    })
                };
                return (0, n.jsx)("div", {
                    className: ef().promocode,
                    children: (0, n.jsxs)(n.Fragment, {
                        children: [r || a ? (0, n.jsx)("form", {
                            action: "",
                            onSubmit: e => e.preventDefault(),
                            className: "".concat(t ? (null == t ? void 0 : t.valid) ? ef().valid : ef().invalid : ""),
                            children: (0, n.jsxs)("div", {
                                className: ef().formGroup,
                                children: [(0, n.jsx)("input", {
                                    type: "text",
                                    placeholder: "Enter Special Key",
                                    value: a,
                                    onInput: e => l(e.target.value),
                                    disabled: o,
                                    onBlur: e => e.target.value.length > 0 ? p(e.target.value) : null
                                }), (0, n.jsx)("div", {
                                    className: "".concat(ef().apply, " "),
                                    children: (0, n.jsx)("div", {
                                        className: ef().text,
                                        children: "Apply"
                                    })
                                })]
                            })
                        }) : (0, n.jsx)("p", {
                            className: ef().special,
                            onClick: () => {
                                c(!0)
                            },
                            children: "Do you have a Special Key?"
                        }), t && (0, n.jsx)(n.Fragment, {
                            children: t.valid ? (0, n.jsxs)("p", {
                                className: "".concat(ef().desc, " ").concat(ef().success),
                                children: [(0, n.jsx)("div", {
                                    className: ef().icon,
                                    children: (0, n.jsx)(x, {
                                        src: "/images/bonus-success.svg"
                                    })
                                }), "With this Bonus Code, you will receive ", t.promo.bonus_percentage, "% extra coins."]
                            }) : (0, n.jsxs)("p", {
                                className: "".concat(ef().desc, " ").concat(ef().error),
                                children: [(0, n.jsx)("div", {
                                    className: ef().icon,
                                    children: (0, n.jsx)(x, {
                                        src: "/images/bonus-invalid.svg"
                                    })
                                }), "This Bonus Code is not valid."]
                            })
                        })]
                    })
                })
            }
            var eS = s(27213),
                eC = s(57722),
                eT = s.n(eC);

            function eM() {
                let [e, t] = (0, m.useState)(!1), {
                    tokenData: s
                } = el(), {
                    open: a
                } = (0, eS.k_)(), {
                    address: l
                } = (0, es.mA)();
                return (0, m.useEffect)(() => {
                    l && t(!0)
                }, [l]), (0, n.jsxs)("div", {
                    className: eT().wallethead,
                    children: [(0, n.jsxs)("div", {
                        className: eT().item,
                        children: [(0, n.jsx)("h5", {
                            children: "Current Batch"
                        }), (0, n.jsxs)("p", {
                            children: ["BATCH ", null == s ? void 0 : s.stage]
                        })]
                    }), e && (0, n.jsx)("div", {
                        className: eT().right,
                        children: (0, n.jsx)("div", {
                            className: eT().item,
                            children: (0, n.jsx)("span", {
                                className: eT().logout,
                                style: {
                                    cursor: "pointer",
                                    textDecoration: "underline"
                                },
                                onClick: () => {
                                    a({
                                        view: "Account"
                                    })
                                },
                                children: "Log Out"
                            })
                        })
                    })]
                })
            }
            var eL = s(43777),
                eP = s.n(eL),
                eE = s(57460),
                eA = s.n(eE);

            function eD(e) {
                let {
                    noVerticalPadding: t
                } = e, {
                    tokenData: s
                } = el();
                return (0, n.jsxs)("div", {
                    className: "".concat(eA().walletstages, " ").concat(t ? eA().noVerticalPadding : {}),
                    children: [(0, n.jsxs)("p", {
                        children: [null == s ? void 0 : s.tokenPrice, " USDT = 1 BDAG"]
                    }), (0, n.jsxs)("p", {
                        children: ["Next Batch: ", null == s ? void 0 : s.nextStageTokenPrice]
                    })]
                })
            }

            function eI(e) {
                let {
                    isStarter: t
                } = e, {
                    tokenData: s
                } = el(), a = (0, Y.HN)((null == s ? void 0 : s.stageSoldTokens) / Number(null == s ? void 0 : s.stageTokens) * 100 > 28 ? 98 : ((null == s ? void 0 : s.stageSoldTokens) + 1e7 * K.ft) / Number(null == s ? void 0 : s.stageTokens) * 100 + 70).toLocaleString();
                return (0, n.jsx)("div", {
                    className: eP().walletbar,
                    children: (0, n.jsxs)("div", {
                        className: eP().bar,
                        children: [(0, n.jsxs)("div", {
                            className: eP().spans,
                            children: [(0, n.jsx)("span", {
                                children: "Remaining"
                            }), (0, n.jsx)("span", {
                                children: (0, Y.HN)((null == s ? void 0 : s.stageTokens) - (null == s ? void 0 : s.stageSoldTokens) - 1e7 * K.ft)
                            })]
                        }), (0, n.jsx)("span", {
                            className: eP().progress,
                            style: {
                                width: "".concat(a < 90 ? 90 : a, "%")
                            }
                        }), (0, n.jsx)("span", {
                            className: eP().progressTitle,
                            style: {
                                left: "".concat(a < 90 ? 90 : a, "%")
                            }
                        })]
                    })
                })
            }
            var eF = s(66277),
                eR = s.n(eF);

            function eH(e) {
                var t;
                let {
                    value: s,
                    setValue: a,
                    label: l
                } = e, [o, i] = (0, m.useState)(!1), r = [{
                    value: "ETH",
                    label: "Ethereum",
                    icon: (0, n.jsx)(Z, {})
                }, {
                    value: "USDT",
                    label: "Usdt",
                    icon: (0, n.jsx)(W, {})
                }, {
                    value: "BNB",
                    label: "BNB",
                    icon: (0, n.jsx)(H, {})
                }];
                return null === (t = r.find(e => e.value === s)) || void 0 === t || t.icon, (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)("div", {
                        className: eR().selecttype,
                        children: r.map((e, t) => (0, n.jsxs)("div", {
                            className: "".concat(eR().item, " ").concat(s == e.value ? eR().active : ""),
                            onClick: () => a(e.value),
                            children: [(0, n.jsx)("span", {
                                children: e.icon
                            }), " ", (0, n.jsxs)("span", {
                                children: [" ", e.value]
                            })]
                        }, t))
                    })
                })
            }
            var eW = s(74167),
                eZ = s.n(eW);

            function eO(e) {
                let {
                    isStarter: t
                } = e, [s, a] = (0, m.useState)(!1), {
                    tokenData: l,
                    buyType: o,
                    setBuyType: i
                } = el(), {
                    address: r
                } = (0, es.mA)();
                return t ? (0, n.jsx)("div", {
                    className: eZ().walletpromo,
                    children: (0, n.jsxs)("span", {
                        className: eZ().batch,
                        children: ["Current Batch ", (0, n.jsxs)("span", {
                            children: ["BATCH ", null == l ? void 0 : l.stage]
                        })]
                    })
                }) : (0, n.jsxs)("div", {
                    className: eZ().buyTypeButtons,
                    children: [(0, n.jsxs)("button", {
                        type: "button",
                        className: "".concat(eZ().buyChangeButton, " ").concat(eZ().coin, " "),
                        onClick: () => i("coin"),
                        children: ["Buy Coins", " ", "coin" == o && (0, n.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            children: (0, n.jsx)("path", {
                                d: "M20 6L9 17L4 12",
                                stroke: "white",
                                "stroke-width": "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round"
                            })
                        })]
                    }), (0, n.jsxs)("button", {
                        type: "button",
                        className: "".concat(eZ().buyChangeButton, " ").concat(eZ().miner, " "),
                        onClick: () => i("miner"),
                        children: ["Buy Miners", "miner" == o && (0, n.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            children: (0, n.jsx)("path", {
                                d: "M20 6L9 17L4 12",
                                stroke: "white",
                                "stroke-width": "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round"
                            })
                        })]
                    })]
                })
            }
            var eG = s(27636),
                eU = s.n(eG);

            function eq(e) {
                let {
                    isStarter: t
                } = e, {
                    tokenData: s
                } = el();
                return t ? (0, n.jsx)("div", {
                    className: eU().walletnotconnected,
                    children: (0, n.jsx)("div", {
                        className: eU().icons,
                        children: ["/images/walletPaymentIcons/payment-1.svg", "/images/walletPaymentIcons/payment-2.svg", "/images/walletPaymentIcons/payment-3.svg", "/images/walletPaymentIcons/payment-4.svg", "/images/walletPaymentIcons/payment-5.svg", "/images/walletPaymentIcons/payment-6.svg", "/images/walletPaymentIcons/payment-7.svg"].map((e, t) => (0, n.jsx)("div", {
                            className: eU().icon,
                            children: (0, n.jsx)(x, {
                                src: e,
                                hero: !0
                            })
                        }, t))
                    })
                }) : (0, n.jsxs)("div", {
                    className: eU().walletnotconnected,
                    children: [(0, n.jsxs)("p", {
                        children: [(0, Y.el)(null == s ? void 0 : s.totalSoldTokens), " Coins Sold"]
                    }), (0, n.jsx)("div", {
                        className: eU().icons,
                        children: ["/images/walletPaymentIcons/payment-1.svg", "/images/walletPaymentIcons/payment-2.svg", "/images/walletPaymentIcons/payment-3.svg"].map((e, t) => (0, n.jsx)("div", {
                            className: eU().icon,
                            children: (0, n.jsx)(x, {
                                src: e,
                                hero: !0
                            })
                        }, t))
                    })]
                })
            }
            var eV = s(35634),
                ez = s.n(eV);

            function eJ(e) {
                let {
                    photo: t,
                    title: s,
                    color: a,
                    type: l,
                    icon: o,
                    onClick: i,
                    value: r,
                    total: c,
                    newValue: d,
                    onAdd: u,
                    onLess: h,
                    quantity: m,
                    activeMine: p,
                    setActiveMine: _,
                    index: g,
                    notConnected: f,
                    open: v,
                    setQuantity: j,
                    connected: y
                } = e;
                return (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsxs)("div", {
                        className: "".concat(ez().minerbox, " ").concat(d >= r - c ? ez().valueActive : "", " ").concat(f ? ez().notConnected : ""),
                        onClick: () => {
                            f ? (v(), j()) : _(g)
                        },
                        children: [(0, n.jsx)("div", {
                            className: ez().content,
                            children: (0, n.jsxs)("div", {
                                children: [(0, n.jsx)("div", {
                                    className: ez().photoBg,
                                    onClick: () => {
                                        f ? v() : u()
                                    },
                                    children: (0, n.jsx)("div", {
                                        className: ez().photo,
                                        children: (0, n.jsx)(x, {
                                            src: t,
                                            hero: !0
                                        })
                                    })
                                }), (0, n.jsx)("h5", {
                                    children: s
                                }), (0, n.jsxs)("p", {
                                    children: [(0, n.jsxs)("span", {
                                        style: {
                                            color: a || ""
                                        },
                                        children: [l, " "]
                                    }), "Miner"]
                                })]
                            })
                        }), (0, n.jsxs)("div", {
                            className: "".concat(ez().quantity),
                            style: y ? {} : {
                                display: "none"
                            },
                            children: [o && (0, n.jsx)("div", {
                                className: ez().icon,
                                children: (0, n.jsx)(x, {
                                    hero: !0,
                                    src: o,
                                    alt: "miner icon"
                                })
                            }), (0, n.jsx)("div", {
                                className: "".concat(ez().minus),
                                onClick: () => {
                                    f ? v() : h()
                                },
                                children: (0, n.jsx)(R, {})
                            }), (0, n.jsx)("div", {
                                className: ez().quant,
                                children: m
                            }), (0, n.jsx)("div", {
                                className: ez().plus,
                                onClick: () => {
                                    f ? v() : u()
                                },
                                children: (0, n.jsx)(F, {})
                            })]
                        })]
                    })
                })
            }
            var eY = s(89051),
                eK = s.n(eY),
                eX = s(16573),
                eQ = s(1020),
                e$ = s(46616),
                e0 = s(87385),
                e1 = s(38168),
                e2 = s(44276),
                e3 = s(12834),
                e6 = s(69275),
                e5 = s(75341),
                e4 = s(70431),
                e8 = s(48137),
                e9 = s(66339);

            function e7(e) {
                let {
                    referralCode: t
                } = e, [s, a] = (0, m.useState)(), {
                    open: l
                } = (0, eS.k_)(), {
                    address: o
                } = (0, es.mA)();
                (0, m.useEffect)(() => {
                    o ? a(!0) : a(!1)
                }, [o]);
                let i = t || "",
                    r = "https://purchase.blockdag.network/?ref=".concat(t || ""),
                    c = "Hey, use my link to purchase blockDag using this link:",
                    d = () => {
                        navigator.clipboard.writeText(r), (0, eg.ZP)(i + " copied.", {
                            position: "bottom-center",
                            duration: 2e3
                        })
                    };
                return (0, n.jsxs)("div", {
                    className: eK().referral,
                    children: [(0, n.jsx)("div", {
                        className: eK().refImg,
                        children: (0, n.jsx)(x, {
                            hero: !0,
                            src: "/images/share.png"
                        })
                    }), (0, n.jsx)("h2", {
                        children: "Earn more BDAG by referring your friends and community!"
                    }), (0, n.jsxs)("div", {
                        className: eK().whiteBg,
                        children: [(0, n.jsxs)("p", {
                            children: ["Share your unique link below and receive ", (0, n.jsx)("span", {
                                children: "10%"
                            }), " of all transactions realized with your link", " ", (0, n.jsx)("span", {
                                children: "instantly"
                            }), "!"]
                        }), (0, n.jsx)("div", {
                            className: t ? eK().blueLink : "",
                            style: {
                                cursor: "pointer"
                            },
                            onClick: () => {
                                s ? d() : l({
                                    view: "Connect"
                                })
                            },
                            children: t ? r : "To create a link, you need to connect a wallet."
                        })]
                    }), (0, n.jsxs)("div", {
                        className: eK().directly,
                        children: [(0, n.jsx)(J, {
                            onClick: () => {
                                s ? d() : l({
                                    view: "Connect"
                                })
                            },
                            className: "btn gold",
                            children: t ? "Copy Referral Link" : "Connect Wallet"
                        }), (0, n.jsx)("p", {
                            children: "Share it directly on your social media!"
                        }), (0, n.jsxs)("div", {
                            className: "".concat(eK().socialShare, " ").concat(t ? "" : eK().notRef),
                            children: [(0, n.jsx)(eX.Z, {
                                url: r,
                                quote: c,
                                className: eK().shareButton,
                                children: (0, n.jsx)(eQ.Z, {
                                    size: 32,
                                    round: !0
                                })
                            }), (0, n.jsx)(e$.Z, {
                                url: r,
                                title: c,
                                className: eK().shareButton,
                                children: (0, n.jsx)(e0.Z, {
                                    size: 32,
                                    round: !0
                                })
                            }), (0, n.jsx)(e1.Z, {
                                url: r,
                                title: c,
                                className: eK().shareButton,
                                children: (0, n.jsx)(e2.Z, {
                                    size: 32,
                                    round: !0
                                })
                            }), (0, n.jsx)(e3.Z, {
                                url: r,
                                title: c,
                                separator: " ",
                                className: eK().shareButton,
                                children: (0, n.jsx)(e6.Z, {
                                    size: 32,
                                    round: !0
                                })
                            }), (0, n.jsx)(e5.Z, {
                                url: r,
                                title: c,
                                separator: " ",
                                className: eK().shareButton,
                                children: (0, n.jsx)(e4.Z, {
                                    size: 32,
                                    round: !0
                                })
                            }), (0, n.jsx)(e8.Z, {
                                url: r,
                                title: c,
                                separator: " ",
                                className: eK().shareButton,
                                children: (0, n.jsx)(e9.Z, {
                                    size: 32,
                                    round: !0
                                })
                            })]
                        })]
                    })]
                })
            }
            var te = s(61007),
                tt = s.n(te),
                ts = s(83006),
                tn = s.n(ts);
            s(65714);
            var ta = s(3788),
                tl = s(82175),
                to = s(77275),
                ti = s.n(to),
                tr = s(34052);

            function tc(e) {
                let {
                    exist: t,
                    defaultCountry: s,
                    setStatus: a
                } = e, {
                    hashCode: l,
                    defaultData: o,
                    setDefaultData: i
                } = el(), r = new tr.Z("en"), {
                    address: c
                } = (0, es.mA)(), [d, u] = (0, m.useState)(null);
                (0, m.useEffect)(() => {
                    o ? u({
                        company: null == o ? void 0 : o.company,
                        firstName: null == o ? void 0 : o.first_name,
                        lastName: null == o ? void 0 : o.last_name,
                        address1: null == o ? void 0 : o.address_line_1,
                        address2: null == o ? void 0 : o.address_line_2,
                        city: null == o ? void 0 : o.city,
                        province: null == o ? void 0 : o.province,
                        zip: null == o ? void 0 : o.zip,
                        e_mail: null == o ? void 0 : o.email
                    }) : u({
                        hash: l
                    }), console.log(o)
                }, [o]);
                let [h, p] = (0, m.useState)(!1), {
                    data: _,
                    isError: g,
                    isLoading: x,
                    isSuccess: f,
                    signMessage: v
                } = (0, es.QW)({
                    message: "Welcome BlockDAG family! After sign return website for submit your form!"
                }), [j, y] = (0, m.useState)("");
                (0, m.useEffect)(() => {
                    j && p((0, ta.yf)(j))
                }, [j]);
                let [b, w] = (0, m.useState)(null), [N, k] = (0, m.useState)([]), [B, S] = (0, m.useState)("US");
                async function C() {
                    let e = await r.getCountries(),
                        t = await r.getOrderedFields(e.filter(e => e.code == B)[0].code);
                    k(e), w(t)
                }(0, m.useEffect)(() => {
                    C()
                }, [B]);
                let T = e => {
                        let {
                            name: t,
                            value: s
                        } = e.target;
                        u(e => ({ ...e,
                            [t]: s
                        }))
                    },
                    M = async e => {
                        let t = await r.getCountries(),
                            {
                                name: s,
                                value: n
                            } = e.target;
                        u(e => ({ ...e,
                            [s]: "".concat(t.filter(e => e.code == n)[0].code, " - ").concat(t.filter(e => e.code == n)[0].name)
                        }))
                    },
                    L = e => {
                        let t = {
                            company: "company",
                            firstName: "first_name",
                            lastName: "last_name",
                            address1: "address_line_1",
                            address2: "address_line_2",
                            city: "city",
                            province: "province",
                            zip: "zip",
                            e_mail: "e_mail"
                        };
                        return null == t ? void 0 : t[e]
                    },
                    P = e => {
                        let t = {
                            company: "Company",
                            firstName: "First Name",
                            lastName: "Last Name",
                            address1: "Address",
                            address2: "Address 2",
                            city: "City",
                            province: "Province",
                            zip: "Zip Code"
                        };
                        return null == t ? void 0 : t[e]
                    };
                return (0, m.useEffect)(() => {
                    f && u(e => ({ ...e,
                        signature: _
                    }))
                }, [f]), (0, m.useEffect)(() => {
                    f && (null == d ? void 0 : d.signature) !== null && ee.Z.post("".concat(K.T5, "/buyer-details"), {
                        buyer_wallet: c,
                        first_name: d.firstName,
                        last_name: d.lastName,
                        company: d.company,
                        hash: l,
                        e_mail: d.e_mail,
                        phone: j,
                        address_line_1: d.address1,
                        address_line_2: d.address2,
                        city: d.city,
                        province: d.province,
                        zip: d.zip,
                        country: d.country,
                        signature: _
                    }, K.ob).then(e => {
                        i({
                            buyer_wallet: c,
                            first_name: d.firstName,
                            last_name: d.lastName,
                            company: d.company,
                            hash: l,
                            email: d.e_mail,
                            phone: j,
                            address_line_1: d.address1,
                            address_line_2: d.address2,
                            city: d.city,
                            province: d.province,
                            zip: d.zip,
                            country: d.country,
                            signature: _
                        }), a(!0)
                    })
                }, [null == d ? void 0 : d.signature]), (0, m.useEffect)(() => {
                    if ((null == o ? void 0 : o.phone) && y(null == o ? void 0 : o.phone), null == o ? void 0 : o.country) {
                        let e = o.country.split(" ")[0];
                        S(e)
                    } else S(s)
                }, [o, s]), (0, n.jsx)("div", {
                    className: ti().addressform,
                    style: {
                        display: "flex"
                    },
                    children: (0, n.jsxs)("form", {
                        onSubmit: e => {
                            e.preventDefault(), v({
                                message: "Welcome BlockDAG family! After sign return website for submit your form! ".concat(c)
                            })
                        },
                        children: [(0, n.jsxs)("div", {
                            className: ti().formGrid,
                            children: [(0, n.jsx)("div", {
                                className: "".concat(ti().field, " ").concat(ti().gridFull),
                                children: (0, n.jsxs)("select", {
                                    name: "country",
                                    onChange: e => {
                                        S(e.target.value), M(e)
                                    },
                                    children: [(0, n.jsx)("option", {
                                        children: "Select Country"
                                    }), N.map(e => (0, n.jsx)("option", {
                                        value: e.code,
                                        selected: e.code == B,
                                        children: e.name
                                    }, e.code))]
                                })
                            }), b && b.map((e, t) => (0, n.jsx)(m.Fragment, {
                                children: e.map(e => (0, n.jsx)(m.Fragment, {
                                    children: "phone" === e ? null : "country" === e ? null : (0, n.jsx)("div", {
                                        className: "".concat(ti().field, " ").concat("address1" == e || "address2" == e || "company" == e ? ti().gridFull : ""),
                                        children: (null == o ? void 0 : o[L(e)]) ? (0, n.jsx)("input", {
                                            type: "text",
                                            defaultValue: null == o ? void 0 : o[L(e)],
                                            name: e,
                                            placeholder: P(e),
                                            onChange: T
                                        }) : (0, n.jsx)("input", {
                                            type: "text",
                                            name: e,
                                            placeholder: P(e),
                                            onChange: T
                                        })
                                    }, t)
                                }, e))
                            }, t)), (0, n.jsx)("div", {
                                className: "".concat(ti().field, " ").concat(ti().gridFull),
                                children: (null == o ? void 0 : o.email) ? (0, n.jsx)("input", {
                                    type: "text",
                                    name: "e_mail",
                                    defaultValue: null == o ? void 0 : o.email,
                                    placeholder: "Email",
                                    onChange: T
                                }) : (0, n.jsx)("input", {
                                    type: "text",
                                    name: "e_mail",
                                    placeholder: "Email",
                                    onChange: T
                                })
                            }), b && b.map((e, t) => (0, n.jsx)(m.Fragment, {
                                children: e.map(e => (0, n.jsx)(m.Fragment, {
                                    children: "phone" === e ? (0, n.jsxs)("div", {
                                        className: ti().fieldPhone,
                                        children: [(0, n.jsx)(ta.ZP, {
                                            placeholder: "Enter phone number",
                                            defaultCountry: s,
                                            value: j,
                                            onChange: y
                                        }), j && !h && (0, n.jsx)("div", {
                                            className: ti().error,
                                            children: "Please enter valid number."
                                        })]
                                    }) : null
                                }, e))
                            }, t))]
                        }), (0, n.jsx)("button", {
                            className: "btn gold",
                            type: "submit",
                            disabled: j && !h,
                            children: "SAVE"
                        }), f && (0, n.jsx)("p", {
                            className: ti().success,
                            children: "Successfully signed! Welcome BlockDAG Family. You can submit form now!"
                        })]
                    })
                })
            }
            var td = e => {
                    let {
                        address: t,
                        setRegisterVisibility: s,
                        minerForm: a,
                        update: l
                    } = e, {
                        hashCode: o,
                        defaultData: i,
                        setDefaultData: r
                    } = el(), [c, d] = (0, m.useState)(!1), [u, h] = (0, m.useState)(), [p, _] = (0, m.useState)("US"), [g, f] = (0, m.useState)(!1), [v, j] = (0, m.useState)(i || null), [y, b] = (0, m.useState)(!!i), [w, N] = (0, m.useState)(!1), {
                        data: k,
                        isError: B,
                        isLoading: S,
                        isSuccess: C,
                        signMessage: T
                    } = (0, es.QW)({
                        message: "Welcome BlockDAG family! After sign return website for submit your form!"
                    });
                    return (0, m.useEffect)(() => {
                        i && b(!0)
                    }), (0, m.useEffect)(() => {
                        (null == i ? void 0 : i.mobile) && h(null == i ? void 0 : i.mobile)
                    }, [null == i ? void 0 : i.mobile]), (0, m.useEffect)(() => {
                        u && f((0, ta.yf)(u))
                    }, [u]), (0, m.useEffect)(() => {
                        ee.Z.get("https://ipapi.co/json").then(e => {
                            e.data && _(e.data.country_code)
                        })
                    }, []), (0, m.useEffect)(() => {
                        c && setTimeout(() => {
                            s(!1)
                        }, 7500)
                    }, [c]), (0, m.useEffect)(() => {
                        C && j(e => ({ ...e,
                            signature: k
                        }))
                    }, [C]), (0, m.useEffect)(() => {
                        w && !a && ee.Z.post("".concat(K.XI, "/leads/createLead"), v, K.ob).then(e => {
                            d(!0)
                        })
                    }, [null == v ? void 0 : v.signature]), (0, n.jsxs)("div", {
                        className: tn().container,
                        children: [(0, n.jsx)("div", {
                            className: tn().backdrop,
                            onClick: () => c ? s(!1) : null
                        }), (0, n.jsxs)("div", {
                            className: tn().content,
                            children: [(0, n.jsx)("div", {
                                className: tn().close,
                                onClick: () => s(!1)
                            }), a && (0, n.jsx)("div", {
                                className: tn().deliveryIcon,
                                children: (0, n.jsx)(x, {
                                    hero: !0,
                                    src: "/delivery.svg"
                                })
                            }), (0, n.jsx)("div", {
                                className: tn().hero,
                                children: a ? (0, n.jsxs)(n.Fragment, {
                                    children: [y && !c && (0, n.jsxs)(n.Fragment, {
                                        children: ["Your Current ", (0, n.jsx)("br", {})]
                                    }), " ", "Delivery Information"]
                                }) : "Register Form"
                            }), !a && !c && (0, n.jsx)("p", {
                                className: tn().desc,
                                children: "Please register your details in order to receive on going information leading up to our global launch!"
                            }), c ? (0, n.jsx)("p", {
                                className: tn().desc,
                                children: a ? (0, n.jsx)(n.Fragment, {
                                    children: "Great, deliveries will commence later in 2024, we will contact you by email and SMS to arrange delivery once shipping starts! You can update your delivery information at anytime using change address link on BUY page. Thank you and welcome\xa0to\xa0BlockDAG!"
                                }) : (0, n.jsxs)(n.Fragment, {
                                    children: ["Great,", (0, n.jsx)("br", {}), " we will notify you with all the updates we have in the future."]
                                })
                            }) : a ? (0, n.jsx)(tc, {
                                exist: y,
                                hashCode: o,
                                defaultData: i,
                                defaultCountry: p,
                                setStatus: d
                            }) : (0, n.jsx)(tl.J9, {
                                initialValues: {
                                    email: null,
                                    firstName: null,
                                    lastName: null,
                                    phoneCode: null,
                                    phone: null,
                                    checkbox: !1
                                },
                                validate: e => {
                                    let t = {};
                                    return e.full_name || (t.full_name = "Required"), e.checkbox || (t.checkbox = "Required"), e.email ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email) || (t.email = "Invalid email address") : t.email = "Required", t
                                },
                                onSubmit: (e, s) => {
                                    let {
                                        setSubmitting: n
                                    } = s, a = "";
                                    u && g && (a = u);
                                    let l = {
                                        type: "purchase_form",
                                        source: "website",
                                        full_name: "".concat(e.full_name),
                                        email: e.email,
                                        mobile: a,
                                        wallet_address: t || null
                                    };
                                    ee.Z.post("".concat(K.XI, "/leads/createLead"), l, K.ob).then(e => {
                                        n(!1), d(!0)
                                    })
                                },
                                children: e => {
                                    let {
                                        values: t,
                                        errors: s,
                                        touched: l,
                                        handleChange: o,
                                        handleBlur: i,
                                        handleSubmit: r,
                                        isSubmitting: c
                                    } = e;
                                    return (0, n.jsxs)("form", {
                                        onSubmit: r,
                                        children: [(0, n.jsx)("div", {
                                            className: tn().fieldsContainer,
                                            children: (0, n.jsxs)("div", {
                                                className: tn().field,
                                                children: [(0, n.jsx)("input", {
                                                    type: "text",
                                                    placeholder: "Full Name",
                                                    name: "full_name",
                                                    onChange: o,
                                                    onBlur: i,
                                                    value: t.full_name
                                                }), s.full_name && l.full_name && (0, n.jsx)("div", {
                                                    className: tn().error,
                                                    children: s.full_name
                                                })]
                                            })
                                        }), (0, n.jsx)("div", {
                                            className: tn().field,
                                            children: (0, n.jsx)("input", {
                                                type: "text",
                                                placeholder: "Email",
                                                name: "email",
                                                onChange: o,
                                                onBlur: i,
                                                value: t.email
                                            })
                                        }), (0, n.jsxs)("div", {
                                            className: tn().fieldPhone,
                                            children: [(0, n.jsx)(ta.ZP, {
                                                placeholder: "Enter phone number",
                                                defaultCountry: p,
                                                value: u,
                                                onChange: h
                                            }), u && !g && (0, n.jsx)("div", {
                                                className: tn().error,
                                                children: "Please enter valid number."
                                            })]
                                        }), (0, n.jsxs)("div", {
                                            className: tn().fieldCheck,
                                            children: [(0, n.jsxs)("label", {
                                                className: tn().checkbox,
                                                children: [(0, n.jsx)("input", {
                                                    type: "checkbox",
                                                    name: "checkbox",
                                                    onChange: o,
                                                    onBlur: i,
                                                    value: t.checkbox
                                                }), (0, n.jsx)("span", {})]
                                            }), (0, n.jsxs)("div", {
                                                children: ["By submitting this form you agree to our", " ", (0, n.jsx)("a", {
                                                    href: "https://blockdag.network/terms",
                                                    target: "_blank",
                                                    children: "Terms"
                                                }), " ", "and", (0, n.jsx)("br", {}), " ", (0, n.jsx)("a", {
                                                    href: "https://blockdag.network/privacy",
                                                    target: "_blank",
                                                    children: "Privacy Policy"
                                                })]
                                            }), s.checkbox && l.checkbox && (0, n.jsx)("div", {
                                                className: tn().error,
                                                children: s.checkbox
                                            })]
                                        }), (0, n.jsx)("button", {
                                            onClick: () => {
                                                a || N(!0)
                                            },
                                            className: "btn gold",
                                            type: "submit",
                                            disabled: c || u && !g,
                                            children: "SAVE"
                                        }), C && (0, n.jsx)("p", {
                                            className: tn().success,
                                            children: "Successfully signed! Welcome BlockDAG Family. You can submit form now!"
                                        })]
                                    })
                                }
                            }), a && !c && (0, n.jsx)("p", {
                                className: tn().bodyText,
                                children: "Deliveries will commence later in 2024, we will contact you by email and SMS to arrange delivery once shipping starts! You can update your delivery information below any time."
                            })]
                        })]
                    })
                },
                tu = function(e) {
                    let {
                        buyType: t,
                        setBuyType: s
                    } = e;
                    return t && (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsxs)("div", {
                            className: tt().buttons,
                            children: [(0, n.jsx)(h(), {
                                href: "/#how-to-buy",
                                className: tt().htbButton,
                                type: "button",
                                children: "HOW TO BUY?"
                            }), "coin" == t && (0, n.jsx)(h(), {
                                href: "".concat(K.cG, "/troubleshoot"),
                                className: tt().htbButton,
                                type: "button",
                                target: "_blank",
                                children: "TROUBLESHOOT"
                            }), "miner" == t && (0, n.jsx)(h(), {
                                href: "".concat(K.cG, "/shipping-policy"),
                                className: tt().htbButton,
                                type: "button",
                                target: "_blank",
                                children: "SHIPPING POLICY"
                            })]
                        })
                    })
                },
                th = s(8537),
                tm = s.n(th),
                tp = function() {
                    return (0, n.jsx)("div", {
                        className: tm().powered,
                        children: (0, n.jsxs)("a", {
                            children: [(0, n.jsx)("span", {
                                className: tm().span,
                                children: "Powered by "
                            }), (0, n.jsx)("div", {
                                className: tm().img,
                                children: (0, n.jsx)(x, {
                                    hero: !0,
                                    src: "/web3secure.svg"
                                })
                            })]
                        })
                    })
                },
                t_ = function(e) {
                    let {
                        tokenData: t,
                        promo: s,
                        setPromo: a,
                        setQuantity: l,
                        buyType: o,
                        setBuyType: i
                    } = e, [r, c] = (0, m.useState)(!1);
                    if (localStorage.getItem("prices")) {
                        let e = JSON.parse(localStorage.getItem("prices"));
                        e.etherPrice, e.bnbPrice
                    }
                    let {
                        open: d
                    } = (0, eS.k_)();
                    if (localStorage.getItem("prices")) {
                        let e = JSON.parse(localStorage.getItem("prices"));
                        e.etherPrice, e.bnbPrice
                    }
                    let {
                        setMethod: u,
                        paymentMethod: h,
                        setPaymentAmount: p,
                        paymentAmount: _,
                        willSendPromoCode: g,
                        setWillSendPromoCode: x,
                        value: f,
                        setValue: v
                    } = el();
                    (0, m.useEffect)(() => {
                        localStorage.setItem("selectedValue", _)
                    }, [_]);
                    let [j, y] = (0, m.useState)(!1);
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)("div", {
                            className: "".concat(e_().AfterCountdown, " connectBox"),
                            children: [(0, n.jsx)(eO, {}), (0, n.jsx)(eM, {
                                tokenPrice: Number(null == t ? void 0 : t.tokenPrice).toFixed(6)
                            }), (0, n.jsx)(eI, {}), " ", (0, n.jsx)(eD, {}), (0, n.jsx)(eq, {
                                isStarter: !1
                            }), (0, n.jsxs)("div", {
                                className: "".concat(e_().buttonsContainer, " btn-area w-100"),
                                children: [(0, n.jsx)(J, {
                                    className: e_().buyBtn,
                                    onClick: () => {
                                        d({
                                            view: "Connect"
                                        })
                                    },
                                    color: "black",
                                    children: "Buy Coins"
                                }), (0, n.jsx)(J, {
                                    className: e_().buyBtn,
                                    onClick: () => {
                                        y(!0)
                                    },
                                    color: "transparent",
                                    children: "10% REFERRAL LINK"
                                })]
                            }), (0, n.jsx)(tu, {
                                setBuyType: i,
                                buyType: o,
                                setDeliveryPopupActive: c
                            }), (0, n.jsx)(tp, {})]
                        }), (0, n.jsx)(O, {
                            show: j,
                            onClose: () => {
                                y(!1)
                            },
                            children: (0, n.jsx)(e7, {})
                        })]
                    })
                },
                tg = s(42940),
                tx = s.n(tg);

            function tf(e) {
                let {
                    tokenBalance: t,
                    buyType: s
                } = e, {
                    tokenData: a,
                    referralDetails: l,
                    setRefDetails: o,
                    referralCode: i,
                    userTokenData: r,
                    userTokenData10: c,
                    userTokenData30: d,
                    userTokenData100: u
                } = el(), {
                    address: h
                } = (0, es.mA)(), [p, _] = (0, m.useState)(!1), [g, x] = (0, m.useState)(!1), [f, v] = (0, m.useState)(!1), [j, y] = (0, m.useState)(!1);
                (0, m.useEffect)(() => {
                    let e = async e => {
                        await ee.Z.get("".concat(Y.T5, "/getGivenBonusCountByReferral/").concat(i), {
                            headers: {
                                project: "".concat(Y.yM)
                            }
                        }).then(e => {
                            o(e.data)
                        })
                    };
                    e()
                }, [i]);
                let b = (null == c ? void 0 : c.tokenBalance) + (null == d ? void 0 : d.tokenBalance) + (null == u ? void 0 : u.tokenBalance) > 0,
                    w = (0, m.useRef)(null),
                    N = (0, m.useRef)(null);
                return (0, m.useEffect)(() => {
                    let e = e => {
                        w.current && !w.current.contains(e.target) && y(!1), N.current && !N.current.contains(e.target) && v(!1)
                    };
                    return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, []), (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("div", {
                        className: tx().walletbalance,
                        children: (0, n.jsx)("div", {
                            className: tx().list,
                            children: (0, n.jsxs)("div", {
                                className: "".concat(tx().leftList, " ").concat("coin" == s ? tx().buyCoin : tx().buyMiner),
                                children: ["coin" == s && (0, n.jsxs)("div", {
                                    className: tx().item,
                                    children: [(0, n.jsxs)("h6", {
                                        children: ["Coin", (0, n.jsx)("br", {
                                            className: "d-md"
                                        }), " Balance"]
                                    }), (0, n.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "21",
                                        viewBox: "0 0 20 21",
                                        fill: "none",
                                        onClick: () => y(e => !e),
                                        children: (0, n.jsx)("path", {
                                            d: "M10 13.8332V10.4998M10 7.1665H10.0084M18.3334 10.4998C18.3334 15.1022 14.6024 18.8332 10 18.8332C5.39765 18.8332 1.66669 15.1022 1.66669 10.4998C1.66669 5.89746 5.39765 2.1665 10 2.1665C14.6024 2.1665 18.3334 5.89746 18.3334 10.4998Z",
                                            stroke: "#75757D",
                                            strokeWidth: "1.66667",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    }), (0, n.jsx)("p", {
                                        translate: "no",
                                        children: ek(t)
                                    })]
                                }), "coin" == s && (0, n.jsxs)("div", {
                                    className: tx().item,
                                    children: [(0, n.jsxs)("h6", {
                                        children: ["Your", (0, n.jsx)("br", {
                                            className: "d-md"
                                        }), " Referrals"]
                                    }), (0, n.jsx)("p", {
                                        translate: "no",
                                        children: l ? null == l ? void 0 : l.count : 0
                                    })]
                                }), "coin" == s && (0, n.jsxs)("div", {
                                    className: tx().item,
                                    children: [(0, n.jsxs)("h6", {
                                        children: ["Your Referral ", (0, n.jsx)("br", {
                                            className: "d-md"
                                        }), " Earnings"]
                                    }), (0, n.jsx)("p", {
                                        translate: "no",
                                        children: l ? (l.other * (null == a ? void 0 : a.tokenPrice)).toFixed(2) : "0.00"
                                    })]
                                }), "coin" == s && (0, n.jsx)("div", {
                                    ref: w,
                                    className: "".concat(tx().content, " ").concat(tx().contentTextToolDesktop, " ").concat(tx().contentCoinTool, " "),
                                    style: j ? {
                                        display: "block"
                                    } : {
                                        display: "none"
                                    },
                                    children: (0, n.jsx)("div", {
                                        style: j ? {
                                            display: "block"
                                        } : {
                                            display: "none"
                                        },
                                        children: (0, n.jsx)("p", {
                                            children: "You will be able to claim your coins after the launch with this connected wallet."
                                        })
                                    })
                                }), "miner" == s && (0, n.jsx)(n.Fragment, {
                                    children: (0, n.jsxs)("div", {
                                        className: "".concat(tx().item, " ").concat(tx().ownedDevices, " ").concat(b && tx().hasMiner, "  d-md"),
                                        children: [(0, n.jsxs)("h6", {
                                            children: ["Owned", (0, n.jsx)("br", {
                                                className: "d-md"
                                            }), "Devices"]
                                        }), (0, n.jsx)("p", {
                                            className: "".concat(tx().ownedCount, " ").concat((null == c ? void 0 : c.tokenBalance) > 0 ? tx().notZero : ""),
                                            children: (null == c ? void 0 : c.tokenBalance) + (null == d ? void 0 : d.tokenBalance) + (null == u ? void 0 : u.tokenBalance)
                                        }), (0, n.jsxs)("div", {
                                            className: tx().content,
                                            style: g ? {
                                                display: "block"
                                            } : {
                                                display: "none"
                                            },
                                            children: [(0, n.jsxs)("div", {
                                                className: "".concat((null == c ? void 0 : c.tokenBalance) > 0 ? tx().notZero : ""),
                                                children: [(0, n.jsx)("span", {
                                                    className: tx().contentTitle,
                                                    children: "X10"
                                                }), (0, n.jsxs)("span", {
                                                    className: tx().contentInfo,
                                                    children: [" ", null == c ? void 0 : c.tokenBalance]
                                                })]
                                            }), (0, n.jsxs)("div", {
                                                className: "".concat((null == d ? void 0 : d.tokenBalance) > 0 ? tx().notZero : ""),
                                                children: [(0, n.jsx)("span", {
                                                    className: tx().contentTitle,
                                                    children: "X30"
                                                }), (0, n.jsxs)("span", {
                                                    className: tx().contentInfo,
                                                    children: [" ", null == d ? void 0 : d.tokenBalance]
                                                })]
                                            }), (0, n.jsxs)("div", {
                                                className: "".concat((null == u ? void 0 : u.tokenBalance) > 0 ? tx().notZero : ""),
                                                children: [(0, n.jsx)("span", {
                                                    className: tx().contentTitle,
                                                    children: "X100"
                                                }), (0, n.jsxs)("span", {
                                                    className: tx().contentInfo,
                                                    children: [" ", null == u ? void 0 : u.tokenBalance]
                                                })]
                                            })]
                                        }), (0, n.jsx)("div", {
                                            ref: N,
                                            className: "".concat(tx().content, " ").concat(tx().contentTextToolDesktop, " "),
                                            style: f ? {
                                                display: "block"
                                            } : {
                                                display: "none"
                                            },
                                            children: (0, n.jsx)("div", {
                                                style: f ? {
                                                    display: "block"
                                                } : {
                                                    display: "none"
                                                },
                                                children: (0, n.jsx)("p", {
                                                    children: "Anticipate shipments to begin in late 2024 to early 2025, heading straight to your chosen delivery address. If you need to update your address, feel free to reach out to us at support@blockdag.network"
                                                })
                                            })
                                        }), "miner" == s && b && (0, n.jsxs)("div", {
                                            className: tx().deliveryButtonContainer,
                                            children: [(0, n.jsx)("button", {
                                                className: tx().deliveryButton,
                                                type: "button",
                                                onClick: () => _(!0),
                                                children: "+ Add Delivery Information"
                                            }), (0, n.jsx)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "20",
                                                height: "21",
                                                viewBox: "0 0 20 21",
                                                fill: "none",
                                                onClick: () => v(e => !e),
                                                children: (0, n.jsx)("path", {
                                                    d: "M10 13.8332V10.4998M10 7.1665H10.0084M18.3334 10.4998C18.3334 15.1022 14.6024 18.8332 10 18.8332C5.39765 18.8332 1.66669 15.1022 1.66669 10.4998C1.66669 5.89746 5.39765 2.1665 10 2.1665C14.6024 2.1665 18.3334 5.89746 18.3334 10.4998Z",
                                                    stroke: "#75757D",
                                                    strokeWidth: "1.66667",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            })]
                                        })]
                                    })
                                }), "miner" == s && (0, n.jsxs)("div", {
                                    className: "".concat(tx().item, " ").concat(tx().ownedDevices, " ").concat(b && tx().hasMiner, " d-sm"),
                                    children: [(0, n.jsxs)("h6", {
                                        children: ["Owned ", (0, n.jsx)("br", {
                                            className: "d-md"
                                        }), "Devices"]
                                    }), (0, n.jsxs)("p", {
                                        children: [(null == c ? void 0 : c.tokenBalance) + (null == d ? void 0 : d.tokenBalance) + (null == u ? void 0 : u.tokenBalance), (0, n.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "20",
                                            height: "21",
                                            viewBox: "0 0 20 21",
                                            fill: "none",
                                            onClick: () => x(e => !e),
                                            children: (0, n.jsx)("path", {
                                                d: "M10 13.8332V10.4998M10 7.1665H10.0084M18.3334 10.4998C18.3334 15.1022 14.6024 18.8332 10 18.8332C5.39765 18.8332 1.66669 15.1022 1.66669 10.4998C1.66669 5.89746 5.39765 2.1665 10 2.1665C14.6024 2.1665 18.3334 5.89746 18.3334 10.4998Z",
                                                stroke: "#75757D",
                                                strokeWidth: "1.66667",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            })
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: tx().content,
                                        style: g ? {
                                            display: "block"
                                        } : {
                                            display: "none"
                                        },
                                        children: [(0, n.jsxs)("div", {
                                            children: [(0, n.jsx)("span", {
                                                className: tx().contentTitle,
                                                children: "BlockDAGX10 Miner"
                                            }), (0, n.jsxs)("span", {
                                                className: tx().contentInfo,
                                                children: [" ", null == c ? void 0 : c.tokenBalance, " Pieces"]
                                            })]
                                        }), (0, n.jsxs)("div", {
                                            children: [(0, n.jsx)("span", {
                                                className: tx().contentTitle,
                                                children: "BlockDAGX30 Miner"
                                            }), (0, n.jsxs)("span", {
                                                className: tx().contentInfo,
                                                children: [" ", null == d ? void 0 : d.tokenBalance, " Pieces"]
                                            })]
                                        }), (0, n.jsxs)("div", {
                                            children: [(0, n.jsx)("span", {
                                                className: tx().contentTitle,
                                                children: "BlockDAGX100 Miner"
                                            }), (0, n.jsxs)("span", {
                                                className: tx().contentInfo,
                                                children: [" ", null == u ? void 0 : u.tokenBalance, " Pieces"]
                                            })]
                                        })]
                                    }), (0, n.jsx)("div", {
                                        className: tx().content,
                                        style: f ? {
                                            display: "block"
                                        } : {
                                            display: "none"
                                        },
                                        children: (0, n.jsx)("div", {
                                            children: (0, n.jsx)("p", {
                                                children: "Anticipate shipments to begin in late 2024 to early 2025, heading straight to your chosen delivery address. If you need to update your address, feel free to reach out to us at support@blockdag.network"
                                            })
                                        })
                                    }), "miner" == s && b && (0, n.jsxs)("div", {
                                        className: tx().deliveryButtonContainer,
                                        children: [(0, n.jsx)("button", {
                                            className: tx().deliveryButton,
                                            type: "button",
                                            onClick: () => _(!0),
                                            children: "+ Add Delivery Information"
                                        }), (0, n.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "20",
                                            height: "21",
                                            viewBox: "0 0 20 21",
                                            fill: "none",
                                            onClick: () => v(e => !e),
                                            children: (0, n.jsx)("path", {
                                                d: "M10 13.8332V10.4998M10 7.1665H10.0084M18.3334 10.4998C18.3334 15.1022 14.6024 18.8332 10 18.8332C5.39765 18.8332 1.66669 15.1022 1.66669 10.4998C1.66669 5.89746 5.39765 2.1665 10 2.1665C14.6024 2.1665 18.3334 5.89746 18.3334 10.4998Z",
                                                stroke: "#75757D",
                                                strokeWidth: "1.66667",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            })
                                        })]
                                    })]
                                })]
                            })
                        })
                    }), (0, n.jsx)(O, {
                        show: p,
                        onClose: () => {
                            _(!1)
                        },
                        children: (0, n.jsx)(td, {
                            update: !0,
                            address: h,
                            minerForm: !0,
                            setRegisterVisibility: _
                        })
                    })]
                })
            }

            function tv(e) {
                let {
                    chainId: t,
                    isNoticeVisible: s,
                    onInputChange: a,
                    isLoading: l,
                    status: o,
                    tokenData: i,
                    promo: r,
                    setPromo: c,
                    promoWallet: d,
                    tokenBalance: u,
                    priceObj: h,
                    balanceData: p,
                    dataBalance: _,
                    sendTransaction: g,
                    error: f
                } = e, {
                    setMethod: v,
                    paymentMethod: j,
                    setPaymentAmount: y,
                    paymentAmount: b,
                    willSendPromoCode: w,
                    setWillSendPromoCode: N,
                    setRegisterVisibility: k,
                    value: B,
                    setValue: S,
                    messageType: C,
                    setMessageType: T,
                    messageContent: M,
                    setMessageContent: L,
                    userTokenData: P,
                    selectedProduct: E,
                    setSelectedProduct: A,
                    quantity: D,
                    setQuantity: I,
                    referralCode: F,
                    buyType: R,
                    setBuyType: H
                } = el(), [W, Z] = (0, m.useState)(0), [G, U] = (0, m.useState)(!1), [q, V] = (0, m.useState)(!1), [z, X] = (0, m.useState)(!1), {
                    address: Q
                } = (0, es.mA)(), {
                    open: $
                } = (0, eS.k_)();
                (0, m.useEffect)(() => {
                    Q && X(!0)
                }, [Q]), (0, m.useEffect)(() => {
                    setTimeout(() => {
                        V(!1)
                    }, 1e3)
                }, [q]), (0, m.useEffect)(() => {
                    S(() => {}), E && ("USDT" == j ? (S(String(D * (null == E ? void 0 : E.value))), y(D * (null == E ? void 0 : E.value))) : "miner" === R ? (S(Number((D * ((null == E ? void 0 : E.value) + 3) / h[j]).toFixed(6))), y(Number((D * ((null == E ? void 0 : E.value) + 3) / h[j]).toFixed(6)))) : (S(Number((D * (null == E ? void 0 : E.value) / h[j]).toFixed(6))), y(Number((D * (null == E ? void 0 : E.value) / h[j]).toFixed(6)))))
                }, [D, j, E]), (0, m.useEffect)(() => {
                    var e;
                    (null == P ? void 0 : null === (e = P.product) || void 0 === e ? void 0 : e.PRD_X1) == 1 && I(0)
                }, [P]);
                let [ee, et] = (0, m.useState)(!1);
                return (0, m.useEffect)(() => {
                    "USDT" === j && B > Number(_ || 0) ? et(!0) : et(!1)
                }, [B, j]), (0, m.useEffect)(() => {
                    "coin" == R && 1 == t && ("ETH" == j || "USDT" == j) && (y(null), S(null), et(!1)), "coin" == R && 56 == t && "BNB" == j && (y(null), S(null), et(!1))
                }, [j, t]), (0, n.jsxs)(n.Fragment, {
                    children: [s && (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsx)(O, {
                            show: !0,
                            onClose: () => {
                                1 == t ? v("ETH") : v("BNB")
                            },
                            children: (0, n.jsx)("div", {
                                className: e_().modal,
                                children: (0, n.jsxs)("p", {
                                    className: "text-lg leading-8",
                                    children: ["Please connect ", j, " Network on your wallet."]
                                })
                            })
                        })
                    }), (0, n.jsxs)("div", {
                        className: "".concat(e_().AfterCountdown, " connectBox"),
                        children: [(0, n.jsx)(eO, {}), "coin" == R && (0, n.jsx)(eM, {
                            tokenPrice: Number(null == i ? void 0 : i.tokenPrice).toFixed(6)
                        }), "coin" == R && (0, n.jsx)(eI, {}), "coin" == R && (0, n.jsx)(eD, {}), "miner" === R && (0, n.jsxs)("div", {
                            className: e_().minerTop,
                            children: [(0, n.jsx)("p", {
                                className: e_().selectMiner,
                                children: "Please select your miner."
                            }), z && (0, n.jsx)("div", {
                                className: e_().right,
                                children: (0, n.jsx)("div", {
                                    className: e_().item,
                                    children: (0, n.jsx)("span", {
                                        className: e_().logout,
                                        style: {
                                            cursor: "pointer",
                                            textDecoration: "underline"
                                        },
                                        onClick: () => {
                                            $({
                                                view: "Account"
                                            })
                                        },
                                        children: "Log Out"
                                    })
                                })
                            })]
                        }), (0, n.jsx)(tf, {
                            tokenBalance: u,
                            userTokenData: P,
                            buyType: R
                        }), (0, n.jsxs)("div", {
                            className: e_().calc,
                            children: ["miner" === R && (0, n.jsx)("div", {
                                className: e_().miners,
                                children: Y.Pc.map((e, t) => (0, n.jsx)(eJ, {
                                    photo: e.photo,
                                    activeMine: W,
                                    setActiveMine: Z,
                                    index: t,
                                    title: e.title,
                                    icon: e.icon,
                                    color: e.color,
                                    type: e.type,
                                    connected: !0,
                                    quantity: e == E ? D : 0,
                                    total: u * (null == i ? void 0 : i.tokenPrice),
                                    value: e.value,
                                    onAdd: () => {
                                        E !== e && I(0), I(e => e + 1), A(e)
                                    },
                                    onLess: () => {
                                        if (0 === D) {
                                            A(e);
                                            return
                                        }
                                        E !== e ? I(0) : (I(e => e - 1), A(e))
                                    },
                                    newValue: b * h[j]
                                }, t))
                            }), (0, n.jsxs)("div", {
                                className: e_().btns,
                                children: [(0, n.jsxs)("div", {
                                    className: "".concat(e_().miyagiInput, " newInput ").concat("miner" === R ? e_().minerInput : ""),
                                    style: {
                                        pointerEvents: q ? "none" : "unset"
                                    },
                                    onClick: () => {
                                        "miner" === R && 0 == B && V(!0)
                                    },
                                    children: [(0, n.jsx)("div", {
                                        className: e_().max,
                                        onClick: () => {
                                            I(0), A(null), setTimeout(() => {
                                                "USDT" == j ? void 0 !== _ && (S(_ || 0), y(_ || 0)) : "ETH" == j ? void 0 !== (null == p ? void 0 : p.formatted) && (S(((null == p ? void 0 : p.formatted) * .95 > .001 ? (null == p ? void 0 : p.formatted) * .95 - .001 : 0).toFixed(6)), y(((null == p ? void 0 : p.formatted) * .95 > .001 ? (null == p ? void 0 : p.formatted) * .95 - .001 : 0).toFixed(6))) : void 0 !== (null == p ? void 0 : p.formatted) && (S(((null == p ? void 0 : p.formatted) * .97).toFixed(6)), y(((null == p ? void 0 : p.formatted) * .97).toFixed(6)))
                                            }, 100)
                                        },
                                        children: "MAX"
                                    }), "miner" === R && q && (0, n.jsx)("p", {
                                        className: e_().productWarning,
                                        children: "Please select your miner."
                                    }), (0, n.jsx)("input", {
                                        translate: "no",
                                        type: "number",
                                        inputMode: "decimal",
                                        min: 0,
                                        value: "miner" === R ? q ? "" : B : B || "",
                                        onInput: a,
                                        placeholder: "Enter amount",
                                        disabled: "miner" === R || l,
                                        onClick: () => {
                                            "miner" === R ? 0 == B && V(!0) : (I(0), A(null))
                                        },
                                        onKeyPress: e => {
                                            "-" == e.key && e.preventDefault()
                                        }
                                    })]
                                }), (0, n.jsx)(eH, {
                                    value: j,
                                    setValue: v
                                })]
                            }), (0, n.jsx)("div", {
                                className: "".concat(e_().inputsArea, " ").concat("miner" === R ? e_().minerNone : ""),
                                children: (0, n.jsxs)("div", {
                                    className: e_().inputs,
                                    children: [(0, n.jsxs)("p", {
                                        className: e_().favicon,
                                        children: [" ", (0, n.jsx)(x, {
                                            hero: !0,
                                            src: "/favicon.png"
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        children: [(0, n.jsx)("p", {
                                            className: e_().bDaggg,
                                            children: " BDAG WORTH : "
                                        }), (0, n.jsxs)("p", {
                                            translate: "no",
                                            children: [isNaN(b) ? 0 : 0 == (0, K.Jk)(b, h[j], 0, null == i ? void 0 : i.tokenPrice) ? "0.00" : (0, K.Jk)(b, h[j], 0, null == i ? void 0 : i.tokenPrice), " "]
                                        })]
                                    })]
                                })
                            })]
                        }), (0, n.jsxs)("div", {
                            className: "btn-area w-100 ".concat(e_().newBtnsArea),
                            children: [(0, n.jsx)(J, {
                                className: e_().buyBtn,
                                disabled: l || !B || 0 == B || "error" == o || ee,
                                onClick: () => {
                                    null == g || g(), T("waiting"), L({
                                        title: "Pending Action",
                                        content: "Approve or reject request using your wallet..",
                                        image: "/img/flying clock 2.png"
                                    })
                                },
                                children: "miner" === R ? "Buy Miners" : "Buy Coins"
                            }), (0, n.jsx)(J, {
                                color: "transparent",
                                className: e_().buyBtn,
                                onClick: () => {
                                    U(!0)
                                },
                                children: "10% REFERRAL LINK"
                            })]
                        }), (ee || "error" == o) && (0, n.jsx)("span", {
                            className: "errorBNB",
                            children: "You may have not enough balance or invalid type."
                        }), "coin" === R && (0, n.jsx)(eB, {
                            promo: r,
                            setPromo: c,
                            promoCode: w,
                            setPromoCode: N
                        }), (0, n.jsx)(tu, {
                            setBuyType: H,
                            buyType: R
                        }), (0, n.jsx)(tp, {})]
                    }), (0, n.jsx)(O, {
                        show: G,
                        onClose: () => {
                            U(!1)
                        },
                        children: (0, n.jsx)(e7, {
                            referralCode: F
                        })
                    })]
                })
            }
            var tj = s(33305),
                ty = s(30381),
                tb = s.n(ty);

            function tw(e) {
                let {
                    quantity: t,
                    setQuantity: s,
                    tokenData: a,
                    promo: l,
                    setPromo: o,
                    promoWallet: i,
                    address: r
                } = e, c = 0, d = 0, u = (0, et.useRouter)();
                if (localStorage.getItem("prices")) {
                    let e = JSON.parse(localStorage.getItem("prices"));
                    c = e.etherPrice, d = e.bnbPrice
                }
                let h = {
                        ETH: c,
                        BNB: d,
                        USDT: 1
                    },
                    {
                        setMethod: p,
                        paymentMethod: _,
                        setPaymentAmount: g,
                        paymentAmount: x,
                        willSendPromoCode: f,
                        setWillSendPromoCode: v,
                        setRegisterVisibility: j,
                        messageType: y,
                        setMessageType: b,
                        messageContent: w,
                        setMessageContent: N,
                        value: k,
                        setValue: B,
                        selectedProduct: S,
                        linkedReferral: C,
                        buyType: T,
                        setBuyType: M,
                        transactionHeader: L,
                        setHashCode: P,
                        source: E
                    } = el();
                (0, m.useEffect)(() => {
                    localStorage.setItem("selectedValue", x)
                }, [x]);
                let {
                    chain: A
                } = (0, es.LN)(), {
                    isSuccess: D,
                    switchNetwork: I
                } = (0, es.g0)(), [F, R] = (0, m.useState)(!1);
                (0, m.useEffect)(() => {
                    "BNB" === _ && (56 !== A.id ? (null == I || I(56), R(!0)) : R(!1))
                }, [_, I, null == A ? void 0 : A.id]);
                let [H, W] = (0, m.useState)(0), {
                    data: Z,
                    isError: O,
                    isLoading: G
                } = (0, es.KQ)({
                    address: r
                }), [U, q] = (0, m.useState)(0), V = e => {
                    ee.Z.get("".concat(K.T5, "/wallet/").concat(e), K.ob).then(e => {
                        e && e.data && q(e.data.tokenBalance)
                    })
                };
                (0, m.useEffect)(() => {
                    if (r) {
                        V(r);
                        let e = setInterval(() => {
                            V(r)
                        }, 6e4);
                        return () => clearInterval(e)
                    }
                }, [r]);
                let {
                    config: z,
                    isIdle: J,
                    status: Y,
                    internal: X
                } = (0, es.M5)({
                    to: i,
                    value: k ? (0, tj.f)(k.toString()) : void 0,
                    data: "0x"
                }), {
                    data: Q,
                    isLoading: $,
                    isSuccess: ea,
                    error: eo,
                    variables: ei,
                    sendTransaction: er
                } = (0, es.pQ)(z);
                return (0, m.useEffect)(() => {
                    eo && (b("error"), N({
                        title: "Rejected",
                        content: "TransactionExecutionError" == eo.name ? "User rejected the request." : "Something went wrong."
                    }), setTimeout(() => {
                        b(null)
                    }, 5e3))
                }, [eo]), (0, m.useEffect)(() => {
                    if (!$ && Q) {
                        let e = {
                            network: "BNB" == _ ? "BSC" : "ETH",
                            pay_hash: (null == Q ? void 0 : Q.hash) ? null == Q ? void 0 : Q.hash : "Test Payment",
                            promo_code: t < 1 && l && (null == l ? void 0 : l.valid) ? l.promo.promoCode : "",
                            referral_code: C || ""
                        };
                        ee.Z.post("".concat(K.T5, "/Payment"), e, {
                            headers: {
                                project: L,
                                source: JSON.stringify(E)
                            }
                        }).then(e => {
                            if (P(null == Q ? void 0 : Q.hash), e.data.status) {
                                j(!0), eg.ZP.success(e.data.message); {
                                    var t, s;
                                    let e = (null === (t = u.query) || void 0 === t ? void 0 : t.utm_source) || "",
                                        n = (null === (s = u.query) || void 0 === s ? void 0 : s.source) || "";
                                    gtag("event", "purchase", {
                                        value: x * JSON.parse(localStorage.getItem("prices")).bnbPrice,
                                        currency: "USD",
                                        source: e || n,
                                        transactionId: "".concat(tb()().valueOf(), "-").concat(x * JSON.parse(localStorage.getItem("prices")).bnbPrice, "-BNB-").concat(E)
                                    }), fbq("track", "Purchase", {
                                        value: x * JSON.parse(localStorage.getItem("prices")).bnbPrice,
                                        currency: "USD",
                                        source: e || n
                                    }), window.coinzilla_performance = window.coinzilla_performance || [], window.coinzilla_performance.push({
                                        event: "sale"
                                    }), en.Attribution.track("Purchase Event with BNB", {
                                        event: "purchase",
                                        value: x * JSON.parse(localStorage.getItem("prices")).bnbPrice,
                                        currency: "USD",
                                        source: e || n,
                                        transactionId: "".concat(tb()().valueOf(), "-").concat(x * JSON.parse(localStorage.getItem("prices")).bnbPrice, "-BNB-").concat(E)
                                    })
                                }
                                b("success"), N({
                                    title: "Approved",
                                    content: "Purchase Successful! Coin balance will be updated once the transaction is confirmed.",
                                    image: "/img/lock.png"
                                })
                            } else eg.ZP.error(e.data.message), b("error"), N({
                                title: "Rejected",
                                content: "Call Request Rejected."
                            })
                        })
                    }
                }, [$, Q]), (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)(tv, {
                        chainId: A.id,
                        isNoticeVisible: F,
                        setIsNoticeVisible: R,
                        onInputChange: e => {
                            if ("ETH" != _ && "BNB" != _) {
                                let t = parseInt(e.target.value.replace(/^0+/, ""));
                                g(t ? Number(t) : t), B(e.target.value)
                            } else g(e.target.value), B(e.target.value)
                        },
                        isLoading: $,
                        status: Y,
                        tokenData: a,
                        promo: l,
                        setPromo: o,
                        promoWallet: i,
                        tokenBalance: U,
                        priceObj: h,
                        balanceData: Z,
                        sendTransaction: er,
                        quantity: t,
                        setQuantity: s,
                        buyType: T
                    })
                })
            }
            var tN = s(67795),
                tk = s(21803),
                tB = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_upgradedAddress","type":"address"}],"name":"deprecate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deprecated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_evilUser","type":"address"}],"name":"addBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"upgradedAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maximumFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_maker","type":"address"}],"name":"getBlackListStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newBasisPoints","type":"uint256"},{"name":"newMaxFee","type":"uint256"}],"name":"setParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"basisPointsRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isBlackListed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_clearedUser","type":"address"}],"name":"removeBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_UINT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_blackListedUser","type":"address"}],"name":"destroyBlackFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_initialSupply","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Issue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAddress","type":"address"}],"name":"Deprecate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeBasisPoints","type":"uint256"},{"indexed":false,"name":"maxFee","type":"uint256"}],"name":"Params","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_blackListedUser","type":"address"},{"indexed":false,"name":"_balance","type":"uint256"}],"name":"DestroyedBlackFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"AddedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"RemovedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"}]');

            function tS(e) {
                let {
                    quantity: t,
                    setQuantity: s,
                    tokenData: a,
                    promo: l,
                    setPromo: o,
                    promoWallet: i,
                    address: r
                } = e, c = 0, d = 0, [u, h] = (0, m.useState)(!1), p = (0, et.useRouter)();
                if (localStorage.getItem("prices")) {
                    let e = JSON.parse(localStorage.getItem("prices"));
                    c = e.etherPrice, d = e.bnbPrice
                }
                let _ = {
                        ETH: c,
                        BNB: d,
                        USDT: 1
                    },
                    {
                        setMethod: g,
                        paymentMethod: x,
                        setPaymentAmount: f,
                        paymentAmount: v,
                        willSendPromoCode: j,
                        setWillSendPromoCode: y,
                        setRegisterVisibility: b,
                        messageType: w,
                        setMessageType: N,
                        messageContent: k,
                        setMessageContent: B,
                        value: S,
                        setValue: C,
                        selectedProduct: T,
                        linkedReferral: M,
                        buyType: L,
                        setBuyType: P,
                        transactionHeader: E,
                        setHashCode: A,
                        source: D
                    } = el();
                (0, m.useEffect)(() => {
                    localStorage.setItem("selectedValue", v)
                }, [v]);
                let {
                    chain: I
                } = (0, es.LN)(), {
                    isSuccess: F,
                    switchNetwork: R
                } = (0, es.g0)();
                (0, m.useEffect)(() => {
                    "USDT" === x && 1 !== I.id && R(1)
                }, [x]);
                let [H, W] = (0, m.useState)(0), [Z, O] = (0, m.useState)(0), G = e => {
                    ee.Z.get("".concat(K.T5, "/wallet/").concat(e), K.ob).then(e => {
                        e && e.data && O(e.data.tokenBalance)
                    })
                };
                (0, m.useEffect)(() => {
                    if (r) {
                        G(r);
                        let e = setInterval(() => {
                            G(r)
                        }, 6e4);
                        return () => clearInterval(e)
                    }
                }, [r]);
                let {
                    data: U,
                    isLoading: q,
                    isSuccess: V,
                    status: z,
                    error: J,
                    write: Y
                } = (0, es.GG)({
                    address: K.qx,
                    abi: tB,
                    functionName: "transfer"
                }), {
                    data: X,
                    isError: Q,
                    isLoading: $
                } = (0, es.do)({
                    address: K.qx,
                    abi: tB,
                    functionName: "balances",
                    args: [r]
                }), [ea, eo] = (0, m.useState)(null);
                (0, m.useEffect)(() => {
                    1 === I.id && "USDT" === x && X && eo((1e3 * (0, tN.o)(X)).toFixed(2))
                }, [x, I.id, r, X]);
                let [ei, er] = (0, m.useState)(null);
                return (0, m.useEffect)(() => {
                    if (!q && U) {
                        let e = {
                            network: "BNB" == x ? "BSC" : "ETH",
                            pay_hash: (null == U ? void 0 : U.hash) ? null == U ? void 0 : U.hash : "Test Payment",
                            promo_code: t < 1 && l && (null == l ? void 0 : l.valid) ? l.promo.promoCode : "",
                            referral_code: M || ""
                        };
                        ee.Z.post("".concat(K.T5, "/Payment"), e, {
                            headers: {
                                project: E,
                                source: JSON.stringify(D)
                            }
                        }).then(e => {
                            if (A(null == U ? void 0 : U.hash), e.data.status) {
                                b(!0), eg.ZP.success(e.data.message); {
                                    var t, s;
                                    let e = (null === (t = p.query) || void 0 === t ? void 0 : t.utm_source) || "",
                                        n = (null === (s = p.query) || void 0 === s ? void 0 : s.source) || "";
                                    gtag("event", "purchase", {
                                        value: v,
                                        currency: "USD",
                                        source: e || n,
                                        transactionId: "".concat(tb()().valueOf(), "-").concat(v, "-USDT-").concat(D)
                                    }), fbq("track", "Purchase", {
                                        value: v,
                                        currency: "USD",
                                        source: e || n
                                    }), window.coinzilla_performance = window.coinzilla_performance || [], window.coinzilla_performance.push({
                                        event: "sale"
                                    }), en.Attribution.track("Purchase Event with USDT", {
                                        event: "purchase",
                                        value: v,
                                        currency: "USD",
                                        source: e || n,
                                        transactionId: "".concat(tb()().valueOf(), "-").concat(v, "-USDT-").concat(D)
                                    })
                                }
                                N("success"), B({
                                    title: "Approved",
                                    content: "Purchase Successful! Coin balance will be updated once the transaction is confirmed.",
                                    image: "/img/lock.png"
                                })
                            } else eg.ZP.error(e.data.message), N("error"), B({
                                title: "Rejected",
                                content: "Call Request Rejected."
                            })
                        })
                    }
                }, [q, U]), (0, m.useEffect)(() => {
                    J && (N("error"), B({
                        title: "Rejected",
                        content: "TransactionExecutionError" == J.name ? "User rejected the request." : "Something went wrong. You may have not enough balance."
                    }), setTimeout(() => {
                        N(null)
                    }, 5e3))
                }, [J]), (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)(tv, {
                        chainId: null == I ? void 0 : I.id,
                        isNoticeVisible: u,
                        setIsNoticeVisible: h,
                        onInputChange: e => {
                            if ("ETH" != x && "BNB" != x) {
                                let t = parseInt(e.target.value.replace(/^0+/, ""));
                                f(t ? Number(t) : t), C(e.target.value)
                            } else f(e.target.value), C(e.target.value)
                        },
                        isLoading: q,
                        status: z,
                        tokenData: a,
                        promo: l,
                        setPromo: o,
                        promoWallet: i,
                        tokenBalance: Z,
                        priceObj: _,
                        dataBalance: ea,
                        quantity: t,
                        setQuantity: s,
                        buyType: L,
                        sendTransaction: () => {
                            null == Y || Y({
                                args: [i, (0, tk.v)(S, 6).toString()]
                            })
                        }
                    })
                })
            }

            function tC(e) {
                let {
                    setQuantity: t,
                    tokenData: s,
                    promo: a,
                    setPromo: l,
                    promoWallet: o,
                    address: i
                } = e, r = 0, c = 0, d = (0, et.useRouter)();
                if (localStorage.getItem("prices")) {
                    let e = JSON.parse(localStorage.getItem("prices"));
                    r = e.etherPrice, c = e.bnbPrice
                }
                let u = {
                        ETH: r,
                        BNB: c,
                        USDT: 1
                    },
                    {
                        setMethod: h,
                        paymentMethod: p,
                        setPaymentAmount: _,
                        paymentAmount: g,
                        willSendPromoCode: x,
                        setWillSendPromoCode: f,
                        setRegisterVisibility: v,
                        messageType: j,
                        setMessageType: y,
                        messageContent: b,
                        setMessageContent: w,
                        value: N,
                        setValue: k,
                        selectedProduct: B,
                        linkedReferral: S,
                        buyType: C,
                        setBuyType: T,
                        quantity: M,
                        transactionHeader: L,
                        setHashCode: P,
                        source: E
                    } = el();
                (0, m.useEffect)(() => {
                    localStorage.setItem("selectedValue", g)
                }, [g]);
                let {
                    chain: A
                } = (0, es.LN)(), {
                    isSuccess: D,
                    switchNetwork: I
                } = (0, es.g0)(), [F, R] = (0, m.useState)(!1);
                (0, m.useEffect)(() => {
                    "ETH" === p && (1 !== A.id ? (null == I || I(1), R(!0)) : R(!1))
                }, [p, I, null == A ? void 0 : A.id]);
                let [H, W] = (0, m.useState)(0), {
                    data: Z,
                    isError: O,
                    isLoading: G
                } = (0, es.KQ)({
                    address: i
                }), [U, q] = (0, m.useState)(0), V = e => {
                    ee.Z.get("".concat(K.T5, "/wallet/").concat(e), K.ob).then(e => {
                        e && e.data && q(e.data.tokenBalance)
                    })
                };
                (0, m.useEffect)(() => {
                    if (i) {
                        V(i);
                        let e = setInterval(() => {
                            V(i)
                        }, 6e4);
                        return () => clearInterval(e)
                    }
                }, [i]);
                let {
                    config: z,
                    isIdle: J,
                    status: Y,
                    internal: X
                } = (0, es.M5)({
                    to: o,
                    value: N ? (0, tj.f)(N.toString()) : void 0,
                    data: "0x"
                }), {
                    data: Q,
                    isLoading: $,
                    isSuccess: ea,
                    error: eo,
                    variables: ei,
                    sendTransaction: er
                } = (0, es.pQ)(z);
                return (0, m.useEffect)(() => {
                    eo && (y("error"), w({
                        title: "Rejected",
                        content: "TransactionExecutionError" == eo.name ? "User rejected the request." : "Something went wrong."
                    }), setTimeout(() => {
                        y(null)
                    }, 5e3))
                }, [eo]), (0, m.useEffect)(() => {
                    if (!$ && Q) {
                        let e = {
                            network: "BNB" == p ? "BSC" : "ETH",
                            pay_hash: (null == Q ? void 0 : Q.hash) ? null == Q ? void 0 : Q.hash : "Test Payment",
                            promo_code: M < 1 && a && (null == a ? void 0 : a.valid) ? a.promo.promoCode : "",
                            referral_code: S || ""
                        };
                        ee.Z.post("".concat(K.T5, "/Payment"), e, {
                            headers: {
                                project: L,
                                source: JSON.stringify(E)
                            }
                        }).then(e => {
                            if (P(null == Q ? void 0 : Q.hash), e.data.status) {
                                v(!0), eg.ZP.success(e.data.message); {
                                    var t, s;
                                    let e = (null === (t = d.query) || void 0 === t ? void 0 : t.utm_source) || "",
                                        n = (null === (s = d.query) || void 0 === s ? void 0 : s.source) || "";
                                    gtag("event", "purchase", {
                                        value: g * JSON.parse(localStorage.getItem("prices")).etherPrice,
                                        currency: "USD",
                                        source: e || n,
                                        transactionId: "".concat(tb()().valueOf(), "-").concat(g * JSON.parse(localStorage.getItem("prices")).etherPrice, "-ETH-").concat(E)
                                    }), fbq("track", "Purchase", {
                                        value: g * JSON.parse(localStorage.getItem("prices")).etherPrice,
                                        currency: "USD",
                                        source: e || n
                                    }), window.coinzilla_performance = window.coinzilla_performance || [], window.coinzilla_performance.push({
                                        event: "sale"
                                    }), en.Attribution.track("Purchase Event with ETH", {
                                        event: "purchase",
                                        value: g * JSON.parse(localStorage.getItem("prices")).etherPrice,
                                        currency: "USD",
                                        source: e || n,
                                        transactionId: "".concat(tb()().valueOf(), "-").concat(g * JSON.parse(localStorage.getItem("prices")).etherPrice, "-ETH-").concat(E)
                                    })
                                }
                                y("success"), w({
                                    title: "Approved",
                                    content: "Purchase Successful! Coin balance will be updated once the transaction is confirmed.",
                                    image: "/img/lock.png"
                                })
                            } else eg.ZP.error(e.data.message), y("error"), w({
                                title: "Rejected",
                                content: "Call Request Rejected."
                            })
                        })
                    }
                }, [$, Q]), (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)(tv, {
                        chainId: A.id,
                        isNoticeVisible: F,
                        setIsNoticeVisible: R,
                        onInputChange: e => {
                            if ("ETH" != p && "BNB" != p) {
                                let t = parseInt(e.target.value.replace(/^0+/, ""));
                                _(t ? Number(t) : t), k(e.target.value)
                            } else _(e.target.value), k(e.target.value)
                        },
                        isLoading: $,
                        status: Y,
                        tokenData: s,
                        promo: a,
                        setPromo: l,
                        promoWallet: o,
                        tokenBalance: U,
                        priceObj: u,
                        balanceData: Z,
                        sendTransaction: er,
                        quantity: M,
                        setQuantity: t,
                        buyType: C
                    })
                })
            }
            var tT = s(56112),
                tM = s.n(tT),
                tL = s(39332);

            function tP(e) {
                let {
                    messageType: t,
                    setMessageType: s,
                    messageContent: a,
                    setMessageContent: l
                } = e, [o, i] = (0, m.useState)(!1), {
                    referralCode: r,
                    buyType: c
                } = el(), d = (0, tL.useRouter)(), u = r || "", h = "https://purchase.blockdag.network/?ref=".concat(r || ""), p = "Hey, use my link to purchase blockDag using this link:", g = () => {
                    navigator.clipboard.writeText(h), (0, eg.ZP)(u + " copied.", {
                        position: "bottom-center",
                        duration: 2e3
                    })
                };
                return (0, m.useEffect)(() => {
                    setTimeout(() => {
                        i(!0)
                    }, 6e4)
                }, []), (0, n.jsx)("div", {
                    className: tM().status,
                    children: "success" == t ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)("div", {
                            classname: tM().statusBox,
                            children: [(0, n.jsx)(_(), {
                                className: tM().waitingImg,
                                src: "/images/success.png",
                                alt: "success",
                                width: 125,
                                height: 125
                            }), (0, n.jsx)("p", {
                                className: tM().state,
                                children: "Your Purchase Was Successful"
                            }), (0, n.jsx)("div", {
                                className: tM().content,
                                children: (0, n.jsx)("p", {
                                    children: (0, n.jsx)(n.Fragment, {
                                        children: "Your BDAG tokens will be available for you to claim once the presale ends. If you want to earn more, you can start referring your friends and you can get instant 10% from every transaction made through your link."
                                    })
                                })
                            })]
                        }), (0, n.jsxs)("div", {
                            className: tM().directly,
                            children: [(0, n.jsx)(J, {
                                onClick: () => {
                                    g()
                                },
                                className: "btn gold",
                                children: r ? "Copy Referral Link" : "Connect Wallet"
                            }), (0, n.jsx)("p", {
                                children: "Share it directly on your social media!"
                            }), (0, n.jsxs)("div", {
                                className: "".concat(tM().socialShare, " ").concat(r ? "" : tM().notRef),
                                children: [(0, n.jsx)(eX.Z, {
                                    url: h,
                                    quote: p,
                                    className: tM().shareButton,
                                    children: (0, n.jsx)(eQ.Z, {
                                        size: 32,
                                        round: !0
                                    })
                                }), (0, n.jsx)(e$.Z, {
                                    url: h,
                                    title: p,
                                    className: tM().shareButton,
                                    children: (0, n.jsx)(e0.Z, {
                                        size: 32,
                                        round: !0
                                    })
                                }), (0, n.jsx)(e1.Z, {
                                    url: h,
                                    title: p,
                                    className: tM().shareButton,
                                    children: (0, n.jsx)(e2.Z, {
                                        size: 32,
                                        round: !0
                                    })
                                }), (0, n.jsx)(e3.Z, {
                                    url: h,
                                    title: p,
                                    separator: " ",
                                    className: tM().shareButton,
                                    children: (0, n.jsx)(e6.Z, {
                                        size: 32,
                                        round: !0
                                    })
                                }), (0, n.jsx)(e5.Z, {
                                    url: h,
                                    title: p,
                                    separator: " ",
                                    className: tM().shareButton,
                                    children: (0, n.jsx)(e4.Z, {
                                        size: 32,
                                        round: !0
                                    })
                                }), (0, n.jsx)(e8.Z, {
                                    url: h,
                                    title: p,
                                    separator: " ",
                                    className: tM().shareButton,
                                    children: (0, n.jsx)(e9.Z, {
                                        size: 32,
                                        round: !0
                                    })
                                })]
                            })]
                        })]
                    }) : "waiting" == t ? (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsxs)("div", {
                            classname: tM().statusBox,
                            children: [(0, n.jsx)(_(), {
                                className: tM().waitingImg,
                                src: "/images/waiting.png",
                                alt: "waiting",
                                width: 125,
                                height: 125
                            }), (0, n.jsx)("p", {
                                className: tM().state,
                                children: "Pending Action"
                            }), (0, n.jsxs)("div", {
                                className: tM().content,
                                children: [(0, n.jsx)("p", {
                                    children: "NOTE: After making the payment, please return to the website and wait for the Purchase Successful pop-up."
                                }), o && (0, n.jsxs)("p", {
                                    children: ["Request took too long.", (0, n.jsx)("span", {
                                        onClick: () => {
                                            d.refresh()
                                        },
                                        children: "Refresh page."
                                    })]
                                }), (0, n.jsxs)("p", {
                                    children: [(0, n.jsx)("br", {}), " "]
                                })]
                            })]
                        })
                    }) : "error" == t ? (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsxs)("div", {
                            classname: tM().statusBox,
                            children: [(0, n.jsx)(_(), {
                                className: tM().waitingImg,
                                src: "/images/failed.png",
                                alt: "failed",
                                width: 125,
                                height: 125
                            }), (0, n.jsx)("p", {
                                className: tM().state,
                                children: "Failed"
                            }), (0, n.jsxs)("div", {
                                className: tM().content,
                                children: [(0, n.jsx)("p", {
                                    children: "Purchase Failed!"
                                }), (0, n.jsxs)("p", {
                                    children: [(0, n.jsx)("br", {}), " "]
                                })]
                            })]
                        })
                    }) : null
                })
            }
            var tE = s(25988),
                tA = s.n(tE),
                tD = s(86341),
                tI = s.n(tD);

            function tF(e) {
                let {
                    setBuyType: t
                } = e, {
                    tokenData: s
                } = el(), {
                    open: a
                } = (0, eS.k_)(), {
                    address: l
                } = (0, es.mA)(), o = (0, Y.HN)((null == s ? void 0 : s.stageSoldTokens) / Number(null == s ? void 0 : s.stageTokens) * 100 > 28 ? 98 : ((null == s ? void 0 : s.stageSoldTokens) + 1e7 * K.ft) / Number(null == s ? void 0 : s.stageTokens) * 100 + 70).toLocaleString();
                return (0, n.jsxs)("div", {
                    className: tI().buyStarterCoin,
                    children: [(0, n.jsxs)("div", {
                        className: tI().grid,
                        children: [(0, n.jsxs)("div", {
                            children: [(0, n.jsx)("span", {
                                children: "Total Coin Sales USD"
                            }), (0, n.jsx)("span", {
                                translate: "no",
                                children: (0, Y.el)((null == s ? void 0 : s.totalSoldTokensValueUsd) + 2e4 * K.ft)
                            })]
                        }), (0, n.jsxs)("div", {
                            children: [(0, n.jsx)("span", {
                                children: "Total Coins Sold"
                            }), (0, n.jsx)("span", {
                                translate: "no",
                                children: (0, Y.el)((null == s ? void 0 : s.totalSoldTokens) + Number((1e7 * K.ft).toFixed(0)))
                            })]
                        })]
                    }), (0, n.jsxs)("div", {
                        className: tI().bar,
                        children: [(0, n.jsxs)("div", {
                            className: tI().spans,
                            children: [(0, n.jsx)("span", {
                                children: "Remaining"
                            }), (0, n.jsx)("span", {
                                translate: "no",
                                children: (0, Y.HN)((null == s ? void 0 : s.stageTokens) - (null == s ? void 0 : s.stageSoldTokens) - 1e7 * K.ft)
                            })]
                        }), (0, n.jsx)("span", {
                            className: tI().progress,
                            style: {
                                width: "".concat(o < 90 ? 90 : o, "%")
                            }
                        }), (0, n.jsx)("span", {
                            className: tI().progressTitle,
                            style: {
                                left: "".concat(o < 90 ? 90 : o, "%")
                            }
                        })]
                    }), (0, n.jsx)(eD, {
                        noVerticalPadding: !0
                    }), (0, n.jsxs)("button", {
                        className: tI().buyBtn,
                        onClick: () => {
                            t("coin"), l || a({
                                view: "Connect"
                            })
                        },
                        children: ["Buy Coins", (0, n.jsx)("div", {
                            children: (0, n.jsx)(x, {
                                src: "/coin.png",
                                hero: !0
                            })
                        })]
                    })]
                })
            }
            var tR = s(38574),
                tH = s.n(tR);

            function tW(e) {
                let {
                    setBuyType: t
                } = e, {
                    tokenData: s
                } = el(), {
                    open: a
                } = (0, eS.k_)(), {
                    address: l
                } = (0, es.mA)(), [o, i] = (0, m.useState)(0), [r, c] = (0, m.useState)(0), [d, u] = (0, m.useState)(0), [h, p] = (0, m.useState)(0), [_, g] = (0, m.useState)(0), [f, v] = (0, m.useState)(0);
                return (0, m.useEffect)(() => {
                    ee.Z.get("".concat(Y.T5), {
                        headers: {
                            project: "".concat(K.KJ)
                        }
                    }).then(e => {
                        var t, s;
                        let n = null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : t.totalSoldTokens,
                            a = null == e ? void 0 : null === (s = e.data) || void 0 === s ? void 0 : s.totalSoldTokensValueUsd;
                        isNaN(Number(n)) || i(n), isNaN(Number(a)) || p(a)
                    }), ee.Z.get("".concat(Y.T5), {
                        headers: {
                            project: "".concat(K.Dc)
                        }
                    }).then(e => {
                        var t, s;
                        let n = null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : t.totalSoldTokens,
                            a = null == e ? void 0 : null === (s = e.data) || void 0 === s ? void 0 : s.totalSoldTokensValueUsd;
                        isNaN(Number(n)) || c(n), isNaN(Number(a)) || g(a)
                    }), ee.Z.get("".concat(Y.T5), {
                        headers: {
                            project: "".concat(K.aF)
                        }
                    }).then(e => {
                        var t, s;
                        let n = null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : t.totalSoldTokens,
                            a = null == e ? void 0 : null === (s = e.data) || void 0 === s ? void 0 : s.totalSoldTokensValueUsd;
                        isNaN(Number(n)) || u(n), isNaN(Number(a)) || v(a)
                    })
                }, []), (0, n.jsxs)("div", {
                    className: tH().buyStarterMiner,
                    children: [(0, n.jsxs)("div", {
                        className: tH().grid,
                        children: [(0, n.jsxs)("div", {
                            children: [(0, n.jsx)("span", {
                                children: "Total Miner Sales USD"
                            }), (0, n.jsxs)("span", {
                                translate: "no",
                                children: ["$", (0, Y.el)(h + _ + f + 38500 + 34500 + 10300 + 6100 + 6100 + 9e3 + 12450 + 11800 + 11800 + 11800 + 22300 + 22300 + 22300 + 22300 + 22300 + 22300 + 22300 + 22300 + 22300 + 22300 + 22300 + 22300 + 22300 + 22300 + 22300 + 22300 + 22300 + 22300 + 22300 + 22300 + 22300 + 10300 + 10300 + 10300 + 10300 + 10300 + 10300 + 10300 + 10300 + 11800 + 11800 + 18450 + 18450 + 18450 + 18450 + 18450 + 18450 + 18450 + 18450 + 18450)]
                            })]
                        }), (0, n.jsxs)("div", {
                            children: [(0, n.jsx)("span", {
                                children: "Total Miners Sold"
                            }), (0, n.jsx)("span", {
                                translate: "no",
                                children: o + r + d + 135 + 35 + 22 + 10 + 10 + 9 + 18 + 23 + 23 + 23 + 30 + 30 + 30 + 30 + 30 + 30 + 30 + 30 + 30 + 30 + 30 + 30 + 30 + 30 + 30 + 30 + 30 + 30 + 30 + 30 + 30 + 19 + 19 + 19 + 19 + 19 + 19 + 19 + 19 + 23 + 23 + 35 + 35 + 35 + 35 + 35 + 35 + 35 + 35 + 35
                            })]
                        })]
                    }), (0, n.jsxs)("button", {
                        className: tH().buyMiner,
                        onClick: () => {
                            t("miner"), l || a({
                                view: "Connect"
                            })
                        },
                        children: ["Buy Miners", (0, n.jsx)("div", {
                            children: (0, n.jsx)(x, {
                                src: "/images/calculator/x10-white.svg",
                                hero: !0
                            })
                        })]
                    })]
                })
            }
            var tZ = function(e) {
                let {
                    tokenData: t,
                    setBuyType: s,
                    promo: a,
                    setPromo: l
                } = e, {
                    willSendPromoCode: o,
                    setWillSendPromoCode: i
                } = el();
                return (0, n.jsxs)("div", {
                    className: "".concat(tA().AfterCountdown, " connectBox"),
                    children: [(0, n.jsx)(eO, {
                        isStarter: !0
                    }), (0, n.jsx)(tF, {
                        setBuyType: s
                    }), (0, n.jsx)(tW, {
                        setBuyType: s
                    }), (0, n.jsx)(eq, {
                        isStarter: !0
                    }), (0, n.jsx)(eB, {
                        promo: a,
                        setPromo: l,
                        promoCode: o,
                        setPromoCode: i
                    }), (0, n.jsx)(tp, {})]
                })
            };

            function tO() {
                let {
                    paymentMethod: e,
                    setMethod: t,
                    tokenData: s,
                    setTokenData: a,
                    promo: l,
                    setPromo: o,
                    isRegisterShown: i,
                    setRegisterVisibility: r,
                    walletState: c,
                    setWalletState: d,
                    messageType: u,
                    setMessageType: h,
                    messageContent: p,
                    setMessageContent: _,
                    quantity: g,
                    setQuantity: x,
                    selectedProduct: f,
                    setSelectedProduct: v,
                    referralDetails: j,
                    setRefDetails: y,
                    referralCode: b,
                    setReferralCode: w,
                    buyType: N,
                    setBuyType: k,
                    productTokenData10: B,
                    setProductTokenData10: S,
                    productTokenData30: C,
                    setProductTokenData30: T,
                    productTokenData100: M,
                    setProductTokenData100: L,
                    transactionHeader: P,
                    setTransactionHeader: E
                } = el(), {
                    address: A,
                    isConnected: D,
                    isConnecting: I
                } = (0, es.mA)(), [F, R] = (0, m.useState)(!1), [H, W] = (0, m.useState)(!1), {
                    chain: Z
                } = (0, es.LN)(), [G, U] = (0, m.useState)(null), {
                    connector: q
                } = (0, es.$4)();
                (0, m.useEffect)(() => {
                    ee.Z.get("".concat(K.T5), {
                        headers: {
                            project: "".concat(K.yM)
                        }
                    }).then(e => {
                        a(e.data)
                    })
                }, [A]), (0, m.useEffect)(() => {
                    if (g > 0 && null !== f)(null == f ? void 0 : f.code) == "PRD-X10" && (E(K.KJ), null == B ? ee.Z.get("".concat(K.T5), {
                        headers: {
                            project: "".concat(K.KJ)
                        }
                    }).then(e => {
                        S(e.data), U(e.data.projectWalletAddress)
                    }) : U(B.projectWalletAddress)), (null == f ? void 0 : f.code) == "PRD-X30" && (E(K.Dc), null == C ? ee.Z.get("".concat(K.T5), {
                        headers: {
                            project: "".concat(K.Dc)
                        }
                    }).then(e => {
                        T(e.data), U(e.data.projectWalletAddress)
                    }) : U(C.projectWalletAddress)), (null == f ? void 0 : f.code) == "PRD-X100" && (E(K.aF), null == M ? ee.Z.get("".concat(K.T5), {
                        headers: {
                            project: "".concat(K.aF)
                        }
                    }).then(e => {
                        L(e.data), U(e.data.projectWalletAddress)
                    }) : U(M.projectWalletAddress));
                    else if (s) {
                        if (null == l ? void 0 : l.valid) {
                            var e;
                            U(null == l ? void 0 : null === (e = l.promo) || void 0 === e ? void 0 : e.broker_wallet_address)
                        } else U(null == s ? void 0 : s.projectWalletAddress);
                        E(K.yM)
                    }
                }, [l, s, f, g]), (0, m.useEffect)(() => {
                    A && R(!0), A || R(!1)
                }, [A]), (0, m.useEffect)(() => {
                    null !== e && W(!0)
                }, [e]);
                let V = async e => {
                        let t = await ee.Z.get("".concat(K.T5, "/referralcode/checkWallet/").concat(e), {
                            headers: {
                                project: "".concat(K.yM)
                            }
                        });
                        t && t.data.code && w(t.data.code), t && !t.data.code && w(null)
                    },
                    z = async () => {
                        await ee.Z.post("".concat(K.T5, "/generate/referralcode"), {
                            creater_wallet_address: A
                        }, {
                            headers: {
                                project: "".concat(K.yM)
                            }
                        }).then(e => {
                            V(A)
                        })
                    };
                return ((0, m.useEffect)(() => {
                    A && z()
                }, [A]), (0, m.useEffect)(() => {
                    "coin" == N && x(0)
                }, [N]), null !== N && A) ? "coin" === N & (!F || !D || I) ? (0, n.jsx)(t_, {
                    setQuantity: x,
                    tokenData: s,
                    promo: l,
                    setPromo: o,
                    buyType: N,
                    setBuyType: k
                }) : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(O, {
                        register: !0,
                        show: i,
                        onClose: () => {
                            r(!1)
                        },
                        children: [(0, n.jsx)(td, {
                            minerForm: "miner" == N,
                            address: A,
                            setRegisterVisibility: r
                        }), " "]
                    }), H ? "BNB" == e ? (0, n.jsx)(tw, {
                        quantity: g,
                        setQuantity: x,
                        address: A,
                        promoWallet: G,
                        tokenData: s,
                        promo: l,
                        setPromo: o,
                        buyType: N
                    }) : "USDT" == e ? (0, n.jsx)(tS, {
                        quantity: g,
                        setQuantity: x,
                        address: A,
                        promoWallet: G,
                        tokenData: s,
                        promo: l,
                        setPromo: o,
                        buyType: N
                    }) : "ETH" == e && (0, n.jsx)(tC, {
                        quantity: g,
                        setQuantity: x,
                        address: A,
                        promoWallet: G,
                        tokenData: s,
                        promo: l,
                        setPromo: o,
                        buyType: N
                    }) : (0, n.jsx)(t_, {
                        setQuantity: x,
                        buyType: N,
                        setBuyType: k
                    }), (0, n.jsx)(O, {
                        show: null !== u,
                        onClose: () => {
                            _(null), h(null)
                        },
                        children: (0, n.jsx)(tP, {
                            messageType: u,
                            setMessageType: h,
                            messageContent: p,
                            setMessageContent: _
                        })
                    })]
                }) : (0, n.jsx)(tZ, {
                    tokenData: s,
                    setBuyType: k,
                    promo: l,
                    setPromo: o
                })
            }

            function tG() {
                return (0, n.jsxs)("section", {
                    className: eh().hero,
                    id: "wallet",
                    children: [(0, n.jsx)(r, {
                        className: eh().container,
                        children: (0, n.jsxs)("div", {
                            className: eh().slug,
                            children: [(0, n.jsx)(h(), {
                                href: "https://blockdag.network/",
                                children: "Home"
                            }), (0, n.jsx)(em.fmn, {}), (0, n.jsx)(h(), {
                                className: eh().active,
                                href: K.YJ,
                                children: "Buy BlockDAG"
                            })]
                        })
                    }), (0, n.jsxs)(r, {
                        className: eh().container,
                        children: [(0, n.jsxs)("div", {
                            className: eh().content,
                            children: [(0, n.jsx)("h1", {
                                children: "Join BlockDAG Network, Connect & Contribute"
                            }), (0, n.jsx)("p", {
                                children: "Explore the BlockDAG ecosystem at your own pace. Join effortlessly using your crypto wallet, credit or debit cards, Apple Pay, or Google Pay. Become a valued member of our community and embrace the simplicity of connection today."
                            }), (0, n.jsxs)("div", {
                                className: eh().buttons,
                                children: [(0, n.jsx)(J, {
                                    href: "#how-to-buy",
                                    color: "black",
                                    children: "How To Buy"
                                }), (0, n.jsx)(J, {
                                    href: "/blockdag-technical-whitepaper.pdf",
                                    color: "transparent",
                                    children: "DAGPaper v2"
                                })]
                            })]
                        }), (0, n.jsx)(tO, {})]
                    })]
                })
            }
            var tU = s(50305),
                tq = s.n(tU);

            function tV() {
                let [e, t] = (0, m.useState)(), {
                    address: s
                } = (0, es.mA)(), {
                    open: a
                } = (0, eS.k_)(), {
                    referralCode: l
                } = el();
                (0, m.useEffect)(() => {
                    s ? t(!0) : t(!1)
                }, [s]);
                let o = () => {
                        navigator.clipboard.writeText("https://purchase.blockdag.network/?ref=".concat(l)), (0, eg.ZP)("Referral link copied.", {
                            position: "bottom-center",
                            duration: 2e3
                        })
                    },
                    i = "https://purchase.blockdag.network/?ref=".concat(l),
                    c = "Hey, use my link to purchase blockDag using this link:";
                return (0, n.jsx)("section", {
                    className: tq().hero,
                    id: "referral",
                    children: (0, n.jsxs)(r, {
                        className: tq().container,
                        children: [(0, n.jsxs)("div", {
                            className: tq().content,
                            children: [(0, n.jsx)("h1", {
                                children: "Earn a 10% bonus from all referred investors!"
                            }), (0, n.jsx)("p", {
                                children: "Share your unique link with friends, family, and your network, to automatically receive 10% of all of their investments in BDAG."
                            })]
                        }), (0, n.jsxs)("div", {
                            className: tq().rightAside,
                            children: [(0, n.jsxs)("div", {
                                className: tq().copyBox,
                                children: [(0, n.jsx)("h2", {
                                    children: "Earn more BDAG by referring your friends and community!"
                                }), (0, n.jsx)("p", {
                                    children: "Share your unique link below and receive"
                                }), (0, n.jsxs)("p", {
                                    children: [(0, n.jsx)("span", {
                                        children: "10% "
                                    }), " of all transactions realized with your link ", (0, n.jsx)("span", {
                                        children: "instantly"
                                    }), "!"]
                                }), (0, n.jsxs)("div", {
                                    className: tq().input,
                                    children: [(0, n.jsx)("input", {
                                        placeholder: "Connect wallet for referral link",
                                        type: "text",
                                        value: e ? "https://purchase.blockdag.network/?ref=".concat(l) : ""
                                    }), (0, n.jsx)("button", {
                                        onClick: () => {
                                            e ? o() : a({
                                                view: "Connect"
                                            })
                                        },
                                        children: "Copy"
                                    })]
                                })]
                            }), (0, n.jsxs)("div", {
                                className: tq().shareBox,
                                children: [(0, n.jsx)("div", {
                                    className: tq().btn,
                                    children: e ? (0, n.jsx)(J, {
                                        color: "black",
                                        type: "button",
                                        onClick: o,
                                        children: "Copy"
                                    }) : (0, n.jsx)(J, {
                                        color: "black",
                                        type: "button",
                                        onClick: () => {
                                            a({
                                                view: "Connect"
                                            })
                                        },
                                        children: "CONNECT WALLET"
                                    })
                                }), (0, n.jsx)("p", {
                                    children: "Share it directly on your social media!"
                                }), (0, n.jsx)("div", {
                                    className: tq().social,
                                    onClick: () => {
                                        e || a({
                                            view: "Connect"
                                        })
                                    },
                                    children: (0, n.jsxs)("ul", {
                                        style: {
                                            pointerEvents: e ? "" : "none"
                                        },
                                        children: [(0, n.jsx)(eX.Z, {
                                            url: i,
                                            quote: c,
                                            className: tq().shareButton,
                                            children: (0, n.jsx)(eQ.Z, {
                                                size: 32,
                                                round: !0
                                            })
                                        }), (0, n.jsx)(e$.Z, {
                                            url: i,
                                            title: c,
                                            className: tq().shareButton,
                                            children: (0, n.jsx)(e0.Z, {
                                                size: 32,
                                                round: !0
                                            })
                                        }), (0, n.jsx)(e1.Z, {
                                            url: i,
                                            title: c,
                                            className: tq().shareButton,
                                            children: (0, n.jsx)(e2.Z, {
                                                size: 32,
                                                round: !0
                                            })
                                        }), (0, n.jsx)(e3.Z, {
                                            url: i,
                                            title: c,
                                            separator: " ",
                                            className: tq().shareButton,
                                            children: (0, n.jsx)(e6.Z, {
                                                size: 32,
                                                round: !0
                                            })
                                        }), (0, n.jsx)(e5.Z, {
                                            url: i,
                                            title: c,
                                            separator: " ",
                                            className: tq().shareButton,
                                            children: (0, n.jsx)(e4.Z, {
                                                size: 32,
                                                round: !0
                                            })
                                        }), (0, n.jsx)(e8.Z, {
                                            url: i,
                                            title: c,
                                            separator: " ",
                                            className: tq().shareButton,
                                            children: (0, n.jsx)(e9.Z, {
                                                size: 32,
                                                round: !0
                                            })
                                        })]
                                    })
                                })]
                            })]
                        })]
                    })
                })
            }
            var tz = s(119),
                tJ = s.n(tz);

            function tY() {
                return (0, n.jsx)("section", {
                    className: tJ().referralLink,
                    children: (0, n.jsx)(r, {
                        className: tJ().container,
                        children: (0, n.jsxs)("div", {
                            className: tJ().content,
                            children: [(0, n.jsx)("h2", {
                                children: "Spread the word via social media, email or word-of-mouth, and let your REFERRAL LINK do the rest."
                            }), (0, n.jsxs)("div", {
                                className: tJ().linkBox,
                                children: [(0, n.jsxs)("div", {
                                    className: tJ().box,
                                    children: [(0, n.jsx)("div", {
                                        className: tJ().icon,
                                        children: (0, n.jsx)(x, {
                                            src: "/images/referral/wallet.png"
                                        })
                                    }), (0, n.jsxs)("div", {
                                        className: tJ().title,
                                        children: [(0, n.jsx)("span", {
                                            children: "1."
                                        }), (0, n.jsx)("h3", {
                                            children: "Connect Your Wallet"
                                        })]
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: tJ().box,
                                    children: [(0, n.jsx)("div", {
                                        className: tJ().icon,
                                        children: (0, n.jsx)(x, {
                                            src: "/images/referral/chain.png"
                                        })
                                    }), (0, n.jsxs)("div", {
                                        className: tJ().title,
                                        children: [(0, n.jsx)("span", {
                                            children: "2."
                                        }), (0, n.jsx)("h3", {
                                            children: "Generate your unique link"
                                        })]
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: tJ().box,
                                    children: [(0, n.jsx)("div", {
                                        className: tJ().icon,
                                        children: (0, n.jsx)(x, {
                                            src: "/images/referral/sharing.png"
                                        })
                                    }), (0, n.jsxs)("div", {
                                        className: tJ().title,
                                        children: [(0, n.jsx)("span", {
                                            children: "3."
                                        }), (0, n.jsx)("h3", {
                                            children: "SHARE the link with friends, family, and colleagues."
                                        })]
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: tJ().box,
                                    children: [(0, n.jsx)("div", {
                                        className: tJ().icon,
                                        children: (0, n.jsx)(x, {
                                            src: "/images/referral/Token.png"
                                        })
                                    }), (0, n.jsxs)("div", {
                                        className: tJ().title,
                                        children: [(0, n.jsx)("span", {
                                            children: "4."
                                        }), (0, n.jsx)("h3", {
                                            children: "EARN 10% of ALL investments into the BDAG presale generated through YOUR code!"
                                        })]
                                    })]
                                })]
                            }), (0, n.jsxs)("div", {
                                className: tJ().text,
                                children: [(0, n.jsx)("p", {
                                    children: "Watch your earnings grow as your network expands, earning passive income while you sleep."
                                }), (0, n.jsx)("p", {
                                    children: "Unlimited Earnings: No caps on how much you can earn, the sky's the limit."
                                }), (0, n.jsx)("p", {
                                    children: "Presale Lifetime Benefits: Your referral code doesn't expire until the end of our presale."
                                })]
                            })]
                        })
                    })
                })
            }
            var tK = s(7427),
                tX = s.n(tK),
                tQ = function() {
                    return (0, n.jsx)("section", {
                        className: tX().products,
                        id: "how-to-buy",
                        children: (0, n.jsx)(r, {
                            className: tX().container,
                            children: (0, n.jsxs)("div", {
                                className: tX().how,
                                children: [(0, n.jsxs)("div", {
                                    className: tX().howTitle,
                                    children: [(0, n.jsxs)("h1", {
                                        children: ["How to buy ", (0, n.jsx)("br", {}), " BlockDAG Coins"]
                                    }), (0, n.jsxs)("div", {
                                        className: tX().icons,
                                        children: [(0, n.jsx)("div", {
                                            className: tX().icon,
                                            children: (0, n.jsx)(x, {
                                                hero: !0,
                                                src: "/images/howTo/Etherium.png"
                                            })
                                        }), (0, n.jsx)("div", {
                                            className: tX().icon,
                                            children: (0, n.jsx)(x, {
                                                hero: !0,
                                                src: "/images/howTo/Etherium2.png"
                                            })
                                        }), (0, n.jsx)("div", {
                                            className: tX().icon,
                                            children: (0, n.jsx)(x, {
                                                hero: !0,
                                                src: "/images/howTo/Etherium3.png"
                                            })
                                        }), (0, n.jsx)("div", {
                                            className: tX().icon,
                                            children: (0, n.jsx)(x, {
                                                hero: !0,
                                                src: "/images/howTo/Etherium4.png"
                                            })
                                        }), (0, n.jsx)("div", {
                                            className: tX().icon,
                                            children: (0, n.jsx)(x, {
                                                hero: !0,
                                                src: "/images/howTo/Etherium5.png"
                                            })
                                        }), (0, n.jsx)("div", {
                                            className: tX().icon,
                                            children: (0, n.jsx)(x, {
                                                hero: !0,
                                                src: "/images/howTo/Etherium6.png"
                                            })
                                        }), (0, n.jsx)("div", {
                                            className: tX().icon,
                                            children: (0, n.jsx)(x, {
                                                hero: !0,
                                                src: "/images/howTo/Etherium7.png"
                                            })
                                        })]
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: tX().stepOne,
                                    children: [(0, n.jsxs)("div", {
                                        className: tX().content,
                                        children: [(0, n.jsxs)("div", {
                                            className: tX().title,
                                            children: [(0, n.jsx)("div", {
                                                className: tX().icon,
                                                children: (0, n.jsx)(x, {
                                                    hero: !0,
                                                    src: "/images/howTo/step1.png"
                                                })
                                            }), (0, n.jsx)("h2", {
                                                children: "Step 1"
                                            })]
                                        }), (0, n.jsxs)("div", {
                                            className: tX().desc,
                                            children: [(0, n.jsx)("p", {
                                                children: "To begin, make sure you have a MetaMask wallet installed on your browser, or use one of the wallets supported by Wallet Connect (we recommend Trust Wallet or Plus Wallet)."
                                            }), (0, n.jsx)("p", {
                                                children: "Purchasing on a desktop browser will give you a smoother purchasing experience. For this we recommend Metamask."
                                            }), (0, n.jsx)("p", {
                                                children: "If you are purchasing on mobile, we recommend using Trust Wallet or Plus Wallet and connecting through built in Wallet Connect."
                                            })]
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: tX().image,
                                        children: [(0, n.jsx)(x, {
                                            src: "/images/howTo/step1_3.png"
                                        }), (0, n.jsx)("div", {
                                            className: tX().shadow
                                        })]
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: tX().stepTwo,
                                    children: [(0, n.jsxs)("div", {
                                        className: tX().content,
                                        children: [(0, n.jsxs)("div", {
                                            className: tX().title,
                                            children: [(0, n.jsx)("div", {
                                                className: tX().icon,
                                                children: (0, n.jsx)(x, {
                                                    hero: !0,
                                                    src: "/images/howTo/step2.png"
                                                })
                                            }), (0, n.jsx)("h2", {
                                                children: "Step 2"
                                            })]
                                        }), (0, n.jsxs)("div", {
                                            className: tX().desc,
                                            children: [(0, n.jsxs)("p", {
                                                children: ["Once you have your preferred wallet provider ready, click “Connect Wallet” and select the appropriate option. ", (0, n.jsx)("br", {}), " For mobile wallet apps you will need to select “Wallet Connect”"]
                                            }), (0, n.jsx)("p", {
                                                children: "You will then have 3 options:"
                                            })]
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: tX().gridContainer,
                                        children: [(0, n.jsxs)("div", {
                                            className: tX().grid,
                                            children: [(0, n.jsxs)("div", {
                                                className: tX().icons,
                                                children: [(0, n.jsx)("div", {
                                                    className: tX().icon,
                                                    children: (0, n.jsx)(x, {
                                                        hero: !0,
                                                        src: "/images/howTo/Etherium.png"
                                                    })
                                                }), (0, n.jsx)("div", {
                                                    className: tX().icon,
                                                    children: (0, n.jsx)(x, {
                                                        hero: !0,
                                                        src: "/images/howTo/Etherium2.png"
                                                    })
                                                }), (0, n.jsx)("div", {
                                                    className: tX().icon,
                                                    children: (0, n.jsx)(x, {
                                                        hero: !0,
                                                        src: "/images/howTo/Etherium3.png"
                                                    })
                                                }), (0, n.jsx)("div", {
                                                    className: tX().icon,
                                                    children: (0, n.jsx)(x, {
                                                        hero: !0,
                                                        src: "/images/howTo/Etherium4.png"
                                                    })
                                                }), (0, n.jsx)("div", {
                                                    className: tX().icon,
                                                    children: (0, n.jsx)(x, {
                                                        hero: !0,
                                                        src: "/images/howTo/Etherium5.png"
                                                    })
                                                }), (0, n.jsx)("div", {
                                                    className: tX().icon,
                                                    children: (0, n.jsx)(x, {
                                                        hero: !0,
                                                        src: "/images/howTo/Etherium6.png"
                                                    })
                                                }), (0, n.jsx)("div", {
                                                    className: tX().icon,
                                                    children: (0, n.jsx)(x, {
                                                        hero: !0,
                                                        src: "/images/howTo/Etherium7.png"
                                                    })
                                                })]
                                            }), (0, n.jsxs)("div", {
                                                className: tX().desc,
                                                children: [(0, n.jsx)("h3", {
                                                    children: "Buy ETH, BNB & USDT with Apple Pay, Google Pay or Card"
                                                }), (0, n.jsx)("div", {
                                                    className: tX().descContent,
                                                    children: (0, n.jsxs)("p", {
                                                        children: ["Visit", " ", (0, n.jsx)(h(), {
                                                            href: "https://www.moonpay.com/buy",
                                                            children: "https://www.moonpay.com/buy"
                                                        }), " ", "this will allow you to purchase ETH, BNB or USDT that will be sent to your wallet. You will then be able to use this ETH, BNB or USDT to purchase BDAG Coins."]
                                                    })
                                                })]
                                            })]
                                        }), (0, n.jsxs)("div", {
                                            className: tX().grid,
                                            children: [(0, n.jsxs)("div", {
                                                className: tX().icons,
                                                children: [(0, n.jsx)("div", {
                                                    className: "".concat(tX().icon, " ").concat(tX().icon2),
                                                    children: (0, n.jsx)(x, {
                                                        hero: !0,
                                                        src: "/images/howTo/Etherium.png"
                                                    })
                                                }), (0, n.jsx)("div", {
                                                    className: "".concat(tX().icon, " ").concat(tX().icon2),
                                                    children: (0, n.jsx)(x, {
                                                        hero: !0,
                                                        src: "/images/howTo/Etherium3.png"
                                                    })
                                                })]
                                            }), (0, n.jsxs)("div", {
                                                className: tX().desc,
                                                children: [(0, n.jsx)("h3", {
                                                    children: "Buy BlockDAG with ETH or BNB"
                                                }), (0, n.jsx)("div", {
                                                    className: tX().descContent,
                                                    children: (0, n.jsx)("p", {
                                                        children: "Once you have sufficient ETH or BNB in your wallet (if you do not have ETH, USDT or BNB, please read option 1 first), you can now swap your ETH or BNB for BlockDAG Network. Type in the amount of BlockDAG Network you wish to purchase ($15 minimum ) and then click “Buy with ETH” or “Buy with BNB”. Your wallet provider will ask you to confirm the transaction and will also show you the cost of gas."
                                                    })
                                                })]
                                            })]
                                        }), (0, n.jsxs)("div", {
                                            className: tX().grid,
                                            children: [(0, n.jsx)("div", {
                                                className: tX().icons,
                                                children: (0, n.jsx)("div", {
                                                    className: "".concat(tX().icon, " ").concat(tX().icon2),
                                                    children: (0, n.jsx)(x, {
                                                        hero: !0,
                                                        src: "/images/howTo/Etherium2.png"
                                                    })
                                                })
                                            }), (0, n.jsxs)("div", {
                                                className: tX().desc,
                                                children: [(0, n.jsx)("h3", {
                                                    children: "Buy BlockDAG with USDT"
                                                }), (0, n.jsx)("div", {
                                                    className: tX().descContent,
                                                    children: (0, n.jsx)("p", {
                                                        children: "Please ensure you have at least $20 of USDT in your wallet before commencing the transaction. Type in the amount of BlockDAG Network you wish to purchase ($15 minimum). Click “Convert USDT”. You will then be asked to approve the purchase TWICE. The first approval is for the USDT contract and the second is for the transaction amount. Please ensure you go through both approval steps in order to complete the transaction."
                                                    })
                                                })]
                                            })]
                                        })]
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: tX().stepThree,
                                    children: [(0, n.jsx)("div", {
                                        className: tX().image,
                                        children: (0, n.jsx)(x, {
                                            src: "/images/howTo/step3_4.png"
                                        })
                                    }), (0, n.jsxs)("div", {
                                        className: tX().content,
                                        children: [(0, n.jsxs)("div", {
                                            className: tX().title,
                                            children: [(0, n.jsx)("div", {
                                                className: tX().icon,
                                                children: (0, n.jsx)(x, {
                                                    hero: !0,
                                                    src: "/images/howTo/step3.png"
                                                })
                                            }), (0, n.jsx)("h2", {
                                                children: "Step 3"
                                            })]
                                        }), (0, n.jsx)("div", {
                                            className: tX().desc,
                                            children: (0, n.jsx)("p", {
                                                children: "Once the presale has concluded, you will be airdropped your BlockDAG coins. The exact date and time of the airdrop will be revealed closer to the time of the BDAG launch."
                                            })
                                        }), (0, n.jsx)(J, {
                                            href: "https://purchase.blockdag.network/",
                                            color: "black",
                                            children: "BUY NOW"
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                };

            function t$() {
                return (0, n.jsxs)(ed, {
                    title: "Become a Part Of BlockDAG Network | Buy BDAG Coins & Miners",
                    description: "Invest in the future of blockchain and mining with BDAG coins. Get started easily with easy way to start mining and purching BDAG coins.",
                    children: [(0, n.jsx)(tG, {}), (0, n.jsx)(tV, {}), (0, n.jsx)(tY, {}), (0, n.jsx)(tQ, {})]
                })
            }
        },
        36269: function(e) {
            e.exports = {
                footer: "Footer_footer__L2Zk0",
                store: "Footer_store__QzXCZ",
                bot: "Footer_bot___jWCs",
                social: "Footer_social__3LqD3",
                botLeft: "Footer_botLeft__Ri4_w",
                container: "Footer_container__44wRa",
                mid: "Footer_mid__hjwSf",
                midNewContent: "Footer_midNewContent__ki6eA",
                logo: "Footer_logo__TeKc2",
                img: "Footer_img__iArxK",
                paragraph: "Footer_paragraph__30xOv",
                midLeft: "Footer_midLeft__fpfeh",
                midItem: "Footer_midItem__DVrBf",
                leftUl: "Footer_leftUl__w5mm9",
                mobileTextCenter: "Footer_mobileTextCenter__fazwX",
                socials: "Footer_socials__G2uYj"
            }
        },
        93504: function(e) {
            e.exports = {
                bonusCode: "Header_bonusCode__T7ZiR",
                nounderline: "Header_nounderline__CbQ3K",
                telegramIcon: "Header_telegramIcon__gKrQv",
                verImg: "Header_verImg__j2Fm3",
                header: "Header_header__LV3JK",
                headerArea: "Header_headerArea__9p6pg",
                container: "Header_container__cRP9I",
                logo: "Header_logo__v35H3",
                img: "Header_img__hZAwB",
                right: "Header_right__p6KnW",
                rightBar: "Header_rightBar__wdIRX",
                hamburger: "Header_hamburger__FdZOH",
                nohref: "Header_nohref__UFOM0",
                nav: "Header_nav__W7Lqw",
                overlay: "Header_overlay___6Zrj",
                button: "Header_button__obghH",
                navListItem: "Header_navListItem__VyqFr",
                additionalList: "Header_additionalList__oa8Zq",
                activeNav: "Header_activeNav__Jq_Wu",
                navUl: "Header_navUl__UVudD",
                closeArea: "Header_closeArea__99_GL",
                chevron: "Header_chevron__Oot0n",
                mechanicsClicked: "Header_mechanicsClicked__hXm8z"
            }
        },
        46811: function(e) {
            e.exports = {
                main: "Layout_main__Nd7fl",
                mainBg: "Layout_mainBg__SdOzs"
            }
        },
        57453: function(e) {
            e.exports = {
                hero: "Hero_hero__lPNVz",
                slug: "Hero_slug__mBgwe",
                active: "Hero_active__kb8Mt",
                container: "Hero_container___tUeb",
                content: "Hero_content__1sSmX",
                buttons: "Hero_buttons___q25M"
            }
        },
        7427: function(e) {
            e.exports = {
                products: "NewHowToBuy_products__rXi6_",
                products_1: "NewHowToBuy_products_1___l83_",
                desc: "NewHowToBuy_desc__EG3N4",
                how: "NewHowToBuy_how__7zftN",
                howTitle: "NewHowToBuy_howTitle__FOHjj",
                icons: "NewHowToBuy_icons__4_6sO",
                icon: "NewHowToBuy_icon__ICEOo",
                stepOne: "NewHowToBuy_stepOne__wsrSy",
                content: "NewHowToBuy_content__OCi9P",
                title: "NewHowToBuy_title__Vd_AK",
                image: "NewHowToBuy_image__Fkiae",
                shadow: "NewHowToBuy_shadow__8oSt1",
                stepTwo: "NewHowToBuy_stepTwo__i2JGV",
                gridContainer: "NewHowToBuy_gridContainer__DEQm6",
                grid: "NewHowToBuy_grid__Zv9dn",
                icon2: "NewHowToBuy_icon2__OhjvJ",
                descContent: "NewHowToBuy_descContent__THXmT",
                stepThree: "NewHowToBuy_stepThree__Go2w9"
            }
        },
        50305: function(e) {
            e.exports = {
                hero: "ReferralHero_hero__NOIon",
                containerSlug: "ReferralHero_containerSlug__UiJmP",
                slug: "ReferralHero_slug__ppFTv",
                active: "ReferralHero_active__zrwrP",
                container: "ReferralHero_container__Lys4a",
                content: "ReferralHero_content__jc8UP",
                rightAside: "ReferralHero_rightAside__kVhCo",
                copyBox: "ReferralHero_copyBox__xPF43",
                input: "ReferralHero_input__qWJGY",
                shareBox: "ReferralHero_shareBox__uPkik",
                btn: "ReferralHero_btn__XJ27r",
                social: "ReferralHero_social__8tViP"
            }
        },
        119: function(e) {
            e.exports = {
                referralLink: "ReferralLink_referralLink__ksne3",
                container: "ReferralLink_container__Gxhms",
                content: "ReferralLink_content__rTC9b",
                text: "ReferralLink_text__7PuL9",
                linkBox: "ReferralLink_linkBox__oqOkn",
                box: "ReferralLink_box__2HGIw",
                icon: "ReferralLink_icon__6cRQO",
                title: "ReferralLink_title__Z3hGp"
            }
        },
        77275: function(e) {
            e.exports = {
                addressform: "AddressForm_addressform__V2XPT",
                formGrid: "AddressForm_formGrid__aqJQM",
                field: "AddressForm_field__2TqJr",
                gridFull: "AddressForm_gridFull__dSVNx",
                selected: "AddressForm_selected__qoSOE",
                fieldsContainer: "AddressForm_fieldsContainer__u_u8e",
                fieldPhone: "AddressForm_fieldPhone__D4NMn",
                fieldCheck: "AddressForm_fieldCheck__KwpJH"
            }
        },
        49812: function(e) {
            e.exports = {
                button: "Button_button__mCT0h",
                transparent: "Button_transparent__l4UOb",
                black: "Button_black__Fjplo",
                light: "Button_light__xmSX6",
                gray: "Button_gray__FK4Ot",
                div: "Button_div__r7Vv8",
                soon: "Button_soon__aa4L0",
                fadeSoon: "Button_fadeSoon__XbF64"
            }
        },
        25988: function(e) {
            e.exports = {
                AfterCountdown: "BuyStarter_AfterCountdown__stKhI",
                btnArea: "BuyStarter_btnArea__Vmitm",
                buyBtn: "BuyStarter_buyBtn__5Qu1_",
                buyMiner: "BuyStarter_buyMiner__BZl7R"
            }
        },
        86341: function(e) {
            e.exports = {
                buyStarterCoin: "BuyStarterCoin_buyStarterCoin__IjWnj",
                grid: "BuyStarterCoin_grid__Vgojm",
                bar: "BuyStarterCoin_bar__1qcOq",
                spans: "BuyStarterCoin_spans__3miqt",
                progress: "BuyStarterCoin_progress__eRtO3",
                progressTitle: "BuyStarterCoin_progressTitle__2CIRY",
                buyBtn: "BuyStarterCoin_buyBtn__UWCpD"
            }
        },
        38574: function(e) {
            e.exports = {
                buyStarterMiner: "BuyStarterMiner_buyStarterMiner__vpTpw",
                grid: "BuyStarterMiner_grid__LXzt5",
                buyMiner: "BuyStarterMiner_buyMiner__e0UZY"
            }
        },
        13282: function(e) {
            e.exports = {
                container: "Container_container__bOiDv",
                large: "Container_large__G1Q2W"
            }
        },
        53543: function(e) {
            e.exports = {
                languageList: "LangSwitcher_languageList__8F06r",
                selected: "LangSwitcher_selected__Fhhey",
                googletranslate: "LangSwitcher_googletranslate__mMxWm",
                active: "LangSwitcher_active__qw4c3",
                disable: "LangSwitcher_disable__L6f2N",
                dNone: "LangSwitcher_dNone__eUV6r",
                overlay: "LangSwitcher_overlay__og4tK"
            }
        },
        35634: function(e) {
            e.exports = {
                minerbox: "MinerBox_minerbox__eTvNH",
                icon: "MinerBox_icon__RTCtd",
                photoBg: "MinerBox_photoBg__zyUJB",
                photo: "MinerBox_photo__sbMnA",
                content: "MinerBox_content__JZaM1",
                notConnected: "MinerBox_notConnected__WFsqe",
                quantity: "MinerBox_quantity__Eqai7",
                plus: "MinerBox_plus__h42y0",
                minus: "MinerBox_minus__0Q93N"
            }
        },
        4810: function(e) {
            e.exports = {
                ModalOverlay: "Modal_ModalOverlay__XOCLO",
                register: "Modal_register__koN7H",
                fading: "Modal_fading__jqZo_",
                StyledModal: "Modal_StyledModal__CTbJB",
                StyledOverlayClose: "Modal_StyledOverlayClose__nlYlx",
                StyledModalBody: "Modal_StyledModalBody__Ib1Gq",
                StyledCloseIcon: "Modal_StyledCloseIcon__EWgXG",
                fadeIn: "Modal_fadeIn__wl6cf"
            }
        },
        2797: function(e) {
            e.exports = {
                promocode: "PromoCode_promocode__QNEjp",
                special: "PromoCode_special___FhTm",
                valid: "PromoCode_valid__iQPfF",
                invalid: "PromoCode_invalid__1k_Pi",
                selectedProduct: "PromoCode_selectedProduct___DCg5",
                desc: "PromoCode_desc__NvOkV",
                icon: "PromoCode_icon__8iTSY",
                success: "PromoCode_success__b3Jru",
                error: "PromoCode_error__h1Yba",
                formGroup: "PromoCode_formGroup__s_xRL",
                apply: "PromoCode_apply__R7j1W",
                text: "PromoCode_text__lCzEg"
            }
        },
        83006: function(e) {
            e.exports = {
                container: "RegisterModal_container__oIOTx",
                updateSet: "RegisterModal_updateSet__VK12A",
                confirmButton: "RegisterModal_confirmButton__7n6GI",
                success: "RegisterModal_success__osQLu",
                backdrop: "RegisterModal_backdrop__5vDdq",
                phone_input: "RegisterModal_phone_input__0Y2a2",
                content: "RegisterModal_content__kdJUy",
                close: "RegisterModal_close__kcqJO",
                deliveryIcon: "RegisterModal_deliveryIcon__v44mb",
                hero: "RegisterModal_hero___q4N5",
                desc: "RegisterModal_desc__ahiPs",
                error: "RegisterModal_error__2Kl_9",
                field: "RegisterModal_field__xT6Rn",
                selected: "RegisterModal_selected__juZ4P",
                fieldsContainer: "RegisterModal_fieldsContainer__5jwUr",
                fieldPhone: "RegisterModal_fieldPhone__wpFQ5",
                fieldCheck: "RegisterModal_fieldCheck__FuotS",
                bodyText: "RegisterModal_bodyText__iekLb"
            }
        },
        39471: function(e) {
            e.exports = {
                resrictedpopup: "ResrictedPopup_resrictedpopup__2aInB",
                btns: "ResrictedPopup_btns__ZvZf0",
                overlay: "ResrictedPopup_overlay__RVADi"
            }
        },
        66277: function(e) {
            e.exports = {
                text: "SelectType_text__tEfbz",
                selecttype: "SelectType_selecttype__IzDd0",
                item: "SelectType_item__DRGv2",
                active: "SelectType_active__RslOu"
            }
        },
        89051: function(e) {
            e.exports = {
                referral: "ShareReferralCode_referral___MO95",
                refImg: "ShareReferralCode_refImg__I3_yB",
                whiteBg: "ShareReferralCode_whiteBg__ruPZF",
                socialShare: "ShareReferralCode_socialShare__6HWzd",
                directly: "ShareReferralCode_directly__7S2j3",
                text: "ShareReferralCode_text__BqBY6",
                notRef: "ShareReferralCode_notRef__iRy4g",
                blueLink: "ShareReferralCode_blueLink__GdPuV"
            }
        },
        42940: function(e) {
            e.exports = {
                content: "WalletBalance_content__pC_33",
                contentTextToolDesktop: "WalletBalance_contentTextToolDesktop__ZFW4o",
                contentCoinTool: "WalletBalance_contentCoinTool__WM_ut",
                contentTitle: "WalletBalance_contentTitle__Os8YW",
                contentInfo: "WalletBalance_contentInfo__ZYxew",
                notZero: "WalletBalance_notZero__JacRW",
                walletbalance: "WalletBalance_walletbalance__mHaDy",
                list: "WalletBalance_list__rmJWq",
                leftList: "WalletBalance_leftList__BWMRz",
                buyCoin: "WalletBalance_buyCoin__qy6Be",
                buyMiner: "WalletBalance_buyMiner__QYtab",
                item: "WalletBalance_item__7hJrY",
                ownedDevices: "WalletBalance_ownedDevices__cIRxg",
                hasMiner: "WalletBalance_hasMiner___akwh",
                deliveryButtonContainer: "WalletBalance_deliveryButtonContainer__fWJ73",
                deliveryButton: "WalletBalance_deliveryButton__qQCLk",
                ownedCount: "WalletBalance_ownedCount__oBDt6"
            }
        },
        43777: function(e) {
            e.exports = {
                walletbar: "WalletBar_walletbar__7JItr",
                grid: "WalletBar_grid__Iezc9",
                topbar: "WalletBar_topbar__Dw389",
                left: "WalletBar_left__mDK9I",
                right: "WalletBar_right__pCjfc",
                bar: "WalletBar_bar__vob6N",
                spans: "WalletBar_spans__700zl",
                progress: "WalletBar_progress__Vujv4",
                progressTitle: "WalletBar_progressTitle__t7YW3"
            }
        },
        61007: function(e) {
            e.exports = {
                buttons: "WalletBotButtons_buttons__9Np04",
                htbButton: "WalletBotButtons_htbButton__Fw2sY",
                buyButton: "WalletBotButtons_buyButton__qEH3i"
            }
        },
        57722: function(e) {
            e.exports = {
                wallethead: "WalletHead_wallethead__HFFtL",
                right: "WalletHead_right__CPD9X",
                item: "WalletHead_item__T9WKJ",
                logout: "WalletHead_logout__4ulO_"
            }
        },
        27636: function(e) {
            e.exports = {
                walletnotconnected: "WalletNotConnected_walletnotconnected__25oQ6",
                icons: "WalletNotConnected_icons__h5NwN",
                icon: "WalletNotConnected_icon__8hW9W"
            }
        },
        8537: function(e) {
            e.exports = {
                powered: "WalletPowered_powered__Ngedy",
                span: "WalletPowered_span__36BkY",
                img: "WalletPowered_img__M6AYG"
            }
        },
        74167: function(e) {
            e.exports = {
                walletpromo: "WalletPromo_walletpromo__0goKi",
                logout: "WalletPromo_logout__7Q2Ry",
                batch: "WalletPromo_batch__T_Zz4",
                buyTypeButtons: "WalletPromo_buyTypeButtons__RyLEK",
                buyChangeButton: "WalletPromo_buyChangeButton__JtqGK",
                coin: "WalletPromo_coin__fTnK5",
                miner: "WalletPromo_miner__KRULD"
            }
        },
        57460: function(e) {
            e.exports = {
                walletstages: "WalletStages_walletstages__a8Fda",
                noVerticalPadding: "WalletStages_noVerticalPadding__HFDOd"
            }
        },
        72122: function(e) {
            e.exports = {
                modal: "Methods_modal__FnTs0",
                AfterCountdown: "Methods_AfterCountdown___4Qym",
                minerTop: "Methods_minerTop__QsFt5",
                logout: "Methods_logout__6_cCy",
                productWarning: "Methods_productWarning__7WKgE",
                selectMiner: "Methods_selectMiner__g8sz_",
                calc: "Methods_calc__G0fGW",
                btns: "Methods_btns__msf2X",
                miyagiInput: "Methods_miyagiInput__R0V_9",
                minerInput: "Methods_minerInput__4zJ6v",
                max: "Methods_max__EuIHI",
                paymentLabel: "Methods_paymentLabel__KMDgl",
                inputsArea: "Methods_inputsArea__rF5Kb",
                minerNone: "Methods_minerNone__D_fUk",
                inputs: "Methods_inputs__7lPYk",
                favicon: "Methods_favicon__DjemZ",
                bDaggg: "Methods_bDaggg__5a8gD",
                miners: "Methods_miners__m29ZX",
                need: "Methods_need__HMDos",
                refBon: "Methods_refBon__IjuRR",
                btnArea: "Methods_btnArea__lsVX0",
                buttonsContainer: "Methods_buttonsContainer__b2XU8",
                buyBtn: "Methods_buyBtn__hHdMz",
                newBtnsArea: "Methods_newBtnsArea__soL79",
                refsBtn: "Methods_refsBtn__PAl2E"
            }
        },
        56112: function(e) {
            e.exports = {
                status: "Status_status__Klcxc",
                waitingImg: "Status_waitingImg__r_a1j",
                state: "Status_state__dr7zd",
                notWaiting: "Status_notWaiting__JetfS",
                content: "Status_content__eIfoe",
                socialShare: "Status_socialShare__duYyM",
                directly: "Status_directly__hCu_6",
                text: "Status_text__XKT3c",
                loading: "Status_loading__WQ7Bk"
            }
        }
    },
    function(e) {
        e.O(0, [13, 885, 740, 774, 888, 179], function() {
            return e(e.s = 75557)
        }), _N_E = e.O()
    }
]);