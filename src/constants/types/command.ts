export type SimLexCommand = {
  page: string
  type: string
  seq: number
  regx: string
  remark: string
  cmd: string
  fullCmd: string
}

export type SimLexExtract = {
  cmd: string
  cmdList: string[]
  fullCmdList: string[]
}
