// 홍보용 사이트 문구/데이터. 브랜드명·카피·이미지는 여기서 교체하세요.
export const brand = {
  name: "STUDY LOUNGE",
  phone: "02-000-0000",
  hours: "평일 09:30 ~ 18:00 (점심시간 12:00~13:00)",
  address: "서울특별시 OO구 OO로 000, 0층",
  biz: "사업자 등록번호 : 000-00-00000",
};

export const nav = [
  { label: "지점찾기", id: "branches" },
  { label: "프로모션", id: "promotion" },
  { label: "상품 안내", id: "products" },
  { label: "창업 안내", id: "contact" },
];

export const facilities = [
  { title: "카페테리아", desc: "무제한으로 즐기는 커피와 차를 준비했어요" },
  { title: "복합기", desc: "출력, 복사, 스캔을 자유롭게 이용하세요" },
  { title: "휴게공간", desc: "편안하게 쉬어갈 수 있는 라운지 공간" },
  { title: "사무 용품", desc: "업무에 필요한 기본 용품을 비치했어요" },
];

export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export const spaces = [
  { title: "오픈 테이블", desc: "카페 같은 자유로운 분위기의 오픈형 좌석", img: asset("/images/open.svg") },
  { title: "듀얼 모니터 석", desc: "집중이 필요한 업무를 위한 모니터 좌석", img: asset("/images/monitor.svg") },
  { title: "포커스 부스", desc: "칸막이로 분리된 조용한 1인 공간", img: asset("/images/booth.svg") },
  { title: "소파 라운지", desc: "가벼운 미팅과 휴식을 위한 소파석", img: asset("/images/sofa.svg") },
  { title: "스탠딩 바", desc: "잠깐의 작업에 좋은 스탠딩 좌석", img: asset("/images/stand.svg") },
];

export const plans = {
  subscription: [
    { name: "에브리데이 플러스", best: true, price: "170,000", perks: ["매일 이용", "1개 지점 지정", "타 지점 월 5회 이용", "전 좌석 무제한 이용", "월 10 크레딧 지급"] },
    { name: "에브리데이", best: false, price: "140,000", perks: ["매일 이용", "1개 지점 지정", "전 좌석 무제한 이용", "월 10 크레딧 지급"] },
    { name: "위켄드 플러스", best: true, price: "60,000", perks: ["주말 이용", "1개 지점 지정", "타 지점 월 2회 이용", "전 좌석 무제한 이용"] },
    { name: "위켄드", best: false, price: "47,000", perks: ["주말 이용", "1개 지점 지정", "전 좌석 무제한 이용", "월 6 크레딧 지급"] },
  ],
  oneday: [
    { name: "원데이 패스", best: false, price: "15,000", perks: ["당일 이용", "전 지점 이용 가능", "전 좌석 이용"] },
    { name: "원데이 프리미엄", best: true, price: "22,000", perks: ["당일 이용", "전 지점 이용 가능", "모니터 좌석 이용", "음료 1잔 제공"] },
  ],
};

export const branches = [
  { name: "강남점", lat: 37.4979, lng: 127.0276 },
  { name: "역삼점", lat: 37.5007, lng: 127.0365 },
  { name: "선릉점", lat: 37.5045, lng: 127.0490 },
  { name: "잠실점", lat: 37.5133, lng: 127.1002 },
  { name: "방배점", lat: 37.4813, lng: 126.9976 },
  { name: "공덕점", lat: 37.5440, lng: 126.9516 },
  { name: "홍대점", lat: 37.5572, lng: 126.9245 },
];

export const reviews = [
  { text: "노트북만 있으면 듀얼모니터를 쓸 수 있는 모니터 자리가 있어서 대만족이에요.", name: "박*훈", place: "강남점" },
  { text: "집에 걸어갈 수 있는 거리라 출퇴근 기분이 나고 집중도 잘 돼요.", name: "조*재", place: "방배점" },
  { text: "생활권 안에 있는 라운지를 이용하면 편리합니다. 이동 시간을 아껴서 생산적으로 쓰고 있어요.", name: "권*혜", place: "공덕점" },
  { text: "혼자 일하니까 여럿이 있는 분위기가 필요했는데 딱 맞는 환경이에요.", name: "양*민", place: "수내점" },
  { text: "조용하지만 너무 적막하지 않아서 적당한 분위기에서 일할 수 있어요.", name: "이*지", place: "홍대점" },
];

export const gallery = ["hero", "open", "monitor", "booth", "sofa"].map((n) => asset(`/images/${n}.svg`));
