"use client"

import { useEffect, useState } from "react"
import {
  MapContainer,
  TileLayer,
  Polygon,
  Popup,
  useMap,
} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import type { LatLngExpression } from "leaflet"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Building, TrendingUp, MapPin } from "lucide-react"

interface ApiRegion {
  value: number | null
  text: string
  int01: number | null
  polygon: string | null
  _level: number
}

const OBL_ID = 35 // Каракалпакстан

// Хелпер для авто-зума
function FlyToPolygon({ polygon }: { polygon: string | null }) {
  const map = useMap()
  useEffect(() => {
    if (!polygon) return
    try {
      const geo = JSON.parse(polygon)
      let coords: number[][] = []
      if (geo.type === "Polygon") {
        coords = geo.coordinates[0].map((c: number[]) => [c[1], c[0]])
      } else if (geo.type === "MultiPolygon") {
        coords = geo.coordinates[0][0].map((c: number[]) => [c[1], c[0]])
      }
      if (coords.length) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        map.fitBounds(coords as any)
      }
    } catch (e) {
      console.error("FlyToPolygon parse error:", e)
    }
  }, [polygon, map])
  return null
}

export default function RegionalMap() {
  const [districts, setDistricts] = useState<ApiRegion[]>([])
  const [mahallas, setMahallas] = useState<ApiRegion[]>([])
  const [selectedDistrict, setSelectedDistrict] = useState<ApiRegion | null>(
    null
  )
  const [selectedMahalla, setSelectedMahalla] = useState<ApiRegion | null>(
    null
  )

  // Загружаем районы области (_level=4)
  useEffect(() => {
    fetch(
      `https://api.online-mahalla.uz/api/v1/main-dashboard-public/data?obl_id=${OBL_ID}&_level=4`
    )
      .then((res) => res.json())
      .then((data) => setDistricts(data.data || []))
      .catch((err) => console.error("Districts error:", err))
  }, [])

  // Загружаем махалли выбранного района
  useEffect(() => {
    if (!selectedDistrict?.value) return

    fetch(
      `https://api.online-mahalla.uz/api/v1/main-dashboard-public/data?obl_id=${OBL_ID}&_level=4&area_id=${selectedDistrict.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          const onlyMahallas = data.data.filter((m: ApiRegion) => m.polygon)
          setMahallas(onlyMahallas)
          setSelectedMahalla(null) // сброс выбора при смене района
        }
      })
      .catch((err) => console.error("Mahallas error:", err))
  }, [selectedDistrict])

  // Парсер Polygon / MultiPolygon
  const parsePolygon = (polygon: string | null) => {
    if (!polygon) return []
    try {
      const geo = JSON.parse(polygon)
      if (geo.type === "Polygon") {
        return [
          geo.coordinates[0].map((coord: number[]) => [coord[1], coord[0]]),
        ]
      }
      if (geo.type === "MultiPolygon") {
        return geo.coordinates.map((poly: number[][][]) =>
          poly[0].map((coord: number[]) => [coord[1], coord[0]])
        )
      }
      return []
    } catch (e) {
      console.error("Polygon parse error:", e)
      return []
    }
  }

  // --- Рендер статистики справа ---
  const renderStats = () => {
    if (!selectedDistrict && !selectedMahalla) {
      return (
        <Card className="p-6 flex flex-col items-center justify-center text-center text-muted-foreground">
          <MapPin className="h-12 w-12 mb-3 text-primary" />
          <p className="text-lg font-medium">Hudud tanlang</p>
          <p className="text-sm">Statistika shu yerda chiqadi</p>
        </Card>
      )
    }

    if (selectedDistrict && !selectedMahalla) {
      return (
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">
                {selectedDistrict.text}
              </CardTitle>
              <Badge variant="outline" className="text-blue-600">
                <TrendingUp className="h-3 w-3 mr-1" />
                +4.1%
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Aholi</p>
                  <p className="font-semibold">25,000</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Building className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Bizneslar</p>
                  <p className="font-semibold">650</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )
    }

    if (selectedMahalla) {
      return (
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">
                {selectedMahalla.text}
              </CardTitle>
              <Badge variant="outline" className="text-green-600">
                <TrendingUp className="h-3 w-3 mr-1" />
                +2.4%
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Aholi</p>
                  <p className="font-semibold">1,250</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Building className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Bizneslar</p>
                  <p className="font-semibold">45</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )
    }

    return null
  }

  return (
    <section className="py-12 bg-muted/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Карта */}
        <Card className="p-4">
          <MapContainer
            center={[42.47, 59.61]}
            zoom={6}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {/* Автозум */}
            {selectedDistrict?.polygon && !selectedMahalla && (
              <FlyToPolygon polygon={selectedDistrict.polygon} />
            )}
            {selectedMahalla?.polygon && (
              <FlyToPolygon polygon={selectedMahalla.polygon} />
            )}

            {/* Районы */}
            {districts.map((d, idx) => {
              const polygons = parsePolygon(d.polygon)
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              return polygons.map((coords: LatLngExpression[], i: any) => (
                <Polygon
                  key={`district-${idx}-${i}`}
                  positions={coords as LatLngExpression[]}
                  pathOptions={{
                    fillColor:
                      selectedDistrict?.value === d.value ? "#60A5FA" : "#93C5FD",
                    fillOpacity: 0.4,
                    color:
                      selectedDistrict?.value === d.value
                        ? "#1D4ED8"
                        : "#3B82F6",
                    weight: 1,
                  }}
                  eventHandlers={{
                    click: () => setSelectedDistrict(d),
                  }}
                >
                  <Popup>{d.text}</Popup>
                </Polygon>
              ))
            })}

            {/* Махалли */}
            {mahallas.map((m, idx) => {
              const polygons = parsePolygon(m.polygon)
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              return polygons.map((coords: LatLngExpression[], i: any) => (
                <Polygon
                  key={`mahalla-${idx}-${i}`}
                  positions={coords as LatLngExpression[]}
                  pathOptions={{
                    fillColor:
                      selectedMahalla?.value === m.value
                        ? "#FCD34D"
                        : "#34D399",
                    fillOpacity: 0.5,
                    color:
                      selectedMahalla?.value === m.value ? "#B45309" : "#059669",
                    weight: selectedMahalla?.value === m.value ? 5 : 4,
                  }}
                  eventHandlers={{
                    click: () => setSelectedMahalla(m),
                  }}
                >
                  <Popup>{m.text}</Popup>
                </Polygon>
              ))
            })}
          </MapContainer>
        </Card>

        {/* Правая панель */}
        <div className="space-y-4">{renderStats()}</div>
      </div>
    </section>
  )
} 