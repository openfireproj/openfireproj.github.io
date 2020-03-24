function load(lib) {
    return import(`./equations/${lib}`)
}

export default load;
