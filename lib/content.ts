// 한실장 홈페이지 문구/데이터 (기획서 2026.10.26 기준). 문구·사진은 여기서 교체하세요.

// 실제 매장 사진(webp)을 public/images에 같은 이름으로 넣고 IMG_EXT만 "webp"로 바꾸세요.
const IMG_EXT = "svg";
// GitHub Pages(basePath) 배포에서도 경로가 깨지지 않도록 asset()을 거친다
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
const img = (name: string) => asset(`/images/${name}.${IMG_EXT}`);

export const photos = {
  main: img("01_main"),
  roomCream: img("02_room_cream"),
  seating: img("03_seating"),
  roomBlue: img("04_room_blue"),
  roomGreen: img("05_room_green"),
  hall: img("06_hall"),
};

export const contact = {
  name: "한실장",
  phone: "010-5443-3976",
  tel: "tel:01054433976",
  sms: "sms:01054433976",
};

export const site = {
  // 배포 주소: 도메인을 연결하면 NEXT_PUBLIC_SITE_URL 환경변수로 바꾸세요
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://ksj1011.github.io/studycafe-clone").replace(/\/$/, ""),
  title: "한실장 | 강남 텐카페 예약·방문 문의",
  description: "방문 날짜와 인원, 원하시는 분위기를 알려주세요. 예약 가능 여부와 방문 위치를 안내해드립니다.",
};

export const nav = [
  { label: "한실장 소개", id: "intro" },
  { label: "공간 안내", id: "spaces" },
  { label: "예약 방법", id: "reservation" },
  { label: "문의", id: "contact" },
];

export const hero = {
  eyebrow: "강남 텐카페 예약·방문 안내",
  title: ["원하는 분위기에 맞춰,", "한실장이 안내합니다."],
  lines: ["방문 날짜와 인원, 원하시는 분위기를 알려주세요.", "예약 가능 여부와 방문 위치를 안내해드립니다."],
};

export const intro = {
  title: "처음 방문하셔도 편하게 문의하세요.",
  lines: ["방문 목적과 인원, 희망 일정을 말씀해 주세요.", "공간 선택부터 예약 방법, 방문 위치까지 안내해드립니다."],
};

export const guide = {
  title: "방문 전 안내해드리는 내용",
  items: [
    { no: "01", title: "방문 상담", desc: "처음 방문하시거나 궁금한 점이 있다면 편하게 문의해 주세요." },
    { no: "02", title: "공간 안내", desc: "방문 인원과 원하시는 분위기에 맞춰 공간 선택에 필요한 내용을 안내해드립니다." },
    { no: "03", title: "일정 확인", desc: "희망 날짜와 시간을 알려주시면 예약 가능 여부를 확인해드립니다." },
    { no: "04", title: "위치 안내", desc: "방문하실 매장의 정확한 위치와 이동 방법을 안내해드립니다." },
  ],
};

export const spaces = {
  title: "사진으로 미리 살펴보는 공간",
  desc: "룸 구성과 좌석, 인테리어 분위기를 확인해 보세요. 마음에 드는 공간이 있다면 방문 일정과 함께 문의해 주세요.",
  button: "공간 문의하기",
  items: [
    { title: "은은한 조명의 룸", desc: "크림색 소파와 곡선 조명이 어우러진 룸을 살펴보세요.", img: photos.roomCream },
    { title: "좌석 공간", desc: "테이블을 둘러싼 좌석과 룸 내부의 구성을 확인해 보세요.", img: photos.seating },
    { title: "블루 톤의 룸", desc: "블루 톤의 소파와 샹들리에가 있는 공간을 살펴보세요.", img: photos.roomBlue },
    { title: "그린 포인트 룸", desc: "그린 쿠션과 따뜻한 조명으로 꾸며진 룸을 살펴보세요.", img: photos.roomGreen },
    { title: "복도 둘러보기", desc: "복도와 실내 마감에서 느껴지는 공간의 분위기를 확인해 보세요.", img: photos.hall },
  ],
};

export const reservation = {
  title: "방문 전, 이렇게 문의해 주세요.",
  steps: [
    { title: "전화 또는 문자로 문의", desc: `${contact.name} ${contact.phone}으로 연락해 주세요.` },
    { title: "희망 일정과 인원 전달", desc: "방문 날짜, 시간, 인원과 원하시는 분위기를 알려주세요." },
    { title: "예약 내용과 위치 확인", desc: "방문 가능 여부와 매장 위치를 안내받으신 후 방문해 주세요." },
  ],
};

export const location = {
  title: "방문 위치 안내",
  lines: ["방문하실 매장의 정확한 위치와 이동 방법은 예약 문의 시 안내해드립니다.", "차량으로 방문하실 경우 주차 가능 여부도 함께 확인해 주세요."],
  button: "위치 문의하기",
};

export const faq = {
  title: "자주 묻는 질문",
  items: [
    { q: "처음 방문하는데 어떻게 문의하나요?", a: "전화나 문자로 희망 날짜와 시간, 방문 인원을 알려주세요. 궁금한 내용도 함께 말씀해 주시면 됩니다." },
    { q: "당일 방문도 문의할 수 있나요?", a: "당일 방문을 원하시면 전화로 문의해 주세요. 방문 가능 여부를 확인해 안내해드립니다." },
    { q: "여러 명이 함께 방문하고 싶어요.", a: "예상 인원과 희망 일정을 알려주세요. 인원에 맞는 공간을 확인해드립니다." },
    { q: "위치와 주차는 어떻게 확인하나요?", a: "방문하실 매장의 위치와 주차 가능 여부는 예약 문의 시 확인해 주세요." },
  ],
};

export const gallery = [
  { src: photos.main, alt: "메인 룸" },
  { src: photos.roomCream, alt: "크림색 소파 룸" },
  { src: photos.seating, alt: "좌석 공간" },
  { src: photos.roomBlue, alt: "블루 톤의 룸" },
  { src: photos.roomGreen, alt: "그린 포인트 룸" },
];

export const closing = {
  title: "예약과 방문 안내는 한실장에게",
  note: "방문 날짜 · 시간 · 인원을 함께 남겨주세요.",
};
