import request from '@/config/axios'

export interface AgentVO {
  name: string | undefined
  avatar: string | undefined
  createTime: number | undefined
  livingRoomId: string | undefined
  livingRoomName: string | undefined
}

// 查询代理列表
export const getAgentPage = async () => {
  return await request.get({ url: `/douyin/agent/list` })
}


// 创建代理
export const createAgent = async () => {
  return await request.post({ url: `/douyin/agent/create` })
}

