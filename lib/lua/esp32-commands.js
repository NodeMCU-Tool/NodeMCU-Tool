// Based on @juju2143's work

// lua command templates - central location for easier debugging
const lua_commands = {
    // connection info echo command,
    echo: 'print("echo1337")',

    // info command (flash id)
    // v2 => v3 changed from list to table!
    nodeInfoLegacy: 'print(node.info("hw"));',

    // nodemcu >=3x info command
    nodeInfo3: 'for k,v in pairs(node.info("?")) do print(k,v) end;',

    // chipid info
    chipid: 'print(node.chipid and node.chipid());',

    // chip model
    model: 'print(node.chipmodel and node.chipmodel())',

    // file system info
    fsInfo: 'print(file.fsinfo())',

    // format the file system
    fsFormat: 'file.format()',

    // compile a remote file
    compile: 'node.compile("?")',

    // run a file
    run: 'dofile("?")',

    // soft-reset
    reset: 'node.restart()',

    // list files on SPIFFS
    listFiles: 'local l={}for k,v in pairs(file.list())do l[#l+1]=("%s:%d"):format(k,v)end;print(table.concat(l,";"))',

    // file open
    fileOpen: 'local open=file.open or io.open;__f=open("?", "?") print(__f)',

    // close a opened file
    fileClose: '__f:close() __f=nil',

    // remove file
    fileRemove: 'file.remove("?")',

    // file close & flush
    fileCloseFlush: '__f:flush(f) __f:close() __f=nil',

    // read file content
    fileRead: 'local b=encoder and encoder.toBase64 __nmtread(b)',

    // helper function to write hex/base64 encoded content to file @see docs/TransferEncoding.md
    transferWriteHelper: "if encoder and encoder.fromBase64 then _G.__nmtwrite = function(s) __f:write(encoder.fromBase64(s)) end print('b') else _G.__nmtwrite = function(s) for c in s:gmatch('..') do __f:write(string.char(tonumber(c, 16))) end end print('h') end",

    // helper function to read hex/base64 encoded content from file  @see docs/TransferEncoding.md
    transferReadHelper: "function __nmtread(b)while true do c=__f:read(b and 240 or 1)if c==nil then print''break end;local d=b and encoder.toBase64(c)or string.format('%02X',string.byte(c))if console then console.write(d)else uart.write(0,d)end end print''end",
};

module.exports = lua_commands;
