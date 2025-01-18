import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='justify-self-center my-5'>
        <h2 className='text-primary my-4'>There was a problem</h2>
        <p>we could not find page you were looking for.</p>
        <p className='justify-self-center'>go back to the <Link href={"/"}>Dashboard</Link></p>
    </main>
  )
}
