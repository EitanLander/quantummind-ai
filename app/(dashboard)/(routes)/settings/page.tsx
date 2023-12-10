import { Heading } from '@/components/heading'
import { SubscriptionButton } from '@/components/subscription-button';
import { checkSubscription } from '@/lib/subscription'
import { Settings } from 'lucide-react'

const SettingsPage = async () => {
    const isPro = await checkSubscription();
  return (
    <div className="text-right">
        <Heading
            title="הגדרות"
            description='הגדרות המשתמש שלכם'
            icon={Settings}
            iconColor='text-gray-700'
            bgColor='bg-gray-700/10'
        />
        <div className='px-4 lg:px-8 space-y-4'>
            <div className='text-muted-foreground text-sm font-semibold text-gray-900'>
                {isPro ? "אתה מנוי קוואנטום פרו" : "אתה עדיין לא מנוי בקוואנטום פרו"}
            </div>
            <SubscriptionButton isPro={isPro} />
        </div>
    </div>
  )
}

export default SettingsPage
