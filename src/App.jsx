import { useState } from "react";

const C={bg:"#faf6f1",card:"#fff",alt:"#f5f0ea",ac:"#2563eb",acL:"#3b82f6",gold:"#b45309",grn:"#047857",red:"#b91c1c",org:"#c2410c",pur:"#7c3aed",pnk:"#be185d",teal:"#0d9488",tx:"#1e293b",mt:"#475569",dm:"#94a3b8",bd:"#e2ddd7",hi:"#fffbeb"};
const B=({children,color=C.ac,s={}})=><span style={{display:"inline-block",padding:"2px 10px",borderRadius:9999,fontSize:11,fontWeight:600,background:color+"18",color,letterSpacing:.3,...s}}>{children}</span>;
const IR=({icon,l,v})=><div style={{display:"flex",gap:8,marginBottom:5,fontSize:13}}>{icon&&<span style={{width:18,textAlign:"center"}}>{icon}</span>}<span style={{color:C.mt,minWidth:90}}>{l}</span><span style={{color:C.tx,fontWeight:500,flex:1}}>{v}</span></div>;
const SH=({t,z,icon,accent=C.ac,children})=><div style={{marginBottom:22}}><div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10,borderBottom:`2px solid ${accent}44`,paddingBottom:6}}><span style={{fontSize:18}}>{icon}</span><div><div style={{fontSize:14,fontWeight:700,color:C.tx}}>{t}</div>{z&&<div style={{fontSize:12,color:C.mt}}>{z}</div>}</div></div>{children}</div>;
const TB=({time,act,actZ,det,detZ,hl})=><div style={{display:"flex",gap:12,marginBottom:8,padding:"7px 11px",borderRadius:8,background:hl?C.hi:"transparent",borderLeft:hl?`3px solid ${C.gold}`:`3px solid ${C.bd}`}}><div style={{minWidth:65,fontSize:12,fontWeight:600,color:hl?C.gold:C.ac,paddingTop:1}}>{time}</div><div style={{flex:1}}><div style={{fontSize:13,fontWeight:600,color:C.tx}}>{act}</div>{actZ&&<div style={{fontSize:12,color:C.mt}}>{actZ}</div>}{det&&<div style={{fontSize:11,color:C.dm,marginTop:2,lineHeight:1.5}}>{det}</div>}{detZ&&<div style={{fontSize:11,color:C.dm,lineHeight:1.5}}>{detZ}</div>}</div></div>;
const Card=({style:s,...p})=><div style={{background:C.card,borderRadius:12,padding:16,marginBottom:12,boxShadow:"0 1px 3px rgba(0,0,0,0.06)",...s}} {...p}/>;
const SubTab=({tabs,sel,onSel})=><div style={{display:"flex",gap:3,flexWrap:"wrap",marginBottom:14}}>{tabs.map(t=><button key={t.id} onClick={()=>onSel(t.id)} style={{padding:"5px 9px",borderRadius:7,border:`1px solid ${sel===t.id?C.ac:C.bd}`,cursor:"pointer",fontSize:11,fontWeight:sel===t.id?700:400,background:sel===t.id?C.ac:C.card,color:sel===t.id?"#fff":C.mt,whiteSpace:"nowrap",transition:"all .15s",flexShrink:0}}><div>{t.icon} {t.label}</div>{t.sub&&<div style={{fontSize:9,opacity:.7}}>{t.sub}</div>}</button>)}</div>;

// ===== DATA =====
const DAYS=[
{d:"2/27 Fri",t:"Depart USA 出發",z:"出發",meals:"—",hotel:"E.C.H.O. (pre)",attire:"—",sched:[{time:"—",act:"Depart on self-booked flights",actZ:"搭乘自行訂購航班",det:"Early check-in confirmed at Starhotels E.C.H.O. Pre-paid; incidentals at own expense.",detZ:"提前入住已確認並預付，雜費自理。"}]},
{d:"2/28 Sat",t:"Arrive Milan 抵達米蘭",z:"抵達",meals:"D",hotel:"E.C.H.O. (1/3)",attire:"Casual",sched:[{time:"4:00 PM",act:"Hotel check-in",actZ:"飯店入住",det:"Starhotels E.C.H.O., Viale Andrea Doria 4. Passport + credit card.",detZ:"需護照及信用卡。房間未備妥可寄放行李。"},{time:"6:00 PM",act:"Meet lobby — Jack & Stephanie",actZ:"大廳會合"},{time:"6:30 PM",act:"Walk to dinner (12 min)",actZ:"步行前往（12分鐘）"},{time:"7:00 PM",act:"Welcome Dinner — Osteria Mamma Rosa (2h)",actZ:"歡迎晚宴（2小時）",hl:true,det:"Aperitif → Cured meats, fried veg, buffalo mozzarella → Penne ragù + Risotto (½ each) → Beef thyme + potatoes → Tiramisù. Water, coffee, digestif. All dietary restrictions accommodated.",detZ:"開胃酒→醃肉、炸蔬菜、水牛莫扎瑞拉→筆管麵＋燉飯（各半）→百里香牛肉→提拉米蘇。水、咖啡、餐後酒。飲食限制皆可配合。"}]},
{d:"3/1 Sun",t:"Milan Walking Tour 米蘭導覽",z:"導覽",meals:"B L",hotel:"E.C.H.O. (2/3)",attire:"Comfy shoes",sched:[{time:"7:00 AM",act:"Breakfast (ground floor)",actZ:"早餐（一樓）"},{time:"9:45 AM",act:"Meet guide, depart on foot",actZ:"與嚮導會合"},{time:"10:00",act:"Milan City Tour (1.5h)",actZ:"米蘭市區導覽",det:"Duomo, La Scala, Vittorio Emanuele Gallery. Entrances + whispers included.",detZ:"主教座堂、斯卡拉歌劇院、拱廊。含入場及耳機。"},{time:"11:30",act:"⭐ Duomo Terraces by lift",actZ:"⭐ 搭電梯至屋頂露臺",hl:true},{time:"12:30",act:"Cathedral interior tour",actZ:"教堂內部導覽"},{time:"1:30 PM",act:"Group Lunch — Fresco e Cimmino (1.5h)",actZ:"團體午餐",det:"Eggplant Parmigiana → Paccheri alla Nerano → Water",detZ:"茄子千層→帕凱里管麵→水"},{time:"PM",act:"Free — dinner on own",actZ:"自由活動，晚餐自理"}]},
{d:"3/2 Mon",t:"⭐ Pagani + Ferrari 汽車谷",z:"汽車谷",meals:"B L",hotel:"E.C.H.O. (3/3)",attire:"Casual",sched:[{time:"6:15 AM",act:"Breakfast ⚠️ EARLY",actZ:"早餐 ⚠️ 全程最早"},{time:"7:00 AM",act:"Coach depart (2.5h drive)",actZ:"遊覽車出發（2.5小時）"},{time:"10:00",act:"⭐ PAGANI Factory Tour (1h)",actZ:"⭐ 帕加尼工廠（1小時）",hl:true,det:"Museum & Atelier. Carbon fiber artisans. Huayra/Utopia assembly.",detZ:"博物館與工坊。碳纖維工匠。Huayra/Utopia 組裝。"},{time:"11:45",act:"Lunch Modena — il Fantino (1.5h)",actZ:"摩德納午餐",det:"Fried gnocco + cold cuts → Gramigna sausage ragù (or Tortelli Zucca) → Pork ribs Lambrusco (or cheese) → Water & soft drinks",detZ:"炸麵糰佐冷切→香腸肉醬麵（或南瓜餃）→紅酒燉豬肋排（或起司）→水及軟飲"},{time:"1:30 PM",act:"⭐ FERRARI Museum + Fiorano (2h)",actZ:"⭐ 法拉利博物館＋賽道（2小時）",hl:true,det:"1:30 free access. 2:00 guided — split 2 groups. F1 cars, prototypes, interactive. Fiorano panoramic. ⚠️ Production line RESTRICTED.",detZ:"1:30自由參觀。2:00導覽分2組。F1賽車、原型車。菲奧拉諾全景。⚠️ 生產線不開放。"},{time:"4:00 PM",act:"Coach back (3h) — dinner on own",actZ:"返回米蘭（3小時），晚餐自理"}]},
{d:"3/3 Tue",t:"⭐ Casile e Casile → Rome",z:"→羅馬",meals:"B",hotel:"→ Michelangelo (1/4)",attire:"Biz Casual",sched:[{time:"6:30 AM",act:"Breakfast",actZ:"早餐"},{time:"8:30 AM",act:"⚠️ CHECK OUT Milan",actZ:"⚠️ 退房米蘭",det:"Return key, settle incidentals, LOAD LUGGAGE ON COACH.",detZ:"歸還房卡、結清雜費、行李上車。前晚打包！"},{time:"10:00",act:"⭐ CASILE E CASILE (2.5h)",actZ:"⭐ Casile e Casile（2.5小時）",hl:true,det:"Francesco Casile, CEO (50+ yrs). Heritage, human-centered brand design, strategy→creative, modernizing brands, Q&A.",detZ:"Francesco Casile, CEO（50+年）。傳承、人本品牌設計、策略→創意、品牌現代化、問答。"},{time:"12:30",act:"Lunch on own (2.5h)",actZ:"自行午餐"},{time:"4:00 PM",act:"Frecciarossa 9465 → Rome (3h)",actZ:"高鐵至羅馬（3小時）",hl:true,det:"Coach #5. Seats: 6A-13C.",detZ:"第5節車廂。"},{time:"7:15 PM",act:"Meet Christian, coach to hotel",actZ:"與助理 Christian 會合",det:"Transit passes (ROMA72H + ROMA24H) → Stephanie Adams"},{time:"8:00 PM",act:"Check in Michelangelo, Rome",actZ:"入住羅馬飯店",det:"14 Via della Stazione di San Pietro. Passport + credit card."}]},
{d:"3/4 Wed",t:"⭐ EIIS + Intellera SHAPE",z:"EIIS+SHAPE",meals:"B",hotel:"Michelangelo (2/4)",attire:"Biz Casual",sched:[{time:"6:00 AM",act:"Breakfast",actZ:"早餐"},{time:"10:45",act:"Coach depart",actZ:"搭車出發"},{time:"11:30",act:"⭐ EIIS (1.5h)",actZ:"⭐ 歐洲永續創新研究所",hl:true,det:"Andrea Geremicca. Welcome → Innovation Lecture → Q&A → 15th-century palazzo tour.",detZ:"歡迎→創新講座→問答→15世紀宮殿導覽。"},{time:"1:00 PM",act:"Lunch on own",actZ:"自行午餐"},{time:"3:00 PM",act:"⭐ INTELLERA SHAPE (1.5h)",actZ:"⭐ Intellera SHAPE",hl:true,det:"Ivan Cardaci, CEO. Design thinking in public sector, SHAPE methodology, strategy/policy/service design, Q&A.",detZ:"公部門設計思維、SHAPE方法論、整合策略/政策/服務設計、問答。"},{time:"4:30 PM",act:"Return hotel (30 min) — dinner on own",actZ:"返回飯店，晚餐自理"}]},
{d:"3/5 Thu",t:"⭐ Olive Hill Sabina 橄欖山莊",z:"橄欖山莊",meals:"B",hotel:"Michelangelo (3/4)",attire:"Casual+shoes+jacket",sched:[{time:"6:00 AM",act:"Breakfast",actZ:"早餐"},{time:"8:00 AM",act:"Coach depart (1h45m)",actZ:"搭車出發（1小時45分）"},{time:"10:00",act:"⭐ OLIVE HILL SABINA (2h)",actZ:"⭐ 橄欖山莊（2小時）",hl:true,det:"Emma & Scott Notman. ⚠️ 10-min uphill walk. Grove tour (Emma) → Processing + strategy (Scott) → Q&A → Tasting → Bottle home!",detZ:"⚠️ 上坡10分鐘。橄欖園（Emma）→加工及策略（Scott）→問答→品油→帶一瓶回家！"},{time:"12:00",act:"Return hotel (1.5h) — free PM",actZ:"返回飯店，下午自由"}]},
{d:"3/6 Fri",t:"⭐ Rome + Fifth Beat + Farewell",z:"Fifth Beat",meals:"B D",hotel:"Michelangelo (4/4)",attire:"Biz Casual",sched:[{time:"6:00 AM",act:"Breakfast",actZ:"早餐"},{time:"9:30 AM",act:"Rome Walking Tour (3h) — guide Carlotta",actZ:"羅馬步行導覽（3小時）導遊 Carlotta",det:"Colosseum → Arch of Constantine → Palatine Hill → Roman Forum. NO entrances. Whispers mandatory.",detZ:"競技場→凱旋門→帕拉蒂尼山→古羅馬廣場。不含入場。耳機強制。"},{time:"12:30",act:"Lunch on own",actZ:"自行午餐"},{time:"2:00 PM",act:"Meet assistant, board coach",actZ:"與助理會合搭車"},{time:"3:00 PM",act:"⭐ FIFTH BEAT (1.5h)",actZ:"⭐ Fifth Beat（1.5小時）",hl:true,det:"Raffaele Boiano, CEO. Design philosophy, embedding design, measuring impact (KPIs), AI in digital experience, Q&A.",detZ:"設計理念、嵌入設計、衡量影響力（KPI）、AI數位體驗、問答。"},{time:"6:30 PM",act:"Walk to dinner (15 min)",actZ:"步行至餐廳"},{time:"7:00 PM",act:"Farewell Dinner — Taverna Angelica (2h)",actZ:"惜別晚宴（2小時）",hl:true,det:"Pork neck + tomato → Ravioli amatriciana → Chocolate mango passion fruit. Pork-free alt available. Water + 1 soft drink.",detZ:"豬頸肉→阿瑪翠切安娜餃子→黑巧克力芒果百香果。不食豬肉替代可選。水＋一杯軟飲。"}]},
{d:"3/7 Sat",t:"Program Ends 行程結束",z:"離境",meals:"B",hotel:"Check out",attire:"—",sched:[{time:"3:30 AM",act:"⚠️ Early group → FCO T1",actZ:"⚠️ 早班→FCO T1",det:"Lucien (TAP 839, 6:00), Roy Chowdhury (AA 719, 6:10), Hickey (BA 1576, 6:10), Lenz (BA 1576, 6:10), Darkoa-Ampem (BA 553, 6:45). Boxed breakfast at front desk.",detZ:"前臺領盒裝早餐（水果、烤麵包片、可頌、水、果汁）。"},{time:"6:30 AM",act:"Breakfast (ground floor)",actZ:"早餐"},{time:"10:00",act:"Later group → FCO T3",actZ:"晚班→FCO T3",det:"Christian De Cesare. Avalon (AA 719, 1:10), Bunn (BA 1576, 1:10), Maz (BA 1576, 1:10), Bouchrouche (BA 553, 1:20), Xing (WizzAir 6065, 1:45)."},{time:"11:00",act:"CHECK OUT Rome hotel",actZ:"退房羅馬飯店",det:"Return key, settle incidentals, store luggage if needed."}]}
];

const COMPANIES=[
{id:"pagani",name:"Pagani",zh:"帕加尼",date:"3/2 Mon 10AM",color:C.red,icon:"🏎️",attire:"Casual",addr:"Via dell'Industria 26, 41018 San Cesario sul Panaro (MO)",speaker:"Site guides",web:"pagani.com",
bg:["Founded 1992 by Horacio Pagani (Italian-Argentinian). Previously led Lamborghini's composite materials dept. 創辦人曾領導藍寶堅尼複合材料部門。","Located in Motor Valley near Modena. 30 min from Ferrari Maranello. 位於汽車谷，距法拉利30分鐘。","Ultra-low-volume hypercars: Zonda, Huayra, Utopia. ~40 cars/year, €2M-7M+ each. 年產約40輛。","Philosophy from Da Vinci: 'Art & Science must walk hand in hand.' 達文西理念：藝術與科學攜手並行。","2016: expanded to modern facility. Calls factory an 'Atelier' — branding decision. 稱工廠為「工坊」。","Museum opened 2017: limited editions, unreleased concepts. 博物館2017年開幕。"],
analysis:["Purest design-driven case (Verganti). Horacio = visionary interpreter. Carbon fiber as meaning. 最純粹的設計驅動案例。","Horacio IS the identity filter. Key tension: succession. 身份過濾器就是創辦人本人。核心問題：接班。","Keeley: Process (handcraft), Product Performance, Brand (founder myth), Customer Engagement (bespoke). 流程、表現、品牌、互動。","Scalability paradox: 'Atelier' identity resists scale, but company grew (2016 expansion). 規模化悖論。"],
questions:["How does Pagani decide which tech to adopt vs. reject? 如何決定採用或拒絕技術？","Where does Pagani say 'no' to a bespoke client's request? 在哪裡對客戶說不？","How was 'Atelier' identity preserved in the 2016 expansion? 2016擴建如何保留工坊身份？","How is Pagani thinking about electrification? 如何看待電動化？","Succession plan for Horacio's vision? 接班計畫？"]},

{id:"ferrari",name:"Ferrari",zh:"法拉利",date:"3/2 Mon 1:30PM",color:C.red,icon:"🐎",attire:"Casual",addr:"Via Alfredo Dino Ferrari 43, 41053 Maranello (MO)",speaker:"2 site guides",web:"ferrari.com/museums",
bg:["Founded 1939 by Enzo Ferrari, HQ Maranello. NYSE: RACE. Market cap ~€75B+. 紐約證交所上市。","~14,000 cars/year — deliberately constrained. De-marketing: 'one fewer car than demand.' 刻意控制產量。","Museum opened 1990, expanded 2004. 2,500 sqm. ~180,000 visitors/year. 300m from factory. 距工廠300公尺。","Fiorano Track: private 3km test track (1972). Panoramic bus tour circles it. ⚠️ Production line RESTRICTED. 全景巴士繞行。生產線不開放。","Split into 2 groups at 2:00 PM, each with site guide. Free museum access from 1:30. 分2組導覽。"],
analysis:["THE identity filter case. Electrification = ultimate test: how to electrify a V12 brand? 身份過濾器核心案例。","Dual identity tension: luxury brand AND racing company. Sometimes conflict. 雙重身份張力。","Controlled scarcity at scale: 14,000 > Pagani (40) but << Porsche (300,000). Unique positioning. 規模化控制稀缺。","Racing→road pipeline with filters. Not everything from F1 belongs in road cars. 賽車→量產有過濾器。","Fiorano as brand theater. Note what you see AND what you're NOT shown. 菲奧拉諾作為品牌劇場。"],
questions:["How does Ferrari evaluate if new tech passes the identity filter — specific criteria? 具體過濾標準？","What changed in electrification strategy since the HBS case? HBS個案後有何變化？","F1 rapid pace vs. deliberate road car pace — how managed? F1快節奏 vs. 量產車慎重？","Digital/virtual experiences: brand extension or dilution? 數位體驗：延伸還是稀釋？"]},

{id:"casile",name:"Casile e Casile",zh:"Casile e Casile",date:"3/3 Tue 10AM",color:C.pnk,icon:"👗",attire:"Biz Casual",addr:"Via Tortona 9, 20144 Milano",speaker:"Francesco Casile, CEO",web:"casileecasile.it",
bg:["Founded 1975 by Francesco Casile. Milan luxury showroom & brand distribution. 米蘭精品展廳與品牌代理。","Via Tortona 9 — Tortona Design District. 400 sqm. 托爾托納設計區。","Francesco moved to Milan with friend Gianni Versace. Started as warehouse worker. 與 Versace 同赴米蘭。","Co-founded Camera Showroom Milano (CSM). Awarded 'Cavaliere' by President Mattarella. 獲總統授騎士勳章。","Now run with daughter Alessia. Expanded to Shanghai, Seoul, Moscow. 250+ IT / 200+ int'l clients. 與女兒共同經營。","Teaches at 4 Milan universities. Active mentor age ~78. 在四所大學授課。"],
analysis:["'Meaning intermediary' (Verganti): curates brands, manages meaning layer. 意義中介者：策展品牌。","Ecosystem positioning: CSM co-founder, gov't recognition = institutional node. 生態系節點。","Succession: Francesco (~78) → Alessia. How to modernize without losing relationship trust? 代際交接。","DTC/e-commerce threatens intermediary model. Alessia's digital strategy = response. DTC威脅中介模式。"],
questions:["How has 'Made in Italy' evolved over 50 years? What threatens it? 義大利製造如何演變？","Your process for positioning a new brand? Shape vs. reflect designer intent? 新品牌定位流程？","How has DTC changed the intermediary role? Counter-strategy? DTC如何改變中介角色？","Example of modernizing a brand that succeeded — and one that failed? 成功與失敗的例子？","Generational transition: what changes, what stays? 代際交接：什麼改變什麼保留？"]},

{id:"eiis",name:"EIIS",zh:"歐洲永續創新研究所",date:"3/4 Wed 11:30AM",color:C.grn,icon:"🌱",attire:"Biz Casual",addr:"Palazzo Taverna, Via di Monte Giordano 36, Roma",speaker:"Andrea Geremicca",web:"eiis.eu",
bg:["Pan-European, Rome-based. Sustainable innovation via education, corporate programs, institutional partnerships. 透過教育推進永續。","HQ: Palazzo Taverna Aldobrandini — 15th-century palazzo near Piazza Navona. Building = part of experience. 15世紀宮殿。","Works with companies, governments, UN agencies across 120+ countries. 橫跨120+國家。","Philosophy: 'No professors or students, only people.' Challenge-based, immersive learning. 挑戰式沉浸學習。","Programs: Food & Sustainability, Space Entrepreneurship, corporate custom. 5★ Trustpilot (179 reviews). 五星評分。","Annual EIIS Summit at Palazzo Taverna. Global organizations + EU institutions. 年度高峰會。"],
analysis:["Reframing sustainability: compliance burden → strategic opportunity. Design-driven applied to mindset. 重構永續意義。","Palazzo as pedagogy: 15th-century building + sustainability = tradition & transformation statement. 宮殿即教學。","Stakeholder complexity: diverse stakeholders require different innovation approaches. 利害關係人複雜性。"],
questions:["How distinguish genuine sustainability from greenwashing? 如何區分真永續與漂綠？","Most common barrier to embedding sustainability in strategy? 最常見障礙？","EU regulation (CSRD) vs. US: different innovation incentives? 歐盟 vs. 美國創新誘因？","Example where mindset shift was primary outcome? 思維轉變為主要成果的例子？","AI × sustainability: accelerator, risk, or both? AI與永續：加速、風險、兼有？"]},

{id:"shape",name:"Intellera SHAPE",zh:"Intellera SHAPE",date:"3/4 Wed 3PM",color:C.teal,icon:"🏛️",attire:"Biz Casual",addr:"Rome (meeting point from assistant)",speaker:"Ivan Cardaci, CEO",web:"intelleraconsulting.com",
bg:["Design & Citizen Experience Studio of Intellera Consulting. Launched 2023 under Ivan Cardaci. 2023年啟動。","Intellera: 2021 PwC Italy spin-off → Gyrus Capital → Accenture acquired 2024. 700→1,400+ employees. 被Accenture收購。","Public sector: ministries, healthcare, municipalities. Digital transformation using data & AI. 服務公部門。","Ivan Cardaci: ex-Head of Omnichannel Experience Design at Poste Italiane. 曾任義大利郵政體驗設計主管。","SHAPE method: problem framing → stakeholder mapping → prototyping → iteration. 方法論。","Key role in Italy's EU recovery fund (NRRP) deployment. 協助部署歐盟復甦基金。"],
analysis:["Public vs. private design: citizen with legal rights ≠ customer with preferences. Different constraints. 公民≠顧客。","PwC → PE → Accenture journey: itself a case study in organizational design. 企業演變案例研究。","SHAPE as internal startup: design unit within strategy consultancy. How does it operate? 內部新創。"],
questions:["How does design thinking change when 'user' is a citizen with rights? 公民作為使用者有何不同？","Biggest difference: design sprint for gov't vs. private company? 政府 vs. 私企的最大差異？","Accenture acquisition impact on SHAPE's operations? 被收購後如何影響運作？","User research conflicts with existing policy — how handled? 研究結果與政策衝突怎麼辦？","Italian public sector + AI in citizen services? 義大利公部門如何看待AI？"]},

{id:"olive",name:"Olive Hill Sabina",zh:"橄欖山莊",date:"3/5 Thu 10AM",color:C.org,icon:"🫒",attire:"Casual+shoes+jacket",addr:"San Giorgio di Tarano, Sabina Hills (~1h from Rome)",speaker:"Emma & Scott Notman",web:"olivehillsabina.com",
bg:["Family-run organic olive farm, 8.5 hectares. Founded 2018. Restored abandoned property. 家庭經營有機橄欖農場。","Scott: ex-NATO military, Professional Olive Oil Sommelier. Emma: Qualified Organic Farmer. 前北約軍官＋有機農民。","Award-winning hand-harvested early-harvest cold-extracted EVOO. Single estate. Varieties: Frantoio, Pendolino, Leccino, Carboncello, Raja. 屢獲殊榮。","Regenerative: no fungicides/insecticides even organic alternatives. Solar powered. EU Ecoscheme. 再生農法。","Sabina: famous for olive oil for millennia. 2 trees still alive from Rome's founding era (7th c. BC). 薩比納有數千年橄欖油歷史。","⚠️ 10-min uphill walk from coach. Comfortable shoes + jacket. Take a bottle home! 上坡10分鐘。帶一瓶回家！"],
analysis:["2018 startup, not heritage story. Two foreigners in centuries-old market. 新創而非傳承故事。","Meaning in commodity market (Verganti): 'olive oil' = undifferentiated. Their story = meaning proposition. 意義主張。","Scale as anti-strategy: 8.5ha is tiny. Constraint may BE the value proposition. 規模限制可能就是價值。","Agritourism as revenue diversification: oil alone at this scale may not suffice. 農旅多元收入。"],
questions:["Business model day one vs. now? 第一天 vs. 現在的商業模式？","How compete with large producers — or deliberately avoid? 如何與大廠商競爭還是避免？","'Regenerative' vs. 'organic' — how communicate the distinction? 再生 vs. 有機如何傳達？","Most effective customer acquisition channel? 最有效獲客渠道？","If starting over, what differently? 重新開始會怎麼做？","What opportunities turned down, and why? 拒絕了什麼機會？"]},

{id:"5beat",name:"Fifth Beat",zh:"Fifth Beat",date:"3/6 Fri 3PM",color:C.pur,icon:"🎨",attire:"Biz Casual",addr:"Rome (offices: Rome, Milan, Bologna, Brescia)",speaker:"Raffaele Boiano, CEO & Co-Founder",web:"fifthbeat.com",
bg:["Independent design-driven innovation studio, co-founded 2014. Group of 4 companies. 獨立設計驅動創新工作室。","Clients: IKEA, Luxottica, Royal Caribbean, Unicredit, RAI, Brunello Cucinelli. 210+ products, 40+ apps. 知名客戶眾多。","Raffaele: anthropology + communication background (Sapienza). Prof at Politecnico di Milano. CEO of Year 2024 (Rome). 人類學背景。","Approach: ethnographic user research → UX/UI → business/org design → implementation. Agile teams. 民族誌研究方法。","Hosts 'Beat Camp' annual international design conference. 年度設計研討會。"],
analysis:["Meta-case: company that helps others become design-driven. Methodology IS the innovation. 後設案例。","Anthropology→technology bridge: ethnographic methods, not just surveys. Rare in consulting. 人類學方法。","Embedding vs. consulting: hardest challenge — making design stick after engagement ends. 嵌入 vs. 諮詢。","Directly relevant to your startup: AI in experience design, measuring ROI, lean experimentation. 與新創直接相關。"],
questions:["How measure design ROI — what KPIs? How convince skeptical execs? 如何衡量設計ROI？","'Embed' design in client org — how ensure it persists? 如何確保嵌入的設計持續運作？","AI changing your design process — research, prototyping, testing? AI如何改變流程？","Most common mistake adopting design thinking without guidance? 最常見的錯誤？","Lean experimentation vs. design quality — how balance? 精實 vs. 品質如何平衡？","Ethnographic method vs. standard UX research in practice? 民族誌 vs. 標準UX？"]}
];

const VENUES=[
{id:"duomo",name:"Duomo di Milano",zh:"米蘭主教座堂",date:"3/1 Sun 11:30",color:C.gold,icon:"⛪",addr:"Piazza del Duomo, Milano",
facts:["600 years of construction (1386–1965). Milanese proverb: 'Long as the Duomo work.' 建造近600年。","Largest church in Italy. 157m×92m×108.5m. 135 spires, 3,400+ statues, 150 gargoyles. Pink Candoglia marble. 義大利最大教堂。","Madonnina: gilded copper statue (108.5m), ~300g gold leaf, ~900kg. Symbol of Milan. Visible from Lake Como on clear days. 米蘭象徵。","ONLY Gothic cathedral with accessible terraces. 1st level ~31m, Central ~45m (1,530 sqm). Lift or 250 stairs. Even with lift, ~50 more steps. 唯一可登頂的哥德式大教堂。","77 architects over 600 years. Napoleon crowned King of Italy here (1805). His statue on a spire. 拿破崙在此加冕。","Veneranda Fabbrica (est. ~1387): 600+ year-old organization still managing maintenance today. 600年管理組織至今運作。"],
tips:["📸 Photography permitted. 👗 Dress code: no bare shoulders/short shorts. 🏔️ Clear days: see Alps from terraces. 🔍 Hidden carvings: Dante's face, ice pick, racket on terrace walls."]},
{id:"galleria",name:"Galleria Vittorio Emanuele II",zh:"艾曼紐二世拱廊",date:"3/1 Sun 10AM",color:C.pur,icon:"🏛️",addr:"Piazza del Duomo, Milano",
facts:["Built 1865–1877 by Giuseppe Mengoni (who fell from roof and died before inauguration). 建築師落成前墜亡。","Cruciform plan, glass-iron dome (47m). Floor mosaics: coats of arms of 4 Italian capitals (Turin bull, Rome wolf, Florence lily, Milan cross). 四首都紋章。","'Milan's living room' (il salotto di Milano). Prada flagship since 1913 (oldest worldwide). Also LV, Gucci, Versace. 「米蘭客廳」。","Bull tradition: spinning on Turin bull's mosaic = good luck. Worn down & replaced multiple times. 公牛轉圈傳統。","Connects Piazza del Duomo to Piazza della Scala (La Scala). 連接兩大廣場。"],
tips:["🐂 Try the bull spin! 🏪 Prada's 1913 store at Duomo-side entrance. 📐 Connection to Casile visit: luxury ecosystem's physical origin."]},
{id:"scala",name:"Teatro alla Scala",zh:"斯卡拉歌劇院",date:"3/1 Sun 10AM",color:C.pnk,icon:"🎭",addr:"Via Filodrammatici 2, Milano",
facts:["Opened 1778, designed by Piermarini. Named after previous church on site. World's most prestigious opera house. 1778年開幕。","Seats 2,030. Season opens Dec 7 (Saint Ambrose's Day). Rebuilt after 1943 WWII bombing, reopened 1946. 每年12月7日開季。","Premieres: Verdi (Otello, Nabucco), Puccini (Butterfly, Turandot), Bellini, Donizetti, Rossini. 威爾第、普契尼首演地。","Own orchestra, ballet, chorus + Accademia training school. La Scala = Italian cultural identity. 米蘭文化身份。"],
tips:["🎼 Entrance + whispers included. 🔗 'Brand theater' parallel: La Scala : opera :: Ferrari : racing. Both = controlled access to excellence."]},
{id:"colosseum",name:"Colosseum (Exterior)",zh:"羅馬競技場（外部）",date:"3/6 Fri 9:30AM",color:C.red,icon:"🏟️",addr:"Piazza del Colosseo 1, Roma",
facts:["Built 72–80 AD (Vespasian → Titus). Flavian Amphitheatre. Funded with Jerusalem spoils. Named after Nero's colossal statue nearby. 以耶路撒冷戰利品資助建造。","189m × 156m × 48m. Capacity ~50,000-80,000. 80 entrance arches: arena filled/emptied in minutes. Retractable awning (velarium) by 1,000 sailors. 80個拱門可數分鐘內進出。","Gladiator fights, animal hunts, mock sea battles (arena flooded), executions. Shows up to 100 days. Est. 400,000 humans + 1M animals died. 角鬥士、海戰。","South side collapsed in 847 earthquake. Used as quarry for centuries. New 7 Wonders of the World. On Italy's 5 cent coin. 世界新七大奇蹟。","Bede prophecy: 'As long as the Colossus stands, Rome stands.' Originally about the statue, later about the building. 比德預言。"],
tips:["⚠️ EXTERIOR ONLY. 📸 Best angles: Via dei Fori Imperiali + from Arch of Constantine. 🔗 80-arch crowd management = ancient UX design → compare to Fifth Beat."]},
{id:"constantine",name:"Arch of Constantine",zh:"君士坦丁凱旋門",date:"3/6 Fri 9:30AM",color:C.org,icon:"🏛️",addr:"Between Colosseum & Palatine Hill, Roma",
facts:["315 AD. Commemorates Constantine's victory at Milvian Bridge (312 AD). Last great triumphal arch. 21m × 25.9m × 7.4m — largest surviving. 現存最大羅馬凱旋門。","Spolia: sculptures 'borrowed' from Trajan, Hadrian, Marcus Aurelius monuments — heads re-carved as Constantine. Creative reuse or decline? Scholars debate. 掠奪品：學者至今爭論。","Academic parallel: spolia = curation in stone. Compare to Ferrari reusing racing DNA, Casile curating brands. Is reusing existing elements innovation or imitation? 掠奪品＝石頭中的策展。"],
tips:["🔍 Spot the style difference: 2nd-century naturalistic panels vs. 4th-century schematic originals = Classical → Late Antique art transition."]},
{id:"palatine",name:"Palatine Hill",zh:"帕拉蒂尼山",date:"3/6 Fri 9:30AM",color:C.grn,icon:"🏔️",addr:"Via di San Gregorio 30, Roma",
facts:["Founding myth: Romulus & Remus raised by she-wolf here. Romulus drew sacred furrow to found Rome (753 BC). 羅馬建城傳說。","Word 'palace' derives from 'Palatine' (Latin: Palatium). Most important of Rome's 7 hills. 「宮殿」源自「帕拉蒂尼」。","Republic: patrician homes (Cicero). Empire: Augustus made it seat of power. Successive emperors built increasingly lavish palaces. 奧古斯都定為帝國權力中心。","Views over Roman Forum (one side) and Circus Maximus (other side, 150,000+ capacity). Best vantage for Rome's topography. 眺望兩側全景。"],
tips:["📸 The Forum view from Palatine = one of Rome's most iconic photo spots. 🔗 'Palace' from 'Palatine' = 2,000-year brand identity."]},
{id:"forum",name:"Roman Forum",zh:"古羅馬廣場",date:"3/6 Fri 9:30AM",color:C.teal,icon:"🏛️",addr:"Via della Salara Vecchia, Roma",
facts:["Political, commercial, religious center of Rome for 1,000+ years. Originally marshy valley, drained 7th c. BC (Cloaca Maxima). 超過千年的中心。","Contained: Senate (Curia), law courts (Basilicas), temples (Saturn, Vesta), treasury, markets, Rostra (speakers' platform). Caesar's body brought here after assassination. 凱撒遇刺後遺體帶至此處。","Key ruins: Temple of Saturn (490s BC, oldest — housed treasury), Arch of Titus (81 AD — depicts Jerusalem sack, connects to Colosseum funding), Via Sacra (oldest street), Temple of Romulus (original bronze doors still work!). 重要遺跡。","9th-century earthquake destroyed most. Used as cattle pasture ('Campo Vaccino') for centuries. World's largest inner-city archaeological area. 世界最大城市內考古區。"],
tips:["⚠️ Exterior viewing only. 🧠 Forum evolved organically for 1,000 years until overloaded (Caesar built new forums) = original 'platform overload' problem → compare to platform economics."]},
];

const IT_CATS=[
{id:"ess",l:"Essentials",z:"基本",icon:"🗣️",items:[
{it:"Sì / No",p:"see / noh",en:"Yes / No",zh:"是／不是"},
{it:"Per favore",p:"pair fah-VOH-reh",en:"Please",zh:"請"},
{it:"Grazie (mille)",p:"GRAH-tsee-eh (MEE-leh)",en:"Thank you (very much)",zh:"謝謝（非常感謝）"},
{it:"Prego",p:"PREH-goh",en:"You're welcome / Go ahead",zh:"不客氣／請",n:"Also 'after you', 'please sit' 也用於請坐、請進"},
{it:"Mi scusi",p:"mee SKOO-zee",en:"Excuse me (formal)",zh:"不好意思（正式）",n:"Use with strangers/business 對陌生人及正式場合"},
{it:"Mi dispiace",p:"mee dee-SPYAH-cheh",en:"I'm sorry",zh:"我很抱歉"},
{it:"Non capisco",p:"non kah-PEE-skoh",en:"I don't understand",zh:"我不懂"},
{it:"Parla inglese?",p:"PAR-lah een-GLEH-zeh",en:"Do you speak English?",zh:"您會說英文嗎？"},
{it:"Può ripetere?",p:"pwoh ree-PEH-teh-reh",en:"Can you repeat?",zh:"可以再說一次嗎？"},
{it:"Più lentamente",p:"pyoo len-tah-MEN-teh",en:"More slowly, please",zh:"請說慢一點"},
{it:"Va bene / Perfetto",p:"vah BEH-neh / pair-FET-toh",en:"OK / Perfect",zh:"好的／完美"},
{it:"Non parlo italiano",p:"non PAR-loh ee-tah-lee-AH-noh",en:"I don't speak Italian",zh:"我不會說義大利文"},
]},
{id:"greet",l:"Greetings",z:"問候",icon:"👋",items:[
{it:"Buongiorno",p:"bwon-JOR-noh",en:"Good morning/day",zh:"日安",n:"Until ~2-3 PM. Standard formal greeting. 用至下午"},
{it:"Buonasera",p:"bwoh-nah-SEH-rah",en:"Good evening",zh:"晚安（問候）",n:"From late afternoon. 傍晚起"},
{it:"Ciao",p:"chow",en:"Hi/Bye (informal)",zh:"嗨／掰",n:"⚠️ Informal ONLY. Don't use in business! 勿用於商務！"},
{it:"Salve",p:"SAHL-veh",en:"Hello (neutral)",zh:"您好",n:"Safer than ciao with strangers 對陌生人更安全"},
{it:"Arrivederci",p:"ah-ree-veh-DAIR-chee",en:"Goodbye (formal)",zh:"再見（正式）"},
{it:"Come sta?",p:"KOH-meh stah",en:"How are you? (formal)",zh:"您好嗎？"},
{it:"Bene, grazie. E Lei?",p:"BEH-neh GRAH-tsee-eh eh LAY",en:"Fine, thanks. And you?",zh:"很好謝謝。您呢？"},
{it:"Piacere",p:"pyah-CHEH-reh",en:"Nice to meet you",zh:"很高興認識您",n:"Essential for company visits 企業參訪必備"},
{it:"Mi chiamo...",p:"mee KYAH-moh",en:"My name is...",zh:"我叫⋯⋯"},
]},
{id:"rest",l:"Restaurant",z:"餐廳",icon:"🍝",items:[
{it:"Vorrei...",p:"vor-RAY",en:"I would like...",zh:"我想要⋯⋯",n:"Most polite way to order 最禮貌點餐方式"},
{it:"Il menù, per favore",p:"eel meh-NOO",en:"The menu, please",zh:"請給我菜單"},
{it:"Cosa consiglia?",p:"KOH-zah kon-SEE-lyah",en:"What do you recommend?",zh:"您推薦什麼？"},
{it:"Sono allergico/a a...",p:"SOH-noh ah-LAIR-jee-koh/kah",en:"I'm allergic to... (m/f)",zh:"我對⋯⋯過敏"},
{it:"Non mangio carne di maiale",p:"non MAHN-joh KAR-neh dee mah-YAH-leh",en:"I don't eat pork",zh:"我不吃豬肉"},
{it:"Senza glutine / lattosio",p:"SEN-tsah GLOO-tee-neh / lah-TOH-zee-oh",en:"Gluten/Lactose-free",zh:"無麩質／無乳糖"},
{it:"Il conto, per favore",p:"eel KON-toh",en:"The check, please",zh:"請結帳"},
{it:"Posso pagare con carta?",p:"POS-soh pah-GAH-reh kon KAR-tah",en:"Can I pay by card?",zh:"可以刷卡嗎？"},
{it:"Un caffè / Un'acqua naturale",p:"oon kaf-FEH / oon AH-kwah nah-too-RAH-leh",en:"An espresso / Still water",zh:"濃縮咖啡／礦泉水",n:"Caffè = espresso in Italy. Frizzante = sparkling. 義大利的caffè就是濃縮"},
{it:"Coperto",p:"koh-PAIR-toh",en:"Cover charge (€1-5, standard)",zh:"餐位費（€1-5，標準）",n:"Not a tip. If 'servizio incluso', no tip needed. 非小費"},
{it:"Buonissimo!",p:"bwoh-NEE-see-moh",en:"Delicious!",zh:"超好吃！"},
]},
{id:"hotel",l:"Hotel",z:"飯店",icon:"🏨",items:[
{it:"Ho una prenotazione a nome di...",p:"oh OO-nah preh-noh-tah-TSYOH-neh",en:"I have a reservation under...",zh:"我有訂房，姓名⋯⋯"},
{it:"A che ora è la colazione?",p:"ah keh OH-rah",en:"What time is breakfast?",zh:"早餐幾點？"},
{it:"Posso lasciare i bagagli?",p:"POS-soh lah-SHAH-reh ee bah-GAH-lyee",en:"Can I leave my luggage?",zh:"可以寄放行李嗎？",n:"Useful on checkout days (3/3, 3/7) 退房日實用"},
{it:"Può chiamarmi un taxi?",p:"pwoh kyah-MAR-mee oon TAH-ksee",en:"Can you call me a taxi?",zh:"可以幫我叫車嗎？"},
{it:"C'è il Wi-Fi? / La password?",p:"cheh eel WEE-fee",en:"Is there Wi-Fi? / Password?",zh:"有WiFi嗎？密碼？"},
{it:"Che piano?",p:"keh PYAH-noh",en:"Which floor?",zh:"在哪層？",n:"Ground = 'piano terra' (floor 0). 1st floor = our 2nd. 一樓是0樓"},
]},
{id:"trans",l:"Transport",z:"交通",icon:"🚄",items:[
{it:"Dov'è la stazione/fermata?",p:"doh-VEH lah stah-TSYOH-neh",en:"Where is the station/stop?",zh:"車站/站牌在哪？"},
{it:"A che binario?",p:"ah keh bee-NAH-ryoh",en:"Which platform?",zh:"哪個月臺？",n:"For Frecciarossa 搭高鐵用"},
{it:"Il treno per Roma",p:"eel TREH-noh pair ROH-mah",en:"The train to Rome",zh:"往羅馬的火車"},
{it:"Questo posto è occupato?",p:"KWEH-stoh POH-stoh eh oh-koo-PAH-toh",en:"Is this seat taken?",zh:"這位子有人嗎？"},
{it:"Quanto costa un taxi per...?",p:"KWAHN-toh KOH-stah",en:"How much is a taxi to...?",zh:"到⋯⋯多少錢？"},
{it:"All'aeroporto (Fiumicino)",p:"ah-lah-eh-roh-POR-toh fyoo-mee-CHEE-noh",en:"To the airport",zh:"到機場",n:"Your departure airport Mar 7 離境機場"},
]},
{id:"dir",l:"Directions",z:"方向",icon:"🧭",items:[
{it:"Dov'è...? / Come arrivo a...?",p:"doh-VEH / KOH-meh ah-REE-voh",en:"Where is? / How do I get to?",zh:"在哪？怎麼走？"},
{it:"A destra / A sinistra / Dritto",p:"DEH-strah / see-NEE-strah / DREET-toh",en:"Right / Left / Straight",zh:"右／左／直走"},
{it:"È lontano? / È vicino?",p:"lon-TAH-noh / vee-CHEE-noh",en:"Is it far? / Near?",zh:"遠嗎？近嗎？"},
{it:"Mi sono perso/a",p:"mee SOH-noh PAIR-soh/sah",en:"I'm lost (m/f)",zh:"我迷路了"},
{it:"Può indicarmi sulla mappa?",p:"pwoh een-dee-KAR-mee SOO-lah MAP-pah",en:"Show me on the map?",zh:"地圖上指給我看？"},
]},
{id:"shop",l:"Shopping",z:"購物",icon:"🛍️",items:[
{it:"Quanto costa?",p:"KWAHN-toh KOH-stah",en:"How much?",zh:"多少錢？"},
{it:"Sto solo guardando",p:"stoh SOH-loh gwar-DAHN-doh",en:"Just looking",zh:"只是看看"},
{it:"Lo/La prendo",p:"loh/lah PREN-doh",en:"I'll take it (m/f)",zh:"我買了"},
{it:"Tax free?",p:"tax free",en:"Tax refund?",zh:"可以退稅嗎？",n:"Purchases over €154.94 at participating stores 消費超過€154.94可退稅"},
{it:"Lo scontrino",p:"loh skon-TREE-noh",en:"The receipt",zh:"收據"},
]},
{id:"emrg",l:"Emergency",z:"緊急",icon:"🚨",items:[
{it:"Aiuto!",p:"ah-YOO-toh",en:"Help!",zh:"救命！"},
{it:"Chiamate un'ambulanza/la polizia!",p:"kyah-MAH-teh",en:"Call ambulance/police!",zh:"叫救護車／警察！"},
{it:"Ho bisogno di un medico",p:"oh bee-ZOH-nyoh dee oon MEH-dee-koh",en:"I need a doctor",zh:"我需要醫生"},
{it:"Dov'è la farmacia?",p:"doh-VEH lah far-mah-CHEE-ah",en:"Where's the pharmacy?",zh:"藥局在哪？",n:"Green cross sign. Usually 8:30-12:30 & 3:30-7:30 認綠色十字"},
{it:"Emergenza: 112",p:"eh-mair-JEN-tsah",en:"Emergency: 112",zh:"緊急電話：112",n:"Europe-wide: police, fire, ambulance 全歐洲通用"},
]},
{id:"num",l:"Numbers",z:"數字",icon:"🔢",items:[
{it:"0-5: zero, uno, due, tre, quattro, cinque",p:"DZEH-roh OO-noh DOO-eh treh KWAHT-troh CHEEN-kweh",en:"0,1,2,3,4,5",zh:"零至五"},
{it:"6-10: sei, sette, otto, nove, dieci",p:"say SET-teh OT-toh NOH-veh DYEH-chee",en:"6,7,8,9,10",zh:"六至十"},
{it:"20,30,50,100,1000: venti, trenta, cinquanta, cento, mille",p:"VEN-tee TREN-tah cheen-KWAHN-tah CHEN-toh MEE-leh",en:"20,30,50,100,1000",zh:"二十至一千"},
]},
{id:"food",l:"Food",z:"食物",icon:"🧀",items:[
{it:"Antipasto / Primo / Secondo / Dolce",p:"ahn-tee-PAH-stoh / PREE-moh / seh-KON-doh / DOHL-cheh",en:"Starter / 1st course / 2nd / Dessert",zh:"前菜／第一道／第二道／甜點"},
{it:"Contorno",p:"kon-TOR-noh",en:"Side dish (ordered separately!)",zh:"配菜（另點！）",n:"Sides NOT included with mains in Italy 義大利配菜要另外點"},
{it:"Carne / Maiale / Manzo / Pollo / Pesce",p:"KAR-neh / mah-YAH-leh / MAHN-dzoh / POH-loh / PEH-sheh",en:"Meat / Pork / Beef / Chicken / Fish",zh:"肉／豬／牛／雞／魚"},
{it:"Formaggio / Verdure / Pane",p:"for-MAH-joh / vair-DOO-reh / PAH-neh",en:"Cheese / Vegetables / Bread",zh:"起司／蔬菜／麵包"},
{it:"Olio d'oliva",p:"OH-lyoh doh-LEE-vah",en:"Olive oil",zh:"橄欖油",n:"You'll be an expert after Olive Hill! 參觀後你就是專家了！"},
{it:"Vino rosso/bianco / Birra / Gelato",p:"VEE-noh ROS-soh/BYAHN-koh / BEER-rah / jeh-LAH-toh",en:"Red/White wine / Beer / Gelato",zh:"紅酒/白酒／啤酒／冰淇淋"},
]},
{id:"biz",l:"Business",z:"商務",icon:"💼",items:[
{it:"Piacere di conoscerLa",p:"pyah-CHEH-reh dee koh-NOH-sher-lah",en:"Pleased to meet you (very formal)",zh:"非常榮幸認識您",n:"Use with CEOs during visits 對CEO使用"},
{it:"Grazie per il Suo tempo",p:"GRAH-tsee-eh pair eel SOO-oh TEM-poh",en:"Thank you for your time",zh:"感謝您撥出時間"},
{it:"È molto interessante",p:"eh MOL-toh een-teh-reh-SAHN-teh",en:"That's very interesting",zh:"非常有意思"},
{it:"Posso fare una domanda?",p:"POS-soh FAH-reh OO-nah doh-MAHN-dah",en:"May I ask a question?",zh:"我可以問個問題嗎？"},
{it:"Innovazione / Design / Sostenibilità",p:"een-noh-vah-TSYOH-neh / deh-ZIGN / sos-teh-nee-bee-lee-TAH",en:"Innovation / Design / Sustainability",zh:"創新／設計／永續性"},
{it:"Artigianato / Eccellenza",p:"ar-tee-jah-NAH-toh / eh-chel-LEN-tsah",en:"Craftsmanship / Excellence",zh:"工藝／卓越",n:"Core Italian values — especially at Pagani 義大利核心價值"},
{it:"Made in Italy / Fatto in Italia",p:"FAT-toh een ee-TAH-lyah",en:"Made in Italy",zh:"義大利製造",n:"More than a label — a brand strategy. Key at Casile. 品牌策略，Casile核心議題"},
]},
{id:"pron",l:"Pronunciation",z:"發音",icon:"📖",items:[
{it:"C+e/i → 'ch' (church)",p:"cena=CHEH-nah",en:"C before e/i = ch",zh:"C在e/i前發ch"},
{it:"C+a/o/u → 'k' (cat)",p:"casa=KAH-zah",en:"C before a/o/u = k",zh:"C在a/o/u前發k"},
{it:"G+e/i → 'j' (judge)",p:"gelato=jeh-LAH-toh",en:"G before e/i = j",zh:"G在e/i前發j"},
{it:"GN → 'ny' (canyon)",p:"gnocchi=NYOH-kee",en:"GN = ny sound",zh:"GN發ny"},
{it:"GL+i → 'ly' (million)",p:"famiglia=fah-MEE-lyah",en:"GLI = ly sound",zh:"GLI發ly"},
{it:"Double consonants: hold longer",p:"penne ≠ pene!",en:"Doubled = longer sound (important!)",zh:"雙子音要拉長（很重要！）"},
{it:"H is always silent",p:"hotel=oh-TEL",en:"H = silent always",zh:"H永遠不發音"},
{it:"Stress: usually 2nd-to-last syllable",p:"ri-STOR-an-te",en:"Accent on accented vowels: città, caffè",zh:"重音通常在倒數第二音節"},
]},
];

const KEELEY=[
{type:"Profit Model 利潤模式",cat:"Config",co:"Ferrari (scarcity), Olive Hill (premium), Pagani (bespoke)"},
{type:"Network 網絡",cat:"Config",co:"Casile (ecosystem), EIIS (cross-institutional)"},
{type:"Structure 結構",cat:"Config",co:"SHAPE (Accenture), Fifth Beat (embedding)"},
{type:"Process 流程",cat:"Config",co:"Pagani (carbon fiber), Olive Hill (regenerative), Ferrari (racing→road)"},
{type:"Product Performance 表現",cat:"Offering",co:"Ferrari (engineering), Pagani (materials)"},
{type:"Product System 系統",cat:"Offering",co:"Ferrari (car+brand+racing), Casile (curation)"},
{type:"Service 服務",cat:"Experience",co:"Fifth Beat (consulting), SHAPE (public service)"},
{type:"Channel 通路",cat:"Experience",co:"Casile (intermediary), Olive Hill (DTC vs dist.)"},
{type:"Brand 品牌",cat:"Experience",co:"Ferrari (identity filter), Pagani (founder myth), Casile (Made in Italy)"},
{type:"Engagement 互動",cat:"Experience",co:"Ferrari (Fiorano theater), Pagani (co-creation), EIIS (learning)"},
];

// ===== MAIN APP =====
const MAIN_TABS=[
{id:"ov",l:"Overview",z:"總覽",icon:"📋"},
{id:"day",l:"Daily",z:"每日",icon:"📅"},
{id:"co",l:"Companies",z:"企業",icon:"🏢"},
{id:"ve",l:"Venues",z:"景點",icon:"🏛️"},
{id:"fw",l:"Frameworks",z:"架構",icon:"🧠"},
{id:"it",l:"Italiano",z:"義大利文",icon:"🇮🇹"},
{id:"info",l:"Info",z:"後勤/緊急",icon:"🧳"},
];

export default function App(){
const[tab,setTab]=useState("ov");
const[dayI,setDayI]=useState(3);
const[coI,setCoI]=useState("pagani");
const[veI,setVeI]=useState("duomo");
const[itI,setItI]=useState("ess");
const[fwI,setFwI]=useState("keeley");

const renderOv=()=>(
<div>
<SH t="Trip at a Glance" z="行程一覽" icon="🇮🇹" accent={C.grn}>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:10,marginBottom:16}}>
{[{l:"Duration",v:"10 Days",i:"📅"},{l:"Cities",v:"Milan → Rome",i:"🏙️"},{l:"Companies",v:"7 Visits",i:"🏢"},{l:"Trip ID",v:"227138",i:"🔖"}].map((x,i)=>(
<Card key={i} style={{textAlign:"center",padding:12}}><div style={{fontSize:20}}>{x.i}</div><div style={{fontSize:15,fontWeight:700}}>{x.v}</div><div style={{fontSize:11,color:C.dm}}>{x.l}</div></Card>
))}
</div>
</SH>
<SH t="Timeline" z="時間軸" icon="🗓️" accent={C.pur}>
{DAYS.map((d,i)=>{const star=d.t.includes("⭐");return(
<div key={i} style={{display:"flex",gap:8,padding:"7px 10px",borderRadius:8,marginBottom:3,background:star?C.hi:"transparent",alignItems:"center"}}>
<span style={{minWidth:65,fontSize:12,fontWeight:700,color:star?C.gold:C.dm}}>{d.d}</span>
<span style={{flex:1,fontSize:13,color:C.tx,fontWeight:500}}>{d.t}</span>
<B color={C.grn} s={{fontSize:10}}>{d.meals}</B>
<B color={d.attire.includes("Biz")?C.gold:C.dm} s={{fontSize:10,minWidth:55,textAlign:"center"}}>{d.attire}</B>
</div>)})}
</SH>
<SH t="Key Alerts" z="關鍵提醒" icon="⚠️" accent={C.red}>
{[
{i:"⏰",t:"3/2: 6:15 AM breakfast — earliest morning 全程最早"},
{i:"🧳",t:"3/3: Check out Milan 8:30 AM — pack night before 前晚打包"},
{i:"🥾",t:"3/5: Comfortable shoes + jacket — 10-min uphill 舒適鞋＋外套"},
{i:"🌅",t:"3/7: Early group 3:30 AM — boxed breakfast at desk 盒裝早餐"},
{i:"🛂",t:"Passport at both check-ins 兩間飯店需護照"},
{i:"💳",t:"Credit card per room at both hotels 每房需信用卡"},
{i:"🚇",t:"Rome transit: ROMA72H + ROMA24H via Stephanie 交通票"},
{i:"🏎️",t:"Ferrari production line RESTRICTED 生產線不開放"},
{i:"🏛️",t:"Rome tour: exterior only, no entrances. Whispers mandatory 僅外部"},
].map((a,i)=><div key={i} style={{display:"flex",gap:8,padding:"5px 8px",fontSize:12}}><span style={{fontSize:14}}>{a.i}</span><span style={{color:C.tx}}>{a.t}</span></div>)}
</SH>
</div>
);

const renderDay=()=>{const d=DAYS[dayI];return(
<div>
<SubTab tabs={DAYS.map((x,i)=>({id:i,icon:"",label:x.d,sub:x.z}))} sel={dayI} onSel={setDayI}/>
<Card style={{borderLeft:`4px solid ${C.ac}`}}>
<h3 style={{margin:"0 0 4px",fontSize:17,fontWeight:700}}>{d.d} — {d.t}</h3>
<div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:12}}>
<B color={C.grn}>🍽️ {d.meals}</B><B color={C.pur}>🏨 {d.hotel}</B><B color={C.gold}>👔 {d.attire}</B>
</div>
{d.sched.map((s,i)=><TB key={i} {...s}/>) }
</Card>
</div>)};

const renderCo=()=>{const c=COMPANIES.find(x=>x.id===coI);return(
<div>
<SubTab tabs={COMPANIES.map(x=>({id:x.id,icon:x.icon,label:x.name,sub:x.zh}))} sel={coI} onSel={setCoI}/>
<Card style={{borderLeft:`5px solid ${c.color}`}}>
<div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:8}}>
<div><span style={{fontSize:24}}>{c.icon}</span><h3 style={{margin:"2px 0",fontSize:18,fontWeight:800}}>{c.name}</h3><div style={{fontSize:13,color:C.mt}}>{c.zh}</div></div>
<div style={{display:"flex",flexDirection:"column",gap:3,alignItems:"flex-end"}}><B color={c.color}>{c.date}</B><B color={c.attire.includes("Biz")?C.gold:C.grn}>{c.attire}</B></div>
</div>
<div style={{marginTop:12,background:C.alt,borderRadius:8,padding:10}}>
<IR icon="📍" l="Address" v={c.addr}/><IR icon="🔗" l="Web" v={c.web}/><IR icon="🎤" l="Speaker" v={c.speaker}/>
</div>
</Card>
<SH t="Background" z="背景" icon="📋" accent={c.color}>
<Card>{c.bg.map((p,i)=><div key={i} style={{fontSize:12,lineHeight:1.6,color:C.tx,marginBottom:6,paddingBottom:5,borderBottom:`1px solid ${C.bd}`}}>{p}</div>)}</Card>
</SH>
<SH t="Analysis" z="學術分析" icon="🧠" accent={C.pur}>
<Card>{c.analysis.map((a,i)=><div key={i} style={{fontSize:12,lineHeight:1.6,color:C.tx,marginBottom:8,paddingLeft:8,borderLeft:`3px solid ${c.color}`}}>{a}</div>)}</Card>
</SH>
<SH t="Questions to Ask" z="值得提問" icon="❓" accent={C.gold}>
{c.questions.map((q,i)=><div key={i} style={{padding:"7px 11px",marginBottom:4,borderRadius:8,background:C.alt,fontSize:12,borderLeft:`3px solid ${C.ac}`,color:C.tx}}>{q}</div>)}
</SH>
</div>)};

const renderVe=()=>{const v=VENUES.find(x=>x.id===veI);return(
<div>
<SubTab tabs={VENUES.map(x=>({id:x.id,icon:x.icon,label:x.name.split("(")[0].split(" ").slice(0,2).join(" "),sub:x.zh}))} sel={veI} onSel={setVeI}/>
<Card style={{borderLeft:`5px solid ${v.color}`}}>
<div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:8}}>
<div><span style={{fontSize:24}}>{v.icon}</span><h3 style={{margin:"2px 0",fontSize:18,fontWeight:800}}>{v.name}</h3><div style={{fontSize:13,color:C.mt}}>{v.zh}</div></div>
<B color={v.color}>{v.date}</B>
</div>
<div style={{marginTop:10,background:C.alt,borderRadius:8,padding:10}}><IR icon="📍" l="Address" v={v.addr}/></div>
</Card>
<SH t="History & Facts" z="歷史與數據" icon="📜" accent={v.color}>
<Card>{v.facts.map((f,i)=><div key={i} style={{fontSize:12,lineHeight:1.65,color:C.tx,marginBottom:8,paddingBottom:6,borderBottom:`1px solid ${C.bd}`}}>{f}</div>)}</Card>
</SH>
<SH t="Tips & Connections" z="提示與學術連結" icon="💡" accent={C.gold}>
<Card style={{background:C.hi,borderLeft:`3px solid ${C.gold}`}}>{v.tips.map((t,i)=><div key={i} style={{fontSize:12,color:C.tx,marginBottom:6,lineHeight:1.6}}>{t}</div>)}</Card>
</SH>
</div>)};

const renderFw=()=> (
<div>
<SubTab tabs={[{id:"keeley",icon:"🔟",label:"Keeley",sub:"十大創新"},{id:"verganti",icon:"💡",label:"Verganti",sub:"設計驅動"},{id:"filter",icon:"🔍",label:"Identity Filter",sub:"身份過濾器"}]} sel={fwI} onSel={setFwI}/>
{fwI==="keeley"&&<SH t="Keeley's Ten Types" z="十大創新類型" icon="🔟" accent={C.ac}>
{KEELEY.map((k,i)=><div key={i} style={{padding:"7px 10px",marginBottom:3,borderRadius:8,background:i%2?C.alt:"transparent",fontSize:12}}>
<div style={{display:"flex",gap:8,alignItems:"center",marginBottom:2}}>
<span style={{fontWeight:700,color:C.tx,minWidth:180}}>{k.type}</span>
<B color={k.cat==="Config"?C.ac:k.cat==="Offering"?C.grn:C.pur}>{k.cat}</B>
</div><div style={{color:C.mt,paddingLeft:4}}>{k.co}</div>
</div>)}
</SH>}
{fwI==="verganti"&&<SH t="Design-Driven Innovation" z="設計驅動創新" icon="💡" accent={C.gold}>
<Card style={{marginBottom:12}}>
<div style={{fontSize:12,color:C.mt,lineHeight:1.7}}>
<strong style={{color:C.tx}}>Three modes 三種模式：</strong><br/>
🔧 <strong>Technology-push 科技推動</strong> — new tech capabilities 新技術驅動<br/>
📊 <strong>Market-pull 市場拉動</strong> — customer needs 需求驅動<br/>
🎨 <strong>Design-driven 設計驅動</strong> — new <em>meanings</em> 提出新意義
</div>
</Card>
{[
{co:"Pagani",c:C.red,t:"Purest case. Horacio = visionary interpreter. Carbon fiber meaning (art+science) = the innovation. 最純粹案例。"},
{co:"Ferrari",c:C.red,t:"Design-driven core, facing tech-push (electrification). Identity filter = tension mechanism. 面臨電動化張力。"},
{co:"Casile",c:C.pnk,t:"'Meaning intermediary' — manages meaning layer for designers. 意義中介者。"},
{co:"EIIS",c:C.grn,t:"Changing meaning of sustainability: compliance → strategic opportunity. 重構永續意義。"},
{co:"SHAPE",c:C.teal,t:"Design-driven logic in public services — redefining what gov't services mean. 重定義公共服務意義。"},
{co:"Olive Hill",c:C.org,t:"Meaning in commodity market. 'Hand-harvested organic from Sabina' = meaning proposition. 大宗商品中的意義。"},
{co:"Fifth Beat",c:C.pur,t:"Meta-case: helps orgs become design-driven. Methodology IS the innovation. 方法論即創新。"},
].map((x,i)=><div key={i} style={{display:"flex",gap:10,padding:"7px 10px",marginBottom:5,borderRadius:8,borderLeft:`3px solid ${x.c}`,background:C.card,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"}}>
<div style={{minWidth:80,fontWeight:700,fontSize:12,color:x.c}}>{x.co}</div>
<div style={{flex:1,fontSize:12,color:C.tx,lineHeight:1.5}}>{x.t}</div>
</div>)}
</SH>}
{fwI==="filter"&&<SH t="Identity Filter — Cross-Company" z="身份過濾器跨企業" icon="🔍" accent={C.red}>
<Card style={{marginBottom:12}}><div style={{fontSize:12,color:C.mt,lineHeight:1.6}}>How a company evaluates new tech/trends against core identity → adopt, adapt, or reject.<br/>企業如何以核心身份評估新技術/趨勢→採納、調整或拒絕。</div></Card>
{[
{co:"Pagani",c:C.red,t:"Horacio IS the filter. Key Q: what happens when founder steps back? Horacio本人即過濾器。"},
{co:"Ferrari",c:C.red,t:"Documented in case. Probe: how is electric Ferrari being filtered? 電動法拉利如何被過濾？"},
{co:"Casile",c:C.pnk,t:"50+ years of curation IS the filter. Ask: how decide which brands fit? 策展經驗即過濾器。"},
{co:"EIIS",c:C.grn,t:"Filter: genuine sustainability or performative? 真永續還是做做樣子？"},
{co:"Olive Hill",c:C.org,t:"Founders' personal values = filter. Ask what they turned down. 個人價值觀即過濾器。"},
{co:"Fifth Beat",c:C.pur,t:"Two levels: own brand + helping clients build their own filters. 兩層過濾器。"},
].map((x,i)=><div key={i} style={{display:"flex",gap:10,padding:"7px 10px",marginBottom:5,borderRadius:8,borderLeft:`3px solid ${x.c}`,background:C.card}}>
<div style={{minWidth:80,fontWeight:700,fontSize:12,color:x.c}}>{x.co}</div>
<div style={{flex:1,fontSize:12,color:C.tx,lineHeight:1.5}}>{x.t}</div>
</div>)}
</SH>}
</div>);

const renderIt=()=>{const cat=IT_CATS.find(x=>x.id===itI);return(
<div>
<SubTab tabs={IT_CATS.map(x=>({id:x.id,icon:x.icon,label:x.l,sub:x.z}))} sel={itI} onSel={setItI}/>
<Card>
<div style={{fontSize:11,color:C.dm,marginBottom:10,display:"flex",gap:12}}><span><strong style={{color:C.tx}}>Bold</strong>=Italian</span><span><em style={{color:C.pur}}>Purple</em>=Pronunciation</span><span style={{color:C.mt}}>Gray=EN+中文</span></div>
{cat.items.map((p,i)=><div key={i} style={{padding:"7px 0",borderBottom:`1px solid ${C.bd}`}}>
<div style={{display:"flex",gap:8,alignItems:"baseline",flexWrap:"wrap"}}>
<span style={{fontSize:14,fontWeight:700,color:C.tx}}>{p.it}</span>
<span style={{fontSize:11,color:C.pur,fontStyle:"italic"}}>/{p.p}/</span>
</div>
<div style={{fontSize:12,color:C.mt,marginTop:2}}>{p.en}</div>
<div style={{fontSize:12,color:C.dm}}>{p.zh}</div>
{p.n&&<div style={{fontSize:11,color:C.org,marginTop:2,fontStyle:"italic"}}>💡 {p.n}</div>}
</div>)}
</Card>
{itI==="ess"&&<Card style={{marginTop:12,background:C.hi,borderLeft:`3px solid ${C.gold}`}}>
<div style={{fontSize:13,fontWeight:700,color:C.gold,marginBottom:6}}>💡 Cultural Tips 文化提醒</div>
<div style={{fontSize:12,color:C.tx,lineHeight:1.7}}>
<strong>Greetings:</strong> Always say Buongiorno when entering shops/restaurants. 進店務必問候。<br/>
<strong>Formality:</strong> Use Lei (formal you), not tu. All phrases here are formal. 本手冊均為正式用法。<br/>
<strong>Coffee:</strong> Espresso at bar = cheaper. Cappuccino after 11 AM = tourist. 站著喝便宜。11點後不點卡布。<br/>
<strong>Tipping:</strong> Not expected. Coperto is standard. Rounding up appreciated but not required. 不需小費。<br/>
<strong>Meals:</strong> Lunch 12:30-2:30, Dinner 7:30-10:00. Restaurants close between services. 用餐時段。
</div>
</Card>}
</div>)};

const renderInfo=()=>(
<div>
<SH t="Emergency Contacts" z="緊急聯絡" icon="🚨" accent={C.red}>
<Card>
{[{i:"📞",l:"WorldAssist 24h",v:"+1-703-933-6143"},{i:"💬",l:"WhatsApp 24h",v:"+1-540-500-1987"},{i:"🔖",l:"Trip ID",v:"227138"},{i:"👤",l:"Account Mgr",v:"Jennifer Seymour · 434-951-5938"},{i:"🇮🇹",l:"Rome Assistant",v:"Christian De Cesare · +39 392 4426115"}].map((c,i)=><div key={i} style={{padding:"8px 0",borderBottom:`1px solid ${C.bd}`}}><IR icon={c.i} l={c.l} v={c.v}/></div>)}
</Card>
</SH>
<SH t="Hotels" z="住宿" icon="🏨" accent={C.pur}>
{[{n:"Starhotels E.C.H.O. — Milan",a:"Viale Andrea Doria 4",d:"Feb 27–Mar 3 (3 nights)",ci:"Feb 27/28",co:"Mar 3, 8:30 AM",note:"Pre-night pre-paid. Breakfast: ground floor."},
{n:"Starhotels Michelangelo — Rome",a:"14 Via della Stazione di San Pietro",d:"Mar 3–7 (4 nights)",ci:"Mar 3, 8:00 PM",co:"Mar 7, 11:00 AM",note:"Transit passes: ROMA72H + ROMA24H via Stephanie Adams."}
].map((h,i)=><Card key={i}><h4 style={{margin:"0 0 6px",fontSize:14,fontWeight:700}}>{h.n}</h4>
<IR icon="📍" l="Address" v={h.a}/><IR icon="📅" l="Dates" v={h.d}/><IR icon="🔑" l="Check-in" v={h.ci}/><IR icon="🚪" l="Check-out" v={h.co}/>
<div style={{marginTop:6,fontSize:11,color:C.dm,padding:"5px 8px",background:C.alt,borderRadius:6}}>📋 Passport + credit card required. {h.note}</div>
</Card>)}
</SH>
<SH t="Train" z="火車" icon="🚄" accent={C.teal}>
<Card><h4 style={{margin:"0 0 6px",fontSize:14,fontWeight:700}}>Frecciarossa 9465 — Milan → Rome</h4>
<IR icon="📅" l="Date" v="Mar 3, 4:00 PM CET (3 hrs)"/><IR icon="🚃" l="Coach" v="#5"/><IR icon="💺" l="Seats" v="6A-13C (all reserved)"/>
</Card>
</SH>
<SH t="Dress Code" z="服裝" icon="👔" accent={C.gold}>
<Card>{[["3/2","Pagani & Ferrari","Casual",C.grn],["3/3","Casile e Casile","Biz Casual",C.gold],["3/4","EIIS & SHAPE","Biz Casual",C.gold],["3/5","Olive Hill","Casual+shoes+jacket",C.org],["3/6","Fifth Beat","Biz Casual",C.gold]].map(([d,c,a,col],i)=>
<div key={i} style={{display:"grid",gridTemplateColumns:"70px 1fr 1fr",gap:8,padding:"5px 0",borderBottom:`1px solid ${C.bd}`,fontSize:12,alignItems:"center"}}>
<span style={{fontWeight:700}}>{d}</span><span style={{color:C.mt}}>{c}</span><B color={col}>{a}</B>
</div>)}</Card>
</SH>
<SH t="Speakers & Staff" z="講者與工作人員" icon="👤" accent={C.ac}>
<Card>
{[["Francesco Casile","CEO","Casile","3/3"],["Andrea Geremicca","Speaker","EIIS","3/4"],["Ivan Cardaci","CEO","SHAPE","3/4"],["Emma & Scott Notman","Owners","Olive Hill","3/5"],["Raffaele Boiano","CEO","Fifth Beat","3/6"]].map(([n,t,c,d],i)=>
<div key={i} style={{display:"grid",gridTemplateColumns:"1fr 80px 90px 40px",gap:6,padding:"4px 0",borderBottom:`1px solid ${C.bd}`,fontSize:12,alignItems:"center"}}>
<span style={{fontWeight:600,color:C.tx}}>{n}</span><span style={{color:C.dm}}>{t}</span><span style={{color:C.mt}}>{c}</span><B color={C.ac}>{d}</B>
</div>)}
<div style={{marginTop:10,fontSize:11,color:C.dm,borderTop:`1px solid ${C.bd}`,paddingTop:6}}>
<strong>Staff:</strong> Jack & Stephanie Adams (leaders, from 2/28) · Carlotta (Rome guide, 3/6) · Christian De Cesare ♀ (Rome assistant, from 3/3) +39 392 4426115
</div>
</Card>
</SH>
<SH t="Medical & Links" z="醫療與連結" icon="🏥" accent={C.grn}>
<Card>
<div style={{fontSize:12,color:C.tx,lineHeight:1.7}}>
• Medical: inform leaders + WorldAssist. Doctors on Call via WorldAssist. AXA Behavioral Health Hotline.<br/>
• 24h hospitals in Milan & Rome. Pharmacy: green cross sign.<br/>
• <strong>Emergency: 112</strong> (Europe-wide)<br/><br/>
<strong>Links:</strong> starhotels.com · osteriamammarosa.it · duomomilano.it · frescocimmino.it · casileecasile.it · eiis.eu · intelleraconsulting.com · fifthbeat.com · olivehillsabina.com · tavernangelica.wixsite.com/taverna-angelica
</div>
</Card>
</SH>
</div>);

const renders={ov:renderOv,day:renderDay,co:renderCo,ve:renderVe,fw:renderFw,it:renderIt,info:renderInfo};

return(
<div style={{background:C.bg,minHeight:"100vh",color:C.tx,fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif"}}>
<div style={{background:"linear-gradient(135deg,#1e40af 0%,#7c3aed 100%)",padding:"18px 16px 12px"}}>
<div style={{display:"flex",alignItems:"center",gap:10}}>
<span style={{fontSize:26}}>🇮🇹</span>
<div><h1 style={{margin:0,fontSize:17,fontWeight:800,color:"#fff",letterSpacing:-.3}}>INTB 6230 Italy Field Study</h1>
<div style={{fontSize:11,color:"#e2e8f0"}}>完整指南 Complete Guide | Feb 27 – Mar 8, 2026</div></div>
</div>
</div>
<div style={{display:"flex",gap:2,padding:"6px 6px 0",overflowX:"auto",borderBottom:`1px solid ${C.bd}`,background:C.alt}}>
{MAIN_TABS.map(t=>(
<button key={t.id} onClick={()=>setTab(t.id)} style={{padding:"7px 10px",borderRadius:"8px 8px 0 0",border:"none",cursor:"pointer",fontSize:12,fontWeight:tab===t.id?700:400,background:tab===t.id?C.card:"transparent",color:tab===t.id?C.tx:C.dm,borderBottom:tab===t.id?`2px solid ${C.ac}`:"2px solid transparent",whiteSpace:"nowrap",transition:"all .15s"}}>
{t.icon} {t.l}<div style={{fontSize:9,opacity:.6}}>{t.z}</div>
</button>))}
</div>
<div style={{padding:14,maxWidth:780,margin:"0 auto"}}>{renders[tab]()}</div>
</div>);
}
