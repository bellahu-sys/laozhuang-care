const SUPABASE_URL = 'https://kqpfsdgazbttzaieyfio.supabase.co';
const SUPABASE_ANON_KEY ='sb_publishable_1n2gYJxchuOHcz0jIn_RWQ_42-DmtLp';
const STATION_PASSCODE = 'laozhuang2026';

// 自動同步記憶登入狀態，同一台電腦輸入一次即可通行所有頁面
if (localStorage.getItem('care_auth') === 'true') {
  sessionStorage.setItem('care_auth', 'true');
} else if (sessionStorage.getItem('care_auth') === 'true') {
  localStorage.setItem('care_auth', 'true');
}