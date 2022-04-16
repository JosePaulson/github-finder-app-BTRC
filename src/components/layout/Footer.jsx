function Footer() {
    const rightsYear = new Date().getFullYear()
    return ( 
        <div className="bg-neutral text-neutral-content py-4">
            <p className="text-center">Copyright &copy; {rightsYear} All rights reserved.</p>
        </div>
     );
}

export default Footer;