/**
 * string.ts
 *  - A collection of string-related processing.
 *
 * @author dencomm inc.
 * @version 1.0.0
 */

// 유효값 반환
export const avoidNull = <T>(obj: T): T | string => {
  if (obj !== undefined && obj !== 'undefined' && obj !== null && obj !== 'null' && obj !== '') return obj
  else return '' as string
}

// 문자열 패턴 적용
export const numberFormat = (data: string, pattern: string): string => {
  if (!data) return ''

  const numericData = data.replace(/[^0-9]/g, '')
  let result = ''
  let patternIndex = 0

  for (let i = 0; i < numericData.length; i++) {
    const digit = numericData.charAt(i)
    const formatChar = pattern.charAt(i + patternIndex)

    if (formatChar !== '#') {
      result += formatChar
      patternIndex++
    }

    result += digit
  }

  return result
}
