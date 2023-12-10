"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "שלום",
    avatar: "S",
    title: "מתכנת פרונט-אנד",
    description: "חיפשתי הרבה זמן אתר של בינה מלאכותית שיכלול הכל במקום אחד , ובקוונטום מצאתי הכל",
  },
  {
    name: "אלכס",
    avatar: "A",
    title: "יוצר תוכן ויוטיובר",
    description: "חיפשתי הרבה זמן אתר של בינה מלאכותית שיכלול הכל במקום אחד , ובקוונטום מצאתי הכל",
  },
  {
    name: "דניאל",
    avatar: "D",
    title: "מהנדס תוכנה",
    description: "מצאתי בקוונטום את הכלי האולטימטיבי לפתרון בעיות ובניית פרויקטים טכנולוגיים.",
  },
  {
    name: "שירה",
    avatar: "S",
    title: "מעצבת גרפית",
    description: "השירות בקוונטום הוא פשוט מדהים! מערכת השיחה המבוססת על בינה מלאכותית מספקת תשובות מדויקות ומהירות.",
  },
];

export const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
          <h2 className="text-center text-4xl text-white font-extrabold mb-10">ביקורות</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {testimonials.map((item) => (
              <Card key={item.description} className="bg-[#192339] border-none text-white">
                <CardHeader>
                  <CardTitle className="gap-x-2 text-right flex items-center">
                      <div className=" bg-gradient-to-r from-purple-400 to-pink-500 w-10 h-10 rounded-full flex items-center justify-center text-white mr-auto">
                        {item.avatar}
                      </div>
                    <div className="flex items-center">
                      <div>
                        <p className="text-lg">{item.name}</p>
                        <p className="text-zinc-400 text-sm">{item.title}</p>
                      </div>
                    </div>
                  </CardTitle>
                  <CardContent className="pt-4 px-0 text-right">{item.description}</CardContent>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      );
    };