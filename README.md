# TruckSim Telemetry to TXT
A simple tool to get telemetry data from ETS2 and ATS written to a text file

## Prerequisites
Download and install the 󠀠󠀠󠀠󠀠[scs-sdk-plugin](https://github.com/RenCloud/scs-sdk-plugin) by [RenCloud](https://github.com/RenCloud) in your ETS2 and/or ATS plugins folder

## How to use
Create a `template.txt` file with the desired content<br/>
Example:
```txt
Truck: {truck.make.name} {truck.model.name}
Speed: {truck.speed.kph} km/h
Destination: {job.destination.city.name} {job.destination.company.name}
Cargo: {job.cargo.name}
```

Run the executable with the specified template and output file.<br/>
Example: `./trucksim-telemetry-to-txt.exe --template-path ./template.txt --output-path ./output.txt`

### Formatting
If wanting to format the values in a particular way you can do so by including javascript logic next to it<br/>
Example
```txt
Fuel: {truck.fuel.value | value => Math.round(value)} Liters
Trailer damage: {trailer.damage.total | value => Math.floor(value * 100)}%
Remaining distance: {navigation.distance | value => Math.round(value / 1000).toLocaleString() + 'km'}
Trailer attached: {trailer.attached | value => value === 'true' ? 'YES' : 'NO'}
```
Output
```txt
Fuel: 298 Liters
Trailer damage: 14%
Remaining distance: 78km
Trailer attached: YES
```

## Options
`--template-path <path>`  Path to template<br/>
`--output-path <path>`    Path to output text file<br/>
`--interval <number>`     Update interval in milliseconds<br/>

## Typedefs
A list of typedefs that can be used in the template file can be found [here](typedefs.js)