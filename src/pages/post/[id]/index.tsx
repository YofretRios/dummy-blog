import React from "react";
import { useRouter } from 'next/router'

export default function Posts() {
  const router = useRouter()
  const { id } = router.query

  console.log(id)
  return <main></main>;
}