# Cookie Consent 3

## Metadata
- **Category**: Cookie Consent
- **Objective**: Grid Layout Cookie Preference
- **Use Case**: Privacy compliance with dense layout.
- **Visual Style**: Grid Modal Layout.
- **Interactivity**: Checkboxes, 2-Col Dialog.

## Description
A specialized component for managing user cookie consent and privacy preferences, ensuring compliance with global regulations.

## Source Code
```tsx
"use client";

import {
  Button,
  Label,
  Checkbox,
  DialogTrigger,
  DialogContent,
  Dialog,
} from '@/components/ui';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { BiCookie } from 'lucide-react';
import { X } from 'lucide-react';

type CookieConsent = {
  version: string;
  essential: true;
  marketing: boolean;
  personalization: boolean;
  analytics: boolean;
  timestamp: number;
};

type CookieBannerProps = {
  visible: boolean;
  onAccept: () => void;
  onDecline: () => void;
  onPreferences: () => void;
  onClose: () => void;
};

const CONSENT_VERSION = "1.0";

const getDefaultConsent = (): CookieConsent => ({
  version: CONSENT_VERSION,
  essential: true,
  marketing: false,
  personalization: false,
  analytics: false,
  timestamp: Date.now(),
});

const validateConsent = (consent: unknown): consent is CookieConsent => {
  if (typeof consent !== "object" || consent === null) return false;

  const requiredKeys = [
    "version",
    "essential",
    "marketing",
    "personalization",
    "analytics",
    "timestamp",
  ];
  return (
    requiredKeys.every((key) => key in consent) &&
    typeof (consent as CookieConsent).version === "string" &&
    typeof (consent as CookieConsent).essential === "boolean" &&
    typeof (consent as CookieConsent).marketing === "boolean" &&
    typeof (consent as CookieConsent).personalization === "boolean" &&
    typeof (consent as CookieConsent).analytics === "boolean" &&
    typeof (consent as CookieConsent).timestamp === "number"
  );
};

export const Cookie3 = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [showPreferencesButton, setShowPreferencesButton] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>(getDefaultConsent());
  const [hasConsentBeenSet, setHasConsentBeenSet] = useState(false);
  const [isBannerDismissed, setIsBannerDismissed] = useState(false);

  const applyCookieSettings = async (newConsent: CookieConsent): Promise<boolean> => {
    try {
      // Apply essential cookies (always enabled)
      // Add your essential cookies logic here

      // Apply optional cookies based on consent
      if (newConsent.marketing) {
        // Enable marketing cookies
        // Add your marketing cookies logic here
      }

      if (newConsent.analytics) {
        // Enable analytics cookies
        // Add your analytics cookies logic here
      }

      if (newConsent.personalization) {
        // Enable personalization cookies
        // Add your personalization cookies logic here
      }

      return true;
    } catch (error) {
      console.error("Error applying cookie settings:", error);
      return false;
    }
  };

  const handleConsentUpdate = async (newConsent: CookieConsent) => {
    const success = await applyCookieSettings(newConsent);
    if (success) {
      try {
        localStorage.setItem("cookieConsent", JSON.stringify(newConsent));
        setConsent(newConsent);
        setBannerVisible(false);
        setShowPreferencesButton(true);
        setHasConsentBeenSet(true);
      } catch (error) {
        console.error("Error saving cookie consent:", error);
      }
    } else {
      console.error("Failed to apply cookie settings");
    }
  };

  useEffect(() => {
    setDialogOpen(false);
    try {
      const savedConsent = localStorage.getItem("cookieConsent");
      if (savedConsent) {
        const parsed = JSON.parse(savedConsent);
        if (validateConsent(parsed)) {
          if (parsed.version !== CONSENT_VERSION) {
            setConsent(getDefaultConsent());
            setBannerVisible(true);
            setHasConsentBeenSet(false);
            return;
          }
          setConsent(parsed);
          setBannerVisible(false);
          setShowPreferencesButton(true);
          setHasConsentBeenSet(true);
        } else {
          throw new Error("Invalid consent structure");
        }
      } else {
        setConsent(getDefaultConsent());
        setBannerVisible(true);
      }
    } catch (error) {
      console.error("Error loading cookie consent:", error);
      localStorage.removeItem("cookieConsent");
      setConsent(getDefaultConsent());
      setBannerVisible(true);
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newConsent = {
      ...consent,
      timestamp: Date.now(),
    };
    await handleConsentUpdate(newConsent);
    setDialogOpen(false);
  };

  const handleAcceptAll = async () => {
    const newConsent: CookieConsent = {
      ...getDefaultConsent(),
      marketing: true,
      personalization: true,
      analytics: true,
      timestamp: Date.now(),
    };
    await handleConsentUpdate(newConsent);
  };

  const handleRejectAll = async () => {
    const newConsent: CookieConsent = {
      ...getDefaultConsent(),
      timestamp: Date.now(),
    };
    await handleConsentUpdate(newConsent);
    setDialogOpen(false);
  };

  const handleDialogOpenChange = (open: boolean) => {
    setDialogOpen(open);
    if (!open && !hasConsentBeenSet) {
      setBannerVisible(!isBannerDismissed);
      setShowPreferencesButton(isBannerDismissed);
    }
  };

  const handlePreferences = () => {
    setBannerVisible(false);
    setDialogOpen(true);
  };

  const handleCloseBanner = () => {
    setBannerVisible(false);
    setIsBannerDismissed(true);
    setShowPreferencesButton(true);
  };

  return (
    <section>
      <Dialog open={dialogOpen} onOpenChange={handleDialogOpenChange}>
        <AnimatePresence>
          {showPreferencesButton && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
 className="fixed bottom-4 left-4 md:bottom-8 md:left-8"
>
              <DialogTrigger asChild>
                <Button variant="link" size="link" iconLeft={<BiCookie className="size-6" />}>
                  Cookie preferences
                </Button>
              </DialogTrigger>
            </motion.div>
          )}
        </AnimatePresence>
        <DialogContent
          closeIconPosition="inside"
          overlayClassName="bg-[#0009]"
 className="h-fit max-h-[70vh] w-[90%] max-w-lg overflow-scroll bg-neutral-white p-8 sm:w-[95%] md:p-10 lg:w-full lg:p-12"
>
          <form onSubmit={handleSubmit}>
            <h2 className="mb-6 text-center text-2xl font-bold md:mb-8 md:text-3xl lg:text-4xl">
              Privacy Preferences
            </h2>
            <div className="h-px w-full bg-black" />
            <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-8 gap-y-6 py-8 md:grid-cols-2">
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center justify-between">
                  <Label className="text-md font-bold leading-[1.4] md:text-xl">Essential</Label>
                  <p className="font-semibold">Required</p>
                </div>
                <p>These items are required to enable basic website functionality.</p>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center justify-between">
                  <Label className="text-md font-bold leading-[1.4] md:text-xl">Marketing</Label>
                  <Checkbox
                    id="marketing"
                    checked={consent.marketing}
                    onCheckedChange={(checked: boolean) =>
                      setConsent((prev) => ({ ...prev, marketing: checked }))
                    }
                  />
                </div>
                <p>
                  These items are used to deliver advertising that is more relevant to you and your
                  interests.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center justify-between">
                  <Label className="text-md font-bold leading-[1.4] md:text-xl">
                    Personalization
                  </Label>
                  <Checkbox
                    id="personalization"
                    checked={consent.personalization}
                    onCheckedChange={(checked: boolean) =>
                      setConsent((prev) => ({ ...prev, personalization: checked }))
                    }
                  />
                </div>
                <p>
                  These items allow the website to remember choices you make (such as your user
                  name, language, or the region you are in) and provide enhanced, more personal
                  features.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center justify-between">
                  <Label className="text-md font-bold leading-[1.4] md:text-xl">Analytics</Label>
                  <Checkbox
                    id="analytics"
                    checked={consent.analytics}
                    onCheckedChange={(checked: boolean) =>
                      setConsent((prev) => ({ ...prev, analytics: checked }))
                    }
                  />
                </div>
                <p>
                  These items help the website operator understand how its website performs, how
                  visitors interact with the site, and whether there may be technical issues.
                </p>
              </div>
            </div>
            <div className="h-px w-full bg-black" />
            <div className="mt-8 flex flex-wrap gap-4 md:flex-nowrap">
              <Button onClick={handleRejectAll} variant="secondary" className="w-full">
                Reject all cookies
              </Button>
              <Button type="submit" className="w-full">
                Save preferences
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      <CookieBanner
        visible={bannerVisible}
        onAccept={handleAcceptAll}
        onDecline={handleRejectAll}
        onPreferences={handlePreferences}
        onClose={handleCloseBanner}
      />
    </section>
  );
};

const CookieBanner = ({
  visible,
  onAccept,
  onDecline,
  onPreferences,
  onClose,
}: CookieBannerProps) => {
  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.3 }}
 className="absolute bottom-8 right-8 z-[998] flex w-[calc(100%-4rem)] max-w-[40rem] items-start justify-between gap-4 border border-border-primary bg-background-primary px-6 py-8 md:pl-8 md:pr-12"
>
          <div className="flex flex-col flex-wrap gap-9 md:gap-6 lg:flex-nowrap">
            <p className="pr-4">
              By clicking "Accept", you agree to the storing of cookies on your device to enhance
              site navigation, analyze site usage, and assist in our marketing efforts. View our{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>{" "}
              for more information.
            </p>
            <div className="flex flex-none flex-wrap items-center justify-start gap-4 lg:flex-nowrap">
              <Button variant="secondary" onClick={onDecline}>
                Decline
              </Button>
              <Button onClick={onAccept}>Accept</Button>
              <Button variant="link" size="link" onClick={onPreferences}>
                Preferences
              </Button>
            </div>
          </div>
          <Button variant="link" size="link" onClick={onClose} className="absolute right-2 top-2">
            <X className="size-6" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
```

