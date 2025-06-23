/**
 * 指定した日付を「YYYY/MM/DD HH:mm」の形で返す
 *
 * @param date - Date | string | number
 *   - Date インスタンス
 *   - ISO 文字列や “2025-06-24T01:27:00+09:00” のような文字列
 *   - UNIX エポックミリ秒（number）
 * @param locale  - 既定 'ja-JP'
 * @param timeZone - 既定 'Asia/Tokyo'
 *
 * @example
 * formatPrettyDate(new Date());               // "2025/06/24 01:27"
 * formatPrettyDate('2025-06-24T01:27:00');    // "2025/06/24 01:27"
 * formatPrettyDate(1750724820000);            // "2025/06/24 01:27"
 */
export function formatPrettyDate(
  date,
  locale = 'ja-JP',
  timeZone = 'Asia/Tokyo',
) {
  // Date に変換（既に Date ならそのまま）
  const d = date instanceof Date ? date : new Date(date)

  // 無効日付チェック
  if (isNaN(d.getTime())) return ''

  // Intl.DateTimeFormat でフォーマット
  return new Intl.DateTimeFormat(locale, {
    year:   'numeric',
    month:  '2-digit',
    day:    '2-digit',
    timeZone,
  }).format(d)
}
