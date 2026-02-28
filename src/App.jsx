const { useState } = React;

const C = {
  bg: "#faf6f1",
  card: "#ffffff",
  cardAlt: "#f5f0ea",
  accent: "#2563eb",
  accentLight: "#3b82f6",
  gold: "#b45309",
  green: "#047857",
  red: "#b91c1c",
  orange: "#c2410c",
  purple: "#7c3aed",
  pink: "#be185d",
  teal: "#0d9488",
  text: "#1e293b",
  textMuted: "#475569",
  textDim: "#94a3b8",
  border: "#e2ddd7",
  highlight: "#fffbeb",
};

const Badge = ({ children, color = C.accent, style = {} }) => (
  <span style={{ display: "inline-block", padding: "2px 10px", borderRadius: 9999, fontSize: 11, fontWeight: 600, background: color + "18", color, letterSpacing: 0.3, ...style }}>{children}</span>
);

const Section = ({ title, titleZh, icon, children, accent = C.accent }) => (
  <div style={{ marginBottom: 28 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, borderBottom: `2px solid ${accent}44`, paddingBottom: 8 }}>
      <span style={{ fontSize: 20 }}>{icon}</span>
      <div>
        <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: C.text }}>{title}</h3>
        {titleZh && <div style={{ fontSize: 13, color: C.textMuted, marginTop: 1 }}>{titleZh}</div>}
      </div>
    </div>
    {children}
  </div>
);

const InfoRow = ({ label, value, icon }) => (
  <div style={{ display: "flex", gap: 8, marginBottom: 6, fontSize: 13 }}>
    {icon && <span style={{ width: 18, textAlign: "center" }}>{icon}</span>}
    <span style={{ color: C.textMuted, minWidth: 100 }}>{label}</span>
    <span style={{ color: C.text, fontWeight: 500, flex: 1 }}>{value}</span>
  </div>
);

const TimeBlock = ({ time, activity, activityZh, details, detailsZh, highlight }) => (
  <div style={{ display: "flex", gap: 12, marginBottom: 10, padding: "8px 12px", borderRadius: 8, background: highlight ? C.highlight : "transparent", borderLeft: highlight ? `3px solid ${C.gold}` : `3px solid ${C.border}` }}>
    <div style={{ minWidth: 70, fontSize: 12, fontWeight: 600, color: highlight ? C.gold : C.accent, paddingTop: 1 }}>{time}</div>
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{activity}</div>
      {activityZh && <div style={{ fontSize: 12, color: C.textMuted }}>{activityZh}</div>}
      {details && <div style={{ fontSize: 12, color: C.textDim, marginTop: 3, lineHeight: 1.5 }}>{details}</div>}
      {detailsZh && <div style={{ fontSize: 12, color: C.textDim, lineHeight: 1.5 }}>{detailsZh}</div>}
    </div>
  </div>
);

const CompanyCard = ({ name, nameZh, date, speaker, speakerTitle, attire, agenda, agendaZh, bg, website, linkedin }) => (
  <div style={{ background: C.card, borderRadius: 12, padding: 16, marginBottom: 12, borderLeft: `4px solid ${bg || C.accent}`, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
      <div>
        <h4 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: C.text }}>{name}</h4>
        {nameZh && <div style={{ fontSize: 12, color: C.textMuted }}>{nameZh}</div>}
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        <Badge color={C.accent}>{date}</Badge>
        <Badge color={attire.includes("Business") || attire.includes("商務") ? C.gold : C.green}>{attire}</Badge>
      </div>
    </div>
    {speaker && <div style={{ marginTop: 8, fontSize: 12 }}><span style={{ color: C.textDim }}>Speaker 講者: </span><span style={{ color: C.text, fontWeight: 600 }}>{speaker}</span>{speakerTitle && <span style={{ color: C.textDim }}> · {speakerTitle}</span>}</div>}
    {website && <div style={{ fontSize: 11, marginTop: 4 }}><span style={{ color: C.textDim }}>🔗 </span><span style={{ color: C.accent }}>{website}</span></div>}
    {linkedin && <div style={{ fontSize: 11 }}><span style={{ color: C.textDim }}>💼 </span><span style={{ color: C.accent }}>{linkedin}</span></div>}
    {agenda && (
      <div style={{ marginTop: 10 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: C.textDim, marginBottom: 4 }}>AGENDA 議程</div>
        {agenda.map((item, i) => (
          <div key={i} style={{ fontSize: 12, color: C.textMuted, padding: "2px 0", display: "flex", gap: 6 }}>
            <span style={{ color: C.accent }}>›</span>
            <span>{item}</span>
            {agendaZh && agendaZh[i] && <span style={{ color: C.textDim }}>| {agendaZh[i]}</span>}
          </div>
        ))}
      </div>
    )}
  </div>
);

const TABS = [
  { id: "overview", label: "Overview", labelZh: "總覽", icon: "📋" },
  { id: "daily", label: "Daily", labelZh: "每日行程", icon: "📅" },
  { id: "companies", label: "Companies", labelZh: "企業參訪", icon: "🏢" },
  { id: "frameworks", label: "Frameworks", labelZh: "理論架構", icon: "🧠" },
  { id: "logistics", label: "Logistics", labelZh: "後勤資訊", icon: "🧳" },
  { id: "emergency", label: "Emergency", labelZh: "緊急資訊", icon: "🚨" },
];

const DAY_TABS = [
  { id: 0, label: "2/27 Fri", short: "出發" },
  { id: 1, label: "2/28 Sat", short: "抵達米蘭" },
  { id: 2, label: "3/1 Sun", short: "米蘭導覽" },
  { id: 3, label: "3/2 Mon", short: "Pagani+Ferrari" },
  { id: 4, label: "3/3 Tue", short: "Casile→羅馬" },
  { id: 5, label: "3/4 Wed", short: "EIIS+SHAPE" },
  { id: 6, label: "3/5 Thu", short: "Olive Hill" },
  { id: 7, label: "3/6 Fri", short: "Fifth Beat" },
  { id: 8, label: "3/7 Sat", short: "離境" },
];

function App() {
  const [tab, setTab] = useState("overview");
  const [dayIdx, setDayIdx] = useState(3);

  const renderOverview = () => (
    <div>
      <Section title="Trip at a Glance" titleZh="行程一覽" icon="🇮🇹" accent={C.green}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 10, marginBottom: 16 }}>
          {[
            { label: "Duration 天數", value: "10 Days", icon: "📅" },
            { label: "Cities 城市", value: "Milan → Rome", icon: "🏙️" },
            { label: "Companies 企業", value: "7 Visits", icon: "🏢" },
            { label: "Trip ID", value: "227138", icon: "🔖" },
          ].map((item, i) => (
            <div key={i} style={{ background: C.card, borderRadius: 10, padding: 14, textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: 22, marginBottom: 4 }}>{item.icon}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: C.text }}>{item.value}</div>
              <div style={{ fontSize: 11, color: C.textDim }}>{item.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Timeline Overview" titleZh="時間軸總覽" icon="🗓️" accent={C.purple}>
        {[
          { date: "2/27 Fri", en: "Depart USA", zh: "出發美國", meals: "—", attire: "—", color: C.textDim },
          { date: "2/28 Sat", en: "Arrive Milan · Welcome Dinner", zh: "抵達米蘭·歡迎晚宴", meals: "D", attire: "—", color: C.accent },
          { date: "3/1 Sun", en: "Milan Walking Tour · Duomo", zh: "米蘭步行導覽·主教座堂", meals: "B L", attire: "Casual", color: C.accent },
          { date: "3/2 Mon", en: "⭐ Pagani + Ferrari (Motor Valley)", zh: "⭐ 帕加尼＋法拉利（汽車谷）", meals: "B L", attire: "Casual", color: C.gold },
          { date: "3/3 Tue", en: "⭐ Casile e Casile → Train to Rome", zh: "⭐ Casile e Casile → 高鐵至羅馬", meals: "B", attire: "Biz Casual", color: C.gold },
          { date: "3/4 Wed", en: "⭐ EIIS + Intellera SHAPE", zh: "⭐ EIIS＋Intellera SHAPE", meals: "B", attire: "Biz Casual", color: C.gold },
          { date: "3/5 Thu", en: "⭐ Olive Hill Sabina", zh: "⭐ 橄欖山莊", meals: "B", attire: "Casual+Jacket", color: C.gold },
          { date: "3/6 Fri", en: "⭐ Rome Tour + Fifth Beat + Farewell", zh: "⭐ 羅馬導覽＋Fifth Beat＋惜別晚宴", meals: "B D", attire: "Biz Casual", color: C.gold },
          { date: "3/7 Sat", en: "Depart Rome", zh: "離開羅馬", meals: "B", attire: "—", color: C.textDim },
        ].map((d, i) => (
          <div key={i} style={{ display: "flex", gap: 10, padding: "8px 10px", borderRadius: 8, marginBottom: 4, background: d.en.includes("⭐") ? C.highlight : "transparent", alignItems: "center" }}>
            <span style={{ minWidth: 70, fontSize: 12, fontWeight: 700, color: d.color }}>{d.date}</span>
            <div style={{ flex: 1 }}>
              <span style={{ fontSize: 13, color: C.text, fontWeight: 500 }}>{d.en}</span>
              <span style={{ fontSize: 12, color: C.textDim, marginLeft: 8 }}>{d.zh}</span>
            </div>
            <Badge color={C.green} style={{ fontSize: 10 }}>{d.meals}</Badge>
            <Badge color={d.attire.includes("Biz") ? C.gold : C.textDim} style={{ fontSize: 10, minWidth: 60, textAlign: "center" }}>{d.attire}</Badge>
          </div>
        ))}
      </Section>

      <Section title="Meal Coverage Summary" titleZh="餐食涵蓋總覽" icon="🍽️" accent={C.orange}>
        <div style={{ background: C.card, borderRadius: 10, padding: 14, fontSize: 13, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "80px 1fr 1fr 1fr", gap: 4, marginBottom: 8, fontWeight: 700, color: C.textDim, fontSize: 11 }}>
            <span>DATE</span><span>BREAKFAST 早餐</span><span>LUNCH 午餐</span><span>DINNER 晚餐</span>
          </div>
          {[
            ["2/28", false, false, true],
            ["3/1", true, true, false],
            ["3/2", true, true, false],
            ["3/3", true, false, false],
            ["3/4", true, false, false],
            ["3/5", true, false, false],
            ["3/6", true, false, true],
            ["3/7", true, false, false],
          ].map(([d, b, l, din], i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "80px 1fr 1fr 1fr", gap: 4, padding: "3px 0", borderTop: `1px solid ${C.border}` }}>
              <span style={{ fontWeight: 600, color: C.text, fontSize: 12 }}>{d}</span>
              {[b, l, din].map((v, j) => (
                <span key={j} style={{ color: v ? C.green : C.textDim, fontSize: 12 }}>{v ? "✅ Included 已含" : "— On own 自理"}</span>
              ))}
            </div>
          ))}
          <div style={{ marginTop: 10, padding: "8px 10px", background: C.orange + "12", borderRadius: 6, fontSize: 12, color: C.orange }}>
            ⚠️ 約需自行安排9頓正餐 | ~9 meals to arrange on your own
          </div>
        </div>
      </Section>

      <Section title="Key Alerts" titleZh="關鍵提醒" icon="⚠️" accent={C.red}>
        {[
          { icon: "⏰", text: "3/2 Mon: 6:15 AM breakfast — earliest morning of the trip", zh: "3/2（一）：6:15 AM 早餐，全程最早起日" },
          { icon: "🧳", text: "3/3 Tue: Check out Milan 8:30 AM — pack night before, no return", zh: "3/3（二）：8:30 AM 退房米蘭，前晚打包，不會返回" },
          { icon: "🥾", text: "3/5 Thu: Comfortable shoes + jacket — 10-min uphill walk", zh: "3/5（四）：舒適鞋＋外套，上坡步行10分鐘" },
          { icon: "🌅", text: "3/7 Sat early group: 3:30 AM lobby — boxed breakfast at front desk", zh: "3/7（六）早班：3:30 AM 大廳集合，前臺領盒裝早餐" },
          { icon: "🛂", text: "Passport needed at both hotel check-ins for scanning", zh: "兩間飯店入住皆需護照掃描" },
          { icon: "💳", text: "Credit card required per room at both hotels for incidentals", zh: "每房需一張信用卡作為雜費擔保" },
          { icon: "🚇", text: "Rome transit: ROMA72H + ROMA24H via Stephanie Adams", zh: "羅馬交通票：由 Stephanie Adams 分發" },
          { icon: "🏎️", text: "Ferrari production line restricted — museum + Fiorano panoramic only", zh: "法拉利生產線不開放，僅博物館及賽道全景" },
          { icon: "🏛️", text: "Rome walking tour: exterior only, no entrances. Whispers mandatory.", zh: "羅馬導覽：僅外部參觀，不含門票。耳機強制。" },
          { icon: "👥", text: "Ferrari museum tour: group splits into 2, each with a site guide", zh: "法拉利導覽分2組進行" },
        ].map((a, i) => (
          <div key={i} style={{ display: "flex", gap: 10, padding: "6px 10px", marginBottom: 4, fontSize: 12, alignItems: "flex-start" }}>
            <span style={{ fontSize: 16 }}>{a.icon}</span>
            <div><span style={{ color: C.text }}>{a.text}</span><br /><span style={{ color: C.textDim }}>{a.zh}</span></div>
          </div>
        ))}
      </Section>
    </div>
  );

  const renderDaily = () => {
    const days = [
      { title: "Depart USA 出發美國", meals: "None 無", hotel: "Starhotels E.C.H.O. (pre-night)", attire: "—",
        schedule: [
          { time: "—", activity: "Depart on self-booked flights", activityZh: "搭乘自行訂購航班", details: "Early check-in confirmed for pre-night at Starhotels E.C.H.O. Pre-paid; incidentals at own expense.", detailsZh: "提前一晚入住已確認並預付，雜費自理。" },
        ]
      },
      { title: "Arrive Milan 抵達米蘭", meals: "Dinner 晚餐", hotel: "Starhotels E.C.H.O. (1/3)", attire: "Casual",
        schedule: [
          { time: "4:00 PM", activity: "Hotel check-in", activityZh: "飯店入住", details: "Starhotels E.C.H.O., Viale Andrea Doria 4. Passport + credit card. Store luggage if room not ready.", detailsZh: "需護照及信用卡。房間未備妥可寄放行李。" },
          { time: "6:00 PM", activity: "Meet in lobby with Jack & Stephanie", activityZh: "與 Jack 及 Stephanie 在大廳會合" },
          { time: "6:30 PM", activity: "Depart on foot (12 min walk)", activityZh: "步行出發（12分鐘）" },
          { time: "7:00 PM", activity: "Welcome Dinner — Osteria Mamma Rosa (2 hrs)", activityZh: "歡迎晚宴 — Osteria Mamma Rosa（2小時）", highlight: true, details: "Menu: Aperitif → Cured meats, fried veg, buffalo mozzarella → Penne ragù + Risotto (half each) → Beef w/ thyme + roast potatoes → Tiramisù. Drinks: water, coffee, digestif. All dietary restrictions accommodated.", detailsZh: "菜單：開胃酒→醃肉、炸蔬菜、水牛莫扎瑞拉→筆管麵肉醬＋燉飯（各半份）→百里香牛肉片佐烤馬鈴薯→提拉米蘇。飲品：水、咖啡、餐後酒。所有飲食限制皆可配合。" },
        ]
      },
      { title: "Milan Walking Tour 米蘭步行導覽", meals: "Breakfast, Lunch 早餐、午餐", hotel: "Starhotels E.C.H.O. (2/3)", attire: "Comfortable shoes 舒適鞋",
        schedule: [
          { time: "7:00 AM", activity: "Breakfast at hotel (ground floor)", activityZh: "飯店早餐（一樓）" },
          { time: "9:45 AM", activity: "Meet guide, depart on foot", activityZh: "與嚮導會合，步行出發" },
          { time: "10:00 AM", activity: "Milan City Tour (1.5 hrs)", activityZh: "米蘭市區導覽（1.5小時）", details: "Duomo, La Scala, Vittorio Emanuele Gallery. Entrance to Duomo/La Scala + whispers included.", detailsZh: "主教座堂、斯卡拉歌劇院、維托里奧·艾曼紐二世拱廊。含入場及耳機導覽。" },
          { time: "11:30 AM", activity: "Duomo Terraces by lift", activityZh: "搭電梯至主教座堂屋頂露臺", highlight: true },
          { time: "12:30 PM", activity: "Cathedral interior tour", activityZh: "主教座堂內部導覽" },
          { time: "1:30 PM", activity: "Group Lunch — Fresco e Cimmino (1.5 hrs)", activityZh: "團體午餐 — Fresco e Cimmino（1.5小時）", details: "Eggplant Parmigiana → Paccheri alla Nerano (zucchini & provolone) → Water", detailsZh: "茄子千層→奈拉諾風味帕凱里管麵（櫛瓜與普沃洛尼起司）→水" },
          { time: "PM", activity: "Free time — dinner on own", activityZh: "自由活動，晚餐自理" },
        ]
      },
      { title: "⭐ Motor Valley — Pagani + Ferrari 汽車谷", meals: "Breakfast, Lunch 早餐、午餐", hotel: "Starhotels E.C.H.O. (3/3)", attire: "Casual 休閒",
        schedule: [
          { time: "6:15 AM", activity: "Breakfast (ground floor) ⚠️ EARLY", activityZh: "早餐（一樓）⚠️ 全程最早" },
          { time: "7:00 AM", activity: "Depart by coach (2.5 hr drive)", activityZh: "搭遊覽車出發（2.5小時車程）", details: "Destination: San Cesario sul Panaro" },
          { time: "10:00 AM", activity: "⭐ PAGANI Factory Tour (1 hr)", activityZh: "⭐ 帕加尼工廠參觀（1小時）", highlight: true, details: "Museum & Atelier guided tour. Horacio Pagani's design philosophy. Artisans handcrafting carbon fiber. Huayra/Utopia assembly.", detailsZh: "博物館與工坊導覽。Horacio Pagani 設計理念。工匠手工製作碳纖維。Huayra/Utopia 組裝。" },
          { time: "11:45 AM", activity: "Group Lunch in Modena — Ristorante il Fantino (1.5 hrs)", activityZh: "摩德納團體午餐 — il Fantino（1.5小時）", details: "Fried gnocco & tigelle w/ cold cuts → Gramigna pasta w/ sausage ragù (or Tortelli Zucca) → Pork ribs in Lambrusco (or cheese platter) → Water & soft drinks", detailsZh: "炸麵糰佐冷切肉盤→香腸肉醬小彎管麵（或南瓜餡餃）→紅酒燉豬肋排（或起司拼盤）→水及軟飲" },
          { time: "1:30 PM", activity: "⭐ FERRARI Museum & Factory Grounds (2 hrs)", activityZh: "⭐ 法拉利博物館與工廠園區（2小時）", highlight: true, details: "1:30 PM free museum access. 2:00 PM guided tour — split into 2 groups. Historic F1 cars, prototypes, interactive exhibits. Fiorano Track panoramic tour. ⚠️ Production line RESTRICTED.", detailsZh: "1:30 自由參觀。2:00 導覽開始，分2組各有駐場導覽。歷史F1賽車、原型車、互動展覽。菲奧拉諾賽道全景導覽。⚠️ 生產線不開放。" },
          { time: "4:00 PM", activity: "Coach back to Milan (3 hrs) — dinner on own", activityZh: "搭遊覽車返回米蘭（3小時），晚餐自理" },
        ]
      },
      { title: "⭐ Casile e Casile → Rome 轉往羅馬", meals: "Breakfast only 僅早餐", hotel: "→ Starhotels Michelangelo, Rome (1/4)", attire: "Business Casual 商務休閒",
        schedule: [
          { time: "6:30 AM", activity: "Breakfast (ground floor)", activityZh: "早餐（一樓）" },
          { time: "8:30 AM", activity: "⚠️ CHECK OUT Milan hotel", activityZh: "⚠️ 退房米蘭飯店", details: "Return key, settle incidentals, LOAD LUGGAGE ON COACH. Pack night before!", detailsZh: "歸還房卡、結清雜費、行李上車。前晚務必打包！" },
          { time: "9:00 AM", activity: "Depart by coach", activityZh: "搭遊覽車出發" },
          { time: "10:00 AM", activity: "⭐ CASILE E CASILE (2.5 hrs)", activityZh: "⭐ Casile e Casile（2.5小時）", highlight: true, details: "Speaker: Francesco Casile, CEO (50+ yrs). Heritage & positioning, human-centered brand design, strategy → creative direction, modernizing traditional brands, Q&A.", detailsZh: "講者：Francesco Casile, CEO（50+年經驗）。歷史傳承與定位、人本品牌設計、策略轉化創意方向、傳統品牌現代化、問答。" },
          { time: "12:30 PM", activity: "Lunch on own (2.5 hrs)", activityZh: "自行午餐（2.5小時）", details: "Assistant provides restaurant/shopping recommendations / 助理提供餐廳及購物建議" },
          { time: "3:00 PM", activity: "Coach to train station", activityZh: "搭遊覽車至火車站" },
          { time: "4:00 PM", activity: "Frecciarossa 9465 to Rome (3 hrs)", activityZh: "高速列車至羅馬（3小時）", highlight: true, details: "Coach #5. Seats: 6A-B, 7A-B, 8A-D, 9A-D, 10A-D, 11A-D, 12A-D, 13A-C", detailsZh: "第5節車廂。對號座位已預留。" },
          { time: "7:15 PM", activity: "Meet assistant Christian, board coach", activityZh: "與助理 Christian 會合，搭車", details: "Transit passes (ROMA72H + ROMA24H) → Stephanie Adams", detailsZh: "交通票（ROMA72H + ROMA24H）→ Stephanie Adams" },
          { time: "8:00 PM", activity: "Check in Starhotels Michelangelo, Rome", activityZh: "入住羅馬飯店", details: "14 Via della Stazione di San Pietro. Passport + credit card.", detailsZh: "需護照及信用卡。" },
        ]
      },
      { title: "⭐ EIIS + Intellera SHAPE", meals: "Breakfast only 僅早餐", hotel: "Starhotels Michelangelo (2/4)", attire: "Business Casual 商務休閒",
        schedule: [
          { time: "6:00 AM", activity: "Breakfast (ground floor)", activityZh: "早餐（一樓）" },
          { time: "10:45 AM", activity: "Depart by coach", activityZh: "搭遊覽車出發" },
          { time: "11:30 AM", activity: "⭐ EIIS (1.5 hrs)", activityZh: "⭐ 歐洲永續創新研究所（1.5小時）", highlight: true, details: "Speaker: Andrea Geremicca. 11:30-12:00 Welcome → 12:00-12:30 Lecture on Innovation → 12:30-1:00 Q&A → Tour of 15th-century palazzo.", detailsZh: "講者：Andrea Geremicca。歡迎致詞→創新講座→問答→15世紀宮殿導覽。" },
          { time: "1:00 PM", activity: "Lunch on own", activityZh: "自行午餐", details: "Assistant provides recommendations / 助理提供建議" },
          { time: "3:00 PM", activity: "⭐ INTELLERA SHAPE (1.5 hrs)", activityZh: "⭐ Intellera SHAPE（1.5小時）", highlight: true, details: "Speaker: Ivan Massimiliano Cardaci, CEO. Design thinking in public sector, SHAPE methodology (problem framing → stakeholder mapping → prototyping → iteration), integrating strategy/policy/service design, Q&A.", detailsZh: "講者：Ivan Massimiliano Cardaci, CEO。公部門設計思維、SHAPE方法論（問題定義→利害關係人對應→原型設計→迭代）、整合策略/政策/服務設計、問答。" },
          { time: "4:30 PM", activity: "Return to hotel (30 min) — dinner on own", activityZh: "返回飯店（30分鐘），晚餐自理" },
        ]
      },
      { title: "⭐ Olive Hill Sabina 橄欖山莊", meals: "Breakfast only 僅早餐", hotel: "Starhotels Michelangelo (3/4)", attire: "Casual + shoes + jacket 休閒＋好鞋＋外套",
        schedule: [
          { time: "6:00 AM", activity: "Breakfast (ground floor)", activityZh: "早餐（一樓）" },
          { time: "8:00 AM", activity: "Depart by coach (1 hr 45 min)", activityZh: "搭遊覽車出發（1小時45分鐘）" },
          { time: "10:00 AM", activity: "⭐ OLIVE HILL SABINA (2 hrs)", activityZh: "⭐ 橄欖山莊（2小時）", highlight: true, details: "Speakers: Emma & Scott Notman. ⚠️ 10-min uphill walk from coach. Grove tour (Emma) → Processing tour & business strategy (Scott) → Q&A → Tasting → Take a bottle home!", detailsZh: "講者：Emma & Scott Notman。⚠️ 從車輛停靠處需步行上坡10分鐘。橄欖園導覽（Emma）→加工導覽及商業策略（Scott）→問答→品油→每人帶一瓶回家！" },
          { time: "12:00 PM", activity: "Return to hotel (1.5 hrs)", activityZh: "返回飯店（1.5小時）" },
          { time: "PM", activity: "Free — lunch & dinner on own", activityZh: "自由活動，午餐及晚餐自理" },
        ]
      },
      { title: "⭐ Rome Tour + Fifth Beat + Farewell 惜別晚宴", meals: "Breakfast, Dinner 早餐、晚餐", hotel: "Starhotels Michelangelo (4/4)", attire: "Business Casual 商務休閒",
        schedule: [
          { time: "6:00 AM", activity: "Breakfast (ground floor)", activityZh: "早餐（一樓）" },
          { time: "9:30 AM", activity: "Meet guide Carlotta in lobby", activityZh: "與導遊 Carlotta 在大廳會合" },
          { time: "9:30 AM", activity: "Rome Walking Tour (3 hrs)", activityZh: "羅馬步行導覽（3小時）", details: "Colosseum (80 AD, 55,000 capacity) → Arch of Constantine (315 AD) → Palatine Hill → Roman Forum. NO entrances. Whispers mandatory.", detailsZh: "競技場（西元80年，55,000人）→君士坦丁凱旋門（315年）→帕拉蒂尼山→古羅馬廣場。不含入場。耳機強制。" },
          { time: "12:30 PM", activity: "Lunch on own", activityZh: "自行午餐" },
          { time: "2:00 PM", activity: "Meet assistant in lobby, board coach", activityZh: "在大廳與助理會合，搭車" },
          { time: "3:00 PM", activity: "⭐ FIFTH BEAT (1.5 hrs)", activityZh: "⭐ Fifth Beat（1.5小時）", highlight: true, details: "Speaker: Raffaele Boiano, CEO & Founder. Design philosophy, embedding design in clients, measuring impact (KPIs), AI & emerging tech in digital experience design, Q&A.", detailsZh: "講者：Raffaele Boiano, CEO & Founder。設計理念、嵌入設計於客戶組織、衡量影響力（KPI）、AI與新興科技在數位體驗設計中的應用、問答。" },
          { time: "6:30 PM", activity: "Depart on foot (15 min)", activityZh: "步行出發（15分鐘）" },
          { time: "7:00 PM", activity: "Farewell Dinner — Taverna Angelica (2 hrs)", activityZh: "惜別晚宴 — Taverna Angelica（2小時）", highlight: true, details: "Standard: Pork neck w/ tomato & rosemary → Ravioli amatriciana → Dark chocolate w/ mango & passion fruit. Pork-free: Roasted cardoncello mushroom → Three pepper pasta → Same dessert. Water + 1 soft drink.", detailsZh: "一般：豬頸肉佐番茄迷迭香→阿瑪翠切安娜餃子→黑巧克力芒果百香果。不食豬肉：烤大蠔菇青醬→三椒青檸短管麵→同甜點。水＋一杯軟飲。" },
        ]
      },
      { title: "Program Ends — Depart Rome 行程結束", meals: "Breakfast 早餐", hotel: "Check out 退房", attire: "—",
        schedule: [
          { time: "3:30 AM", activity: "⚠️ Early departure group — lobby", activityZh: "⚠️ 早班出發組 — 大廳集合", details: "Mini-van → FCO Terminal 1. Lucien (TAP 839, 6:00), Roy Chowdhury (AA 719, 6:10), Hickey (BA 1576, 6:10), Lenz (BA 1576, 6:10), Darkoa-Ampem (BA 553, 6:45). Boxed breakfast at front desk.", detailsZh: "小巴→FCO T1。前臺領取盒裝早餐（水果、烤麵包片佐果醬/Nutella、甜可頌、水、果汁）。" },
          { time: "6:30 AM", activity: "Breakfast (ground floor)", activityZh: "早餐（一樓）" },
          { time: "10:00 AM", activity: "Later departure group — lobby", activityZh: "晚班出發組 — 大廳集合", details: "Mini-van → FCO Terminal 3. Assistant: Christian De Cesare. Avalon (AA 719, 1:10), Bunn (BA 1576, 1:10), Maz (BA 1576, 1:10), Bouchrouche (BA 553, 1:20), Xing (WizzAir 6065, 1:45).", detailsZh: "小巴→FCO T3。助理 Christian De Cesare 隨行。" },
          { time: "11:00 AM", activity: "CHECK OUT Rome hotel", activityZh: "退房羅馬飯店", details: "Return key, settle incidentals, store luggage at front desk if needed.", detailsZh: "歸還房卡、結清雜費、可於前臺寄放行李。" },
        ]
      },
    ];

    const day = days[dayIdx];
    return (
      <div>
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 16 }}>
          {DAY_TABS.map((dt) => (
            <button key={dt.id} onClick={() => setDayIdx(dt.id)} style={{ padding: "6px 10px", borderRadius: 8, border: `1px solid ${dayIdx === dt.id ? C.accent : C.border}`, cursor: "pointer", fontSize: 11, fontWeight: dayIdx === dt.id ? 700 : 400, background: dayIdx === dt.id ? C.accent : C.card, color: dayIdx === dt.id ? "#fff" : C.textMuted, transition: "all 0.2s" }}>
              <div>{dt.label}</div>
              <div style={{ fontSize: 10, opacity: 0.7 }}>{dt.short}</div>
            </button>
          ))}
        </div>
        <div style={{ background: C.card, borderRadius: 12, padding: 16, marginBottom: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          <h3 style={{ margin: "0 0 4px", fontSize: 18, fontWeight: 700, color: C.text }}>{DAY_TABS[dayIdx].label} — {day.title}</h3>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
            <Badge color={C.green}>🍽️ {day.meals}</Badge>
            <Badge color={C.purple}>🏨 {day.hotel}</Badge>
            <Badge color={C.gold}>👔 {day.attire}</Badge>
          </div>
          {day.schedule.map((s, i) => (
            <TimeBlock key={i} {...s} />
          ))}
        </div>
      </div>
    );
  };

  const renderCompanies = () => (
    <div>
      <CompanyCard name="Pagani" nameZh="帕加尼 — 精品超跑製造商" date="3/2 Mon" speaker="(Site guides 駐場導覽)" speakerTitle="Factory & Atelier 工廠與工坊" attire="Casual 休閒" bg={C.red}
        agenda={["Museum & Atelier guided tour (1 hr)", "Horacio Pagani's design philosophy", "Artisans handcrafting carbon fiber", "Huayra / Utopia assembly observation"]}
        agendaZh={["博物館與工坊導覽（1小時）", "Horacio Pagani 設計理念", "工匠手工製作碳纖維", "Huayra / Utopia 組裝觀摩"]} />
      <CompanyCard name="Ferrari" nameZh="法拉利 — 全球最具代表性豪華跑車品牌" date="3/2 Mon" speaker="(2 site guides 2位駐場導覽)" speakerTitle="Museum & Fiorano 博物館與賽道" attire="Casual 休閒" bg={C.red}
        agenda={["Free museum access (1:30 PM)", "Guided tour — 2 groups (2:00 PM)", "Historic F1 cars, prototypes, interactive exhibits", "Fiorano Track & Viale Enzo Ferrari panoramic tour", "⚠️ Production line access RESTRICTED"]}
        agendaZh={["自由參觀博物館（1:30 PM）", "導覽開始——分2組（2:00 PM）", "歷史F1賽車、原型車、互動展覽", "菲奧拉諾賽道全景導覽", "⚠️ 生產線不開放"]} />
      <CompanyCard name="Casile e Casile" nameZh="米蘭精品展廳與品牌代理" date="3/3 Tue" speaker="Francesco Casile" speakerTitle="CEO & Founder（50+年）" attire="Business Casual 商務休閒" bg={C.pink}
        website="casileecasile.it" agenda={["Introduction (heritage, positioning, sectors)", "Human-centered brand & communication design", "Strategy → Creative direction", "Brand identity ↔ Business objectives", "Modernizing traditional brands", "Q&A"]}
        agendaZh={["公司簡介（傳承、定位、產業）", "人本品牌與傳播設計", "策略→創意方向", "品牌識別↔商業目標一致性", "傳統品牌現代化", "問答"]} />
      <CompanyCard name="EIIS" nameZh="歐洲永續創新研究所" date="3/4 Wed" speaker="Andrea Geremicca" attire="Business Casual 商務休閒" bg={C.green}
        website="eiis.eu" agenda={["Welcome & Greetings (11:30-12:00)", "Lecture on Innovation (12:00-12:30)", "Q&A (12:30-1:00)", "Tour of 15th-century palazzo"]}
        agendaZh={["歡迎致詞", "創新講座", "問答", "15世紀宮殿導覽"]} />
      <CompanyCard name="Intellera SHAPE" nameZh="設計與體驗創新部門（Accenture 旗下）" date="3/4 Wed" speaker="Ivan Massimiliano Cardaci" speakerTitle="CEO" attire="Business Casual 商務休閒" bg={C.teal}
        website="intelleraconsulting.com" linkedin="linkedin.com/in/ivancardaci"
        agenda={["Why design thinking matters in public sector", "Human-centered design in gov't & regulated sectors", "SHAPE methodology (framing → mapping → prototyping → iteration)", "Integrating strategy, policy, service design", "Q&A"]}
        agendaZh={["設計思維對公部門創新的重要性", "政府與受監管領域人本設計", "SHAPE方法論（定義→對應→原型→迭代）", "整合策略、政策與服務設計", "問答"]} />
      <CompanyCard name="Olive Hill Sabina" nameZh="橄欖山莊 — 家庭經營有機橄欖農場" date="3/5 Thu" speaker="Emma & Scott Notman" speakerTitle="Co-owners 莊園主（since 2018）" attire="Casual + shoes + jacket 休閒＋好鞋＋外套" bg={C.orange}
        agenda={["Grove tour & growth methods (Emma)", "Processing tour & business strategy (Scott)", "Q&A", "Olive oil tasting", "🎁 Take a bottle home!"]}
        agendaZh={["橄欖園導覽與種植方法（Emma）", "加工導覽與商業策略（Scott）", "問答", "品油", "🎁 每人帶一瓶回家！"]} />
      <CompanyCard name="Fifth Beat" nameZh="義大利數位設計與創新顧問公司" date="3/6 Fri" speaker="Raffaele Boiano" speakerTitle="CEO & Founder" attire="Business Casual 商務休閒" bg={C.purple}
        website="fifthbeat.com" linkedin="linkedin.com/in/rboiano"
        agenda={["Design philosophy & methodology", "Embedding design within client organizations", "Measuring impact (KPIs, adoption, business outcomes)", "Design leadership & cross-functional collaboration", "AI & emerging tech in digital experience design", "Q&A"]}
        agendaZh={["設計理念與方法論", "在客戶組織中嵌入設計", "衡量影響力（KPI、採用率、商業成果）", "設計領導力與跨職能協作", "AI與新興科技在數位體驗設計", "問答"]} />
    </div>
  );

  const renderFrameworks = () => (
    <div>
      <Section title="Keeley's Ten Types of Innovation" titleZh="Keeley 十大創新類型 — 企業對照" icon="🔟" accent={C.accent}>
        {[
          { type: "Profit Model 利潤模式", cat: "Configuration", co: "Ferrari (controlled scarcity 控制稀缺), Olive Hill (premium niche 高端利基), Pagani (ultra-bespoke 極致客製)" },
          { type: "Network 網絡", cat: "Configuration", co: "Casile e Casile (ecosystem intermediary 生態系中介), EIIS (cross-institutional 跨機構合作)" },
          { type: "Structure 組織結構", cat: "Configuration", co: "Intellera SHAPE (Accenture integration 併入Accenture), Fifth Beat (embedding design 嵌入設計)" },
          { type: "Process 流程", cat: "Configuration", co: "Pagani (handcraft + carbon fiber 手工＋碳纖維), Olive Hill (regenerative farming 再生農法), Ferrari (racing→road 賽車→量產)" },
          { type: "Product Performance 產品表現", cat: "Offering", co: "Ferrari (performance engineering 性能工程), Pagani (materials science 材料科學)" },
          { type: "Product System 產品系統", cat: "Offering", co: "Ferrari (car + brand + racing 車＋品牌＋賽車), Casile e Casile (portfolio curation 品牌組合策展)" },
          { type: "Service 服務", cat: "Experience", co: "Fifth Beat (design consulting 設計顧問), Intellera SHAPE (public service redesign 公共服務再設計)" },
          { type: "Channel 通路", cat: "Experience", co: "Casile e Casile (intermediary 中介通路), Olive Hill (DTC vs. distribution 直銷 vs. 經銷)" },
          { type: "Brand 品牌", cat: "Experience", co: "Ferrari (identity filter 身份過濾器), Pagani (founder mythology 創辦人神話), Casile e Casile ('Made in Italy')" },
          { type: "Customer Engagement 顧客互動", cat: "Experience", co: "Ferrari (Fiorano as brand theater 品牌劇場), Pagani (bespoke co-creation 客製共創), EIIS (learning experiences 學習體驗)" },
        ].map((item, i) => (
          <div key={i} style={{ padding: "8px 12px", marginBottom: 4, borderRadius: 8, background: i % 2 === 0 ? C.cardAlt : "transparent", fontSize: 12 }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 2 }}>
              <span style={{ fontWeight: 700, color: C.text, minWidth: 200 }}>{item.type}</span>
              <Badge color={item.cat === "Configuration" ? C.accent : item.cat === "Offering" ? C.green : C.purple}>{item.cat}</Badge>
            </div>
            <div style={{ color: C.textMuted, paddingLeft: 4 }}>{item.co}</div>
          </div>
        ))}
      </Section>

      <Section title="Verganti's Design-Driven Innovation" titleZh="Verganti 設計驅動創新" icon="💡" accent={C.gold}>
        <div style={{ background: C.card, borderRadius: 10, padding: 14, marginBottom: 12, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          <div style={{ fontSize: 12, color: C.textMuted, marginBottom: 10, lineHeight: 1.6 }}>
            <strong style={{ color: C.text }}>Three modes 三種創新模式：</strong><br />
            🔧 <strong>Technology-push 科技推動：</strong> Driven by new tech 由新技術能力驅動<br />
            📊 <strong>Market-pull 市場拉動：</strong> Driven by customer needs 由現有顧客需求驅動<br />
            🎨 <strong>Design-driven 設計驅動：</strong> Proposes new <em>meanings</em> 提出新「意義」——在改變形式/功能之前先改變產品的意涵
          </div>
        </div>
        {[
          { company: "Pagani", color: C.red, en: "Purest design-driven case. Horacio as visionary interpreter. Carbon fiber = technology, but its meaning (art + science) is the innovation.", zh: "最純粹的設計驅動案例。Horacio 作為願景型詮釋者。碳纖維是技術，但其意義（藝術＋科學）才是創新。" },
          { company: "Ferrari", color: C.red, en: "Design-driven at core, now facing technology-push pressures (electrification) challenging its meaning structure. Identity filter = mechanism for processing this tension.", zh: "核心為設計驅動，但正面臨科技推動壓力（電動化）挑戰其意義結構。身份過濾器＝處理此張力的機制。" },
          { company: "Casile e Casile", color: C.pink, en: "A 'meaning intermediary' — Francesco curates brands, managing the meaning layer for designers.", zh: "「意義中介者」——Francesco 策展並定位品牌，為設計師管理意義層。" },
          { company: "EIIS", color: C.green, en: "Changing the meaning of sustainability: from compliance burden → strategic opportunity.", zh: "改變永續的意義：從合規負擔→策略機遇。設計驅動創新應用於組織思維。" },
          { company: "Intellera SHAPE", color: C.teal, en: "Design-driven logic in public services — redefining what government services mean to citizens.", zh: "將設計驅動邏輯帶入公共服務——重新定義政府服務對公民的意義。" },
          { company: "Olive Hill", color: C.orange, en: "A meaning play in a commodity market. 'Olive oil' = undifferentiated. 'Hand-harvested organic oil from regenerated Sabina grove' = meaning proposition.", zh: "在大宗商品市場中的意義策略。「橄欖油」＝無差異化。「再生薩比納橄欖園手工採摘有機油」＝意義主張。" },
          { company: "Fifth Beat", color: C.purple, en: "The meta-case — helps organizations become design-driven. Their methodology itself is the innovation.", zh: "後設案例——幫助其他組織成為設計驅動型。其方法論本身即是創新。" },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 10, padding: "8px 12px", marginBottom: 6, borderRadius: 8, borderLeft: `3px solid ${item.color}`, background: C.card, boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}>
            <div style={{ minWidth: 100, fontWeight: 700, fontSize: 12, color: item.color }}>{item.company}</div>
            <div style={{ flex: 1, fontSize: 12 }}>
              <div style={{ color: C.text, lineHeight: 1.5 }}>{item.en}</div>
              <div style={{ color: C.textDim, lineHeight: 1.5 }}>{item.zh}</div>
            </div>
          </div>
        ))}
      </Section>

      <Section title="Ferrari Identity Filter — Cross-Company" titleZh="法拉利身份過濾器 — 跨企業應用" icon="🔍" accent={C.red}>
        <div style={{ background: C.card, borderRadius: 10, padding: 14, marginBottom: 12, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          <div style={{ fontSize: 12, color: C.textMuted, lineHeight: 1.6 }}>
            The "identity filter" describes how a company evaluates new technologies, trends, or pressures against its core identity to decide what to adopt, adapt, or reject.<br />
            「身份過濾器」描述企業如何以其核心身份評估新技術、趨勢或市場壓力，以決定採納、調整或拒絕。
          </div>
        </div>
        {[
          { company: "Pagani", en: "Horacio IS the filter. Key question: what happens when the founder is no longer the gatekeeper?", zh: "Horacio 本人即是過濾器。關鍵問題：當創辦人不再是守門人時會如何？", color: C.red },
          { company: "Ferrari", en: "Documented in the case study. Probe current examples — how is the electric Ferrari being filtered?", zh: "個案研究已有記載。追問當前案例——電動法拉利如何被過濾？", color: C.red },
          { company: "Casile e Casile", en: "Francesco's 50+ years of curation IS an identity filter for brands he represents.", zh: "Francesco 50多年的策展經驗即是身份過濾器。詢問他如何決定哪些品牌適合。", color: C.pink },
          { company: "EIIS", en: "Filter = 'Does this contribute to genuine sustainability, or is it performative?'", zh: "過濾器＝「這是否真正促進永續轉型，還是只是做做樣子？」", color: C.green },
          { company: "Olive Hill", en: "Small enough that founders' personal values are the filter. Ask what they turned down.", zh: "規模夠小，創辦人的個人價值觀即是過濾器。詢問他們拒絕了哪些機會。", color: C.orange },
          { company: "Fifth Beat", en: "Filter on two levels: own brand identity + helping clients develop their own filters.", zh: "過濾器在兩個層面運作：自身品牌身份＋幫助客戶發展其自身過濾器。", color: C.purple },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 10, padding: "8px 12px", marginBottom: 6, borderRadius: 8, borderLeft: `3px solid ${item.color}`, background: C.card, boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}>
            <div style={{ minWidth: 100, fontWeight: 700, fontSize: 12, color: item.color }}>{item.company}</div>
            <div style={{ flex: 1, fontSize: 12 }}>
              <div style={{ color: C.text, lineHeight: 1.5 }}>{item.en}</div>
              <div style={{ color: C.textDim, lineHeight: 1.5 }}>{item.zh}</div>
            </div>
          </div>
        ))}
      </Section>
    </div>
  );

  const renderLogistics = () => (
    <div>
      <Section title="Accommodations" titleZh="住宿資訊" icon="🏨" accent={C.purple}>
        {[
          { name: "Starhotels E.C.H.O. — Milan 米蘭", addr: "Viale Andrea Doria, 4", dates: "Feb 27 – Mar 3 (3 nights 晚)", checkIn: "Feb 27 (pre-night 提前一晚) / Feb 28 (program 正式)", checkOut: "Mar 3, 8:30 AM", web: "starhotels.com", notes: "Pre-night pre-paid. Incidentals at own expense. Breakfast: ground floor. 提前一晚已預付，雜費自理。早餐：一樓。" },
          { name: "Starhotels Michelangelo — Rome 羅馬", addr: "14 Via della Stazione di San Pietro", dates: "Mar 3 – Mar 7 (4 nights 晚)", checkIn: "Mar 3, 8:00 PM", checkOut: "Mar 7, 11:00 AM", web: "starhotels.com/.../michelangelo-rome/", notes: "Transit passes 交通票 via Stephanie Adams: ROMA72H + ROMA24H" },
        ].map((h, i) => (
          <div key={i} style={{ background: C.card, borderRadius: 10, padding: 14, marginBottom: 10, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
            <h4 style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 700, color: C.text }}>{h.name}</h4>
            <InfoRow label="Address 地址" value={h.addr} icon="📍" />
            <InfoRow label="Dates 日期" value={h.dates} icon="📅" />
            <InfoRow label="Check-in 入住" value={h.checkIn} icon="🔑" />
            <InfoRow label="Check-out 退房" value={h.checkOut} icon="🚪" />
            <InfoRow label="Website 網站" value={h.web} icon="🔗" />
            <div style={{ marginTop: 6, fontSize: 12, color: C.textDim, padding: "6px 8px", background: C.cardAlt, borderRadius: 6 }}>
              📋 Check-in requires passport + 1 credit card/room. 入住需護照＋每房1張信用卡。<br />{h.notes}
            </div>
          </div>
        ))}
      </Section>

      <Section title="Transportation" titleZh="交通資訊" icon="🚄" accent={C.teal}>
        <div style={{ background: C.card, borderRadius: 10, padding: 14, marginBottom: 10, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          <h4 style={{ margin: "0 0 6px", color: C.text, fontSize: 14 }}>Frecciarossa 9465 — Milan → Rome 米蘭→羅馬</h4>
          <InfoRow label="Date 日期" value="Mar 3 (Tue)" icon="📅" />
          <InfoRow label="Departure 出發" value="4:00 PM CET" icon="🕓" />
          <InfoRow label="Duration 時長" value="3 hours" icon="⏱️" />
          <InfoRow label="Coach 車廂" value="#5" icon="🚃" />
          <InfoRow label="Seats 座位" value="6A-B, 7A-B, 8A-D, 9A-D, 10A-D, 11A-D, 12A-D, 13A-C" icon="💺" />
        </div>
        <div style={{ background: C.card, borderRadius: 10, padding: 14, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          <h4 style={{ margin: "0 0 6px", color: C.text, fontSize: 14 }}>Rome Transit 羅馬交通票</h4>
          <InfoRow label="Per person 每人" value="1× ROMA72H + 1× ROMA24H" icon="🚇" />
          <InfoRow label="Distribution 分發" value="Christian → Stephanie Adams → group 全組" icon="👥" />
        </div>
      </Section>

      <Section title="Departure Flights — Mar 7" titleZh="離境航班 — 3月7日" icon="✈️" accent={C.orange}>
        <div style={{ background: C.card, borderRadius: 10, padding: 14, marginBottom: 10, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          <h4 style={{ margin: "0 0 8px", color: C.gold, fontSize: 13 }}>Early Group 早班 — 3:30 AM lobby → FCO Terminal 1</h4>
          {[
            ["Lucien, Gaethan Nicholas", "TAP PORTUGAL 839", "6:00 AM"],
            ["Roy Chowdhury, Arijit", "AMERICAN AIRLINES #719", "6:10 AM"],
            ["Hickey, Morgan Elizabeth", "BRITISH AIRWAYS #1576", "6:10 AM"],
            ["Lenz, Abigail Mary", "BRITISH AIRWAYS #1576", "6:10 AM"],
            ["Darkoa-Ampem, Ellen", "BRITISH AIRWAYS #553", "6:45 AM"],
          ].map(([n, f, t], i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 70px", gap: 8, padding: "3px 0", borderBottom: `1px solid ${C.border}`, fontSize: 12 }}>
              <span style={{ color: C.text }}>{n}</span>
              <span style={{ color: C.textMuted }}>{f}</span>
              <span style={{ color: C.gold, fontWeight: 600 }}>{t}</span>
            </div>
          ))}
          <div style={{ marginTop: 8, fontSize: 11, color: C.orange }}>🥐 Boxed breakfast at front desk 前臺領盒裝早餐：fruit 水果, rusks w/ jam/Nutella 烤麵包片, croissant 可頌, water 水, juice 果汁</div>
        </div>
        <div style={{ background: C.card, borderRadius: 10, padding: 14, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          <h4 style={{ margin: "0 0 8px", color: C.accent, fontSize: 13 }}>Later Group 晚班 — 10:00 AM lobby → FCO Terminal 3</h4>
          <div style={{ fontSize: 11, color: C.textDim, marginBottom: 6 }}>Assistant 助理: Christian De Cesare · +39 392 4426115</div>
          {[
            ["Avalon, Myles Danilo", "AMERICAN AIRLINES #719", "1:10 PM"],
            ["Bunn, Brittany Madison", "BRITISH AIRWAYS #1576", "1:10 PM"],
            ["Maz, Chester McDonald", "BRITISH AIRWAYS #1576", "1:10 PM"],
            ["Bouchrouche, Ryan Maroun", "BRITISH AIRWAYS #553", "1:20 PM"],
            ["Xing, Victor Min", "WizzAir #6065", "1:45 PM"],
          ].map(([n, f, t], i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 70px", gap: 8, padding: "3px 0", borderBottom: `1px solid ${C.border}`, fontSize: 12 }}>
              <span style={{ color: C.text }}>{n}</span>
              <span style={{ color: C.textMuted }}>{f}</span>
              <span style={{ color: C.accent, fontWeight: 600 }}>{t}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Dress Code Summary" titleZh="服裝速查" icon="👔" accent={C.gold}>
        <div style={{ background: C.card, borderRadius: 10, padding: 14, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          {[
            ["3/2 Mon", "Pagani & Ferrari", "Casual 休閒", C.green],
            ["3/3 Tue", "Casile e Casile", "Business Casual 商務休閒", C.gold],
            ["3/4 Wed", "EIIS & SHAPE", "Business Casual 商務休閒", C.gold],
            ["3/5 Thu", "Olive Hill", "Casual＋好鞋＋外套", C.orange],
            ["3/6 Fri", "Fifth Beat", "Business Casual 商務休閒", C.gold],
          ].map(([d, c, a, col], i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "80px 1fr 1fr", gap: 8, padding: "6px 0", borderBottom: i < 4 ? `1px solid ${C.border}` : "none", fontSize: 12, alignItems: "center" }}>
              <span style={{ fontWeight: 700, color: C.text }}>{d}</span>
              <span style={{ color: C.textMuted }}>{c}</span>
              <Badge color={col}>{a}</Badge>
            </div>
          ))}
        </div>
      </Section>

      <Section title="All Speakers & Key Personnel" titleZh="所有講者與關鍵人物" icon="👤" accent={C.accent}>
        <div style={{ background: C.card, borderRadius: 10, padding: 14, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          {[
            ["Francesco Casile", "CEO & Founder", "Casile e Casile", "3/3"],
            ["Andrea Geremicca", "Speaker 講者", "EIIS", "3/4"],
            ["Ivan M. Cardaci", "CEO", "Intellera SHAPE", "3/4"],
            ["Emma Notman", "Co-owner 莊園主", "Olive Hill", "3/5"],
            ["Scott Notman", "Co-owner 莊園主", "Olive Hill", "3/5"],
            ["Raffaele Boiano", "CEO & Founder", "Fifth Beat", "3/6"],
          ].map(([n, t, c, d], i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "140px 1fr 1fr 50px", gap: 8, padding: "5px 0", borderBottom: `1px solid ${C.border}`, fontSize: 12, alignItems: "center" }}>
              <span style={{ fontWeight: 600, color: C.text }}>{n}</span>
              <span style={{ color: C.textDim }}>{t}</span>
              <span style={{ color: C.textMuted }}>{c}</span>
              <Badge color={C.accent}>{d}</Badge>
            </div>
          ))}
          <div style={{ marginTop: 12, fontSize: 11, color: C.textDim, borderTop: `1px solid ${C.border}`, paddingTop: 8 }}>
            <strong style={{ color: C.textMuted }}>Program Staff 行程工作人員：</strong><br />
            Jack — Program Leader 領隊 (from 2/28)<br />
            Stephanie Adams — Program Leader 領隊 (from 2/28, receives Rome transit passes 接收羅馬交通票)<br />
            Carlotta — Rome Walking Tour Guide 羅馬導覽員 (3/6)<br />
            Christian De Cesare (female 女性) — Rome Assistant 羅馬助理 (from 3/3) · +39 392 4426115
          </div>
        </div>
      </Section>
    </div>
  );

  const renderEmergency = () => (
    <div>
      <Section title="Emergency Contacts" titleZh="緊急聯絡" icon="🚨" accent={C.red}>
        <div style={{ background: C.card, borderRadius: 10, padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          {[
            { label: "WorldStrides WorldAssist (24hr)", value: "+1-703-933-6143", icon: "📞" },
            { label: "WhatsApp (non-urgent 非緊急, 24hr)", value: "+1-540-500-1987", icon: "💬" },
            { label: "Trip ID 行程編號", value: "227138", icon: "🔖" },
            { label: "Account Manager 行程經理", value: "Jennifer Seymour · jennifer.seymour@worldstrides.com · 434-951-5938", icon: "👤" },
            { label: "Rome Assistant 羅馬助理", value: "Christian De Cesare · +39 392 4426115 (WhatsApp)", icon: "🇮🇹" },
          ].map((c, i) => (
            <div key={i} style={{ padding: "10px 0", borderBottom: i < 4 ? `1px solid ${C.border}` : "none" }}>
              <InfoRow label={c.label} value={c.value} icon={c.icon} />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Medical & Insurance" titleZh="醫療與保險" icon="🏥" accent={C.green}>
        <div style={{ background: C.card, borderRadius: 10, padding: 14, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          {[
            { en: "If medical treatment needed: inform program leaders, local staff, and WorldAssist", zh: "需要醫療救助時：通知領隊、當地工作人員及 WorldAssist" },
            { en: "Arrange transportation via hotel staff, local guide, emergency services, or hospital", zh: "可透過飯店人員、嚮導、急救服務或醫院安排交通" },
            { en: "Second opinion / consultation: activate Doctors on Call via WorldAssist", zh: "第二意見／醫療諮詢：透過 WorldAssist 啟動 Doctors on Call" },
            { en: "Mental health support: AXA Behavioral Health Hotline", zh: "心理健康支援：AXA 心理健康專線" },
            { en: "24-hour A&E hospitals available in both Milan and Rome", zh: "米蘭與羅馬均有24小時急診醫院" },
          ].map((item, i) => (
            <div key={i} style={{ padding: "6px 0", borderBottom: i < 4 ? `1px solid ${C.border}` : "none", fontSize: 12 }}>
              <div style={{ color: C.text }}>{item.en}</div>
              <div style={{ color: C.textDim }}>{item.zh}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="All Website Links" titleZh="所有網站連結" icon="🔗" accent={C.accent}>
        <div style={{ background: C.card, borderRadius: 10, padding: 14, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          {[
            ["Starhotels E.C.H.O. (Milan 米蘭)", "starhotels.com"],
            ["Starhotels Michelangelo (Rome 羅馬)", "starhotels.com/.../michelangelo-rome/"],
            ["Osteria Mamma Rosa", "osteriamammarosa.it"],
            ["Duomo di Milano 主教座堂", "duomomilano.it/en/"],
            ["Fresco e Cimmino", "frescocimmino.it"],
            ["Ristorante il Fantino", "sites.google.com/view/trattoriailfantino"],
            ["Casile e Casile", "casileecasile.it"],
            ["EIIS 永續創新研究所", "eiis.eu"],
            ["Intellera Consulting", "intelleraconsulting.com"],
            ["Fifth Beat", "fifthbeat.com"],
            ["Taverna Angelica", "tavernangelica.wixsite.com/taverna-angelica"],
            ["Colosseum 競技場", "archeoroma.beniculturali.it"],
            ["Roman Forum 古羅馬廣場", "archeoroma.beniculturali.it/.../roman-forum..."],
          ].map(([n, u], i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", borderBottom: `1px solid ${C.border}`, fontSize: 12 }}>
              <span style={{ color: C.text }}>{n}</span>
              <span style={{ color: C.accent, fontSize: 11 }}>{u}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );

  const content = { overview: renderOverview, daily: renderDaily, companies: renderCompanies, frameworks: renderFrameworks, logistics: renderLogistics, emergency: renderEmergency };

  return (
    <div style={{ background: C.bg, minHeight: "100vh", color: C.text, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ background: "linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)", padding: "20px 16px 14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <span style={{ fontSize: 28 }}>🇮🇹</span>
          <div>
            <h1 style={{ margin: 0, fontSize: 18, fontWeight: 800, letterSpacing: -0.3, color: "#fff" }}>INTB 6230 Italy Field Study</h1>
            <div style={{ fontSize: 12, color: "#e2e8f0" }}>義大利實地考察完整雙語指南 | Feb 27 – Mar 8, 2026</div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 2, padding: "8px 8px 0", overflowX: "auto", borderBottom: `1px solid ${C.border}`, background: C.cardAlt }}>
        {TABS.map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "8px 12px", borderRadius: "8px 8px 0 0", border: "none", cursor: "pointer", fontSize: 12, fontWeight: tab === t.id ? 700 : 400, background: tab === t.id ? C.card : "transparent", color: tab === t.id ? C.text : C.textDim, borderBottom: tab === t.id ? `2px solid ${C.accent}` : "2px solid transparent", whiteSpace: "nowrap", transition: "all 0.2s" }}>
            {t.icon} {t.label}
            <div style={{ fontSize: 10, opacity: 0.6 }}>{t.labelZh}</div>
          </button>
        ))}
      </div>

      <div style={{ padding: 16, maxWidth: 800, margin: "0 auto" }}>
        {content[tab]()}
      </div>
    </div>
  );
}
