function Woi({par1, childern, className} ){    
    return (
        <div classaname="`text-[30px] font bold ${className}`">
            Woi {par1} {childern}
        </div>
    )
}

export default function Page(){
    return(
        <div className="bg-[red]">
            <Woi par1="dru">
                <Woi par1="Hush" className={"text-[lightblue]"}></Woi>
            </Woi>
        </div>
    )
}

{/* .map = buat membuat array baru dari array lama
arr1 ke f(x) ke arr2. map itu f(x) nya */}
export default function Page() {
const DRU = [1,2,3,4,5]
return (
    <div className="bg-[red]">
        {DRU.map(function(value, index) {
            return (
                <Woi key = {json.stringify(value, index)} nama={value}>
                    {index}
                </Woi>
            )
        }
        )}
    </div>
)
}


