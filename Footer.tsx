
export default function Footer(){
  return (
    <footer className="mt-12 border-t border-gray-100 bg-transparent">
      <div className="container-max py-8 text-center small-muted">
        © {new Date().getFullYear()} AkhCheck — Built with care. Privacy-first · Halal-friendly
      </div>
    </footer>
  )
}
