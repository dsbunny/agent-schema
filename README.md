# @dsbunny/agent-schema
_ZOD_ based schema for RMM agents.

## Dependency Installation
With NodeJS package manager of choice.
```
pnpm i
```

## Building
With NodeJS build system of choice.
```
turbo build
```

## Erratum
The `getSensorValues()` API may respond with `"Unsupported or Error"` per sensor.  Also, `backlight` presents as a `string` unlike the documented example.
```
{
	"temperature": 77,
	"illuminance": "Unsupported or Error",
	"checkscreen": "Unsupported or Error",
	"rotation": "Unsupported or Error",
	"fan": "Unsupported or Error",
	"backlight": "100",
	"humidity": "Unsupported or Error"
}
```
